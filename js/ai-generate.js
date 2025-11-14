// Enhanced AI Generate functionality for Programming Fundamentals
class AIGenerate {
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
            const response = await fetch('../pfSampleQuestions.json');
            if (!response.ok) {
                throw new Error('Failed to load sample questions');
            }
            this.sampleQuestions = await response.json();
            console.log('Sample questions loaded:', Object.keys(this.sampleQuestions));
        } catch (error) {
            console.error('Error loading sample questions:', error);
            // Fallback sample questions
            this.sampleQuestions = {
"Arrays": [
        "(a) A black and white image is stored in a matrix data of dimensions m x n. That is, it has m rows, n columns and n <= 1000. Matrix data contains only 0s and 1s. 0 represents a black pixel and 1 represents white pixel. We are interested in counting the number of k x k blocks (sub-matrices) in data that have at least k^2 / 2 white pixels in them. We call such blocks 'mostly white blocks'. Write a C++ function that returns the count of 'mostly white blocks' in data. You may use the function header: int countMostlyWhite(int data[][1000], int m, int n, int k). For further clarity consider the following example: Here matrix data has dimensions m = 5, n = 4, and let’s take k = 3. Take each 3 x 3 sub-matrix (this example has a total of 6 such matrices), and count its white pixels. Each 'mostly white block' must have at least 9 / 2 = 4 white pixels for k = 3. In the example there are 4 'mostly white blocks' of size 3x3 with their top-left corners at (0,1), (1,1), (2,0), and (2,1) respectively.\nMatrix:\n0 0 1 0\n0 1 0 1\n0 0 0 1\n1 0 1 0\n0 1 1 1",
          "Q7. Write a 'C' program and consider the following two 2D arrays named as CellNameData and CellExpData. The CellNameData array with 4×2 dimension contains the cell no. and cell names, whereas CellExpData array with 5×6 dimension contains the 4 types of gene expression values against each cell name. The first row in both arrays and the first column in CellExpData array are just row and column headers. Out of the 5 different columns in CellExpData array, select only those columns that match with the cell names given in CellNameData array. Store these data into a new 2D array named MergeData. After getting selected columns, expected data in MergeData array are shown below. [Marks 15, 25 minutes]\n[Hint: You can assume numeric values to represent the row and column names. No points will be given for hard-coding except declaration and initialization statements]\nCellNameData:\nCellNo. CellName\n0.1 LiverCell\n0.2 KidneyCell\n0.3 LungCell\nCellExpData:\nGnames LungCell SkinCell IntestineCell LiverCell KidneyCell\nGene1 2.3 1.7 4.3 3.4 4.5\nGene2 1.5 3.6 8.1 5.5 2.9\nGene3 4.1 6.6 5.3 3.9 8.1\nGene4 9.9 2.7 6.2 5.8 3.3\nMergeData:\nLiverCell KidneyCell LungCell\nGene1 3.4 4.5 2.3\nGene2 5.5 2.9 1.5\nGene3 3.9 8.1 4.1\nGene4 5.8 3.3 9.9",
    "During Covid-19 spread, a civil hospital has to manage budget for its 6 departments. Its account manager has to track expense reports department-wise and month-wise from January to May. Write a program using 2D arrays to hold the expense month-wise and department-wise. Requirements:\n(a) Department and month names should be stored and displayed using an array of string pointers.\n(b) Modular programming should be used (input-data, output-data, department-wise-total, month-wise-total) to generate the report.\n(c) The 2D array holding expenses should be passed from main to all functions by reference.\n(d) Calculate and display which department will need federal support (expenses higher than 50,000).\n(e) Display which month was stable in terms of expenses (lowest monthly expense).",
    "A junkyard wants to keep track of how many tons of junk each of its three junk trucks collects each day during a typical week. Write a program that stores this information in a 2D 3×7 array, where each row represents a different junk truck and each column represents a different day of the week. The program should first have the user input the data for each junk truck. Then it should create a report that includes:\n- Average quantity of junk collected per day by all the trucks.\n- The least amount of junk collected during the week by any one truck.\n- The greatest amount of junk collected during the week by any one truck.",
        "Print the output of the following code:\n\ncpp\nvoid UpdateStr(char str[]) {\n    for (int i = 1; str[i] != '\\0'; i++){\n        if (str[i] >= 'a' && str[i] <= 'z' && str[i-1] ==' ')\n            str[i] = str[i] - 32;\n    }\n}\n\nint main() {\n    char str[] = \"I am a student of programming!\";\n    UpdateStr(str);\n    cout << str << endl;\n}"
      ],
  "Loops": [
    "Write the output for this code or error if any:\nint main()\n{\n int i = 0;\n for (i=0; i<20; i++)\n {\n switch(i)\n {\n case 0:\n i += 5;\n case 1:\n i += 2;\n case 5:\n i += 5;\n default:\n i += 4;\n break;\n }\n printf(\"%d \", i);\n }\n return 0;\n}",
    "Write the missing part of the code, as the output is already given. Understand it:\n\nvoid main() {\nint arrAll[]={80, 82, 79, 71, 82, 65, 77};\n for(_______; ______; ________)\n {\n for(_______; ______; ________)\n ____________________\n ____________________\n }\n}\nOutput:\nP\nPR\nPRO\nPROG\nPROGR\nPROGRA\nPROGRAM",
    "Give the output for this:\n#include <stdio.h>\nvoid processNums(int nums[], int n) {\n int i = -1, j;\n for (j=0; j<n; ++j) {\n if (nums[j] == 1) {\n i++;\n int temp = nums[i];\n nums[i] = nums[j];\n nums[j] = temp;\n }\n }\n}\nint main() {\n int arr[] = {0,1,0,0,1,1,0,1,0,0};\n int n = 10;\n for (int i = 0; i < n; i++)\n printf(\"%d \", arr[i]);\n printf(\"\\n\");\n processNums(arr, n);\n for (int i = 0; i < n; i++)\n printf(\"%d \", arr[i]);\n return 0;\n}",
    "Write a C program that reads a string in dynamic array. Then draw the pyramid pattern of a user provided string.\n\nSample Input: Zeshan\n\nSample Output:\nZ\nZ E\nZ E S\nZ E S H\nZ E S H A\nZ E S H A N"
  ],
 "Functions": [
    "Ali has stored prices of all his sold products in a linear 1D dynamic array. Now, he wants you to develop a single function which can calculate sum of all the products on odd indexes and even indexes separately using recursion.",
    "Consider: Two trains are on the same track and they are coming toward each other. The speed of the first train is 50 km/h and the speed of the second train is 70 km/h. A honeybee starts flying between the trains when the distance between two trains is 100 km. The honeybee first flies from first train to second train. Once it reaches the second train, it immediately flies back to the first train … and so on until trains collide. Calculate the total distance travelled by the honeybee. Speed of the honeybee is 80 km/h. Distance formula is given below: Total distance travelled by honeybee = (honeybee speed * distance)/(train_1 speed + train_2 speed). Your task is to solve the problem recursively (direct or indirect).",
    "Mr. Patel family (He, his wife, one son and two daughters) wants to visit northern areas. Mr. Patel went to Faisal Movers Bus service for booking a ticket. He booked 5 seats for his family tour. [30 minutes, 6x3 = 18 Points]\n(a) Create an array of structure called TicketDetails which includes data members— Seat Number, Bus Name, Price, Destination City, and a nested structure which includes person details --- Traveller_ID(CNIC), Traveller Name, Age, and Contact Number.\n(b) Assign the value of each ticket based on the person’s age: if age < 15 or age > 60, ticket price = 4500; otherwise ticket price = 7000.\n(c) Write a function named 'calculate_bill' which calculates the total bill. Apply discounts: >10,000 => 10%, >25,000 => 20%, >50,000 => 30%. Print the receipt with all details.",
    "You are given n jobs and m workers. Each job has a difficulty and a profit, and each worker has an ability representing the maximum difficulty level they can handle. Write a C program to assign jobs to workers to maximize total profit. Function prototype is given with explanation of all arguments and return value. Sample Output: Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7] Output: 100. Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25] Output: 0.",
    "Develop a system for queue management for an exhibition ticketing service for a maximum of 50 people. Each person in queue has a ticket number and name (use Structures). Write four functions: (a) Insert a new person in the queue, (b) Remove a person from the queue, (c) Select a person based on a given name and print data using pointer to structures, (d) Initialize a pointer to function for each of the above functions and call them using these new pointers (all function signatures must be the same)."
],
"Pointers": [
    "Write outputs if the programs are fine or errors if any:\n\nmain()\n{\nchar *arr[] = { \"ant\", \"bat\", \"cat\", \"dog\", \"egg\", \"fly\" };\nfunction(arr);\n}\nvoid function(char **ptr)\n{\nchar *ptr1;\nptr1 = (ptr += sizeof(int))[-2];\nprintf(\"%s\\n\", ptr1);\n}",
    "Ali needs to compile result of two sections together. Develop a system to merge the data from 2 different size arrays into 1 array by passing to a function using pointers. Return the address of the new array and print this new array from Main Function. [6 points]\nFunction prototype: void* MergeArray(const void *Array1, size_t size1, const void *Array2, size_t size2);\nHint: Don’t use any built-in function. Use dynamic memory allocation.",
    "Write a program that will create a structure with N number of student details (Name, Roll# and Percentage) and print the inputted details. Memory to store and print structure should be allocated at run time using malloc() and released using free(). Hint: N number of students should be managed using realloc() function.",
    "Write the output for this or any errors if any:\n\nvoid main()\n{\n int k=5;\n int *p=&k;\n int **m=&p;\n printf(\"%d %d %d\",k,*p,**m);\n}",
    "Considering the following programs, illustrate the required process in graphical form. Assume all necessary header files are included and all programs are syntactically correct. Illustrate memory allocation for both types of dynamic memory allocation.\n\nvoid main()\n{\n double *ptr1,*ptr2;\n ptr1=(double*)malloc(5 * sizeof(double));\n ptr2=(double*)calloc(5 , sizeof(double));\n}\nShow dummy addresses and garbage values to highlight the difference between malloc() and calloc()."
],
   "Strings": [
    "Consider the given array containing N sentences declared in the main function.\n[30 minutes, 15 Points]\nchar *txt[] = {\"this sentence contains two\", \"one is so easy\", \"what is two\", \"this cannot be three\", \"why is this not three\", \"no numbers here\"};\nWrite a program that contains a function SaveInOrder(). This function should receive the sentences contained in txt[] using appropriate parameters and then save it to a local 2D char array such that the sentences containing 'one' be stored first, followed by the sentences containing 'two', then sentences containing 'three'. The sentences containing neither of 'one', 'two' and 'three' must be stored at the end.",
    "Write an ethical paragraph corrector program which accepts two to three lines of text as input. After tokenizing the text, the program checks for a list of unethical words and replaces them with some ethical words. For this purpose the program tokenizes, compares words and modifies the input string into an output string by replacing the words: stupid, ugly, pathetic, Alas etc. An example is shown to demonstrate.",
    "Write a program to check whether a substring is present in a string or not without using library function. For this you have to implement a function named myStrStr(), this function will return 1 if substring is present in the string and return 0 if substring is not present in the string.",
    "Morse code is an encoding scheme used in telecommunication to transmit text messages from one point to the other. The encoding scheme uses combinations of dots and dashes to represent alphabetic characters. We consider a fixed-length code: each letter is represented by 5 symbols, as shown in the code table below.\nA .---.  B -...-  C -.--.  D ---..  E .-.-.  F ..--.  G ----.  H ....-  I ..---  J .----  K --.--  L .--.  M ---.-  N --...  O -----  P -.---  Q -..--  R .-...  S ...--  T -....  U ..-..  V ...-.  W --.-.  X -..-.  Y -.-.-  Z --..-\nThe code for space is ......\nWrite a C++ function that takes in a message in the form of fixed-length Morse code and converts it to English text. You need to decide the input parameters of the function.\nSample example:\nInput message: -........-..---...--.......---...--.....---.-.-.-....--...--.---.----..-.-.\nOutput: THIS IS MESSAGE.",
    "Complete a function removeWordFromString that removes all occurrences of a given word from a string."
  ],
  "File Handling": [
    "Create three text files named as Department.txt, Personal.txt and Combine.txt. Personal file contains ID and Name, Department file contains ID and Salary. Write a function which takes input as record IDs and gets the detail from both personal and department file and then adds this entry into combine file (ID, Name, Salary).",
    "Assume that the 100 academic journals records are stored in a txt file (data.txt) as shown:\n[Marks 10*2=20, 25 minutes]\nID Title Journal Issue Year startPage endPage Author\n1 Cuckoo Hashing JAIg 51 2004 121 133 Robert Tarjan\n2 Deterministic Dictionaries JAIg 41 2001 69 85 Robert Lafore\n...\n100 What Godel missed SICO 51 2008 1 5 Paul Bailey\nHint: struct Article {int ID; char Title[30]; char Journal[50];….};\nNote: “No global variables allowed. Use appropriate data types, return types and function arguments if not explicitly mentioned.”\na. Write a function named “Check_Author(…)”. This function searches the data for all the articles authored by “Robert Tarjan” and changes the author to “Robert Lafore”. If no such articles exist the function must display “Not Found.”",
    "Write a program in C to replace a specific line with another text in a file. Your program must read the file name to open, the new text to replace and the line no. Finally display the content of the updated file.\n[30 minutes, 15 Points]\nAssume that the content of the file test.txt is:\ntest line 1\ntest line 2\ntest line 3\ntest line 4\nInput the file name to be opened: test.txt\nInput the content of the new line: line has been replaced\nInput the line no you want to replace: 2\nExpected Output:\ntest line 1\nline has been replaced\ntest line 3\ntest line 4",
    "Suppose a file contains a multiple line text. Write a program to replace first letter of every word with caps in a same file.\nHint: Use fseek() function to position your pointer before over writing the letter in caps.\nSample Input/Output:\nMyFile.txt (Input)\ndon't be stressed\ndo your best\nforget the rest\nMyFile.txt (Output)\nDon't Be Stressed\nDo Your Best\nForget The Rest",
    "Considering the output given, complete the following code snippets.\nOutput:\npart: a) Enter 'exit' as First Name to stop reading user input.\nFirst Name: Ali\nLast Name: Iqbal\nRoll Number: 101\nPercentage: 90.50\nFirst Name: Naima\nLast Name: Ali\nRoll Number: 102\nPercentage: 95.50\nFirst Name: exit"
  ],
"Structures": [
  "Write a C program to work with a 3D coordinate system. The program should include:\n\n(i) Define a struct named Point3D to represent a point in 3D space with three floating-point members: x, y, and z.\n(ii) Define a struct named Cuboid to represent a cuboid in 3D space. This structure should contain:\n   - A Point3D for the back-bottom-left corner of the cuboid\n   - Three float values representing the length, width, and height of the cuboid\n\nImplement the following functions:\n(iii) float distanceBetweenPoints(Point3D p1, Point3D p2): Calculates Euclidean distance\n(iv) float cuboidVolume(Cuboid c): Calculates volume of cuboid\n(v) int isPointInsideCuboid(Point3D p, Cuboid c): Checks if point is inside cuboid.",
  " Write a program which stores information about a date in a structure containing three members i.e. day, month and year. Using bit fields the day number should get stored in first 5 bits of day, the month number in 4 bits of month and year in 12 bits of year. Write a program to read date of joining of 10 employees and display them in ascending order of year.",
  "Develop a system for a queue management for an exhibition ticketing service for maximum of 50 people. Each person in queue has a ticket number and name (Hint: Use Structures). Write four functions:\n   a) Insert new person in queue\n   b) Remove a person from queue\n   c) Select person by name using pointer to structures\n   d) Use function pointers to call above functions.",
  "Illustrate memory allocation for the following structure:\n\nstruct day {\n    int date;\n    char month[10];\n    int year;\n};\n\nstruct student {\n    int id1, id2;\n    char a;\n    float p;\n    struct day birthday;\n} student1;\n\nAssume starting address as 1020 and show the memory layout with offsets."
],
  "Recursion": [
    "Write a C program that calculates the number of 1s in the entire 2D Array of MxN size using recursion. You will be rewarded ZERO marks if you use loops by any means in the program.\nInput:\n1 0 0\n0 1 1\n1 0 1\n\nOutput: Count = 5",
    "Draw the recursive stack of the following function, if we call fibonacci(3) with n = 3.",
    "Write the output for this:\n#include <stdio.h>\nint mysteryRec(int a, int b) {\n if (b == 1)\n  return a;\n else\n  return a + mysteryRec(a, b - 1);\n}\nint main(void) {\n printf(\"The result is %u\\n\", mysteryRec(4, 5));\n return 0;\n}"
  ],
   "Bitwise": [
    "Write a program, which stores information about a date in a structure containing three members i.e. day, month and year. Using bit fields, the day number should get stored in first 5 bits of day, the month number in 4 bits of month and year in 12 bits of year. Write a program to read date of joining of 10 employees and display them in ascending order of year.",
    "Write the output for this:\n#include <stdio.h>\nint mystery(int bits ) {\n int i, total = 0;\n int mask = 1 << 31;\n for (i = 1; i <= 32; ++i, bits <<= 1) {\n if ((bits & mask) == mask)\n ++total;\n }\n return !(total % 2) ? 1 : 0;\n}\nint main(void) {\n printf(\"Result is %d\\n\", mystery(53));\n printf(\"Result is %d\\n\", mystery(8));\n printf(\"Result is %d\\n\", mystery(18));\n return 0;\n}",
    "Implement a function that counts the number of set bits (1s) in a 32-bit integer using bitwise operations only (no loops, no library functions).",
    "Implement a simple bitwise encryption algorithm that:\n- Takes a character array (string) as input\n- For each character, performs the following operations:\n  • Swaps the upper and lower nibbles (4-bit groups)\n  • XORs the result with a key byte 0x3C\n  • Rotates the bits left by 2 positions."
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
        console.log('AI Generate UI setup complete');
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
                        Select a topic from Programming Fundamentals to generate AI-powered practice questions:
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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerate.showTopicSelection();">
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

2. **FOR QUESTIONS THAT REQUIRE CODE OUTPUT/DRY-RUN:**
   - If you write a question like "Write the output for this code:" or "Find the output:" or "Dry run the following:"
   - YOU MUST IMMEDIATELY INCLUDE THE COMPLETE C++ CODE RIGHT AFTER THE QUESTION TEXT
   - DO NOT write "Output the following:" and then leave it blank
   - DO NOT write "Find the output:" without showing the code
   - The code MUST be complete with #include statements, main function, and all necessary parts
   - Format the code clearly with proper indentation
   - Keep code length similar to the sample questions

3. **EXAMPLE OF CORRECT FORMAT:**
   Question: "Write the output for this code or error if any:
   
   #include <iostream>
   using namespace std;
   int main() {
       int x = 5;
       cout << x << endl;
       return 0;
   }"
   
   This is CORRECT because the code is included and matches sample difficulty.

4. **EXAMPLE OF INCORRECT FORMAT:**
   Question: "Write the output for this code:
   [code would be here]"
   
   This is WRONG - the code is missing!

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
                    <button class="ai-retry-btn" onclick="this.closest('.ai-modal').remove(); window.aiGenerate.showTopicSelection();" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
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

// Initialize global instance
window.aiGenerate = new AIGenerate();
