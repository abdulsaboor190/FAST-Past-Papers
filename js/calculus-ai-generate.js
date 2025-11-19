// Enhanced AI Generate functionality for Calculus
class CalculusAIGenerate {
    constructor() {
        // Hardcoded API key - no need for students to enter it
        this.apiKey = 'AIzaSyDHfrTgY0HUxg53Hpb8ERdc5kKhAfCP6tI';
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
            const response = await fetch('../calculusSampleQuestions.json');
            if (!response.ok) {
                throw new Error('Failed to load sample questions');
            }
            this.sampleQuestions = await response.json();
            console.log('Calculus Sample questions loaded:', Object.keys(this.sampleQuestions));
        } catch (error) {
            console.error('Error loading sample questions:', error);
            // Fallback sample questions
            this.sampleQuestions = {
                "Limits and Continuity": [
                    "Evaluate the limit: lim(x→2) (x² - 4)/(x - 2). Show all steps and explain whether the function is continuous at x = 2.",
                    "Find lim(x→0) (sin(3x))/x using appropriate limit theorems. Verify your answer graphically.",
                    "Determine if f(x) = {x² + 1, x < 1; 2x, x ≥ 1} is continuous at x = 1. Use the three-part definition of continuity.",
                    "Evaluate lim(x→∞) (3x² + 2x - 1)/(x² - 5x + 2) and identify any horizontal asymptotes.",
                    "Use the squeeze theorem to find lim(x→0) x²·cos(1/x). Show the bounding functions clearly."
                ],
                "Derivatives": [
                    "Find dy/dx for y = x³·sin(x) using the product rule. Simplify your answer.",
                    "Differentiate f(x) = (2x + 1)/(x² - 3) using the quotient rule. Find the critical points.",
                    "Find the derivative of y = sin(x²·e^x) using the chain rule. Show each step.",
                    "Calculate f'(x) for f(x) = x^x by taking the natural logarithm first (logarithmic differentiation).",
                    "Find the equation of the tangent line to the curve y = x³ - 3x² + 2 at the point (1, 0)."
                ],
                "Applications of Derivatives": [
                    "A rectangular box with a square base is to have a volume of 1000 cm³. Find the dimensions that minimize the surface area.",
                    "Find the absolute maximum and minimum values of f(x) = x³ - 3x² + 1 on the interval [-1, 3].",
                    "A ladder 10 meters long leans against a wall. If the bottom slides away at 2 m/s, how fast is the top sliding down when the bottom is 6 meters from the wall?",
                    "Use linear approximation to estimate √(101). Compare with the actual value and find the percentage error.",
                    "A particle moves along a line with position s(t) = t³ - 6t² + 9t. Find when the particle is at rest and determine intervals of increasing/decreasing motion."
                ],
                "Integration": [
                    "Evaluate ∫(3x² + 2x - 5)dx and verify by differentiation.",
                    "Find ∫sin(x)·cos(x)dx using the substitution u = sin(x). Check your answer.",
                    "Evaluate the definite integral ∫[0 to π/2] sin²(x)dx using a trigonometric identity.",
                    "Find ∫x·e^(x²)dx using substitution. Show all steps including the substitution variable.",
                    "Calculate ∫(2x + 3)/(x² + 3x + 2)dx using partial fraction decomposition."
                ],
                "Applications of Integration": [
                    "Find the area between the curves y = x² and y = 2x from x = 0 to x = 2. Sketch the region.",
                    "Calculate the volume of the solid formed by rotating y = √x from x = 0 to x = 4 about the x-axis using the disk method.",
                    "A spring has a natural length of 20 cm. A force of 25 N stretches it to 25 cm. Find the work done in stretching it from 20 cm to 30 cm.",
                    "Find the arc length of the curve y = x^(3/2) from x = 0 to x = 4.",
                    "The velocity of a particle is v(t) = 3t² - 2t + 1 m/s. Find the displacement from t = 0 to t = 3 seconds."
                ],
                "Differential Equations": [
                    "Solve the differential equation dy/dx = 3x² + 2x with initial condition y(0) = 1.",
                    "Find the general solution of dy/dx = y/x using separation of variables.",
                    "Solve the initial value problem dy/dx + 2y = 4, y(0) = 3 using an integrating factor.",
                    "A population grows at a rate proportional to its size. If P(0) = 100 and P(2) = 200, find P(t) and determine when the population reaches 1000.",
                    "Verify that y = Ce^(3x) + 2 is the general solution of dy/dx - 3y = -6."
                ],
                "Sequences and Series": [
                    "Determine if the sequence a_n = (2n + 1)/(3n - 2) converges or diverges. If it converges, find the limit.",
                    "Test the series Σ(n=1 to ∞) 1/n² for convergence using the p-series test.",
                    "Use the ratio test to determine if Σ(n=1 to ∞) n!/n^n converges or diverges.",
                    "Find the interval of convergence for the power series Σ(n=0 to ∞) x^n/n!.",
                    "Determine if the alternating series Σ(n=1 to ∞) (-1)^n/n converges absolutely, conditionally, or diverges."
                ],
                "Partial Derivatives": [
                    "Find ∂f/∂x and ∂f/∂y for f(x,y) = x²y + sin(xy). Evaluate both at (1, π).",
                    "Calculate all second-order partial derivatives of f(x,y) = x³y² - 2xy + y³.",
                    "Find the equation of the tangent plane to z = x² + y² at the point (1, 2, 5).",
                    "Use the chain rule to find dz/dt if z = x²y, x = t², and y = t³.",
                    "Locate and classify all critical points of f(x,y) = x³ - 3xy + y³ using the second derivative test."
                ],
                "Multiple Integrals": [
                    "Evaluate the double integral ∫∫_R (2x + y)dA where R = [0,2] × [0,1].",
                    "Find ∫∫_R x²y dA where R is the region bounded by y = x², y = 0, and x = 2.",
                    "Convert the integral ∫[0 to 1]∫[0 to √(1-x²)] f(x,y)dy dx to polar coordinates.",
                    "Calculate the volume under z = 4 - x² - y² and above the xy-plane using double integration.",
                    "Evaluate ∫∫∫_E xyz dV where E is the box [0,1] × [0,2] × [0,3]."
                ],
                "Vector Calculus": [
                    "Find the gradient ∇f of f(x,y,z) = x²y + yz² - 3xz. Evaluate at (1,1,1).",
                    "Compute the directional derivative of f(x,y) = x²y + y³ at (2,1) in the direction of v = ⟨3,4⟩.",
                    "Find the divergence and curl of F = ⟨xy, yz, xz⟩.",
                    "Evaluate ∫_C F·dr where F = ⟨y, -x⟩ and C is the circle x² + y² = 4 traversed counterclockwise.",
                    "Use Green's theorem to evaluate ∮_C (x²)dx + (xy)dy where C is the boundary of the rectangle [0,2] × [0,3]."
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
        console.log('Calculus AI Generate UI setup complete');
    }

    // Show topic selection modal
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
                        Select a topic from Calculus to generate AI-powered practice questions:
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

        // Topic selection handlers
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.calculusAIGenerate.showTopicSelection();">
                        🔄 Try Again
                    </button>
                </div>
            `;
        }
    }

// Create enhanced prompt for Gemini API
    createPrompt(topic, sampleQuestions) {
        const samplesText = sampleQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
        
        return `You are an expert Calculus instructor with extensive experience teaching advanced university-level mathematics and creating challenging examination questions.

═══════════════════════════════════════════════════════════════
TOPIC: ${topic}
DIFFICULTY LEVEL: Advanced/Challenging (University Level)
═══════════════════════════════════════════════════════════════

**YOUR TASK:**
Analyze the sample questions below and generate 3 NEW, CHALLENGING practice questions that match the difficulty level and test deep mathematical understanding.

**SAMPLE QUESTIONS FOR REFERENCE:**
${samplesText}

═══════════════════════════════════════════════════════════════
QUESTION DESIGN REQUIREMENTS
═══════════════════════════════════════════════════════════════

**DIFFICULTY & COMPLEXITY STANDARDS (HIGHEST PRIORITY):**
✓ Questions must be DIFFICULT and require multi-step mathematical reasoning
✓ PRECISELY match the difficulty level of the sample questions above
✓ If samples use basic techniques, keep questions at that level; if advanced, match that complexity
✓ Include problems that combine multiple calculus concepts when appropriate
✓ Test both computational proficiency AND conceptual understanding
✓ Avoid trivial or direct formula application unless samples are similar
✓ Challenge students to apply techniques in non-obvious ways

**MATHEMATICAL NOTATION STANDARDS:**
✓ Use proper Unicode mathematical symbols:
  • Integrals: ∫, ∬, ∭ (use ∫ for single integrals)
  • Derivatives: dy/dx, d²y/dx², f'(x), f''(x), ∂f/∂x (for partial derivatives)
  • Limits: lim(x→a), lim(x→∞), lim(x→0⁺), lim(x→0⁻)
  • Summations: Σ(i=1 to n), Σ(n=1 to ∞)
  • Special functions: sin, cos, tan, ln, log, e^x, √x
  • Greek letters: θ, φ, α, β, π, Δ, ε, δ
  • Infinity: ∞
  • Set notation: ∈, ∪, ∩, ⊂
✓ Format equations clearly: x² + 2x + 1, (x³ - 1)/(x - 1), e^(x²)
✓ Use proper interval notation: [a,b], (a,b), [a,b), (-∞,∞)
✓ Write fractions clearly: (numerator)/(denominator)

**FOR COMPUTATIONAL PROBLEMS:**
✓ Provide complete expressions with all functions, limits, and parameters
✓ Specify exact values (use fractions, radicals, π, e when appropriate)
✓ Include boundary conditions, initial values, or constraints when needed
✓ Ensure problems are solvable using standard calculus techniques
✓ Specify method if relevant: "using integration by parts", "using the chain rule", "using L'Hôpital's rule"
✓ Use realistic and clean numbers that lead to tractable solutions

**FOR CONCEPTUAL/THEORETICAL PROBLEMS:**
✓ Test deep understanding of fundamental principles
✓ Ask for explanations, justifications, or proofs when appropriate
✓ Include questions about convergence, continuity, differentiability
✓ Connect abstract concepts to concrete applications
✓ Ask students to analyze, compare, or classify mathematical objects

**FOR APPLIED/WORD PROBLEMS:**
✓ Provide realistic scenarios from physics, engineering, or economics
✓ Include ALL necessary numerical parameters with units
✓ Clearly state what is given and what needs to be found
✓ Make the scenario specific and unambiguous
✓ Use practical values that lead to reasonable answers

**STRUCTURAL REQUIREMENTS:**
✓ Each question must be COMPLETE and SELF-CONTAINED
✓ Include all necessary information within the question itself
✓ State any special conditions, domains, or assumptions explicitly
✓ Format multi-part questions clearly as (a), (b), (c) if needed
✓ Use precise mathematical language and standard terminology
✓ Ensure questions are unambiguous with one clear interpretation

**CONTENT DIVERSITY:**
Your 3 questions should include varied problem types:
- At least 1 computational problem requiring detailed calculations
- At least 1 problem testing conceptual understanding or theory
- At least 1 applied problem or multi-step challenge
- Different sub-topics or techniques within ${topic}
- Mix of procedural skills and deeper reasoning

═══════════════════════════════════════════════════════════════
FORMATTING EXAMPLES
═══════════════════════════════════════════════════════════════

**Example 1 (Computational):**
Evaluate the integral ∫(x² + 3x)·e^x dx using integration by parts. Express your answer in simplified form.

**Example 2 (Applied):**
A spherical balloon is being inflated at a rate of 100 cm³/s. At the instant when the radius is 15 cm, how fast is the surface area increasing? (Surface area of sphere: A = 4πr²)

**Example 3 (Conceptual):**
Given f(x) = x³ - 6x² + 9x + 1, use the second derivative test to identify and classify all local extrema. Justify your conclusions with appropriate calculations.

═══════════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════════

Provide EXACTLY 3 questions in this format:

1. [First question - complete with all mathematical notation, data, and context]

2. [Second question - complete with all mathematical notation, data, and context]

3. [Third question - complete with all mathematical notation, data, and context]

**CRITICAL REQUIREMENTS:**
- NO explanations, solutions, hints, or additional commentary
- NO incomplete expressions or placeholder notation
- NO "find X" without specifying what X represents
- Each question must be immediately solvable with the information provided
- Questions should be challenging but appropriate for university calculus students
- Maintain consistent difficulty level matching the sample questions

Generate 3 new challenging practice questions for ${topic}:`;
    }

    // Call Gemini API with multiple endpoint attempts
    async callGeminiAPI(prompt) {
        const models = await this.checkAvailableModels();
        console.log('Checking models returned:', models);

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
                            maxOutputTokens: 2048,
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

        const errorMsg = `All API attempts failed. Last error: ${lastError}\n\nPlease check:\n1. API key is valid\n2. API key has Gemini API enabled\n3. You have internet connection\n\nCheck browser console for details.`;
        throw new Error(errorMsg);
    }

// Parse questions from API response
    parseQuestions(text) {
        console.log('Raw response from Gemini:', text.substring(0, 500));
        
        const questions = [];
        const lines = text.split('\n');
        let currentQuestion = '';
        let inQuestion = false;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const questionStartMatch = line.match(/^(\d+)[\.\)]\s*(.+)/);
            
            if (questionStartMatch) {
                if (currentQuestion.trim().length > 20) {
                    questions.push(currentQuestion.trim());
                }
                currentQuestion = questionStartMatch[2];
                inQuestion = true;
            } else if (inQuestion) {
                const nextQuestionMatch = line.match(/^\d+[\.\)]\s*/);
                if (nextQuestionMatch && i > 0) {
                    if (currentQuestion.trim().length > 20) {
                        questions.push(currentQuestion.trim());
                    }
                    currentQuestion = line.replace(/^\d+[\.\)]\s*/, '');
                } else {
                    currentQuestion += '\n' + line;
                }
            } else {
                if (i > 0 && lines[i-1].match(/^\d+[\.\)]\s*/)) {
                    currentQuestion = line;
                    inQuestion = true;
                }
            }
        }
        
        if (currentQuestion.trim().length > 20) {
            questions.push(currentQuestion.trim());
        }
        
        // CHANGED: Look for 3 questions instead of 5
        if (questions.length < 3) {
            const parts = text.split(/(?=\n\d+[\.\)]\s+)/);
            for (const part of parts) {
                const cleaned = part.replace(/^\d+[\.\)]\s+/, '').trim();
                if (cleaned.length > 20 && !questions.includes(cleaned)) {
                    questions.push(cleaned);
                }
            }
        }
        
        const uniqueQuestions = [];
        const seen = new Set();
        for (const q of questions) {
            const key = q.substring(0, 100).toLowerCase();
            if (!seen.has(key) && q.length > 20) {
                seen.add(key);
                uniqueQuestions.push(q);
            }
        }
        
        console.log(`Parsed ${uniqueQuestions.length} questions`);
        
        // CHANGED: Return exactly 3 questions instead of 5
        return uniqueQuestions.slice(0, 3);
    }

    // Display generated questions
    displayQuestions(topic, questions, modal) {
        const modalBody = modal.querySelector('.ai-modal-body');
        
        const formatQuestion = (text) => {
            let formatted = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.calculusAIGenerate.showTopicSelection();" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                        🔄 Generate More
                    </button>
                    <button class="ai-close-btn" onclick="this.closest('.ai-modal').remove()">
                        Close
                    </button>
                </div>
            </div>
        `;

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

// Initialize global instance for Calculus

window.calculusAIGenerate = new CalculusAIGenerate();
