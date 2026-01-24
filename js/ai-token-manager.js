// AI Token Manager - Handles ephemeral token generation and API calls
// This utility manages secure token-based API communication with the backend

class AITokenManager {
    constructor(apiBaseUrl = 'http://localhost:3000/api') {
        this.apiBaseUrl = apiBaseUrl;
        this.token = null;
        this.tokenExpiresAt = null;
        this.tokenGenerationPromise = null;
    }

    // Generate or get existing valid token
    async getToken() {
        // If we have a valid token, return it
        if (this.token && this.tokenExpiresAt && Date.now() < this.tokenExpiresAt) {
            return this.token;
        }

        // If token generation is already in progress, wait for it
        if (this.tokenGenerationPromise) {
            return await this.tokenGenerationPromise;
        }

        // Generate new token
        this.tokenGenerationPromise = this._generateToken();
        try {
            const token = await this.tokenGenerationPromise;
            return token;
        } finally {
            this.tokenGenerationPromise = null;
        }
    }

    // Generate a new ephemeral token from backend
    async _generateToken() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/token/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to generate token: ${response.status}`);
            }

            const data = await response.json();
            
            if (!data.success) {
                throw new Error(data.error || 'Failed to generate token');
            }

            this.token = data.token;
            this.tokenExpiresAt = data.expiresAt;

            console.log('✅ Ephemeral token generated, expires in', data.expiresIn, 'seconds');
            return this.token;
        } catch (error) {
            console.error('❌ Error generating token:', error);
            throw new Error('Failed to generate API token. Please check your connection.');
        }
    }

    // Check available models (proxied through backend)
    async checkAvailableModels() {
        try {
            const token = await this.getToken();
            const response = await fetch(`${this.apiBaseUrl}/gemini/models`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Token': token
                }
            });

            if (!response.ok) {
                // If token expired, try once more
                if (response.status === 401) {
                    this.token = null;
                    this.tokenExpiresAt = null;
                    const newToken = await this.getToken();
                    
                    const retryResponse = await fetch(`${this.apiBaseUrl}/gemini/models`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Token': newToken
                        }
                    });
                    
                    if (!retryResponse.ok) {
                        const errorData = await retryResponse.json();
                        throw new Error(errorData.error || 'Failed to fetch models');
                    }
                    
                    const retryData = await retryResponse.json();
                    return retryData.models || [];
                }
                
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch models');
            }

            const data = await response.json();
            return data.models || [];
        } catch (error) {
            console.error('Error checking available models:', error);
            return null;
        }
    }

    // Generate content using Gemini API (proxied through backend)
    async generateContent(prompt, model = 'gemini-2.5-flash') {
        try {
            const token = await this.getToken();
            
            const response = await fetch(`${this.apiBaseUrl}/gemini/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Token': token
                },
                body: JSON.stringify({
                    prompt,
                    model
                })
            });

            if (!response.ok) {
                // If token expired, try once more
                if (response.status === 401) {
                    this.token = null;
                    this.tokenExpiresAt = null;
                    const newToken = await this.getToken();
                    
                    const retryResponse = await fetch(`${this.apiBaseUrl}/gemini/generate`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-API-Token': newToken
                        },
                        body: JSON.stringify({
                            prompt,
                            model
                        })
                    });
                    
                    if (!retryResponse.ok) {
                        const errorData = await retryResponse.json();
                        throw new Error(errorData.error || 'Failed to generate content');
                    }
                    
                    const retryData = await retryResponse.json();
                    return retryData.text;
                }
                
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate content');
            }

            const data = await response.json();
            return data.text;
        } catch (error) {
            console.error('Error generating content:', error);
            throw error;
        }
    }

    // Clear current token (force refresh on next request)
    clearToken() {
        this.token = null;
        this.tokenExpiresAt = null;
        this.tokenGenerationPromise = null;
    }

    // Set custom API base URL (for production)
    setApiBaseUrl(url) {
        this.apiBaseUrl = url.replace(/\/$/, ''); // Remove trailing slash
        this.clearToken(); // Clear token when URL changes
    }
}

// Create global instance
// IMPORTANT: For production, change the API base URL below to your backend server URL
// 
// Examples:
// - Development: 'http://localhost:3000/api'
// - Production: 'https://your-backend-domain.com/api' or 'https://api.yoursite.com/api'
//
// To change for production, simply replace 'http://localhost:3000/api' with your production URL

(function() {
    // Auto-detect if we're on localhost or production
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname === '';
    
    // Set API base URL - CHANGE THIS FOR PRODUCTION!
    const API_BASE_URL = isLocalhost 
        ? 'http://localhost:3000/api'  // Development: local backend server
        : window.location.origin + '/api';  // Production: same domain as frontend (adjust if backend is different domain)
    
    // Alternative for production (uncomment and set your backend URL):
    // const API_BASE_URL = 'https://your-backend-domain.com/api';
    
    console.log('🔧 AI Token Manager initializing with API URL:', API_BASE_URL);
    
    // Initialize the token manager
    window.aiTokenManager = new AITokenManager(API_BASE_URL);
    
    console.log('✅ AI Token Manager loaded successfully');
})();

