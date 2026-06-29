// 0.6 Kubernetes (K8S) - 96 câu
window.QUIZ_SETS = window.QUIZ_SETS || {};
window.QUIZ_SETS.devops = window.QUIZ_SETS.devops || { data: { topics: [] } };
window.QUIZ_SETS.devops.data.topics[5].questions = [
  {
    q: "What is Docker Swarm? (Docker Swarm là gì?)",
    opts: [
      "A package manager for Kubernetes (Trình quản lý package cho Kubernetes)",
      "A lightweight container orchestration tool from Docker (Công cụ orchestration container nhẹ của Docker)",
      "A Git branching strategy (Chiến lược branch Git)",
      "A Linux storage driver only (Chỉ là storage driver Linux)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Docker Swarm là công cụ orchestration container nhẹ</b><br>Docker Swarm dễ cài đặt, nhẹ và dễ sử dụng để quản lý nhiều Docker container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Helm.<br>❌ C thuộc Git.<br>❌ D không phải Docker Swarm."
  },
  {
    q: "Which statement is TRUE about Docker Swarm compared to Kubernetes? (Phát biểu nào đúng về Docker Swarm so với Kubernetes?)",
    opts: [
      "Docker Swarm has stronger automation than Kubernetes (Swarm automation mạnh hơn Kubernetes)",
      "Docker Swarm is a database system (Swarm là hệ quản trị database)",
      "Docker Swarm cannot do load balancing (Swarm không thể load balancing)",
      "Docker Swarm is easier/lightweight, but automation is less robust than Kubernetes (Swarm nhẹ/dễ dùng hơn nhưng automation không mạnh bằng Kubernetes)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Swarm nhẹ hơn nhưng automation kém mạnh hơn Kubernetes</b><br>Slide nhấn mạnh Swarm dễ cài, nhẹ, có load balancing tự động nhưng automation capabilities không robust bằng Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược lại.<br>❌ B sai hoàn toàn.<br>❌ C sai vì Swarm có automated load balancing."
  },
  {
    q: "What is Kubernetes? (Kubernetes là gì?)",
    opts: [
      "An open-source system for automating deployment, scaling, and management of containerized applications (Hệ thống mã nguồn mở để tự động deploy, scale và quản lý ứng dụng containerized)",
      "A tool only for editing Dockerfiles (Công cụ chỉ chỉnh Dockerfile)",
      "A Git hosting platform (Nền tảng host Git)",
      "A UI design tool (Công cụ thiết kế UI)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Kubernetes tự động hóa deploy/scale/manage containerized apps</b><br>Kubernetes, hay K8S, dùng để quản lý ứng dụng chạy bằng container ở quy mô lớn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B quá hẹp.<br>❌ C là GitHub/GitLab.<br>❌ D là Figma/Sketch."
  },
  {
    q: "Who originally developed Kubernetes? (Kubernetes ban đầu được phát triển bởi ai?)",
    opts: [
      "Google",
      "Microsoft Word team",
      "Docker Hub community only",
      "Apache Maven team"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Google</b><br>Kubernetes được phát triển bởi Google và hiện được duy trì bởi CNCF.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải nguồn gốc Kubernetes."
  },
  {
    q: "Who maintains Kubernetes today? (Hiện nay Kubernetes được duy trì bởi tổ chức nào?)",
    opts: [
      "Only Docker Inc. (Chỉ Docker Inc.)",
      "CNCF - Cloud Native Computing Foundation",
      "Only GitHub",
      "Only Linux kernel team"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: CNCF</b><br>Kubernetes hiện có cộng đồng phát triển lớn và được duy trì bởi CNCF.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Kubernetes không chỉ thuộc Docker.<br>❌ C và D không phải tổ chức duy trì chính."
  },
  {
    q: "What does K8S help automate? (K8S giúp tự động hóa điều gì?)",
    opts: [
      "Only writing source code (Chỉ viết source code)",
      "Deployment, scaling, and management of containers (Deploy, scale và quản lý container)",
      "Only UI drawing (Chỉ vẽ UI)",
      "Only Git commit messages (Chỉ commit message Git)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Deployment, scaling, management</b><br>Kubernetes tự động hóa triển khai, mở rộng và vận hành ứng dụng containerized.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải chức năng chính của K8S."
  },
  {
    q: "What does CRI stand for in Kubernetes? (CRI trong Kubernetes là viết tắt của gì?)",
    opts: [
      "Container Registry Interface",
      "Container Runtime Interface",
      "Cloud Runtime Image",
      "Cluster Role Identity"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Container Runtime Interface</b><br>CRI là API của Kubernetes dùng để giao tiếp với container runtime như containerd hoặc CRI-O.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không phải nghĩa đúng của CRI."
  },
  {
    q: "Which container runtime is commonly used by Kubernetes? (Container runtime nào thường dùng với Kubernetes?)",
    opts: [
      "Jira",
      "GitHub Issues",
      "Confluence",
      "containerd"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: containerd</b><br>Kubernetes có thể dùng containerd, CRI-O và các runtime tương thích OCI để chạy container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C là công cụ quản lý/collaboration, không phải container runtime."
  },
  {
    q: "Which benefit of Kubernetes helps applications handle more traffic? (Lợi ích nào của Kubernetes giúp app chịu tải tốt hơn?)",
    opts: [
      "Scalability and expandability (Khả năng scale và mở rộng)",
      "Manual-only deployment (Chỉ deploy thủ công)",
      "No monitoring required (Không cần monitoring)",
      "Single-machine limitation (Giới hạn một máy)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Scalability and expandability</b><br>Kubernetes giúp tự động phân phối và vận hành container ở môi trường lớn, hỗ trợ scale theo nhu cầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D đi ngược lợi ích của Kubernetes."
  },
  {
    q: "What does self-healing mean in Kubernetes? (Self-healing trong Kubernetes nghĩa là gì?)",
    opts: [
      "Users manually restart every failed container (User tự restart mọi container lỗi)",
      "Kubernetes deletes the whole cluster on failure (Kubernetes xóa cả cluster khi lỗi)",
      "Kubernetes only logs failures without action (Kubernetes chỉ ghi log lỗi)",
      "Kubernetes can restart/replace failed containers or move them to other nodes (Kubernetes có thể restart/thay container lỗi hoặc chuyển sang node khác)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Kubernetes tự phục hồi container/node lỗi</b><br>Self-healing giúp hệ thống tự duy trì desired state bằng cách thay thế hoặc restart Pod/container khi có lỗi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải tự động.<br>❌ B quá cực đoan và sai.<br>❌ C thiếu hành động phục hồi."
  },
  {
    q: "Which Kubernetes features help with configuration and storage management? (Tính năng nào giúp quản lý cấu hình và lưu trữ trong Kubernetes?)",
    opts: [
      "Only Git tags",
      "Only Dockerfile comments",
      "Only browser cookies",
      "ConfigMaps, Secrets, PV and PVC"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: ConfigMaps, Secrets, PV, PVC</b><br>ConfigMaps/Secrets quản lý cấu hình và dữ liệu nhạy cảm; PV/PVC quản lý storage persistent.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B không phải quản lý cấu hình runtime.<br>❌ C không thuộc Kubernetes core storage/config."
  },
  {
    q: "Which security mechanisms are mentioned as Kubernetes benefits? (Cơ chế bảo mật nào được nhắc là lợi ích của Kubernetes?)",
    opts: [
      "Only password in source code (Chỉ lưu password trong source code)",
      "Only public access to all Pods (Public toàn bộ Pod)",
      "Only disabling authentication (Tắt authentication)",
      "RBAC, Network Policies, and Service Accounts"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: RBAC, Network Policies, Service Accounts</b><br>Kubernetes cung cấp các cơ chế kiểm soát truy cập và network như RBAC, Network Policies, Service Accounts.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C đều là thực hành không an toàn."
  },
  {
    q: "Which problem can Kubernetes solve in large systems? (Kubernetes giải quyết vấn đề nào trong hệ thống lớn?)",
    opts: [
      "Managing thousands of containers efficiently (Quản lý hàng nghìn container hiệu quả)",
      "Removing all containers (Loại bỏ toàn bộ container)",
      "Replacing all source code (Thay thế toàn bộ source code)",
      "Disabling load balancing (Tắt load balancing)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Quản lý container quy mô lớn</b><br>Kubernetes giúp tổ chức, theo dõi và vận hành nhiều container mà giảm rủi ro phân mảnh tài nguyên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì K8S quản lý container chứ không loại bỏ.<br>❌ C không liên quan.<br>❌ D ngược lại."
  },
  {
    q: "Which Kubernetes feature automatically distributes workload across containers? (Tính năng nào tự động phân phối workload giữa container?)",
    opts: [
      "Manual SSH",
      "Plain text secrets",
      "Automatic load balancing",
      "Git rebase"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Automatic load balancing</b><br>Kubernetes có thể phân phối traffic/workload đến các Pod phù hợp để giảm downtime và tăng khả năng phục vụ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thủ công.<br>❌ B không an toàn.<br>❌ D thuộc Git."
  },
  {
    q: "Which autoscaling types are mentioned in the Kubernetes overview? (Các loại autoscaling nào được nhắc trong overview Kubernetes?)",
    opts: [
      "Git autoscaling and Dockerfile autoscaling",
      "CSS autoscaling and HTML autoscaling",
      "Jenkins autoscaling only",
      "Horizontal Pod Autoscaling and Cluster Autoscaling"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: HPA và Cluster Autoscaling</b><br>Slide nhắc Kubernetes hỗ trợ Horizontal Pod Autoscaling và Cluster Autoscaling để scale theo traffic/tài nguyên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải autoscaling type trong Kubernetes overview."
  },
  {
    q: "Kubernetes architecture mainly consists of which two parts? (Kiến trúc Kubernetes chủ yếu gồm hai phần nào?)",
    opts: [
      "Frontend and backend only",
      "Database and cache only",
      "Control Plane and Worker Nodes",
      "HTML and CSS"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Control Plane và Worker Nodes</b><br>Kubernetes có kiến trúc client-server với Control Plane quản lý cluster và Worker Nodes chạy workload.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải cấu trúc chính của K8S."
  },
  {
    q: "What is the API Server in Kubernetes? (API Server trong Kubernetes là gì?)",
    opts: [
      "Only a Pod logging tool",
      "Only a Docker image registry",
      "Only a Git branch manager",
      "The central point for all requests in the cluster"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Trung tâm xử lý request</b><br>API Server tiếp nhận command/request và tương tác với các component khác trong Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò API Server."
  },
  {
    q: "What does the Scheduler do? (Scheduler làm gì?)",
    opts: [
      "Selects the appropriate node to deploy Pods (Chọn node phù hợp để deploy Pod)",
      "Stores cluster state permanently (Lưu state cluster vĩnh viễn)",
      "Provides DNS outside Kubernetes only (Chỉ cung cấp DNS ngoài K8S)",
      "Creates Helm charts automatically (Tự tạo Helm chart)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Chọn node để đặt Pod</b><br>Scheduler quyết định Pod sẽ được chạy trên node nào dựa trên tài nguyên và ràng buộc scheduling.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là etcd.<br>❌ C không đúng vai trò Scheduler.<br>❌ D không phải Scheduler."
  },
  {
    q: "What does the Controller Manager do? (Controller Manager làm gì?)",
    opts: [
      "Only stores Docker passwords",
      "Monitors resource state and ensures actual state matches desired state (Theo dõi resource state và đảm bảo actual state khớp desired state)",
      "Only exposes NodePort",
      "Only edits YAML manually"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Giám sát và điều chỉnh state</b><br>Controller Manager theo dõi trạng thái tài nguyên và điều khiển cluster về desired state.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Secret.<br>❌ C là Service type.<br>❌ D không phải chức năng chính."
  },
  {
    q: "What is etcd used for? (etcd dùng để làm gì?)",
    opts: [
      "Rendering frontend pages",
      "Compiling Java code",
      "Editing Dockerfiles",
      "Storing all Kubernetes configuration data and state"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Lưu configuration data và state của Kubernetes</b><br>etcd là distributed database lưu trạng thái và cấu hình của cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò etcd."
  },
  {
    q: "What is Kubelet? (Kubelet là gì?)",
    opts: [
      "A Git hosting service",
      "A Docker image tag",
      "A Kubernetes agent running on each node to ensure containers run properly",
      "A Helm chart metadata file only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Agent chạy trên mỗi node</b><br>Kubelet chạy trên Worker Node, đảm bảo container/Pod được chạy và quản lý đúng theo yêu cầu từ Control Plane.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc GitHub/GitLab.<br>❌ B thuộc Docker.<br>❌ D là Chart.yaml."
  },
  {
    q: "What does Kube Proxy manage? (Kube Proxy quản lý gì?)",
    opts: [
      "Only Git commits",
      "Only Helm chart README",
      "Only Dockerfile layers",
      "Networking between Pods and load balancing mechanisms"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Networking và load balancing giữa Pod</b><br>Kube Proxy xử lý networking rules để Service có thể chuyển traffic đến Pod phù hợp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò của Kube Proxy."
  },
  {
    q: "What is a Worker Node responsible for? (Worker Node chịu trách nhiệm gì?)",
    opts: [
      "Running application workloads/Pods",
      "Only storing Helm documentation",
      "Only editing code",
      "Only serving as Git remote"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Chạy workload/Pod</b><br>Worker Node là nơi các Pod/container của ứng dụng thực sự chạy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải vai trò Worker Node."
  },
  {
    q: "What is Container Runtime in a Worker Node? (Container Runtime trên Worker Node là gì?)",
    opts: [
      "A YAML linter only",
      "Software used to run containers, such as Docker or containerd",
      "A Git merge strategy",
      "A Service type"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Phần mềm chạy container</b><br>Container Runtime như containerd hoặc Docker chịu trách nhiệm chạy container trên node.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là tool kiểm tra YAML.<br>❌ C thuộc Git.<br>❌ D là ClusterIP/NodePort/LoadBalancer."
  },
  {
    q: "What is a Pod in Kubernetes? (Pod trong Kubernetes là gì?)",
    opts: [
      "A package manager for K8S",
      "A cloud billing unit",
      "The basic deployment unit in Kubernetes",
      "A GitHub issue type"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Basic deployment unit</b><br>Pod là đơn vị triển khai cơ bản trong Kubernetes, có thể chứa một hoặc nhiều container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Helm.<br>❌ B không liên quan.<br>❌ D thuộc GitHub."
  },
  {
    q: "What can containers inside the same Pod share? (Container trong cùng Pod có thể chia sẻ gì?)",
    opts: [
      "Only Git history",
      "Only Docker Hub password",
      "Only Helm release name",
      "Resources and networking"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Resources và networking</b><br>Các container trong cùng Pod chia sẻ network namespace và có thể chia sẻ volume/resource theo cấu hình.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả đặc điểm Pod."
  },
  {
    q: "Which Kubernetes objects commonly manage Pods? (Object nào thường quản lý Pod?)",
    opts: [
      "Deployment and ReplicaSet",
      "Git commit and branch",
      "Dockerfile and .dockerignore",
      "Chart.yaml and README only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Deployment và ReplicaSet</b><br>Kubernetes dùng Deployment và ReplicaSet để tạo, duy trì và cập nhật Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker build.<br>❌ D thuộc Helm chart metadata/docs."
  },
  {
    q: "What is a ReplicaSet used for? (ReplicaSet dùng để làm gì?)",
    opts: [
      "Store sensitive secrets only",
      "Ensure the number of Pod replicas is maintained at a desired level",
      "Expose HTTP routing from outside the cluster",
      "Install Helm charts"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Duy trì số lượng Pod replica</b><br>ReplicaSet đảm bảo luôn có số Pod replica như mong muốn; nếu Pod fail, nó tạo Pod mới thay thế.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Secret.<br>❌ C là Ingress/Service.<br>❌ D là Helm."
  },
  {
    q: "What happens if a Pod managed by a ReplicaSet fails? (Nếu Pod do ReplicaSet quản lý bị lỗi thì sao?)",
    opts: [
      "ReplicaSet automatically creates a new Pod to replace it",
      "The whole cluster is deleted",
      "Kubernetes disables all Services",
      "Helm uninstall is triggered automatically"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: ReplicaSet tạo Pod mới thay thế</b><br>ReplicaSet duy trì desired replicas, nên sẽ tạo Pod mới nếu một Pod bị fail hoặc mất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D đều sai và không phải hành vi ReplicaSet."
  },
  {
    q: "How does a ReplicaSet select Pods to manage? (ReplicaSet chọn Pod để quản lý bằng cách nào?)",
    opts: [
      "By CSS selector",
      "By random file name",
      "By labels matching its selector",
      "By Git commit author only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Label selector</b><br>ReplicaSet dùng selector để tìm các Pod có label phù hợp và quản lý chúng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là web CSS.<br>❌ B sai.<br>❌ D không liên quan."
  },
  {
    q: "What does the Pod Template in a ReplicaSet define? (Pod Template trong ReplicaSet định nghĩa gì?)",
    opts: [
      "Only external DNS",
      "Only Helm values",
      "Only RBAC users",
      "How new Pods are created when needed"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Cách tạo Pod mới</b><br>Pod Template mô tả cấu hình Pod mà ReplicaSet sẽ dùng để tạo Pod mới khi cần.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò Pod Template."
  },
  {
    q: "Which main fields are in a ReplicaSet YAML? (Các field chính trong YAML ReplicaSet là gì?)",
    opts: [
      "metadata and spec",
      "only README",
      "only Dockerfile",
      "only package.json"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: metadata và spec</b><br>ReplicaSet YAML có metadata và spec; trong spec thường có replicas, selector, template.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải field chính của Kubernetes manifest."
  },
  {
    q: "What is a Deployment in Kubernetes? (Deployment trong Kubernetes là gì?)",
    opts: [
      "A cloud invoice",
      "An API object used to manage deployment, update, and scaling of containerized applications",
      "A Git merge command",
      "A Docker Registry endpoint"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Object quản lý deploy/update/scale app</b><br>Deployment quản lý ReplicaSet và Pod, hỗ trợ update, rollback, scale và self-healing.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C thuộc Git.<br>❌ D thuộc Docker Registry."
  },
  {
    q: "What does a Deployment manage directly? (Deployment trực tiếp quản lý gì?)",
    opts: [
      "Only Ingress TLS certificates",
      "Only Helm repositories",
      "ReplicaSets, which then manage Pods",
      "Only GitHub pull requests"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: ReplicaSet rồi đến Pod</b><br>Deployment tạo và quản lý ReplicaSet; ReplicaSet tạo và quản lý Pod theo desired replicas.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Ingress/Secret.<br>❌ B thuộc Helm.<br>❌ D thuộc GitHub."
  },
  {
    q: "What happens if a Deployment is deleted? (Nếu Deployment bị xóa thì sao?)",
    opts: [
      "Only Git history is deleted",
      "Only Namespace is renamed",
      "Only ConfigMap is converted to Secret",
      "Its associated ReplicaSet and Pods are also deleted"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: ReplicaSet và Pod liên quan cũng bị xóa</b><br>Slide nêu nếu Deployment bị delete thì ReplicaSet và Pod liên quan cũng bị delete.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải hành vi Deployment."
  },
  {
    q: "Which update capability does Deployment support? (Deployment hỗ trợ khả năng update nào?)",
    opts: [
      "Rolling Updates and Rollback",
      "Only manual SSH update",
      "Only deleting the cluster",
      "Only disabling Pods forever"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Rolling Updates và Rollback</b><br>Deployment hỗ trợ cập nhật ứng dụng an toàn bằng rolling update và quay lại phiên bản trước bằng rollback.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thủ công và không phải tính năng Deployment.<br>❌ C, D sai."
  },
  {
    q: "How can a Deployment scale an application? (Deployment scale ứng dụng bằng cách nào?)",
    opts: [
      "By changing the number of Pods/replicas",
      "By editing Git commit messages",
      "By deleting etcd",
      "By disabling Kubelet"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Thay đổi số Pod/replicas</b><br>Deployment có thể scale app bằng cách tăng/giảm replicas trong spec.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C nguy hiểm và sai.<br>❌ D làm node không vận hành đúng."
  },
  {
    q: "Which field defines the number of Pod replicas in Deployment/ReplicaSet YAML? (Field nào định nghĩa số lượng Pod replica?)",
    opts: [
      "hostname",
      "replicas",
      "protocol",
      "chart"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: replicas</b><br>Field replicas trong spec định nghĩa số Pod mong muốn mà Deployment/ReplicaSet cần duy trì.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải field replicas.<br>❌ C thuộc network/service.<br>❌ D thuộc Helm."
  },
  {
    q: "What is a Kubernetes Service? (Service trong Kubernetes là gì?)",
    opts: [
      "A source code repository",
      "A Dockerfile instruction",
      "An object that connects Pods with each other or with the outside world",
      "A Linux user account"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Object kết nối Pod</b><br>Service cung cấp cách giao tiếp ổn định giữa Pod với Pod hoặc giữa Pod và bên ngoài cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker.<br>❌ D không đúng."
  },
  {
    q: "A Kubernetes Service acts like what? (Service trong Kubernetes hoạt động giống gì?)",
    opts: [
      "A Git stash",
      "A Docker layer",
      "A YAML comment",
      "A router that forwards traffic to the correct Pods"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Router chuyển traffic đến Pod đúng</b><br>Service abstract communication và forward traffic đến các Pod phù hợp dựa trên selector/endpoints.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không mô tả Service."
  },
  {
    q: "How does a Service select Pods? (Service chọn Pod bằng cách nào?)",
    opts: [
      "Using labels through a selector",
      "Using file size",
      "Using Git author name only",
      "Using Helm release history only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Label selector</b><br>Service dùng selector để tìm Pod có label khớp rồi forward traffic đến các Pod đó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải cơ chế chọn Pod."
  },
  {
    q: "What are Endpoints in a Kubernetes Service? (Endpoints trong Service là gì?)",
    opts: [
      "Only branch names",
      "A list of IP addresses of Pods managed by the Service",
      "Only Dockerfile stages",
      "Only Helm chart metadata"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Danh sách IP của Pod</b><br>Endpoints chứa danh sách IP Pod mà Service quản lý và tự cập nhật khi Pod thêm/xóa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C thuộc Docker multi-stage.<br>❌ D thuộc Helm."
  },
  {
    q: "Which Service type is the default and only accessible inside the cluster? (Service type nào là mặc định và chỉ truy cập trong cluster?)",
    opts: [
      "NodePort",
      "LoadBalancer",
      "ClusterIP",
      "ExternalName"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: ClusterIP</b><br>ClusterIP là Service type mặc định, chỉ truy cập được từ bên trong cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A mở port trên node.<br>❌ B tạo external load balancer.<br>❌ D trỏ đến external DNS service."
  },
  {
    q: "Which Service type opens a port on each Node? (Service type nào mở port trên mỗi Node?)",
    opts: [
      "ConfigMap",
      "Secret",
      "Ingress",
      "NodePort"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: NodePort</b><br>NodePort mở một port trên mỗi Node để cho phép truy cập từ bên ngoài cluster vào Service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là config.<br>❌ B là sensitive data.<br>❌ C là HTTP/HTTPS routing object."
  },
  {
    q: "Which Service type integrates with cloud providers to create an external load balancer? (Service type nào tích hợp cloud provider để tạo external load balancer?)",
    opts: [
      "LoadBalancer",
      "ClusterIP",
      "ExternalName",
      "emptyDir"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: LoadBalancer</b><br>LoadBalancer Service tích hợp với cloud provider để tạo external load balancer cho app.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B chỉ trong cluster.<br>❌ C dùng DNS trỏ external service.<br>❌ D là Volume type."
  },
  {
    q: "Which Service type connects to external services using DNS? (Service type nào kết nối external service bằng DNS?)",
    opts: [
      "NodePort",
      "ExternalName",
      "PersistentVolume",
      "ReplicaSet"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: ExternalName</b><br>ExternalName cho phép Service trỏ đến dịch vụ bên ngoài Kubernetes thông qua DNS name.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A mở port trên node.<br>❌ C là storage.<br>❌ D quản lý Pod replica."
  },
  {
    q: "What is a Namespace in Kubernetes? (Namespace trong Kubernetes là gì?)",
    opts: [
      "A Docker image tag",
      "A Git branch strategy",
      "An independent workspace to separate Kubernetes resources",
      "A CPU unit"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Workspace tách resource</b><br>Namespace giúp chia resource/object trong cluster thành các workspace độc lập để tránh trùng tên và quản lý theo nhóm/môi trường.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ D là resource measurement."
  },
  {
    q: "Which use case fits Namespace? (Use case nào phù hợp Namespace?)",
    opts: [
      "Writing Dockerfile layers",
      "Renaming Git commits",
      "Disabling all Pods",
      "Separating dev, qa/testing, and production environments"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Tách dev/qa/prod</b><br>Namespace thường dùng để tách môi trường dev, qa/test và production trong cùng cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ C không phải mục đích Namespace."
  },
  {
    q: "Which resources are NOT tied to a Namespace according to the slide? (Resource nào không gắn với Namespace theo slide?)",
    opts: [
      "Nodes, PersistentVolumes, ClusterRoles",
      "Pods only",
      "Services only",
      "ConfigMaps only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Nodes, PV, ClusterRoles</b><br>Một số resource có scope toàn cluster, không thuộc namespace, ví dụ Nodes, PersistentVolumes, ClusterRoles.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D thường là namespaced resources."
  },
  {
    q: "What is the default Namespace used when no Namespace is specified? (Namespace mặc định khi không chỉ định là gì?)",
    opts: [
      "kube-system",
      "default",
      "production",
      "root"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: default</b><br>Nếu không chỉ định Namespace, Kubernetes dùng namespace default.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A chứa component hệ thống.<br>❌ C không phải namespace mặc định sẵn.<br>❌ D không phải namespace mặc định Kubernetes."
  },
  {
    q: "What is kube-system Namespace used for? (Namespace kube-system dùng để làm gì?)",
    opts: [
      "Only for user frontend apps",
      "Only for Git repositories",
      "Contains resources and Pods essential for Kubernetes operation",
      "Only for Helm README files"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Chứa resource hệ thống của Kubernetes</b><br>kube-system chứa các Pod/resource quan trọng như kube-dns, kube-proxy, coredns.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A app user nên dùng namespace riêng.<br>❌ B không liên quan.<br>❌ D không phải vai trò kube-system."
  },
  {
    q: "What is a Persistent Volume (PV)? (Persistent Volume là gì?)",
    opts: [
      "A browser cookie",
      "A Git remote",
      "A Service type",
      "A storage resource in Kubernetes managed by the cluster"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Storage resource do cluster quản lý</b><br>PV cung cấp lưu trữ dài hạn cho Pod, độc lập với vòng đời Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B không liên quan.<br>❌ C là ClusterIP/NodePort/LoadBalancer/ExternalName."
  },
  {
    q: "Why is PV needed? (Vì sao cần PV?)",
    opts: [
      "Because Pod storage is ephemeral by default and data is lost when Pod is deleted",
      "Because Git cannot store commits",
      "Because Services cannot route traffic",
      "Because Helm cannot install charts"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Pod storage mặc định là ephemeral</b><br>PV giúp dữ liệu không phụ thuộc lifecycle của Pod, nên Pod bị xóa/thay vẫn không mất dữ liệu persistent.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D sai và không liên quan storage."
  },
  {
    q: "What is a Persistent Volume Claim (PVC)? (PVC là gì?)",
    opts: [
      "A cloud invoice",
      "A user's request to consume storage resources",
      "A Pod restart policy only",
      "A NetworkPolicy rule"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Yêu cầu sử dụng storage</b><br>PVC là request của user để xin storage với yêu cầu về capacity, access mode, storage class.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C là Pod spec khác.<br>❌ D thuộc network."
  },
  {
    q: "How does Kubernetes bind PVC to PV? (Kubernetes bind PVC với PV như thế nào?)",
    opts: [
      "By Git username",
      "By Docker tag only",
      "Automatically based on PVC requirements and suitable PV",
      "By Helm README only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Tự động bind theo requirement</b><br>Kubernetes tự động bind PVC với PV phù hợp dựa trên capacity, access modes và storage class.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải cơ chế binding PV/PVC."
  },
  {
    q: "What does StorageClass define? (StorageClass định nghĩa gì?)",
    opts: [
      "Only Git branch naming",
      "Only Pod labels",
      "Only Ingress host",
      "The type of storage and dynamic provisioning behavior"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Loại storage và dynamic provisioning</b><br>StorageClass định nghĩa loại storage như SSD/HDD/cloud storage và có thể dùng để tự động tạo PV.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B là metadata selector.<br>❌ C thuộc Ingress."
  },
  {
    q: "Which access mode allows only one Pod to read/write at a time? (Access mode nào chỉ cho một Pod read/write tại một thời điểm?)",
    opts: [
      "ReadWriteOnce (RWO)",
      "ReadOnlyMany (ROX)",
      "ReadWriteMany (RWX)",
      "ReadNever"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: ReadWriteOnce</b><br>RWO cho phép một Pod/node mount để đọc/ghi tại một thời điểm theo storage backend.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B chỉ nhiều Pod đọc, không ghi.<br>❌ C nhiều Pod đọc/ghi.<br>❌ D không phải access mode chuẩn trong slide."
  },
  {
    q: "Which access mode allows multiple Pods to read but not write? (Access mode nào cho nhiều Pod đọc nhưng không ghi?)",
    opts: [
      "ReadWriteMany",
      "ReadOnlyMany",
      "ReadWriteOnce",
      "WriteOnlyMany"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: ReadOnlyMany</b><br>ROX cho phép nhiều Pod cùng đọc dữ liệu nhưng không Pod nào được ghi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A cho nhiều Pod đọc/ghi.<br>❌ C chỉ một Pod read/write.<br>❌ D không phải mode trong slide."
  },
  {
    q: "Which reclaim policy keeps the PV after PVC is deleted? (Reclaim policy nào giữ PV sau khi PVC bị xóa?)",
    opts: [
      "Delete",
      "Recycle always",
      "Retain",
      "Restart"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Retain</b><br>Retain nghĩa là PV không bị xóa khi PVC bị xóa, dữ liệu được giữ lại để xử lý thủ công nếu cần.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sẽ xóa PV.<br>❌ B không được nhắc trong slide.<br>❌ D không phải reclaim policy."
  },
  {
    q: "Which reclaim policy automatically deletes PV when PVC is deleted? (Reclaim policy nào tự xóa PV khi PVC bị xóa?)",
    opts: [
      "Hold",
      "Keep",
      "Backup",
      "Delete"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Delete</b><br>Delete reclaim policy làm PV bị xóa tự động khi PVC bị xóa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải reclaim policy được nêu."
  },
  {
    q: "What is a ConfigMap? (ConfigMap là gì?)",
    opts: [
      "An object used to store non-sensitive configuration data in key-value pairs",
      "An object used only for passwords",
      "A Service type for external load balancer",
      "A node autoscaler"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Lưu cấu hình không nhạy cảm dạng key-value</b><br>ConfigMap giúp tách cấu hình khỏi source code/container image và quản lý tập trung.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Secret.<br>❌ C là LoadBalancer Service.<br>❌ D không phải ConfigMap."
  },
  {
    q: "Why use ConfigMap? (Vì sao dùng ConfigMap?)",
    opts: [
      "To store TLS private keys only",
      "To change configuration without rebuilding the container image",
      "To replace all Pods",
      "To expose NodePort"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Đổi cấu hình không cần rebuild image</b><br>ConfigMap cho phép thay đổi cấu hình runtime mà không cần cập nhật source code hoặc container image.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Secret/TLS Secret.<br>❌ C sai.<br>❌ D là Service NodePort."
  },
  {
    q: "What is a Secret in Kubernetes? (Secret trong Kubernetes là gì?)",
    opts: [
      "A public README file",
      "A Git branch",
      "An object for storing sensitive information such as passwords, API tokens, or TLS certificates",
      "A container runtime"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Lưu thông tin nhạy cảm</b><br>Secret dùng để quản lý password, API token, TLS certificate... tránh hard-code trực tiếp trong YAML/source code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A public, không phù hợp secret.<br>❌ B thuộc Git.<br>❌ D là containerd/CRI-O."
  },
  {
    q: "Which Secret type is the default type? (Secret type nào là mặc định?)",
    opts: [
      "TLS",
      "dockerconfigjson",
      "ServiceAccountToken",
      "Opaque"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Opaque</b><br>Opaque là Secret type mặc định, dùng để lưu key-value tùy ý.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A lưu TLS key pair.<br>❌ B lưu Docker auth.<br>❌ C dùng để authenticate với API Server."
  },
  {
    q: "Which Secret type stores Docker authentication for pulling private images? (Secret type nào lưu Docker auth để pull private image?)",
    opts: [
      "kubernetes.io/dockerconfigjson",
      "Opaque always only",
      "ExternalName",
      "emptyDir"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: kubernetes.io/dockerconfigjson</b><br>Secret type này lưu thông tin xác thực Docker để Pod pull image từ private registry.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B quá chung, không chuyên cho Docker auth.<br>❌ C là Service type.<br>❌ D là volume type."
  },
  {
    q: "Which Secret type stores certificate and private key? (Secret type nào lưu certificate và private key?)",
    opts: [
      "ConfigMap",
      "TLS",
      "NodePort",
      "ClusterIP"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: TLS</b><br>TLS Secret lưu cặp certificate và private key, thường dùng cho HTTPS/Ingress TLS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không dùng cho dữ liệu nhạy cảm.<br>❌ C và D là Service type."
  },
  {
    q: "What is HPA in Kubernetes? (HPA trong Kubernetes là gì?)",
    opts: [
      "Host Port Adapter",
      "Helm Package Archive",
      "Horizontal Pod Autoscaler",
      "Hybrid Pod API"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Horizontal Pod Autoscaler</b><br>HPA tự động điều chỉnh số Pod trong Deployment/ReplicaSet/StatefulSet dựa trên CPU, memory hoặc custom metrics.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải nghĩa của HPA."
  },
  {
    q: "What does HPA rely on to collect resource usage? (HPA dựa vào gì để thu thập resource usage?)",
    opts: [
      "Only GitHub",
      "Only Docker Hub",
      "Only Helm README",
      "Metrics Server"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Metrics Server</b><br>HPA dựa vào Metrics Server để lấy dữ liệu CPU, memory hoặc custom metrics rồi so với threshold.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không cung cấp metrics resource cho HPA."
  },
  {
    q: "Which objects can HPA scale according to the slide? (Theo slide, HPA có thể scale object nào?)",
    opts: [
      "Deployment, ReplicaSet, or StatefulSet",
      "Only Namespace",
      "Only Secret",
      "Only Ingress Controller"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Deployment, ReplicaSet, StatefulSet</b><br>HPA điều chỉnh số Pod thông qua target như Deployment, ReplicaSet hoặc StatefulSet.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải scale target chính của HPA."
  },
  {
    q: "What does scaleTargetRef define in HPA YAML? (scaleTargetRef trong HPA YAML định nghĩa gì?)",
    opts: [
      "The object that HPA scales",
      "The namespace DNS only",
      "The Secret data key only",
      "The Helm repository only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Object mà HPA scale</b><br>scaleTargetRef trỏ đến Deployment/ReplicaSet/StatefulSet mà HPA sẽ điều chỉnh replica.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải ý nghĩa scaleTargetRef."
  },
  {
    q: "What do minReplicas and maxReplicas define? (minReplicas và maxReplicas định nghĩa gì?)",
    opts: [
      "Git branch limits",
      "The minimum and maximum limits for number of Pods",
      "Storage access modes only",
      "Ingress host rules only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Giới hạn số Pod tối thiểu/tối đa</b><br>minReplicas và maxReplicas giới hạn phạm vi HPA được scale số lượng Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C thuộc PV/PVC.<br>❌ D thuộc Ingress."
  },
  {
    q: "What is a Kubernetes Volume? (Volume trong Kubernetes là gì?)",
    opts: [
      "A storage mechanism attached to a Pod and mountable into containers",
      "A Git tag",
      "A Docker Hub account",
      "A Helm command only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Storage mechanism gắn với Pod</b><br>Volume cho phép container trong Pod chia sẻ dữ liệu hoặc lưu dữ liệu tạm thời/persistent, mount vào container qua path.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker Registry.<br>❌ D thuộc Helm CLI."
  },
  {
    q: "What is emptyDir volume? (emptyDir volume là gì?)",
    opts: [
      "A permanent cluster-wide storage object only",
      "A temporary volume created when a Pod starts and deleted when the Pod stops",
      "A Service type",
      "A ClusterRoleBinding"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Volume tạm theo lifecycle của Pod</b><br>emptyDir được tạo khi Pod start và bị xóa khi Pod stop, thường dùng để chia sẻ data giữa container trong cùng Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là PV hơn.<br>❌ C là ClusterIP/NodePort...<br>❌ D thuộc RBAC."
  },
  {
    q: "What is a ConfigMap volume used for? (ConfigMap volume dùng để làm gì?)",
    opts: [
      "Provide configuration files to containers",
      "Expose a NodePort",
      "Store etcd cluster state",
      "Create an external load balancer"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Cung cấp file cấu hình cho container</b><br>ConfigMap có thể được mount như Volume để đưa file cấu hình vào container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và D là Service.<br>❌ C là etcd."
  },
  {
    q: "What is a Secret volume used for? (Secret volume dùng để làm gì?)",
    opts: [
      "Store non-sensitive labels only",
      "Expose public HTTP paths",
      "Provide sensitive data such as passwords or tokens to containers",
      "Scale Pods based on CPU"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Cung cấp dữ liệu nhạy cảm cho container</b><br>Secret có thể mount như Volume để đưa password, token, certificate vào container một cách an toàn hơn hard-code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là ConfigMap/labels hơn.<br>❌ B là Ingress.<br>❌ D là HPA."
  },
  {
    q: "What is a DaemonSet? (DaemonSet là gì?)",
    opts: [
      "A tool for Git history",
      "A Docker image tag",
      "A Helm README generator",
      "An object ensuring a Pod runs on every Node in the cluster"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Đảm bảo Pod chạy trên mọi Node</b><br>DaemonSet tự thêm Pod vào node mới và xóa Pod khỏi node bị remove.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker.<br>❌ C không đúng."
  },
  {
    q: "What happens when a new Node is added to a DaemonSet-managed cluster? (Khi thêm Node mới vào cluster có DaemonSet thì sao?)",
    opts: [
      "DaemonSet automatically adds a Pod to that Node",
      "DaemonSet deletes etcd",
      "DaemonSet disables all Services",
      "DaemonSet creates a Helm chart"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Tự thêm Pod vào Node mới</b><br>DaemonSet đảm bảo mỗi node có Pod cần thiết, nên node mới sẽ được thêm Pod tự động.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải hành vi DaemonSet."
  },
  {
    q: "Which use case is suitable for DaemonSet? (Use case nào phù hợp DaemonSet?)",
    opts: [
      "Only Git branch naming",
      "Logging agents, monitoring agents, networking plugins, security agents on every Node",
      "Only frontend UI mockup",
      "Only Helm release history"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Agent chạy trên mọi node</b><br>DaemonSet thường dùng cho Fluentd, Prometheus Node Exporter, Calico/Flannel/Cilium, security monitoring agents.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C không liên quan.<br>❌ D thuộc Helm."
  },
  {
    q: "What is Ingress? (Ingress là gì?)",
    opts: [
      "A storage claim",
      "A Pod autoscaler",
      "An object for managing HTTP/HTTPS traffic to applications inside the cluster",
      "A Dockerfile command"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Quản lý HTTP/HTTPS traffic vào cluster</b><br>Ingress định nghĩa rule để route traffic bên ngoài vào app trong cluster theo host/path và có thể dùng TLS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là PVC.<br>❌ B là HPA.<br>❌ D thuộc Docker."
  },
  {
    q: "What can Ingress provide? (Ingress có thể cung cấp gì?)",
    opts: [
      "Only Git commit history",
      "Only PV binding",
      "Only Pod replica count",
      "Hostname routing, path-based routing, and TLS"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Host routing, path routing, TLS</b><br>Ingress hỗ trợ route theo hostname, URL path và thiết lập HTTPS bằng TLS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc PV/PVC.<br>❌ C thuộc Deployment/HPA."
  },
  {
    q: "What is an Ingress Resource? (Ingress Resource là gì?)",
    opts: [
      "A manifest defining HTTP/HTTPS routing rules",
      "A Docker container runtime",
      "A GitHub issue",
      "A memory unit"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Manifest định nghĩa routing rules</b><br>Ingress Resource định nghĩa rule HTTP/HTTPS như host-based routing và path-based routing.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là containerd/CRI-O.<br>❌ C thuộc GitHub.<br>❌ D là MiB/GiB."
  },
  {
    q: "What is required for an Ingress Resource to work? (Ingress Resource cần gì để hoạt động?)",
    opts: [
      "A Dockerfile only",
      "An active Ingress Controller",
      "Only a Git branch",
      "Only a ConfigMap"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Ingress Controller</b><br>Ingress Resource chỉ là rule; cần Ingress Controller active để đọc rule và route traffic thật.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không đủ để Ingress hoạt động."
  },
  {
    q: "Which is a popular Ingress Controller? (Ingress Controller phổ biến nào?)",
    opts: [
      "GitHub Actions",
      "Docker Compose",
      "NGINX Ingress Controller",
      "Maven Central"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: NGINX Ingress Controller</b><br>Slide nhắc NGINX Ingress Controller là loại phổ biến nhất; ngoài ra còn Traefik và HAProxy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CI/CD.<br>❌ B là Docker local orchestration.<br>❌ D là package repository Java."
  },
  {
    q: "What does host-based routing mean in Ingress? (Host-based routing trong Ingress nghĩa là gì?)",
    opts: [
      "Route traffic based on hostname such as example.com",
      "Route traffic based only on CPU usage",
      "Route traffic based only on PVC size",
      "Route traffic based on Git commit hash"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Route theo hostname</b><br>Host-based routing route request dựa trên hostname/domain, ví dụ api.example.com hoặc example.com.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là metrics/HPA.<br>❌ C thuộc storage.<br>❌ D thuộc Git."
  },
  {
    q: "What does path-based routing mean in Ingress? (Path-based routing trong Ingress nghĩa là gì?)",
    opts: [
      "Route based on file size",
      "Route based on URL paths such as /api or /frontend",
      "Route based on memory limits only",
      "Route based on Secret type"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Route theo URL path</b><br>Path-based routing cho phép /api đi đến backend API và /frontend đi đến frontend service chẳng hạn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C thuộc resource management.<br>❌ D thuộc Secret."
  },
  {
    q: "How is CPU measured in Kubernetes resource management? (CPU được đo như thế nào trong Kubernetes resource management?)",
    opts: [
      "Only in bytes",
      "Only in YAML lines",
      "In millicores, where 1000m = 1 CPU",
      "Only in Git commits"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Millicores, 1000m = 1 CPU</b><br>CPU trong Kubernetes thường dùng millicores; ví dụ 500m nghĩa là 50% của một CPU core.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là memory.<br>❌ B không liên quan.<br>❌ D thuộc Git."
  },
  {
    q: "What does 500m CPU mean? (500m CPU nghĩa là gì?)",
    opts: [
      "500 full CPU cores",
      "500 MiB memory",
      "No CPU usage",
      "50% of one CPU core"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: 50% của một CPU core</b><br>Vì 1000m = 1 CPU, nên 500m tương đương 0.5 CPU core.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá lớn và sai.<br>❌ B là memory.<br>❌ C sai."
  },
  {
    q: "How is memory measured in Kubernetes? (Memory trong Kubernetes được đo như thế nào?)",
    opts: [
      "In bytes such as MiB and GiB",
      "Only in millicores",
      "Only in Git tags",
      "Only in HTTP paths"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Bytes, MiB, GiB</b><br>Memory được đo bằng byte và các đơn vị như MiB/GiB; ví dụ 512Mi là 512 MiB memory.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là CPU.<br>❌ C thuộc Git.<br>❌ D thuộc Ingress."
  },
  {
    q: "What are resource Requests? (Resource Requests là gì?)",
    opts: [
      "The maximum amount of resources a container can use",
      "The minimum amount of resources a container requires",
      "Only external DNS rules",
      "Only Helm release names"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Lượng tài nguyên tối thiểu container cần</b><br>Kubernetes dùng Requests để schedule Pod lên Node có đủ tài nguyên khả dụng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Limits.<br>❌ C thuộc Ingress/ExternalName.<br>❌ D thuộc Helm."
  },
  {
    q: "What are resource Limits? (Resource Limits là gì?)",
    opts: [
      "The namespace name only",
      "The Service selector only",
      "The maximum amount of resources a container is allowed to use",
      "The Helm chart version only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Lượng tài nguyên tối đa được phép dùng</b><br>Limits giới hạn container không được vượt quá tài nguyên đã cấu hình như CPU/RAM.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải resource limits."
  },
  {
    q: "In the slide example, what does a memory request of 64Mi mean? (Trong ví dụ slide, memory request 64Mi nghĩa là gì?)",
    opts: [
      "The node should have at least 64Mi memory available for the Pod",
      "The Pod can use infinite memory",
      "The Pod cannot use memory",
      "The cluster deletes the Pod immediately"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Node cần có ít nhất 64Mi khả dụng</b><br>Request là lượng tài nguyên tối thiểu Kubernetes đảm bảo khi schedule Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là không giới hạn, sai.<br>❌ C sai.<br>❌ D không liên quan."
  },
  {
    q: "In the slide example, what does a memory limit of 128Mi mean? (Trong ví dụ slide, memory limit 128Mi nghĩa là gì?)",
    opts: [
      "The Pod requests exactly 128 CPUs",
      "The container is restricted to a maximum of 128Mi memory",
      "The Service exposes port 128",
      "The Namespace is renamed to 128Mi"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Container tối đa dùng 128Mi memory</b><br>Limit là mức trần tài nguyên container được phép sử dụng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai đơn vị.<br>❌ C không liên quan.<br>❌ D vô lý."
  },
  {
    q: "What does RBAC stand for? (RBAC là viết tắt của gì?)",
    opts: [
      "Runtime Binary Access Config",
      "Remote Backup Auto Controller",
      "Role-Based Access Control",
      "Resource Build Automation Command"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Role-Based Access Control</b><br>RBAC là cơ chế kiểm soát truy cập dựa trên role và action được phép thực hiện.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D không phải nghĩa RBAC."
  },
  {
    q: "What does RBAC allow you to control? (RBAC cho phép kiểm soát điều gì?)",
    opts: [
      "Only Docker image size",
      "Only Helm chart README",
      "Only URL path style",
      "Who can do what on which resources"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Ai được làm gì trên resource nào</b><br>RBAC cung cấp fine-grained control cho user/group/service account trên tài nguyên Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Helm docs.<br>❌ C thuộc Ingress."
  },
  {
    q: "What is a Role in RBAC? (Role trong RBAC là gì?)",
    opts: [
      "A set of permissions within a single Namespace",
      "A cluster-wide DNS record only",
      "A Docker image label",
      "A Helm release history"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Permission trong một Namespace</b><br>Role định nghĩa các quyền như get, list, create trên resource cụ thể trong phạm vi một Namespace.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không phải Role.<br>❌ C thuộc Docker.<br>❌ D thuộc Helm."
  },
  {
    q: "What is a ClusterRole? (ClusterRole là gì?)",
    opts: [
      "A role only for one Pod",
      "Similar to Role but applies across the entire cluster",
      "A Secret type",
      "A Service endpoint"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Role áp dụng toàn cluster</b><br>ClusterRole giống Role nhưng có scope toàn cluster, dùng cho resource không thuộc namespace như Nodes, PV.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá hẹp.<br>❌ C thuộc Secret.<br>❌ D thuộc Service."
  },
  {
    q: "What does RoleBinding do? (RoleBinding làm gì?)",
    opts: [
      "Deletes all Roles",
      "Creates a Docker image",
      "Binds a Role to a user or group within a specific Namespace",
      "Creates an Ingress Controller"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Gắn Role với user/group trong Namespace</b><br>RoleBinding cấp các quyền của Role cho user/group/service account trong một namespace cụ thể.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B thuộc Docker.<br>❌ D không phải RBAC."
  },
  {
    q: "What does ClusterRoleBinding do? (ClusterRoleBinding làm gì?)",
    opts: [
      "Binds a ClusterRole to a user/group across the entire cluster",
      "Binds only a PVC to PV",
      "Binds only a Service to Pod",
      "Binds only a Docker tag"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Gắn ClusterRole trên phạm vi toàn cluster</b><br>ClusterRoleBinding cấp quyền ClusterRole cho user/group/service account trên toàn cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc storage binding.<br>❌ C thuộc Service selector/endpoints.<br>❌ D thuộc Docker."
  },
  {
    q: "What is a Network Policy in Kubernetes? (Network Policy trong Kubernetes là gì?)",
    opts: [
      "A Git branching rule",
      "A resource used to control network traffic to and from Pods within a Namespace",
      "A Helm metadata file",
      "A Docker image layer"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Kiểm soát traffic đến/đi từ Pod</b><br>NetworkPolicy cho phép permit/block traffic dựa trên source, destination, port, protocol, labels.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C là Chart.yaml.<br>❌ D thuộc Docker."
  },
  {
    q: "If no Network Policy is applied, what is the default traffic behavior? (Nếu không có Network Policy thì mặc định traffic như thế nào?)",
    opts: [
      "All traffic between Pods is denied by default",
      "Only HTTPS is allowed",
      "All network traffic between Pods is allowed by default",
      "Only traffic from kube-system is allowed"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Mặc định cho phép traffic giữa Pod</b><br>Theo slide, nếu không áp dụng NetworkPolicy, traffic giữa Pod trong cluster được cho phép mặc định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược với default behavior trong slide.<br>❌ B, D không đúng mặc định."
  },
  {
    q: "Which conditions can Network Policies use? (Network Policies có thể dựa trên điều kiện nào?)",
    opts: [
      "Only Git commit message",
      "Only Helm version",
      "Only Dockerfile line number",
      "Source/destination, port, protocol, and Pod labels"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Source/destination, port, protocol, labels</b><br>NetworkPolicy cho phép kiểm soát traffic dựa trên nhiều điều kiện network và label của Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải điều kiện NetworkPolicy."
  },
  {
    q: "Which CNI plugins support Network Policies according to the slide? (CNI plugin nào hỗ trợ Network Policies theo slide?)",
    opts: [
      "Calico, Cilium, Flannel, Weave Net",
      "Git, SVN, Mercurial",
      "Jenkins, CircleCI, Travis",
      "MySQL, Redis, PostgreSQL"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Calico, Cilium, Flannel, Weave Net</b><br>Kubernetes cần CNI plugin hỗ trợ NetworkPolicy, ví dụ Calico, Cilium, Flannel, Weave Net.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là VCS.<br>❌ C là CI/CD.<br>❌ D là database."
  },
  {
    q: "What is Helm? (Helm là gì?)",
    opts: [
      "A Dockerfile instruction",
      "A package management tool for Kubernetes",
      "A Git merge strategy",
      "A Linux namespace"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Package manager cho Kubernetes</b><br>Helm giúp define, install, update Kubernetes applications thông qua Helm Charts.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ C thuộc Git.<br>❌ D thuộc Linux container."
  },
  {
    q: "What is a Helm Chart? (Helm Chart là gì?)",
    opts: [
      "A collection of Kubernetes resources packaged in a structured directory format",
      "A single Git commit",
      "A Docker container log only",
      "A memory request unit"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Gói resource Kubernetes theo cấu trúc thư mục</b><br>Helm Chart chứa YAML template, metadata, default values và file cấu hình để deploy app Kubernetes dễ hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker logs.<br>❌ D thuộc resource management."
  },
  {
    q: "What does Chart.yaml contain? (Chart.yaml chứa gì?)",
    opts: [
      "Only Secret password",
      "Only Pod logs",
      "Metadata of the chart such as name, version, and description",
      "Only CPU metrics"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Metadata của chart</b><br>Chart.yaml lưu metadata như name, version, description của Helm Chart.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Secret.<br>❌ B là log.<br>❌ D là metrics."
  },
  {
    q: "What does values.yaml contain? (values.yaml chứa gì?)",
    opts: [
      "Only Git tags",
      "Only Docker layers",
      "Only etcd backups",
      "Default configuration values for the chart"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Default configuration values</b><br>values.yaml chứa giá trị cấu hình mặc định, có thể override khi install/upgrade chart.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker.<br>❌ C không phải vai trò values.yaml."
  },
  {
    q: "What is the templates/ directory in a Helm Chart used for? (Thư mục templates/ trong Helm Chart dùng để làm gì?)",
    opts: [
      "YAML templates for Kubernetes resources",
      "Only source code compilation",
      "Only storing browser cache",
      "Only storing Git branches"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: YAML templates cho Kubernetes resources</b><br>templates/ chứa template YAML cho Pod, Deployment, Service, ConfigMap... được render theo values.yaml.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B, C, D không phải vai trò templates/."
  },
  {
    q: "Which is a benefit of Helm? (Lợi ích của Helm là gì?)",
    opts: [
      "It disables CI/CD pipelines",
      "It automates deployment, updates, and rollbacks",
      "It removes Kubernetes resources permanently",
      "It only works without YAML"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Tự động deploy/update/rollback</b><br>Helm giúp tái sử dụng cấu hình, chia sẻ app Kubernetes và tích hợp dễ với CI/CD pipeline.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược lại.<br>❌ C không phải lợi ích.<br>❌ D sai vì Helm dùng YAML/template."
  },
  {
    q: "Which command installs a Helm chart? (Lệnh nào cài Helm chart?)",
    opts: [
      "helm delete-chart-only",
      "helm list",
      "helm install [release-name] [helm-repo-name] -f [value-file] --namespace [namespace]",
      "kubectl describe helm"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: helm install</b><br>helm install dùng để cài một chart thành release trong namespace chỉ định, có thể truyền file values bằng -f.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng lệnh.<br>❌ B chỉ liệt kê release.<br>❌ D không phải lệnh Helm install."
  },
  {
    q: "Which command lists Helm releases? (Lệnh nào liệt kê Helm release?)",
    opts: [
      "docker ps",
      "kubectl get git",
      "helm compile",
      "helm list"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: helm list</b><br>helm list dùng để kiểm tra danh sách release Helm đang được cài trong cluster/namespace.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Docker.<br>❌ B không đúng.<br>❌ C không phải lệnh Helm cơ bản trong slide."
  },
  {
    q: "Which command updates a Helm release? (Lệnh nào update Helm release?)",
    opts: [
      "helm upgrade [release-name] [helm-repo-name] -f [value-file] --namespace [namespace]",
      "helm init-pod",
      "docker upgrade image",
      "git helm push"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: helm upgrade</b><br>helm upgrade cập nhật release bằng chart và values mới trong namespace chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không phải lệnh chuẩn trong slide.<br>❌ C không phải Docker command.<br>❌ D không đúng."
  },
  {
    q: "Which command deletes a Helm release? (Lệnh nào xóa Helm release?)",
    opts: [
      "helm status [release-name]",
      "helm uninstall [release-name] --namespace [namespace]",
      "helm history [release-name]",
      "kubectl delete helmfile only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: helm uninstall</b><br>helm uninstall xóa release Helm khỏi namespace chỉ định.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem status.<br>❌ C xem history.<br>❌ D không phải lệnh trong slide."
  },
  {
    q: "Which command checks the status of a Helm release? (Lệnh nào kiểm tra status của Helm release?)",
    opts: [
      "helm history [release-name]",
      "helm delete status",
      "helm status [release-name]",
      "docker status helm"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: helm status</b><br>helm status my-nginx dùng để xem trạng thái release cụ thể.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xem lịch sử release.<br>❌ B sai cú pháp.<br>❌ D không đúng."
  },
  {
    q: "Which command views the history of a Helm release? (Lệnh nào xem history của Helm release?)",
    opts: [
      "kubectl history pod",
      "docker history helm",
      "git history helm",
      "helm history [release-name]"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: helm history</b><br>helm history hiển thị lịch sử revision của một release, hữu ích khi cần audit hoặc rollback.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải lệnh Helm history."
  }
];
