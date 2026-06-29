// 09. Service Mesh with Istio and Kiali (80 câu)
// Đáp án chia đều: ans 0/1/2/3 mỗi loại 20 câu
DEVOPS_QUIZ_DATA.topics[8].questions = [
  {
    q: "What is a monolithic application? (Monolithic application là gì?)",
    opts: [
      "An application built as a single executable unit and usually a single process (Ứng dụng được xây như một đơn vị executable duy nhất, thường là một process)",
      "An application split into hundreds of independent services (Ứng dụng tách thành hàng trăm service độc lập)",
      "A Kubernetes object used only for routing traffic (Object Kubernetes chỉ dùng route traffic)",
      "A tool for observing Istio traffic (Công cụ quan sát traffic Istio)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Monolith là một khối ứng dụng duy nhất</b><br>Monolithic application thường đóng gói toàn bộ logic trong một executable/process duy nhất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là microservices.<br>❌ C là Service/Ingress/VirtualService tùy ngữ cảnh.<br>❌ D là Kiali."
  },
  {
    q: "In the application evolution slide, what happens after a monolith starts being split? (Trong slide tiến hóa ứng dụng, điều gì xảy ra sau khi monolith bắt đầu được tách?)",
    opts: [
      "The application disappears completely (Ứng dụng biến mất hoàn toàn)",
      "Application modules can become multiple processes (Các module ứng dụng có thể trở thành nhiều process)",
      "All services are replaced by Git branches (Mọi service bị thay bằng Git branch)",
      "Kubernetes is no longer needed (Không cần Kubernetes nữa)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Module có thể tách thành nhiều process</b><br>Slide mô tả quá trình từ một ứng dụng đơn khối sang các module/process riêng biệt trước khi tiến tới microservices.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì app không biến mất.<br>❌ C thuộc Git, không phải kiến trúc app.<br>❌ D sai vì Kubernetes thường dùng để vận hành container/microservices."
  },
  {
    q: "Which is a characteristic of microservices? (Đặc điểm nào của microservices?)",
    opts: [
      "All modules must use the same language (Mọi module bắt buộc dùng cùng ngôn ngữ)",
      "All services must be upgraded together (Mọi service bắt buộc upgrade cùng lúc)",
      "Services can be language agnostic, scaled separately, and upgraded separately (Service có thể độc lập ngôn ngữ, scale riêng và upgrade riêng)",
      "The application must run as exactly one process (Ứng dụng bắt buộc chạy đúng một process)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Microservices độc lập hơn</b><br>Microservices cho phép các service dùng công nghệ khác nhau, scale riêng và nâng cấp riêng theo nhu cầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D là đặc điểm gần với monolith hoặc ràng buộc không đúng."
  },
  {
    q: "What is the purpose of container orchestration? (Mục đích của container orchestration là gì?)",
    opts: [
      "Only editing Dockerfiles manually (Chỉ sửa Dockerfile thủ công)",
      "Only storing source code history (Chỉ lưu lịch sử source code)",
      "Only designing UI screens (Chỉ thiết kế UI)",
      "Running many containers on multiple hosts, scaling replicas, and managing a container-based environment (Chạy nhiều container trên nhiều host, scale replica và quản lý môi trường container)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Orchestration quản lý container ở quy mô lớn</b><br>Container orchestration giúp chạy nhiều container trên nhiều host, quản lý replica, scale và vận hành môi trường container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Dockerfile editing.<br>❌ B là Git/VCS.<br>❌ C là UI/UX."
  },
  {
    q: "Which platforms are shown as container orchestration platforms? (Platform nào được show là container orchestration platform?)",
    opts: [
      "Kubernetes and OKD/OpenShift",
      "Photoshop and Figma",
      "Git and SVN",
      "Prometheus and Grafana only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Kubernetes và OKD/OpenShift</b><br>Slide nêu Kubernetes và OKD/OpenShift như các nền tảng orchestration container.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là design tools.<br>❌ C là version control.<br>❌ D là monitoring/visualization tools."
  },
  {
    q: "What is a Pod in Kubernetes according to the slide? (Theo slide, Pod trong Kubernetes là gì?)",
    opts: [
      "A Git branch that stores manifests (Git branch lưu manifest)",
      "A group of one or more containers with shared storage and network (Nhóm một hoặc nhiều container chia sẻ storage và network)",
      "A service mesh observability tool (Công cụ observability cho service mesh)",
      "A type of Istio authorization policy only (Một loại policy authorization của Istio)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Pod là nhóm container chia sẻ storage/network</b><br>Pod là đơn vị cơ bản trong Kubernetes, có thể chứa một hoặc nhiều container cùng chia sẻ network/storage.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc GitOps.<br>❌ C là Kiali.<br>❌ D không phải Pod."
  },
  {
    q: "What does a Kubernetes Deployment manage? (Kubernetes Deployment quản lý gì?)",
    opts: [
      "Only external DNS names (Chỉ tên DNS external)",
      "Only Git commit messages (Chỉ Git commit message)",
      "Pod definition and replicas of Pods (Định nghĩa Pod và số replica của Pod)",
      "Only Kiali dashboards (Chỉ dashboard Kiali)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Deployment quản lý Pod definition và replicas</b><br>Deployment định nghĩa cách tạo Pod và số lượng replica cần duy trì.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc DNS/Ingress/Service.<br>❌ B thuộc Git.<br>❌ D thuộc observability."
  },
  {
    q: "What is a Kubernetes Service in the slide? (Service trong Kubernetes theo slide là gì?)",
    opts: [
      "A database table (Một bảng database)",
      "A Dockerfile instruction (Một instruction Dockerfile)",
      "A GitHub Pull Request (Một Pull Request GitHub)",
      "An abstraction and access point to a set of Pods (Một abstraction và access point tới một nhóm Pod)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Service là access point tới Pod</b><br>Kubernetes Service cung cấp điểm truy cập ổn định tới một tập hợp Pod, đôi khi được gọi là microservice trong slide.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải Kubernetes Service.<br>❌ B thuộc Docker.<br>❌ C thuộc GitHub."
  },
  {
    q: "Why do microservices increase complexity? (Vì sao microservices làm tăng độ phức tạp?)",
    opts: [
      "Because there are many services and multiple points of failure (Vì có nhiều service và nhiều điểm có thể lỗi)",
      "Because there is always only one process (Vì luôn chỉ có một process)",
      "Because there is no network communication (Vì không có giao tiếp network)",
      "Because every module is compiled into one binary only (Vì mọi module compile vào một binary)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Nhiều service tạo nhiều failure points</b><br>Khi hệ thống tách thành nhiều service, request đi qua nhiều điểm nên routing, failure detection, security và upgrade phức tạp hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/D là monolith hơn.<br>❌ C sai vì microservices giao tiếp qua network."
  },
  {
    q: "Which is a challenge of microservices mentioned in the slide? (Challenge nào của microservices được nhắc trong slide?)",
    opts: [
      "How to delete all source code? (Làm sao xóa toàn bộ source code?)",
      "How are requests routed between services? (Request được route giữa các service như thế nào?)",
      "How to avoid all monitoring forever? (Làm sao tránh monitoring mãi mãi?)",
      "How to remove all service communication? (Làm sao loại bỏ mọi giao tiếp service?)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Routing giữa các service</b><br>Slide nêu các challenge như routing request giữa service, phát hiện failure/downtime, upgrade/test version mới và bảo mật communication.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải mục tiêu.<br>❌ C sai vì monitoring rất cần.<br>❌ D sai vì microservices cần giao tiếp."
  },
  {
    q: "Which challenge relates to reliability in microservices? (Challenge nào liên quan đến reliability trong microservices?)",
    opts: [
      "Choosing UI colors (Chọn màu UI)",
      "Writing Git commit messages (Viết commit message)",
      "Detecting failures and downtime (Phát hiện failure và downtime)",
      "Deleting namespaces manually (Xóa namespace thủ công)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Detect failures and downtime</b><br>Trong microservices, một request có thể phụ thuộc nhiều service, nên phát hiện lỗi/downtime là challenge quan trọng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là UI.<br>❌ B thuộc Git.<br>❌ D không phải challenge chính trong slide."
  },
  {
    q: "What security challenge appears in microservices? (Challenge bảo mật nào xuất hiện trong microservices?)",
    opts: [
      "Hiding all dashboards (Ẩn toàn bộ dashboard)",
      "Removing all authentication (Loại bỏ authentication)",
      "Avoiding all network traffic (Tránh mọi network traffic)",
      "Securing communication between services (Bảo mật giao tiếp giữa các service)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Securing service-to-service communication</b><br>Khi nhiều service giao tiếp qua network, cần bảo mật communication, xác thực và phân quyền giữa các service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải challenge cốt lõi.<br>❌ B nguy hiểm.<br>❌ C không thực tế với microservices."
  },
  {
    q: "What is a service mesh? (Service mesh là gì?)",
    opts: [
      "An infrastructure/framework that handles communication between services (Infrastructure/framework xử lý giao tiếp giữa các service)",
      "A Git branching strategy (Chiến lược branch Git)",
      "A Docker image registry (Registry Docker image)",
      "A database backup tool (Công cụ backup database)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Service mesh xử lý communication giữa service</b><br>Service mesh cung cấp lớp hạ tầng để quản lý giao tiếp service-to-service như routing, security, retry, timeout, metrics và tracing.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker Registry.<br>❌ D thuộc database."
  },
  {
    q: "How is a service mesh often implemented? (Service mesh thường được implement như thế nào?)",
    opts: [
      "As a single README file (Như một file README duy nhất)",
      "As network proxies deployed alongside microservices (Bằng các network proxy được deploy cạnh microservice)",
      "As Git tags only (Chỉ bằng Git tag)",
      "As manual SSH scripts only (Chỉ bằng script SSH thủ công)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Network proxy cạnh microservice</b><br>Service mesh thường dùng proxy sidecar chạy cạnh mỗi instance microservice để xử lý traffic một cách trong suốt.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá đơn giản.<br>❌ C thuộc Git.<br>❌ D không phải service mesh."
  },
  {
    q: "What is Istio? (Istio là gì?)",
    opts: [
      "A UI design tool (Công cụ thiết kế UI)",
      "A local version control system (Hệ thống version control local)",
      "An open-source service mesh (Service mesh mã nguồn mở)",
      "A relational database (Cơ sở dữ liệu quan hệ)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Istio là open-source service mesh</b><br>Istio cung cấp traffic management, security, policy, metrics và tracing cho microservices.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Figma/Sketch.<br>❌ B là RCS kiểu cũ.<br>❌ D là MySQL/PostgreSQL."
  },
  {
    q: "What problem does Istio help reduce in microservices? (Istio giup giam van de gi trong microservices?)",
    opts: [
      "Lack of any source control (Khong co source control)",
      "Need to store Docker images publicly (Can luu Docker image cong khai)",
      "Need to rewrite every service into one language (Phai viet lai moi service bang mot ngon ngu)",
      "Duplicating traffic-management and security logic inside each service (Lap lai logic traffic va security trong tung service)"
    ],
    ans: 3,
    exp: "<b>✅ Dap an dung la D: Giam lap lai logic trong tung service</b><br>Istio dua traffic management, security va observability xuong mesh layer, giup service khong phai tu nhung qua nhieu logic giao tiep vao business code.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ A khong lien quan service mesh.<br>❌ B la bai toan registry, khong phai Istio.<br>❌ C trai voi tinh chat language-agnostic cua microservices."
  },
  {
    q: "Why is Istio useful in a language-agnostic microservices architecture? (Vi sao Istio huu ich trong kien truc microservices da ngon ngu?)",
    opts: [
      "It provides a common traffic and security layer regardless of service language (No cung cap mot lop traffic va security chung bat ke service dung ngon ngu nao)",
      "It forces every service to use only Go (No bat moi service chi duoc dung Go)",
      "It removes the need for networking between services (No loai bo nhu cau giao tiep mang giua cac service)",
      "It stores all source code history for the services (No luu toan bo lich su source code)"
    ],
    ans: 0,
    exp: "<b>✅ Dap an dung la A: Cung cap lop chung doc lap ngon ngu</b><br>Vi Istio xu ly routing, retry, timeout, mTLS va observability o mesh layer, cac service co the dung nhieu ngon ngu khac nhau ma van duoc ap dung chinh sach nhat quan.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ B trai voi kien truc da ngon ngu.<br>❌ C sai vi service van can giao tiep qua network.<br>❌ D la vai tro cua Git, khong phai Istio."
  },
  {
    q: "Istio is developed in which programming language? (Istio được phát triển bằng ngôn ngữ nào?)",
    opts: [
      "Ruby",
      "Go",
      "PHP",
      "Swift"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Go</b><br>Slide dry facts nêu Istio được developed in Go.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải ngôn ngữ được slide nêu cho Istio."
  },
  {
    q: "Which protocols are mentioned for Istio load balancing? (Protocol nào được nhắc cho Istio load balancing?)",
    opts: [
      "Only SMTP and FTP",
      "Only SSH",
      "HTTP, gRPC, TCP and more",
      "Only DNS"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: HTTP, gRPC, TCP...</b><br>Istio hỗ trợ load balancing cho nhiều protocol như HTTP, gRPC, TCP.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D quá hẹp và không đúng nội dung slide."
  },
  {
    q: "Which is an Istio traffic control feature? (Đâu là feature traffic control của Istio?)",
    opts: [
      "Git rebase",
      "Docker image tagging",
      "Database indexing",
      "Routing rules, retries, timeouts, fault injection, and mirroring"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Routing, retries, timeouts, fault injection, mirroring</b><br>Istio traffic control hỗ trợ routing rules, retry, timeout, fault injection và traffic mirroring.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker.<br>❌ C thuộc database."
  },
  {
    q: "Which Istio feature helps protect service-to-service communication? (Feature nào của Istio giúp bảo vệ giao tiếp service-to-service?)",
    opts: [
      "Secure service-to-service communication",
      "Deleting all logs",
      "Disabling all authentication",
      "Removing all proxies"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Secure service-to-service communication</b><br>Istio hỗ trợ bảo mật giao tiếp giữa service, ví dụ bằng mutual TLS và policy kiểm soát truy cập.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B làm mất observability.<br>❌ C nguy hiểm.<br>❌ D loại bỏ cơ chế service mesh."
  },
  {
    q: "What observability data can Istio provide? (Istio có thể cung cấp dữ liệu observability nào?)",
    opts: [
      "Only Git commit count (Chỉ số lượng commit Git)",
      "Metrics and traces for traffic (Metrics và traces cho traffic)",
      "Only database schema (Chỉ schema database)",
      "Only UI color palette (Chỉ bảng màu UI)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Metrics và traces</b><br>Istio cung cấp metrics và traces cho traffic giữa các service, giúp quan sát và debug hệ thống phân tán.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git analytics.<br>❌ C thuộc database.<br>❌ D thuộc UI."
  },
  {
    q: "In Istio terminology, what is a Workload? (Trong thuật ngữ Istio, Workload là gì?)",
    opts: [
      "Only a Docker image tag (Chỉ là tag Docker image)",
      "Only a Git branch (Chỉ là Git branch)",
      "Anything owning/controlling Pods, like a Deployment, or the Pods themselves (Bất kỳ thứ gì sở hữu/điều khiển Pod như Deployment, hoặc chính Pod)",
      "Only a Kiali graph edge (Chỉ là cạnh graph Kiali)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Workload là object/pod chạy workload</b><br>Slide định nghĩa Workload là thứ sở hữu hoặc điều khiển Pod như Deployment, hoặc chính Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ D không phải định nghĩa Workload."
  },
  {
    q: "In Istio terminology, what is an Application? (Trong thuật ngữ Istio, Application là gì?)",
    opts: [
      "A Kubernetes Service only (Chỉ là Kubernetes Service)",
      "A Docker volume only (Chỉ là Docker volume)",
      "A Git tag only (Chỉ là Git tag)",
      "The label “app” on a Pod or Service (Label “app” trên Pod hoặc Service)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Application là label app</b><br>Slide nói Application tương ứng với label “app” trên Pod/Service trong Istio/Kiali context.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá hẹp.<br>❌ B thuộc Docker storage.<br>❌ C thuộc Git."
  },
  {
    q: "In Istio terminology, what is Version? (Trong thuật ngữ Istio, Version là gì?)",
    opts: [
      "The label “version” on a Pod or Service (Label “version” trên Pod hoặc Service)",
      "A Kubernetes Namespace only (Chỉ là Namespace Kubernetes)",
      "A database backup version only (Chỉ là version backup database)",
      "A Jenkins build number only (Chỉ là build number Jenkins)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Version là label version</b><br>Istio/Kiali dùng label version để phân biệt các version khác nhau của một application/service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không phải định nghĩa Version trong slide."
  },
  {
    q: "Before Istio, where were routing and circuit breaker logic often implemented? (Trước Istio, routing và circuit breaker logic thường nằm ở đâu?)",
    opts: [
      "Only in Kiali UI (Chỉ trong UI Kiali)",
      "Inside each application/service codebase (Trong codebase của từng application/service)",
      "Only in Git tags (Chỉ trong Git tag)",
      "Only in Docker Registry (Chỉ trong Docker Registry)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Nằm trong code từng service</b><br>Slide Before Istio minh họa routing code và circuit breaker code nằm cùng business logic trong từng container/service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A Kiali chỉ quan sát/quản lý.<br>❌ C/D không xử lý runtime traffic."
  },
  {
    q: "What is the main benefit of Istio sidecar compared to putting routing logic in app code? (Lợi ích chính của sidecar Istio so với nhúng routing logic vào app code là gì?)",
    opts: [
      "It removes all business logic (Nó xóa toàn bộ business logic)",
      "It forces all services to use one language (Nó ép mọi service dùng một ngôn ngữ)",
      "Traffic behavior can be managed transparently outside application code (Traffic behavior có thể được quản lý trong suốt bên ngoài app code)",
      "It disables network communication (Nó tắt giao tiếp network)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Tách traffic logic khỏi app code</b><br>Istio sidecar xử lý routing, retry, timeout, circuit breaker... mà không cần sửa business logic của service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì business logic vẫn ở app.<br>❌ B sai vì microservices language agnostic.<br>❌ D sai vì sidecar xử lý communication."
  },
  {
    q: "What is a Sidecar Proxy in Istio? (Sidecar Proxy trong Istio là gì?)",
    opts: [
      "A Git branch for each service (Git branch cho từng service)",
      "A database replica (Replica database)",
      "A UI panel in Kiali only (Một panel UI trong Kiali)",
      "A proxy container deployed next to each microservice instance inside the Pod (Proxy container được deploy cạnh mỗi instance microservice trong Pod)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Proxy container cạnh microservice</b><br>Sidecar proxy chạy trong cùng Pod với application container để intercept và xử lý traffic vào/ra service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc database.<br>❌ C Kiali chỉ quan sát/cấu hình."
  },
  {
    q: "What is the container name of Istio sidecar proxy? (Tên container của Istio sidecar proxy là gì?)",
    opts: [
      "istio-proxy",
      "kiali-ui",
      "gitops-agent",
      "docker-registry"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: istio-proxy</b><br>Slide Sidecar Proxy nêu container name là istio-proxy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Kiali UI.<br>❌ C thuộc GitOps.<br>❌ D là registry."
  },
  {
    q: "Which proxy is currently used by Istio sidecar according to the slide? (Theo slide, Istio sidecar hiện dùng proxy nào?)",
    opts: [
      "NGINX only",
      "Envoy open source proxy",
      "HAProxy only",
      "Apache httpd only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Envoy</b><br>Slide nêu Envoy open source proxy hiện được dùng làm sidecar proxy trong Istio.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D là proxy/server khác nhưng không phải đáp án slide."
  },
  {
    q: "How can Istio sidecar be injected? (Istio sidecar có thể được inject như thế nào?)",
    opts: [
      "Only by editing application source code (Chỉ sửa source code app)",
      "Only by changing Docker Hub settings (Chỉ đổi setting Docker Hub)",
      "Manually or automatically when Pods are created (Thủ công hoặc tự động khi Pod được tạo)",
      "Only by deleting the namespace (Chỉ bằng cách xóa namespace)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Manual hoặc automatic injection</b><br>Sidecar có thể được inject thủ công hoặc tự động khi Pod được tạo.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì transparent to app code.<br>❌ B không liên quan.<br>❌ D sai."
  },
  {
    q: "Which command enables automatic Istio sidecar injection for the default namespace in the slide? (Lệnh nào enable automatic sidecar injection cho namespace default?)",
    opts: [
      "kubectl delete namespace default",
      "kubectl expose namespace default",
      "kubectl get namespace default --watch",
      "kubectl label namespace default istio-injection=enabled"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: kubectl label namespace default istio-injection=enabled</b><br>Slide ghi lệnh label namespace để bật tự động inject sidecar khi Pod được tạo.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A xóa namespace.<br>❌ B sai cú pháp/mục đích.<br>❌ C chỉ xem namespace."
  },
  {
    q: "Which Kubernetes mechanism is used for automatic sidecar injection? (Cơ chế Kubernetes nào được dùng cho automatic sidecar injection?)",
    opts: [
      "Mutating Admission Webhook",
      "Git pre-commit hook",
      "Docker image layer cache",
      "Jenkins shared library"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Mutating Admission Webhook</b><br>Slide ghi Mutating Admission Webhook được dùng để inject sidecar vào Pod khi Pod được tạo.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker build.<br>❌ D thuộc Jenkins."
  },
  {
    q: "Which two containers are actually injected according to the slide? (Theo slide, thực tế có hai container nào được inject?)",
    opts: [
      "kiali-ui and jaeger-agent",
      "istio-init and istio-proxy",
      "nginx and redis",
      "prometheus and grafana"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: istio-init và istio-proxy</b><br>Slide ghi actually 2 containers are injected: istio-init and istio-proxy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải cặp container inject trong slide."
  },
  {
    q: "What does the Istio sidecar intercept? (Istio sidecar intercept cái gì?)",
    opts: [
      "Only Git commits (Chỉ Git commit)",
      "Only local shell history (Chỉ lịch sử shell local)",
      "All traffic to and from the service (Toàn bộ traffic vào và ra service)",
      "Only Kiali login requests (Chỉ request login Kiali)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Intercept toàn bộ traffic</b><br>Slide With Istio cho thấy Envoy sidecar intercept HTTP, TCP, TLS... traffic giữa các Pod/service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B không phải runtime traffic.<br>❌ D quá hẹp."
  },
  {
    q: "In Istio, service-to-service communication is described as what? (Trong Istio, giao tiếp service-to-service được mô tả là gì?)",
    opts: [
      "Git-to-Git communication (Giao tiếp Git-to-Git)",
      "Database-to-database only (Chỉ database-to-database)",
      "Browser-to-CSS only (Chỉ browser-to-CSS)",
      "Envoy-to-Envoy communication (Giao tiếp Envoy-to-Envoy)"
    ],
    ans: 3,
    exp: "<b>✅ Dap an dung la D: Envoy-to-Envoy communication</b><br>Trong service mesh, traffic giua cac service duoc xu ly qua cac Envoy sidecar. Cach dien dat nay nhan manh data plane di qua proxy, thay vi nhung logic giao tiep vao trong code cua tung service.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ A/B/C khong mo ta dung traffic path trong Istio."
  },
  {
    q: "What does it mean that Istio configuration is transparent to services? (Istio configuration transparent to services nghĩa là gì?)",
    opts: [
      "It is not part of the application code (Nó không nằm trong application code)",
      "It requires rewriting all business logic (Nó bắt buộc viết lại toàn bộ business logic)",
      "It deletes all service code (Nó xóa toàn bộ service code)",
      "It disables all network policies (Nó tắt toàn bộ network policy)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Không nằm trong app code</b><br>Istio routing/security behavior được cấu hình ở mesh/proxy layer, không cần nhúng logic đó vào business code.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C sai.<br>❌ D không phải ý nghĩa transparent."
  },
  {
    q: "Which routing scenarios are listed for Istio? (Routing scenario nào được liệt kê cho Istio?)",
    opts: [
      "Only database replication (Chỉ replication database)",
      "A/B testing, traffic shifting, and mirroring traffic (A/B testing, traffic shifting và mirroring traffic)",
      "Only Git merge and rebase (Chỉ Git merge và rebase)",
      "Only Docker pull and push (Chỉ Docker pull và push)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: A/B, traffic shifting, mirroring</b><br>Slide Different routing scenarios nêu A/B testing, traffic shifting/canary và mirroring traffic.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc database.<br>❌ C thuộc Git.<br>❌ D thuộc Docker Registry."
  },
  {
    q: "What is Canary Deployment in Istio traffic shifting? (Canary Deployment trong Istio traffic shifting là gì?)",
    opts: [
      "Sending 100% traffic to old version forever (Gửi 100% traffic tới version cũ mãi mãi)",
      "Deleting all versions except one (Xóa mọi version trừ một)",
      "Routing a small percentage of traffic to a new version first (Route một phần nhỏ traffic tới version mới trước)",
      "Turning off the service mesh (Tắt service mesh)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Route một phần nhỏ traffic tới version mới</b><br>Canary là ví dụ của traffic shifting, ví dụ 90% traffic đến version 1 và 10% đến version 2.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không rollout version mới.<br>❌ B không phải canary.<br>❌ D sai."
  },
  {
    q: "In Istio weighted routing, what is traffic proportion independent of? (Trong weighted routing Istio, tỷ lệ traffic độc lập với điều gì?)",
    opts: [
      "The existence of a Service (Sự tồn tại của Service)",
      "The YAML format (Định dạng YAML)",
      "The service name (Tên service)",
      "The number of instances of a version (Số lượng instance của version đó)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Không phụ thuộc số instance</b><br>Slide Weighted Routing nhấn mạnh tỷ lệ traffic route tới version độc lập với số instance của version đó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phải điểm nhấn trong slide weighted routing."
  },
  {
    q: "In A/B weighted routing example, how can traffic be split? (Trong ví dụ A/B weighted routing, traffic có thể được chia như thế nào?)",
    opts: [
      "50% to version 1 and 50% to version 2 (50% đến version 1 và 50% đến version 2)",
      "Only 100% to one version always (Luôn chỉ 100% đến một version)",
      "Only by number of replicas, not weight (Chỉ theo số replica, không theo weight)",
      "Only by Git commit author (Chỉ theo author commit Git)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: 50/50 traffic split</b><br>Slide Weighted Routing A/B minh họa 50% traffic tới version 1 và 50% tới version 2.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì có weighted split.<br>❌ C sai vì independent of number of instances.<br>❌ D không liên quan."
  },
  {
    q: "In Canary weighted routing example, what split is shown? (Trong ví dụ Canary weighted routing, tỷ lệ nào được show?)",
    opts: [
      "50% and 50%",
      "90% to version 1 and 10% to version 2",
      "100% to version 2",
      "0% to all versions"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: 90% và 10%</b><br>Slide Canary weighted routing minh họa 90% traffic tới version 1 và 10% traffic tới version 2.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là A/B example.<br>❌ C/D không đúng hình minh họa."
  },
  {
    q: "What is Matching Routing with Istio? (Matching Routing với Istio là gì?)",
    opts: [
      "Routing only by CPU usage (Route chỉ theo CPU)",
      "Routing only by number of Pods (Route chỉ theo số Pod)",
      "Routing based on request/user conditions, such as sending user Alissa to version 2 (Route dựa trên điều kiện request/user, ví dụ user Alissa đến version 2)",
      "Routing by Docker image size only (Route theo kích thước Docker image)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Route theo điều kiện request/user</b><br>Slide Matching Routing minh họa all users đi version 1 nhưng user Alissa đi version 2.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải matching routing trong slide."
  },
  {
    q: "What is traffic mirroring in Istio? (Traffic mirroring trong Istio là gì?)",
    opts: [
      "Deleting real traffic before it reaches service (Xóa real traffic trước khi đến service)",
      "Sending all real responses to the mirror version (Gửi response thật từ mirror version cho user)",
      "Stopping all Pods during tests (Stop mọi Pod khi test)",
      "Sending real traffic to version 1 and a copy of traffic to version 2, while disregarding mirrored response (Gửi real traffic tới version 1 và copy traffic tới version 2, bỏ qua response mirror)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Copy traffic, response mirror bị bỏ qua</b><br>Mirroring cho phép test version mới bằng bản sao traffic thật nhưng response từ version mirror không trả về user.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B sai vì response mirror disregarded.<br>❌ C không phải mirroring."
  },
  {
    q: "What does Murphy's law imply in the Istio slide context? (Murphy’s law trong ngữ cảnh slide Istio ngụ ý gì?)",
    opts: [
      "Failures should be expected and tested (Cần dự đoán và test các lỗi có thể xảy ra)",
      "Failures never happen (Lỗi không bao giờ xảy ra)",
      "Monitoring is useless (Monitoring vô dụng)",
      "Security is unnecessary (Bảo mật không cần thiết)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Cần test failure</b><br>Murphy’s law dẫn vào phần chaos engineering: bất kỳ thứ gì có thể lỗi thì có thể sẽ lỗi, nên cần chủ động mô phỏng lỗi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B ngược với Murphy’s law.<br>❌ C/D sai vì monitoring và security rất quan trọng."
  },
  {
    q: "What can Istio inject for chaos engineering? (Istio có thể inject gì cho chaos engineering?)",
    opts: [
      "Only Git conflicts (Chỉ Git conflict)",
      "Delays and aborts/errors (Delay và abort/error)",
      "Only database indexes (Chỉ database index)",
      "Only UI themes (Chỉ theme UI)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Delays và aborts/errors</b><br>Istio có thể inject delays để mô phỏng latency/overload và aborts để mô phỏng service failure bằng HTTP error.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C thuộc database.<br>❌ D thuộc UI."
  },
  {
    q: "What does injecting delay simulate? (Inject delay mô phỏng điều gì?)",
    opts: [
      "Git repository deletion (Xóa Git repository)",
      "Docker image tagging (Tag Docker image)",
      "Network latency or overloaded service (Network latency hoặc service quá tải)",
      "Kiali login failure only (Chỉ lỗi login Kiali)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Latency hoặc overloaded service</b><br>Slide Chaos engineering nêu inject delays dùng để mô phỏng network latency hoặc service bị overload.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B không liên quan runtime service behavior.<br>❌ D quá hẹp."
  },
  {
    q: "What does injecting aborts/errors simulate? (Inject abort/error mô phỏng điều gì?)",
    opts: [
      "Successful deployment only (Chỉ deployment thành công)",
      "Git branch creation (Tạo Git branch)",
      "Container image build cache (Docker image build cache)",
      "Service failure by returning predefined HTTP errors (Service failure bằng cách trả về HTTP error định trước)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Trả HTTP error định trước</b><br>Istio abort/fault injection có thể simulate service failure bằng cách trả về HTTP error như 500 cho request/user cụ thể.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải failure.<br>❌ B thuộc Git.<br>❌ C thuộc Docker build."
  },
  {
    q: "Why can Istio abort injection be a good alternative to manual shutdown? (Vì sao abort injection của Istio là alternative tốt cho shutdown thủ công?)",
    opts: [
      "It simulates failure without manually shutting down or scaling service to zero (Nó mô phỏng failure mà không cần shutdown thủ công hoặc scale service về 0)",
      "It deletes the cluster automatically (Nó tự động xóa cluster)",
      "It disables all observability (Nó tắt toàn bộ observability)",
      "It requires changing business logic (Nó bắt buộc sửa business logic)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Simulate failure không cần shutdown thật</b><br>Slide nêu inject errors là alternative tốt cho manual shutdown hoặc scale to zero khi muốn test failure behavior.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B nguy hiểm và sai.<br>❌ C sai.<br>❌ D trái với tính transparent của Istio."
  },
  {
    q: "In the delay injection example, how much delay is added? (Trong ví dụ inject delay, delay được thêm là bao nhiêu?)",
    opts: [
      "1 millisecond",
      "7 seconds",
      "1 hour",
      "30 minutes"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: 7 seconds</b><br>Slide Inject delay minh họa thêm 7 seconds delay vào response.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không đúng ví dụ trong slide."
  },
  {
    q: "In the error injection example, what happens for user Alissa? (Trong ví dụ inject error, điều gì xảy ra với user Alissa?)",
    opts: [
      "She receives version 1 with no error only (Chỉ nhận version 1 không lỗi)",
      "Her request is mirrored but response ignored (Request bị mirror và response bị bỏ qua)",
      "She receives HTTP error 500 (Nhận HTTP error 500)",
      "Her Git commit is rejected (Commit Git bị reject)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Return Error 500 for user Alissa</b><br>Slide Inject Error minh họa service return Error 500 cho user Alissa trong khi các user khác hoạt động bình thường.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai với ví dụ error.<br>❌ B là traffic mirroring.<br>❌ D không liên quan."
  },
  {
    q: "What is a circuit breaker in Istio context? (Circuit breaker trong ngữ cảnh Istio là gì?)",
    opts: [
      "A UI widget in Kiali only (Chỉ là widget UI trong Kiali)",
      "A Docker layer cleanup policy (Policy dọn Docker layer)",
      "A Git hook for code review (Git hook cho code review)",
      "A mechanism to limit connections and requests using connection pools (Cơ chế giới hạn connection và request bằng connection pool)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Giới hạn connection/request</b><br>Circuit breaker trong slide được mô tả bằng việc set connection pool để giới hạn connections và requests.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải bản chất circuit breaker.<br>❌ B thuộc Docker.<br>❌ C thuộc Git."
  },
  {
    q: "In the circuit breaker example, what limits are mentioned? (Trong ví dụ circuit breaker, giới hạn nào được nhắc?)",
    opts: [
      "100 connections and no more than 10 requests per connection (100 connection và không quá 10 request/connection)",
      "1 connection and 1000 requests per connection (1 connection và 1000 request/connection)",
      "500 replicas and 5 namespaces (500 replica và 5 namespace)",
      "10 Git branches and 100 commits (10 branch và 100 commit)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: 100 connections, 10 req/connection</b><br>Slide ví dụ set connection pool of 100 connections with no more than 10 requests per connection to service A.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không đúng ví dụ trong slide."
  },
  {
    q: "What is Outlier Detection in Istio? (Outlier Detection trong Istio là gì?)",
    opts: [
      "A way to rename Git branches (Cách đổi tên Git branch)",
      "A mechanism to classify instances as healthy/unhealthy and eject unhealthy ones (Cơ chế phân loại instance healthy/unhealthy và eject instance unhealthy)",
      "A method to design UI graphs (Phương pháp thiết kế UI graph)",
      "A Docker registry authentication mode (Mode xác thực Docker registry)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Detect và eject unhealthy instances</b><br>Outlier detection xác định instance unhealthy và loại khỏi traffic trong một khoảng thời gian định nghĩa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ C thuộc UI.<br>❌ D thuộc Docker Registry."
  },
  {
    q: "In the Outlier Detection example, how often are Pods scanned? (Trong ví dụ Outlier Detection, Pod được scan bao lâu một lần?)",
    opts: [
      "Every 1 second",
      "Every 1 hour",
      "Every 5 minutes",
      "Every 24 hours"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Every 5 minutes</b><br>Slide ví dụ scan all pods every 5 mins để kiểm tra lỗi 5XX liên tiếp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không đúng ví dụ trong slide."
  },
  {
    q: "In the Outlier Detection example, when is an instance ejected? (Trong ví dụ Outlier Detection, khi nào instance bị eject?)",
    opts: [
      "After one successful request (Sau một request thành công)",
      "After a Git merge (Sau Git merge)",
      "After changing UI color (Sau khi đổi màu UI)",
      "After 7 consecutive failures with 5XX error codes (Sau 7 lần lỗi liên tiếp với mã 5XX)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: 7 consecutive 5XX failures</b><br>Slide nêu instance fail 7 consecutive times with 5XX error code sẽ bị eject.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là success, không phải lỗi.<br>❌ B/C không liên quan."
  },
  {
    q: "In the Outlier Detection example, how long is the unhealthy instance ejected? (Trong ví dụ Outlier Detection, instance unhealthy bị eject trong bao lâu?)",
    opts: [
      "15 minutes",
      "15 seconds",
      "5 hours",
      "Forever"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: 15 minutes</b><br>Slide ví dụ instance unhealthy bị eject for 15 minutes, timeframe có thể tăng theo thời gian.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không đúng ví dụ slide."
  },
  {
    q: "What are the two main security concepts mentioned under Authorization and Authentication? (Hai khái niệm bảo mật chính được nhắc là gì?)",
    opts: [
      "Git and Docker",
      "Authentication and Authorization",
      "Build and Test",
      "Namespace and Volume"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Authentication và Authorization</b><br>Slide tách rõ Authentication: xác thực ai là ai; Authorization: service A có được gửi request này đến service B không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải cặp security concept trong slide."
  },
  {
    q: "Which mechanism is mentioned for end-user authentication? (Cơ chế nào được nhắc cho end-user authentication?)",
    opts: [
      "Docker tag",
      "Git branch",
      "JSON Web Token (JWT)",
      "Kiali graph layout"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: JWT</b><br>Slide Authentication nêu end-user authentication dùng JSON Web Token (JWT).<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ D thuộc Kiali UI."
  },
  {
    q: "Which mechanism is mentioned for service-to-service authentication? (Cơ chế nào được nhắc cho service-to-service authentication?)",
    opts: [
      "GitHub OAuth only",
      "Username/password in code",
      "Plain HTTP only",
      "Mutual TLS"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: mutual TLS</b><br>Slide nêu service-to-service authentication dùng mutual TLS, trong đó client và server trao đổi certificate hai chiều.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải nội dung slide.<br>❌ B là anti-pattern.<br>❌ C không bảo mật bằng mTLS."
  },
  {
    q: "What is permissive mode useful for in mTLS migration? (Permissive mode hữu ích cho điều gì khi migration mTLS?)",
    opts: [
      "Flexible migration",
      "Deleting all certificates",
      "Disabling all service traffic",
      "Removing Envoy sidecars"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Flexible migration</b><br>Slide nêu permissive mode có thể dùng để migration linh hoạt khi chuyển dần sang service-to-service authentication bằng mTLS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không phải mục đích permissive mode."
  },
  {
    q: "What question does Authorization answer in Istio? (Authorization trong Istio trả lời câu hỏi nào?)",
    opts: [
      "Which Dockerfile is smaller? (Dockerfile nào nhỏ hơn?)",
      "Can service A send this request to service B? (Service A có được gửi request này đến service B không?)",
      "Which Git commit is older? (Commit Git nào cũ hơn?)",
      "Which UI color is better? (Màu UI nào tốt hơn?)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Service A có được gọi Service B không?</b><br>Authorization quyết định một caller/service có quyền thực hiện request cụ thể đến target service hay không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ C thuộc Git.<br>❌ D thuộc UI."
  },
  {
    q: "Which authorization objects are mentioned in the slide? (Object authorization nào được nhắc trong slide?)",
    opts: [
      "DockerRole and DockerRoleBinding",
      "GitRole and GitRoleBinding",
      "ServiceRole and ServiceRoleBinding",
      "KialiRole and KialiRoleBinding only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: ServiceRole và ServiceRoleBinding</b><br>Slide Authorization nhắc ServiceRole và ServiceRoleBinding, đồng thời nói roles visible across namespaces.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải cặp object được nêu."
  },
  {
    q: "What is a Gateway used for in Istio security? (Gateway dùng để làm gì trong security Istio?)",
    opts: [
      "Compile Go code (Compile code Go)",
      "Store Docker images (Lưu Docker image)",
      "Rewrite Git history (Viết lại lịch sử Git)",
      "Define ingress/egress to enable traffic in and out of the mesh (Định nghĩa ingress/egress để traffic vào/ra mesh)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Enable traffic in/out of mesh</b><br>Slide Security nêu Gateway ingress/egress dùng để enable traffic vào hoặc ra khỏi mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc build.<br>❌ B thuộc registry.<br>❌ C thuộc Git."
  },
  {
    q: "What does Citadel monitor according to the slide? (Theo slide, Citadel monitor cái gì?)",
    opts: [
      "Service account creation",
      "Git commit creation",
      "Docker image build time",
      "Kiali UI theme"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Service account creation</b><br>Slide Security nêu Citadel monitors service accounts creation and creates certificates for them.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker build.<br>❌ D không liên quan."
  },
  {
    q: "Where are certificates kept according to the slide? (Theo slide, certificates được giữ ở đâu?)",
    opts: [
      "In Git commits only",
      "Only in memory, sent to Envoy via SDS API",
      "In public Docker Hub repositories",
      "In browser cookies only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Only in memory, sent via SDS API</b><br>Slide ghi certificates only in memory và được sent to Envoy via SDS API.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không đúng và không an toàn."
  },
  {
    q: "What does mTLS mean in Istio security? (mTLS trong security Istio nghĩa là gì?)",
    opts: [
      "Only server sends certificate (Chỉ server gửi certificate)",
      "Only client sends username (Chỉ client gửi username)",
      "Client and server exchange certificates two-way (Client và server trao đổi certificate hai chiều)",
      "No certificate is used (Không dùng certificate)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Client/server exchange certificates</b><br>Mutual TLS là xác thực hai chiều, cả client và server đều trao đổi certificate.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là TLS một chiều hơn.<br>❌ B không phải mTLS.<br>❌ D sai."
  },
  {
    q: "At which levels can mTLS be defined according to the slide? (Theo slide, mTLS có thể được định nghĩa ở level nào?)",
    opts: [
      "Only in browser level (Chỉ browser level)",
      "Only in Git level (Chỉ Git level)",
      "Only in Dockerfile level (Chỉ Dockerfile level)",
      "Multiple levels such as all mesh or specific service (Nhiều level như toàn mesh hoặc service cụ thể)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Nhiều level</b><br>Slide nêu mTLS can be defined on multiple levels: all mesh, specific service, etc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phải level mTLS trong Istio."
  },
  {
    q: "What is a VirtualService in Istio? (VirtualService trong Istio là gì?)",
    opts: [
      "Rules for how requests to a service are routed within the service mesh (Rule quy định request đến service được route như thế nào trong service mesh)",
      "The same thing as Kubernetes Service (Giống hệt Kubernetes Service)",
      "A Docker volume (Docker volume)",
      "A Git remote repository (Git remote repository)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Routing rules trong service mesh</b><br>VirtualService định nghĩa routing logic, load weighting, chaos injection... trong Istio service mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì slide nhấn mạnh VirtualService != Kubernetes Service.<br>❌ C thuộc Docker.<br>❌ D thuộc Git."
  },
  {
    q: "Which statement is TRUE about VirtualService and Kubernetes Service? (Phát biểu nào đúng về VirtualService và Kubernetes Service?)",
    opts: [
      "They are exactly the same object (Chúng là cùng một object)",
      "VirtualService is not the same as Kubernetes Service (VirtualService không giống Kubernetes Service)",
      "VirtualService is only a Docker command (VirtualService chỉ là lệnh Docker)",
      "Kubernetes Service is a Git branch (Kubernetes Service là Git branch)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: VirtualService != Kubernetes Service</b><br>Slide ghi rõ VirtualService != Kubernetes service. VirtualService định nghĩa rule routing trong mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với slide.<br>❌ C/D sai khái niệm."
  },
  {
    q: "Which capabilities belong to VirtualService? (Capability nào thuộc VirtualService?)",
    opts: [
      "Docker image pruning (Dọn Docker image)",
      "Git merge conflict resolution (Giải conflict Git)",
      "Routing logic, load weighting, and chaos injection (Routing logic, load weighting và chaos injection)",
      "Database indexing only (Chỉ indexing database)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Routing, weighting, chaos injection</b><br>VirtualService chứa logic route, chia tải theo weight và fault/chaos injection như delay/abort.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ D thuộc database."
  },
  {
    q: "What is a DestinationRule in Istio? (DestinationRule trong Istio là gì?)",
    opts: [
      "A GitOps repository rule (Rule repo GitOps)",
      "A Dockerfile build stage (Stage build Dockerfile)",
      "A Kubernetes Namespace only (Chỉ Namespace Kubernetes)",
      "Policy applied to a request after VirtualService routing has occurred (Policy áp dụng cho request sau khi VirtualService routing đã xảy ra)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Policy sau VirtualService routing</b><br>DestinationRule cấu hình policy sau khi VirtualService đã quyết định route, ví dụ load balancer và circuit breaker.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc GitOps.<br>❌ B thuộc Docker multi-stage.<br>❌ C không phải DestinationRule."
  },
  {
    q: "Which policies can DestinationRule configure? (DestinationRule có thể cấu hình policy nào?)",
    opts: [
      "Load balancer and circuit breaker",
      "Git author and commit message",
      "Kiali UI theme only",
      "Docker image base layer only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Load balancer và circuit breaker</b><br>Slide DestinationRule nêu load balancer và circuit breaker là policy được cấu hình sau routing.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc UI.<br>❌ D thuộc Docker image."
  },
  {
    q: "Which of the following is also listed as an Istio configuration object? (Object nào cũng được liệt kê là Istio configuration object?)",
    opts: [
      "package.json",
      "Gateway",
      "README.md",
      "Dockerfile"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Gateway</b><br>Slide liệt kê MeshPolicy, Gateway, ServiceEntry and more bên cạnh VirtualService và DestinationRule.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Node.js metadata.<br>❌ C là tài liệu.<br>❌ D là Docker build file."
  },
  {
    q: "What are Istio configuration objects implemented as? (Istio configuration objects được implement dưới dạng gì?)",
    opts: [
      "Docker layers",
      "Git tags",
      "Kubernetes CRDs - CustomResourceDefinitions",
      "Plain text logs only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: CRD</b><br>Slide Configuration YAML example ghi all Istio objects are CRD, tức CustomResourceDefinition trong Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ B thuộc Git.<br>❌ D không phải resource definition."
  },
  {
    q: "Which question is part of the new challenges after adding Istio/service mesh? (Câu hỏi nào thuộc new challenges sau khi thêm Istio/service mesh?)",
    opts: [
      "How to remove Kubernetes completely? (Làm sao xóa Kubernetes hoàn toàn?)",
      "How to avoid all monitoring? (Làm sao tránh toàn bộ monitoring?)",
      "How to delete all services? (Làm sao xóa toàn bộ service?)",
      "How many versions exist for service A? (Có bao nhiêu version tồn tại cho service A?)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Có bao nhiêu version của service A?</b><br>Slide New set of challenges liệt kê các câu hỏi như service A có bao nhiêu version, có traffic không, routing của service B ra sao, config valid không, security on chưa, app healthy không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phải challenge được slide nêu."
  },
  {
    q: "Which question relates to routing visibility in the new challenges? (Câu hỏi nào liên quan đến visibility của routing trong new challenges?)",
    opts: [
      "Is routing configured for service B? (Routing đã được cấu hình cho service B chưa?)",
      "Which Dockerfile base image is smallest? (Base image Dockerfile nào nhỏ nhất?)",
      "Which Git branch is oldest? (Git branch nào cũ nhất?)",
      "Which UI color is used? (Màu UI nào đang dùng?)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Routing configured for service B?</b><br>Khi mesh có nhiều rule routing, cần công cụ để biết service nào đang được route ra sao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không phải challenge service mesh trong slide."
  },
  {
    q: "Which question relates to configuration correctness in service mesh? (Câu hỏi nào liên quan đến độ đúng của configuration trong service mesh?)",
    opts: [
      "Is the CSS valid? (CSS có valid không?)",
      "Is my configuration valid? (Configuration của tôi có valid không?)",
      "Is my Git username short? (Username Git có ngắn không?)",
      "Is my Docker image pretty? (Docker image có đẹp không?)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Is my configuration valid?</b><br>Istio có nhiều CRD và rule phức tạp, nên validation config là nhu cầu quan trọng, được Kiali hỗ trợ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải challenge được nêu."
  },
  {
    q: "Which question relates to service mesh security visibility? (Câu hỏi nào liên quan đến visibility của security trong service mesh?)",
    opts: [
      "Is Git installed? (Git đã cài chưa?)",
      "Is Docker logged in? (Docker đã login chưa?)",
      "Is security on? (Security đã bật chưa?)",
      "Is the browser zoom correct? (Browser zoom đúng chưa?)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Is security on?</b><br>Slide nêu một challenge mới là biết security có đang bật không, ví dụ mTLS/policy được áp dụng chưa.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải security visibility trong mesh."
  },
  {
    q: "What is Kiali? (Kiali là gì?)",
    opts: [
      "A database engine",
      "A Docker registry",
      "A Git branching tool",
      "An open-source Istio service mesh observability tool"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Kiali là observability tool cho Istio service mesh</b><br>Kiali giúp visualize mesh, traffic, health, config validation, metrics, traces, logs và security configuration.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là DBMS.<br>❌ B là Docker Hub/ECR/GCR.<br>❌ C thuộc Git."
  },
  {
    q: "Which Kiali feature helps operators understand service relationships quickly? (Feature nao cua Kiali giup nhin nhanh quan he giua cac service?)",
    opts: [
      "Mesh topology and traffic visualization (Visual topology va traffic giua cac service)",
      "Rewriting application source code (Viet lai source code ung dung)",
      "Building Docker images in CI (Build Docker image trong CI)",
      "Replacing Kubernetes Services entirely (Thay the hoan toan Kubernetes Service)"
    ],
    ans: 0,
    exp: "<b>✅ Dap an dung la A: Mesh topology va traffic visualization</b><br>Kiali manh o kha nang hien thi graph, huong traffic va tinh trang cua service, giup operator hieu nhanh toan canh he thong phan tan.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ B khong phai vai tro cua Kiali.<br>❌ C la bai toan CI/Docker.<br>❌ D sai vi Kiali la cong cu quan sat va validate."
  },
  {
    q: "Why is Kiali useful in daily operations? (Vi sao Kiali huu ich trong van hanh hang ngay?)",
    opts: [
      "Because it removes the need for logs and metrics entirely (Vi no loai bo hoan toan nhu cau xem log va metrics)",
      "Because it combines visualization, validation, and observability for the mesh (Vi no ket hop visualization, validation va observability cho mesh)",
      "Because it replaces Git as the source of truth (Vi no thay Git lam source of truth)",
      "Because it converts all services into monoliths (Vi no bien moi service thanh monolith)"
    ],
    ans: 1,
    exp: "<b>✅ Dap an dung la B: Ket hop quan sat va validation</b><br>Kiali huu ich vi no khong chi ve graph ma con giup xem health, metrics, traces, logs va validate cau hinh Istio trong cung mot boi canh van hanh.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ A sai vi Kiali van bo sung cho logs va metrics chu khong thay the hoan toan.<br>❌ C sai vi GitOps source of truth van la Git.<br>❌ D vo ly."
  },
  {
    q: "Kiali is developed using which technologies? (Kiali được phát triển bằng công nghệ nào?)",
    opts: [
      "Only PHP",
      "Only Java",
      "Go and React",
      "Only Python"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Go and React</b><br>Slide dry facts nêu Kiali developed in Go and React.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải công nghệ được nêu."
  },
  {
    q: "Which is a Kiali feature? (Đâu là feature của Kiali?)",
    opts: [
      "Building Docker images only",
      "Rewriting Git history",
      "Compiling Go code only",
      "Visualizing mesh connections and traffic"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Visualize mesh connections and traffic</b><br>Kiali cho phép quan sát graph/topology traffic giữa các service trong mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker build.<br>❌ B thuộc Git.<br>❌ C là build process, không phải feature chính."
  },
  {
    q: "Which health information can Kiali show? (Kiali có thể hiển thị thông tin health nào?)",
    opts: [
      "Service and application health",
      "Only laptop battery health",
      "Only Git repository health",
      "Only Docker Hub account health"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Service and application health</b><br>Kiali giúp xem health của service và application trong service mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không phải health trong Kiali service mesh."
  },
  {
    q: "Can Kiali configure routing via UI according to the slide? (Theo slide, Kiali có thể configure routing qua UI không?)",
    opts: [
      "No, Kiali only deletes services (Không, Kiali chỉ xóa service)",
      "Yes, it can configure routing via UI (Có, nó có thể configure routing qua UI)",
      "No, Kiali is only a text editor (Không, Kiali chỉ là text editor)",
      "No, Kiali is only a Docker CLI wrapper (Không, Kiali chỉ bọc Docker CLI)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Có thể configure routing via UI</b><br>Slide Kiali Features nêu Kiali có thể configure routing via UI.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không đúng feature Kiali."
  },
  {
    q: "Which Kiali feature helps detect invalid Istio objects? (Feature nào của Kiali giúp phát hiện Istio object/config sai?)",
    opts: [
      "Git conflict resolution",
      "Docker build cache",
      "Validate Istio configurations",
      "Database migration"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Validate Istio configurations</b><br>Kiali có thể validate Istio configuration, giúp phát hiện lỗi trong VirtualService, DestinationRule và các CRD khác.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker.<br>❌ D thuộc database."
  },
  {
    q: "Which observability data can Kiali show? (Kiali có thể hiển thị dữ liệu observability nào?)",
    opts: [
      "Only Git tags",
      "Only Dockerfile comments",
      "Only browser cookies",
      "Metrics, traces, and logs"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Metrics, traces, logs</b><br>Kiali có thể view metrics, traces và logs để debug traffic và health trong mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phải dữ liệu observability chính."
  },
  {
    q: "Which security-related feature does Kiali provide? (Kiali cung cấp feature nào liên quan security?)",
    opts: [
      "Visualize security configuration",
      "Disable all mTLS permanently",
      "Store passwords in source code",
      "Delete ServiceAccounts automatically"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Visualize security configuration</b><br>Slide Kiali Features nêu Kiali có thể visualize security configuration, giúp biết mTLS/security có bật không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D là hành vi không đúng hoặc nguy hiểm."
  },
  {
    q: "Which example application is used for Kiali demos? (Application ví dụ nào được dùng cho demo Kiali?)",
    opts: [
      "Sock Shop",
      "Bookinfo",
      "WordPress",
      "PetClinic"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Bookinfo</b><br>Slide ghi demos based on Bookinfo example và có các phần Bookinfo example, Bookinfo on Kiali.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D là app demo phổ biến khác nhưng không phải nội dung slide này."
  },
  {
    q: "Which Kiali demo topic is listed in the slide? (Demo topic nào của Kiali được liệt kê trong slide?)",
    opts: [
      "Git merge strategy",
      "Docker image pruning",
      "Mesh visualization",
      "Database sharding"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Mesh visualization</b><br>Slide “Let’s see Kiali in action” liệt kê Mesh visualization, Fault Injection, Configuration Validation, Routing rules, Tracing, Traffic stats.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Docker cleanup.<br>❌ D thuộc database."
  },
  {
    q: "Which tracing integration is mentioned with Kiali? (Integration tracing nào được nhắc với Kiali?)",
    opts: [
      "GitLab tracing",
      "DockerHub tracing",
      "Jenkins tracing",
      "Jaeger"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Jaeger</b><br>Slide ghi Tracing integration with Jaeger.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phải tracing integration được nêu."
  },
  {
    q: "What does the phrase 'A picture is worth a thousand yamls' imply? (Câu 'A picture is worth a thousand yamls' ngụ ý gì?)",
    opts: [
      "Visual topology and UI can help understand complex mesh configuration better than reading many YAML files (Topology/UI trực quan giúp hiểu mesh config phức tạp tốt hơn đọc nhiều YAML)",
      "YAML files are always useless (YAML luôn vô dụng)",
      "Kiali replaces Kubernetes completely (Kiali thay thế Kubernetes hoàn toàn)",
      "Istio does not use CRDs (Istio không dùng CRD)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Visualization giúp hiểu mesh dễ hơn</b><br>Kiali trực quan hóa service graph, traffic và config để người vận hành dễ hiểu hơn so với chỉ đọc nhiều YAML.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B quá tuyệt đối; YAML vẫn quan trọng.<br>❌ C sai vì Kiali là observability/config UI.<br>❌ D sai vì Istio objects là CRD."
  },
  {
    q: "Which Kiali page/feature helps see the topology of services? (Page/feature nào của Kiali giúp xem topology service?)",
    opts: [
      "Dockerfile page",
      "Mesh Topology Graph",
      "Git Blame page",
      "SQL Explain page"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Mesh Topology Graph</b><br>Slide có mục Mesh Topology Graph, giúp xem quan hệ và traffic giữa các service trong mesh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ C thuộc Git.<br>❌ D thuộc database."
  },
  {
    q: "Which Kiali feature helps inspect runtime performance? (Feature nào của Kiali giúp kiểm tra performance runtime?)",
    opts: [
      "Git rebase dashboard",
      "Dockerfile syntax highlighter",
      "Runtime metric dashboards",
      "Database schema editor"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Runtime metric dashboards</b><br>Slide liệt kê Runtime metric dashboards, dùng để quan sát metric khi app chạy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B thuộc Dockerfile editor.<br>❌ D thuộc database."
  },
  {
    q: "Which Kiali feature helps inspect application logs? (Feature nào của Kiali giúp xem log ứng dụng?)",
    opts: [
      "GitHub issue board",
      "Docker Hub tags page",
      "Kubernetes namespace deletion",
      "Viewing Logs"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Viewing Logs</b><br>Slide Kiali Features có phần Viewing Logs để xem log liên quan workload/service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc GitHub project management.<br>❌ B thuộc Docker Hub.<br>❌ C là thao tác Kubernetes nguy hiểm."
  },
  {
    q: "Which Kiali feature is useful for traffic split visualization? (Feature nào của Kiali hữu ích để visualize traffic split?)",
    opts: [
      "Weighted Routing",
      "Git commit graph only",
      "Docker layer history only",
      "Database query plan only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Weighted Routing</b><br>Slide có phần Weighted Routing, phù hợp quan sát/chỉnh routing theo weight như A/B hoặc Canary.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Docker image.<br>❌ D thuộc database."
  },
  {
    q: "What is the main purpose of Kiali configuration validation? (Mục đích chính của configuration validation trong Kiali là gì?)",
    opts: [
      "To build Docker images faster (Để build Docker image nhanh hơn)",
      "To detect invalid or problematic Istio configurations (Để phát hiện cấu hình Istio sai hoặc có vấn đề)",
      "To delete all VirtualServices (Để xóa mọi VirtualService)",
      "To rewrite application source code (Để viết lại source code ứng dụng)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Phát hiện config Istio sai</b><br>Kiali validation giúp kiểm tra Istio CRD và rule routing/security có hợp lệ không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker.<br>❌ C không phải mục đích validation.<br>❌ D sai vì Kiali không rewrite app code."
  },
  {
    q: "Which tool is most directly responsible for service mesh observability in this chapter? (Tool nào chịu trách nhiệm trực tiếp nhất cho observability service mesh trong chương này?)",
    opts: [
      "Git",
      "Docker Compose",
      "Kiali",
      "RCS"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Kiali</b><br>Kiali là open-source Istio service mesh observability tool, dùng để visualize traffic, health, metrics, traces, logs và security config.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là VCS.<br>❌ B là Docker multi-container local tool.<br>❌ D là local VCS cũ."
  },
  {
    q: "Which tool is most directly responsible for service mesh traffic control in this chapter? (Tool nào chịu trách nhiệm trực tiếp nhất cho traffic control service mesh trong chương này?)",
    opts: [
      "GitHub",
      "Docker Hub",
      "Jenkins",
      "Istio"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Istio</b><br>Istio cung cấp traffic control như routing rules, retries, timeouts, fault injection và mirroring.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git platform.<br>❌ B là image registry.<br>❌ C là CI/CD automation server."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Istio - open-source service mesh",
      "Kiali - Docker image builder",
      "Envoy - Git hosting platform",
      "Citadel - UI testing framework"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Istio là open-source service mesh</b><br>Istio là service mesh mã nguồn mở; Kiali là observability; Envoy là proxy; Citadel liên quan certificate/security.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì Kiali là observability tool.<br>❌ C sai vì Envoy là proxy.<br>❌ D sai vì Citadel tạo certificate cho service account."
  },
  {
    q: "Which component-role pair is correctly matched? (Cap component-vai tro nao ghep dung?)",
    opts: [
      "Kiali - container runtime",
      "Istio - service mesh for traffic management, security, and observability",
      "Envoy - Docker registry",
      "Citadel - Git merge tool"
    ],
    ans: 1,
    exp: "<b>✅ Dap an dung la B: Istio la service mesh</b><br>Istio dam nhan traffic management, security va observability cho giao tiep service-to-service. Day la vai tro cot loi cua no trong chuong nay.<br><br><b>Tai sao cac dap an khac sai?</b><br>❌ A sai vi Kiali la cong cu observability/validation, khong phai container runtime.<br>❌ C sai vi Envoy la proxy data plane, khong phai registry.<br>❌ D sai vi Citadel lien quan certificate va security."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "VirtualService - Docker image storage",
      "DestinationRule - Git branch naming",
      "VirtualService - routing rules within service mesh",
      "Kiali - container runtime"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: VirtualService định nghĩa routing rules</b><br>VirtualService chứa rule route request trong service mesh, gồm routing logic, weight và chaos injection.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì image storage là registry.<br>❌ B sai vì DestinationRule là Istio policy sau routing.<br>❌ D sai vì Kiali không phải runtime."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "DestinationRule - validates Git commits",
      "Kiali - Kubernetes scheduler",
      "Sidecar - database index",
      "DestinationRule - load balancer and circuit breaker policies"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: DestinationRule cấu hình LB và circuit breaker</b><br>DestinationRule cấu hình policy áp dụng sau VirtualService routing, như load balancer và circuit breaker.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Git.<br>❌ B sai vì scheduler là Kubernetes control plane component.<br>❌ C sai vì sidecar là proxy container."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Sidecar proxy - istio-proxy container using Envoy",
      "Sidecar proxy - Git tag manager",
      "Sidecar proxy - database backup agent only",
      "Sidecar proxy - Kiali screenshot viewer"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: istio-proxy dùng Envoy</b><br>Istio sidecar là container istio-proxy chạy Envoy cạnh application container trong Pod.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C không đúng.<br>❌ D không phải sidecar proxy."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Mirroring - response from mirrored version is returned to user",
      "Mirroring - copy traffic is sent to another version and its response is disregarded",
      "Canary - 100% traffic always goes to new version immediately",
      "A/B Routing - traffic cannot be split by weight"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Mirroring copy traffic, bỏ qua response</b><br>Traffic mirroring gửi traffic thật tới version chính và bản sao traffic tới version mirror; response mirror bị disregard.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì response mirror không trả user.<br>❌ C sai vì canary rollout dần.<br>❌ D sai vì A/B dùng weighted routing."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Inject delay - simulate network latency or overloaded service",
      "Inject abort - simulate successful request only",
      "Outlier detection - always route to unhealthy instances",
      "Circuit breaker - unlimited connections forever"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Inject delay mô phỏng latency/overload</b><br>Delay injection giúp test behavior khi network chậm hoặc service quá tải.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì abort simulate failure/error.<br>❌ C sai vì unhealthy instances bị eject.<br>❌ D sai vì circuit breaker giới hạn connection/request."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "JWT - service-to-service mTLS only",
      "mTLS - service-to-service authentication",
      "Gateway - Git commit approval",
      "Citadel - Docker image pruning"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: mTLS cho service-to-service authentication</b><br>Slide nêu end-user authentication dùng JWT, còn service-to-service authentication dùng mutual TLS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì JWT cho end-user auth.<br>❌ C Gateway là ingress/egress traffic in/out mesh.<br>❌ D Citadel tạo certificate."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Kiali - validates Istio configurations",
      "Kiali - deletes all Pods by default",
      "Kiali - replaces Envoy sidecar",
      "Kiali - stores Docker images"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Kiali validate Istio config</b><br>Kiali có feature validate Istio configurations để phát hiện config sai/problematic.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai.<br>❌ C sai vì Envoy sidecar vẫn là proxy data plane.<br>❌ D là registry."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Bookinfo - container runtime",
      "Bookinfo - demo application used for Kiali examples",
      "Bookinfo - Docker Registry",
      "Bookinfo - Istio certificate authority"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Bookinfo là app demo</b><br>Slide ghi demos based on Bookinfo example và minh họa Bookinfo on Kiali.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là containerd/CRI-O.<br>❌ C là Docker Hub/ECR/GCR.<br>❌ D là Citadel/security component."
  },
  {
    q: "Which statement best summarizes Istio’s role? (Phát biểu nào tóm tắt đúng vai trò của Istio?)",
    opts: [
      "Istio is mainly a database migration tool (Istio chủ yếu là tool migration database)",
      "Istio is a UI-only graphing tool (Istio chỉ là tool vẽ graph UI)",
      "Istio provides traffic management, security, and observability features for service-to-service communication (Istio cung cấp traffic management, security và observability cho giao tiếp service-to-service)",
      "Istio is a Git client (Istio là Git client)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Traffic + security + observability</b><br>Istio xử lý communication giữa service thông qua sidecar proxy và cung cấp routing, retry, timeout, mTLS, access control, metrics/traces.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không đúng.<br>❌ B là Kiali gần hơn nhưng vẫn không đủ.<br>❌ D sai."
  },
  {
    q: "Which statement best summarizes Kiali’s role? (Phát biểu nào tóm tắt đúng vai trò của Kiali?)",
    opts: [
      "Kiali is a Docker image compiler (Kiali là compiler Docker image)",
      "Kiali is a Git merge tool (Kiali là tool merge Git)",
      "Kiali is a database replication engine (Kiali là engine replication database)",
      "Kiali visualizes, validates, and observes Istio service mesh behavior (Kiali visualize, validate và observe behavior của Istio service mesh)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Kiali quan sát và validate service mesh</b><br>Kiali giúp visualize mesh connections, traffic, health, routing, metrics, traces, logs và security config.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker build.<br>❌ B thuộc Git.<br>❌ C thuộc database."
  }
];
