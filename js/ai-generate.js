// Enhanced Subject Question Generator with Better Formatting
(function () {
    const QUESTIONS_LIMIT = 3;
    const LOADING_DURATION = 5000;

    const generators = [
        {
            id: 'pf',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('programming-fundamentals') && !path.includes('programming-fundamentals-lab');
            },
            dataPath: '../pfSampleQuestions.json',
            title: 'Programming Fundamentals',
            subtitle: 'Select a PF topic to spin up quick practice questions.',
            placeholder: 'Pick a topic to see generated Programming Fundamentals questions.'
        },
        {
            id: 'pf-lab',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('programming-fundamentals-lab');
            },
            dataPath: '../pfLabSampleQuestions.json',
            title: 'Programming Fundamentals Lab',
            subtitle: 'Select a lab topic to generate hands-on coding prompts.',
            placeholder: 'Pick a topic to see generated Programming Fundamentals Lab questions.'
        },
        {
            id: 'applied-physics',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('applied-physics');
            },
            dataPath: '../appliedPhysicsSampleQuestions.json',
            title: 'Applied Physics',
            subtitle: 'Select a chapter to review calculations and conceptual prompts.',
            placeholder: 'Pick a topic to see generated Applied Physics numericals.'
        },
        {
            id: 'functional-english',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('functional-english');
            },
            dataPath: '../functionalEnglishSampleQuestions.json',
            title: 'Functional English',
            subtitle: 'Choose a topic to practice comprehension, vocabulary, and grammar.',
            placeholder: 'Pick a topic to see Functional English practice questions.'
        },
        {
            id: 'calculus',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('calculus');
            },
            dataPath: '../calculusSampleQuestions.json',
            title: 'Calculus',
            subtitle: 'Choose a topic to practice derivatives, integrals, and limits.',
            placeholder: 'Pick a topic to see Calculus numericals.'
        },
        {
            id: 'dsa',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('data-structures-algorithms');
            },
            dataPath: '../dsaSampleQuestions.json',
            title: 'Data Structures & Algorithms',
            subtitle: 'Choose a topic to drill core DSA concepts and analysis.',
            placeholder: 'Pick a topic to see Data Structures & Algorithms questions.'
        },
        {
            id: 'dsa-lab',
            matcher: () => {
                const path = (window.location.pathname || '').toLowerCase();
                return path.includes('data-structures-lab');
            },
            dataPath: '../dsaLabSampleQuestions.json',
            title: 'Data Structures Lab',
            subtitle: 'Choose a lab exercise to practice implementations and debugging.',
            placeholder: 'Pick a topic to see Data Structures Lab exercises.'
        }
    ];

    generators.forEach((config) => {
        const generator = createGenerator(config);
        if (config.id === 'pf') {
            window.aiGenerate = generator;
        } else if (config.id === 'pf-lab') {
            window.aiGenerateLab = generator;
        } else if (config.id === 'applied-physics') {
            window.aiGenerateAppliedPhysics = generator;
        } else if (config.id === 'functional-english') {
            window.aiGenerateFunctionalEnglish = generator;
        } else if (config.id === 'calculus') {
            window.calculusAIGenerate = generator;
        } else if (config.id === 'dsa') {
            window.aiGenerateDSA = generator;
        } else if (config.id === 'dsa-lab') {
            window.aiGenerateDSALab = generator;
        }
    });

    function createGenerator(config) {
        let questionBank = null;
        let isFetching = false;
        let fetchError = null;
        let loadingTimer = null;

        function init() {
            if (!config.matcher()) {
                return;
            }
            preloadQuestionBank();
        }

        function preloadQuestionBank() {
            if (questionBank || isFetching) {
                return;
            }

            isFetching = true;
            fetch(config.dataPath, { cache: 'force-cache' })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Unable to load question bank.');
                    }
                    return response.json();
                })
                .then((data) => {
                    questionBank = data;
                    fetchError = null;
                })
                .catch((err) => {
                    fetchError = err.message || 'Failed to fetch questions.';
                })
                .finally(() => {
                    isFetching = false;
                });
        }

        function showTopicSelection() {
            ensureModal();

            const modal = document.querySelector('.ai-modal');
            const container = modal ? modal.querySelector('.ai-modal__container') : null;
            if (!container) {
                return;
            }

            const content = document.createElement('div');
            content.className = 'ai-modal__content';
            content.appendChild(createModalHeader());
            content.appendChild(createModalBody());

            container.innerHTML = '';
            container.appendChild(content);
        }

        function createModalHeader() {
            const header = document.createElement('div');
            header.className = 'ai-modal__header';
            header.innerHTML = `
                <div>
                    <h3>${config.title} Question Lab</h3>
                    <p>${config.subtitle}</p>
                </div>
            `;

            const closeBtn = document.createElement('button');
            closeBtn.type = 'button';
            closeBtn.className = 'ai-modal__close';
            closeBtn.setAttribute('aria-label', 'Close');
            closeBtn.textContent = '✕';
            closeBtn.addEventListener('click', () => {
                resetToTopics();
                closeModal();
            });
            header.appendChild(closeBtn);
            return header;
        }

        function createModalBody() {
            const body = document.createElement('div');
            body.className = 'ai-modal__body';

            if (fetchError) {
                body.innerHTML = `<div class="ai-modal__state error">${fetchError}</div>`;
                return body;
            }

            if (isFetching || !questionBank) {
                body.innerHTML = `<div class="ai-modal__state">Loading topics…</div>`;
                preloadQuestionBank();
                return body;
            }

            const topics = Object.keys(questionBank).filter(topic => {
                const topicData = questionBank[topic];
                if (Array.isArray(topicData)) {
                    return topicData.length > 0;
                } else if (typeof topicData === 'object' && topicData.questions) {
                    return topicData.questions.length > 0;
                }
                return false;
            });

            if (!topics.length) {
                body.innerHTML = `<div class="ai-modal__state">No topics available right now.</div>`;
                return body;
            }

            const topicGrid = document.createElement('div');
            topicGrid.className = 'topic-grid';
            topics.forEach((topic) => {
                const topicBtn = document.createElement('button');
                topicBtn.type = 'button';
                topicBtn.className = 'topic-card';
                topicBtn.textContent = topic;
                topicBtn.addEventListener('click', () => renderQuestions(topic));
                topicGrid.appendChild(topicBtn);
            });

            body.appendChild(topicGrid);
            body.appendChild(createQuestionsContainer());
            return body;
        }

        function createQuestionsContainer() {
            const container = document.createElement('div');
            container.className = 'questions-container';
            container.innerHTML = `
                <div class="questions-placeholder">
                    ${config.placeholder || 'Pick a topic to see generated questions.'}
                </div>
            `;
            return container;
        }

        function renderQuestions(topic) {
            let questionsArray = null;
            
            if (questionBank[topic]) {
                if (Array.isArray(questionBank[topic])) {
                    questionsArray = questionBank[topic];
                } else if (typeof questionBank[topic] === 'object') {
                    questionsArray = questionBank[topic].questions;
                }
            }
            
            if (!questionsArray || !questionsArray.length) {
                showMessage(`No questions found for ${topic}.`);
                return;
            }

            toggleTopicGrid(false);

            const container = getQuestionsContainer();
            if (!container) {
                return;
            }

            if (loadingTimer) {
                clearTimeout(loadingTimer);
            }

            container.innerHTML = `
                <div class="questions-loading">
                    <div class="loading-pulse"></div>
                    <p>Generating ${topic} questions…</p>
                    <small>Hang tight, this takes about 5 seconds.</small>
                </div>
            `;

            loadingTimer = window.setTimeout(() => {
                displayQuestions(topic, questionsArray);
            }, LOADING_DURATION);
        }

        function displayQuestions(topic, questionsArray) {
            const container = getQuestionsContainer();
            if (!container) {
                return;
            }

            const questions = questionsArray || (questionBank[topic] ? 
                (Array.isArray(questionBank[topic]) ? questionBank[topic] : questionBank[topic].questions) 
                : []);
                
            const selectedQuestions = pickRandomQuestions(questions, QUESTIONS_LIMIT);
            
            // Create header
            const header = document.createElement('div');
            header.className = 'questions-header';
            header.innerHTML = `
                <h4>${topic}</h4>
                <span class="question-count">${selectedQuestions.length} question${selectedQuestions.length > 1 ? 's' : ''}</span>
            `;
            
            // Create questions list
            const questionsList = document.createElement('div');
            questionsList.className = 'questions-list-wrapper';
            
            selectedQuestions.forEach((question, index) => {
                const questionItem = document.createElement('div');
                questionItem.className = 'question-item';
                
                const questionNumber = document.createElement('div');
                questionNumber.className = 'question-number';
                questionNumber.textContent = `Question ${index + 1}`;
                
                const questionContent = document.createElement('div');
                questionContent.className = 'question-content';
                questionContent.innerHTML = formatQuestionText(question);
                
                questionItem.appendChild(questionNumber);
                questionItem.appendChild(questionContent);
                questionsList.appendChild(questionItem);
            });
            
            container.innerHTML = '';
            container.appendChild(header);
            container.appendChild(questionsList);
            container.appendChild(createActionsRow());
        }

        function createActionsRow() {
            const actions = document.createElement('div');
            actions.className = 'ai-actions';

            const topicBtn = document.createElement('button');
            topicBtn.type = 'button';
            topicBtn.className = 'ai-action primary';
            topicBtn.textContent = 'Select Another Topic';
            topicBtn.addEventListener('click', resetToTopics);

            actions.appendChild(topicBtn);
            return actions;
        }

        function resetToTopics() {
            if (loadingTimer) {
                clearTimeout(loadingTimer);
                loadingTimer = null;
            }
            toggleTopicGrid(true);
            showMessage(config.placeholder || 'Pick a topic to see generated questions.');
        }

        function showMessage(message) {
            const container = getQuestionsContainer();
            if (container) {
                container.innerHTML = `
                    <div class="questions-placeholder">
                        ${message}
                    </div>
                `;
            }
        }

        function getQuestionsContainer() {
            return document.querySelector('.ai-modal .questions-container');
        }

        function toggleTopicGrid(shouldShow) {
            const grid = document.querySelector('.ai-modal .topic-grid');
            if (grid) {
                grid.classList.toggle('hidden', !shouldShow);
            }
        }

        return {
            init,
            showTopicSelection
        };
    }

    function ensureModal() {
        let modal = document.querySelector('.ai-modal');
        if (modal) {
            return modal;
        }

        modal = document.createElement('div');
        modal.className = 'ai-modal';
        modal.innerHTML = `
            <div class="ai-modal__backdrop"></div>
            <div class="ai-modal__panel">
                <div class="ai-modal__container"></div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.ai-modal__backdrop').addEventListener('click', () => {
            closeModal();
        });
        document.addEventListener('keydown', handleEscapeKey);
        return modal;
    }

    function closeModal() {
        const modal = document.querySelector('.ai-modal');
        if (modal) {
            modal.remove();
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }

    function handleEscapeKey(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    function pickRandomQuestions(questions, limit) {
        if (questions.length <= limit) {
            return [...questions];
        }

        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, limit);
    }

    function formatQuestionText(rawText) {
        if (!rawText) {
            return '';
        }

        // Split by double newlines to get major sections
        const segments = rawText.split(/\n\s*\n/);
        
        return segments
            .map((segment) => segment.trim())
            .filter(Boolean)
            .map((segment) => {
                // Check if it's a code block
                if (looksLikeCode(segment)) {
                    return `<pre><code>${escapeHtml(stripCodeLanguage(segment))}</code></pre>`;
                }
                
                // Check if it's a numbered/bulleted list
                if (looksLikeNumberedList(segment)) {
                    return formatNumberedList(segment);
                }
                
                // Check if it starts with common keywords that should be headers
                if (isKeywordSection(segment)) {
                    const lines = segment.split('\n');
                    const header = lines[0];
                    const rest = lines.slice(1).join('\n');
                    return `<div class="section-header">${escapeHtml(header)}</div>
                            ${rest ? '<p class="section-content">' + escapeHtml(rest).replace(/\n/g, '<br>') + '</p>' : ''}`;
                }
                
                // Regular paragraph
                return `<p>${escapeHtml(segment).replace(/\n/g, '<br>')}</p>`;
            })
            .join('');
    }

    function looksLikeCode(text) {
        if (!text.includes('\n')) {
            return false;
        }
        const trimmed = text.trim().toLowerCase();
        const codeSignatures = /[;{}#<>]/;
        const codeKeywords = /(int main|void |printf|scanf|cout|cin|#include|struct |return |for\s*\(|while\s*\(|if\s*\()/i;
        
        return codeSignatures.test(text) || 
               codeKeywords.test(text) || 
               trimmed.startsWith('cpp') || 
               trimmed.startsWith('c++') ||
               trimmed.startsWith('```');
    }

    function looksLikeNumberedList(text) {
        const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
        if (lines.length < 2) {
            return false;
        }
        const numberedLineRegex = /^(\d+[\).\:-]?|\(?[a-z]\)|[•\-])\s+/i;
        const matchCount = lines.filter(line => numberedLineRegex.test(line)).length;
        return matchCount >= lines.length * 0.7; // At least 70% of lines match
    }

    function formatNumberedList(text) {
        const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
        const listItems = lines.map((line) => {
            const cleaned = line.replace(/^(\d+[\).\:-]?|\(?[a-z]\)|[•\-])\s+/i, '');
            return `<li>${escapeHtml(cleaned)}</li>`;
        }).join('');
        return `<ol class="numeric-list">${listItems}</ol>`;
    }

    function stripCodeLanguage(text) {
        let cleaned = text.replace(/```/g, '');
        cleaned = cleaned.replace(/^(cpp|c\+\+|c|code|javascript|python|java)\s*/i, '');
        return cleaned;
    }

    function isKeywordSection(text) {
        const keywords = [
            'Input Sample:', 'Output Sample:', 'Example Input:', 'Example Output:',
            'Input Example:', 'Output Example:', 'Sample Input:', 'Sample Output:',
            'Input:', 'Output:', 'Example:', 'Note:', 'Hint:', 'Constraints:',
            'Function Prototype:', 'Function:', 'Tasks:', 'Rules:', 'Requirements:',
            'Problem Description:', 'Your task:', 'You must:', 'Restrictions:',
            'Instructions:', 'Format:', 'Definition:'
        ];
        
        const firstLine = text.split('\n')[0].trim();
        return keywords.some(kw => firstLine.startsWith(kw));
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
})();
