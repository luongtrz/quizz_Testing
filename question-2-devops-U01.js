// 0.1 DevOps Overview (70 câu)
const DEVOPS_QUIZ_DATA = {
  topics: [
    { id: 'devops-overview', name: 'DevOps Overview', icon: '⚙️', questions: [] },
    { id: 'architecture-patterns', name: 'Architecture Patterns', icon: '🏗️', questions: [] },
    { id: 'git-version-control', name: 'Git Version Control', icon: '🌿', questions: [] },
    { id: 'jenkins', name: 'Jenkins', icon: '🧰', questions: [] },
    { id: 'docker', name: 'Docker Multi Stage', icon: '🐳', questions: [] },
    { id: 'kubernetes', name: 'Kubernetes (K8S)', icon: '☸️', questions: [] },
    { id: 'deployment-strategies', name: 'Deployment Strategies', icon: '🚀', questions: [] },
    { id: 'gitops-argocd', name: 'GitOps and ArgoCD', icon: '🔄', questions: [] },
    { id: 'service-mesh', name: 'Service Mesh with Istio and Kiali', icon: '🕸️', questions: [] }
  ]
};

DEVOPS_QUIZ_DATA.topics[0].questions = [
  {
    "q": "What is a Development environment used for? (Development environment dùng để làm gì?)",
    "opts": [
      "Serve end users (Phục vụ người dùng cuối)",
      "Store production logs (Lưu trữ log production)",
      "Run the official release (Chạy bản release chính thức)",
      "Develop and test new features at individual or small group level (Phát triển và kiểm thử tính năng mới ở cá nhân/nhóm nhỏ)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Development environment</b><br>Development environment là môi trường dùng để developer phát triển và test tính năng mới ở mức cá nhân hoặc nhóm nhỏ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là production.<br>❌ B liên quan logging/monitoring.<br>❌ C là môi trường release/production."
  },
  {
    "q": "What is a Staging environment? (Staging environment là gì?)",
    "opts": [
      "An environment only for writing code (Môi trường chỉ để viết code)",
      "An environment that simulates production for testing before real deployment (Môi trường mô phỏng production để kiểm thử trước khi triển khai thật)",
      "An environment only for backup (Môi trường chỉ để backup)",
      "An environment that does not need to match production (Môi trường không cần giống production)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Staging simulates production</b><br>Staging environment mô phỏng production để kiểm thử toàn diện trước khi triển khai thật.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là development.<br>❌ C không phải mục đích chính của staging.<br>❌ D sai vì staging càng giống production càng giảm rủi ro deploy."
  },
  {
    "q": "What is a key characteristic of Production environment? (Đặc điểm chính của Production environment là gì?)",
    "opts": [
      "Serves end users and requires the highest stability (Phục vụ end users và yêu cầu ổn định cao nhất)",
      "Used only for internal demo (Chỉ dùng để demo nội bộ)",
      "Does not need monitoring (Không cần monitoring)",
      "Used only for unit tests (Chỉ dùng để chạy unit test)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Production serves real users</b><br>Production là môi trường thật phục vụ người dùng cuối, nên yêu cầu ổn định, bảo mật và khả dụng cao nhất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B giống demo/UAT hơn.<br>❌ C sai vì production rất cần monitoring.<br>❌ D là hoạt động testing, không phải production."
  },
  {
    "q": "What does PoC stand for? (PoC là viết tắt của gì?)",
    "opts": [
      "Process of Code",
      "Product of Cloud",
      "Proof of Concept",
      "Pipeline of Container"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Proof of Concept</b><br>PoB là thử nghiệm quy mô nhỏ để kiểm tra tính khả thi của một giải pháp hoặc công nghệ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải thuật ngữ đúng trong ngữ cảnh DevOps Overview."
  },
  {
    "q": "What is the main purpose of a PoC? (Mục đích chính của PoC là gì?)",
    "opts": [
      "Deploy to production immediately (Deploy production ngay lập tức)",
      "Check feasibility before large investment (Kiểm tra tính khả thi trước khi đầu tư lớn)",
      "Replace testing (Thay thế testing)",
      "Create operation documents only (Chỉ tạo tài liệu vận hành)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Check feasibility</b><br>PoC giúp xác minh một ý tưởng/công nghệ có khả thi không trước khi xây hệ thống đầy đủ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá rủi ro.<br>❌ C sai vì PoC không thay thế testing.<br>❌ D không phải mục tiêu chính."
  },
  {
    "q": "What is a key characteristic of the Waterfall model? (Đặc điểm chính của Waterfall model là gì?)",
    "opts": [
      "Linear and sequential phases (Tuyến tính, các giai đoạn tách biệt)",
      "Iterative development by sprint (Phát triển lặp theo sprint)",
      "Continuous deployment by default (Mặc định deploy liên tục)",
      "No requirement phase (Không có giai đoạn requirement)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Linear and sequential</b><br>Waterfall là mô hình phát triển tuyến tính, đi qua các bước như requirement, design, implementation, testing theo thứ tự.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Agile/Scrum.<br>❌ C là DevOps/CI-CD.<br>❌ D sai vì requirement là bước quan trọng trong Waterfall."
  },
  {
    "q": "In Waterfall, after a stage is completed, what usually happens? (Trong Waterfall, sau khi hoàn thành một giai đoạn thì thường như thế nào?)",
    "opts": [
      "It is very easy to return to previous steps (Rất dễ quay lại bước trước)",
      "Testing is not needed (Không cần kiểm thử)",
      "It is difficult or impossible to return to previous steps (Khó hoặc không có cách quay lại bước trước)",
      "It automatically deploys to production (Tự động deploy production)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Hard to go back</b><br>Waterfall có tính tuyến tính nên khi một giai đoạn đã hoàn tất, việc quay lại sửa requirement/design thường khó và tốn kém.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với đặc điểm Waterfall.<br>❌ B sai vì Waterfall vẫn có testing.<br>❌ D là đặc điểm của CI/CD automation, không phải Waterfall."
  },
  {
    "q": "How is the V-Model different from Waterfall? (V-Model khác Waterfall ở điểm nào?)",
    "opts": [
      "It has no testing phase (Không có testing)",
      "It has no coding phase (Không có coding)",
      "It integrates development and testing from early stages (Tích hợp phát triển và kiểm thử từ sớm)",
      "It is only used for cloud systems (Chỉ dùng cho cloud)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Testing is planned early</b><br>V-Model giống Waterfall ở tính tuần tự nhưng nhấn mạnh việc kiểm thử được lên kế hoạch song song với các pha phát triển từ đầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì V-Model rất nhấn mạnh testing.<br>❌ B sai vì vẫn có coding.<br>❌ D sai vì không giới hạn cho cloud."
  },
  {
    "q": "What is a time-related challenge of traditional methodology? (Vấn đề về thời gian của phương pháp truyền thống là gì?)",
    "opts": [
      "Release is too fast (Release quá nhanh)",
      "There is no requirement phase (Không có requirement)",
      "There is no design phase (Không có design)",
      "Project duration is long and unpredictable (Thời gian dự án dài và khó dự đoán)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Long and unpredictable timeframe</b><br>Traditional methodology thường có thời gian dự án dài, chuyển pha cứng nhắc nên khó thích nghi khi yêu cầu thay đổi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược với vấn đề truyền thống.<br>❌ B và D sai vì các phase này vẫn tồn tại trong Waterfall."
  },
  {
    "q": "Why can traditional approaches miss requirements? (Vì sao traditional approaches có thể bỏ sót yêu cầu?)",
    "opts": [
      "Because there is too much monitoring (Vì có quá nhiều monitoring)",
      "Because code is tested too much (Vì code được test quá nhiều)",
      "Because detailed planning happens early without enough feedback (Vì lập kế hoạch chi tiết ban đầu nhưng thiếu feedback sớm)",
      "Because Dev and Ops collaborate too closely (Vì Dev và Ops cộng tác quá chặt)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Lack of early feedback</b><br>Khi requirement được chốt quá sớm nhưng thiếu phản hồi thực tế, team có thể xây sai thứ người dùng cần.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đều không phải nguyên nhân chính được nêu trong traditional challenges."
  },
  {
    "q": "Why is Waterfall difficult when requirements change? (Vì sao Waterfall khó xử lý thay đổi requirement?)",
    "opts": [
      "Because linear phases make late changes costly (Vì các bước tuyến tính làm thay đổi muộn trở nên tốn kém)",
      "Because it has too much automation (Vì có quá nhiều automation)",
      "Because it has no documentation (Vì không có tài liệu)",
      "Because it always uses feature flags (Vì luôn dùng feature flag)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Late changes are costly</b><br>Trong Waterfall, khi requirement thay đổi ở giai đoạn muộn, các phần đã design/code/test có thể phải làm lại nên chi phí cao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và D là đặc điểm DevOps hiện đại hơn.<br>❌ C sai vì Waterfall thường có nhiều documentation."
  },
  {
    "q": "What is the consequence of late testing? (Hậu quả của late testing là gì?)",
    "opts": [
      "Defects are found late, increasing fixing cost (Lỗi bị phát hiện muộn, tăng chi phí sửa lỗi)",
      "Defects are found earlier (Lỗi được phát hiện sớm hơn)",
      "Release risk is reduced automatically (Rủi ro release tự động giảm)",
      "It has no effect on the project (Không ảnh hưởng đến dự án)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Higher fixing cost</b><br>Nếu testing chỉ diễn ra sau khi code hoàn tất, lỗi được phát hiện muộn và việc sửa lỗi thường phức tạp, tốn thời gian hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B ngược lại.<br>❌ C sai vì late testing thường tăng rủi ro.<br>❌ D sai vì ảnh hưởng rất lớn."
  },
  {
    "q": "Why can deployment be difficult in traditional methodology? (Vì sao deployment có thể khó trong phương pháp truyền thống?)",
    "opts": [
      "Because there is no test environment that mirrors production well (Vì không có môi trường test mô phỏng production tốt)",
      "Because there are too many staging environments similar to production (Vì có quá nhiều staging giống production)",
      "Because CI/CD is too strong (Vì CI/CD quá mạnh)",
      "Because there are too many automated tests (Vì có quá nhiều automated tests)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Environment mismatch</b><br>Traditional deployment rủi ro vì môi trường test không giống production, dẫn đến lỗi chỉ xuất hiện khi triển khai thật.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là điều tốt chứ không phải vấn đề.<br>❌ C và D là đặc điểm giúp giảm rủi ro trong DevOps."
  },
  {
    "q": "What can cause waste and inefficiency in traditional methodology? (Điều gì gây lãng phí và kém hiệu quả trong phương pháp truyền thống?)",
    "opts": [
      "Deployment has too few defects (Deploy quá ít lỗi)",
      "Feedback is too fast (Feedback quá nhanh)",
      "Automation is too much (Tự động hóa quá nhiều)",
      "Reworking requirements or design many times (Phải làm lại requirement/design nhiều lần)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Rework</b><br>Khi requirement thay đổi muộn, team có thể phải làm lại phân tích, thiết kế hoặc code, gây lãng phí thời gian và tài nguyên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải vấn đề.<br>❌ B và D thường là lợi ích trong Agile/DevOps."
  },
  {
    "q": "What is DevOps? (DevOps là gì?)",
    "opts": [
      "A frontend framework (Một framework frontend)",
      "A database engine (Một database engine)",
      "A working methodology combining practices, culture and tools to improve software delivery (Một phương pháp kết hợp practice, culture và tools để cải thiện delivery phần mềm)",
      "A cloud operating system (Một hệ điều hành cloud)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: DevOps is methodology + culture + tools</b><br>DevOps kết hợp văn hóa cộng tác, thực hành và công cụ để giúp tổ chức deliver application/service nhanh và ổn định hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đều là công nghệ/công cụ cụ thể, không phải định nghĩa DevOps."
  },
  {
    "q": "The term DevOps comes from which two words? (Từ DevOps được ghép từ hai từ nào?)",
    "opts": [
      "Development and Options",
      "Design and Operations",
      "Delivery and Optimization",
      "Developer and Operations"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Developer and Operations</b><br>DevOps xuất phát từ Developer/Development và Operations, thể hiện sự kết nối giữa phát triển phần mềm và vận hành hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C là các cách ghép không đúng trong tài liệu."
  },
  {
    "q": "DevOps helps bridge the gap between which teams? (DevOps giúp thu hẹp khoảng cách giữa nhóm nào?)",
    "opts": [
      "Software developers and IT operations teams (Software developers và IT operations teams)",
      "Testers and designers (Tester và designer)",
      "Users and database admins only (User và database admin)",
      "UI and API only (UI và API)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Dev and Ops</b><br>DevOps ra đời để giảm khoảng cách giao tiếp và trách nhiệm giữa developer và operation team.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D có thể liên quan dự án nhưng không phải cặp chính mà DevOps nhấn mạnh."
  },
  {
    "q": "What happens in the Plan stage of the DevOps lifecycle? (Giai đoạn Plan trong DevOps lifecycle làm gì?)",
    "opts": [
      "Write application code (Viết code)",
      "Deploy to production (Deploy production)",
      "Define goals, requirements and development plan (Xác định mục tiêu, requirement và kế hoạch phát triển)",
      "Monitor logs (Theo dõi log)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Plan goals and requirements</b><br>Plan là giai đoạn xác định yêu cầu, mục tiêu, phạm vi và kế hoạch trước khi phát triển.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Code.<br>❌ B là Deploy.<br>❌ D là Monitor."
  },
  {
    "q": "What happens in the Code stage? (Giai đoạn Code là gì?)",
    "opts": [
      "Monitoring the system (Monitor hệ thống)",
      "Releasing the product (Release sản phẩm)",
      "Creating dashboards (Tạo dashboard)",
      "Writing code for applications/features based on requirements (Viết code cho ứng dụng/tính năng theo yêu cầu)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Write code</b><br>Code là giai đoạn developer hiện thực hóa requirement thành source code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và D thuộc Monitor/Operate.<br>❌ B thuộc Release."
  },
  {
    "q": "What is the Build stage mainly about? (Giai đoạn Build chủ yếu làm gì?)",
    "opts": [
      "Operate the app after deployment (Vận hành app sau deploy)",
      "Collect customer feedback only (Chỉ thu thập feedback khách hàng)",
      "Turn off feature flags (Tắt feature flag)",
      "Integrate and compile/build code so components work together (Tích hợp và build code để các thành phần hoạt động cùng nhau)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Build and integrate code</b><br>Build stage biến source code thành artifact/package có thể test hoặc deploy, đồng thời kiểm tra việc tích hợp code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Operate.<br>❌ B liên quan Feedback.<br>❌ C chỉ là thao tác quản lý feature."
  },
  {
    "q": "What is the purpose of the Test stage? (Mục đích của giai đoạn Test là gì?)",
    "opts": [
      "Delete source code (Xóa source code)",
      "Ensure the application is ready and meets quality expectations (Đảm bảo ứng dụng sẵn sàng và đạt chất lượng)",
      "Write the backlog (Viết backlog)",
      "Manage production users (Quản lý user production)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Ensure quality</b><br>Test stage kiểm tra phần mềm để phát hiện lỗi và đảm bảo hệ thống đáp ứng yêu cầu trước khi release/deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ C thuộc planning/agile.<br>❌ D thuộc operation/admin."
  },
  {
    "q": "When does the Release stage happen? (Giai đoạn Release xảy ra khi nào?)",
    "opts": [
      "After successful testing when the app is ready for deployment/operation (Sau khi test thành công và app sẵn sàng triển khai/vận hành)",
      "Before the code is built (Trước khi code được build)",
      "When monitoring fails (Khi monitoring thất bại)",
      "Before requirements exist (Khi chưa có requirement)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: After successful testing</b><br>Release là bước chuẩn bị phiên bản phần mềm đã đủ điều kiện để đưa sang deploy hoặc vận hành.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không đúng thứ tự DevOps lifecycle."
  },
  {
    "q": "What does the Deploy stage mean? (Giai đoạn Deploy nghĩa là gì?)",
    "opts": [
      "Write test cases (Viết test case)",
      "Create product backlog (Tạo product backlog)",
      "Analyze old logs only (Chỉ phân tích log cũ)",
      "Deploy code to the production environment (Đưa code lên production environment)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Deploy to production</b><br>Deploy là giai đoạn đưa phiên bản ứng dụng vào môi trường chạy thật hoặc môi trường mục tiêu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là testing activity.<br>❌ B là Agile planning.<br>❌ C thuộc monitoring/log analysis."
  },
  {
    "q": "What is the Operate stage? (Giai đoạn Operate là gì?)",
    "opts": [
      "Only writing code locally (Chỉ viết code local)",
      "Running and operating the application after deployment (Chạy và vận hành ứng dụng sau deployment)",
      "Creating Git branches (Tạo branch Git)",
      "Only running unit tests (Chỉ chạy unit test)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Run and operate the app</b><br>Operate liên quan đến việc đảm bảo ứng dụng đang chạy ổn định trong môi trường vận hành.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Code.<br>❌ C thuộc version control.<br>❌ D thuộc Test."
  },
  {
    "q": "What is the Monitor stage? (Giai đoạn Monitor là gì?)",
    "opts": [
      "Only plan sprint tasks (Chỉ lập kế hoạch sprint)",
      "Only merge code (Chỉ merge code)",
      "Continuously observe the app and make changes to keep it stable (Theo dõi liên tục ứng dụng và thay đổi cần thiết để hệ thống ổn định)",
      "Only write documentation (Chỉ viết tài liệu)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Continuous monitoring</b><br>Monitor giúp phát hiện lỗi, downtime, performance issue và cung cấp feedback để cải thiện hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Scrum/Planning.<br>❌ B là Git workflow.<br>❌ D không phải monitoring."
  },
  {
    "q": "How does DevOps accelerate development and deployment? (DevOps tăng tốc development/deployment bằng cách nào?)",
    "opts": [
      "Skipping testing (Bỏ qua testing)",
      "Avoiding Git (Không dùng Git)",
      "Using CI/CD and automated testing (Dùng CI/CD và automated testing)",
      "Deploying only manually (Chỉ deploy thủ công)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: CI/CD and automated testing</b><br>DevOps tăng tốc nhờ tự động hóa build, test, release và deploy bằng CI/CD pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A làm tăng rủi ro.<br>❌ B sai vì version control rất quan trọng.<br>❌ D làm chậm và dễ lỗi."
  },
  {
    "q": "How does DevOps improve software quality? (DevOps cải thiện chất lượng phần mềm bằng cách nào?)",
    "opts": [
      "Removing staging (Xóa staging)",
      "Automated testing and consistent environments (Automated testing và môi trường nhất quán)",
      "Not monitoring production (Không monitor production)",
      "Completely separating Dev and Ops (Tách hoàn toàn Dev và Ops)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Automation + consistency</b><br>Automated testing giúp phát hiện lỗi sớm, còn môi trường nhất quán giúp giảm lỗi do khác biệt giữa dev/test/prod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D đi ngược tinh thần DevOps."
  },
  {
    "q": "Which tools are commonly used for configuration management? (Công cụ nào thường dùng cho configuration management?)",
    "opts": [
      "Ansible, Puppet, Chef",
      "Photoshop, Figma, Canva",
      "MySQL, PostgreSQL, MongoDB",
      "Slack, Zoom, Meet"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Ansible, Puppet, Chef</b><br>Các công cụ này giúp tự động hóa cấu hình server, cài đặt package và quản lý trạng thái hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là design tools.<br>❌ C là database.<br>❌ D là communication tools."
  },
  {
    "q": "What is the purpose of Feature Toggle/Feature Flag? (Feature Toggle/Feature Flag dùng để làm gì?)",
    "opts": [
      "Replace source control (Thay thế source control)",
      "Delete CI/CD pipeline (Xóa CI/CD pipeline)",
      "Only monitor CPU (Chỉ monitor CPU)",
      "Enable or disable features without redeploying the whole system (Bật/tắt tính năng mà không cần redeploy toàn bộ hệ thống)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Toggle features safely</b><br>Feature flag cho phép bật/tắt tính năng theo môi trường, user group hoặc thời điểm mà không cần deploy lại toàn bộ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải chức năng của feature flag."
  },
  {
    "q": "Which tools support collaboration and task management in DevOps? (Công cụ nào hỗ trợ collaboration/task management trong DevOps?)",
    "opts": [
      "Docker, Kubernetes, containerd",
      "Slack, JIRA, Confluence",
      "Prometheus, Grafana, ELK",
      "JUnit, Selenium, TestNG"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Slack, JIRA, Confluence</b><br>Slack hỗ trợ giao tiếp, JIRB quản lý task/issue, Confluence dùng cho documentation và knowledge sharing.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là container/orchestration.<br>❌ C là monitoring/logging.<br>❌ D là testing tools."
  },
  {
    "q": "What does CAMS stand for in DevOps? (CAMS trong DevOps là viết tắt của gì?)",
    "opts": [
      "Code, Agile, Monitor, Security",
      "Culture, Automation, Measurement, Sharing",
      "Cloud, API, Microservice, Server",
      "Commit, Artifact, Merge, Sync"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Culture, Automation, Measurement, Sharing</b><br>CAMS là mô hình tư duy cốt lõi của DevOps, nhấn mạnh văn hóa, tự động hóa, đo lường và chia sẻ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải ý nghĩa chính xác của CAMS."
  },
  {
    "q": "What does Culture mean in CAMS? (Culture trong CAMS nhấn mạnh điều gì?)",
    "opts": [
      "Separating Dev and Ops (Chia rẽ Dev và Ops)",
      "Ignoring communication (Không cần giao tiếp)",
      "Focusing only on tools (Chỉ tập trung tool)",
      "Collaboration, breaking barriers, and shared responsibility (Cộng tác, phá bỏ rào cản và trách nhiệm chung)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Collaboration and shared responsibility</b><br>Culture trong DevOps nhấn mạnh việc Dev, Ops và các bên liên quan cùng chịu trách nhiệm về chất lượng và vận hành sản phẩm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C đi ngược với DevOps culture."
  },
  {
    "q": "What is the role of Automation in CAMS? (Automation trong CAMS có vai trò gì?)",
    "opts": [
      "Reduce human error, speed up release, and improve consistency (Giảm lỗi con người, tăng tốc release và tăng tính nhất quán)",
      "Increase manual work (Tăng thao tác thủ công)",
      "Avoid pipelines (Không dùng pipeline)",
      "Avoid testing (Không dùng testing)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Reduce error and increase speed</b><br>Automation giúp tự động hóa build, test, deploy và cấu hình, từ đó giảm lỗi thủ công và tăng tốc độ release.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D trái với mục tiêu automation."
  },
  {
    "q": "What does Measurement in CAMS involve? (Measurement trong CAMS liên quan đến gì?)",
    "opts": [
      "UI design only (Chỉ thiết kế UI)",
      "Creating Git branches (Tạo branch Git)",
      "Metrics, logs, response time, performance, deployment failure rate",
      "Writing user stories only (Chỉ viết user story)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Metrics and logs</b><br>Measurement giúp team hiểu hệ thống đang hoạt động thế nào thông qua số liệu như log, performance, response time và failure rate.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải trọng tâm của Measurement."
  },
  {
    "q": "What does Sharing in CAMS encourage? (Sharing trong CAMS khuyến khích điều gì?)",
    "opts": [
      "Sharing documentation, incident reports, performance reports, and lessons learned (Chia sẻ documentation, incident report, performance report và bài học kinh nghiệm)",
      "Hiding incident reports (Giấu incident report)",
      "Avoiding deployment reviews (Không review deployment)",
      "Sharing only production source code (Chỉ chia sẻ source code production)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Knowledge sharing</b><br>Sharing giúp team học từ sự cố, cải thiện quy trình và tránh lặp lại lỗi cũ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và C làm giảm minh bạch.<br>❌ D quá hẹp, sharing không chỉ là source code."
  },
  {
    "q": "What does CI stand for? (CI là viết tắt của gì?)",
    "opts": [
      "Code Inspection",
      "Cloud Infrastructure",
      "Continuous Integration",
      "Container Image"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Continuous Integration</b><br>CI là thực hành tích hợp code thường xuyên vào shared repository và tự động build/test để phát hiện lỗi sớm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải nghĩa của CI trong DevOps."
  },
  {
    "q": "What can CD stand for in DevOps? (CD trong DevOps có thể là viết tắt của gì?)",
    "opts": [
      "Continuous Delivery or Continuous Deployment",
      "Code Delivery or Cloud Deployment",
      "Continuous Design or Code Debugging",
      "Container Development or Cluster Deployment"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Continuous Delivery/Deployment</b><br>CD thường chỉ Continuous Delivery hoặc Continuous Deployment, đều liên quan đến tự động hóa quá trình release/deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải nghĩa chuẩn trong CI/CD."
  },
  {
    "q": "Why is CI/CD fundamental to DevOps? (Vì sao CI/CD là nền tảng của DevOps?)",
    "opts": [
      "It replaces developers completely (Thay thế hoàn toàn developer)",
      "It removes testing (Loại bỏ testing)",
      "It ensures speed, quality, and continuity in software delivery (Đảm bảo tốc độ, chất lượng và tính liên tục trong software delivery)",
      "It removes version control (Không cần version control)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Speed, quality and continuity</b><br>CI/CD tự động hóa tích hợp, kiểm thử và triển khai, giúp release nhanh hơn nhưng vẫn kiểm soát chất lượng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đều sai và đi ngược với CI/CD."
  },
  {
    "q": "What is Continuous Integration? (Continuous Integration là gì?)",
    "opts": [
      "Developers frequently commit code to a shared repository (Developer thường xuyên commit code vào shared repository)",
      "Manual deployment every month (Deploy thủ công mỗi tháng)",
      "Creating release documents only (Chỉ tạo tài liệu release)",
      "Monitoring servers only (Chỉ monitor server)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Frequent integration</b><br>CI khuyến khích developer merge/commit thường xuyên để pipeline tự động build và test, từ đó phát hiện lỗi tích hợp sớm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là manual release.<br>❌ C không phải CI.<br>❌ D là monitoring."
  },
  {
    "q": "What is the goal of CI? (Mục tiêu của CI là gì?)",
    "opts": [
      "Delay code merging (Trì hoãn merge code)",
      "Deploy to production only (Chỉ deploy production)",
      "Avoid running tests (Không chạy test)",
      "Detect errors early and automatically build/test code changes (Phát hiện lỗi sớm và tự động build/test khi code thay đổi)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Early error detection</b><br>CI giúp phát hiện lỗi sớm bằng cách tự động build và test mỗi khi có thay đổi code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C đều không phải mục tiêu của CI."
  },
  {
    "q": "What does Continuous Delivery focus on? (Continuous Delivery tập trung vào điều gì?)",
    "opts": [
      "Removing staging (Xóa staging)",
      "Never requiring manual approval in any case (Không bao giờ cần manual approval)",
      "Avoiding CI (Không cần CI)",
      "Automating the release process so code is always ready to deploy after passing tests (Tự động hóa release process để code luôn sẵn sàng deploy sau khi pass test)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Always ready to deploy</b><br>Continuous Delivery đảm bảo code sau khi pass test có thể được triển khai an toàn, thường vẫn có bước phê duyệt thủ công trước production.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì staging vẫn quan trọng.<br>❌ B mô tả Continuous Deployment hơn.<br>❌ C sai vì CD thường dựa trên CI."
  },
  {
    "q": "How is Continuous Deployment different from Continuous Delivery? (Continuous Deployment khác Continuous Delivery ở điểm nào?)",
    "opts": [
      "Delivery always deploys to production automatically (Delivery luôn tự động deploy production)",
      "Every change that passes tests is automatically deployed to production without manual intervention (Mọi thay đổi pass test được tự động deploy production không cần can thiệp thủ công)",
      "Deployment does not need testing (Deployment không cần test)",
      "Delivery is unrelated to release (Delivery không liên quan release)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Automatic production deployment</b><br>Continuous Deployment là mức tự động hóa cao hơn, trong đó code pass pipeline sẽ tự động lên production.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Continuous Delivery thường vẫn có approval.<br>❌ C sai vì vẫn cần test.<br>❌ D sai vì Delivery liên quan trực tiếp release."
  },
  {
    "q": "What is Agile? (Agile là gì?)",
    "opts": [
      "A container tool (Một công cụ container)",
      "A flexible software development methodology emphasizing collaboration, early/frequent delivery, and fast response to change (Phương pháp phát triển linh hoạt, nhấn mạnh cộng tác, giao hàng sớm/thường xuyên và phản hồi nhanh với thay đổi)",
      "A database type (Một loại database)",
      "A cloud operating system (Một hệ điều hành cloud)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Agile is flexible development</b><br>Agile giúp team phát triển phần mềm theo vòng lặp ngắn, nhận feedback sớm và thích nghi với thay đổi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D là công nghệ/công cụ, không phải Agile methodology."
  },
  {
    "q": "Which Agile value is correct? (Giá trị Agile nào đúng?)",
    "opts": [
      "Processes and tools over individuals and interactions",
      "Documentation over working software",
      "Individuals and interactions over processes and tools",
      "Contract negotiation over customer collaboration"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Individuals and interactions over processes and tools</b><br>Agile Manifesto ưu tiên con người và tương tác hơn quy trình và công cụ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A đảo ngược giá trị Agile.<br>❌ B sai vì Agile ưu tiên working software.<br>❌ D sai vì Agile ưu tiên customer collaboration."
  },
  {
    "q": "Agile values Working Software over what? (Agile ưu tiên Working Software hơn điều gì?)",
    "opts": [
      "Customer Collaboration",
      "Team Communication",
      "Responding to Change",
      "Comprehensive Documentation"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Comprehensive Documentation</b><br>Agile không phủ nhận documentation, nhưng ưu tiên phần mềm chạy được hơn tài liệu quá đầy đủ nhưng chưa tạo giá trị thực tế.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C đều là giá trị/tinh thần được Agile đề cao."
  },
  {
    "q": "Agile values Customer Collaboration over what? (Agile ưu tiên Customer Collaboration hơn điều gì?)",
    "opts": [
      "Contract Negotiation",
      "Working Software",
      "Individuals and Interactions",
      "Responding to Change"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Contract Negotiation</b><br>Agile ưu tiên hợp tác với khách hàng để hiểu và điều chỉnh yêu cầu thay vì chỉ bám cứng vào hợp đồng ban đầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D là các giá trị Agile khác, không phải thứ bị so sánh trong cặp này."
  },
  {
    "q": "Agile values Responding to Change over what? (Agile ưu tiên Responding to Change hơn điều gì?)",
    "opts": [
      "Working Software",
      "Following a Plan",
      "Customer Collaboration",
      "Teamwork"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Following a Plan</b><br>Agile khuyến khích thích nghi với thay đổi thay vì bám cứng kế hoạch ban đầu khi bối cảnh đã khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D đều là điều Agile coi trọng."
  },
  {
    "q": "What are the main roles in Scrum? (Các role chính trong Scrum là gì?)",
    "opts": [
      "DevOps Master, Git Owner, Docker Team",
      "Tester, Designer, CEO",
      "Admin, User, Guest",
      "Product Owner, Scrum Master, Development Team"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Product Owner, Scrum Master, Development Team</b><br>Scrum team cơ bản gồm Product Owner quản lý giá trị/backlog, Scrum Master hỗ trợ quy trình, và Development Team xây sản phẩm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải bộ role chuẩn của Scrum."
  },
  {
    "q": "Which are Scrum events? (Scrum events gồm những gì?)",
    "opts": [
      "Commit, Push, Pull, Merge",
      "Build, Image, Container, Volume",
      "Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective",
      "Alert, Log, Metric, Trace"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Scrum events</b><br>Các event phổ biến của Scrum gồm Sprint Planning, Daily Scrum/Standup, Sprint Review và Sprint Retrospective.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git actions.<br>❌ B là Docker concepts.<br>❌ D là observability concepts."
  },
  {
    "q": "Which are Scrum artifacts? (Scrum artifacts gồm những gì?)",
    "opts": [
      "Dockerfile, Image, Container",
      "Log, Dashboard, Alert",
      "VM, Hypervisor, OS",
      "Product Backlog, Sprint Backlog, Increment"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Product Backlog, Sprint Backlog, Increment</b><br>Scrum artifacts giúp minh bạch công việc cần làm, công việc trong sprint và phần sản phẩm hoàn thành.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Docker.<br>❌ B là monitoring.<br>❌ C là virtualization."
  },
  {
    "q": "How long does a Scrum sprint usually last? (Sprint trong Scrum thường kéo dài bao lâu?)",
    "opts": [
      "6 months (6 tháng)",
      "1-4 weeks, often 2 weeks (1-4 tuần, thường 2 tuần)",
      "Exactly 1 day (Cố định 1 ngày)",
      "No time limit (Không giới hạn thời gian)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: 1-4 weeks</b><br>Sprint là vòng lặp ngắn, thường 1-4 tuần để team tạo ra increment và nhận feedback thường xuyên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá dài.<br>❌ C quá cứng và không phổ biến.<br>❌ D sai vì sprint là time-boxed."
  },
  {
    "q": "What is Sprint Planning used for? (Sprint Planning dùng để làm gì?)",
    "opts": [
      "Plan the sprint and move tasks from product backlog to sprint backlog (Lập kế hoạch sprint và đưa task từ product backlog vào sprint backlog)",
      "Review production logs (Review production logs)",
      "Deploy database only (Chỉ deploy database)",
      "Delete backlog (Xóa backlog)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Plan sprint work</b><br>Sprint Planning xác định mục tiêu sprint và các backlog item sẽ được thực hiện trong sprint.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc vận hành/monitoring.<br>❌ C không phải mục tiêu Scrum event.<br>❌ D sai."
  },
  {
    "q": "What questions are commonly asked in a Daily Standup? (Daily Standup thường hỏi gì?)",
    "opts": [
      "What did I do yesterday, what will I do today, and are there blockers? (Hôm qua làm gì, hôm nay làm gì, có blocker gì không?)",
      "Who deployed production the most? (Ai deploy production nhiều nhất?)",
      "Who wrote the most lines of code? (Ai viết nhiều dòng code nhất?)",
      "Who manages servers best? (Ai quản lý server tốt nhất?)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Yesterday, today, blockers</b><br>Daily Standup giúp team đồng bộ tiến độ, kế hoạch ngày hiện tại và các trở ngại cần xử lý.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải câu hỏi cốt lõi của Daily Scrum."
  },
  {
    "q": "What is Sprint Review used for? (Sprint Review dùng để làm gì?)",
    "opts": [
      "Write yearly requirements (Viết requirement cho cả năm)",
      "Delete old tasks (Xóa task cũ)",
      "Present completed work in the sprint (Trình bày công việc đã hoàn thành trong sprint)",
      "Replace testing (Thay thế testing)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Review completed increment</b><br>Sprint Review là lúc team trình bày kết quả đã hoàn thành và nhận feedback từ stakeholder.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng tinh thần Agile.<br>❌ B không phải mục tiêu chính.<br>❌ D sai vì review không thay thế testing."
  },
  {
    "q": "What is Sprint Retrospective used for? (Sprint Retrospective dùng để làm gì?)",
    "opts": [
      "Automatically deploy to production (Tự động deploy production)",
      "Build Docker images (Tạo Docker image)",
      "Delete all Jira issues (Xóa toàn bộ issue trên Jira)",
      "Discuss what went well and what should be improved after the sprint (Feedback điều gì tốt và điều gì cần cải thiện sau sprint)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Improve the process</b><br>Retrospective giúp team nhìn lại cách làm việc trong sprint và tìm điểm cải tiến cho sprint sau.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CI/CD.<br>❌ B là container workflow.<br>❌ C sai."
  },
  {
    "q": "What is the Product Owner mainly responsible for? (Product Owner chịu trách nhiệm chính về gì?)",
    "opts": [
      "Managing Kubernetes clusters (Quản trị Kubernetes cluster)",
      "Representing stakeholders, prioritizing backlog, and guiding product direction (Đại diện stakeholder, ưu tiên backlog và định hướng sản phẩm)",
      "Writing all test cases (Viết toàn bộ test case)",
      "Managing server logs (Quản lý log server)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Product value and backlog</b><br>Product Owner chịu trách nhiệm tối đa hóa giá trị sản phẩm thông qua việc quản lý và ưu tiên Product Backlog.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là platform/ops.<br>❌ C là testing activity.<br>❌ D là monitoring/ops."
  },
  {
    "q": "What is the role of Scrum Master? (Scrum Master có vai trò gì?)",
    "opts": [
      "Decide all product features alone (Quyết định toàn bộ feature một mình)",
      "Only write backend code (Chỉ viết code backend)",
      "Coach the team, support Scrum adoption, maintain board/backlog, and remove obstacles (Coach team, hỗ trợ Scrum, duy trì board/backlog và xử lý obstacle)",
      "Only manage databases (Chỉ quản lý database)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Facilitate Scrum</b><br>Scrum Master giúp team áp dụng Scrum đúng, gỡ blocker và cải thiện cách làm việc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là trách nhiệm nghiêng về Product Owner/stakeholder.<br>❌ B và D quá hẹp."
  },
  {
    "q": "What does Kanban mean? (Kanban nghĩa là gì?)",
    "opts": [
      "Source control",
      "Auto deployment",
      "Visual signal",
      "Unit test"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Visual signal</b><br>Kanban nhấn mạnh việc trực quan hóa công việc bằng board/cột trạng thái để quản lý luồng công việc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git/VCS.<br>❌ B là CI/CD.<br>❌ D là testing."
  },
  {
    "q": "Which principles does Kanban emphasize? (Kanban nhấn mạnh nguyên tắc nào?)",
    "opts": [
      "Do not use boards (Không dùng board)",
      "Only work in fixed 2-week sprints (Chỉ làm việc theo sprint 2 tuần cố định)",
      "No backlog needed (Không cần backlog)",
      "Visualize Work, Limit WIP, Continuous Improvement"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Visualize, limit WIP, improve continuously</b><br>Kanban giúp team nhìn rõ trạng thái công việc, giới hạn việc đang làm dở và tối ưu flow liên tục.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với Kanban.<br>❌ B giống Scrum hơn, không bắt buộc trong Kanban.<br>❌ C không đúng."
  },
  {
    "q": "What does WIP stand for in Kanban? (WIP trong Kanban là gì?)",
    "opts": [
      "Work In Progress",
      "Work In Production",
      "Web Integration Process",
      "Workflow Infrastructure Plan"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Work In Progress</b><br>WIP là số lượng công việc đang được xử lý tại một thời điểm. Giới hạn WIP giúp tránh quá tải và nghẽn luồng công việc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải nghĩa đúng của WIP trong Kanban."
  },
  {
    "q": "What are story points used to measure? (Story points dùng để đo gì?)",
    "opts": [
      "Number of servers (Số lượng server)",
      "Lines of code (Số dòng code)",
      "Number of production users (Số lượng user production)",
      "Effort and complexity of a task (Effort và độ phức tạp của task)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Effort and complexity</b><br>Story points ước lượng độ khó, độ phức tạp, rủi ro và công sức tương đối của user story/task.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C là số đo kỹ thuật/kinh doanh khác, không phải story point."
  },
  {
    "q": "Which scale is commonly used for story points? (Story points thường dùng thang nào?)",
    "opts": [
      "Binary",
      "Fibonacci",
      "Hexadecimal",
      "Alphabet"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Fibonacci</b><br>Thang Fibonacci như 1, 2, 3, 5, 8, 13 thường dùng vì task càng lớn thì độ bất định càng cao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải thang phổ biến cho story points."
  },
  {
    "q": "What common goal do Agile and DevOps share? (Agile và DevOps có mục tiêu chung nào?)",
    "opts": [
      "Focus only on documentation (Chỉ tập trung documentation)",
      "Improve speed, quality, and responsiveness in software development (Cải thiện tốc độ, chất lượng và khả năng phản hồi trong phát triển phần mềm)",
      "Use only for databases (Chỉ dùng cho database)",
      "Remove collaboration (Loại bỏ collaboration)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Speed, quality, responsiveness</b><br>Cả Agile và DevOps đều hướng tới giao phần mềm tốt hơn, nhanh hơn và thích ứng tốt hơn với thay đổi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D trái với tinh thần Agile/DevOps."
  },
  {
    "q": "What does Agile mainly focus on? (Agile tập trung chủ yếu vào gì?)",
    "opts": [
      "Only production operations (Chỉ vận hành production)",
      "Flexible development process, sprint, feedback, and increment (Quá trình phát triển linh hoạt, sprint, feedback và increment)",
      "Only monitoring (Chỉ monitoring)",
      "Only cloud management (Chỉ quản lý cloud)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Flexible development</b><br>Agile chủ yếu tối ưu cách team phát triển sản phẩm qua iteration, feedback và incremental delivery.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D nghiêng về Operations/DevOps hơn và quá hẹp."
  },
  {
    "q": "What does DevOps mainly focus on? (DevOps tập trung chủ yếu vào gì?)",
    "opts": [
      "Only writing user stories (Chỉ viết user story)",
      "Optimizing deployment and operations using automation, CI/CD, and monitoring (Tối ưu deployment và operations bằng automation, CI/CD và monitoring)",
      "Only sprint planning (Chỉ sprint planning)",
      "Only UI design (Chỉ thiết kế UI)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Automation from delivery to operations</b><br>DevOps mở rộng tinh thần Agile sang build, test, release, deploy, operate và monitor bằng tự động hóa và cộng tác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và C là hoạt động Agile/Scrum cụ thể.<br>❌ D là UI/UX."
  },
  {
    "q": "What is a DevOps Toolchain? (DevOps Toolchain là gì?)",
    "opts": [
      "A programming language (Một ngôn ngữ lập trình)",
      "An integrated set of tools to automate the software lifecycle from code, test, deploy to monitor (Tập công cụ tích hợp để tự động hóa vòng đời phần mềm từ code, test, deploy đến monitor)",
      "A UI template (Một template UI)",
      "A database schema (Một database schema)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Integrated DevOps tools</b><br>DevOps toolchain là chuỗi công cụ hỗ trợ các giai đoạn như plan, code, build, test, release, deploy, operate và monitor.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải khái niệm toolchain."
  },
  {
    "q": "Which are version control tools in a DevOps toolchain? (Công cụ version control trong DevOps toolchain gồm gì?)",
    "opts": [
      "Git, SVN, Mercurial",
      "Prometheus, Grafana, ELK",
      "Docker, Kubernetes, containerd",
      "Selenium, JUnit, TestNG"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Git, SVN, Mercurial</b><br>Version control tools dùng để quản lý lịch sử thay đổi source code và hỗ trợ cộng tác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là monitoring/logging.<br>❌ C là container/orchestration.<br>❌ D là testing tools."
  },
  {
    "q": "Docker and Kubernetes are mainly used for what? (Docker và Kubernetes chủ yếu dùng để làm gì?)",
    "opts": [
      "Containerization and orchestration (Containerization và orchestration)",
      "Logging and monitoring (Logging và monitoring)",
      "Unit testing and UI testing (Unit testing và UI testing)",
      "Chat and task management (Chat và task management)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Containerization and orchestration</b><br>Docker giúp đóng gói/chạy container, còn Kubernetes giúp quản lý, scale và điều phối container ở quy mô lớn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Prometheus/Grafana/ELK.<br>❌ C là testing tools.<br>❌ D là Slack/Jira/Confluence."
  },
  {
    "q": "Prometheus, Grafana and ELK Stack belong to which category? (Prometheus, Grafana và ELK Stack thuộc nhóm nào?)",
    "opts": [
      "Version Control",
      "Configuration Management",
      "Monitoring and Logging",
      "Agile Planning"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Monitoring and Logging</b><br>Prometheus thu thập metrics, Grafana trực quan hóa dashboard, ELK hỗ trợ thu thập và phân tích log.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git/SVN.<br>❌ B là Ansible/Puppet/Chef.<br>❌ D là Jira/Trello."
  },
  {
    "q": "What is a best practice of Infrastructure as Code? (Best practice của Infrastructure as Code là gì?)",
    "opts": [
      "Configure each server manually (Cấu hình server thủ công từng máy)",
      "Do not store infrastructure state (Không lưu trạng thái hạ tầng)",
      "Code all infrastructure/configuration, use tools like Terraform/Ansible/Pulumi, and manage state (Code hóa infrastructure/configuration, dùng Terraform/Ansible/Pulumi và quản lý state)",
      "Avoid automation (Không dùng automation)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Infrastructure as Code</b><br>IaB quản lý hạ tầng bằng code để dễ version control, review, tái lập môi trường và tự động hóa triển khai.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A dễ lỗi và khó lặp lại.<br>❌ B sai vì state rất quan trọng với nhiều IaC tools.<br>❌ D trái với DevOps."
  }
];



window.QUIZ_SETS = window.QUIZ_SETS || {};
window.QUIZ_SETS.devops = {
  key: 'devops',
  label: 'DevOps',
  title: 'DevOps Quiz',
  description: 'Bo cau hoi on tap DevOps Overview.',
  data: DEVOPS_QUIZ_DATA
};
