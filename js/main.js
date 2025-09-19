// Updated main.js to handle subject navigation with simplified search
document.addEventListener('DOMContentLoaded', function() {
    loadSubjects();
    setupSearch();
    setupEngagementItems();
});

// Updated subject data for main page (with Computer Networks added)
const subjects = [
{
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals',
    description: 'Learn the basics of programming with C++ and problem-solving techniques',
    icon: '💻',
    papers: 22,
    latest: 2024,
    color: '#667eea'
},
{
    id: 'programming-fundamentals-lab',
    title: 'Programming Fundamentals Lab',
    description: 'Hands-on programming practice with C++ implementation and lab exercises',
    icon: '⌨️',
    papers: 13,
    latest: 2024,
    color: '#5f27cd'
},
{
    id: 'calculus',
    title: 'Calculus',
    description: 'Mathematical analysis including derivatives, integrals, and applications',
    icon: '📊',
    papers: 11,
    latest: 2024,
    color: '#764ba2'
},
{
    id: 'applied-physics',
    title: 'Applied Physics',
    description: 'Physics principles applied to engineering and computer science',
    icon: '⚛️',
    papers: 14,
    latest: 2024,
    color: '#f093fb'
},
{
    id: 'functional-english',
    title: 'Functional English',
    description: 'English language skills for technical and professional communication',
    icon: '📚',
    papers: 3,
    latest: 2024,
    color: '#4facfe'
},
{
    id: 'information-communication-technology',
    title: 'Information and Communication Technology',
    description: 'ICT fundamentals, digital literacy, and communication technologies',
    icon: '🌐',
    papers: 8,
    latest: 2024,
    color: '#00d2d3'
},
{
    id: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    description: 'Fundamental data organization methods and algorithmic problem solving',
    icon: '🗂️',
    papers: 16,
    latest: 2024,
    color: '#43e97b'
},
{
    id: 'data-structures-lab',
    title: 'Data Structures Lab',
    description: 'Practical implementation of data structures and algorithms in programming',
    icon: '🔬',
    papers: 11,
    latest: 2024,
    color: '#00d8ff'
},
{
    id: 'discrete-structures',
    title: 'Discrete Structures',
    description: 'Mathematical structures for computer science including logic and graph theory',
    icon: '🔢',
    papers: 18,
    latest: 2024,
    color: '#38f9d7'
},
{
    id: 'linear-algebra',
    title: 'Linear Algebra',
    description: 'Vector spaces, matrices, and linear transformations for CS applications',
    icon: '📏',
    papers: 16,
    latest: 2024,
    color: '#5983ff'
},
{
    id: 'theory-of-automata',
    title: 'Theory of Automata',
    description: 'Formal languages, finite automata, and computational theory',
    icon: '🤖',
    papers: 21,
    latest: 2024,
    color: '#ff6b9d'
},
{
    id: 'oop',
    title: 'Object Oriented Programming',
    description: 'Object-oriented programming concepts, inheritance, polymorphism, and design patterns',
    icon: '🗃️',
    papers: 7,
    latest: 2024,
    color: '#6c5ce7'
},
{
    id: 'oop-lab',
    title: 'Object Oriented Programming Lab',
    description: 'Practical OOP implementation with hands-on coding exercises and projects',
    icon: '🧪',
    papers: 10,
    latest: 2024,
    color: '#00cec9'
},
{
    id: 'computer-architecture',
    title: 'Computer Architecture',
    description: 'Computer system design, processor architecture, memory hierarchy, and performance analysis',
    icon: '🏛️',
    papers: 3,
    latest: 2024,
    color: '#00b894'
},
{
    id: 'coal-lab',
    title: 'Computer Organization and Assembly Language Lab',
    description: 'Assembly language programming and computer organization practical exercises',
    icon: '⚙️',
    papers: 9,
    latest: 2024,
    color: '#ff7675'
},
{
    id: 'compiler-construction',
    title: 'Compiler Construction',
    description: 'Compiler design, lexical analysis, parsing, code generation, and optimization',
    icon: '⚙️',
    papers: 5,
    latest: 2024,
    color: '#e17055'
},
{
    id: 'digital-logic-design',
    title: 'Digital and Logic Design',
    description: 'Digital circuits, boolean algebra, combinational and sequential logic systems',
    icon: '🔌',
    papers: 4,
    latest: 2024,
    color: '#fdcb6e'
},
{
    id: 'information-security',
    title: 'Information Security',
    description: 'Cybersecurity principles, cryptography, network security, and risk management',
    icon: '🔒',
    papers: 3,
    latest: 2024,
    color: '#2d3436'
},
{
    id: 'operating-system',
    title: 'Operating System',
    description: 'OS concepts, process management, memory management, and file systems',
    icon: '🖥️',
    papers: 7,
    latest: 2024,
    color: '#74b9ff'
},
{
    id: 'operation-research',
    title: 'Operation Research',
    description: 'Mathematical optimization, linear programming, and decision analysis techniques',
    icon: '📈',
    papers: 4,
    latest: 2024,
    color: '#a29bfe'
},
{
    id: 'ideology-constitution-pakistan',
    title: 'Ideology and Constitution of Pakistan',
    description: 'Study of Pakistani ideology, constitutional framework, and political system',
    icon: '🇵🇰',
    papers: 4,
    latest: 2024,
    color: '#00b8a9'
},
{
    id: 'design-analysis-algorithms',
    title: 'Design and Analysis of Algorithms',
    description: 'Advanced algorithmic design techniques, complexity analysis, and optimization methods',
    icon: '🔍',
    papers: 6,
    latest: 2024,
    color: '#ff3838'
},
{
    id: 'database-system',
    title: 'Database System',
    description: 'Database design, SQL, normalization, transaction management, and database administration',
    icon: '🗄️',
    papers: 11,
    latest: 2024,
    color: '#8c7ae6'
},
// NEW SUBJECT ADDED - Computer Networks
{
    id: 'computer-networks',
    title: 'Computer Networks',
    description: 'Network protocols, TCP/IP, routing, switching, and network security fundamentals',
    icon: '🌐',
    papers: 8,
    latest: 2024,
    color: '#ff9ff3'
}

];

function loadSubjects() {
    const subjectsGrid = document.getElementById('subjectsGrid');
    if (!subjectsGrid) return;
    
    subjectsGrid.innerHTML = subjects.map(subject => `
        <div class="subject-card" data-subject-id="${subject.id}" onclick="navigateToSubject('${subject.id}', this)">
            <div class="subject-icon">${subject.icon}</div>
            <div class="subject-content">
                <h3>${subject.title}</h3>
                <p>${subject.description}</p>
                <div class="subject-stats">
                    <div class="stat">
                        <span class="stat-number">${subject.papers}</span>
                        <span class="stat-label">Papers</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${subject.latest}</span>
                        <span class="stat-label">Latest</span>
                    </div>
                </div>
            </div>
            <div class="subject-hover">
                <span>View Papers →</span>
            </div>
        </div>
    `).join('');
}

// REPLACE YOUR EXISTING navigateToSubject FUNCTION WITH THIS:
function navigateToSubject(subjectId, cardElement) {
    // Find the subject data
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject) return;

    // If cardElement is not provided (from search), find the card
    if (!cardElement) {
        cardElement = document.querySelector(`[data-subject-id="${subjectId}"]`);
    }

    // Add loading state to the clicked card
    if (cardElement) {
        cardElement.classList.add('loading');
    }
    
    // Show loading overlay with subject-specific text
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = loadingOverlay.querySelector('.loading-text');
    const loadingSubtext = loadingOverlay.querySelector('.loading-subtext');
    
    loadingText.textContent = `Loading ${subject.title}...`;
    loadingSubtext.textContent = `Preparing ${subject.papers} past papers for you`;
    
    loadingOverlay.classList.add('show');
    
    // Simulate loading time and then navigate
    setTimeout(() => {
        // Remove loading states
        loadingOverlay.classList.remove('show');
        if (cardElement) {
            cardElement.classList.remove('loading');
        }
        
        // Map subject IDs to their corresponding HTML files
        const subjectPages = {
            'programming-fundamentals': 'programming-fundamentals.html',
            'programming-fundamentals-lab': 'programming-fundamentals-lab.html',
            'calculus': 'calculus.html',
            'applied-physics': 'applied-physics.html',
            'functional-english': 'functional-english.html',
            'information-communication-technology': 'information-communication-technology.html',
            'data-structures-algorithms': 'data-structures-algorithms.html',
            'data-structures-lab': 'data-structures-lab.html',
            'discrete-structures': 'discrete-structures.html',
            'linear-algebra': 'linear-algebra.html',
            'theory-of-automata': 'theory-of-automata.html',
            'oop': 'oop.html',
            'oop-lab': 'oop-lab.html',
            'computer-architecture': 'computer-architecture.html',
            'coal-lab': 'coal-lab.html',
            'compiler-construction': 'compiler-construction.html',
            'digital-logic-design': 'digital-logic-design.html',
            'information-security': 'information-security.html',
            'operating-system': 'operating-system.html',
            'operation-research': 'operation-research.html',
            'ideology-constitution-pakistan': 'ideology-constitution-pakistan.html',
            'design-analysis-algorithms': 'design-analysis-algorithms.html',
            'database-system': 'database-system.html',
            'computer-networks': 'computer-networks.html'
        };
        
        const pageName = subjectPages[subjectId] || 'programming-fundamentals.html';
        window.location.href = `subjects/${pageName}`;
        
    }, 800); // 1.5 second loading time - adjust as needed
}

// SIMPLIFIED SEARCH SETUP - Only show course names
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsList = document.getElementById('resultsList');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        if (query.length < 2) {
            return;
        }
        
        // Filter subjects based on search query
        const filteredSubjects = subjects.filter(subject => 
            subject.title.toLowerCase().includes(query) ||
            // Include some basic keyword matching
            (subject.id === 'programming-fundamentals' && (query.includes('programming') || query.includes('fundamentals') || query.includes('cpp') || query.includes('c++'))) ||
            (subject.id === 'programming-fundamentals-lab' && (query.includes('programming') || query.includes('fundamentals') || query.includes('lab') || query.includes('practical'))) ||
            (subject.id === 'information-communication-technology' && (query.includes('ict') || query.includes('information') || query.includes('communication') || query.includes('technology'))) ||
            (subject.id === 'data-structures-algorithms' && (query.includes('data') || query.includes('structure') || query.includes('algorithm') || query.includes('array') || query.includes('tree'))) ||
            (subject.id === 'data-structures-lab' && (query.includes('data') || query.includes('structures') || query.includes('lab') || query.includes('practical'))) ||
            (subject.id === 'discrete-structures' && (query.includes('discrete') || query.includes('logic') || query.includes('graph'))) ||
            (subject.id === 'linear-algebra' && (query.includes('linear') || query.includes('algebra') || query.includes('matrix'))) ||
            (subject.id === 'theory-of-automata' && (query.includes('automata') || query.includes('theory') || query.includes('finite'))) ||
            (subject.id === 'oop' && (query.includes('oop') || query.includes('object') || query.includes('oriented'))) ||
            (subject.id === 'oop-lab' && (query.includes('oop') || query.includes('object') || query.includes('lab') || query.includes('practical'))) ||
            (subject.id === 'computer-architecture' && (query.includes('computer') || query.includes('architecture') || query.includes('processor'))) ||
            (subject.id === 'coal-lab' && (query.includes('coal') || query.includes('assembly') || query.includes('computer') || query.includes('organization') || query.includes('lab'))) ||
            (subject.id === 'compiler-construction' && (query.includes('compiler') || query.includes('construction') || query.includes('parsing'))) ||
            (subject.id === 'digital-logic-design' && (query.includes('digital') || query.includes('logic') || query.includes('design'))) ||
            (subject.id === 'information-security' && (query.includes('information') || query.includes('security') || query.includes('cybersecurity'))) ||
            (subject.id === 'operating-system' && (query.includes('operating') || query.includes('system') || query.includes('os'))) ||
            (subject.id === 'operation-research' && (query.includes('operation') || query.includes('research') || query.includes('optimization'))) ||
            (subject.id === 'ideology-constitution-pakistan' && (query.includes('ideology') || query.includes('constitution') || query.includes('pakistan') || query.includes('political'))) ||
            (subject.id === 'design-analysis-algorithms' && (query.includes('design') || query.includes('analysis') || query.includes('algorithm') || query.includes('complexity'))) ||
            (subject.id === 'database-system' && (query.includes('database') || query.includes('system') || query.includes('sql') || query.includes('dbms'))) ||
            // NEW SUBJECT SEARCH TERMS
            (subject.id === 'computer-networks' && (query.includes('computer') || query.includes('networks') || query.includes('networking') || query.includes('tcp') || query.includes('ip') || query.includes('routing') || query.includes('protocols')))
        );
        
        if (filteredSubjects.length > 0) {
            // Show only course names - simplified design
            resultsList.innerHTML = filteredSubjects.map(subject => `
                <div class="search-result-item"onclick="navigateToSubject('${subject.id}', null)">
                    ${subject.title}
                </div>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            resultsList.innerHTML = `
                <div class="no-results">
                    <p>No subjects found matching "${query}"</p>
                    <small>Try searching for: Programming, Calculus, Database, Networks, etc.</small>
                </div>
            `;
            searchResults.style.display = 'block';
        }
    });
    
    // Handle Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const firstResult = resultsList.querySelector('.search-result-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
}

function setupEngagementItems() {
    const engagementItems = document.querySelectorAll('.engagement-item');
    
    engagementItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleEngagementAction(action);
        });
    });
}
function handleEngagementAction(action) {
    // Since the HTML already has proper links with href attributes,
    // we don't need to handle these actions in JavaScript anymore.
    // The links will work automatically.
    
    // Remove all alerts and let the HTML <a> tags handle the navigation
    switch(action) {
        case 'feedback':
            // Link will automatically open: https://forms.gle/jS3CsHTPonmgdevV6
            console.log('User clicked feedback link');
            break;
        case 'collaborate':
            // Link will automatically open: https://forms.gle/6QMT79jmbsqUNT8r5
            console.log('User clicked collaborate link');
            break;
        case 'suggest':
            // Link will automatically open: https://forms.gle/SYz4WbhxCQS2h5Sf6
            console.log('User clicked suggest features link');
            break;
        case 'contact':
            // Link will automatically open: mailto:i233039@isb.nu.edu.pk
            console.log('User clicked contact link');
            break;
    }
    
    // No alerts, no preventDefault() - let the HTML links work naturally
}
