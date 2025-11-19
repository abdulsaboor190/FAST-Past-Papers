// Enhanced AI Generate functionality for Functional English
class AIGenerateFunctionalEnglish {
    constructor() {
        // Hardcoded API key - no need for students to enter it
        this.apiKey = 'AIzaSyCBdWAJPer7XwKE89aIe2YF8PR-4ai9PhQ';
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
            const response = await fetch('../functionalEnglishSampleQuestions.json');
            if (!response.ok) {
                throw new Error('Failed to load sample questions');
            }
            this.sampleQuestions = await response.json();
            console.log('Functional English Sample questions loaded:', Object.keys(this.sampleQuestions));
        } catch (error) {
            console.error('Error loading sample questions:', error);
            // Fallback sample questions
            this.sampleQuestions = {
"Essay Writing": [
  "1) Pick one topic sentence and write a persuasive essay supporting your view:\n   - Expensive weddings are an obscene waste of money.\n   - Occasional arguments are good for friendship.",
  "2) Write a persuasive essay on any ONE of the following:\n   a) Parks should be constructed in every neighborhood vs. parks occupy too much land.\n   b) Old buildings should be preserved as part of history vs. old buildings should be demolished for new constructions.",
  "3) Write a problem-solution essay on any ONE of the following:\n   a) Strategies to make online shopping a rewarding experience.\n   b) Strategies to help students choose the right career/field after joining university.",
  "4) Write a comparison and contrast essay on any ONE of the following:\n   a) Facebook vs. Instagram.\n   b) Role of Parents vs. Teachers in one's success.",
  "5) Write a persuasive essay on any ONE of the following:\n   a) Mental health awareness should be compulsory in school curriculum.\n   b) Funding priority: science/engineering vs. other subjects for national development in the digital age.",
  "6) Write a problem-solution essay on any ONE of the following:\n   a) Strategies for effective personal financial management.\n   b) Solutions to mitigate Karachi's traffic problems for smoother mobility and efficient urban transport."
],

"Fragments & Run-ons": [
  "A) Read the following and write 'F' for fragments and 'W' for well-formed sentences:\n1. Our instructor seems strict but is actually friendly and helpful. (W)\n2. As technological progress is the basis for competitiveness and advancement in the aerospace industry. (F)\n3. Hoping to win the concert tickets and please his friends. (F)\n4. Science is learning more and more about the versatility of form in dinosaurs with each great find in China, the Americas, Antarctica, and elsewhere. (W)\n5. As flooding and other natural disasters become more common because of climate change. (F)\n6. The number and intensity of extreme weather events, such as drought and tropical cyclones (hurricanes and typhoons). (F)\n7. The origin of the Moon was long a mystery, and, beginning in the 19th century, three competing theories emerged to solve it. (W)\n8. As proof, 12% public schools in the 1999-2000 school year, 20% public and private schools in the 2017-18 school year, 23% public and private schools in the 2020-2021 school year. (F)",
  "B) Correct the fragments in the following paragraphs (each paragraph contains 2 fragments):\n1. Corrected Paragraph: In the heart of the bustling city, surrounded by skyscrapers and crowded streets, this café served a variety of artisanal coffees and homemade pastries. With comfortable seating and soft jazz music in the background, it was the perfect spot to unwind after a hectic day.\n2. Corrected Paragraph: After the long and tiring journey through dense forests and treacherous terrain, the explorers finally reached the summit of the mountain. Sweating and exhausted, they enjoyed the breathtaking view from the top, making the arduous climb worthwhile.",
  "C) Identify and correct fragments in short passages:\n1. Corrected: My phone rang at least ten times this morning and then was silent the rest of the day. I finally called the telephone company to see if my phone was out of order.\n2. Corrected: Although hot dogs, French fries, and rich ice cream are not healthy foods, they're still favorites for many Americans. People are determined to enjoy themselves and don't want to hear about fat and cholesterol.\n3. Corrected: Sarita boasts that she can read a book in one evening, but she doesn't read the whole book. For example, she reads a chapter here and a page there, missing a lot of the book's detail because she skips parts that she thinks won't interest her.\n4. Corrected: Many people have poor telephone manners, such as beginning all of their conversations by saying, 'Who's this?' Some people don't ask if their call has come at a convenient time or identify themselves when calling.\n5. Corrected: Because members of a youth group in Finland once felt that Donald Duck was immoral, they tried to have Donald Duck cartoons banned from their town. They objected to the fact that Donald had been keeping company with Daisy Duck for more than fifty years without ever getting married.\n6. Corrected: Itching for several days, mosquito bites are one of the little miseries of summer. The itch is the result of the mosquito's saliva, which produces a mild allergic reaction in most people.\n7. Corrected: Although soccer is much more popular in other countries, it has enjoyed a rebirth in the United States in the past ten years. It has become the second most popular sport for those between the ages of 12 and 24."
],
"Paragraph Unity and Coherence": [
  "First Essay: Compare and Contrast – Washington, DC and London\n1. Organizational pattern: a. Subject by Subject\n2. Sentence in body paragraph 1 that does not add to paragraph unity: 7) New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.\n3. Sentence in body paragraph 2 that does not add to paragraph unity: 4) The Thyssen-Bornemisza National Museum in Madrid houses pieces by Rembrandt Harmenszoon van Rijn, Henri Matisse, and many more.\n4. Points of comparison in paragraph 2: b. Art and entertainment\n5. Best connector for sentence 6 in first body paragraph: b. However\n6. Best connector for sentence 6 in third body paragraph: a. Nevertheless\n7. Best supporting point for sentence 2 in third body paragraph: b. A downtown one-bedroom apartment in DC can easily cost $1,800 per month, and a similar 'flat' in London may cost double that amount while the other utilities and essentials in both the cities can cost up to $11,000.\n8. Best supporting point for sentence 6 in third body paragraph: a. In 2009, according to the US Census, 55 percent of DC residents were classified as 'Black or African American' and 35 percent of its residents were classified as 'white.'\n9. Four points of comparison used by the writer: History, Art and culture, Theater and entertainment, Cost of living and socioeconomic disparity\n10. Suggested title: 'Comparing Capitals: Washington, DC and London'",
  "Second Paragraph Exercise: Face-to-Face vs Online Communication\na. Topic sentence: 1) Despite the widespread use of social media, face-to-face communication remains a crucial aspect of interpersonal connections.\nb. Suitable sentence to fill in the blank: iii. On the contrary, virtual conversations lack the richness of real-life encounters.\nc. Sentence providing personal example: 5) For example, recently, during a face-to-face conversation with a friend who was going through a difficult time, I could discern the subtle sadness in his eyes and the sincerity in the voice, allowing me to offer genuine support and strengthen our bond in a way that text messages or online communication could not achieve.\nd. Sentence that introduces an irrelevant detail: 7) Furthermore, social media platforms offer various communication tools."
],
"Transitions and Connectors": [
  "First Exercise: Fill in the blanks with connectors\n1. Therefore\n2. In addition\n3. Furthermore\n4. Thus\n5. Meanwhile",
  "Second Exercise: Insert suitable transitions in the passage\n1. However\n2. Firstly\n3. For example\n4. Finally\n5. To sum up\n6. Although"
],
"Grammar_Modifier_Parallelism": [
  "Part 1: Identify and correct Misplaced or Dangling Modifiers\n1. Misplaced - Correct: Expecting confusion, we made our plans.\n2. Misplaced - Correct: I showed my cat with the fleas to the veterinarian.\n3. Misplaced - Correct: This typewriter with a wide carriage is used by a staff member.\n4. Misplaced - Correct: Swimming out into the sea, I noticed the current grew stronger.\n5. Dangling - Correct: I hardly ate any food at the banquet dinner.\n6. Dangling - Correct: Walking along the shore, I saw a cruise ship suddenly appear.",
  "Part 2: Correct faulty parallelism\n1. Would you prefer the graceful owl, the rat, or the sneaky cat as your pet?\n2. The difference between rural and country living is in the height of the buildings and the population density.\n3. Stress makes it difficult to exercise regularly, maintain stable relationships, and eat healthy food.",
  "Part 3: Correct verb or pronoun usage\n1. Anyone who wants to go to college can put together a plan that he or she will hold to until the goal is accomplished.\n2. Raul reclined in the lawn chair, opened his magazine wide, and promptly fell sound asleep in the sun.\n3. The neighborhood church serves its community with joy and enthusiasm.\n4. When you answer the question, be sure to select the person who had the greatest impact with his or her intellectual contributions.\n5. This kind of heat can impact a person’s ability to think as he or she tries to do homework.\n6. I took a deep breath and opened the door; there stood a well-dressed man with a large box.",
  "Part 4: Subject-Verb Agreement\n1. has\n2. have\n3. are\n4. do\n5. hopes\n6. seems"
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
        console.log('Functional English AI Generate UI setup complete');
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
                        Select a topic from Functional English to generate AI-powered practice questions:
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateFunctionalEnglish.showTopicSelection();">
                        🔄 Try Again
                    </button>
                </div>
            `;
        }
    }

// Create enhanced prompt for Gemini API
    createPrompt(topic, sampleQuestions) {
        const samplesText = sampleQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
        
        return `You are an expert Functional English instructor with extensive experience in creating challenging examination questions for university-level technical students. You specialize in designing tricky, thought-provoking questions that test deep language proficiency and critical thinking.

═══════════════════════════════════════════════════════════════
TOPIC: ${topic}
DIFFICULTY LEVEL: Advanced/Challenging (University Level)
TARGET AUDIENCE: Computer Science & Engineering Students
═══════════════════════════════════════════════════════════════

**YOUR TASK:**
Analyze the sample questions below and generate 2 NEW, CHALLENGING, and TRICKY practice questions that test sophisticated English language skills and critical thinking.

**SAMPLE QUESTIONS FOR REFERENCE:**
${samplesText}

═══════════════════════════════════════════════════════════════
QUESTION DESIGN REQUIREMENTS
═══════════════════════════════════════════════════════════════

**DIFFICULTY & COMPLEXITY STANDARDS (HIGHEST PRIORITY):**
✓ Questions must be CHALLENGING, TRICKY, and require careful analysis
✓ PRECISELY match or slightly exceed the difficulty level of the sample questions
✓ Test nuanced understanding, NOT just basic recall or simple application
✓ Include subtle complexities that require close reading and critical thinking
✓ Avoid obvious or straightforward questions with easy answers
✓ Design questions where common mistakes are possible (to test true mastery)
✓ Require multi-step reasoning or integration of multiple language concepts
✓ Challenge students' assumptions and require precise language understanding

**QUESTION STRUCTURE & PRESENTATION:**
✓ Use clear, professional formatting with proper grammar and punctuation
✓ Structure multi-part questions with clear labels: (a), (b), (c), (i), (ii), etc.
✓ Separate instructions from content using appropriate formatting
✓ Use quotation marks for passages, sentences, or examples to analyze
✓ Bold or capitalize key instruction words when needed: CORRECT, REWRITE, ANALYZE
✓ Present information in logical order: context → task → specific requirements
✓ Use bullet points or numbered lists for multiple requirements
✓ Maintain consistent formatting style throughout all questions

**FOR GRAMMAR & MECHANICS QUESTIONS:**
✓ Provide complete, realistic sentences with subtle errors (not obvious mistakes)
✓ Include errors that test nuanced understanding (not just basic rules)
✓ Examples: subject-verb agreement with complex subjects, comma splices in sophisticated sentences, pronoun-antecedent agreement with indefinite pronouns
✓ Provide sufficient context to make the question realistic
✓ Specify exactly what to identify or correct
✓ Use technical/professional contexts relevant to engineering students

**FOR WRITING TASK QUESTIONS:**
✓ Specify EXACT word count or range (e.g., "Write 200-250 words")
✓ Define the complete scenario with all necessary details
✓ Specify audience, purpose, and tone explicitly
✓ List all required components or elements to include
✓ Provide realistic professional or academic contexts
✓ Examples: technical reports, professional emails, project proposals, research summaries
✓ Include constraints that make the task challenging (e.g., "without using passive voice")

**FOR READING COMPREHENSION QUESTIONS:**
✓ Include a complete passage (100-250 words) within the question
✓ Use passages with sophisticated vocabulary and complex sentence structures
✓ Choose content relevant to computer science, engineering, or technology
✓ Follow the passage with 2-4 specific, challenging questions
✓ Ask questions that require inference, analysis, or synthesis (not just literal recall)
✓ Include questions about tone, purpose, implied meaning, or author's intent
✓ Test vocabulary in context and figurative language understanding

**FOR VOCABULARY & USAGE QUESTIONS:**
✓ Test words in sophisticated contexts, not in isolation
✓ Include challenging academic or technical vocabulary
✓ Test nuanced differences between similar words (e.g., affect vs. effect, imply vs. infer)
✓ Require understanding of connotation, register, and appropriateness
✓ Provide complete sentences or scenarios for context
✓ Test idioms, collocations, and phrasal verbs in professional contexts

**FOR PROFESSIONAL COMMUNICATION QUESTIONS:**
✓ Create realistic workplace or academic scenarios
✓ Specify the exact communication format (email, memo, report section, etc.)
✓ Define stakeholders, context, and objectives clearly
✓ Include constraints or challenges that increase difficulty
✓ Require appropriate tone, formality level, and rhetorical strategies
✓ Test ability to adapt language for different audiences and purposes

**CONTENT & CONTEXT REQUIREMENTS:**
✓ Each question must be COMPLETELY SELF-CONTAINED
✓ Include ALL necessary texts, passages, sentences, or examples within the question
✓ Use contexts familiar to technical students: software development, engineering projects, research, professional communication
✓ Ensure questions have definitive correct answers (even if multiple approaches exist)
✓ Make scenarios realistic and professionally relevant
✓ Avoid cultural references that require specific background knowledge
✓ Use clear, unambiguous language in instructions

**COGNITIVE CHALLENGE ELEMENTS (Make Questions Tricky):**
✓ Include distractors or elements that might mislead careless readers
✓ Require careful distinction between similar concepts
✓ Test edge cases or exceptions to general rules
✓ Combine multiple language skills in a single question
✓ Require identification of subtle errors or nuances
✓ Test ability to recognize and correct sophisticated language issues
✓ Include context where multiple interpretations are possible, requiring careful analysis

**DIVERSITY REQUIREMENTS:**
Your 2 questions should include varied types:
- Sample Question are these: ${topic}
- Mix of procedural knowledge and deeper language understanding

═══════════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════════

Provide EXACTLY 3 questions in this format:

1. [First question - complete with all passages, instructions, requirements, and specific details]

2. [Second question - complete with all passages, instructions, requirements, and specific details]


**CRITICAL REQUIREMENTS:**
- NO explanations, solutions, answer keys, or additional commentary
- NO incomplete questions or placeholder text like "[insert passage here]"
- NO questions that require external resources or materials
- Each question must be immediately answerable with the information provided
- Questions should be CHALLENGING and TRICKY, testing sophisticated language skills
- Maintain professional formatting with proper structure and clarity
- Ensure questions are appropriate for advanced university-level English students

Generate 2 new challenging, tricky practice questions for ${topic}:`;
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
        
        // CHANGED: Look for 2 questions instead of 3
        if (questions.length < 2) {
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
        
        // CHANGED: Return exactly 2 questions instead of 5
        return uniqueQuestions.slice(0, 2);
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateFunctionalEnglish.showTopicSelection();" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
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

// Initialize global instance for Functional English
window.aiGenerateFunctionalEnglish = new AIGenerateFunctionalEnglish();