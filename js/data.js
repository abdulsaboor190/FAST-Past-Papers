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
    id: 'coal-theory',
    name: 'Computer Organization and Assembly Language',
    icon: '🔧',
    description: 'Computer organization fundamentals and assembly language programming theory',
    paperCount: 12, // Update this with actual count
    yearRange: '2020-2024',
    searchTerms: ['coal', 'computer', 'organization', 'assembly', 'language', 'theory']
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
},
{
    id: 'multivariable-calculus',
    name: 'Multivariable Calculus',
    icon: '📐',
    description: 'Advanced calculus with multiple variables, partial derivatives, multiple integrals, and vector calculus',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['multivariable', 'calculus', 'mvc', 'vector', 'calculus']
},
{
    id: 'expository-writing',
    name: 'Expository Writing',
    icon: '✍️',
    description: 'Learn to write clear, informative, and well-structured expository essays and academic papers',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['ew', 'expo', 'essay', 'academic', 'writing', 'expository']
},
{
    id: 'probability-statistics',
    name: 'Probability and Statistics',
    icon: '📊',
    description: 'Statistical analysis, probability distributions, hypothesis testing, and data interpretation',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['probability', 'statistics', 'stats', 'statistical', 'analysis']
},
{
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    icon: '🤖',
    description: 'Introduction to artificial intelligence concepts including search, knowledge representation, and reasoning',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['artificial', 'intelligence', 'ai']
},
{
    id: 'artificial-intelligence-lab',
    name: 'Artificial Intelligence Lab',
    icon: '🧪',
    description: 'Practical lab work for artificial intelligence including implementations and experiments',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['artificial', 'intelligence', 'lab', 'ai lab']
},
{
    id: 'software-engineering',
    name: 'Software Engineering',
    icon: '🛠️',
    description: 'Software development life cycle, requirements engineering, design, testing, and project management',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['software', 'engineering', 'se']
},
{
    id: 'technical-business-writing',
    name: 'Technical and Business Writing',
    icon: '📝',
    description: 'Technical documentation, reports, and business communication skills for professionals',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['technical', 'business', 'writing', 'tbw']
},
{
    id: 'applied-human-computer-interaction',
    name: 'Applied Human Computer Interaction',
    icon: '🧑‍💻',
    description: 'Principles of human-computer interaction, usability, and user-centered design applied to real systems',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['applied', 'human', 'computer', 'interaction', 'hci', 'ahci']
},
{
    id: 'data-science',
    name: 'Data Science',
    icon: '📈',
    description: 'Data analysis, visualization, and machine learning techniques for extracting insights',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['data', 'science', 'ds']
},
{
    id: 'numerical-computing',
    name: 'Numerical Computing',
    icon: '🔢',
    description: 'Numerical methods and computing techniques for solving mathematical problems',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['numerical', 'computing', 'nc']
},
{
    id: 'computer-networks-lab',
    name: 'Computer Networks Lab',
    icon: '🧪',
    description: 'Practical lab work for computer networks including simulations and configurations',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['computer', 'networks', 'lab', 'cn lab']
},
{
    id: 'parallel-distributed-computing',
    name: 'Parallel and Distributed Computing',
    icon: '⚡',
    description: 'Concepts and practices of parallel and distributed computing architectures and algorithms',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['parallel', 'distributed', 'computing', 'pdc']
},
{
    id: 'software-design-analysis',
    name: 'Software Design and Analysis',
    icon: '📐',
    description: 'Software design principles, analysis techniques, and design patterns for building robust software systems',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['software', 'design', 'analysis', 'sda', 'design patterns']
},
{
    id: 'operating-system-lab',
    name: 'Operating System Lab',
    icon: '🧪',
    description: 'Practical lab work for operating systems including process management, memory management, and system programming',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['operating', 'system', 'lab', 'os lab', 'os practical']
},
{
    id: 'database-lab',
    name: 'Database Lab',
    icon: '🧪',
    description: 'Practical lab work for database systems including SQL queries, database design, and implementation',
    paperCount: 0,
    yearRange: '2020-2024',
    searchTerms: ['database', 'lab', 'db lab', 'sql', 'dbms', 'database practical']
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

