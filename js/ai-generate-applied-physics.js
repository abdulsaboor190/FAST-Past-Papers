// Enhanced AI Generate functionality for Applied Physics
class AIGenerateAppliedPhysics {
    constructor() {
        // Hardcoded API key - no need for students to enter it
        this.apiKey = 'AIzaSyBjH1Wq8_FHE7mn1VAlD9-4f8efl3siBk8';
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
            const response = await fetch('../appliedPhysicsSampleQuestions.json');
            if (!response.ok) {
                throw new Error('Failed to load sample questions');
            }
            this.sampleQuestions = await response.json();
            console.log('Applied Physics Sample questions loaded:', Object.keys(this.sampleQuestions));
        } catch (error) {
            console.error('Error loading sample questions:', error);
            // Fallback sample questions
            this.sampleQuestions = {
                  "Electrostatics": [
    "A charged paint is spread in a very thin uniform layer over the surface of a plastic sphere of diameter 12.0 cm, giving it a charge of -49.0 µC. Find the electric field (i) just inside the paint layer; (ii) just outside the paint layer; (iii) 5.00 cm outside the surface of the paint layer.",
      "What must be the distance between point charge q1 = 26.0 mC and point charge q2 = 47.0 mC for the electrostatic force between them to have a magnitude of 5.70 N? (k = 9 x 10⁹ Nm²/C²). Is the force repulsive or attractive?",  
    "(a) A charged paint is spread in a very thin uniform layer over the surface of a plastic sphere of diameter 12.0 cm, giving it a charge of -49.0 µC. Find the electric field (i) just inside the paint layer; (ii) just outside the paint layer; (iii) 5.00 cm outside the surface of the paint layer. [5] (b) You want to produce an electric field = (0, 4104, 0) N/C. (i) Where would you place a proton to produce this field at the origin? (ii) Instead of a proton, where would you place an electron to produce this field at the origin?",
    "The current density through a cross section varies with radial distance r as J = ar², where a = 3.0 x 10¹¹ A/m² and r is in meters. What is the current through the outer portion of the wire between radial distances R/2 and R?",
    "An electric field 3j + 4k (N/C) is present at a place. What will be the electric flux passing through a square plate of side 2 m if the plate is placed in (i) the y-z plane (ii) perpendicular to the y-z plane?"
  ],


   "Gauss's Law & Symmetry": [
    "Suppose you have a solid sphere of radius R with uniform volume charge density ρ. Find the electric field outside and inside the sphere.",
    "(a) Show the variations of the electric field for a spherical symmetrical charged distribution and a thin shell with respect to distance with the help of graphs only. (Plot must start from the origin, the surface, and the outside the surface of both distributions.) [2] (b) A charge q = -3 C is placed at the center of a cube of side length L. Find the flux through the whole cube. If the cube is changed into a sphere what will happen to the flux? [3] (c) An infinite line of charge produces a field of 4.52 x 10 N/C at a distance of 1.96 m. Calculate the linear charge density. [3] (d) The total flux through a Gaussian surface is zero. (i) What is the net charge enclosed? (ii) Is E = 0 at all points on the surface? Give reason.",
    "A flat sheet of paper of area 0.250 m² is oriented so that the normal to the sheet is at an angle of 60° to a uniform electric field of magnitude 14 N/C. (i) Find the magnitude of the electric flux through the sheet. (ii) Does the answer to part (i) depend on the shape of the sheet? If yes, why? If not, why not? (iii) For what angle between the normal to the sheet and the electric field is the magnitude of the flux through the sheet largest and smallest? Explain your answers. (06) (1) Sketch a graph that shows the variation of the electric field with respect to the distance along the x-axis for a thin, uniformly charged, spherical shell of radius R.",
    "Consider a spherical capacitor formed by two coaxial spheres of radii 'a' and 'b'. Each plate contains a charge of magnitude 'q'. Apply Gauss's law and calculate a mathematical expression of its capacitance. Also, draw its illustration."
  ],
   "Capacitance & Capacitors": [
    "(a) A parallel-plate capacitor consists of two strips of aluminum foil, each with an area of 0.20 m², separated by a distance of 0.10 mm. The space between the foils is empty. The two strips are connected to the terminals of a battery, which produces a potential difference of 200 volts between them. What is the capacitance of this capacitor? What is the electric charge on each plate? What is the strength of the electric field between the plates? (b) Six identical capacitors of capacitance C are connected as shown in the figure below. What is the net capacitance of the combination?",
    "(a) A 100 pF capacitor is charged to a potential difference of 50 V, and the charging battery is disconnected. The capacitor is then connected in parallel with a second (initially uncharged) capacitor. If the potential difference across the first capacitor drops to 35 V, what is the capacitance of this second capacitor?",
    "(a) Does the capacitance C of a capacitor increase, decrease, or remain the same (a) when the charge q on it is doubled and (b) when the potential difference V across it is tripled? Give reason. (02) (b) The plates of a spherical capacitor have radii 38.0 mm and 40.0 mm. (a) Calculate the capacitance. (b) What must be the plate area of a parallel-plate capacitor with the same plate separation and capacitance? (04) (c) When a battery is connected across the capacitor, are the charges on the plates always equal and opposite even for plates of unequal size? Give reasons for your answer. (01) (d) For capacitors charged by the same battery, does the charge stored by the capacitor increase, decrease, or remain the same in each of the following situations? (i) The plate separation of a parallel-plate capacitor is increased. (ii) The radius of the inner cylinder of a cylindrical capacitor is increased. (iii) The radius of the outer spherical shell of a spherical capacitor is increased. (03) (e) How does the presence of a dielectric alter the electric field between the capacitor plates? Explain briefly. (02)"
  ],
"Current & Resistance": [
    "The magnitude J of the current density in a certain lab wire with a circular cross section of radius R = 2.00 mm is given by J = (3.00 × 10⁸)r², with J in amperes per square meter and radial distance r in meters. What is the current through the outer section bounded by r = 0.900R and r = R?",
    "Suppose a current i is flowing through a uniform cylindrical conducting wire. Derive an expression for drift velocity in terms of i, A, n, and e. Here, i is the current, A is the area of cross-section of the cylindrical wire, n is the number of charge carriers per unit volume, and e is the charge on an electron.",
    "For a hypothetical electronic device, the potential difference V (in volts) measured across the device is related to the current i (in mA) by V = 3.55i². (i) Find the resistance when the current is 2.4 mA. (ii) At what value of the current is the resistance equal to 16 Ω?",
    "A small but measurable current of 1.2 × 10⁻¹⁰ A exists in a copper wire whose diameter is 2.5 mm. The number of charge carriers per unit volume is 8.49 × 10²⁸ m⁻³. Assuming the current is uniform, calculate (a) the current density and (b) the electron drift speed.",
    "(a) The current density through a cross section varies with radial distance r as J = ar², where a = 3.0 × 10¹¹ A/m² and r is in meters. What is the current through the outer portion of the wire between radial distances R/2 and R? (b) Derive a formula that shows the relationship between current density and the drift speed of charged particles. Also, draw its illustration."
  ],
 "Magnetic Forces & The Hall Effect": [
    "Derive an expression for the angular frequency of a charged particle rotating in a uniform magnetic field.",
    "A straight, horizontal length of copper wire has a current i = 28 A through it. What are the magnitude and direction of the minimum magnetic field needed to suspend the wire—that is, to balance the gravitational force on it? The linear density (mass per unit length) of the wire is 6 g/m.",
    "A strip of copper carrying a current i is immersed in a magnetic field. A potential, called the 'Hall Potential' (V), is developed with the electric field across the strip of width d and thickness l. Derive a formula for finding the number of charge carriers per unit volume n, representing Hall potential, magnetic field, thickness, and current. Also, draw an illustration of the Hall effect and show the developed potential.",
    "A straight, horizontal length of copper wire has a current i = 28 A through it. What are the magnitude and direction of the minimum magnetic field B needed to suspend the wire—that is, to balance the gravitational force on it? The linear density (mass per unit length) of the wire is 46.6 g/m."
  ],
   "Magnetic Fields from Currents & Ampere's Law": [
    "The long dimension of the rectangular loop in the figure is 400 × 10⁶ m, and the magnetic field strength near the loop has a constant magnitude of 2 mT. Use the mathematical form of Ampere’s law to estimate the total current encircled by the rectangle.",
    "A long solenoid has 100 turns/cm and carries current i. An electron moves within the solenoid in a circle of radius 2.30 cm perpendicular to the solenoid axis. The speed of the electron is a fraction of the speed of light. Find the current in the solenoid.",
    "Apply Ampere's law to find the magnetic field inside a long straight wire carrying current I. Use integration for the Amperian loop. Also, draw an illustration to represent the setup.",
    "The cross section of a long conducting cylinder has an inner radius a = 2.0 cm and outer radius b = 4.0 cm. The cylinder carries a current out of the page, and the magnitude of the current density in the cross section is given by J = cr², where c = 3.0 × 10⁶ A/m⁴ and r is in meters. What is the magnetic field B at the point located at radius r = 3.0 cm from the central axis of the cylinder?"
  ],
   "Oscillations and Waves": [
    "(a) What is the phase constant for the harmonic oscillator with the velocity function v(t) given in Fig-4, if the position function x(t) has the form x = X cos(at + p)? The vertical axis scale is set by vs = 4.0 cm/s. (02) (b) Fig-5 shows the kinetic energy K of a simple harmonic oscillator versus its position x. The vertical axis scale is set by Ks = 4.0 J. What is the spring constant? (02) (c) What is damped oscillation, and how does it differ from undamped oscillation? Describe a real-world scenario where damped oscillations occur. (02) (d) The acceleration a(t) of a particle undergoing SHM is graphed in Fig-6. Which of the labeled points corresponds to the particle at -Xm? (ii) At point 4, is the velocity of the particle positive, negative, or zero? (iii) At point 5, is the particle at -Xm, at +Xm, at 0, between -Xm and 0, or between 0 and +Xm?",
    "A rescue plane flies at 198 km/h (= 55.0 m/s) and constant height h = 500 m toward a point directly over a victim, where a rescue capsule is to land. (a) What should be the angle p of the pilot's line of sight to the victim when the capsule release is made? Calculate.",
    "A string is driven at a frequency of 5.00 Hz. The amplitude of the motion is 12.0 cm, and the wave speed is 20.0 m/s. Determine the angular frequency and wave number k for this wave, and write an expression for the wave function. (b) Fig-7 shows three waves that are separately sent along a string that is stretched under a certain tension along an x-axis. Rank the waves according to their (a) wavelengths, (b) speeds, and (c) angular frequencies, greatest first. (c) Sketch the interference wave of two identical waves having phase differences (a) θ = 0 and (b) θ = π. Also mention the nature of interference taking place.",
    "(a) Discuss the nature of water waves. [3] (b) The equation of a transverse wave on a string is y = (2.0 mm) sin [(20 mm⁻¹)x - (600 s⁻¹)t]. Calculate (i) wavelength (ii) time period (iii) wave speed (iv) frequency (v) wave number [5] (c) The nature of light waves is transverse but they are not mechanical waves. Give the reason. [3] (d) Two identical sinusoidal waves, moving in the same direction along a stretched string, interfere with each other. The amplitude of each wave is 15 mm. Calculate the amplitudes of the resultant waves due to the interference for phase differences 120° and 180°. Give the types of both interferences."
  ],
  "Vectors": [
    "Suppose that A = i cos(ωt) + j sin(ωt), where ω is a constant. Find dA/dt (note that i and j behave as constants in differentiation). Show that dA/dt is perpendicular to A.",
    "(a) Find the magnitude of vector C that satisfy the equation 2A - 6B + 3C = 2j, where A = i - 2k and B = -j + k/2. (b) A person walks 57.0 m at 47.0° north of east, turns and walks 72.0 m at 15.0° south of east. How far and at what angle is the person's final position from his/her initial position.",
    "(a) What is the sum of the following four vectors in (i) unit vector notation, and as (ii) a magnitude and (iii) an angle? A = (2.00 m)i + (3.00 m)j, B = 4.00 m at 65.0°, C = (-4.00 m)i + (-6.00 m)j, D = 5.00 m at -235°. (b) Find the angle between the two vectors: A = 3i - 3j + 6k and B = 5i + 6j - 8k."
  ],
   "Motion in 1D & 2D": [
    "A golfer claims that a golf ball launched with an elevation angle of 12° can reach a horizontal range of 250 m. Ignoring air friction, what would the initial speed of such a golf ball have to be? What maximum height would it reach?",
    "(a) The position of an object moving along an x-axis is given by x = 3t - 4t² + t³, where x is in meters and t is in seconds. Find the position of the object at the following values of t: (i) 2 s, (ii) 3 s, (iii) 4 s, (iv) What is the object's displacement between t = 2 s and t = 4 s? (v) What is the average velocity for the time interval from t = 2 s to 4 s? [5] (b) With what speed must a ball be thrown vertically from ground level to rise to a maximum height of 50 m? How long will it be in air? Sketch graphs of y, v, and a versus t for the ball. On the first two graphs, indicate the time at which 50 m is reached.",
    "(a) With the help of the following velocity-time graph (Fig-1), draw the acceleration versus time graphs. (b) A turtle crawls along a straight line, which we will call the x-axis with positive direction to the right. The equation for the turtle's position as a function of time is x(t) = 50 + 2t - 0.0625t². Find the turtle’s initial velocity, initial position, and initial acceleration. At what time t is the velocity of the turtle zero?"
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
        console.log('Applied Physics AI Generate UI setup complete');
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
                        Select a topic from Applied Physics to generate AI-powered practice questions:
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateAppliedPhysics.showTopicSelection();">
                        🔄 Try Again
                    </button>
                </div>
            `;
        }
    }

// Create enhanced prompt for Gemini API
    createPrompt(topic, sampleQuestions) {
        const samplesText = sampleQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n\n');
        
        return `You are an expert Applied Physics instructor with expertise in advanced physics principles for engineering and computer science applications.

═══════════════════════════════════════════════════════════════
TOPIC: ${topic}
DIFFICULTY LEVEL: Advanced/Challenging (University Level)
═══════════════════════════════════════════════════════════════

**YOUR TASK:**
Analyze the sample questions below and generate 3 NEW, CHALLENGING practice questions that test deep understanding and problem-solving skills.

**SAMPLE QUESTIONS FOR REFERENCE:**
${samplesText}

═══════════════════════════════════════════════════════════════
QUESTION DESIGN REQUIREMENTS
═══════════════════════════════════════════════════════════════

**DIFFICULTY STANDARDS:**
✓ Questions must be DIFFICULT and require multi-step reasoning
✓ Include complex scenarios that combine multiple concepts
✓ Test both conceptual understanding AND computational skills
✓ Avoid trivial or straightforward plug-and-solve problems

**FOR NUMERICAL/CALCULATION QUESTIONS:**
✓ Provide ALL necessary parameters with proper units (SI system)
✓ Include relevant physical constants explicitly:
  • g = 9.8 m/s² (gravitational acceleration)
  • k = 9×10⁹ N⋅m²/C² (Coulomb's constant)
  • c = 3×10⁸ m/s (speed of light)
  • h = 6.626×10⁻³⁴ J⋅s (Planck's constant)
✓ Ensure questions are solvable using standard physics formulas
✓ Use realistic values and engineering-relevant scenarios
✓ Require multi-step calculations when appropriate

**FOR CONCEPTUAL QUESTIONS:**
✓ Test deep understanding of underlying principles
✓ Include clear descriptions and context
✓ Ask for explanations, comparisons, or predictions
✓ Connect theory to practical applications

**STRUCTURAL REQUIREMENTS:**
✓ Each question must be COMPLETE and SELF-CONTAINED
✓ State all assumptions clearly
✓ Use proper mathematical notation (×, ², ³, √, π, θ, etc.)
✓ Include units with all numerical values
✓ Use standard physics terminology and symbols
✓ Format equations using clear notation

**CONTENT DIVERSITY:**
Your 3 questions should include a mix of:
- At least 1 advanced numerical problem requiring calculations
- At least 1 conceptual/theoretical question
- At least 1 application-based engineering scenario
- Different sub-aspects of ${topic}

═══════════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════════

Provide EXACTLY 3 questions in this format:

1. [First question - complete with all data, units, and context]

2. [Second question - complete with all data, units, and context]

3. [Third question - complete with all data, units, and context]

**IMPORTANT:**
- NO explanations, solutions, or additional commentary
- NO incomplete questions or "fill in the blank" placeholders
- Each question must stand alone with all necessary information
- Questions should be challenging but solvable with undergraduate physics knowledge

Generate 3 new challenging practice questions for ${topic}:`;
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
                console.log('Full generated text length:', generatedText.length);
                
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
    // 2. Update parseQuestions() method - change the return statement at the end:
parseQuestions(text) {
    console.log('Raw response from Gemini:', text.substring(0, 500));
    
    const questions = [];
    const lines = text.split('\n');
    let currentQuestion = '';
    let inQuestion = false;
    
    // Process line by line to capture complete questions
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
            const nextQuestionMatch = line.match(/^\d+[\.\)]\s*/);
            if (nextQuestionMatch && i > 0) {
                if (currentQuestion.trim().length > 30) {
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
    
    // Add the last question
    if (currentQuestion.trim().length > 30) {
        questions.push(currentQuestion.trim());
    }
    
    // If we didn't get enough questions, try alternative parsing
    if (questions.length < 3) {
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
        const key = q.substring(0, 100).toLowerCase();
        if (!seen.has(key) && q.length > 30) {
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
        
        // Helper function to format question text with equations
        const formatQuestion = (text) => {
            // Escape HTML in non-math parts
            let formatted = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/\n/g, '<br>');
            
            // Format mathematical expressions (basic formatting)
            formatted = formatted.replace(/(\d+)\s*×\s*10\^?([+-]?\d+)/g, '$1×10<sup>$2</sup>');
            formatted = formatted.replace(/\^(\d+)/g, '<sup>$1</sup>');
            formatted = formatted.replace(/_(\d+)/g, '<sub>$1</sub>');
            
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerateAppliedPhysics.showTopicSelection();" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
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

// Initialize global instance for Applied Physics
window.aiGenerateAppliedPhysics = new AIGenerateAppliedPhysics();


