// 0.3 Git v2 - Version Control & Git (75 câu)
DEVOPS_QUIZ_DATA.topics[2].questions = [
  {
    "q": "What is a Version Control System (VCS)? (Version Control System là gì?)",
    "opts": [
      "A tool for deploying containers (Công cụ deploy container)",
      "A tool for designing UI screens (Công cụ thiết kế giao diện)",
      "A tool that tracks changes in source code or files over time (Công cụ theo dõi thay đổi source code hoặc file theo thời gian)",
      "A tool for monitoring CPU usage (Công cụ monitor CPU)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: VCS tracks changes over time</b><br>Version Control System giúp lưu lịch sử thay đổi của source code hoặc file, hỗ trợ nhiều người cùng làm việc và dễ quay lại phiên bản cũ khi cần.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker/Kubernetes/CD.<br>❌ B thuộc UI/UX design.<br>❌ D thuộc monitoring."
  },
  {
    "q": "Why is tracking changes important in VCS? (Vì sao tracking changes quan trọng trong VCS?)",
    "opts": [
      "It deletes all old versions automatically (Nó tự động xóa toàn bộ phiên bản cũ)",
      "It stores old and new versions to monitor project development (Nó lưu phiên bản cũ và mới để theo dõi quá trình phát triển)",
      "It prevents developers from writing code (Nó ngăn developer viết code)",
      "It replaces all testing activities (Nó thay thế toàn bộ testing)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Stores version history</b><br>VCS lưu lại lịch sử thay đổi, giúp team biết file đã thay đổi khi nào, bởi ai và thay đổi gì.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì VCS giữ lịch sử, không phải xóa hết.<br>❌ C sai vì VCS hỗ trợ dev viết code.<br>❌ D sai vì VCS không thay thế testing."
  },
  {
    "q": "What does code recovery mean in VCS? (Code recovery trong VCS nghĩa là gì?)",
    "opts": [
      "Deleting the repository permanently (Xóa repository vĩnh viễn)",
      "Reverting to a previous version when errors occur (Quay lại phiên bản trước khi có lỗi)",
      "Compiling code automatically (Tự động compile code)",
      "Creating UI mockups (Tạo UI mockup)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Revert to previous versions</b><br>Code recovery cho phép quay lại phiên bản ổn định trước đó nếu phiên bản hiện tại có lỗi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là hành động nguy hiểm, không phải recovery.<br>❌ C thuộc build process.<br>❌ D thuộc design."
  },
  {
    "q": "How does VCS support collaboration? (VCS hỗ trợ collaboration như thế nào?)",
    "opts": [
      "By allowing team members to work on the same project with less conflict risk (Cho phép team cùng làm trên một project với ít rủi ro conflict hơn)",
      "By allowing only one developer to work (Chỉ cho một developer làm việc)",
      "By removing the need for source code (Loại bỏ nhu cầu source code)",
      "By preventing all branches (Ngăn tạo branch)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Supports teamwork</b><br>VCS giúp nhiều thành viên cùng làm việc, quản lý thay đổi và xử lý conflict khi merge code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì VCS dành cho nhiều người cùng làm.<br>❌ C sai vì VCS quản lý source code.<br>❌ D sai vì branch management là lợi ích quan trọng."
  },
  {
    "q": "What does branch management allow developers to do? (Branch management cho phép developer làm gì?)",
    "opts": [
      "Only delete old commits (Chỉ xóa commit cũ)",
      "Disable collaboration (Tắt collaboration)",
      "Develop different features in parallel and merge them later (Phát triển nhiều feature song song và merge sau)",
      "Avoid source code history (Tránh lưu lịch sử source code)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Parallel development</b><br>Branch giúp developer làm feature/bugfix riêng mà không ảnh hưởng trực tiếp main codebase, sau đó merge lại khi sẵn sàng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải mục đích chính.<br>❌ B sai vì branch hỗ trợ collaboration.<br>❌ D sai vì Git vẫn lưu lịch sử."
  },
  {
    "q": "What is a Local Version Control System? (Local Version Control System là gì?)",
    "opts": [
      "A VCS that stores versions only on a local machine (VCS lưu version trên máy local)",
      "A VCS that requires a cloud provider (VCS bắt buộc dùng cloud provider)",
      "A VCS with no file history (VCS không có lịch sử file)",
      "A VCS used only for Kubernetes (VCS chỉ dùng cho Kubernetes)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Stores versions locally</b><br>Local VCS lưu các phiên bản file trên máy cá nhân. Nó đơn giản nhưng không phù hợp tốt cho làm việc nhóm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không đúng với local VCS.<br>❌ C sai vì VCS phải có history.<br>❌ D không liên quan Kubernetes."
  },
  {
    "q": "Which is an example of a Local Version Control System? (Ví dụ của Local Version Control System là gì?)",
    "opts": [
      "GitHub Actions",
      "Docker",
      "RCS",
      "Prometheus"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: RCS</b><br>RCS là ví dụ của Local Version Control System, lưu version file trên local machine.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CI/CD tool.<br>❌ B là container platform.<br>❌ D là monitoring tool."
  },
  {
    "q": "What is a Centralized Version Control System (CVCS)? (CVCS là gì?)",
    "opts": [
      "A VCS where every developer has a complete repo copy only (VCS mà mỗi dev chỉ có bản copy đầy đủ)",
      "A VCS that uses a central server to store all versions (VCS dùng server trung tâm để lưu mọi version)",
      "A VCS with no server and no history (VCS không có server và không có history)",
      "A VCS only for UI files (VCS chỉ dành cho file UI)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Central server stores versions</b><br>CVCS dùng repository trung tâm. Developer pull/push thay đổi từ/đến central repository.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A mô tả DVCS.<br>❌ C sai vì VCS cần history.<br>❌ D sai vì VCS quản lý nhiều loại file."
  },
  {
    "q": "Which tools are examples of CVCS? (Công cụ nào là ví dụ của CVCS?)",
    "opts": [
      "Git and Mercurial",
      "Docker and Podman",
      "SVN and Perforce",
      "Grafana and ELK"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: SVN and Perforce</b><br>SVN và Perforce là ví dụ của Centralized Version Control Systems.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là DVCS.<br>❌ B là container tools.<br>❌ D là monitoring/logging tools."
  },
  {
    "q": "What is a major risk of CVCS? (Rủi ro lớn của CVCS là gì?)",
    "opts": [
      "Single point of failure if the central server crashes (Single point of failure nếu server trung tâm crash)",
      "Too many local full copies (Quá nhiều bản copy đầy đủ local)",
      "Cannot support teamwork (Không hỗ trợ teamwork)",
      "Cannot store file versions (Không lưu được version file)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Single point of failure</b><br>Vì CVCS phụ thuộc server trung tâm, nếu server crash hoặc mất dữ liệu thì project có thể bị ảnh hưởng nặng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là đặc điểm DVCS, không phải CVCS.<br>❌ C sai vì CVCS hỗ trợ teamwork.<br>❌ D sai vì CVCS lưu version."
  },
  {
    "q": "What is a Distributed Version Control System (DVCS)? (DVCS là gì?)",
    "opts": [
      "A VCS with only one central copy and no local history (VCS chỉ có một bản trung tâm và không có local history)",
      "A VCS that stores no commits (VCS không lưu commit)",
      "A VCS where every developer has a complete copy of the repository (VCS mà mỗi developer có bản copy đầy đủ của repository)",
      "A VCS only for binary files (VCS chỉ dành cho binary files)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Every developer has a full copy</b><br>Trong DVCS, mỗi developer có đầy đủ repository và history trên máy local, giúp làm việc offline và giảm phụ thuộc server trung tâm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CVCS hơn.<br>❌ B sai vì DVCS lưu commit/history.<br>❌ D không đúng."
  },
  {
    "q": "Which tools are examples of DVCS? (Công cụ nào là ví dụ của DVCS?)",
    "opts": [
      "SVN and Perforce",
      "Jenkins and GitHub Actions",
      "Git and Mercurial",
      "Ansible and Terraform"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Git and Mercurial</b><br>Git và Mercurial là Distributed Version Control Systems, cho phép mỗi developer có bản repo đầy đủ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CVCS.<br>❌ B là CI/CD tools.<br>❌ D là IaC/configuration tools."
  },
  {
    "q": "What is an advantage of DVCS? (Ưu điểm của DVCS là gì?)",
    "opts": [
      "It prevents offline work (Nó ngăn làm việc offline)",
      "It depends completely on one central server (Nó phụ thuộc hoàn toàn vào một server trung tâm)",
      "It is less robust against data loss (Nó kém an toàn hơn trước mất dữ liệu)",
      "It enables offline work and is more robust against data loss (Nó hỗ trợ làm việc offline và chống mất dữ liệu tốt hơn)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Offline work and robustness</b><br>Vì mỗi developer có full repository, DVCS hỗ trợ commit local/offline và có nhiều bản sao history, giảm rủi ro mất dữ liệu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C đều ngược với lợi ích của DVCS."
  },
  {
    "q": "What is Git? (Git là gì?)",
    "opts": [
      "A cloud monitoring dashboard (Dashboard monitor cloud)",
      "A container runtime (Container runtime)",
      "A database management system (Hệ quản trị database)",
      "A distributed version control system for source code management (Hệ thống quản lý phiên bản phân tán để quản lý source code)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Git is a DVCS</b><br>Git là hệ thống quản lý phiên bản phân tán, miễn phí và phổ biến, dùng để quản lý source code và hỗ trợ cộng tác trong phát triển phần mềm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là monitoring.<br>❌ B là container runtime.<br>❌ C là DBMS."
  },
  {
    "q": "Who developed Git and when? (Ai phát triển Git và vào năm nào?)",
    "opts": [
      "James Gosling in 1995",
      "Linus Torvalds in 2005",
      "Guido van Rossum in 1991",
      "Brendan Eich in 1995"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Linus Torvalds in 2005</b><br>Git được phát triển bởi Linus Torvalds vào năm 2005 để quản lý source code hiệu quả.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A liên quan Java.<br>❌ C liên quan Python.<br>❌ D liên quan JavaScript."
  },
  {
    "q": "Which capability is Git designed to support? (Git được thiết kế để hỗ trợ khả năng nào?)",
    "opts": [
      "Only UI prototyping (Chỉ prototype UI)",
      "Only server monitoring (Chỉ monitor server)",
      "Only database indexing (Chỉ index database)",
      "Source code management and team collaboration (Quản lý source code và cộng tác nhóm)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Source management and collaboration</b><br>Git giúp theo dõi lịch sử thay đổi, quản lý branch và hỗ trợ nhiều người cùng phát triển phần mềm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải mục tiêu chính của Git."
  },
  {
    "q": "Which statement is TRUE about Git? (Phát biểu nào đúng về Git?)",
    "opts": [
      "Git cannot manage branches (Git không thể quản lý branch)",
      "Git only works online (Git chỉ hoạt động online)",
      "Git is only used for image editing (Git chỉ dùng để chỉnh ảnh)",
      "Git tracks project history, manages branches, and merges efficiently (Git theo dõi lịch sử project, quản lý branch và merge hiệu quả)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Git tracks history and manages branches</b><br>Git giúp lưu lịch sử commit, tạo branch để phát triển song song và merge thay đổi giữa các branch.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì branch là điểm mạnh của Git.<br>❌ B sai vì Git hỗ trợ làm việc offline.<br>❌ C sai vì Git chủ yếu dùng quản lý file/source code."
  },
  {
    "q": "What is a repository in Git? (Repository trong Git là gì?)",
    "opts": [
      "A storage location containing source files and change history (Nơi lưu source files và lịch sử thay đổi)",
      "A CSS style guide (Bộ guideline CSS)",
      "A server monitoring dashboard (Dashboard monitor server)",
      "A production database only (Chỉ là database production)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Storage for code and history</b><br>Repository chứa source code, file project và toàn bộ lịch sử thay đổi của project.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải repository trong Git."
  },
  {
    "q": "What are the two common types of repository in Git? (Hai loại repository phổ biến trong Git là gì?)",
    "opts": [
      "Blue and green repository",
      "Local Repository and Remote Repository",
      "Frontend and backend repository only",
      "CPU and RAM repository"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Local and Remote</b><br>Local repository nằm trên máy cá nhân; remote repository nằm trên server như GitHub/GitLab/Bitbucket để cộng tác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là khái niệm deployment.<br>❌ C không phải phân loại Git chuẩn.<br>❌ D không liên quan."
  },
  {
    "q": "What is a commit in Git? (Commit trong Git là gì?)",
    "opts": [
      "A cloud server instance (Một cloud server instance)",
      "A Kubernetes pod (Một Kubernetes pod)",
      "A saved version of the source code after changes (Một phiên bản source code được lưu sau khi thay đổi)",
      "A UI component only (Chỉ là UI component)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Saved version</b><br>Commit ghi lại một snapshot/version của source code sau khi thay đổi, kèm message mô tả.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải commit trong Git."
  },
  {
    "q": "What is a branch in Git? (Branch trong Git là gì?)",
    "opts": [
      "A tool for monitoring memory only (Công cụ chỉ monitor memory)",
      "A database backup file (File backup database)",
      "A container image tag only (Chỉ là tag image container)",
      "A separate line of development for features or bug fixes (Một nhánh phát triển riêng cho feature hoặc bug fix)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Separate development line</b><br>Branch cho phép phát triển feature hoặc sửa bug mà không ảnh hưởng trực tiếp main codebase.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả branch trong Git."
  },
  {
    "q": "What does merge do in Git? (Merge trong Git làm gì?)",
    "opts": [
      "Combines changes from one branch into another (Kết hợp thay đổi từ branch này vào branch khác)",
      "Deletes all branches (Xóa tất cả branch)",
      "Builds Docker images (Build Docker image)",
      "Starts a server (Khởi động server)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Combines branch changes</b><br>Merge dùng để đưa thay đổi từ một branch vào branch khác, ví dụ merge feature branch vào main/develop.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì merge không xóa tất cả branch.<br>❌ C thuộc Docker.<br>❌ D không liên quan."
  },
  {
    "q": "What does clone do in Git? (Clone trong Git làm gì?)",
    "opts": [
      "Copies a repository from a server to a local computer (Copy repository từ server về máy local)",
      "Deletes a remote repository (Xóa remote repository)",
      "Only lists branches (Chỉ liệt kê branch)",
      "Only shows CPU metrics (Chỉ hiển thị CPU metrics)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Copy remote repo to local</b><br>git clone tạo bản sao repository từ remote server về máy local để developer làm việc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không phải clone.<br>❌ C là git branch.<br>❌ D thuộc monitoring."
  },
  {
    "q": "What is a Local Repository? (Local Repository là gì?)",
    "opts": [
      "A repository stored on GitHub only (Repository chỉ lưu trên GitHub)",
      "A repository stored on a user's personal computer (Repository lưu trên máy cá nhân của user)",
      "A repository that cannot commit changes (Repository không thể commit)",
      "A repository used only by Jenkins (Repository chỉ dùng bởi Jenkins)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Stored on personal computer</b><br>Local repository là bản repo trên máy cá nhân, cho phép developer làm việc offline và commit trước khi sync lên remote.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là remote repository.<br>❌ C sai vì local repo có thể commit.<br>❌ D không đúng."
  },
  {
    "q": "Which command initializes a new Git repository? (Lệnh nào khởi tạo Git repository mới?)",
    "opts": [
      "git clone",
      "git status",
      "git branch",
      "git init"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: git init</b><br>git init khởi tạo một Git repository mới trong thư mục hiện tại.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A clone repo có sẵn.<br>❌ B xem trạng thái file.<br>❌ C liệt kê/tạo branch tùy cách dùng."
  },
  {
    "q": "Which command clones an existing repository to local machine? (Lệnh nào clone repository có sẵn về máy local?)",
    "opts": [
      "git add .",
      "git diff",
      "git log",
      "git clone <repository_url>"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: git clone</b><br>git clone dùng URL của repository để tải/copy repo về máy local.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A stage file.<br>❌ B xem khác biệt.<br>❌ C xem lịch sử commit."
  },
  {
    "q": "Which command checks the status of files in the working directory? (Lệnh nào kiểm tra trạng thái file trong working directory?)",
    "opts": [
      "git status",
      "git push",
      "git merge",
      "git remote -v"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: git status</b><br>git status cho biết file nào đã thay đổi, file nào staged, file nào chưa tracked.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B đẩy code lên remote.<br>❌ C merge branch.<br>❌ D liệt kê remote."
  },
  {
    "q": "Which command stages a specific file for commit? (Lệnh nào stage một file cụ thể để commit?)",
    "opts": [
      "git pull <remote> <branch>",
      "git branch",
      "git add <file>",
      "git log"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: git add <file></b><br>git add <file> đưa file cụ thể vào staging area trước khi commit.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A fetch và merge từ remote.<br>❌ B quản lý branch.<br>❌ D xem commit history."
  },
  {
    "q": "Which command stages all modified files for commit? (Lệnh nào stage tất cả file đã chỉnh sửa để commit?)",
    "opts": [
      "git log",
      "git checkout <branch>",
      "git remote add",
      "git add ."
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: git add .</b><br>git add . đưa toàn bộ file thay đổi trong thư mục hiện tại vào staging area.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem lịch sử.<br>❌ B chuyển branch.<br>❌ C thêm remote."
  },
  {
    "q": "Which command commits changes with a message? (Lệnh nào commit thay đổi kèm message?)",
    "opts": [
      "git fetch origin",
      "git diff",
      "git remote -v",
      "git commit -m \"Message\""
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: git commit -m</b><br>git commit -m \"Message\" lưu thay đổi đã staged thành một commit với message mô tả.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A tải update từ remote.<br>❌ B xem khác biệt.<br>❌ C xem remote list."
  },
  {
    "q": "Which command views commit history? (Lệnh nào xem lịch sử commit?)",
    "opts": [
      "git push",
      "git log",
      "git pull",
      "git checkout"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: git log</b><br>git log hiển thị lịch sử commit, bao gồm commit hash, author, date và message.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A đẩy code.<br>❌ C kéo code từ remote.<br>❌ D chuyển branch/restore tùy ngữ cảnh."
  },
  {
    "q": "Which command shows differences between modified files and the last commit? (Lệnh nào xem khác biệt giữa file đã sửa và commit gần nhất?)",
    "opts": [
      "git diff",
      "git branch",
      "git clone",
      "git remote add"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: git diff</b><br>git diff cho thấy các dòng đã thêm/xóa/sửa so với trạng thái trước đó, thường là last commit hoặc staging area tùy cách dùng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B liệt kê branch.<br>❌ C clone repo.<br>❌ D thêm remote."
  },
  {
    "q": "Which command switches to another branch? (Lệnh nào chuyển sang branch khác?)",
    "opts": [
      "git add .",
      "git checkout <branch>",
      "git commit -m",
      "git log"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: git checkout <branch></b><br>git checkout <branch> dùng để chuyển working directory sang branch được chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A stage file.<br>❌ C commit thay đổi.<br>❌ D xem lịch sử."
  },
  {
    "q": "Which command lists branches in the repository? (Lệnh nào liệt kê branch trong repository?)",
    "opts": [
      "git pull",
      "git branch",
      "git push",
      "git fetch"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: git branch</b><br>git branch dùng để xem danh sách branch local, và có thể tạo/xóa branch với option phù hợp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A pull từ remote.<br>❌ C push lên remote.<br>❌ D fetch update."
  },
  {
    "q": "What is a Remote Repository? (Remote Repository là gì?)",
    "opts": [
      "A repository stored on a remote server like GitHub, GitLab, or Bitbucket (Repository lưu trên server như GitHub, GitLab hoặc Bitbucket)",
      "A repository that exists only in RAM (Repository chỉ tồn tại trong RAM)",
      "A repository that cannot be shared (Repository không thể chia sẻ)",
      "A repository used only for CSS files (Repository chỉ dùng cho CSS)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Stored on remote server</b><br>Remote repository nằm trên server từ xa, giúp nhiều người cùng chia sẻ, pull, push và quản lý source code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không đúng với remote repository."
  },
  {
    "q": "What is the main benefit of Remote Repository? (Lợi ích chính của Remote Repository là gì?)",
    "opts": [
      "It disables collaboration (Nó vô hiệu hóa collaboration)",
      "It removes all commit history (Nó xóa toàn bộ commit history)",
      "It enables multiple users to collaborate and share code remotely (Nó cho phép nhiều user cộng tác và chia sẻ code từ xa)",
      "It only stores UI screenshots (Nó chỉ lưu screenshot UI)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Remote collaboration</b><br>Remote repository giúp team làm việc chung, chia sẻ source code và đồng bộ thay đổi qua mạng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì remote hỗ trợ collaboration.<br>❌ B sai vì vẫn lưu history.<br>❌ D sai vì repo lưu source/files."
  },
  {
    "q": "Which command adds a remote repository? (Lệnh nào thêm remote repository?)",
    "opts": [
      "git pull <remote> <branch>",
      "git remote add <name> <repository_url>",
      "git push <remote> <branch>",
      "git diff"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: git remote add</b><br>git remote add <name> <repository_url> thêm một remote mới, ví dụ origin.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A kéo code từ remote.<br>❌ C đẩy code lên remote.<br>❌ D xem diff."
  },
  {
    "q": "Which command lists remote repositories? (Lệnh nào liệt kê remote repositories?)",
    "opts": [
      "git add .",
      "git branch",
      "git init",
      "git remote -v"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: git remote -v</b><br>git remote -v hiển thị danh sách remote và URL tương ứng dùng cho fetch/push.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A stage file.<br>❌ B liệt kê branch.<br>❌ C khởi tạo repo."
  },
  {
    "q": "What does git pull <remote> <branch> do? (git pull <remote> <branch> làm gì?)",
    "opts": [
      "Only stages local files (Chỉ stage file local)",
      "Fetches and merges changes from a remote branch (Fetch và merge thay đổi từ remote branch)",
      "Deletes the remote branch (Xóa remote branch)",
      "Shows only commit history (Chỉ xem commit history)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Fetch + merge</b><br>git pull tải thay đổi từ remote branch và merge vào branch hiện tại.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là git add.<br>❌ C không phải pull.<br>❌ D là git log."
  },
  {
    "q": "What does git push <remote> <branch> do? (git push <remote> <branch> làm gì?)",
    "opts": [
      "Only downloads updates without merging (Chỉ tải update không merge)",
      "Lists branches only (Chỉ liệt kê branch)",
      "Pushes local changes to a remote repository (Đẩy thay đổi local lên remote repository)",
      "Creates a local repository only (Chỉ tạo local repository)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Push local changes to remote</b><br>git push đưa commit từ local branch lên remote repository để chia sẻ với team.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là git fetch.<br>❌ B là git branch.<br>❌ D là git init."
  },
  {
    "q": "What does git fetch <remote> do? (git fetch <remote> làm gì?)",
    "opts": [
      "Fetches updates from remote without merging (Tải update từ remote nhưng chưa merge)",
      "Commits staged files (Commit file đã staged)",
      "Switches branch (Chuyển branch)",
      "Deletes commit history (Xóa commit history)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Fetch without merging</b><br>git fetch tải thông tin commit/branch mới từ remote về local nhưng chưa tự động merge vào working branch.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là git commit.<br>❌ C là git checkout/switch.<br>❌ D sai."
  },
  {
    "q": "What does git push -u <remote> <branch> do? (git push -u <remote> <branch> làm gì?)",
    "opts": [
      "Shows difference only (Chỉ xem diff)",
      "Stages all files (Stage tất cả file)",
      "Pushes changes and sets the upstream branch (Push thay đổi và thiết lập upstream branch)",
      "Deletes local repository (Xóa local repository)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Push and set upstream</b><br>git push -u đẩy branch lên remote và thiết lập upstream để lần sau có thể dùng git push/git pull ngắn gọn hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là git diff.<br>❌ B là git add .<br>❌ D sai."
  },
  {
    "q": "What is GitHub? (GitHub là gì?)",
    "opts": [
      "A local-only VCS with no collaboration (VCS chỉ local, không collaboration)",
      "A container engine (Container engine)",
      "A web-based platform for hosting and managing source code using Git (Nền tảng web để host và quản lý source code bằng Git)",
      "A database replication tool (Công cụ replicate database)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Git hosting and collaboration platform</b><br>GitHub là nền tảng web dùng Git để lưu code, theo dõi thay đổi và cộng tác trong cùng project.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì GitHub là remote/web platform.<br>❌ B là Docker/Podman.<br>❌ D không đúng."
  },
  {
    "q": "A GitHub repository can be which visibility types? (Repository trên GitHub có thể có loại visibility nào?)",
    "opts": [
      "Public or Private",
      "Blue or Green",
      "CPU or RAM",
      "Build or Test"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Public or Private</b><br>Public repository có thể truy cập bởi mọi người; Private repository bị giới hạn quyền truy cập theo cấu hình.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc deployment strategy.<br>❌ C không liên quan.<br>❌ D là pipeline stages."
  },
  {
    "q": "What does the Code feature in GitHub repository store? (Tính năng Code trong GitHub repository lưu gì?)",
    "opts": [
      "Only production logs (Chỉ log production)",
      "Only CPU metrics (Chỉ CPU metrics)",
      "The project's source code (Source code của project)",
      "Only billing data (Chỉ dữ liệu billing)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Project source code</b><br>Tab Code trong GitHub repository là nơi lưu source code và file của project.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải chức năng chính của Code tab."
  },
  {
    "q": "What does the Commits feature in GitHub track? (Commits trong GitHub theo dõi gì?)",
    "opts": [
      "Only UI colors (Chỉ màu UI)",
      "Only server costs (Chỉ chi phí server)",
      "History of changes in the repository (Lịch sử thay đổi trong repository)",
      "Only container replicas (Chỉ replica container)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Change history</b><br>Commits cho biết lịch sử thay đổi, người thay đổi, thời điểm và message mô tả thay đổi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải commit history."
  },
  {
    "q": "What are GitHub Branches used for? (Branches trong GitHub dùng để làm gì?)",
    "opts": [
      "Manage only cloud billing (Chỉ quản lý billing cloud)",
      "Delete all old versions automatically (Tự động xóa mọi version cũ)",
      "Run only database migrations (Chỉ chạy database migration)",
      "Manage parallel development versions of the code (Quản lý các phiên bản phát triển song song của code)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Parallel development versions</b><br>Branches cho phép team phát triển nhiều feature/fix song song trước khi merge vào branch chính.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không đúng vai trò branch."
  },
  {
    "q": "What is a Pull Request on GitHub? (Pull Request trên GitHub là gì?)",
    "opts": [
      "A tool for submitting merge requests from a feature branch to the main branch (Công cụ gửi yêu cầu merge từ feature branch vào main branch)",
      "A tool for deleting production databases (Công cụ xóa database production)",
      "A tool for creating Kubernetes pods only (Công cụ chỉ tạo Kubernetes pod)",
      "A tool for monitoring memory only (Công cụ chỉ monitor memory)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Merge request process</b><br>Pull Request là quy trình đề xuất merge code, review thay đổi và thảo luận trước khi nhập vào branch chính.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không liên quan Pull Request."
  },
  {
    "q": "What are GitHub Issues used for? (GitHub Issues dùng để làm gì?)",
    "opts": [
      "Only to build Docker images (Chỉ build Docker image)",
      "Only to store passwords (Chỉ lưu password)",
      "Only to change repository visibility (Chỉ đổi visibility repo)",
      "Tracking bugs, feature requests, or project tasks (Theo dõi bug, feature request hoặc task dự án)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Track bugs, features, tasks</b><br>Issues giúp team quản lý bug, yêu cầu tính năng và các task liên quan đến project.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CI/CD/build.<br>❌ B nguy hiểm và sai.<br>❌ C không phải mục đích của Issues."
  },
  {
    "q": "What is Git Merge commonly used for? (Git Merge thường dùng để làm gì?)",
    "opts": [
      "Delete all feature branches automatically (Tự động xóa tất cả feature branch)",
      "Combine changes from one branch into another while preserving branch history (Kết hợp thay đổi từ branch này vào branch khác và giữ lịch sử branch)",
      "Rewrite every commit message manually (Viết lại mọi commit message thủ công)",
      "Disable code review (Tắt code review)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Combine branches</b><br>Merge đưa thay đổi từ một branch vào branch khác. Nó thường giữ lịch sử phân nhánh và có thể tạo merge commit.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải mục tiêu của merge."
  },
  {
    "q": "What is Git Rebase commonly used for? (Git Rebase thường dùng để làm gì?)",
    "opts": [
      "Only list remote repositories (Chỉ liệt kê remote repositories)",
      "Delete GitHub Issues (Xóa GitHub Issues)",
      "Move commits onto a new base to create a more linear history (Di chuyển commit sang base mới để tạo lịch sử tuyến tính hơn)",
      "Create Docker containers (Tạo Docker container)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Create linear history</b><br>Rebase đặt lại base của branch, replay các commit lên base mới để lịch sử commit tuyến tính và gọn hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là git remote -v.<br>❌ B không phải Git rebase.<br>❌ D thuộc Docker."
  },
  {
    "q": "Which statement best describes Merge vs Rebase? (Phát biểu nào mô tả đúng Merge vs Rebase?)",
    "opts": [
      "Merge and rebase are both unrelated to branches (Merge và rebase đều không liên quan branch)",
      "Rebase always deletes the repository (Rebase luôn xóa repository)",
      "Merge can only be used on GitHub UI (Merge chỉ dùng được trên GitHub UI)",
      "Merge preserves branch structure, while rebase rewrites commits onto a new base (Merge giữ cấu trúc phân nhánh, còn rebase viết lại commit lên base mới)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Merge preserves, rebase rewrites base</b><br>Merge nhập nhánh và giữ lịch sử nhánh; rebase tạo lịch sử tuyến tính hơn bằng cách replay commit trên base mới.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì cả hai đều liên quan branch history.<br>❌ B sai.<br>❌ C sai vì merge dùng được bằng Git CLI."
  },
  {
    "q": "When should you be careful with rebase? (Khi nào cần cẩn thận với rebase?)",
    "opts": [
      "When viewing git status (Khi xem git status)",
      "When listing branches only (Khi chỉ liệt kê branch)",
      "When rebasing shared/public branches because it rewrites history (Khi rebase branch public/shared vì nó rewrite history)",
      "When reading documentation (Khi đọc documentation)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Public branch rebase is risky</b><br>Rebase viết lại lịch sử commit, nên nếu branch đã được người khác dùng chung, rebase có thể gây conflict hoặc làm rối lịch sử của team.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải tình huống rủi ro chính của rebase."
  },
  {
    "q": "Which approach usually creates a cleaner linear history? (Cách nào thường tạo lịch sử tuyến tính gọn hơn?)",
    "opts": [
      "Deleting the .git folder",
      "Rebase",
      "Ignoring all commits",
      "Disabling branch management"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Rebase</b><br>Rebase thường giúp lịch sử commit tuyến tính hơn vì nó replay commit lên base mới thay vì tạo merge commit.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A phá repo Git.<br>❌ C sai vì Git dựa trên commit.<br>❌ D sai vì branch management rất quan trọng."
  },
  {
    "q": "Which branching strategy commonly uses main, develop, and feature branches? (Branching strategy nào thường dùng main, develop và feature branches?)",
    "opts": [
      "Serverless-only flow",
      "Gitflow",
      "No-branch strategy",
      "Database replication flow"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Gitflow</b><br>Gitflow thường có main/master, develop, feature branches, release branches và hotfix branches để quản lý vòng đời phát triển/release.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải branching strategy chuẩn trong nội dung này."
  },
  {
    "q": "What is the purpose of feature branches in Gitflow? (Feature branch trong Gitflow dùng để làm gì?)",
    "opts": [
      "Develop new features separately before merging back (Phát triển tính năng mới riêng trước khi merge lại)",
      "Store only production logs (Chỉ lưu production logs)",
      "Replace the main branch permanently (Thay thế main branch vĩnh viễn)",
      "Disable pull requests (Tắt pull request)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Develop features separately</b><br>Feature branch giúp developer làm tính năng mới tách khỏi develop/main để tránh ảnh hưởng code ổn định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không liên quan.<br>❌ C sai vì feature branch không thay thế main.<br>❌ D sai vì feature branch thường đi kèm PR."
  },
  {
    "q": "What is Trunk-Based Development? (Trunk-Based Development là gì?)",
    "opts": [
      "A strategy with no main branch (Chiến lược không có main branch)",
      "A strategy only for database backups (Chiến lược chỉ dành cho backup database)",
      "A strategy that forbids CI/CD (Chiến lược cấm CI/CD)",
      "A strategy where developers integrate small changes frequently into the main trunk (Chiến lược developer tích hợp thay đổi nhỏ thường xuyên vào main trunk)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Frequent integration to main</b><br>Trunk-Based Development khuyến khích branch ngắn hạn và merge thường xuyên vào trunk/main để giảm conflict và hỗ trợ CI/CD.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì trunk/main là trung tâm.<br>❌ B không liên quan.<br>❌ C sai vì trunk-based rất hợp CI/CD."
  },
  {
    "q": "Which branching strategy is usually more CI/CD-friendly due to frequent small integrations? (Chiến lược branch nào thường thân thiện CI/CD hơn nhờ tích hợp nhỏ và thường xuyên?)",
    "opts": [
      "No version control",
      "Manual zip-file sharing",
      "Trunk-Based Development",
      "Emailing code files"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Trunk-Based Development</b><br>Trunk-based giúp thay đổi nhỏ, merge thường xuyên, pipeline chạy liên tục và giảm tích tụ conflict lớn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đều là cách làm kém chuyên nghiệp, không hỗ trợ CI/CD tốt."
  },
  {
    "q": "What is a Pull Request also known as? (Pull Request còn được gọi là gì?)",
    "opts": [
      "Merge Request",
      "Container Request",
      "Server Request",
      "Database Request"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Merge Request</b><br>Pull Request và Merge Request thường được dùng như hai thuật ngữ đồng nghĩa, tùy platform như GitHub/GitLab.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải tên tương đương của Pull Request."
  },
  {
    "q": "What is the purpose of a Pull Request? (Mục đích của Pull Request là gì?)",
    "opts": [
      "To merge a branch into main after review (Để merge branch vào main sau khi review)",
      "To erase repository history (Để xóa lịch sử repository)",
      "To replace automated tests (Để thay thế automated test)",
      "To stop collaboration (Để dừng collaboration)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Merge process with review</b><br>Pull Request là quy trình đưa thay đổi từ branch vào main/develop sau khi được review và kiểm tra.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai và nguy hiểm.<br>❌ C sai vì PR không thay thế test.<br>❌ D sai vì PR hỗ trợ collaboration."
  },
  {
    "q": "Who should be selected in a Pull Request before merging? (Trong Pull Request nên chọn ai trước khi merge?)",
    "opts": [
      "Random external users only (Chỉ user ngoài random)",
      "Only the database server (Chỉ database server)",
      "Members who need to review the code (Thành viên cần review code)",
      "No one, because review is forbidden (Không ai cả vì review bị cấm)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Code reviewers</b><br>PR nên chọn reviewer phù hợp để kiểm tra code trước khi merge vào branch chính.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không hợp lý.<br>❌ B vô nghĩa.<br>❌ D sai vì review là phần quan trọng của PR."
  },
  {
    "q": "Why is code review important? (Vì sao code review quan trọng?)",
    "opts": [
      "It improves quality assurance and catches potential issues (Nó cải thiện QA và phát hiện vấn đề tiềm ẩn)",
      "It makes code unreadable (Nó làm code khó đọc)",
      "It removes knowledge sharing (Nó loại bỏ chia sẻ kiến thức)",
      "It forces all bugs into production (Nó đưa mọi bug lên production)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Improves quality</b><br>Code review giúp kiểm tra implementation, phát hiện logic flaw, cải thiện chất lượng và giảm rủi ro trước khi merge.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D đều trái với lợi ích code review."
  },
  {
    "q": "Which is a benefit of code review related to team learning? (Lợi ích nào của code review liên quan đến học hỏi nhóm?)",
    "opts": [
      "Hiding code from teammates (Giấu code với đồng đội)",
      "Preventing mentorship (Ngăn mentorship)",
      "Knowledge sharing across the team (Chia sẻ kiến thức trong team)",
      "Removing documentation (Xóa documentation)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Knowledge sharing</b><br>Code review giúp team hiểu codebase chung, học cách giải quyết vấn đề và mentor developer ít kinh nghiệm hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D đi ngược mục tiêu review."
  },
  {
    "q": "What should reviewers look at during code review? (Reviewer nên xem gì khi code review?)",
    "opts": [
      "Only the developer's laptop brand (Chỉ hãng laptop của developer)",
      "Design, functionality, complexity, tests, naming, comments, style, documentation (Design, functionality, complexity, tests, naming, comments, style, documentation)",
      "Only production billing (Chỉ billing production)",
      "Only the number of emojis in comments (Chỉ số emoji trong comment)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Review design, function, tests, style, docs</b><br>Reviewer cần xem code có thiết kế tốt không, chạy đúng không, có đơn giản không, có test không, naming/comment/style/docs có rõ không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải tiêu chí review code nghiêm túc."
  },
  {
    "q": "According to the slide, who needs to dedicate time to code review? (Theo slide, ai cần dành thời gian cho code review?)",
    "opts": [
      "Only end users",
      "Tech-lead",
      "Only cloud provider",
      "Only database engine"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Tech-lead</b><br>Slide nhấn mạnh tech-lead cần dành thời gian cho code review để đảm bảo chất lượng và định hướng kỹ thuật.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải người chịu trách nhiệm review code trong team."
  },
  {
    "q": "What is a disadvantage of Monorepo mentioned in the slide? (Nhược điểm Monorepo được nhắc trong slide là gì?)",
    "opts": [
      "Slow git pull (git pull chậm)",
      "No shared code at all (Hoàn toàn không chia sẻ code)",
      "Cannot store multiple projects (Không thể lưu nhiều project)",
      "Always prevents deployment coupling (Luôn ngăn deploy coupling)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Slow git pull</b><br>Monorepo có thể rất lớn nên git pull chậm. Slide cũng nhắc deploy coupled và khó phân quyền granular git access.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì monorepo thường dễ share code.<br>❌ C sai vì monorepo chứa nhiều project/package.<br>❌ D sai vì deploy coupled là nhược điểm."
  },
  {
    "q": "Which is another disadvantage of Monorepo? (Nhược điểm khác của Monorepo là gì?)",
    "opts": [
      "Cannot contain source code (Không thể chứa source code)",
      "Cannot use Git (Không thể dùng Git)",
      "Always has zero deployment coupling (Luôn không có coupling khi deploy)",
      "Hard to grant limited granular Git access (Khó cấp quyền Git chi tiết theo phần nhỏ)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Hard granular access</b><br>Vì nhiều project cùng nằm trong một repo, việc cấp quyền truy cập rất chi tiết cho từng phần có thể khó hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và C sai rõ ràng.<br>❌ C sai vì deploy coupled là vấn đề của monorepo."
  },
  {
    "q": "What is a disadvantage of Multi-repo? (Nhược điểm của Multi-repo là gì?)",
    "opts": [
      "Hard to share resources like components, configs, utils and test suites (Khó chia sẻ component, config, utils và test suite)",
      "git pull is always slower than monorepo (git pull luôn chậm hơn monorepo)",
      "It cannot use CI/CD (Không thể dùng CI/CD)",
      "It cannot have separate repositories (Không thể có repo riêng)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Hard to share resources</b><br>Multi-repo tách nhiều repository nên việc chia sẻ component/config/utils/test suites cần submodule hoặc publish package và quản lý version riêng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không phải luôn đúng.<br>❌ C sai vì multi-repo vẫn dùng CI/CD.<br>❌ D tự mâu thuẫn."
  },
  {
    "q": "In GitFlow with CI/CD, when does CI usually run? (Trong GitFlow với CI/CD, CI thường chạy khi nào?)",
    "opts": [
      "Only after production outage (Chỉ sau khi production outage)",
      "Only once per year (Chỉ một lần mỗi năm)",
      "Before any code exists (Trước khi có code)",
      "When a feature branch is completed and a Pull Request is submitted (Khi feature branch hoàn thành và PR được tạo)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: On PR from feature branch</b><br>Khi feature branch hoàn thành và tạo PR, CI tự động chạy để kiểm tra source code trước khi merge.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không đúng quy trình CI."
  },
  {
    "q": "What can CI check in GitFlow process? (CI có thể kiểm tra gì trong GitFlow process?)",
    "opts": [
      "Only UI colors (Chỉ màu UI)",
      "Unit tests, security analysis, and security testing tools (Unit test, security analysis và security testing tools)",
      "Only server electricity cost (Chỉ tiền điện server)",
      "Only employee attendance (Chỉ chấm công nhân viên)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Tests and security checks</b><br>CI có thể chạy unit test, phân tích bảo mật và các tool kiểm thử bảo mật để đảm bảo code đủ chất lượng trước khi merge.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải nhiệm vụ CI chính."
  },
  {
    "q": "In GitFlow with CI/CD, what does CD do after code is merged into development branch and passes CI? (Trong GitFlow với CI/CD, CD làm gì sau khi code merge vào development và pass CI?)",
    "opts": [
      "Deploys to testing/staging and then production environment (Deploy lên testing/staging rồi production)",
      "Deletes the source code (Xóa source code)",
      "Disables all tests (Tắt tất cả test)",
      "Prevents release forever (Ngăn release vĩnh viễn)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Deploy to staging then production</b><br>CD triển khai code đã qua CI lên môi trường test/staging, sau đó có thể triển khai production theo quy trình release.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D đi ngược CI/CD."
  },
  {
    "q": "What is GitHub Actions? (GitHub Actions là gì?)",
    "opts": [
      "A local-only VCS tool (Công cụ VCS chỉ local)",
      "Native CI/CD for GitHub with YAML workflows in .github/workflows/ (CI/CD native của GitHub dùng YAML workflow trong .github/workflows/)",
      "A database engine (Database engine)",
      "A manual code editor only (Chỉ là code editor thủ công)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Native CI/CD for GitHub</b><br>GitHub Actions tích hợp sâu với GitHub, dùng YAML workflow trong thư mục .github/workflows/, hỗ trợ cloud runner và self-hosted runner.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không đúng với GitHub Actions."
  },
  {
    "q": "Which configuration file is used by GitLab CI/CD? (GitLab CI/CD dùng file cấu hình nào?)",
    "opts": [
      "bitbucket-pipelines.yml",
      ".github/workflows/*.yml",
      "Dockerfile only",
      ".gitlab-ci.yml"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: .gitlab-ci.yml</b><br>GitLab CI/CD là CI/CD built-in cho GitLab repositories và dùng file .gitlab-ci.yml để định nghĩa pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Bitbucket Pipelines.<br>❌ B là GitHub Actions.<br>❌ C là Docker image build, không phải GitLab CI config chính."
  },
  {
    "q": "Which configuration file is used by Bitbucket Pipelines? (Bitbucket Pipelines dùng file cấu hình nào?)",
    "opts": [
      "Jenkinsfile only",
      ".gitlab-ci.yml",
      "package.json only",
      "bitbucket-pipelines.yml"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: bitbucket-pipelines.yml</b><br>Bitbucket Pipelines là CI/CD built-in cho Bitbucket repositories và dùng file bitbucket-pipelines.yml để cấu hình pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thường dùng cho Jenkins.<br>❌ B dùng cho GitLab CI/CD.<br>❌ C không phải file config chính của Bitbucket Pipelines."
  }
];
