// 0.4 Jenkins-2 (60 câu)
DEVOPS_QUIZ_DATA.topics[3].questions = [
  // 1. Terminology - Q1-5
  {
    q: "What is Autoscaling in DevOps? (Autoscaling trong DevOps là gì?)",
    opts: [
      "Automatically increasing/decreasing containers or system resources based on load (Tự động tăng/giảm container hoặc tài nguyên hệ thống theo tải)",
      "Manually restarting a failed server (Restart server lỗi bằng tay)",
      "Writing test cases for Jenkins (Viết test case cho Jenkins)",
      "Creating a new Git branch (Tạo branch Git mới)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Autoscaling tự động tăng/giảm tài nguyên theo tải</b><br>Autoscaling giúp hệ thống tự tăng hoặc giảm số container/tài nguyên dựa trên CPU, RAM hoặc số lượng request.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là thao tác vận hành thủ công.<br>❌ C là hoạt động testing.<br>❌ D là Git workflow."
  },
  {
    q: "What is a Webhook? (Webhook là gì?)",
    opts: [
      "A Jenkins plugin for UI design only (Plugin Jenkins chỉ để thiết kế UI)",
      "A mechanism that lets one application send real-time information to another application (Cơ chế cho phép app này gửi thông tin realtime cho app khác)",
      "A local-only Git repository (Repository Git chỉ nằm local)",
      "A manual backup method (Phương pháp backup thủ công)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Webhook gửi thông tin realtime giữa các ứng dụng</b><br>Webhook thường được dùng để báo cho Jenkins biết khi có commit mới trên GitHub, từ đó trigger pipeline ngay lập tức.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ C là local repository.<br>❌ D không phải webhook."
  },
  {
    q: "What is an Artifact in a CI/CD pipeline? (Artifact trong CI/CD pipeline là gì?)",
    opts: [
      "A Jenkins user account (Tài khoản người dùng Jenkins)",
      "A Git branch name (Tên branch Git)",
      "A result generated after a pipeline step, such as a model file or build output (Kết quả sinh ra sau một bước pipeline như model file hoặc build output)",
      "A cron expression only (Chỉ là biểu thức cron)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Artifact là kết quả sinh ra sau bước pipeline</b><br>Artifact có thể là file build, package, report, model file hoặc output cần lưu lại sau job/pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là user account.<br>❌ B là branch.<br>❌ D là schedule expression."
  },
  {
    q: "What is Polling in CI/CD? (Polling trong CI/CD là gì?)",
    opts: [
      "A method to store credentials securely (Cách lưu credentials an toàn)",
      "A method to run Docker containers (Cách chạy Docker container)",
      "A method to create Jenkins agents (Cách tạo Jenkins agent)",
      "A strategy for periodically checking a service or source control for changes (Chiến lược kiểm tra định kỳ service/source control để phát hiện thay đổi)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Polling kiểm tra định kỳ</b><br>Polling là cách Jenkins định kỳ kiểm tra Git hoặc service khác để phát hiện commit/job state mới khi không có webhook.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là credentials management.<br>❌ B là container runtime.<br>❌ C là Jenkins architecture/setup."
  },
  {
    q: "What is a disadvantage of Polling compared to Webhook? (Nhược điểm của Polling so với Webhook là gì?)",
    opts: [
      "It is more resource-intensive and has higher latency (Tốn tài nguyên hơn và độ trễ cao hơn)",
      "It cannot check source code changes at all (Hoàn toàn không kiểm tra được thay đổi source code)",
      "It always deletes commits (Luôn xóa commit)",
      "It replaces Jenkins agents (Thay thế Jenkins agents)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Polling tốn tài nguyên và có latency cao hơn</b><br>Polling phải kiểm tra theo chu kỳ, nên có thể chậm hơn webhook và gây tốn tài nguyên hơn event-based trigger.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì polling vẫn kiểm tra được thay đổi.<br>❌ C sai hoàn toàn.<br>❌ D không liên quan."
  },

  // 2. CI/CD Overview - Q6-10
  {
    q: "What are Credentials in a DevOps system? (Credentials trong hệ thống DevOps là gì?)",
    opts: [
      "Only Jenkins UI colors (Chỉ màu giao diện Jenkins)",
      "Authentication and authorization information such as tokens, API keys, SSH keys, or login credentials (Thông tin xác thực/phân quyền như token, API key, SSH key hoặc login credentials)",
      "Only build logs (Chỉ build logs)",
      "Only Git commit messages (Chỉ Git commit messages)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Credentials là thông tin xác thực/phân quyền</b><br>Credentials dùng để truy cập repository, registry, artifact store, cloud service... nên cần được bảo vệ bằng secret manager/vault.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C là log.<br>❌ D là commit metadata."
  },
  {
    q: "What does CI stand for? (CI là viết tắt của gì?)",
    opts: [
      "Container Integration",
      "Code Inspection",
      "Continuous Integration",
      "Cloud Infrastructure"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Continuous Integration</b><br>Continuous Integration là tự động hóa việc tích hợp code, thường kèm build và test khi có thay đổi mới.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải nghĩa của CI trong CI/CD."
  },
  {
    q: "What does CD stand for in CI/CD? (CD trong CI/CD là gì?)",
    opts: [
      "Code Debugging",
      "Cloud Database",
      "Container Design",
      "Continuous Delivery/Deployment"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Continuous Delivery/Deployment</b><br>CD là tự động hóa quá trình delivery hoặc deployment phần mềm sau khi build/test thành công.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải nghĩa đúng của CD trong CI/CD."
  },
  {
    q: "Which is a benefit of CI/CD? (Lợi ích của CI/CD là gì?)",
    opts: [
      "Faster releases, fewer bugs, and higher efficiency (Release nhanh hơn, ít bug hơn và hiệu quả cao hơn)",
      "More manual deployment steps (Nhiều bước deploy thủ công hơn)",
      "Less collaboration between teams (Ít cộng tác hơn giữa các team)",
      "No need for source code management (Không cần quản lý source code)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Faster releases, fewer bugs, higher efficiency</b><br>CI/CD giúp tự động hóa build, test, deploy, từ đó release nhanh hơn và giảm lỗi do thao tác thủ công.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B trái với automation.<br>❌ C sai vì CI/CD cải thiện collaboration.<br>❌ D sai vì vẫn cần Git/VCS."
  },
  {
    q: "Why should teams use CI/CD tools? (Vì sao team nên dùng CI/CD tools?)",
    opts: [
      "To remove all testing activities (Để loại bỏ toàn bộ testing)",
      "To automate build, test, and deployment (Để tự động hóa build, test và deployment)",
      "To avoid collaboration (Để tránh collaboration)",
      "To prevent code quality improvement (Để ngăn cải thiện code quality)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Automate build, test, deployment</b><br>CI/CD tools giúp tự động hóa pipeline, giảm lỗi con người, tăng chất lượng code và rút ngắn time to market.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì testing vẫn rất quan trọng.<br>❌ C và D đi ngược mục tiêu CI/CD."
  },

  // 3. CI/CD Tools Comparison & Jenkins Intro - Q11-20
  {
    q: "What is Jenkins? (Jenkins là gì?)",
    opts: [
      "A database system (Hệ quản trị database)",
      "A container runtime only (Chỉ là container runtime)",
      "An open-source automation server for CI/CD tasks (Automation server mã nguồn mở cho CI/CD)",
      "A UI design tool (Công cụ thiết kế UI)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Jenkins là open-source automation server</b><br>Jenkins tự động hóa các tác vụ như build, test và deploy phần mềm nhằm tăng tốc quá trình phát triển/phát hành.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là DBMS.<br>❌ B là Docker/containerd.<br>❌ D là design tool."
  },
  {
    q: "What is Jenkins especially known for? (Jenkins nổi bật vì điều gì?)",
    opts: [
      "Only supporting one programming language (Chỉ hỗ trợ một ngôn ngữ)",
      "Not supporting plugins (Không hỗ trợ plugin)",
      "Being cloud-only and impossible to self-host (Chỉ chạy cloud và không self-host được)",
      "Being highly customizable with plugins (Có khả năng tùy biến cao nhờ plugin)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Highly customizable with plugins</b><br>Jenkins có hệ sinh thái plugin lớn giúp tích hợp Git, Docker, Kubernetes, testing frameworks và nhiều công cụ DevOps khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Jenkins làm việc với nhiều language/platform.<br>❌ B sai vì plugin là điểm mạnh.<br>❌ C sai vì Jenkins thường self-host."
  },
  {
    q: "Which statement is TRUE about Jenkins hosting? (Phát biểu nào đúng về Jenkins hosting?)",
    opts: [
      "Jenkins is commonly self-hosted (Jenkins thường được self-hosted)",
      "Jenkins is only integrated inside GitHub (Jenkins chỉ tích hợp trong GitHub)",
      "Jenkins is only available as Bitbucket Pipelines (Jenkins chỉ là Bitbucket Pipelines)",
      "Jenkins cannot run on servers (Jenkins không thể chạy trên server)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Jenkins thường self-hosted</b><br>Trong bảng so sánh, Jenkins thuộc nhóm self-hosted, phù hợp các dự án lớn/phức tạp cần tùy biến cao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là GitHub Actions.<br>❌ C là Bitbucket Pipelines.<br>❌ D sai vì Jenkins chạy trên server/container."
  },
  {
    q: "What configuration style does Jenkins support according to the comparison table? (Theo bảng so sánh, Jenkins hỗ trợ kiểu cấu hình nào?)",
    opts: [
      "YAML only",
      "UI + Script",
      "No configuration",
      "Excel files only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: UI + Script</b><br>Jenkins có thể cấu hình qua giao diện và qua script/Jenkinsfile, linh hoạt hơn nhưng cũng cần setup/maintenance nhiều hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A phù hợp GitHub Actions/GitLab/Bitbucket/CircleCI hơn.<br>❌ C sai vì Jenkins cần configuration.<br>❌ D không đúng."
  },
  {
    q: "What is Jenkins best suited for according to the comparison table? (Theo bảng so sánh, Jenkins phù hợp nhất với gì?)",
    opts: [
      "Only GitHub users",
      "Only Bitbucket users",
      "Large, complex projects (Dự án lớn, phức tạp)",
      "Only UI mockup projects"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Large, complex projects</b><br>Jenkins phù hợp dự án lớn, phức tạp vì có khả năng tùy biến mạnh, hỗ trợ plugin và distributed builds.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A phù hợp GitHub Actions.<br>❌ B phù hợp Bitbucket Pipelines.<br>❌ D không liên quan CI/CD."
  },
  {
    q: "Which statement is TRUE about CircleCI? (Phát biểu nào đúng về CircleCI?)",
    opts: [
      "It cannot support Docker (Không hỗ trợ Docker)",
      "It is only for local repositories (Chỉ dùng cho local repository)",
      "It has no free plan at all (Không có free plan)",
      "It supports Docker, Kubernetes, and multi-cloud (Hỗ trợ Docker, Kubernetes và multi-cloud)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: CircleCI hỗ trợ Docker, Kubernetes, multi-cloud</b><br>CircleCI là CI/CD cloud & self-hosted, tối ưu performance/scalability, có caching và parallel execution.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì CircleCI hỗ trợ Docker.<br>❌ B sai.<br>❌ C sai vì có free plan với giới hạn."
  },
  {
    q: "When was the first version of Jenkins released? (Phiên bản đầu tiên của Jenkins được phát hành năm nào?)",
    opts: [
      "2011",
      "2005",
      "1995",
      "2020"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: 2011</b><br>Theo slide, phiên bản đầu tiên của Jenkins được phát hành vào năm 2011.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là năm Git ra đời.<br>❌ C liên quan Java/JavaScript theo ngữ cảnh khác.<br>❌ D quá muộn."
  },
  {
    q: "Which tools can Jenkins integrate with? (Jenkins có thể tích hợp với công cụ nào?)",
    opts: [
      "Only Microsoft Word",
      "Git, Docker, Kubernetes, Selenium, and JUnit",
      "Only Photoshop and Figma",
      "Only local text files"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Git, Docker, Kubernetes, Selenium, JUnit</b><br>Jenkins có khả năng tích hợp dễ dàng với nhiều công cụ DevOps như Git, Docker, Kubernetes và testing frameworks.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải nhóm tích hợp CI/CD chính."
  },
  {
    q: "Which platforms can Jenkins run on? (Jenkins có thể chạy trên nền tảng nào?)",
    opts: [
      "Only Windows",
      "Only Linux",
      "Windows, macOS, Linux, and Docker containers",
      "Only mobile devices"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Windows, macOS, Linux, Docker containers</b><br>Jenkins hỗ trợ cross-platform, có thể chạy trên nhiều hệ điều hành và trong Docker container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và B quá hẹp.<br>❌ D không phải nền tảng chính cho Jenkins server."
  },
  {
    q: "What is one maintenance-related drawback of Jenkins? (Một nhược điểm liên quan maintenance của Jenkins là gì?)",
    opts: [
      "It has no plugins",
      "It cannot run builds",
      "It only supports one language",
      "It requires manual setup and maintenance"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Requires manual setup and maintenance</b><br>Jenkins mạnh và tùy biến cao nhưng thường cần tự cài đặt, cấu hình, cập nhật plugin, bảo mật và bảo trì server.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Jenkins có plugin mạnh.<br>❌ B sai vì Jenkins chuyên chạy build/job.<br>❌ C sai vì Jenkins hỗ trợ nhiều language/platform."
  },

  // 4. Jenkins Architecture - Q21-31
  {
    q: "What kind of architecture does Jenkins use? (Jenkins dùng kiểu kiến trúc nào?)",
    opts: [
      "Distributed architecture with Master and Agents (Kiến trúc phân tán với Master và Agents)",
      "Only single-user desktop architecture (Kiến trúc desktop một người dùng)",
      "Only mobile architecture (Kiến trúc mobile)",
      "No architecture at all (Không có kiến trúc)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Distributed architecture</b><br>Jenkins có Jenkins Master quản lý nhiều Jenkins Agents để phân phối workload và chạy job song song.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không đúng với Jenkins."
  },
  {
    q: "What is the role of Jenkins Master? (Vai trò của Jenkins Master là gì?)",
    opts: [
      "Only rendering UI themes (Chỉ render theme UI)",
      "The central control unit that manages jobs, agents, and configuration storage (Bộ điều khiển trung tâm quản lý job, agent và configuration storage)",
      "Only storing Docker images (Chỉ lưu Docker image)",
      "Only writing source code (Chỉ viết source code)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Jenkins Master là bộ điều khiển trung tâm</b><br>Master chịu trách nhiệm quản lý toàn hệ thống, điều phối job, quản lý agent và lưu trữ cấu hình.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải vai trò chính.<br>❌ C là registry.<br>❌ D là developer activity."
  },
  {
    q: "What is a Jenkins Agent or Node? (Jenkins Agent/Node là gì?)",
    opts: [
      "A Git commit message (Một commit message Git)",
      "A Docker volume only (Chỉ là Docker volume)",
      "A machine managed by Jenkins Master that executes assigned jobs (Máy được Jenkins Master quản lý để thực thi job được giao)",
      "A Slack channel (Một kênh Slack)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Agent/Node thực thi job được Master giao</b><br>Jenkins Agent là máy phụ chịu trách nhiệm chạy job, giúp phân phối workload và chạy pipeline ở các môi trường khác nhau.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git metadata.<br>❌ B là Docker storage.<br>❌ D là notification channel."
  },
  {
    q: "What is an Executor in Jenkins? (Executor trong Jenkins là gì?)",
    opts: [
      "A Git remote URL (URL remote Git)",
      "A plugin repository (Kho plugin)",
      "A Docker registry account (Tài khoản Docker registry)",
      "A component representing an independent workflow capable of executing a job (Thành phần đại diện cho luồng thực thi độc lập có thể chạy job)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Executor chạy job độc lập</b><br>Mỗi node có thể có một hoặc nhiều executor, cho phép Jenkins xử lý nhiều job song song.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git remote.<br>❌ B là plugin source.<br>❌ C là registry credential/account."
  },
  {
    q: "Why does Jenkins use distributed architecture? (Vì sao Jenkins dùng kiến trúc phân tán?)",
    opts: [
      "To distribute workload and enable parallel execution (Để phân phối workload và chạy song song)",
      "To prevent agents from running jobs (Để ngăn agent chạy job)",
      "To remove scalability (Để loại bỏ scalability)",
      "To avoid CI/CD workflows (Để tránh CI/CD workflow)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Distribute workload and run in parallel</b><br>Distributed architecture giúp Jenkins scale tốt hơn, giảm tải cho Master và tăng tốc CI/CD job execution.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì agent chuyên chạy job.<br>❌ C sai vì kiến trúc này tăng scalability.<br>❌ D sai vì Jenkins phục vụ CI/CD."
  },
  {
    q: "What is a Job in Jenkins? (Job trong Jenkins là gì?)",
    opts: [
      "A cloud provider account (Tài khoản cloud provider)",
      "The main unit of work, such as Freestyle Project, Pipeline, or Multibranch Pipeline (Đơn vị công việc chính như Freestyle Project, Pipeline hoặc Multibranch Pipeline)",
      "A GitHub issue only (Chỉ là GitHub issue)",
      "A Docker network only (Chỉ là Docker network)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Job là đơn vị công việc chính</b><br>Job là khái niệm trung tâm trong Jenkins, đại diện cho một workflow/task như build, test hoặc deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C là task tracking.<br>❌ D là Docker networking."
  },
  {
    q: "What is a Freestyle Project in Jenkins? (Freestyle Project trong Jenkins là gì?)",
    opts: [
      "A Kubernetes cluster (Một Kubernetes cluster)",
      "A Git branch naming rule (Quy tắc đặt tên branch)",
      "A simple job type that can execute basic build and test steps (Loại job đơn giản để chạy các bước build/test cơ bản)",
      "A Slack notification format only (Chỉ là format notification Slack)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Simple Jenkins job type</b><br>Freestyle Project phù hợp các job đơn giản, cấu hình qua UI để chạy build/test step cơ bản.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Kubernetes.<br>❌ B là Git convention.<br>❌ D là notification."
  },
  {
    q: "What is a Jenkins Pipeline job? (Pipeline job trong Jenkins là gì?)",
    opts: [
      "A single static HTML page (Một trang HTML tĩnh)",
      "A manual note-taking document (Tài liệu ghi chú thủ công)",
      "A database backup only (Chỉ backup database)",
      "A sequence of tasks usually defined in a Jenkinsfile for flexible CI/CD workflows (Chuỗi task thường định nghĩa trong Jenkinsfile cho CI/CD linh hoạt)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Pipeline là chuỗi task CI/CD</b><br>Pipeline cho phép định nghĩa workflow build, test, deploy bằng Jenkinsfile, dễ version control và tự động hóa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả Jenkins Pipeline."
  },
  {
    q: "What is a Multibranch Pipeline? (Multibranch Pipeline là gì?)",
    opts: [
      "A pipeline that automatically detects and creates jobs for different Git branches (Pipeline tự động phát hiện và tạo job cho các branch Git khác nhau)",
      "A pipeline that disables all branches (Pipeline vô hiệu hóa mọi branch)",
      "A pipeline used only for UI design (Pipeline chỉ dùng thiết kế UI)",
      "A pipeline with no source control integration (Pipeline không tích hợp source control)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Auto-detects branches</b><br>Multibranch Pipeline tự tạo job cho các branch trong Git repository, rất hữu ích khi mỗi branch có Jenkinsfile riêng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B trái ngược định nghĩa.<br>❌ C không đúng.<br>❌ D sai vì nó gắn chặt với SCM."
  },
  {
    q: "What is a Plugin in Jenkins? (Plugin trong Jenkins là gì?)",
    opts: [
      "A file that deletes all builds (File xóa mọi build)",
      "An extension that integrates Jenkins with tools or adds features (Extension giúp Jenkins tích hợp công cụ hoặc thêm tính năng)",
      "A CPU core only (Chỉ là lõi CPU)",
      "A Git commit hash (Hash commit Git)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Plugin mở rộng Jenkins</b><br>Plugin giúp Jenkins tích hợp Git, Docker, Kubernetes, testing frameworks, notifications và nhiều tính năng khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ C là hardware concept.<br>❌ D là Git metadata."
  },
  {
    q: "How does Jenkins usually start a job after a GitHub commit? (Jenkins thường bắt đầu job sau commit GitHub như thế nào?)",
    opts: [
      "By deleting the repository (Bằng cách xóa repository)",
      "By ignoring the commit (Bằng cách bỏ qua commit)",
      "GitHub sends a webhook notification to Jenkins Master, then Jenkins triggers the job (GitHub gửi webhook đến Jenkins Master rồi Jenkins trigger job)",
      "By manually copying files only (Chỉ bằng copy file thủ công)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: GitHub webhook triggers Jenkins job</b><br>Khi có commit mới, GitHub có thể gửi webhook đến Jenkins Master; Jenkins phát hiện thay đổi và chạy pipeline tương ứng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A nguy hiểm và sai.<br>❌ B sai vì Jenkins cần phản ứng với commit.<br>❌ D không phải cách CI/CD chuẩn."
  },

  // 5. Jenkins Components - Q32-37
  {
    q: "After the Jenkins Master assigns a job to an Agent, what does the Agent send back? (Sau khi Master giao job cho Agent, Agent gửi gì về?)",
    opts: [
      "Only UI color settings (Chỉ setting màu UI)",
      "Only Git branch names (Chỉ tên branch Git)",
      "Only cloud billing data (Chỉ dữ liệu billing cloud)",
      "Logs, status, and artifacts (Logs, trạng thái và artifacts)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Logs, status, artifacts</b><br>Agent chạy job rồi gửi kết quả về Master để lưu trữ, báo cáo qua email/Slack hoặc hiển thị trong Jenkins UI.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải output chính của Jenkins job."
  },
  {
    q: "Which Jenkins component manages authentication, authorization, and access control? (Thành phần nào quản lý xác thực, phân quyền và access control trong Jenkins?)",
    opts: [
      "Security",
      "Artifact",
      "Webhook",
      "Executor only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Security</b><br>Security trong Jenkins bảo vệ hệ thống khỏi truy cập trái phép thông qua authentication, authorization và access control.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là output build.<br>❌ C là trigger/event mechanism.<br>❌ D chỉ là thành phần chạy job."
  },
  {
    q: "What do Notifications in Jenkins do? (Notifications trong Jenkins làm gì?)",
    opts: [
      "Compile Java code only (Chỉ compile Java code)",
      "Send job status updates via email, Slack, or other messaging services (Gửi cập nhật trạng thái job qua email, Slack hoặc dịch vụ nhắn tin khác)",
      "Replace Jenkins agents (Thay thế Jenkins agents)",
      "Delete build history automatically (Tự động xóa lịch sử build)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Send job status updates</b><br>Notifications giúp team biết pipeline thành công/thất bại qua email, Slack hoặc các kênh messaging khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là build step.<br>❌ C không đúng.<br>❌ D không phải chức năng notification."
  },
  {
    q: "What does Information Management in Jenkins store? (Information Management trong Jenkins lưu gì?)",
    opts: [
      "Only website CSS files (Chỉ file CSS website)",
      "Only user avatars (Chỉ avatar user)",
      "Build logs, artifacts, environment variables, and credentials (Build logs, artifacts, environment variables và credentials)",
      "Only sprint backlog (Chỉ sprint backlog)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Logs, artifacts, env vars, credentials</b><br>Jenkins cần lưu các thông tin quan trọng của job/pipeline để trace, audit, debug và tái sử dụng trong pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và B quá hẹp/không đúng.<br>❌ D thuộc Agile/Scrum."
  },
  {
    q: "Why is Backup important in Jenkins? (Vì sao Backup quan trọng trong Jenkins?)",
    opts: [
      "To remove all plugins permanently (Để xóa plugin vĩnh viễn)",
      "To make Jenkins unable to restore jobs (Để Jenkins không thể restore job)",
      "To replace source code management (Để thay thế quản lý source code)",
      "To prevent data loss by backing up configurations, job data, and plugins (Để tránh mất dữ liệu bằng backup cấu hình, job data và plugin)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Prevent data loss</b><br>Backup định kỳ Jenkins giúp phục hồi cấu hình, job data và plugin khi server lỗi hoặc mất dữ liệu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và B đi ngược mục tiêu backup.<br>❌ C sai vì backup không thay Git/VCS."
  },
  {
    q: "What do Jenkins Agents help with? (Jenkins Agents giúp gì?)",
    opts: [
      "Distribute workloads and execute jobs on different machines (Phân phối workload và chạy job trên các máy khác nhau)",
      "Disable parallel execution (Vô hiệu hóa chạy song song)",
      "Remove all executors (Xóa mọi executor)",
      "Prevent CI/CD jobs from running (Ngăn CI/CD job chạy)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Distribute workloads</b><br>Agents giúp Jenkins chạy job trên nhiều máy/môi trường khác nhau và hỗ trợ parallel execution.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D trái với mục tiêu của Jenkins Agents."
  },

  // 6. Jenkins Pipeline - Q38-49
  {
    q: "What is a Jenkins Pipeline? (Jenkins Pipeline là gì?)",
    opts: [
      "A database schema only (Chỉ là database schema)",
      "A sequence of automated steps for build, test, and deployment (Chuỗi bước tự động cho build, test và deployment)",
      "A manual Word document (Tài liệu Word thủ công)",
      "A server operating system (Hệ điều hành server)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Automated CI/CD steps</b><br>Pipeline trong Jenkins là chuỗi bước tự động xử lý build, test và deploy phần mềm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải Jenkins Pipeline."
  },
  {
    q: "Which is a benefit of Jenkins Pipeline? (Lợi ích của Jenkins Pipeline là gì?)",
    opts: [
      "Making workflows unclear (Làm workflow khó hiểu hơn)",
      "Increasing manual work (Tăng thao tác thủ công)",
      "Structured workflow and reliable automation (Workflow có cấu trúc và tự động hóa đáng tin cậy)",
      "Disabling CI/CD automation (Vô hiệu hóa CI/CD automation)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Structured workflow and automation</b><br>Jenkins Pipeline giúp tổ chức quy trình CI/CD rõ ràng, maintainable và giảm lỗi thủ công.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đi ngược lợi ích Pipeline."
  },
  {
    q: "What does Agent define in a Jenkins Pipeline? (Agent trong Jenkins Pipeline định nghĩa gì?)",
    opts: [
      "Only the Git commit message (Chỉ commit message Git)",
      "Only the Slack channel name (Chỉ tên kênh Slack)",
      "Only the branch naming rule (Chỉ quy tắc đặt tên branch)",
      "The environment or machine where the pipeline will run (Môi trường hoặc máy nơi pipeline sẽ chạy)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Where the pipeline runs</b><br>Agent chỉ định pipeline chạy trên máy/môi trường nào, ví dụ any agent hoặc agent có label cụ thể như docker-node.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải ý nghĩa của agent."
  },
  {
    q: "What does 'agent any' mean in a Jenkins Pipeline? ('agent any' trong Jenkins Pipeline nghĩa là gì?)",
    opts: [
      "Run on any available agent (Chạy trên bất kỳ agent khả dụng nào)",
      "Run only on no agent (Không chạy trên agent nào)",
      "Run only on Slack (Chỉ chạy trên Slack)",
      "Run only after deleting workspace (Chỉ chạy sau khi xóa workspace)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Run on any available agent</b><br>agent any cho phép Jenkins chọn bất kỳ agent nào đang khả dụng để chạy pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không đúng cú pháp/ý nghĩa."
  },
  {
    q: "What do Stages define in a Jenkins Pipeline? (Stages trong Jenkins Pipeline định nghĩa gì?)",
    opts: [
      "Only credentials (Chỉ credentials)",
      "Different phases such as Build, Test, and Deploy (Các phase như Build, Test và Deploy)",
      "Only Git remotes (Chỉ Git remotes)",
      "Only plugin versions (Chỉ version plugin)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Pipeline phases</b><br>Stages chia pipeline thành các phase rõ ràng như Build, Test, Deploy để dễ theo dõi và quản lý.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải vai trò của stages."
  },
  {
    q: "What are Steps in a Jenkins Pipeline? (Steps trong Jenkins Pipeline là gì?)",
    opts: [
      "Only UI layout blocks (Chỉ block layout UI)",
      "Only Git branches (Chỉ branch Git)",
      "Individual commands executed inside each stage (Các lệnh riêng lẻ được thực thi trong từng stage)",
      "Only backup files (Chỉ file backup)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Commands inside stages</b><br>Steps là các hành động/lệnh cụ thể như echo, sh, build, test command nằm trong một stage.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải Jenkins pipeline steps."
  },
  {
    q: "Which syntax is a Declarative Pipeline known for? (Declarative Pipeline nổi bật với cú pháp nào?)",
    opts: [
      "No syntax at all (Không có cú pháp)",
      "Only binary format (Chỉ định dạng binary)",
      "Only SQL syntax (Chỉ cú pháp SQL)",
      "Simplified and structured syntax (Cú pháp đơn giản và có cấu trúc)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Simplified and structured syntax</b><br>Declarative Pipeline dễ đọc, dễ quản lý và phù hợp với các pipeline đơn giản hoặc chuẩn hóa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không đúng với Jenkins Pipeline."
  },
  {
    q: "Which pipeline type is easier to read and manage for simple pipelines? (Loại pipeline nào dễ đọc và quản lý hơn cho pipeline đơn giản?)",
    opts: [
      "Declarative Pipeline",
      "Scripted Pipeline only",
      "Raw shell scripts without Jenkins",
      "Manual deployment checklist"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Declarative Pipeline</b><br>Declarative Pipeline có cấu trúc rõ ràng nên dễ đọc, dễ maintain và phù hợp pipeline đơn giản.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B linh hoạt hơn nhưng phức tạp hơn.<br>❌ C và D không phải pipeline type trong Jenkins."
  },
  {
    q: "Which language is Scripted Pipeline written in? (Scripted Pipeline được viết bằng ngôn ngữ nào?)",
    opts: [
      "Python only",
      "Groovy",
      "HTML only",
      "SQL only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Groovy</b><br>Scripted Pipeline được viết bằng Groovy, cho phép logic động và workflow phức tạp hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải ngôn ngữ chính của Scripted Pipeline."
  },
  {
    q: "Where is a Scripted Pipeline usually defined? (Scripted Pipeline thường được định nghĩa trong đâu?)",
    opts: [
      "Inside a CSS file (Trong file CSS)",
      "Inside a Docker volume only (Trong Docker volume)",
      "Inside a node block (Trong node block)",
      "Inside a Slack message only (Trong Slack message)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: node block</b><br>Scripted Pipeline thường được định nghĩa bên trong node block để chỉ định nơi chạy các step Groovy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không đúng với Scripted Pipeline."
  },
  {
    q: "What is a Jenkinsfile? (Jenkinsfile là gì?)",
    opts: [
      "A database backup file (File backup database)",
      "A UI image file (File ảnh UI)",
      "A Kubernetes manifest only (Chỉ là manifest Kubernetes)",
      "A script that defines a Jenkins Pipeline (Script định nghĩa Jenkins Pipeline)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Script defining pipeline</b><br>Jenkinsfile thường đặt ở root project để Jenkins tự phát hiện và chạy pipeline theo định nghĩa trong file.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải định nghĩa Jenkinsfile."
  },
  {
    q: "Why is Jenkinsfile useful with Git? (Vì sao Jenkinsfile hữu ích khi dùng với Git?)",
    opts: [
      "It allows version control of the pipeline definition (Cho phép version control định nghĩa pipeline)",
      "It deletes repository history (Xóa lịch sử repository)",
      "It prevents code review (Ngăn code review)",
      "It removes all CI/CD automation (Loại bỏ toàn bộ CI/CD automation)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Version control pipeline</b><br>Khi Jenkinsfile nằm trong Git, team có thể review, track và rollback thay đổi pipeline giống như source code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D đều sai và đi ngược lợi ích Jenkinsfile."
  },

  // 7. Triggers, Notifications, Shared Library - Q50-60
  {
    q: "What is Poll SCM in Jenkins? (Poll SCM trong Jenkins là gì?)",
    opts: [
      "A Jenkins theme plugin (Plugin theme Jenkins)",
      "A trigger where Jenkins periodically checks source control for updates (Trigger Jenkins kiểm tra source control định kỳ để tìm update)",
      "A command to delete builds (Lệnh xóa build)",
      "A Docker image registry (Registry Docker image)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Periodically checks SCM</b><br>Poll SCM cho phép Jenkins kiểm tra Git/SCM theo lịch cron-like để phát hiện commit mới.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ C không phải trigger.<br>❌ D là registry."
  },
  {
    q: "What does the cron-like schedule 'H/5 * * * *' mean in Jenkins Poll SCM? (Lịch 'H/5 * * * *' trong Poll SCM nghĩa là gì?)",
    opts: [
      "Run only once per year (Chạy một lần mỗi năm)",
      "Run only at midnight (Chỉ chạy lúc nửa đêm)",
      "Poll approximately every 5 minutes (Kiểm tra khoảng mỗi 5 phút)",
      "Never poll SCM (Không bao giờ poll SCM)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Poll every 5 minutes</b><br>Trong slide, H/5 * * * * được mô tả là polling mỗi 5 phút để kiểm tra cập nhật từ SCM.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không đúng ý nghĩa schedule."
  },
  {
    q: "What is GitHub Hook Trigger in Jenkins? (GitHub Hook Trigger trong Jenkins là gì?)",
    opts: [
      "A trigger that disables GitHub integration (Trigger tắt tích hợp GitHub)",
      "A trigger that runs only by manual button (Trigger chỉ chạy khi bấm tay)",
      "A trigger that checks GitHub every 24 hours only (Trigger chỉ kiểm tra GitHub mỗi 24 giờ)",
      "A trigger where GitHub webhook notifies Jenkins immediately after a new commit (Trigger dùng GitHub webhook báo Jenkins ngay khi có commit mới)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Webhook notifies Jenkins immediately</b><br>GitHub Hook Trigger hiệu quả hơn Poll SCM vì Jenkins được báo ngay khi có commit mới, không phải kiểm tra định kỳ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả GitHub Hook Trigger."
  },
  {
    q: "Why is GitHub Hook Trigger more efficient than Poll SCM? (Vì sao GitHub Hook Trigger hiệu quả hơn Poll SCM?)",
    opts: [
      "Because it triggers instantly when GitHub sends a webhook (Vì nó trigger ngay khi GitHub gửi webhook)",
      "Because it checks SCM forever every second manually (Vì kiểm tra SCM thủ công mỗi giây)",
      "Because it never reacts to commits (Vì không phản ứng với commit)",
      "Because it removes Jenkins Master (Vì nó xóa Jenkins Master)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Instant event-based trigger</b><br>Webhook là event-based nên ít tốn tài nguyên và độ trễ thấp hơn polling định kỳ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì webhook không phải manual polling.<br>❌ C sai vì nó phản ứng với commit.<br>❌ D không liên quan."
  },
  {
    q: "How can Jenkins notify a team about build results? (Jenkins có thể thông báo kết quả build cho team bằng cách nào?)",
    opts: [
      "Only by printing paper reports (Chỉ in báo cáo giấy)",
      "Slack messages, emails, or other notifications (Slack message, email hoặc notification khác)",
      "Only by deleting failed jobs (Chỉ xóa job fail)",
      "Only by renaming Git branches (Chỉ đổi tên branch Git)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Slack, email, other notifications</b><br>Jenkins có thể gửi trạng thái build/pipeline đến Slack, email hoặc các hệ thống thông báo khác để team phản ứng nhanh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải cách CI/CD hiện đại.<br>❌ C nguy hiểm và sai.<br>❌ D không phải notification."
  },
  {
    q: "What is Console Output used for in Jenkins Pipeline? (Console Output trong Jenkins Pipeline dùng để làm gì?)",
    opts: [
      "Designing UI screens (Thiết kế màn hình UI)",
      "Storing cloud invoices only (Chỉ lưu hóa đơn cloud)",
      "Monitoring and debugging pipeline execution (Theo dõi và debug quá trình chạy pipeline)",
      "Creating GitHub accounts (Tạo tài khoản GitHub)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Monitoring and debugging</b><br>Console Output hiển thị log chi tiết khi pipeline chạy, giúp xác định stage/step nào thành công hoặc thất bại.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải chức năng Console Output."
  },
  {
    q: "What is Jenkins Shared Library? (Jenkins Shared Library là gì?)",
    opts: [
      "A local database table (Bảng database local)",
      "A Git branch naming convention (Quy ước đặt tên branch Git)",
      "A Docker base image only (Chỉ là Docker base image)",
      "A feature that allows sharing code and build steps across multiple pipelines (Tính năng cho phép chia sẻ code và build steps giữa nhiều pipeline)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Share code/build steps across pipelines</b><br>Shared Library giúp tái sử dụng logic pipeline chung cho nhiều Jenkinsfile, tránh copy-paste lặp lại.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải Jenkins Shared Library."
  },
  {
    q: "Why use Jenkins Shared Libraries? (Vì sao dùng Jenkins Shared Libraries?)",
    opts: [
      "Avoid code duplication, improve reuse, and ease maintenance (Tránh lặp code, tăng tái sử dụng và dễ maintenance)",
      "Make every Jenkinsfile longer (Làm mọi Jenkinsfile dài hơn)",
      "Disable modularity (Tắt tính modular)",
      "Prevent pipeline reuse (Ngăn tái sử dụng pipeline)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Avoid duplication and improve maintenance</b><br>Shared Library cho phép viết logic chung một lần rồi dùng lại ở nhiều pipeline; update một chỗ áp dụng cho nhiều Jenkinsfile.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D trái với mục tiêu Shared Library."
  },
  {
    q: "Where are shared functions commonly placed in a Jenkins Shared Library? (Shared functions thường đặt ở đâu trong Jenkins Shared Library?)",
    opts: [
      "Only in /tmp folder (Chỉ trong thư mục /tmp)",
      "In the vars/ directory (Trong thư mục vars/)",
      "Only in package.json (Chỉ trong package.json)",
      "Only in Dockerfile (Chỉ trong Dockerfile)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: vars/ directory</b><br>Trong cấu trúc Shared Library, thư mục vars/ chứa các Groovy file định nghĩa shared function như deploy.groovy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải cấu trúc chuẩn.<br>❌ C là Node.js metadata.<br>❌ D là Docker build file."
  },
  {
    q: "Which file example defines a deploy shared function in the slide? (File nào trong ví dụ slide định nghĩa shared function deploy?)",
    opts: [
      "README.md",
      "Dockerfile",
      "vars/deploy.groovy",
      ".gitignore"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: vars/deploy.groovy</b><br>Slide minh họa tạo file vars/deploy.groovy với hàm call(String environment) để deploy đến môi trường chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là tài liệu.<br>❌ B là Docker build file.<br>❌ D là file ignore của Git."
  },
  {
    q: "How is a Jenkins Shared Library loaded in a Jenkinsfile? (Jenkins Shared Library được load trong Jenkinsfile như thế nào?)",
    opts: [
      "Using git status only (Chỉ dùng git status)",
      "Using docker run only (Chỉ dùng docker run)",
      "Using npm install only (Chỉ dùng npm install)",
      "Using @Library('my-shared-library') _ (Dùng @Library('my-shared-library') _)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: @Library('my-shared-library') _</b><br>Jenkinsfile có thể load shared library bằng annotation @Library rồi gọi shared function như deploy('staging').<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git command.<br>❌ B là Docker command.<br>❌ C là Node.js package command."
  }
];
