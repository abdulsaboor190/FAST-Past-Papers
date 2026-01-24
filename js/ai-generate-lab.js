// Enhanced AI Generate functionality for Programming Fundamentals Lab
class AIGenerateLab {
    constructor() {
        // Hardcoded API key - no need for students to enter it
        this.apiKey = 'AIzaSyCAyoOn5G2BD9-x__mhOHPNFpQHxZ36YCg';
        this.sampleQuestions = null;
        this.currentTopic = null;
        this.availableModels = null;
    }

    // Initialize the AI Generate feature
    async init() {
        await this.loadSampleQuestions();
        this.setupUI();
    }

    // Load sample questions from JSON file
    async loadSampleQuestions() {
        try {
            const response = await fetch('../pfLabSampleQuestions.json');
            if (!response.ok) {
                throw new Error('Failed to load sample questions');
            }
            this.sampleQuestions = await response.json();
            console.log('Lab Sample questions loaded:', Object.keys(this.sampleQuestions));
        } catch (error) {
            console.error('Error loading sample questions:', error);
            // Fallback sample questions
            this.sampleQuestions = {
                "Input/Output Operations": [
                    "Write a C++ program that takes two integers from the user and displays their sum.",
                    "Create a program that reads a student's name and marks, then displays them."
                ],
                "Loops": [
                    "Write a C++ program to print numbers from 1 to 10 using a for loop.",
                    "Create a program to find the sum of first 10 natural numbers."
                ],
                "Functions": [
                    "Write a C++ function to check if a number is even or odd.",
                    "Create a function to calculate the square of a number."
                ]
            };
        }
    }

    // Check available models
    async checkAvailableModels() {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${this.apiKey}`);
            if (response.ok) {
                const data = await response.json();
                this.availableModels = data.models || [];
                console.log('Available models:', this.availableModels.map(m => m.name));
                return this.availableModels;
            }
        } catch (error) {
            console.error('Error fetching models:', error);
        }
        return null;
    }

    // Setup UI elements
    setupUI() {
        console.log('Lab AI Generate UI setup complete');
    }

    // Show topic selection modal (simplified - no API key input needed)
    showTopicSelection() {
        const topics = Object.keys(this.sampleQuestions || {});
        
        if (topics.length === 0) {
            alert('No topics available. Please check the sample questions file.');
            return;
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'ai-modal';
        modal.innerHTML = `
            <div class="ai-modal-content">
                <div class="ai-modal-header">
                    <h2>🤖 AI Generate Practice Questions</h2>
                    <button class="ai-modal-close">&times;</button>
                </div>
                <div class="ai-modal-body">
                    <p class="ai-modal-description">
                        Select a topic from Programming Fundamentals Lab to generate AI-powered practice questions:
                    </p>
                    <div class="topic-selection">
                        ${topics.map(topic => `
                            <button class="topic-btn" data-topic="${topic}">
                                <span style="font-size: 1.1rem; font-weight: 700;">${topic}</span>
                                <span style="font-size: 0.85rem; color: #666; display: block; margin-top: 0.3rem;">
                                    Click to generate
                                </span>
                            </button>
                        `).join('')}
                    </div>
                    <div style="margin-top: 1.5rem; padding: 1rem; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 12px; border-left: 4px solid #667eea;">
                        <p style="margin: 0; font-size: 0.9rem; color: #1976d2;">
                            ✨ <strong>How it works:</strong> Select any topic above and we'll instantly generate 5 practice questions similar to exam patterns!
                        </p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal handlers
        const closeBtn = modal.querySelector('.ai-modal-close');
        const closeModal = () => {
            modal.remove();
        };
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // ESC key to close
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);

        // Topic selection handlers - just click and generate!
        const topicButtons = modal.querySelectorAll('.topic-btn');
        topicButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const topic = btn.getAttribute('data-topic');
                this.generateQuestions(topic, modal);
            });
        });
    }

    // Generate questions using Gemini API
    async generateQuestions(topic, modal) {
        const sampleQuestions = this.sampleQuestions[topic];
        if (!sampleQuestions || sampleQuestions.length === 0) {
            alert('No sample questions found for this topic.');
            return;
        }

        this.currentTopic = topic;

        // Update modal to show loading state
        const modalBody = modal.querySelector('.ai-modal-body');
        modalBody.innerHTML = `
            <div class="ai-loading">
                <div class="ai-spinner"></div>
                <p style="font-size: 1.2rem; color: #667eea; font-weight: 600; margin: 1rem 0;">
                    🧠 AI is analyzing ${topic}...
                </p>
                <p style="font-size: 1rem; color: #333; margin: 0.5rem 0;">
                    Generating practice questions for you
                </p>
                <p style="font-size: 0.85rem; color: #999; margin-top: 0.5rem;">
                    This may take 5-10 seconds
                </p>
            </div>
        `;

        try {
            // Prepare prompt for Gemini
            const prompt = this.createPrompt(topic, sampleQuestions);

            // Call Gemini API
            const generatedQuestions = await this.callGeminiAPI(prompt);

            // Display generated questions
            this.displayQuestions(topic, generatedQuestions, modal);
        } catch (error) {
            console.error('Error generating questions:', error);
            modalBody.innerHTML = `
                <div class="ai-error">
                    <h3>❌ Error Generating Questions</h3>
                    <p style="color: #666; margin: 1rem 0;">
                        ${error.message || 'An unexpected error occurred. Please try again.'}
                    </p>
                    <p style="font-size: 0.9rem; color: #999; margin-bottom: 1.5rem;">
                        If the problem persists, please contact support.
                    </p>
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateLab.showTopicSelection();">
                        🔄 Try Again
                    </button>
                </div>
            `;
        }
    }

createPrompt(topic, sampleQuestions) {
        const samplesText = sampleQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
        
        return `You are an expert Programming Fundamentals instructor specializing in C++ programming.

**Task:** Analyze the following sample questions for the topic "${topic}" and generate 5 NEW practice questions.

**Sample Questions for ${topic}:**
${samplesText}

**CRITICAL INSTRUCTIONS - READ CAREFULLY:**

1. **DIFFICULTY LEVEL MATCHING (HIGHEST PRIORITY):**
   - CAREFULLY analyze the complexity and difficulty of the sample questions above
   - Your new questions MUST match the EXACT same difficulty level as the samples
   - If samples use simple variables and basic operations, DO NOT create complex nested loops or advanced logic
   - If samples have short code (5-10 lines), keep your code similarly short
   - If samples test basic concepts, DO NOT test advanced concepts
   - Match the cognitive load: simple samples = simple questions, complex samples = complex questions

5. **CODE INCLUSION RULES:**
   - ALWAYS include complete, compilable C++ code when the question asks for output/tracing
   - Include ALL necessary headers (#include <iostream>, etc.)
   - Include the complete main() function
   - Include all variable declarations and logic
   - Do NOT use placeholders like "[code here]" or "[...]"
   - Keep code complexity aligned with sample questions

6. **INPUT/OUTPUT EXAMPLES:**
   - For implementation questions, provide ONE sample input and ONE sample output
   - Format as: "Sample Input: [input]" and "Sample Output: [output]"
   - For code output questions, the output should be shown after the code

**Generation Requirements:**
- Generate exactly 4 new questions
- **MATCH THE EXACT DIFFICULTY LEVEL** of the sample questions (most important!)
- Match the style, format, and complexity of the samples
- Each question must be COMPLETE and SELF-CONTAINED
- If a question needs code, the code MUST be included in the question text
- Never leave code sections empty or incomplete
- Use similar variable names, logic patterns, and problem structures as the samples

**Output Format:**
Provide ONLY the 4 questions, numbered 1-4. Each question should include ALL necessary code, examples, and details within the question text itself. Do not add explanations or answers.

Generate 4 new practice questions for ${topic}:`;
    }

    // Call Gemini API with multiple endpoint attempts
    async callGeminiAPI(prompt) {
        // First, try to check available models
        const models = await this.checkAvailableModels();
        console.log('Checking models returned:', models);

        // Try different API endpoints - using models that are actually available
        const attempts = [
            {
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.apiKey}`,
                name: 'gemini-2.5-flash'
            },
            {
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`,
                name: 'gemini-2.0-flash'
            },
            {
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${this.apiKey}`,
                name: 'gemini-2.5-pro'
            },
            {
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${this.apiKey}`,
                name: 'gemini-flash-latest'
            },
            {
                url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-latest:generateContent?key=${this.apiKey}`,
                name: 'gemini-pro-latest'
            }
        ];

        let lastError = null;

        for (const attempt of attempts) {
            try {
                console.log(`🔄 Trying: ${attempt.name}`);

                const response = await fetch(attempt.url, {
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
                            maxOutputTokens: 2048, // Increased to accommodate code blocks and examples
                        }
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    lastError = data.error?.message || `API request failed with status ${response.status}`;
                    console.log(`❌ ${attempt.name} failed:`, lastError);
                    continue;
                }

                if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                    console.log(`⚠️ ${attempt.name} returned invalid response:`, data);
                    continue;
                }

                console.log(`✅ SUCCESS with: ${attempt.name}`);
                const generatedText = data.candidates[0].content.parts[0].text;
                console.log('Generated text preview:', generatedText.substring(0, 500));
                console.log('Full generated text length:', generatedText.length);
                console.log('Full generated text:', generatedText); // Log full response for debugging
                
                // Parse questions from the response
                const questions = this.parseQuestions(generatedText);
                
                if (questions.length === 0) {
                    throw new Error('Failed to generate valid questions. Please try again.');
                }
                
                return questions;

            } catch (error) {
                console.error(`💥 Error with ${attempt.name}:`, error);
                lastError = error.message;
                continue;
            }
        }

        // If all attempts failed, show detailed error
        const errorMsg = `All API attempts failed. Last error: ${lastError}\n\nPlease check:\n1. API key is valid\n2. API key has Gemini API enabled\n3. You have internet connection\n\nCheck browser console for details.`;
        throw new Error(errorMsg);
    }

    // Parse questions from API response
    parseQuestions(text) {
        console.log('Raw response from Gemini:', text.substring(0, 500)); // Debug log
        
        const questions = [];
        const lines = text.split('\n');
        let currentQuestion = '';
        let inQuestion = false;
        
        // Process line by line to capture complete questions including code
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            
            // Check if this line starts a new question (number followed by dot/paren)
            const questionStartMatch = line.match(/^(\d+)[\.\)]\s*(.+)/);
            
            if (questionStartMatch) {
                // Save previous question if it exists
                if (currentQuestion.trim().length > 30) {
                    questions.push(currentQuestion.trim());
                }
                
                // Start new question with the text after the number
                currentQuestion = questionStartMatch[2];
                inQuestion = true;
            } else if (inQuestion) {
                // Continue building current question
                // Check if this might be the start of the next question (look ahead)
                const nextQuestionMatch = line.match(/^\d+[\.\)]\s*/);
                if (nextQuestionMatch && i > 0) {
                    // This looks like a new question, save current one
                    if (currentQuestion.trim().length > 30) {
                        questions.push(currentQuestion.trim());
                    }
                    currentQuestion = line.replace(/^\d+[\.\)]\s*/, '');
                } else {
                    // Continue current question
                    currentQuestion += '\n' + line;
                }
            } else {
                // We haven't found a question yet, but this might be continuation
                // Check if previous line was a question start
                if (i > 0 && lines[i-1].match(/^\d+[\.\)]\s*/)) {
                    currentQuestion = line;
                    inQuestion = true;
                }
            }
        }
        
        // Add the last question
        if (currentQuestion.trim().length > 30) {
            questions.push(currentQuestion.trim());
        }
        
        // If we didn't get enough questions, try alternative parsing
        if (questions.length < 5) {
            // Try splitting by numbered patterns more aggressively
            const parts = text.split(/(?=\n\d+[\.\)]\s+)/);
            for (const part of parts) {
                const cleaned = part.replace(/^\d+[\.\)]\s+/, '').trim();
                if (cleaned.length > 30 && !questions.includes(cleaned)) {
                    questions.push(cleaned);
                }
            }
        }
        
        // Remove duplicates and filter
        const uniqueQuestions = [];
        const seen = new Set();
        for (const q of questions) {
            const key = q.substring(0, 100).toLowerCase(); // Use first 100 chars as key
            if (!seen.has(key) && q.length > 30) {
                seen.add(key);
                uniqueQuestions.push(q);
            }
        }
        
        console.log(`Parsed ${uniqueQuestions.length} questions`); // Debug log
        
        // Validate questions - check if code output questions have code
        const validatedQuestions = uniqueQuestions.map((q, index) => {
            const lowerQ = q.toLowerCase();
            // Check if question asks for output but might be missing code
            if ((lowerQ.includes('write the output') || 
                 lowerQ.includes('find the output') || 
                 lowerQ.includes('dry run') ||
                 lowerQ.includes('trace the code')) &&
                !q.includes('#include') && 
                !q.includes('int main') &&
                !q.includes('cout') &&
                !q.includes('printf')) {
                console.warn(`Question ${index + 1} asks for output but may be missing code:`, q.substring(0, 200));
            }
            return q;
        });
        
        return validatedQuestions.slice(0, 5);
    }

    // Display generated questions
    displayQuestions(topic, questions, modal) {
        const modalBody = modal.querySelector('.ai-modal-body');
        
        // Helper function to format question text with code blocks
        const formatQuestion = (text) => {
            // Detect if text contains C++ code patterns
            const hasCode = text.includes('#include') || text.includes('int main') || 
                           text.includes('cout') || text.includes('printf') ||
                           text.includes('using namespace') || text.includes('return 0');
            
            // First, extract markdown code blocks if present
            const codeBlocks = [];
            let formatted = text.replace(/```[\s\S]*?```/g, (match) => {
                const id = `CODE_BLOCK_${codeBlocks.length}`;
                const codeContent = match.replace(/```[a-z]*\n?/g, '').replace(/```/g, '');
                codeBlocks.push(codeContent);
                return id;
            });
            
            // If no markdown blocks but has code, try to detect and format code sections
            if (hasCode && codeBlocks.length === 0) {
                // Look for code patterns and format them
                const codePattern = /(#include[\s\S]*?(?=\n\n|\n\d+[\.\)]|$))/g;
                const codeMatches = [...formatted.matchAll(codePattern)];
                
                codeMatches.forEach((match, index) => {
                    const id = `CODE_BLOCK_${codeBlocks.length}`;
                    codeBlocks.push(match[1].trim());
                    formatted = formatted.replace(match[0], id);
                });
            }
            
            // Escape HTML in non-code parts
            formatted = formatted
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            
            // Restore code blocks with proper formatting
            codeBlocks.forEach((code, index) => {
                const escapedCode = code
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                formatted = formatted.replace(
                    `CODE_BLOCK_${index}`,
                    `<pre style="background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; margin: 15px 0; font-family: 'Courier New', monospace; font-size: 0.9em; white-space: pre-wrap; border-left: 4px solid #667eea; line-height: 1.5;"><code>${escapedCode}</code></pre>`
                );
            });
            
            return formatted;
        };
        
        modalBody.innerHTML = `
            <div class="ai-results">
                <div class="ai-results-header">
                    <h2>✨ AI Generated: ${topic} Questions</h2>
                    <button class="ai-modal-close" onclick="this.closest('.ai-modal').remove()">&times;</button>
                </div>
                <div class="ai-questions-list">
                    ${questions.map((q, i) => `
                        <div class="ai-question-item">
                            <div class="ai-question-number">${i + 1}</div>
                            <div class="ai-question-text" style="white-space: pre-wrap; font-family: inherit;">${formatQuestion(q)}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="ai-actions">
                    <button class="ai-copy-btn" data-questions='${JSON.stringify(questions).replace(/'/g, "&apos;")}'>
                        📋 Copy All Questions
                    </button>
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateLab.showTopicSelection();" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                        🔄 Generate More
                    </button>
                    <button class="ai-close-btn" onclick="this.closest('.ai-modal').remove()">
                        Close
                    </button>
                </div>
            </div>
        `;

        // Add event listener for copy button
        const copyBtn = modalBody.querySelector('.ai-copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => {
                const questionsData = JSON.parse(copyBtn.getAttribute('data-questions').replace(/&apos;/g, "'"));
                this.copyQuestions(questionsData);
            });
        }
    }

    // Copy questions to clipboard
    copyQuestions(questions) {
        const text = questions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
        
        navigator.clipboard.writeText(text).then(() => {
            const copyBtn = document.querySelector('.ai-copy-btn');
            if (copyBtn) {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '✓ Copied to Clipboard!';
                copyBtn.style.background = 'linear-gradient(135deg, #059669, #10b981)';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalText;
                    copyBtn.style.background = '';
                }, 2500);
            }
        }).catch(err => {
            console.error('Failed to copy:', err);
            alert('❌ Failed to copy questions. Please select and copy manually.');
        });
    }
}

// Initialize global instance for Lab
window.aiGenerateLab = new AIGenerateLab();

