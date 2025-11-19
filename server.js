// Backend Server for Ephemeral Token Generation and Gemini API Proxy
// This server securely handles API keys and generates short-lived tokens

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
// CORS configuration - allow all origins for development
// For production, restrict to your frontend domain
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', // '*' allows all origins (development only)
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-API-Token']
}));
app.use(express.json());

// In-memory token store (use Redis in production)
const tokenStore = new Map();

// Your Gemini API keys (store in environment variables)
const GEMINI_API_KEYS = {
    primary: process.env.GEMINI_API_KEY_PRIMARY || 'AIzaSyAnLRFiERVGZzFGFAEZ1LAQOlc9AEBm4BQ',
    secondary: process.env.GEMINI_API_KEY_SECONDARY || 'AIzaSyCBdWAJPer7XwKE89aIe2YF8PR-4ai9PhQ'
};

// Validate API keys are set
if (!GEMINI_API_KEYS.primary || GEMINI_API_KEYS.primary === 'your_primary_api_key_here') {
    console.warn('⚠️  WARNING: GEMINI_API_KEY_PRIMARY not set or using default value!');
    console.warn('⚠️  Please set GEMINI_API_KEY_PRIMARY in .env file');
}

if (!GEMINI_API_KEYS.secondary || GEMINI_API_KEYS.secondary === 'your_secondary_api_key_here') {
    console.warn('⚠️  WARNING: GEMINI_API_KEY_SECONDARY not set or using default value!');
    console.warn('⚠️  Please set GEMINI_API_KEY_SECONDARY in .env file');
}

console.log('🔑 API Keys Status:');
console.log('   Primary:', GEMINI_API_KEYS.primary ? GEMINI_API_KEYS.primary.substring(0, 20) + '...' : 'NOT SET');
console.log('   Secondary:', GEMINI_API_KEYS.secondary ? GEMINI_API_KEYS.secondary.substring(0, 20) + '...' : 'NOT SET');

// Token expiration time (15 minutes)
const TOKEN_EXPIRY_MS = 15 * 60 * 1000;

// Clean up expired tokens every 5 minutes
setInterval(() => {
    const now = Date.now();
    for (const [token, data] of tokenStore.entries()) {
        if (data.expiresAt < now) {
            tokenStore.delete(token);
        }
    }
}, 5 * 60 * 1000);

// Generate ephemeral token endpoint
app.post('/api/token/generate', (req, res) => {
    try {
        // Generate a secure random token
        const token = crypto.randomBytes(32).toString('hex');
        const expiresAt = Date.now() + TOKEN_EXPIRY_MS;
        
        // Store token with expiry and usage count
        tokenStore.set(token, {
            expiresAt,
            createdAt: Date.now(),
            usageCount: 0,
            maxUsage: 10 // Limit number of requests per token
        });
        
        res.json({
            success: true,
            token,
            expiresAt,
            expiresIn: TOKEN_EXPIRY_MS / 1000 // seconds
        });
    } catch (error) {
        console.error('Error generating token:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate token'
        });
    }
});

// Validate token middleware
function validateToken(req, res, next) {
    const token = req.headers['x-api-token'] || req.body.token;
    
    if (!token) {
        return res.status(401).json({
            success: false,
            error: 'Token required'
        });
    }
    
    const tokenData = tokenStore.get(token);
    
    if (!tokenData) {
        return res.status(401).json({
            success: false,
            error: 'Invalid or expired token'
        });
    }
    
    // Check if token expired
    if (tokenData.expiresAt < Date.now()) {
        tokenStore.delete(token);
        return res.status(401).json({
            success: false,
            error: 'Token expired'
        });
    }
    
    // Check usage limit
    if (tokenData.usageCount >= tokenData.maxUsage) {
        tokenStore.delete(token);
        return res.status(429).json({
            success: false,
            error: 'Token usage limit exceeded'
        });
    }
    
    // Increment usage count
    tokenData.usageCount++;
    req.tokenData = tokenData;
    
    next();
}

// Proxy endpoint for checking available models
app.post('/api/gemini/models', validateToken, async (req, res) => {
    try {
        // Use primary API key
        const apiKey = GEMINI_API_KEYS.primary;
        
        // Check if API key is valid
        if (!apiKey || apiKey === 'your_primary_api_key_here') {
            return res.status(500).json({
                success: false,
                error: 'API Key not configured. Please set GEMINI_API_KEY_PRIMARY in .env file'
            });
        }
        
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        console.log('📡 Fetching models from:', url.replace(/key=[^&]+/, 'key=***'));
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            console.error('❌ Gemini API Error:', data);
            return res.status(response.status).json({
                success: false,
                error: data.error?.message || `Failed to fetch models: ${response.status} ${response.statusText}`
            });
        }
        
        res.json({
            success: true,
            models: data.models || []
        });
    } catch (error) {
        console.error('Error fetching models:', error);
        res.status(500).json({
            success: false,
            error: `Failed to fetch models: ${error.message}`
        });
    }
});

// Proxy endpoint for generating content
app.post('/api/gemini/generate', validateToken, async (req, res) => {
    try {
        const { prompt, model = 'gemini-2.5-flash' } = req.body;
        
        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: 'Prompt is required'
            });
        }
        
        // Determine which API key to use based on model or round-robin
        const apiKey = GEMINI_API_KEYS.primary; // Can implement round-robin here
        
        // Check if API key is valid
        if (!apiKey || apiKey === 'your_primary_api_key_here') {
            return res.status(500).json({
                success: false,
                error: 'API Key not configured. Please set GEMINI_API_KEY_PRIMARY in .env file'
            });
        }
        
        // List of models to try in order
        const modelsToTry = [
            'gemini-2.5-flash',
            'gemini-2.0-flash',
            'gemini-2.5-pro',
            'gemini-flash-latest',
            'gemini-pro-latest'
        ];
        
        let lastError = null;
        
        // Try each model until one works
        for (const modelName of modelsToTry) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
                
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: prompt
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.7,
                            topK: 40,
                            topP: 0.95,
                            maxOutputTokens: 2048,
                        }
                    })
                });
                
                const data = await response.json();
                
                if (!response.ok) {
                    lastError = data.error?.message || `API request failed with status ${response.status}`;
                    continue;
                }
                
                if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                    lastError = 'Invalid response from API';
                    continue;
                }
                
                // Success!
                return res.json({
                    success: true,
                    model: modelName,
                    text: data.candidates[0].content.parts[0].text,
                    usageMetadata: data.usageMetadata
                });
                
            } catch (error) {
                lastError = error.message;
                continue;
            }
        }
        
        // All models failed
        res.status(500).json({
            success: false,
            error: `All API attempts failed. Last error: ${lastError}`
        });
        
    } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate content'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔐 Token generation: POST http://localhost:${PORT}/api/token/generate`);
});

