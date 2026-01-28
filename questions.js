const QUIZ_DATA = {
    topics: [
        { id: 'fundamentals', name: 'Testing Fundamentals', icon: '📘', questions: [] },
        { id: 'stlc', name: 'STLC', icon: '🔄', questions: [] },
        { id: 'levels', name: 'Level of Testing', icon: '📊', questions: [] },
        { id: 'types', name: 'Types of Testing', icon: '🧪', questions: [] },
        { id: 'quality', name: 'Software Quality', icon: '⭐', questions: [] },
        { id: 'planning', name: 'Test Planning', icon: '📋', questions: [] },
        { id: 'management', name: 'Test Management', icon: '📁', questions: [] },
        { id: 'testcases', name: 'Test Cases', icon: '📝', questions: [] },
        { id: 'bugreport', name: 'Bug Report', icon: '🐛', questions: [] },
        { id: 'approaches', name: 'Test Approaches', icon: '🎯', questions: [] },
        { id: 'domain', name: 'Domain Testing', icon: '🔢', questions: [] },
        { id: 'decision', name: 'Decision Table Testing', icon: '📐', questions: [] },
        { id: 'state', name: 'State Transition Testing', icon: '🔀', questions: [] },
        { id: 'usecase', name: 'Use Case Testing', icon: '👤', questions: [] },
        { id: 'gui', name: 'GUI Testing', icon: '🖥️', questions: [] },
        { id: 'security', name: 'Security Testing', icon: '🔐', questions: [] },
        { id: 'api', name: 'API Testing', icon: '🌐', questions: [] },
        { id: 'database', name: 'Database Testing', icon: '🗄️', questions: [] },
        { id: 'whitebox', name: 'White Box Testing', icon: '⚙️', questions: [] },
        { id: 'automation', name: 'Automation Testing', icon: '🤖', questions: [] }
    ]
};

// 1. Testing Fundamentals (10 câu - Q1-10 section 1)
QUIZ_DATA.topics[0].questions = [
    { q: "Which testing level focuses on the overall system integration?", opts: ["Unit testing", "Regression testing", "Acceptance testing", "Integration testing"], ans: 3 },
    { q: "What is the difference between static testing and dynamic testing?", opts: ["Static testing is performed by developers, dynamic testing by testers", "Static testing is performed before coding, dynamic testing after coding", "Static testing involves executing code, dynamic testing involves reviewing code", "There is no difference"], ans: 1 },
    { q: "What is software testing?", opts: ["The process of creating software", "The process of maintaining software", "The process of designing software", "The process of finding bugs in software"], ans: 3 },
    { q: "What is the main purpose of a test case?", opts: ["To design the user interface", "To document the dev process", "To identify defects in software", "To outline the project schedule"], ans: 2 },
    { q: "What is the significance of automated testing?", opts: ["It can perform tests difficult for humans", "It is faster than manual testing", "It is more accurate and repeatable", "All of the above"], ans: 3 },
    { q: "Which testing phase helps ensure software works correctly after changes?", opts: ["Regression testing", "Performance testing", "Unit testing", "System testing"], ans: 0 },
    { q: "What is the role of a test plan in software testing?", opts: ["To document overall testing strategy", "To specify features to include", "To outline coding standards", "To provide release schedule"], ans: 0 },
    { q: "When should testing activities ideally begin in the SDLC?", opts: ["Before design phase", "During requirements gathering", "After coding is complete", "Only after deployment"], ans: 1 },
    { q: "What is the purpose of usability testing?", opts: ["Check performance under stress", "Ensure handling many users", "Verify business requirements", "Evaluate UI and user experience"], ans: 3 },
    { q: "Which is NOT a primary goal of software testing?", opts: ["Maximizing dev team's coding speed", "Ensuring software meets requirements", "Ensuring software is reliable", "Finding defects"], ans: 0 }
];

// 2. STLC (10 câu - Q11-20 section 1)
QUIZ_DATA.topics[1].questions = [
    { q: "What is the first phase in the Software Testing Life Cycle (STLC)?", opts: ["Test Execution", "Test Planning", "Test Closure", "Test Design"], ans: 1 },
    { q: "What is the purpose of the Test Execution phase?", opts: ["To analyze test results", "To close testing activities", "To execute test cases", "To plan testing activities"], ans: 2 },
    { q: "In which phase are test scripts and test data prepared?", opts: ["Test Execution", "Test Design", "Test Planning", "Test Closure"], ans: 1 },
    { q: "During which phase are test cases developed based on requirements?", opts: ["Test Closure", "Test Design", "Test Planning", "Test Execution"], ans: 1 },
    { q: "When is the actual testing of the software carried out?", opts: ["Test Closure", "Test Design", "Test Execution", "Test Planning"], ans: 2 },
    { q: "Which phase involves comparing actual results with expected results?", opts: ["Test Planning", "Test Closure", "Test Execution", "Test Design"], ans: 2 },
    { q: "What is the primary goal of the Test Closure phase?", opts: ["To close defects", "To formally close testing activities", "To design test cases", "To execute test cases"], ans: 1 },
    { q: "Which phase ensures all test deliverables are finalized and archived?", opts: ["Test Design", "Test Planning", "Test Execution", "Test Closure"], ans: 3 },
    { q: "Which phase involves summarizing testing and preparing summary report?", opts: ["Test Planning", "Test Execution", "Test Design", "Test Closure"], ans: 3 },
    { q: "Which phase involves defining scope, objectives, resources, and schedule?", opts: ["Test Closure", "Test Execution", "Test Design", "Test Planning"], ans: 3 }
];

// 3. Level of Testing (10 câu - Q21-30 section 1)
QUIZ_DATA.topics[2].questions = [
    { q: "Which test level is concerned with security, performance, and usability defects?", opts: ["Acceptance Testing", "Functional Testing", "Non-Functional Testing", "Regression Testing"], ans: 2 },
    { q: "What is the primary purpose of Non-Functional Testing?", opts: ["To test how well software performs under specific conditions", "To ensure system meets specified requirements", "To verify correctness of individual units", "To validate integration of components"], ans: 0 },
    { q: "What is the purpose of Acceptance Testing?", opts: ["To verify correctness of individual units", "To ensure components function in isolation", "To test integration between modules", "To validate system meets business requirements"], ans: 3 },
    { q: "What is the primary goal of System Testing?", opts: ["To test in production-like environment", "To verify each unit functions correctly", "To ensure system meets specified requirements", "To validate integration of components"], ans: 2 },
    { q: "Which test level is often performed by end-users or clients?", opts: ["System Testing", "Unit Testing", "User Acceptance Testing", "Integration Testing"], ans: 2 },
    { q: "Which test level focuses on interaction between components or systems?", opts: ["Acceptance Testing", "System Testing", "Integration Testing", "Unit Testing"], ans: 2 },
    { q: "What is the purpose of the Unit Testing phase?", opts: ["To test individual components in isolation", "To ensure system performs under stress", "To validate system meets requirements", "To test entire system as a whole"], ans: 0 },
    { q: "Which test level typically involves testing in simulated/actual production environment?", opts: ["Acceptance Testing", "System Testing", "Unit Testing", "Integration Testing"], ans: 0 },
    { q: "Which test level focuses on successful deployment in target environment?", opts: ["Integration Testing", "Deployment Testing", "Unit Testing", "System Testing"], ans: 1 },
    { q: "Regression testing is primarily associated with which test level?", opts: ["System Testing", "Unit Testing", "User Acceptance Testing", "Integration Testing"], ans: 0 }
];

// 4. Types of Testing (6 câu - Q1-6 section 2)
QUIZ_DATA.topics[3].questions = [
    { q: "Which of the following option is a Test Type?", opts: ["Acceptance testing", "System testing", "Component testing", "Functional testing"], ans: 3 },
    { q: "Which is a non-functional testing method? i) System testing ii) Performance testing iii) Availability testing", opts: ["i & iii", "i & ii", "ii & iii", "i"], ans: 2 },
    { q: "Functional System Testing:", opts: ["Testing system's functions in relation to other systems", "Testing components containing system's functions", "Testing if system performs functions within time frame", "Testing overall end-to-end functionality"], ans: 3 },
    { q: "Repetition of testing after changes to detect new errors is called:", opts: ["Negative Testing", "Confirmation Testing", "Regression Testing", "Re-testing"], ans: 2 },
    { q: "The difference between Re-testing and Regression Testing is:", opts: ["Re-testing looks for side-effects; Regression ensures bugs are fixed", "Re-testing ensures bugs are fixed; Regression looks for side-effects", "Re-testing is after bugs fixed; Regression is earlier", "Re-testing by developers; Regression by testers"], ans: 1 },
    { q: "Non-functional system testing includes:", opts: ["Testing system features using only necessary software", "Testing system's quality attributes, including performance and usability", "Testing to see where function is not working", "Testing system features for that function"], ans: 1 }
];

// 5. Software Quality (10 câu - Q7-16 section 2)
QUIZ_DATA.topics[4].questions = [
    { q: "Đặc điểm nào KHÔNG phải là yếu tố quan trọng của Interaction Capability?", opts: ["Khả năng xử lý lỗi và thông báo cho người dùng", "Khả năng tùy biến giao diện người dùng", "Khả năng tương thích với các phần cứng khác nhau"], ans: 2 },
    { q: "Đặc tính nào trong ISO/IEC 25010 đề cập đến khả năng phần mềm hoạt động không lỗi?", opts: ["Tính tin cậy (Reliability)", "Tính khả dụng (Usability)", "Tính bảo trì (Maintainability)"], ans: 0 },
    { q: "Tính Safety có liên quan đến điều nào sau đây?", opts: ["Tốc độ xử lý khi gặp tình huống khẩn cấp", "Bảo mật hệ thống khỏi các cuộc tấn công", "Phát hiện và ngăn chặn lỗi có thể gây nguy hiểm"], ans: 2 },
    { q: "Đặc tính nào đánh giá mức độ phần mềm đáp ứng yêu cầu và mong đợi của người dùng?", opts: ["Tính năng (Functionality)", "Tính bảo mật (Security)", "Tính khả dụng (Usability)"], ans: 0 },
    { q: "Đặc tính nào liên quan đến mức độ dễ dàng người dùng có thể sử dụng phần mềm?", opts: ["Tính bảo mật (Security)", "Tính tin cậy (Reliability)", "Tính khả dụng (Usability)"], ans: 2 },
    { q: "Tính bảo trì (Maintainability) trong ISO/IEC 25010 đề cập đến điều gì?", opts: ["Khả năng thích nghi với yêu cầu thay đổi", "Khả năng phục hồi sau sự cố", "Khả năng được sửa chữa và cải tiến dễ dàng"], ans: 2 },
    { q: "Đặc tính nào liên quan đến khả năng hoạt động trên nhiều môi trường khác nhau?", opts: ["Tính tin cậy (Reliability)", "Tính tương thích (Compatibility)", "Tính hiệu suất (Performance)"], ans: 1 },
    { q: "Tại sao Flexibility là một đặc tính quan trọng của phần mềm?", opts: ["Để tăng tốc độ thực thi", "Để giúp dễ dàng sửa lỗi", "Để giúp dễ dàng thích nghi với yêu cầu hoặc thay đổi mới"], ans: 2 },
    { q: "Đặc tính nào liên quan đến khả năng bảo vệ dữ liệu và thông tin khỏi mối đe dọa?", opts: ["Tính bảo mật (Security)", "Tính khả dụng (Usability)", "Tính hiệu suất (Performance)"], ans: 0 },
    { q: "Tính hiệu suất (Performance) có thể đo bằng các yếu tố nào?", opts: ["Tốc độ xử lý, thời gian phản hồi, sử dụng tài nguyên", "Tính năng, khả năng sử dụng, tính bảo mật", "Độ tin cậy, khả năng bảo trì, tính tương thích"], ans: 0 }
];

// 6. Test Planning (9 câu - Q17-25 section 2)
QUIZ_DATA.topics[5].questions = [
    { q: "What is the primary focus of risk analysis in a test plan?", opts: ["Writing test scripts", "Identifying potential project risks that may impact testing", "Defining the test schedule", "Executing test cases"], ans: 1 },
    { q: "What is the purpose of a test strategy in relation to a test plan?", opts: ["It defines the overall testing approach", "It schedules testing activities", "It lists detailed test cases", "It identifies bugs"], ans: 0 },
    { q: "What is the difference between a test plan and a test case?", opts: ["Test plan outlines approach, test case details steps to execute", "Test cases and test plans serve the same purpose", "Both terms are interchangeable", "Test case outlines approach, test plan details steps"], ans: 0 },
    { q: "When should a test plan be created in the SDLC?", opts: ["After testing", "During requirements gathering", "During coding", "Before testing"], ans: 3 },
    { q: "Who is responsible for reviewing and approving the test plan?", opts: ["Project managers", "Developers", "Customers", "Testers"], ans: 0 },
    { q: "What is the importance of defining entry and exit criteria in a test plan?", opts: ["To create test cases", "To identify bugs in code", "To estimate testing effort", "To determine when testing should start and end"], ans: 3 },
    { q: "What is the significance of defining roles and responsibilities in a test plan?", opts: ["To identify who is responsible for what", "To assign blame in case of failure", "To write code", "To create additional test cases"], ans: 0 },
    { q: "What does 'test coverage' refer to in the context of a test plan?", opts: ["Time taken to execute test cases", "Scope of testing in terms of requirements covered", "Number of test cases executed", "Percentage of bugs found"], ans: 1 },
    { q: "What information is typically included regarding the test environment?", opts: ["Test schedule", "Hardware and software requirements", "Test case details", "Risk analysis"], ans: 1 }
];

// 7. Test Management (10 câu - Q1-10 section 3)
QUIZ_DATA.topics[6].questions = [
    { q: "What is the primary goal of Test Monitoring and Control in Test Management?", opts: ["To train new team members", "To develop the software", "To design test cases", "To ensure testing process runs as expected"], ans: 3 },
    { q: "What does Test Estimation primarily focus on?", opts: ["Approximately determining how long a task would take", "Deciding software's release date", "Assigning tasks to team members", "Determining project's total cost"], ans: 0 },
    { q: "Which kind of risk does not belong to Project Risk?", opts: ["Organization risk", "Product risk", "Technical risk", "Business risk"], ans: 1 },
    { q: "What is the role of a Test Administrator in the test management process?", opts: ["Analyzing software requirement specifications", "Reporting the defects", "Designing test scenarios", "Building up the test environment"], ans: 3 },
    { q: "Which of the following is not a part of the Test Management process?", opts: ["Test Monitoring and Control", "Test Planning", "Code Development", "Risk Analysis"], ans: 2 },
    { q: "Which technique is not used for Test Estimation?", opts: ["Work Breakdown Structure", "Wideband Delphi technique", "Function Point Analysis", "Agile Methodology"], ans: 3 },
    { q: "In Function Point Method, what weightage is assigned to a 'Complex' task?", opts: ["5", "10", "3", "1"], ans: 0 },
    { q: "What is the primary objective of Test Management?", opts: ["Designing complex test cases", "Focusing only on automated testing", "Reducing cost of development", "Ensuring high quality and effectiveness of testing"], ans: 3 },
    { q: "What is the first step in test estimation using Work Breakdown Structure?", opts: ["Dividing the whole project task into subtasks", "Assigning tasks to team members", "Calculating total project duration", "Estimating cost for each task"], ans: 0 },
    { q: "Which aspect of Test Management involves defining scope, approach, resources, and schedule?", opts: ["Test Planning", "Test Implementation", "Test Design", "Test Execution"], ans: 0 }
];

// 8. Test Cases (10 câu - Q11-20 section 3)
QUIZ_DATA.topics[7].questions = [
    { q: "A test case is developed based on …", opts: ["Test progress report", "Bug report", "Test suite", "Test condition"], ans: 3 },
    { q: "It is a condition that must be met before executing a test case.", opts: ["Expected result", "Precondition", "Test case title", "Test steps"], ans: 1 },
    { q: "Which field should be filled in the test execution phase?", opts: ["Steps to reproduce", "Actual result", "Title", "Expected result"], ans: 1 },
    { q: "Test cases should be written for which level of testing?", opts: ["System testing, Acceptance testing", "Only System Testing", "Any test level can have written test cases", "Unit testing, Integration testing"], ans: 2 },
    { q: "Blocked/Skipped test case means …", opts: ["Test case executed and actual result is different from expected", "The test case can't be executed", "Test case executed and actual result equals expected", "The test case is not executed"], ans: 1 },
    { q: "The following steps are the best way to test steps (sequential UI steps example).", opts: ["False", "True"], ans: 0 },
    { q: "What does a blocked/skipped test case mean?", opts: ["We were not able to execute because it depends on another test case", "We executed and actual result is different than expected", "We executed and actual result is the same as expected"], ans: 0 },
    { q: "Testing E-wallet app by transferring more than balance is considered as a …", opts: ["Positive test case", "Negative test case"], ans: 1 },
    { q: "We should never fill the actual result field until executing the test case.", opts: ["True", "False"], ans: 0 },
    { q: "iPhone 8 - iOS 15.1 - 5G Network. Which are correct environment dimensions?", opts: ["Software - hardware - network", "Network - software - hardware", "Hardware - software - network", "Hardware - network - software"], ans: 2 }
];

// 9. Bug Report (5 câu - Q21-25 section 3)
QUIZ_DATA.topics[8].questions = [
    { q: "In bug reporting, what does the 'Status' field indicate?", opts: ["Location where bug was found", "Timeline for next software update", "Severity level of the bug", "Current state of bug (e.g., New, Closed, Reopened)"], ans: 3 },
    { q: "What does Severity in a bug report indicate?", opts: ["Complexity of the bug", "Impact of the defect on the application", "Urgency with which bug should be fixed", "Number of users affected"], ans: 1 },
    { q: "What does 'Status = Re-Open' imply in a Bug Life Cycle?", opts: ["Bug previously marked as resolved has reappeared or was not fixed", "Bug has been fixed and is pending review", "Bug report needs more information", "Bug is low priority"], ans: 0 },
    { q: "Which of the following is NOT an essential element of a bug report?", opts: ["Bug ID", "Name of the customer", "Problem summary", "Function name where bug was found"], ans: 1 },
    { q: "Which is a factor in determining bug report priority?", opts: ["Impact of bug on core functionalities", "Software release date", "Geographical location of reporter", "Color scheme of software"], ans: 0 }
];

// 10. Test Approaches (5 câu - Q26-30 section 3)
QUIZ_DATA.topics[9].questions = [
    { q: "What is the definition of 'test technique'?", opts: ["Sequence of instructions for test execution", "Set of test scripts", "Procedure used to define test conditions, design test cases, and specify test data", "Documentation of test activities"], ans: 2 },
    { q: "The testing approach which tests as a user with access to internals is:", opts: ["Grey-box testing", "White-box testing", "Black-box testing", "Not applicable"], ans: 0 },
    { q: "The testing approaches are classified into:", opts: ["Three major categories: black-box, white-box, and grey-box", "Two major categories", "Four major categories", "Three categories: boundary value, decision table, state transition"], ans: 0 },
    { q: "'Detailed design and internal structure' are examples of test basis for …", opts: ["Experience-based test technique", "None of the above", "Black-box test technique", "White-box test technique"], ans: 3 },
    { q: "'Use cases' are examples of test basis for …", opts: ["Experience-based test technique", "None of the above", "Black-box test technique", "White-box test technique"], ans: 2 }
];

// 11. Domain Testing (8 câu - Q1-8 section 4)
QUIZ_DATA.topics[10].questions = [
    { q: "In 'Equivalence partitioning', the partitions are called …", opts: ["Equivalence classes", "Sub partitions", "Valid equivalence partitions", "Invalid equivalence partitions"], ans: 0 },
    { q: "In 'Equivalence partitioning', partitions that contain valid values are called …", opts: ["Invalid equivalence partitions", "Valid equivalence partitions", "Equivalence classes", "Sub partitions"], ans: 1 },
    { q: "If we have values 0, 3, 6, 9 for equivalence partitions. Which rule is applicable on '9'?", opts: ["Each value must belong to one and only one equivalence partition", "Each value can belong to one or more equivalence partitions", "Any partition may be divided into sub-partitions if required", "Not applicable"], ans: 0 },
    { q: "The coverage of Boundary Value Analysis is measured as …", opts: ["None of above", "Number of boundary values tested / total identified boundary test values", "Number of tested equivalence partitions / total boundary test values", "Number of boundary values tested / total identified equivalence partitions"], ans: 1 },
    { q: "Boundary value analysis is considered as an extension of …", opts: ["Use cases testing", "Equivalence partitioning", "State transition testing", "Decision table testing"], ans: 1 },
    { q: "The equivalence partitioning coverage is measured as …", opts: ["Number tested by at least ONE value / total identified", "Number tested by at least THREE values / total", "Number tested by at least TWO values / total", "Number tested by at least FOUR values / total"], ans: 0 },
    { q: "In 'Equivalence partitioning', partitions that contain invalid values are called …", opts: ["Invalid equivalence partitions", "Sub partitions", "Valid equivalence partitions", "Equivalence classes"], ans: 0 },
    { q: "Boundary value analysis can be applied on which test levels?", opts: ["Unit and integration testing", "Unit, integration and system testing", "Unit testing only", "Unit, integration, system and acceptance testing"], ans: 3 }
];

// 12. Decision Table Testing (6 câu - Q9-14 section 4)
QUIZ_DATA.topics[11].questions = [
    { q: "The common minimum coverage standard for decision table testing is …", opts: ["At least one test case per decision rule", "At least three test cases per decision rule", "At least four test cases per decision rule", "At least two test cases per decision rule"], ans: 0 },
    { q: "The values in decision table testing are usually shown as … and may have …", opts: ["Discrete value only / same types", "Boolean or discrete values / same types", "Boolean or discrete values / different types", "Discrete values only / different types"], ans: 2 },
    { q: "For conditions with yes/no questions, the number of table rules equals … (n = number of conditions)", opts: ["2n", "n²", "2ⁿ", "n+2"], ans: 2 },
    { q: "In decision table testing, each column corresponds to a …", opts: ["Decision rule", "Decision partition", "Not applicable", "Decision coverage"], ans: 0 },
    { q: "Coverage in decision table testing is measured as …", opts: ["Number of decision rules tested by at least two test cases / total", "Number of decision rules tested by at least one test case / total", "Number tested by at least three test cases / total", "Not applicable"], ans: 1 },
    { q: "When different combinations of conditions result in different outcomes, which technique is used?", opts: ["Decision coverage", "Boundary value analysis", "Decision table", "Equivalence partitioning"], ans: 2 }
];

// 13. State Transition Testing (9 câu - Q15-23 section 4)
QUIZ_DATA.topics[12].questions = [
    { q: "Every independent transition requires a separate test case.", opts: ["True", "False"], ans: 0 },
    { q: "It is the state in which you cannot move from it to another state.", opts: ["Start state", "Transition state", "Alive state", "Dead state"], ans: 3 },
    { q: "State transition coverage is measured as …", opts: ["Number of valid events / total states or transitions", "Number of invalid events / total states or transitions", "Number of states or transitions tested / total states or transitions", "Not applicable"], ans: 2 },
    { q: "Based on State Transition Diagram of a switch, which test case is invalid?", opts: ["ON to FAULT", "OFF to ON", "FAULT to ON", "ON to OFF"], ans: 2 },
    { q: "A 'State transition table' shows …", opts: ["Valid and invalid transitions", "Not applicable", "Invalid transitions only", "Valid transitions only"], ans: 0 },
    { q: "Which statement is correct about 'State transition diagrams'?", opts: ["Shows both possible and impossible states", "Not applicable", "Shows only the possible software states", "Shows only the impossible software states"], ans: 2 },
    { q: "Given the battery charger state model, which sequence has highest transition coverage?", opts: ["OFF→WAIT→OFF→WAIT→TRICKLE→CHARGE→HIGH→CHARGE→LOW", "HIGH→CHARGE→LOW→CHARGE→TRICKLE→WAIT→TRICKLE→WAIT→TRICKLE", "WAIT→TRICKLE→WAIT→OFF→WAIT→TRICKLE→CHARGE→LOW→CHARGE", "WAIT→TRICKLE→CHARGE→HIGH→CHARGE→TRICKLE→WAIT→OFF→WAIT"], ans: 3 },
    { q: "Which is true in the context of State Transition Testing?", opts: ["It is a black-box technique", "It covers all possible conditions", "It is used to test system behavior under varying inputs", "All the previous"], ans: 3 },
    { q: "Given the state transition, which series provides 100% 0-switch coverage?", opts: ["ABECFD", "ABEBCD", "ABECFF", "ABCFD"], ans: 0 }
];

// 14. Use Case Testing (5 câu - Q1-5 section 5)
QUIZ_DATA.topics[13].questions = [
    { q: "Which statements are true about use case testing? (1) Use case can be described as interactions, activities, and preconditions. (2) Use cases can include variations such as error handling. (3) Code is designed to exercise defined behaviors.", opts: ["1, 2 are true / 3 is false", "1 is true / 2, 3 are false", "1, 2, 3 are false", "1, 2, 3 are true"], ans: 0 },
    { q: "Use cases specify behaviors that a subject can perform with …", opts: ["Not applicable", "Only two actors", "Only one actor", "One or more actors"], ans: 3 },
    { q: "Which of the following is commonly used technique in use-case testing?", opts: ["White-box testing", "Stress testing", "Scenario-based testing", "Boundary value analysis"], ans: 2 },
    { q: "What is use-case testing?", opts: ["Testing performance under heavy load", "Testing security features", "Testing individual components", "Testing system functionality based on real-world scenarios"], ans: 3 },
    { q: "What is a key special attribute of use-case testing?", opts: ["Only applicable during development", "Emphasizes interaction between system and users", "Focuses solely on unit testing", "Concerned mainly with system architecture"], ans: 1 }
];

// 15. GUI Testing (10 câu - Q6-15 section 5)
QUIZ_DATA.topics[14].questions = [
    { q: "Which of the following is a common GUI bug?", opts: ["Database overload", "Hardware compatibility", "Incorrect field default", "Slow processing speed"], ans: 2 },
    { q: "What is a common GUI bug related to data handling?", opts: ["Mishandling of server process failures", "Inadequate data encryption", "Inefficient data storage", "Overuse of data analytics"], ans: 0 },
    { q: "What is a common challenge in GUI testing?", opts: ["Limited programming languages", "Rapid UI changes", "High cost of software", "Lack of user feedback"], ans: 1 },
    { q: "What is an example solution to integrating GUI testing with backend systems?", opts: ["Focusing only on frontend testing", "Using more powerful computers", "Implementing end-to-end testing strategies", "Reducing backend complexity"], ans: 2 },
    { q: "What is a solution to ensure complete test coverage in GUI testing?", opts: ["Reducing the scope of testing", "Developing a comprehensive test strategy", "Limiting testing to critical functions only", "Increasing the number of testers"], ans: 1 },
    { q: "In GUI testing, what is a challenge with test data and environment setup?", opts: ["Limited access to testing tools", "Inconsistent team skill levels", "High license costs", "Difficulty in creating and managing test data"], ans: 3 },
    { q: "Which is considered a common UI bug in GUI testing?", opts: ["Database connectivity problems", "Alignment and layout issues in the interface", "Backend performance issues", "Server-side errors"], ans: 1 },
    { q: "What approach is suggested for testing GUIs for different languages and cultures?", opts: ["Reducing supported languages", "Utilizing localization testing tools", "Outsourcing testing", "Focusing only on primary markets"], ans: 1 },
    { q: "Which tool is commonly used for GUI testing?", opts: ["Version control systems", "IDEs", "Automated GUI testing tools", "Project management software"], ans: 2 },
    { q: "What is a recommended solution for managing frequent UI changes in GUI testing?", opts: ["Using less complex UI", "Increasing team size", "Implementing a robust test automation framework", "Reducing testing frequency"], ans: 2 }
];

// 16. Security Testing (10 câu - Q16-25 section 5)
QUIZ_DATA.topics[15].questions = [
    { q: "What is the main purpose of Penetration Testing?", opts: ["To simulate a real-world attack", "To validate UI", "To verify data integrity", "To assess performance"], ans: 0 },
    { q: "Which security testing technique involves analyzing source code for vulnerabilities?", opts: ["Black-box testing", "Gray-box testing", "Penetration testing", "White-box testing"], ans: 3 },
    { q: "What is the role of a security auditor in security testing?", opts: ["Execute automated scripts", "Simulate attacks", "Review and analyze the system for security flaws", "Write test cases"], ans: 2 },
    { q: "What is the purpose of a security risk assessment?", opts: ["Identify potential security threats and their impact", "Measure usability", "Create performance benchmarks", "Assess technical support availability"], ans: 0 },
    { q: "What does the term 'XSS' stand for?", opts: ["XML Security Standard", "Cross-Site Scripting", "External System Security", "Xtra Security Services"], ans: 1 },
    { q: "In Security Testing, what does 'Denial of Service (DoS)' refer to?", opts: ["Malware installation", "Overloading a system to make it unavailable", "Cross-site scripting", "Unauthorized access"], ans: 1 },
    { q: "Which is a common vulnerability that security testing aims to detect?", opts: ["UI layout issues", "Software design patterns", "Code comments", "SQL injection"], ans: 3 },
    { q: "Which of the following is NOT a type of security testing?", opts: ["Load testing", "Penetration testing", "Authentication testing", "Security auditing"], ans: 0 },
    { q: "Which SDLC phase is most appropriate for conducting security testing?", opts: ["Coding", "Requirements gathering", "Maintenance", "Testing"], ans: 3 },
    { q: "What is the primary goal of security testing?", opts: ["Uncover vulnerabilities and weaknesses", "Identify performance bottlenecks", "Ensure user-friendliness", "Validate code correctness"], ans: 0 }
];

// 17. API Testing (10 câu - Q1-10 section 6)
QUIZ_DATA.topics[16].questions = [
    { q: "HTTP status 201 Created means:", opts: ["User has no permission", "Request is invalid", "Request processed but no data returned", "A new resource has been successfully created"], ans: 3 },
    { q: "If an API returns 500 Internal Server Error for invalid input, the correct evaluation is:", opts: ["Return 200 OK", "Return 401 Unauthorized", "System works correctly", "Should return a client error like 400 Bad Request"], ans: 3 },
    { q: "API returns 200 OK even when an internal error occurs. This handling is:", opts: ["Correct for consistency", "Acceptable", "Protects sensitive info", "Incorrect because it misleads users"], ans: 3 },
    { q: "Testing API JSON response structure is done using:", opts: ["Contract Testing", "Usability Testing", "Load Testing", "Security Testing"], ans: 0 },
    { q: "HTTP 401 Unauthorized means:", opts: ["User lacks valid authentication token", "API doesn't exist", "API ignores request", "Data created successfully"], ans: 0 },
    { q: "API Testing mainly focuses on:", opts: ["Database performance", "Communication between systems via APIs", "GUI functionality", "App relationships"], ans: 1 },
    { q: "To test login API returning 200 OK with token, you should:", opts: ["Ignore status", "Expect 404", "Only check status", "Verify 200 OK and token field"], ans: 3 },
    { q: "HTTP method used to retrieve data:", opts: ["PUT", "GET", "POST", "DELETE"], ans: 1 },
    { q: "Why perform Security Testing in APIs?", opts: ["Measure speed", "Validate UI", "Detect GUI bugs", "Prevent security vulnerabilities"], ans: 3 },
    { q: "Security test method for REST API:", opts: ["Invalid token requests", "JSON contract testing", "Load testing", "GET data validation"], ans: 0 }
];

// 18. Database Testing (10 câu - Q11-20 section 6)
QUIZ_DATA.topics[17].questions = [
    { q: "Main goal of Database Integrity Testing:", opts: ["GUI accuracy", "Automatic updates", "Ensure data correctness & constraints", "Query speed"], ans: 2 },
    { q: "After inserting record, you should:", opts: ["Run query to verify existence", "Check GUI", "Optimize query", "Delete all data"], ans: 0 },
    { q: "Why test DB constraints?", opts: ["Better UI", "Faster queries", "Avoid duplicate & logic errors", "App optimization"], ans: 2 },
    { q: "Best solution for slow query:", opts: ["Add indexes to all columns", "Index frequently used columns", "Increase DB size", "Skip testing"], ans: 1 },
    { q: "Foreign key violation → First step:", opts: ["Add random data", "Check foreign key relationships", "Skip testing", "Rebuild DB"], ans: 1 },
    { q: "If foreign key not set correctly:", opts: ["Data always correct", "Faster queries", "No impact", "Data inconsistency may occur"], ans: 3 },
    { q: "Database Unit Testing is used when:", opts: ["Testing full app", "Testing DB functions", "Performance testing", "Data consistency check without GUI"], ans: 3 },
    { q: "Best DB testing approach for large DB:", opts: ["GUI testing", "Only main table", "Manual testing", "Automated tools & test data"], ans: 3 },
    { q: "Tool for DB testing in Java:", opts: ["JMeter", "Selenium", "DBUnit", "JUnit"], ans: 2 },
    { q: "Database Testing mainly ensures:", opts: ["DB performance only", "Accuracy, integrity & performance", "DB GUI", "App code"], ans: 1 }
];

// 19. White Box Testing (10 câu - Q21-30 section 6)
QUIZ_DATA.topics[18].questions = [
    { q: "Statement Coverage means:", opts: ["All functions called", "Test decisions", "Every statement executed once", "Syntax check"], ans: 2 },
    { q: "Control Flow Graph is used to:", opts: ["Document requirements", "Model execution paths", "Show UI", "Track performance"], ans: 1 },
    { q: "TDD key characteristic:", opts: ["Critical classes tested", "Tests written before code", "Tests after code", "No integration testing"], ans: 1 },
    { q: "Branch Coverage evaluates:", opts: ["DB connections", "TRUE/FALSE outcomes of decisions", "All input combinations", "Legal compliance"], ans: 1 },
    { q: "White box testing focuses on:", opts: ["External expectations", "End users", "GUI testing", "Internal code structure"], ans: 3 },
    { q: "Control Flow Testing focuses on:", opts: ["Response time", "Execution paths", "OS compatibility", "Visual aspects"], ans: 1 },
    { q: "Data Flow Testing checks:", opts: ["Variable assignment → usage paths", "Encryption", "DB efficiency", "Network speed"], ans: 0 },
    { q: "Code Coverage measures:", opts: ["Execution time", "% code tested", "Cost", "Number of bugs"], ans: 1 },
    { q: "White box testing applies to:", opts: ["All levels", "Unit only", "System only", "Integration only"], ans: 0 },
    { q: "Not a white box technique:", opts: ["Fuzz testing", "Control Flow", "Path Coverage", "Data Flow"], ans: 0 }
];

// 20. Automation Testing (10 câu - Q31-40 section 6)
QUIZ_DATA.topics[19].questions = [
    { q: "Automation tool security must:", opts: ["Be ignored", "Have adequate security measures", "Minimal security", "Not required"], ans: 1 },
    { q: "Main reason for automation testing:", opts: ["Faster development", "Avoid tools", "Increase cost", "Reduce testing time"], ans: 3 },
    { q: "Benefit of cloud in automation:", opts: ["Physical machines needed", "Wide browser/device coverage", "Higher cost", "Limited devices"], ans: 1 },
    { q: "Good automation tool usability feature:", opts: ["User-friendly interface", "Strange language", "Complex interface", "No instructions"], ans: 0 },
    { q: "Main purpose of automation testing:", opts: ["Automate software testing process", "Design apps", "Debug apps", "Manual testing"], ans: 0 },
    { q: "Important factor in tool selection:", opts: ["Tool color", "Tool name", "Compatibility with dev environment", "Tool author"], ans: 2 },
    { q: "If testers don't understand app well:", opts: ["Skip requirements", "Ignore dev team", "Use exploratory testing", "Only manual testing"], ans: 2 },
    { q: "Which tests should be automated?", opts: ["Short tests", "Time-consuming tests", "Language dependent tests", "File name based"], ans: 1 },
    { q: "Common cause of automation failure:", opts: ["Old environment", "Lack of planning", "Excess manual testing", "Too much collaboration"], ans: 1 },
    { q: "Why is Dev-Test collaboration important?", opts: ["Clear roles", "Integrate testing into development", "Separate processes", "Different toolsets"], ans: 1 }
];

// Tổng kết
console.log('📊 Tổng số câu hỏi theo chủ đề:');
let total = 0;
QUIZ_DATA.topics.forEach((t, i) => {
    console.log(`${i + 1}. ${t.name}: ${t.questions.length} câu`);
    total += t.questions.length;
});
console.log(`\n📚 TỔNG: ${total} câu`);
