// Subject data for Computer Science past papers
const subjectsData = [
  {
    id: 'programming-fundamentals',
    name: 'Programming Fundamentals',
    icon: '💻',
    description: 'Learn the basics of programming with C++ and problem-solving techniques',
    paperCount: 22,
    yearRange: '2020-2024',
    searchTerms: ['programming', 'fundamentals', 'pf', 'cpp', 'c++']
},
{
    id: 'programming-fundamentals-lab',
    name: 'Programming Fundamentals Lab',
    icon: '⌨️',
    description: 'Hands-on programming practice with C++ implementation and lab exercises',
    paperCount: 13,
    yearRange: '2020-2024',
    searchTerms: ['programming', 'fundamentals', 'lab', 'practical', 'cpp', 'c++', 'pf']
},
{
    id: 'calculus',
    name: 'Calculus',
    icon: '📊',
    description: 'Mathematical analysis including derivatives, integrals, and applications',
    paperCount: 11,
    yearRange: '2020-2024',
    searchTerms: ['calculus', 'mathematics', 'math']
},
{
    id: 'applied-physics',
    name: 'Applied Physics',
    icon: '⚛️',
    description: 'Physics principles applied to engineering and computer science',
    paperCount: 14,
    yearRange: '2020-2024',
    searchTerms: ['physics', 'applied', 'ap']
},
{
    id: 'functional-english',
    name: 'Functional English',
    icon: '📚',
    description: 'English language skills for technical and professional communication',
    paperCount: 3,
    yearRange: '2020-2024',
    searchTerms: ['english', 'functional', 'language', 'fe']
},
{
    id: 'information-communication-technology',
    name: 'Information and Communication Technology',
    icon: '🌐',
    description: 'ICT fundamentals, digital literacy, and communication technologies',
    paperCount: 8,
    yearRange: '2020-2024',
    searchTerms: ['ict', 'information', 'communication']
},
{
    id: 'data-structures-algorithms',
    name: 'Data Structures & Algorithms',
    icon: '🗂️',
    description: 'Fundamental data organization methods and algorithmic problem solving',
    paperCount: 16,
    yearRange: '2020-2024',
    searchTerms: ['data', 'structures', 'algorithms', 'dsa']
},
{
    id: 'data-structures-lab',
    name: 'Data Structures Lab',
    icon: '🔬',
    description: 'Practical implementation of data structures and algorithms in programming',
    paperCount: 11,
    yearRange: '2020-2024',
    searchTerms: ['data', 'structures', 'lab', 'dsa']
},
{
    id: 'discrete-structures',
    name: 'Discrete Structures',
    icon: '🔢',
    description: 'Mathematical structures for computer science including logic and graph theory',
    paperCount: 18,
    yearRange: '2020-2024',
    searchTerms: ['discrete', 'structures', 'ds']
},
{
    id: 'linear-algebra',
    name: 'Linear Algebra',
    icon: '📐',
    description: 'Vector spaces, matrices, and linear transformations for CS applications',
    paperCount: 16,
    yearRange: '2020-2024',
    searchTerms: ['linear', 'algebra', 'la']
},
{
    id: 'theory-of-automata',
    name: 'Theory of Automata',
    icon: '🤖',
    description: 'Formal languages, finite automata, and computational theory',
    paperCount: 21,
    yearRange: '2020-2024',
    searchTerms: ['automata', 'theory', 'toa']
},
{
    id: 'oop',
    name: 'Object Oriented Programming',
    icon: '🗃️',
    description: 'Object-oriented programming concepts, inheritance, polymorphism, and design patterns',
    paperCount: 7,
    yearRange: '2020-2024',
    searchTerms: ['oop', 'object', 'oriented', 'programming']
},
{
    id: 'oop-lab',
    name: 'Object Oriented Programming Lab',
    icon: '🧪',
    description: 'Practical OOP implementation with hands-on coding exercises and projects',
    paperCount: 10,
    yearRange: '2020-2024',
    searchTerms: ['oop', 'lab', 'object', 'oriented']
},
{
    id: 'computer-architecture',
    name: 'Computer Architecture',
    icon: '🏛️',
    description: 'Computer system design, processor architecture, memory hierarchy, and performance analysis',
    paperCount: 3,
    yearRange: '2020-2024',
    searchTerms: ['computer', 'architecture', 'ca']
},
{
    id: 'coal-lab',
    name: 'Computer Organization and Assembly Language Lab',
    icon: '⚙️',
    description: 'Assembly language programming and computer organization practical exercises',
    paperCount: 9,
    yearRange: '2020-2024',
    searchTerms: ['coal', 'assembly', 'language', 'computer', 'organization', 'lab']
},
{
    id: 'compiler-construction',
    name: 'Compiler Construction',
    icon: '⚙️',
    description: 'Compiler design, lexical analysis, parsing, code generation, and optimization',
    paperCount: 5,
    yearRange: '2020-2024',
    searchTerms: ['compiler', 'construction', 'cc']
},
{
    id: 'digital-logic-design',
    name: 'Digital and Logic Design',
    icon: '🔌',
    description: 'Digital circuits, boolean algebra, combinational and sequential logic systems',
    paperCount: 4,
    yearRange: '2020-2024',
    searchTerms: ['digital', 'logic', 'design', 'dld']
},
{
    id: 'information-security',
    name: 'Information Security',
    icon: '🔒',
    description: 'Cybersecurity principles, cryptography, network security, and risk management',
    paperCount: 3,
    yearRange: '2020-2024',
    searchTerms: ['information', 'security', 'cybersecurity', 'is']
},
{
    id: 'operating-system',
    name: 'Operating System',
    icon: '🖥️',
    description: 'OS concepts, process management, memory management, and file systems',
    paperCount: 7,
    yearRange: '2020-2024',
    searchTerms: ['operating', 'system', 'os']
},
{
    id: 'operation-research',
    name: 'Operation Research',
    icon: '📈',
    description: 'Mathematical optimization, linear programming, and decision analysis techniques',
    paperCount: 4,
    yearRange: '2020-2024',
    searchTerms: ['operation', 'research', 'or']
},
{
    id: 'ideology-constitution-pakistan',
    name: 'Ideology and Constitution of Pakistan',
    icon: '🇵🇰',
    description: 'Study of Pakistani ideology, constitutional framework, and political system',
    paperCount: 4,
    yearRange: '2020-2024',
    searchTerms: ['ideology', 'constitution', 'icp']
},
{
    id: 'design-analysis-algorithms',
    name: 'Design and Analysis of Algorithms',
    icon: '🔍',
    description: 'Advanced algorithmic design techniques, complexity analysis, and optimization methods',
    paperCount: 6,
    yearRange: '2020-2024',
    searchTerms: ['design', 'analysis', 'algorithms', 'daa']
},
{
    id: 'database-system',
    name: 'Database System',
    icon: '🗄️',
    description: 'Database design, SQL, normalization, transaction management, and database administration',
    paperCount: 11,
    yearRange: '2020-2024',
    searchTerms: ['database', 'system', 'sql', 'mysql', 'dbms']
},
// NEW SUBJECT ADDED - Computer Networks
{
    id: 'computer-networks',
    name: 'Computer Networks',
    icon: '🌐',
    description: 'Network protocols, TCP/IP, routing, switching, and network security fundamentals',
    paperCount: 8,
    yearRange: '2020-2024',
    searchTerms: ['computer', 'networks', 'cn']
}

];

// Data management functions
class DataManager {
    constructor() {
        this.subjects = subjectsData;
    }

    getAllSubjects() {
        return this.subjects;
    }

    getSubjectById(id) {
        return this.subjects.find(subject => subject.id === id);
    }

    searchSubjects(query) {
        if (!query || query.trim().length < 2) {
            return [];
        }

        const searchTerm = query.toLowerCase().trim();
        
        return this.subjects.filter(subject => {
            // Search in subject name
            if (subject.name.toLowerCase().includes(searchTerm)) {
                return true;
            }
            
            // Search in description
            if (subject.description.toLowerCase().includes(searchTerm)) {
                return true;
            }
            
            // Search in predefined search terms
            if (subject.searchTerms.some(term => term.includes(searchTerm))) {
                return true;
            }
            
            return false;
        });
    }

    getSubjectStats() {
        return {
            totalSubjects: this.subjects.length,
            totalPapers: this.subjects.reduce((sum, subject) => sum + subject.paperCount, 0)
        };
    }
}

// Create global instance
const dataManager = new DataManager();
