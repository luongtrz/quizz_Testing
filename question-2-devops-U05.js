// 0.5 Docker + Docker Multi Stage (96 câu)
window.QUIZ_SETS = window.QUIZ_SETS || {};
window.QUIZ_SETS.devops = window.QUIZ_SETS.devops || { data: { topics: [] } };
window.QUIZ_SETS.devops.data.topics[4].questions = [
  // 1. Virtual Environments - Q1-7
  {
    q: "What is the main purpose of a virtual environment? (Mục đích chính của virtual environment là gì?)",
    opts: [
      "Keep dependencies in separate environments for different projects (Tách dependency thành các môi trường riêng cho từng project)",
      "Replace the operating system completely (Thay thế hoàn toàn hệ điều hành)",
      "Run containers across multiple hosts (Chạy container trên nhiều host)",
      "Store Docker images publicly (Lưu Docker image công khai)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Tách dependency theo môi trường</b><br>Virtual environment giúp mỗi project dùng thư viện và version riêng, tránh xung đột dependency giữa các project.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là VM/OS-level virtualization.<br>❌ C liên quan orchestration.<br>❌ D là Docker Registry."
  },
  {
    q: "Why are virtual environments useful for dependency management? (Vì sao virtual environment hữu ích cho dependency management?)",
    opts: [
      "Because they remove all dependencies (Vì chúng xóa toàn bộ dependency)",
      "Because different projects can use different library/package versions (Vì các project khác nhau có thể dùng version thư viện/package khác nhau)",
      "Because they automatically deploy to production (Vì chúng tự động deploy production)",
      "Because they replace source control (Vì chúng thay thế source control)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Mỗi project có thể dùng version dependency riêng</b><br>Virtual environment cô lập package theo project, giúp project A dùng version khác project B mà không gây conflict.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì vẫn cần dependency.<br>❌ C là CI/CD deployment.<br>❌ D sai vì Git/VCS vẫn cần thiết."
  },
  {
    q: "Which component is commonly inside a virtual environment directory? (Thành phần nào thường nằm trong thư mục virtual environment?)",
    opts: [
      "Docker Registry storage only (Chỉ storage Docker Registry)",
      "Kubernetes control plane (Control plane Kubernetes)",
      "Directory for third-party libraries and links to executables (Thư mục chứa thư viện bên thứ ba và link tới executable)",
      "GitHub Pull Request page (Trang Pull Request GitHub)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Libraries + executable links</b><br>Virtual environment thường có thư mục chứa third-party libraries, link tới python/pip và script kích hoạt môi trường.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker Registry.<br>❌ B thuộc Kubernetes.<br>❌ D thuộc GitHub."
  },
  {
    q: "What happens when a virtual environment is activated? (Điều gì xảy ra khi activate virtual environment?)",
    opts: [
      "Docker automatically pushes images (Docker tự động push image)",
      "The host OS is deleted (Hệ điều hành host bị xóa)",
      "All containers are stopped (Tất cả container bị stop)",
      "The shell PATH prioritizes the virtual environment executables (PATH ưu tiên executable trong virtual environment)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: PATH ưu tiên executable trong virtual environment</b><br>Khi activate, shell ưu tiên dùng python/pip trong virtual environment thay vì bản system-wide.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan virtualenv.<br>❌ B vô lý và nguy hiểm.<br>❌ C không phải hành vi activate virtualenv."
  },
  {
    q: "What does isolation mean in a virtual environment? (Isolation trong virtual environment nghĩa là gì?)",
    opts: [
      "Installed packages affect only that environment, not the system-wide setup (Package cài đặt chỉ ảnh hưởng môi trường đó, không ảnh hưởng toàn hệ thống)",
      "All projects must use the same dependency versions (Mọi project phải dùng cùng version dependency)",
      "The machine cannot access the network (Máy không thể truy cập network)",
      "The project cannot run Python code (Project không thể chạy Python code)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Package chỉ ảnh hưởng môi trường hiện tại</b><br>Virtual environment cô lập package, giúp cài/xóa thư viện trong một project mà không phá dependency của project khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B trái với virtualenv.<br>❌ C không đúng.<br>❌ D sai vì virtualenv giúp chạy code ổn định hơn."
  },
  {
    q: "Which is a benefit of virtual environments? (Lợi ích của virtual environment là gì?)",
    opts: [
      "They always eliminate storage usage (Luôn loại bỏ dung lượng lưu trữ)",
      "They improve reproducibility and dependency management (Cải thiện reproducibility và quản lý dependency)",
      "They replace all containers (Thay thế toàn bộ container)",
      "They remove the need for requirements.txt (Loại bỏ nhu cầu requirements.txt)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Reproducibility + dependency management</b><br>Virtual environment giúp quản lý dependency tốt hơn, thường đi kèm requirements.txt để tái lập môi trường.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì có thể tốn thêm storage.<br>❌ C sai vì virtualenv là bước trước containerization, không thay thế mọi container.<br>❌ D sai vì requirements.txt vẫn hữu ích."
  },
  {
    q: "Which is a drawback of virtual environments? (Nhược điểm của virtual environment là gì?)",
    opts: [
      "They cannot isolate dependencies (Không thể cô lập dependency)",
      "They cannot run on local machines (Không thể chạy trên máy local)",
      "They may duplicate binaries/libraries and consume storage space (Có thể nhân bản binary/library và tốn dung lượng)",
      "They always require Kubernetes (Luôn bắt buộc dùng Kubernetes)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Có thể tốn storage</b><br>Mỗi virtual environment có thể chứa bản sao package/binary riêng, nên dùng nhiều project có thể tốn thêm dung lượng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì isolation là mục tiêu chính.<br>❌ B sai vì virtualenv chạy local rất phổ biến.<br>❌ D không liên quan."
  },

  // 2. Virtual Machines - Q8-12
  {
    q: "What is a Virtual Machine? (Virtual Machine là gì?)",
    opts: [
      "A Docker image layer only (Chỉ là layer của Docker image)",
      "A Git branch for deployment (Một Git branch để deploy)",
      "A package manager for Python (Package manager cho Python)",
      "A separate computer system running inside another computer (Một hệ thống máy tính riêng chạy bên trong máy tính khác)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Computer within a computer</b><br>VM hoạt động như một máy tính riêng biệt bên trong máy thật, thường có guest OS và được quản lý bởi hypervisor.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker image.<br>❌ B thuộc Git.<br>❌ C là pip/conda."
  },
  {
    q: "Which is a benefit of Virtual Machines? (Lợi ích của Virtual Machine là gì?)",
    opts: [
      "Strong isolation like a separate computer system (Cô lập tốt như một hệ thống máy tính riêng)",
      "No boot time at all (Không có thời gian boot)",
      "No overhead at all (Không có overhead)",
      "Always lighter than containers (Luôn nhẹ hơn container)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Isolation mạnh</b><br>VM cung cấp môi trường cô lập, phần mềm bên trong VM khó ảnh hưởng trực tiếp đến máy thật.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì VM mất thời gian boot.<br>❌ C sai vì có overhead.<br>❌ D sai vì container thường nhẹ hơn VM."
  },
  {
    q: "Why can VMs be considered secure? (Vì sao VM có thể được xem là an toàn?)",
    opts: [
      "Because they share all host processes directly (Vì chia sẻ trực tiếp mọi process host)",
      "Because software inside the VM cannot easily affect the actual computer (Vì phần mềm trong VM khó ảnh hưởng đến máy thật)",
      "Because they never use an operating system (Vì không bao giờ dùng hệ điều hành)",
      "Because they delete all data after boot (Vì xóa mọi dữ liệu sau khi boot)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Cô lập khỏi máy thật</b><br>VM có guest OS và lớp ảo hóa, giúp cô lập phần mềm chạy trong VM khỏi hệ thống host.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì VM không chia sẻ process trực tiếp như vậy.<br>❌ C sai vì VM thường có guest OS.<br>❌ D không đúng."
  },
  {
    q: "Which is a disadvantage of Virtual Machines? (Nhược điểm của Virtual Machine là gì?)",
    opts: [
      "They cannot isolate applications (Không thể cô lập ứng dụng)",
      "They cannot run multiple operating systems (Không thể chạy nhiều OS)",
      "They take time to boot and have overhead (Mất thời gian boot và có overhead)",
      "They are always smaller than containers (Luôn nhỏ hơn container)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Boot time + overhead</b><br>VM thường nặng hơn container vì cần guest OS, tài nguyên phần cứng và thời gian boot lâu hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì VM cô lập tốt.<br>❌ B sai vì VM hỗ trợ chạy nhiều OS trên một máy.<br>❌ D sai vì container thường nhỏ hơn."
  },
  {
    q: "Why may an average laptop struggle with many VMs? (Vì sao laptop trung bình khó chạy nhiều VM?)",
    opts: [
      "Because VMs use local hardware resources like CPU and memory (Vì VM dùng tài nguyên phần cứng local như CPU và RAM)",
      "Because VMs cannot use CPU (Vì VM không dùng được CPU)",
      "Because VMs are just text files (Vì VM chỉ là file text)",
      "Because VMs do not need memory (Vì VM không cần RAM)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: VM tiêu tốn CPU/RAM local</b><br>Mỗi VM cần tài nguyên riêng như CPU, RAM, disk, nên laptop trung bình khó chạy nhiều VM cùng lúc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì VM cần CPU.<br>❌ C sai.<br>❌ D sai vì VM cần RAM."
  },

  // 3. Linux Containers - Q13-22
  {
    q: "Which two Linux features are fundamental for containers? (Hai tính năng Linux nền tảng cho container là gì?)",
    opts: [
      "Git and Jenkins",
      "Namespaces and cgroups",
      "HTML and CSS",
      "DNS and SMTP only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Namespaces và cgroups</b><br>Linux containers dựa nhiều vào namespaces để cô lập và cgroups để giới hạn/phân bổ tài nguyên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là DevOps tools khác.<br>❌ C là web frontend.<br>❌ D là network/email protocols."
  },
  {
    q: "What does a Mount namespace isolate? (Mount namespace cô lập gì?)",
    opts: [
      "Only CPU usage (Chỉ CPU usage)",
      "Only user passwords (Chỉ password user)",
      "Filesystem mount points for processes (Các điểm mount filesystem cho process)",
      "Docker Hub accounts (Tài khoản Docker Hub)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Filesystem mount points</b><br>Mount namespace cô lập view về filesystem mount point cho một nhóm process.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc cgroups.<br>❌ B không phải mount namespace.<br>❌ D không liên quan."
  },
  {
    q: "What does a PID namespace isolate? (PID namespace cô lập gì?)",
    opts: [
      "Docker image tags only (Chỉ tag Docker image)",
      "Container registry storage only (Chỉ storage registry)",
      "Application source code only (Chỉ source code ứng dụng)",
      "Process ID hierarchy (Cấu trúc/hệ thống Process ID)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Process ID hierarchy</b><br>PID namespace tạo không gian process riêng, giúp process trong container có cây PID riêng được kernel theo dõi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải chức năng của PID namespace."
  },
  {
    q: "What is the Network namespace used for? (Network namespace dùng để làm gì?)",
    opts: [
      "Controlling and isolating networks (Điều khiển và cô lập network)",
      "Storing Docker images (Lưu Docker image)",
      "Building Dockerfiles (Build Dockerfile)",
      "Writing Git commits (Viết Git commit)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Cô lập network</b><br>Network namespace giúp container có network stack riêng như interface, IP, routing table.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc registry/local image store.<br>❌ C thuộc Docker build.<br>❌ D thuộc Git."
  },
  {
    q: "What does IPC namespace isolate? (IPC namespace cô lập gì?)",
    opts: [
      "Docker Compose services (Service Docker Compose)",
      "Inter-process communication (Giao tiếp giữa các process)",
      "Git remotes (Git remote)",
      "Image tags (Tag image)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Inter-process communication</b><br>IPC namespace cô lập cơ chế giao tiếp giữa process như shared memory, message queue.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker Compose.<br>❌ C thuộc Git.<br>❌ D thuộc Docker image."
  },
  {
    q: "What does UTS namespace isolate? (UTS namespace cô lập gì?)",
    opts: [
      "CPU and memory limits (Giới hạn CPU/RAM)",
      "Docker Registry authentication (Xác thực Docker Registry)",
      "Hostname and NIS domain name (Hostname và NIS domain name)",
      "Git commit history (Lịch sử commit Git)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Hostname và NIS domain name</b><br>UTS namespace giúp container có hostname riêng biệt với host hoặc container khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc cgroups.<br>❌ B thuộc registry security.<br>❌ D thuộc Git."
  },
  {
    q: "What does User namespace isolate? (User namespace cô lập gì?)",
    opts: [
      "Dockerfile instructions only (Chỉ Dockerfile instruction)",
      "Network ports only (Chỉ port network)",
      "Image layers only (Chỉ layer image)",
      "User and group ID namespaces (Namespace user ID và group ID)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: User ID và Group ID</b><br>User namespace cô lập user/group ID, giúp user trong container có thể khác mapping với user trên host.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả User namespace."
  },
  {
    q: "What are cgroups used for in containers? (Cgroups dùng để làm gì trong container?)",
    opts: [
      "Allocate and limit resources such as CPU, memory, and network I/O (Phân bổ và giới hạn CPU, RAM, network I/O)",
      "Create GitHub pull requests (Tạo Pull Request GitHub)",
      "Write Dockerfile comments (Viết comment Dockerfile)",
      "Upload images to Docker Hub only (Chỉ upload image lên Docker Hub)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Giới hạn tài nguyên</b><br>Cgroups là nền tảng giúp container engine giới hạn tài nguyên mà container được sử dụng như CPU, memory, network I/O.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc GitHub.<br>❌ C không phải vai trò cgroups.<br>❌ D thuộc registry."
  },
  {
    q: "What does a container package include? (Một container package gồm những gì?)",
    opts: [
      "Only a Git branch (Chỉ một branch Git)",
      "Application code, configuration files, libraries, and dependencies (Application code, file cấu hình, thư viện và dependency)",
      "Only CPU metrics (Chỉ CPU metrics)",
      "Only a README file (Chỉ file README)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Code + config + libraries + dependencies</b><br>Container đóng gói ứng dụng cùng mọi thứ cần để chạy nhất quán trên nhiều môi trường.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C thuộc monitoring.<br>❌ D quá thiếu."
  },
  {
    q: "What does it mean that containers abstract the application from the host OS? (Container abstract application khỏi host OS nghĩa là gì?)",
    opts: [
      "The app becomes less dependent on host-specific setup (Ứng dụng ít phụ thuộc cấu hình cụ thể của host hơn)",
      "The host OS is not needed at all (Không cần host OS)",
      "The app cannot run on cloud (Ứng dụng không thể chạy cloud)",
      "The app must be rewritten for every machine (Ứng dụng phải viết lại cho từng máy)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Ít phụ thuộc host-specific setup</b><br>Container giúp app chạy nhất quán vì dependency đã được đóng gói cùng app, dù chạy trên VM, bare metal, on-premise hay cloud.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì vẫn cần kernel/host.<br>❌ C sai vì container chạy tốt trên cloud.<br>❌ D trái với lợi ích container."
  },

  // 4. Docker Introduction & Components - Q23-34
  {
    q: "What is Docker? (Docker là gì?)",
    opts: [
      "A tool only for editing images (Công cụ chỉ để chỉnh ảnh)",
      "A platform designed to make it easier to create and manage containers (Nền tảng giúp tạo và quản lý container dễ hơn)",
      "A version control system (Hệ thống quản lý phiên bản)",
      "A physical server vendor (Nhà cung cấp server vật lý)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Docker là platform tạo và quản lý container</b><br>Docker là nền tảng phổ biến để build, run và manage container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ C là Git/SVN/Mercurial.<br>❌ D không phải Docker."
  },
  {
    q: "Which tools are alternatives or related technologies to Docker? (Công cụ nào là alternative hoặc công nghệ liên quan Docker?)",
    opts: [
      "Photoshop, Figma, Canva",
      "Jira, Trello, Asana",
      "Podman, rkt, LXC, containerd, CRI-O",
      "MySQL, Redis, PostgreSQL"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Podman, rkt, LXC, containerd, CRI-O</b><br>Các công cụ này liên quan đến container runtime hoặc container management, là alternative/công nghệ gần với Docker.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là design tools.<br>❌ B là project management tools.<br>❌ D là database."
  },
  {
    q: "What is OCI in the container ecosystem? (OCI trong hệ sinh thái container là gì?)",
    opts: [
      "Only a Docker Hub username (Chỉ là username Docker Hub)",
      "A Jenkins plugin type (Một loại plugin Jenkins)",
      "A Git branch model (Một mô hình branch Git)",
      "Open Container Initiative, a standard around container images/runtimes (Chuẩn Open Container Initiative cho image/runtime container)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Open Container Initiative</b><br>OCI định nghĩa chuẩn giúp các công cụ như Docker/Podman/containerd tương thích với image/runtime container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải nghĩa của OCI."
  },
  {
    q: "Which is an advantage of Docker containers over Virtual Machines? (Ưu điểm của Docker container so với VM là gì?)",
    opts: [
      "Lighter and consume fewer resources (Nhẹ hơn và tiêu thụ ít tài nguyên hơn)",
      "Always require a full guest OS (Luôn cần guest OS đầy đủ)",
      "Always boot slower than VMs (Luôn boot chậm hơn VM)",
      "Cannot be deployed cost-effectively (Không thể deploy tiết kiệm chi phí)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Nhẹ hơn và ít tốn tài nguyên</b><br>Container thường nhẹ hơn VM, khởi động nhanh hơn và triển khai tiết kiệm chi phí hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là đặc điểm VM hơn.<br>❌ C sai vì container thường startup nhanh.<br>❌ D sai vì Docker hỗ trợ deployment cost-effective."
  },
  {
    q: "What is Docker Engine? (Docker Engine là gì?)",
    opts: [
      "A Git hosting service (Dịch vụ host Git)",
      "The core component that runs Docker (Thành phần lõi chạy Docker)",
      "A UI design system (Hệ thống thiết kế UI)",
      "A cloud billing tool (Công cụ tính phí cloud)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Core component chạy Docker</b><br>Docker Engine là thành phần lõi gồm Docker Daemon, Docker API và Docker CLI/Client.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là GitHub/GitLab.<br>❌ C không liên quan.<br>❌ D không phải Docker Engine."
  },
  {
    q: "What does Docker Daemon manage? (Docker Daemon quản lý gì?)",
    opts: [
      "Only Jira tasks (Chỉ Jira task)",
      "Only browser tabs (Chỉ browser tab)",
      "Docker objects such as containers, images, networks, and volumes (Các Docker object như container, image, network và volume)",
      "Only Git commit messages (Chỉ commit message Git)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Container, image, network, volume</b><br>Docker Daemon nhận request từ Docker API/CLI và quản lý các object chính của Docker.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải object Docker Daemon quản lý."
  },
  {
    q: "What is Docker API used for? (Docker API dùng để làm gì?)",
    opts: [
      "Only to draw diagrams (Chỉ để vẽ sơ đồ)",
      "Only to write Git messages (Chỉ để viết message Git)",
      "Only to store passwords in plaintext (Chỉ lưu password dạng plaintext)",
      "Allow Docker Client or tools to interact with Docker Daemon (Cho phép Docker Client/tool tương tác với Docker Daemon)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Interface tới Docker Daemon</b><br>Docker API là interface để Docker CLI hoặc tool khác gửi request đến Docker Daemon.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò Docker API."
  },
  {
    q: "What is Docker CLI? (Docker CLI là gì?)",
    opts: [
      "A command-line interface to send commands to Docker Daemon (Giao diện dòng lệnh gửi command đến Docker Daemon)",
      "A database query language only (Chỉ là ngôn ngữ query database)",
      "A CSS framework (Framework CSS)",
      "A physical network cable (Dây mạng vật lý)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Command-line client</b><br>Docker CLI cho phép user chạy lệnh như docker run, docker build, docker stop để điều khiển Docker Daemon.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là SQL.<br>❌ C là frontend.<br>❌ D là hardware."
  },
  {
    q: "What is a Docker Container? (Docker Container là gì?)",
    opts: [
      "A read-only template only (Chỉ là template read-only)",
      "An active process running in an isolated environment (Process đang chạy trong môi trường cô lập)",
      "A GitHub repository type (Một loại GitHub repository)",
      "A static documentation page (Trang tài liệu tĩnh)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Running isolated process</b><br>Container là instance đang chạy từ Docker image, có filesystem, network và execution environment riêng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Docker Image.<br>❌ C không đúng.<br>❌ D không liên quan."
  },
  {
    q: "What is a Docker Image? (Docker Image là gì?)",
    opts: [
      "A running process only (Chỉ là process đang chạy)",
      "A container log file only (Chỉ là file log container)",
      "A read-only template used to create Docker Containers (Template read-only dùng để tạo Docker Container)",
      "A network cable (Dây mạng)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Read-only template</b><br>Docker Image chứa mọi thứ cần để chạy app như OS base, source code, library và dependency.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là container runtime state.<br>❌ B là log.<br>❌ D không liên quan."
  },
  {
    q: "What is a Docker Registry? (Docker Registry là gì?)",
    opts: [
      "A local shell script only (Chỉ là shell script local)",
      "A type of Linux namespace (Một loại Linux namespace)",
      "A Docker network driver only (Chỉ là network driver Docker)",
      "A storage system for Docker Images (Hệ thống lưu trữ Docker Image)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Storage system for images</b><br>Docker Registry cho phép push, pull, lưu trữ và phân phối Docker Images. Docker Hub là registry phổ biến nhất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải Docker Registry."
  },
  {
    q: "What is a Docker Volume? (Docker Volume là gì?)",
    opts: [
      "A storage solution for persistent container data (Giải pháp lưu trữ dữ liệu persistent cho container)",
      "A Git branch strategy (Chiến lược branch Git)",
      "A Dockerfile instruction for choosing base image (Instruction chọn base image)",
      "A cloud region only (Chỉ là cloud region)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Persistent storage</b><br>Volume giúp dữ liệu không mất khi container stop hoặc bị xóa, phù hợp lưu database data, uploads, config cần persist.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C là FROM.<br>❌ D không liên quan."
  },
  {
    q: "If an image is not available locally, what can Docker Daemon do? (Nếu image không có local, Docker Daemon có thể làm gì?)",
    opts: [
      "Delete the host OS (Xóa host OS)",
      "Pull the image from a Docker Registry (Pull image từ Docker Registry)",
      "Rewrite all source code (Viết lại toàn bộ source code)",
      "Disable Docker CLI permanently (Tắt Docker CLI vĩnh viễn)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Pull từ registry</b><br>Khi chạy container mà image chưa có local, Docker Daemon có thể tải image từ registry như Docker Hub.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A nguy hiểm và sai.<br>❌ C không phải việc Docker làm.<br>❌ D sai."
  },

  // 5. Images, Dockerfile, Best Practices - Q35-50
  {
    q: "What does it mean that a Docker Image is composed of layers? (Docker Image gồm nhiều layer nghĩa là gì?)",
    opts: [
      "Each layer represents a change during the build process (Mỗi layer biểu diễn một thay đổi trong quá trình build)",
      "Each layer is a separate Git repository (Mỗi layer là một Git repo riêng)",
      "Each layer is a physical disk (Mỗi layer là một ổ cứng vật lý)",
      "Each layer is a VM guest OS (Mỗi layer là một guest OS VM)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Layer là thay đổi trong build</b><br>Mỗi instruction như cài package hoặc copy file có thể tạo layer, giúp image cache và tái sử dụng hiệu quả.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không đúng với Docker image layer."
  },
  {
    q: "Which command pulls the Nginx image from Docker Hub? (Lệnh nào pull image Nginx từ Docker Hub?)",
    opts: [
      "docker images",
      "docker pull nginx",
      "docker rmi nginx",
      "docker stop nginx"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: docker pull nginx</b><br>Lệnh docker pull nginx tải image nginx từ registry mặc định Docker Hub về local.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê image local.<br>❌ C xóa image.<br>❌ D stop container."
  },
  {
    q: "Which command lists downloaded Docker images? (Lệnh nào liệt kê Docker image đã tải về?)",
    opts: [
      "docker ps",
      "docker stop",
      "docker images",
      "docker logs"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker images</b><br>Lệnh docker images hiển thị các image đang có trên máy local.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê container đang chạy.<br>❌ B stop container.<br>❌ D xem log container."
  },
  {
    q: "Which command removes a Docker image? (Lệnh nào xóa Docker image?)",
    opts: [
      "docker rm <container>",
      "docker ps -a",
      "docker start <container>",
      "docker rmi <image_name_or_id>"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker rmi</b><br>docker rmi xóa image theo tên hoặc ID. docker rm dùng để xóa container, không phải image.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xóa container.<br>❌ B liệt kê container.<br>❌ C start container."
  },
  {
    q: "What is a Dockerfile? (Dockerfile là gì?)",
    opts: [
      "A text file containing commands to build a Docker Image (File text chứa command để build Docker Image)",
      "A running container (Container đang chạy)",
      "A Docker volume only (Chỉ là Docker volume)",
      "A Git remote URL (URL remote Git)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: File định nghĩa cách build image</b><br>Dockerfile mô tả cách cài dependency, copy file, set working directory và start application trong image.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là container.<br>❌ C là storage.<br>❌ D thuộc Git."
  },
  {
    q: "What does the FROM instruction do in a Dockerfile? (Instruction FROM trong Dockerfile làm gì?)",
    opts: [
      "Runs a command during build (Chạy command trong lúc build)",
      "Specifies the base image (Chỉ định base image)",
      "Maps a port on the host (Map port trên host)",
      "Deletes all images (Xóa mọi image)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Chỉ định base image</b><br>FROM là instruction chọn image nền, ví dụ FROM python:3.12 hoặc FROM alpine:3.13.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là RUN.<br>❌ C là docker run -p hoặc EXPOSE chỉ metadata port.<br>❌ D không đúng."
  },
  {
    q: "What does RUN do in a Dockerfile? (RUN trong Dockerfile làm gì?)",
    opts: [
      "Defines a Git branch (Định nghĩa Git branch)",
      "Stores Docker Hub password (Lưu password Docker Hub)",
      "Runs a command while building the image (Chạy command trong quá trình build image)",
      "Lists running containers (Liệt kê container đang chạy)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Chạy command lúc build</b><br>RUN thường dùng để cài package, tạo file hoặc chuẩn bị môi trường trong image build process.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B không nên làm.<br>❌ D là docker ps."
  },
  {
    q: "What do COPY or ADD do in a Dockerfile? (COPY hoặc ADD trong Dockerfile làm gì?)",
    opts: [
      "Stop a running container (Stop container đang chạy)",
      "Show container logs (Xem log container)",
      "Create a Docker network (Tạo Docker network)",
      "Copy files from host/build context to the image/container filesystem (Copy file từ host/build context vào filesystem image/container)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Copy files vào image</b><br>COPY/ADD dùng để đưa source code, config hoặc file cần thiết từ build context vào image.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là docker stop.<br>❌ B là docker logs.<br>❌ C là docker network create."
  },
  {
    q: "What does WORKDIR define? (WORKDIR định nghĩa gì?)",
    opts: [
      "The working directory for following Dockerfile instructions and container execution (Working directory cho instruction tiếp theo và khi container chạy)",
      "The Docker Registry password (Password Docker Registry)",
      "The host machine MAC address (Địa chỉ MAC host)",
      "The GitHub repository visibility (Visibility GitHub repo)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Working directory</b><br>WORKDIR đặt thư mục làm việc bên trong image/container để các lệnh sau như RUN, COPY, CMD chạy trong thư mục đó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải vai trò WORKDIR."
  },
  {
    q: "What do CMD or ENTRYPOINT define? (CMD hoặc ENTRYPOINT định nghĩa gì?)",
    opts: [
      "Base image only (Chỉ base image)",
      "The command used to start the container (Command dùng để start container)",
      "Registry authentication only (Chỉ xác thực registry)",
      "Docker network type only (Chỉ loại Docker network)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Command start container</b><br>CMD/ENTRYPOINT chỉ định command mặc định khi container được chạy từ image.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là FROM.<br>❌ C thuộc registry auth.<br>❌ D thuộc docker network."
  },
  {
    q: "What does EXPOSE do in a Dockerfile? (EXPOSE trong Dockerfile làm gì?)",
    opts: [
      "Deletes a port from the host (Xóa port khỏi host)",
      "Runs a command during build (Chạy command lúc build)",
      "Documents the port the container intends to listen on (Ghi nhận port mà container dự kiến lắng nghe)",
      "Creates a named volume (Tạo named volume)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Ghi nhận port container lắng nghe</b><br>EXPOSE mô tả port ứng dụng trong container dùng. Muốn map ra host thường cần docker run -p.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B là RUN.<br>❌ D là docker volume/create hoặc -v."
  },
  {
    q: "What does ENV do in a Dockerfile? (ENV trong Dockerfile làm gì?)",
    opts: [
      "Removes all environment variables (Xóa toàn bộ biến môi trường)",
      "Starts Docker Daemon (Khởi động Docker Daemon)",
      "Lists all images (Liệt kê tất cả image)",
      "Sets environment variables for the image/container (Thiết lập biến môi trường cho image/container)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Set environment variables</b><br>ENV dùng để khai báo biến môi trường như APP_ENV, PORT, PATH trong image/container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì ENV set chứ không remove.<br>❌ B không phải Dockerfile instruction.<br>❌ C là docker images."
  },
  {
    q: "Which command builds a Docker image with name and tag? (Lệnh nào build Docker image với name và tag?)",
    opts: [
      "docker build -t mynodeapp:1.0 .",
      "docker run nginx",
      "docker ps -a",
      "docker volume ls"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: docker build -t mynodeapp:1.0 .</b><br>-t gán tên và tag cho image, dấu chấm chỉ thư mục hiện tại là build context chứa Dockerfile.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B chạy container.<br>❌ C liệt kê container.<br>❌ D liệt kê volume."
  },
  {
    q: "In docker build -t mynodeapp:1.0 ., what does the dot mean? (Trong lệnh docker build -t mynodeapp:1.0 ., dấu chấm nghĩa là gì?)",
    opts: [
      "Delete current directory (Xóa thư mục hiện tại)",
      "Use the current directory as build context (Dùng thư mục hiện tại làm build context)",
      "Push image to Docker Hub (Push image lên Docker Hub)",
      "Run container in detached mode (Chạy container nền)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Current directory là build context</b><br>Dấu chấm chỉ Docker dùng thư mục hiện tại làm build context, nơi thường có Dockerfile và source code cần copy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ C là docker push.<br>❌ D là docker run -d."
  },
  {
    q: "Which is a Docker image best practice? (Best practice khi build Docker image là gì?)",
    opts: [
      "Use unknown and untrusted base images (Dùng base image không rõ nguồn)",
      "Copy unnecessary files into the image (Copy file không cần thiết vào image)",
      "Use base images from trusted sources (Dùng base image từ nguồn tin cậy)",
      "Always make the largest possible image (Luôn tạo image lớn nhất có thể)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Trusted base images</b><br>Dùng base image từ nguồn tin cậy giúp giảm rủi ro bảo mật và tăng độ ổn định khi build/deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A rủi ro bảo mật.<br>❌ B làm image phình to.<br>❌ D trái best practice."
  },
  {
    q: "Why use .dockerignore? (Vì sao dùng .dockerignore?)",
    opts: [
      "To force Docker to copy everything (Để ép Docker copy mọi thứ)",
      "To store container logs (Để lưu log container)",
      "To expose all ports publicly (Để public mọi port)",
      "To exclude unnecessary files from the build context (Để loại file không cần thiết khỏi build context)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Exclude unnecessary files</b><br>.dockerignore giúp tránh copy node_modules, .git, cache, log, secret hoặc file thừa vào build context, làm build nhanh và image sạch hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược lại.<br>❌ B không phải chức năng .dockerignore.<br>❌ C không liên quan."
  },

  // 6. Docker Containers & Commands - Q51-62
  {
    q: "What is a Docker Container in relation to an image? (Docker Container có quan hệ gì với image?)",
    opts: [
      "It is a running instance of a Docker Image (Nó là instance đang chạy của Docker Image)",
      "It is always a public registry (Nó luôn là public registry)",
      "It is only a Dockerfile comment (Nó chỉ là comment Dockerfile)",
      "It is a Git branch (Nó là Git branch)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Running instance of image</b><br>Image là template read-only; container là instance được tạo từ image và đang/chưa đang chạy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là registry.<br>❌ C không đúng.<br>❌ D thuộc Git."
  },
  {
    q: "What is the writable layer in a Docker container? (Writable layer trong Docker container là gì?)",
    opts: [
      "A read-only base layer that never changes (Layer read-only không bao giờ đổi)",
      "A layer added on top of image layers to store changes made in the container (Layer thêm trên image để lưu thay đổi trong container)",
      "A Docker Hub namespace (Namespace Docker Hub)",
      "A Git tag (Tag Git)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Layer ghi thay đổi của container</b><br>Khi container chạy, Docker thêm writable layer phía trên các read-only image layers để lưu file thay đổi trong container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là image layer read-only.<br>❌ C thuộc registry.<br>❌ D thuộc Git."
  },
  {
    q: "Which command runs a container from an image? (Lệnh nào chạy container từ image?)",
    opts: [
      "docker images",
      "docker rmi nginx",
      "docker run <image_name>",
      "docker network ls"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker run</b><br>docker run tạo và chạy container từ image được chỉ định, ví dụ docker run nginx.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê image.<br>❌ B xóa image.<br>❌ D liệt kê network."
  },
  {
    q: "What does the -d flag do in docker run? (-d trong docker run làm gì?)",
    opts: [
      "Deletes the image after run (Xóa image sau khi chạy)",
      "Downloads source code from Git (Tải source code từ Git)",
      "Disables networking (Tắt network)",
      "Runs the container in detached/background mode (Chạy container ở chế độ nền)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Detached mode</b><br>-d giúp container chạy nền, terminal không bị giữ bởi process container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là không đúng.<br>❌ B không phải docker run -d.<br>❌ C không đúng."
  },
  {
    q: "What does --name do in docker run? (--name trong docker run làm gì?)",
    opts: [
      "Assigns a custom name to the container (Đặt tên tùy chỉnh cho container)",
      "Maps ports between host and container (Map port giữa host và container)",
      "Deletes the container after finish (Xóa container sau khi chạy xong)",
      "Creates a Dockerfile (Tạo Dockerfile)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Đặt tên container</b><br>--name giúp đặt tên dễ nhớ cho container, ví dụ --name mynginx.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là -p.<br>❌ C là --rm.<br>❌ D không phải docker run flag."
  },
  {
    q: "What does -p 8080:80 mean in docker run? (-p 8080:80 trong docker run nghĩa là gì?)",
    opts: [
      "Create a named volume (Tạo named volume)",
      "Map host port 8080 to container port 80 (Map port 8080 của host vào port 80 của container)",
      "Run in detached mode (Chạy detached mode)",
      "Remove image after run (Xóa image sau khi chạy)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Port mapping</b><br>-p 8080:80 nghĩa là truy cập host:8080 sẽ được forward vào port 80 bên trong container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là -v hoặc docker volume.<br>❌ C là -d.<br>❌ D không đúng."
  },
  {
    q: "What does -v usually do in docker run? (-v trong docker run thường làm gì?)",
    opts: [
      "Show Docker version only (Chỉ xem version Docker)",
      "Stop a container (Stop container)",
      "Create/mount a volume between host and container (Tạo/mount volume giữa host và container)",
      "List Docker networks (Liệt kê network Docker)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Mount volume</b><br>-v dùng để mount volume hoặc bind mount vào container, giúp persist hoặc chia sẻ data.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là docker version.<br>❌ B là docker stop.<br>❌ D là docker network ls."
  },
  {
    q: "What does --rm do in docker run? (--rm trong docker run làm gì?)",
    opts: [
      "Runs container in background (Chạy container nền)",
      "Maps port (Map port)",
      "Pulls image from registry (Pull image từ registry)",
      "Deletes the container automatically when it finishes (Tự động xóa container khi chạy xong)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Auto remove container</b><br>--rm phù hợp với container chạy task ngắn, sau khi process kết thúc container được xóa tự động.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là -d.<br>❌ B là -p.<br>❌ C là docker pull hoặc docker run khi image chưa có local."
  },
  {
    q: "Which command lists running containers? (Lệnh nào liệt kê container đang chạy?)",
    opts: [
      "docker ps",
      "docker ps -a",
      "docker images",
      "docker rmi"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: docker ps</b><br>docker ps hiển thị các container đang chạy. Muốn xem cả container đã stop thì dùng docker ps -a.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B liệt kê tất cả container.<br>❌ C liệt kê image.<br>❌ D xóa image."
  },
  {
    q: "Which command lists all containers including stopped ones? (Lệnh nào liệt kê tất cả container kể cả đã stop?)",
    opts: [
      "docker images",
      "docker ps -a",
      "docker pull",
      "docker volume ls"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: docker ps -a</b><br>docker ps -a hiển thị container đang chạy và container đã dừng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê image.<br>❌ C pull image.<br>❌ D liệt kê volume."
  },
  {
    q: "Which command deletes a container? (Lệnh nào xóa container?)",
    opts: [
      "docker rmi <image>",
      "docker pull <image>",
      "docker rm <container_name_or_id>",
      "docker images"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker rm</b><br>docker rm xóa container theo tên hoặc ID. Nếu container đang chạy, thường cần stop trước hoặc dùng force.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xóa image.<br>❌ B tải image.<br>❌ D liệt kê image."
  },
  {
    q: "Which command opens an interactive bash terminal inside a running container? (Lệnh nào mở terminal bash tương tác trong container đang chạy?)",
    opts: [
      "docker logs <container>",
      "docker container prune",
      "docker images",
      "docker exec -it <container_name_or_id> /bin/bash"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker exec -it ... /bin/bash</b><br>Lệnh này chạy bash bên trong container đang chạy, giúp debug hoặc kiểm tra filesystem/process.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem log.<br>❌ B xóa container đã stop.<br>❌ C liệt kê image."
  },

  // 7. Docker Registry - Q63-74
  {
    q: "What does Docker Registry allow users to do? (Docker Registry cho phép user làm gì?)",
    opts: [
      "Push and pull Docker images (Push và pull Docker image)",
      "Only run shell commands inside containers (Chỉ chạy shell command trong container)",
      "Only create Git branches (Chỉ tạo Git branch)",
      "Only monitor CPU usage (Chỉ monitor CPU)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Push/Pull images</b><br>Docker Registry là nơi lưu trữ image, cho phép upload bằng docker push và download bằng docker pull.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là docker exec.<br>❌ C thuộc Git.<br>❌ D thuộc monitoring."
  },
  {
    q: "Which is a common use of Docker Registry? (Use case phổ biến của Docker Registry là gì?)",
    opts: [
      "Editing UI mockups (Chỉnh UI mockup)",
      "Sharing and distributing images across teams/environments (Chia sẻ và phân phối image giữa team/môi trường)",
      "Creating Linux namespaces manually (Tạo Linux namespace thủ công)",
      "Replacing all source code repositories (Thay thế mọi source code repo)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Share/distribute images</b><br>Registry giúp team dùng chung image đã build, phục vụ deployment giữa dev, staging và production.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C không phải vai trò registry.<br>❌ D sai vì Git repo vẫn cần."
  },
  {
    q: "Which is an example of a Docker Registry? (Ví dụ nào là Docker Registry?)",
    opts: [
      "Visual Studio Code",
      "Jira",
      "Docker Hub",
      "Figma"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Docker Hub</b><br>Docker Hub là public registry phổ biến nhất, cung cấp official images và community images.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là IDE.<br>❌ B là project management.<br>❌ D là design tool."
  },
  {
    q: "Which registries are examples besides Docker Hub? (Registry nào là ví dụ ngoài Docker Hub?)",
    opts: [
      "Microsoft Word and Excel",
      "Slack and Discord",
      "HTML and CSS",
      "Amazon ECR, Google Container Registry, Private Docker Registry"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: ECR, GCR, Private Registry</b><br>Ngoài Docker Hub còn có Amazon ECR, Google Container Registry và private registry tự host.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải Docker Registry."
  },
  {
    q: "What is a benefit of a Docker Registry in CI/CD? (Lợi ích của Docker Registry trong CI/CD là gì?)",
    opts: [
      "It enables pipelines to build and push images automatically (Cho phép pipeline tự động build và push image)",
      "It removes the need for containers (Loại bỏ nhu cầu container)",
      "It prevents version management (Ngăn quản lý version)",
      "It disables deployment rollback (Tắt rollback deployment)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Tích hợp build/push image vào CI/CD</b><br>Pipeline có thể build image khi code thay đổi, tag version và push lên registry để deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì registry phục vụ container.<br>❌ C sai vì registry hỗ trợ version/tag.<br>❌ D sai vì tag image giúp rollback."
  },
  {
    q: "Why use a Private Docker Registry? (Vì sao dùng Private Docker Registry?)",
    opts: [
      "To make all images public (Để public mọi image)",
      "To securely store internal/sensitive images (Để lưu image nội bộ/nhạy cảm an toàn)",
      "To delete all image versions (Để xóa mọi version image)",
      "To avoid authentication completely (Để tránh xác thực hoàn toàn)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Secure internal images</b><br>Private Registry phù hợp dự án cần bảo mật, kiểm soát user access và lưu image nội bộ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là public registry.<br>❌ C không phải mục tiêu.<br>❌ D sai vì private registry thường cần authentication."
  },
  {
    q: "Which command pulls the official Docker Registry image version 2? (Lệnh nào pull Docker Registry image version 2?)",
    opts: [
      "docker run nginx",
      "docker ps -a",
      "docker pull registry:2",
      "docker logs registry"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker pull registry:2</b><br>Lệnh này tải image registry:2 từ Docker Hub để có thể chạy private registry local/self-hosted.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A chạy nginx.<br>❌ B liệt kê container.<br>❌ D xem log container tên registry."
  },
  {
    q: "Which command runs a private registry on port 5000? (Lệnh nào chạy private registry trên port 5000?)",
    opts: [
      "docker pull registry:2",
      "docker images registry",
      "docker rmi registry:2",
      "docker run -d -p 5000:5000 --name my-registry registry:2"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker run -d -p 5000:5000 --name my-registry registry:2</b><br>Lệnh này chạy container registry version 2 ở background, map port 5000 host vào port 5000 container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A chỉ pull image.<br>❌ B không chạy registry.<br>❌ C xóa image."
  },
  {
    q: "Which command tags nginx for pushing to local registry? (Lệnh nào tag nginx để push vào local registry?)",
    opts: [
      "docker tag nginx localhost:5000/my-nginx:1.0",
      "docker ps nginx",
      "docker stop nginx",
      "docker network ls"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: docker tag nginx localhost:5000/my-nginx:1.0</b><br>Tag image theo địa chỉ registry giúp Docker biết image sẽ được push lên localhost:5000.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai cú pháp/mục đích.<br>❌ C stop container.<br>❌ D liệt kê network."
  },
  {
    q: "Which command pushes an image to local private registry? (Lệnh nào push image lên local private registry?)",
    opts: [
      "docker pull localhost:5000/my-nginx:1.0",
      "docker push localhost:5000/my-nginx:1.0",
      "docker logs localhost:5000/my-nginx:1.0",
      "docker exec localhost:5000/my-nginx:1.0"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: docker push localhost:5000/my-nginx:1.0</b><br>docker push upload image đã tag lên Docker Registry chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là pull/download.<br>❌ C xem log container, không phải image.<br>❌ D chạy command trong container."
  },
  {
    q: "Which API endpoint lists repositories in a local registry? (Endpoint API nào liệt kê repository trong local registry?)",
    opts: [
      "curl http://localhost:5000/v2/myapp/tags/list",
      "curl http://localhost:5000/v1/delete/all",
      "curl http://localhost:5000/v2/_catalog",
      "curl http://localhost:5000/docker/images"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: /v2/_catalog</b><br>Registry HTTP API endpoint /v2/_catalog dùng để xem danh sách repository hiện có trong registry.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê tag của một repository cụ thể.<br>❌ B và D không đúng endpoint trong slide."
  },
  {
    q: "Which tool can create a .htpasswd file for Basic Authentication in Docker Registry? (Tool nào tạo file .htpasswd cho Basic Auth Docker Registry?)",
    opts: [
      "git log",
      "docker ps",
      "kubectl get pods",
      "htpasswd"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: htpasswd</b><br>Slide dùng apache2-utils và lệnh htpasswd -Bc /auth/htpasswd myuser để tạo file password cho Basic Authentication.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker container list.<br>❌ C thuộc Kubernetes."
  },

  // 8. Docker Networking - Q75-82
  {
    q: "What is a role of Docker networking? (Vai trò của Docker networking là gì?)",
    opts: [
      "Allow communication between containers and external systems (Cho phép container giao tiếp với nhau và với hệ thống bên ngoài)",
      "Only store Docker images (Chỉ lưu Docker image)",
      "Only delete containers (Chỉ xóa container)",
      "Only create Git tags (Chỉ tạo Git tag)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Container communication</b><br>Docker networking giúp container cùng network giao tiếp qua container name/IP và kết nối internet hoặc external services.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc registry/image store.<br>❌ C là docker rm.<br>❌ D thuộc Git."
  },
  {
    q: "Which is the default Docker network type? (Loại network mặc định của Docker là gì?)",
    opts: [
      "Overlay",
      "Bridge",
      "Macvlan",
      "None"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Bridge</b><br>Bridge network là network mặc định khi chạy container nếu không chỉ định network khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A dùng cho multi-host/cluster.<br>❌ C cấp MAC riêng cho container.<br>❌ D là không network."
  },
  {
    q: "What is true about containers on the same bridge network? (Điều nào đúng về container cùng bridge network?)",
    opts: [
      "They can never communicate (Không bao giờ giao tiếp được)",
      "They always share the host IP directly (Luôn dùng chung IP host trực tiếp)",
      "They can communicate via container name or IP address (Có thể giao tiếp qua container name hoặc IP)",
      "They automatically become physical devices (Tự động thành thiết bị vật lý)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Giao tiếp qua name/IP</b><br>Container trong cùng bridge network có thể giao tiếp với nhau bằng container name hoặc IP address.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B là Host network hơn.<br>❌ D là Macvlan gần hơn nhưng không phải bridge."
  },
  {
    q: "What is Host Network in Docker? (Host Network trong Docker là gì?)",
    opts: [
      "A network that blocks all traffic (Network chặn mọi traffic)",
      "A network for image storage only (Network chỉ lưu image)",
      "A network that assigns separate MAC addresses only (Network chỉ cấp MAC riêng)",
      "A network where the container shares the host network directly (Network nơi container dùng trực tiếp network của host)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Container dùng chung host network</b><br>Host network cho phép container gắn trực tiếp vào network của host và chia sẻ IP với host.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là none/firewall concept.<br>❌ B không đúng.<br>❌ C là Macvlan."
  },
  {
    q: "What is Overlay Network commonly used for? (Overlay Network thường dùng để làm gì?)",
    opts: [
      "Allow containers on different hosts to communicate (Cho phép container trên các host khác nhau giao tiếp)",
      "Delete Docker images (Xóa Docker image)",
      "Create Python virtualenv (Tạo Python virtualenv)",
      "Write Dockerfile CMD (Viết CMD Dockerfile)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Multi-host communication</b><br>Overlay Network cho phép container trên các host khác nhau giao tiếp với nhau, thường gặp trong môi trường cluster như Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là docker rmi.<br>❌ C là virtual environment.<br>❌ D là Dockerfile."
  },
  {
    q: "What does Macvlan Network allow? (Macvlan Network cho phép gì?)",
    opts: [
      "Only no networking (Chỉ không có network)",
      "Assigning a separate MAC address so each container acts like an independent device (Gán MAC riêng để container như thiết bị độc lập trên mạng vật lý)",
      "Only running without IP (Chỉ chạy không IP)",
      "Only storing volumes (Chỉ lưu volume)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: MAC riêng cho container</b><br>Macvlan giúp mỗi container có địa chỉ MAC riêng và hoạt động như một thiết bị độc lập trên physical network.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là none network.<br>❌ C sai.<br>❌ D thuộc Docker volumes."
  },
  {
    q: "Which command lists Docker networks? (Lệnh nào liệt kê Docker network?)",
    opts: [
      "docker volume ls",
      "docker images",
      "docker network ls",
      "docker container prune"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker network ls</b><br>Lệnh này hiển thị các network hiện có trên Docker host.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê volume.<br>❌ B liệt kê image.<br>❌ D xóa stopped containers."
  },
  {
    q: "Which command connects a container to a network? (Lệnh nào kết nối container vào network?)",
    opts: [
      "docker network rm my_network",
      "docker network inspect my_network",
      "docker logs my_container",
      "docker network connect my_network my_container"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker network connect</b><br>Lệnh docker network connect my_network my_container gắn container vào network chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xóa network.<br>❌ B inspect network.<br>❌ C xem log container."
  },

  // 9. Volumes & Compose - Q83-88
  {
    q: "Why are Docker Volumes important? (Vì sao Docker Volume quan trọng?)",
    opts: [
      "They persist data even when a container stops or is removed (Lưu dữ liệu bền vững kể cả khi container stop hoặc bị xóa)",
      "They always delete data with the container (Luôn xóa data cùng container)",
      "They replace Docker images (Thay thế Docker image)",
      "They only store Git branches (Chỉ lưu Git branch)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Persist data</b><br>Volume bảo vệ dữ liệu quan trọng, đặc biệt với database hoặc file upload, không bị mất khi container lifecycle thay đổi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B trái với mục tiêu volume.<br>❌ C sai.<br>❌ D thuộc Git."
  },
  {
    q: "Which command creates a Docker volume? (Lệnh nào tạo Docker volume?)",
    opts: [
      "docker image create my_volume",
      "docker volume create my_volume",
      "docker network create my_volume",
      "docker container create-volume my_volume"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: docker volume create my_volume</b><br>Lệnh này tạo named volume để dùng mount vào container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai cú pháp.<br>❌ C tạo network, không phải volume.<br>❌ D không đúng."
  },
  {
    q: "What is Docker Compose? (Docker Compose là gì?)",
    opts: [
      "A tool only for editing Docker images manually (Công cụ chỉ chỉnh image thủ công)",
      "A replacement for all operating systems (Thay thế mọi hệ điều hành)",
      "A tool to define and manage multiple containers using a YAML file (Công cụ định nghĩa và quản lý nhiều container bằng YAML file)",
      "A Git merge strategy (Chiến lược merge Git)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Manage multiple containers with YAML</b><br>Docker Compose cho phép khai báo services, networks, volumes, environment, ports trong một file YAML thay vì chạy nhiều lệnh riêng lẻ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá hẹp và sai.<br>❌ B không đúng.<br>❌ D thuộc Git."
  },
  {
    q: "Which is a benefit of Docker Compose? (Lợi ích của Docker Compose là gì?)",
    opts: [
      "It prevents containers from communicating (Ngăn container giao tiếp)",
      "It requires typing every docker run manually forever (Bắt gõ docker run thủ công mãi mãi)",
      "It removes all environment variables (Xóa mọi biến môi trường)",
      "It manages multiple containers with a single reusable configuration (Quản lý nhiều container bằng một cấu hình tái sử dụng)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Single reusable configuration</b><br>Compose giúp quản lý nhiều container, network, volume bằng một file cấu hình dễ chia sẻ giữa dev/staging/prod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Compose tự tạo network cho service giao tiếp.<br>❌ B trái với lợi ích Compose.<br>❌ C sai vì Compose hỗ trợ environment."
  },
  {
    q: "Which key in Docker Compose defines containers/services in the application? (Key nào trong Docker Compose định nghĩa container/service của app?)",
    opts: [
      "services",
      "only_git",
      "htpasswd",
      "namespaces"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: services</b><br>services định nghĩa các service/container của ứng dụng, ví dụ web, api, database.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không phải Compose key chuẩn.<br>❌ C liên quan Basic Auth registry.<br>❌ D là Linux container concept."
  },
  {
    q: "Which Docker Compose command starts services in detached mode? (Lệnh Docker Compose nào start service ở detached mode?)",
    opts: [
      "docker-compose logs",
      "docker-compose up -d",
      "docker-compose ps",
      "docker-compose stop"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: docker-compose up -d</b><br>docker-compose up khởi động service; thêm -d để chạy nền giống detached mode của docker run.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem log.<br>❌ C xem trạng thái service.<br>❌ D stop service."
  },

  // 10. Troubleshooting - Q89-91
  {
    q: "Which command shows detailed information about a container? (Lệnh nào hiển thị thông tin chi tiết về container?)",
    opts: [
      "docker images",
      "docker pull",
      "docker inspect <container_name_or_id>",
      "docker tag"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: docker inspect</b><br>docker inspect hiển thị metadata chi tiết như network, mount, env, config và state của container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liệt kê image.<br>❌ B tải image.<br>❌ D tag image."
  },
  {
    q: "Which command shows live resource usage of containers? (Lệnh nào hiển thị tài nguyên container đang dùng realtime?)",
    opts: [
      "docker logs",
      "docker events",
      "docker system df",
      "docker stats <container_name_or_id>"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker stats</b><br>docker stats hiển thị CPU, memory, network I/O và block I/O đang dùng bởi container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem log.<br>❌ B xem event stream.<br>❌ C xem dung lượng Docker dùng."
  },
  {
    q: "Which command checks Docker disk usage? (Lệnh nào kiểm tra dung lượng Docker đang dùng?)",
    opts: [
      "docker system df",
      "docker exec -it",
      "docker network connect",
      "docker volume rm"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: docker system df</b><br>docker system df hiển thị dung lượng Docker đang dùng bởi image, container, volume và build cache.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B chạy command trong container.<br>❌ C nối container vào network.<br>❌ D xóa volume."
  },

  // 11. Docker Multi Stage - Q92-96
  {
    q: "What is the purpose of Docker multi-stage builds? (Mục đích của Docker multi-stage build là gì?)",
    opts: [
      "To force all dependencies into the final image (Ép mọi dependency vào final image)",
      "To separate build/test stages from the final runtime image and reduce image size (Tách build/test stage khỏi final runtime image và giảm kích thước image)",
      "To prevent Dockerfile from having multiple FROM instructions (Ngăn Dockerfile có nhiều FROM)",
      "To remove the need for Docker images (Loại bỏ nhu cầu Docker image)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Tách build/runtime và giảm image size</b><br>Multi-stage build cho phép dùng stage build để compile/test rồi chỉ copy artifact cần thiết sang final image, giúp image cuối nhỏ và sạch hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái mục tiêu multi-stage.<br>❌ C sai vì multi-stage dùng nhiều FROM.<br>❌ D sai vì vẫn build image."
  },
  {
    q: "In the sample multi-stage Dockerfile, what does AS base do? (Trong Dockerfile multi-stage mẫu, AS base làm gì?)",
    opts: [
      "Deletes the base image (Xóa base image)",
      "Runs the final CMD immediately (Chạy CMD cuối ngay lập tức)",
      "Names that build stage as base (Đặt tên stage đó là base)",
      "Pushes the image to registry (Push image lên registry)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Đặt tên stage là base</b><br>FROM alpine:3.13 AS base tạo một stage tên base để các stage sau có thể kế thừa hoặc tham chiếu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B CMD chỉ chạy khi container start.<br>❌ D là docker push."
  },
  {
    q: "In multi-stage Dockerfile, what does COPY --from=build do? (Trong Dockerfile multi-stage, COPY --from=build làm gì?)",
    opts: [
      "Stops the build stage (Stop build stage)",
      "Creates a registry (Tạo registry)",
      "Deletes all files from final image (Xóa mọi file khỏi final image)",
      "Copies files from the build stage into the current stage (Copy file từ stage build sang stage hiện tại)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Copy artifact từ stage build</b><br>COPY --from=build cho phép lấy file đã tạo ở build stage, ví dụ /build.txt, đưa vào final image mà không cần mang toàn bộ build environment.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ B là registry setup.<br>❌ C sai."
  },
  {
    q: "In the sample Dockerfile, which stage pretends to run the test suite? (Trong Dockerfile mẫu, stage nào giả lập chạy test suite?)",
    opts: [
      "test",
      "base",
      "final",
      "registry"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: test</b><br>Stage FROM build AS test copy file từ build stage rồi chạy lệnh echo Testing để giả lập test suite.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B chuẩn bị dependency cơ bản.<br>❌ C là final app image.<br>❌ D không phải stage trong file mẫu."
  },
  {
    q: "In the sample final app image, what does CMD do? (Trong final app image mẫu, CMD làm gì?)",
    opts: [
      "Builds all previous stages again manually (Build lại toàn bộ stage bằng tay)",
      "Prints the contents of /deps.txt and /build.txt when the container runs (In nội dung /deps.txt và /build.txt khi container chạy)",
      "Deletes /deps.txt and /build.txt (Xóa /deps.txt và /build.txt)",
      "Pushes the image to Docker Hub (Push image lên Docker Hub)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: In nội dung deps và build file</b><br>CMD cat /deps.txt && cat /build.txt là command mặc định khi container chạy, dùng để hiển thị output đã tạo từ các stage trước.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải CMD.<br>❌ C sai vì CMD cat file chứ không xóa.<br>❌ D là docker push."
  }
];
