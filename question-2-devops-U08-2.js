// 08-2 GitOps and ArgoCD (64 câu)
// Đáp án chia đều: ans 0/1/2/3 mỗi loại 16 câu
DEVOPS_QUIZ_DATA.topics[7].questions = [
  {
    q: "What is the main problem in the Traditional Ops Process? (Vấn đề chính trong Traditional Ops Process là gì?)",
    opts: [
      "Code is thrown over the wall to QA and bounces back and forth between Dev and QA (Code bị ném sang QA rồi qua lại giữa Dev và QA khi phát hiện lỗi)",
      "Code automatically deploys after every commit (Code tự động deploy sau mỗi commit)",
      "QA gets builds immediately through automation (QA nhận build ngay nhờ automation)",
      "All deployments are fully automated from the start (Mọi deployment tự động từ đầu)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Throw it over the wall</b><br>Traditional Ops Process thường tách rời Dev, QA, Ops, dẫn đến feedback chậm và code phải quay qua lại nhiều lần.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D là đặc điểm DevOps process hiện đại hơn."
  },
  {
    q: "In the DevOps process, what triggers automated build, integration, and tests? (Trong DevOps process, điều gì trigger automated build, integration và tests?)",
    opts: [
      "A manual paper form (Một form giấy thủ công)",
      "A code commit (Một code commit)",
      "A monthly production outage (Production outage hàng tháng)",
      "A database backup only (Chỉ database backup)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Code commit</b><br>Trong DevOps process, khi dev commit code, pipeline có thể tự động build, integrate và test.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thủ công.<br>❌ C không phải trigger mong muốn.<br>❌ D không phải trigger CI/CD chính."
  },
  {
    q: "Which sequence best represents the DevOps process shown in the slide? (Chuỗi nào đúng với DevOps process trong slide?)",
    opts: [
      "Design > Sleep > Archive > Delete",
      "QA > Manual copy > Wait > Deploy",
      "Build > Integrate > Test > Deploy",
      "Rollback > Delete > Rebuild > Guess"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Build > Integrate > Test > Deploy</b><br>Slide mô tả quá trình DevOps có pipeline tự động build, integrate, test và deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải flow DevOps chuẩn."
  },
  {
    q: "Which deployment evolution is shown in the GitOps slide? (Slide GitOps minh họa tiến hóa deployment nào?)",
    opts: [
      "Only database deployment (Chỉ database deployment)",
      "Only manual file deployment (Chỉ deploy bằng file thủ công)",
      "Only Git branch deployment (Chỉ deploy branch Git)",
      "Traditional Deployment, Virtualized Deployment, Container Deployment"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Traditional, Virtualized, Container Deployment</b><br>Slide minh họa sự tiến hóa từ deployment truyền thống sang virtualized deployment rồi container deployment.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không đúng nội dung slide."
  },
  {
    q: "What is the Imperative Way in Kubernetes operations? (Imperative Way trong vận hành Kubernetes là gì?)",
    opts: [
      "Using direct commands such as kubectl create, scale, expose, and port-forward (Dùng command trực tiếp như kubectl create, scale, expose, port-forward)",
      "Using only Git as source of truth (Chỉ dùng Git làm source of truth)",
      "Using no command and no manifest (Không dùng command và không dùng manifest)",
      "Using only ArgoCD UI without manifests (Chỉ dùng ArgoCD UI không có manifest)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Dùng lệnh kubectl trực tiếp</b><br>Imperative Way thao tác trực tiếp bằng command như tạo namespace, tạo deployment, scale, expose service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là GitOps/declarative hơn.<br>❌ C sai.<br>❌ D không phải imperative way."
  },
  {
    q: "Which command is shown for creating a namespace in the Imperative Way? (Lệnh nào được dùng để tạo namespace trong Imperative Way?)",
    opts: [
      "kubectl delete namespace sandbox",
      "kubectl create namespace sandbox",
      "kubectl get namespace sandbox --watch-only",
      "helm create namespace sandbox"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: kubectl create namespace sandbox</b><br>Slide Imperative Way dùng lệnh kubectl create namespace sandbox để tạo namespace.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là xóa namespace.<br>❌ C sai cú pháp/mục đích.<br>❌ D không phải lệnh tạo namespace như trong slide."
  },
  {
    q: "Which Imperative command scales the deployment to one replica? (Lệnh Imperative nào scale deployment thành 1 replica?)",
    opts: [
      "kubectl expose deployment simple-deployment",
      "kubectl port-forward service/simple-service",
      "kubectl scale deployment simple-deployment --replicas=1 --namespace=sandbox",
      "kubectl create namespace sandbox"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: kubectl scale deployment ... --replicas=1</b><br>Lệnh này thay đổi số replica của deployment simple-deployment về 1 trong namespace sandbox.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A expose service.<br>❌ B port-forward service.<br>❌ D tạo namespace."
  },
  {
    q: "What does kubectl expose deployment do in the slide example? (kubectl expose deployment trong ví dụ slide làm gì?)",
    opts: [
      "Deletes the deployment (Xóa deployment)",
      "Creates a Git repository (Tạo Git repository)",
      "Creates a Docker image (Tạo Docker image)",
      "Exposes the deployment as a Service (Expose deployment thành Service)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Expose deployment thành Service</b><br>Trong ví dụ, kubectl expose deployment simple-deployment tạo service simple-service kiểu NodePort.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là delete.<br>❌ B thuộc Git.<br>❌ C thuộc Docker build."
  },
  {
    q: "What is the Declarative Way in Kubernetes? (Declarative Way trong Kubernetes là gì?)",
    opts: [
      "Describing the desired state in YAML manifests (Mô tả desired state bằng YAML manifest)",
      "Typing only manual kubectl commands with no files (Chỉ gõ command thủ công, không file)",
      "Editing production Pods directly by SSH (SSH trực tiếp vào Pod production để sửa)",
      "Ignoring desired state (Bỏ qua desired state)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Mô tả desired state bằng YAML</b><br>Declarative Way khai báo trạng thái mong muốn như Deployment, replicas, selector, image trong manifest YAML.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là imperative.<br>❌ C không phải cách vận hành Kubernetes tốt.<br>❌ D trái với declarative."
  },
  {
    q: "In the Declarative YAML example, what is kind: Deployment used for? (Trong YAML Declarative, kind: Deployment dùng để làm gì?)",
    opts: [
      "Define a Docker Registry (Định nghĩa Docker Registry)",
      "Define a Kubernetes Deployment resource (Định nghĩa resource Deployment của Kubernetes)",
      "Define a Git branch (Định nghĩa Git branch)",
      "Define an ArgoCD user password (Định nghĩa password user ArgoCD)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Định nghĩa Kubernetes Deployment</b><br>kind: Deployment cho biết manifest này tạo/quản lý resource Deployment trong Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Docker Registry.<br>❌ C thuộc Git.<br>❌ D thuộc Secret/user management."
  },
  {
    q: "In the Declarative YAML example, what does replicas: 1 define? (Trong YAML Declarative, replicas: 1 định nghĩa gì?)",
    opts: [
      "The container port number (Số port container)",
      "The namespace count (Số namespace)",
      "The desired number of Pod replicas (Số Pod replica mong muốn)",
      "The Git commit count (Số commit Git)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Số Pod replica mong muốn</b><br>replicas: 1 yêu cầu Kubernetes duy trì một Pod replica cho Deployment.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là containerPort.<br>❌ B không đúng.<br>❌ D thuộc Git."
  },
  {
    q: "What image is used in the Declarative YAML example? (Image nào được dùng trong ví dụ Declarative YAML?)",
    opts: [
      "nginx:latest",
      "redis:alpine",
      "postgres:16",
      "docker.io/kostiscodefresh/gitops-simple-app:v1.0"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: docker.io/kostiscodefresh/gitops-simple-app:v1.0</b><br>Slide Declarative Way dùng image docker.io/kostiscodefresh/gitops-simple-app:v1.0 trong container simple-app.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C là image phổ biến nhưng không phải ví dụ trong slide."
  },
  {
    q: "What is GitOps? (GitOps là gì?)",
    opts: [
      "A set of best practices where code delivery is controlled via Git, including infrastructure and application definitions as code (Tập best practices nơi code delivery được kiểm soát qua Git, gồm hạ tầng và app definition as code)",
      "A tool only for editing Git commit messages (Công cụ chỉ sửa commit message)",
      "A Kubernetes replacement that removes manifests (Công cụ thay Kubernetes và bỏ manifest)",
      "A Docker image format (Định dạng Docker image)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Git kiểm soát delivery, infra và app definition</b><br>GitOps dùng Git làm trung tâm để quản lý delivery process, infrastructure as code, application definition và automation cho updates/rollbacks.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B quá hẹp.<br>❌ C sai vì GitOps thường vận hành Kubernetes.<br>❌ D không phải GitOps."
  },
  {
    q: "In GitOps, what is stored in Git? (Trong GitOps, cái gì được lưu trong Git?)",
    opts: [
      "Only screenshots (Chỉ screenshot)",
      "Desired system state, including infrastructure and application definitions (Desired state của hệ thống, gồm hạ tầng và app definition)",
      "Only random logs (Chỉ log ngẫu nhiên)",
      "Only local terminal history (Chỉ lịch sử terminal local)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Desired system state</b><br>GitOps version hóa desired state trong Git để có audit, rollback, traceability và automation.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải nội dung chính của GitOps repository."
  },
  {
    q: "What is the Traditional Operation Model shown in the slide? (Traditional Operation Model trong slide là gì?)",
    opts: [
      "A deployment agent pulls from Git automatically (Deployment agent tự pull từ Git)",
      "A user has no access to the cluster (User không có quyền vào cluster)",
      "A user directly accesses the Kubernetes cluster using kubectl (User truy cập trực tiếp Kubernetes cluster bằng kubectl)",
      "ArgoCD continuously monitors desired state (ArgoCD liên tục monitor desired state)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Direct kubectl access</b><br>Traditional Operation Model cho thấy user dùng kubectl/direct access để thao tác cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D mô tả GitOps model hơn."
  },
  {
    q: "In GitOps Operation Model, how does the user interact with the cluster? (Trong GitOps Operation Model, user tương tác với cluster như thế nào?)",
    opts: [
      "By SSH directly into every Pod (SSH trực tiếp vào từng Pod)",
      "By manually editing containers in production (Sửa container production thủ công)",
      "By bypassing Git and applying random YAML (Bỏ qua Git và apply YAML ngẫu nhiên)",
      "By committing changes to a configuration repository instead of direct cluster access (Commit thay đổi vào configuration repository thay vì truy cập cluster trực tiếp)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Commit vào configuration repository</b><br>GitOps hạn chế direct cluster access. User thay đổi trạng thái mong muốn bằng commit vào Git repo.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B là thao tác thủ công rủi ro.<br>❌ C trái với GitOps."
  },
  {
    q: "What component applies changes to the cluster in the GitOps Operation Model? (Component nào apply thay đổi vào cluster trong GitOps Operation Model?)",
    opts: [
      "Deployment agent",
      "CSS renderer",
      "Database backup job",
      "Manual email approval only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Deployment agent</b><br>GitOps model có deployment agent theo dõi Git/config repo và apply desired state vào Kubernetes cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B không liên quan.<br>❌ C không phải GitOps agent.<br>❌ D có thể là process phụ nhưng không phải component apply."
  },
  {
    q: "What is continuously monitored in GitOps Operation Model? (Trong GitOps Operation Model, cái gì được monitor liên tục?)",
    opts: [
      "Only developer laptops (Chỉ laptop developer)",
      "System state between Git desired state and live cluster state (Trạng thái hệ thống giữa desired state trong Git và live state trong cluster)",
      "Only office attendance (Chỉ chấm công văn phòng)",
      "Only Docker Hub stars (Chỉ sao Docker Hub)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Desired state và live state</b><br>GitOps liên tục so sánh trạng thái mong muốn trong Git với trạng thái thực tế trong cluster để phát hiện drift.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không phải state được monitor trong GitOps."
  },
  {
    q: "In GitOps, what does configuration drift mean? (Configuration drift trong GitOps nghĩa là gì?)",
    opts: [
      "Git and cluster are always identical (Git và cluster luôn giống nhau)",
      "All configs are deleted intentionally (Toàn bộ config bị xóa có chủ ý)",
      "The live system state differs from the desired state defined in Git (Live state khác desired state được định nghĩa trong Git)",
      "The UI color changes randomly (Màu UI thay đổi ngẫu nhiên)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Live state khác desired state</b><br>Configuration drift xảy ra khi trạng thái thực tế trong cluster lệch khỏi trạng thái mong muốn đã version trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là trạng thái không drift.<br>❌ B quá cụ thể và không đúng định nghĩa.<br>❌ D không liên quan."
  },
  {
    q: "Which is NOT a benefit of GitOps shown in the slide? (Điều nào KHÔNG phải lợi ích GitOps trong slide?)",
    opts: [
      "Faster deployments",
      "Safer deployments",
      "Better traceability",
      "Manual cluster changes without Git history"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Manual cluster changes without Git history</b><br>GitOps tránh thay đổi thủ công không trace được. Lợi ích trong slide gồm faster deployments, safer deployments, easier rollbacks, auditing, traceability và eliminating config drift.<br><br><b>Tại sao các đáp án khác sai?</b><br>✅ A/B/C đều là lợi ích của GitOps."
  },
  {
    q: "Which benefit means GitOps can return to a previous known-good state? (Lợi ích nào nghĩa là GitOps có thể quay về trạng thái tốt trước đó?)",
    opts: [
      "Easier rollbacks",
      "Slower deployments",
      "Hidden monitoring",
      "Manual-only updates"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Easier rollbacks</b><br>Vì state được version trong Git, rollback có thể thực hiện bằng cách quay lại commit/version trước.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là ngược lợi ích.<br>❌ C không phải lợi ích trong slide.<br>❌ D trái GitOps automation."
  },
  {
    q: "Which benefit means GitOps makes it easier to know what changed, when, and by whom? (Lợi ích nào giúp biết ai thay đổi gì và khi nào?)",
    opts: [
      "No repository history",
      "Better traceability",
      "Manual production patching",
      "Hidden cluster state"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Better traceability</b><br>Git lưu commit history, author, timestamp và diff nên giúp trace thay đổi dễ hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với GitOps.<br>❌ C không trace tốt.<br>❌ D không phải lợi ích."
  },
  {
    q: "Which benefit means GitOps provides a clear record of changes for review/compliance? (Lợi ích nào nghĩa là GitOps có record thay đổi rõ ràng để review/compliance?)",
    opts: [
      "No approval needed ever (Không bao giờ cần approval)",
      "No logs available (Không có log)",
      "Straightforward auditing",
      "Deleting Git history"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Straightforward auditing</b><br>Do Git có lịch sử thay đổi và review process, audit trở nên rõ ràng và dễ kiểm tra hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì GitOps thường dùng approval/PR.<br>❌ B sai.<br>❌ D phá audit trail."
  },
  {
    q: "Which benefit means GitOps helps keep the cluster aligned with Git? (Lợi ích nào nghĩa là GitOps giúp cluster luôn khớp với Git?)",
    opts: [
      "Creating more manual changes",
      "Ignoring desired state",
      "Disabling deployment agents",
      "Eliminating configuration drift"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Eliminating configuration drift</b><br>GitOps agent liên tục monitor và sync để live cluster state không lệch khỏi desired state trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C đều làm drift tăng."
  },
  {
    q: "What is the first GitOps principle shown in the slide? (Nguyên tắc GitOps đầu tiên trong slide là gì?)",
    opts: [
      "The entire system, including infrastructure and applications, is described declaratively (Toàn bộ hệ thống gồm hạ tầng và app được mô tả declaratively)",
      "The cluster must be edited manually only (Cluster chỉ được sửa thủ công)",
      "The system state must not be stored in Git (State không được lưu trong Git)",
      "Changes must never be automated (Thay đổi không bao giờ được tự động hóa)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Toàn bộ hệ thống được mô tả declaratively</b><br>GitOps yêu cầu hạ tầng và ứng dụng được mô tả bằng declarative manifests/configuration.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D trái với GitOps principles."
  },
  {
    q: "What is the second GitOps principle shown in the slide? (Nguyên tắc GitOps thứ hai trong slide là gì?)",
    opts: [
      "The desired system state is stored only in developer memory (Desired state chỉ lưu trong trí nhớ developer)",
      "The desired system state is versioned in Git (Desired system state được version trong Git)",
      "The desired state is deleted after every deploy (Desired state bị xóa sau mỗi deploy)",
      "The cluster state is hidden from everyone (Cluster state bị ẩn với mọi người)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Desired state versioned in Git</b><br>Git là source of truth và lưu lịch sử các phiên bản trạng thái mong muốn của hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không audit được.<br>❌ C sai.<br>❌ D không phải principle."
  },
  {
    q: "What is the third GitOps principle shown in the slide? (Nguyên tắc GitOps thứ ba trong slide là gì?)",
    opts: [
      "Changes are applied manually by SSH only (Thay đổi chỉ apply bằng SSH thủ công)",
      "Changes are never approved (Thay đổi không bao giờ được approve)",
      "Approved changes are automated and applied to the system (Thay đổi đã approve được tự động hóa và apply vào hệ thống)",
      "Changes are stored outside Git without history (Thay đổi lưu ngoài Git không có history)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Approved changes are automated</b><br>Sau khi thay đổi được approve trong Git, automation/deployment agent sẽ apply vào hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với automation.<br>❌ B sai vì approval quan trọng.<br>❌ D trái GitOps."
  },
  {
    q: "What is ArgoCD? (ArgoCD là gì?)",
    opts: [
      "A Docker image registry",
      "A Git commit editor",
      "A database engine",
      "A declarative GitOps continuous delivery tool for Kubernetes"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: GitOps continuous delivery tool cho Kubernetes</b><br>ArgoCD là công cụ CD theo GitOps, dùng Git repository làm source of truth để triển khai ứng dụng Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Docker Hub/ECR/GCR.<br>❌ B quá hẹp.<br>❌ C là DBMS."
  },
  {
    q: "What does ArgoCD use as the source of truth? (ArgoCD dùng gì làm source of truth?)",
    opts: [
      "Git repositories containing manifests (Git repository chứa manifests)",
      "Random manual kubectl commands (Command kubectl ngẫu nhiên)",
      "Developer local memory (Trí nhớ local của developer)",
      "Production shell history only (Chỉ lịch sử shell production)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Git repository chứa manifest</b><br>ArgoCD follow GitOps pattern, dùng Git repo làm source of truth để định nghĩa desired application state.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không versioned, không audit tốt."
  },
  {
    q: "In the ArgoCD diagram, what does ArgoCD do between Git repo and destination cluster? (Trong diagram ArgoCD, ArgoCD làm gì giữa Git repo và destination cluster?)",
    opts: [
      "Deletes the Git repository (Xóa Git repository)",
      "Pulls manifests from Git and deploys to the destination cluster (Pull manifests từ Git và deploy vào destination cluster)",
      "Converts Kubernetes into Docker Swarm (Chuyển Kubernetes thành Docker Swarm)",
      "Only sends email notifications (Chỉ gửi email notification)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Pull từ Git rồi deploy vào cluster</b><br>Diagram thể hiện Git Repo là source of manifests, ArgoCD pull và deploy tới destination cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ C không đúng.<br>❌ D không phải vai trò chính."
  },
  {
    q: "Which interface options are shown for managing ArgoCD? (Các interface nào được show để quản lý ArgoCD?)",
    opts: [
      "Only SSH into etcd (Chỉ SSH vào etcd)",
      "Only Docker CLI (Chỉ Docker CLI)",
      "UI, CLI, and API",
      "Only email approval (Chỉ email approval)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: UI, CLI, API</b><br>Slide ArgoCD model hiển thị Manage thông qua UI/CLI/API.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không đúng interface quản lý chính được nêu."
  },
  {
    q: "What does ArgoCD Controller do in the GitOps model? (ArgoCD Controller làm gì trong GitOps model?)",
    opts: [
      "Edits user laptops directly (Sửa laptop user trực tiếp)",
      "Stores only Docker image layers (Chỉ lưu Docker image layer)",
      "Deletes all clusters after sync (Xóa mọi cluster sau sync)",
      "Synchronizes Git state with one or more Kubernetes clusters (Đồng bộ state từ Git với một hoặc nhiều Kubernetes cluster)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Sync Git với cluster</b><br>Slide minh họa ArgoCD Controller sync Git với nhiều cluster như Cluster 1, Cluster 2, Cluster 3.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ B là registry/image storage.<br>❌ C sai."
  },
  {
    q: "What is Sync in ArgoCD Health Status? (Sync trong ArgoCD Health Status là gì?)",
    opts: [
      "The process by which an ArgoCD application reaches the desired target state from its current state (Quá trình app ArgoCD đạt trạng thái target mong muốn từ current state)",
      "A Docker build cache cleanup (Dọn Docker build cache)",
      "A Git branch deletion (Xóa branch Git)",
      "A Kubernetes namespace rename (Đổi tên namespace Kubernetes)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Quá trình đưa app về desired target state</b><br>Sync là quá trình ArgoCD áp dụng thay đổi để live state tiến tới desired state trong repository.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D không phải Sync của ArgoCD."
  },
  {
    q: "What does Healthy mean in ArgoCD? (Healthy trong ArgoCD nghĩa là gì?)",
    opts: [
      "The app is deleted (App đã bị xóa)",
      "The application's live and desired state are in sync (Live state và desired state của app đang khớp nhau)",
      "The app has no Git repository (App không có Git repository)",
      "The sync operation is impossible (Không thể sync)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Live và desired state in sync</b><br>Healthy nghĩa là app đang ở trạng thái tốt, live state và desired state phù hợp nhau.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Missing/Deleted case có thể có, không phải Healthy.<br>❌ C sai.<br>❌ D sai."
  },
  {
    q: "What does Out Of Sync mean in ArgoCD? (Out Of Sync trong ArgoCD nghĩa là gì?)",
    opts: [
      "The app is always healthy (App luôn healthy)",
      "The app has no Kubernetes resource (App không có resource Kubernetes)",
      "The desired state and live state are not the same (Desired state và live state không giống nhau)",
      "The repository has no commits (Repository không có commit)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Desired state khác live state</b><br>Out Of Sync báo hiệu cluster hiện tại không khớp với trạng thái được định nghĩa trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A ngược nghĩa.<br>❌ B có thể là Missing nhưng không phải định nghĩa Out Of Sync.<br>❌ D không đúng."
  },
  {
    q: "What does Progressing mean in ArgoCD? (Progressing trong ArgoCD nghĩa là gì?)",
    opts: [
      "The app has permanently failed (App đã fail vĩnh viễn)",
      "The app is unrelated to Git (App không liên quan Git)",
      "The app has no target state (App không có target state)",
      "The sync operation is ongoing and the app will be healthy soon (Sync đang diễn ra và app sẽ healthy sớm)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Sync đang diễn ra</b><br>Progressing nghĩa là ứng dụng đang trong quá trình đạt tới trạng thái healthy/desired state.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A gần với Degraded hơn.<br>❌ B sai vì ArgoCD là GitOps.<br>❌ C không đúng."
  },
  {
    q: "What does Degraded mean in ArgoCD? (Degraded trong ArgoCD nghĩa là gì?)",
    opts: [
      "The app health is degrading (Sức khỏe app đang suy giảm)",
      "The app is perfectly healthy (App hoàn toàn healthy)",
      "The app has just been created successfully with no issues (App vừa tạo thành công không lỗi)",
      "The repository has no desired state by design (Repository cố ý không có desired state)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: App health is degrading</b><br>Degraded cho biết app có vấn đề về health, không ở trạng thái khỏe mạnh như mong muốn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Healthy.<br>❌ C không phải Degraded.<br>❌ D không đúng."
  },
  {
    q: "Which ArgoCD status means the desired state and live state are the same? (Status nào nghĩa là desired state và live state giống nhau?)",
    opts: [
      "Out Of Sync",
      "Healthy",
      "Degraded",
      "Unknown"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Healthy</b><br>Theo slide, Healthy nghĩa là live state và desired state của application đang in sync.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A nghĩa là không khớp.<br>❌ C nghĩa là health xấu đi.<br>❌ D là không xác định."
  },
  {
    q: "Which ArgoCD status means the desired state and live state are not the same? (Status nào nghĩa là desired state và live state không giống nhau?)",
    opts: [
      "Healthy",
      "Synced",
      "Out Of Sync",
      "Completed"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Out Of Sync</b><br>Out Of Sync xuất hiện khi live cluster state lệch khỏi manifests/desired state trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B nghĩa là khớp hoặc đang đồng bộ tốt.<br>❌ D không phải status trong slide."
  },
  {
    q: "Which status should trigger concern because app health is worsening? (Status nào đáng lo vì health app đang xấu đi?)",
    opts: [
      "Healthy",
      "Synced",
      "Progressing",
      "Degraded"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Degraded</b><br>Degraded cho biết application health đang suy giảm và cần kiểm tra nguyên nhân.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B là trạng thái tốt hơn.<br>❌ C là đang tiến hành sync, chưa chắc lỗi."
  },
  {
    q: "Why does GitOps enable faster deployments? (Vì sao GitOps giúp deployment nhanh hơn?)",
    opts: [
      "Because approved Git changes can be automatically applied by deployment agents (Vì thay đổi đã approve trong Git có thể được agent tự động apply)",
      "Because it removes all automation (Vì nó loại bỏ automation)",
      "Because it requires manual kubectl for every change (Vì mọi thay đổi đều phải kubectl thủ công)",
      "Because it disables CI/CD (Vì nó tắt CI/CD)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Approved changes được tự động apply</b><br>GitOps giảm thao tác thủ công bằng cách tự động sync thay đổi từ Git sang cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D đều làm chậm hoặc trái với GitOps."
  },
  {
    q: "Why are GitOps deployments safer? (Vì sao deployment bằng GitOps an toàn hơn?)",
    opts: [
      "Because no change is tracked (Vì không có thay đổi nào được track)",
      "Because changes go through Git history, review, and automated sync (Vì thay đổi đi qua Git history, review và automated sync)",
      "Because everyone edits production directly (Vì ai cũng sửa production trực tiếp)",
      "Because desired state is unknown (Vì desired state không xác định)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Git history + review + automated sync</b><br>GitOps giúp giảm lỗi thủ công và tăng kiểm soát nhờ versioning, review và automation.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D đều tăng rủi ro."
  },
  {
    q: "Why does GitOps improve auditing? (Vì sao GitOps cải thiện auditing?)",
    opts: [
      "Because changes are hidden in production shells (Vì thay đổi bị ẩn trong shell production)",
      "Because cluster changes are never recorded (Vì thay đổi cluster không bao giờ được ghi lại)",
      "Because Git provides commit history, diffs, author, and timestamp (Vì Git cung cấp commit history, diff, author và timestamp)",
      "Because logs are deleted after sync (Vì log bị xóa sau sync)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Git có lịch sử thay đổi rõ ràng</b><br>Git lưu ai thay đổi, thay đổi gì, khi nào và có thể liên kết với PR/approval.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D đi ngược auditing."
  },
  {
    q: "Why does GitOps support better traceability? (Vì sao GitOps hỗ trợ traceability tốt hơn?)",
    opts: [
      "Because it avoids Git completely (Vì nó tránh Git hoàn toàn)",
      "Because it stores no desired state (Vì không lưu desired state)",
      "Because it requires direct cluster hotfixes only (Vì chỉ yêu cầu hotfix trực tiếp cluster)",
      "Because every desired-state change can be traced to a Git commit (Vì mọi thay đổi desired state có thể trace về Git commit)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Trace về Git commit</b><br>Với GitOps, mỗi thay đổi trạng thái mong muốn đều gắn với commit, diff và người thực hiện.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C trái với GitOps traceability."
  },
  {
    q: "In a traditional deployment model, what often applies manifests to the cluster? (Trong traditional deployment model, cái gì thường apply manifest vào cluster?)",
    opts: [
      "A CI/CD job or operator using kubectl apply (CI/CD job hoặc operator dùng kubectl apply)",
      "Only ArgoCD pull-based sync (Chỉ ArgoCD pull-based sync)",
      "Only Git without any tool (Chỉ Git không có tool nào)",
      "Only user browser cache (Chỉ cache trình duyệt user)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: CI/CD job hoặc operator dùng kubectl apply</b><br>Slide Traditional Model thể hiện flow commit, build, push image, rồi apply vào cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là GitOps/ArgoCD model.<br>❌ C thiếu deployment tool.<br>❌ D không liên quan."
  },
  {
    q: "In ArgoCD GitOps model, who pulls from Git? (Trong mô hình ArgoCD GitOps, ai pull từ Git?)",
    opts: [
      "The end user browser (Trình duyệt end user)",
      "ArgoCD",
      "Dockerfile",
      "Kubernetes Secret only"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: ArgoCD</b><br>Diagram cho thấy ArgoCD pull manifests từ Git Repo rồi deploy vào destination cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không liên quan.<br>❌ C là file build image.<br>❌ D chỉ lưu dữ liệu nhạy cảm."
  },
  {
    q: "What does Git Repo represent in the ArgoCD diagram? (Git Repo trong diagram ArgoCD đại diện cho gì?)",
    opts: [
      "Destination Cluster",
      "Container Runtime",
      "Source of Manifests",
      "Load Balancer"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Source of Manifests</b><br>Git Repo chứa Kubernetes manifests/desired state và là source of truth cho ArgoCD.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là cluster đích.<br>❌ B là runtime như containerd.<br>❌ D không phải Git repo."
  },
  {
    q: "What does Destination Cluster mean in ArgoCD? (Destination Cluster trong ArgoCD nghĩa là gì?)",
    opts: [
      "The repository where source code is written (Repo chứa source code)",
      "The local laptop where developer writes code (Laptop local của developer)",
      "The Docker image registry (Docker image registry)",
      "The Kubernetes cluster where manifests are deployed (Kubernetes cluster nơi manifests được deploy)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Cluster đích để deploy</b><br>Destination Cluster là Kubernetes cluster mà ArgoCD deploy application manifests vào.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Git repo/source.<br>❌ B không phải cluster đích.<br>❌ C là registry."
  },
  {
    q: "Which statement best compares Imperative and Declarative approaches? (Phát biểu nào so sánh đúng Imperative và Declarative?)",
    opts: [
      "Imperative uses direct commands; Declarative describes desired state in manifests (Imperative dùng command trực tiếp; Declarative mô tả desired state bằng manifest)",
      "Imperative always uses Git as source of truth; Declarative forbids Git (Imperative luôn dùng Git làm source of truth; Declarative cấm Git)",
      "Imperative has no kubectl commands; Declarative only uses shell history (Imperative không có kubectl; Declarative chỉ dùng shell history)",
      "They are exactly the same in every aspect (Hai cách giống hệt nhau mọi mặt)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Command trực tiếp vs desired state manifest</b><br>Imperative mô tả thao tác cần làm; Declarative mô tả trạng thái mong muốn để hệ thống tự converge.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D đều sai."
  },
  {
    q: "Why is the Declarative Way important for GitOps? (Vì sao Declarative Way quan trọng với GitOps?)",
    opts: [
      "Because it avoids storing desired state (Vì nó tránh lưu desired state)",
      "Because desired state can be stored, reviewed, versioned, and synchronized from Git (Vì desired state có thể lưu, review, version và sync từ Git)",
      "Because it requires manual SSH hotfixes (Vì nó yêu cầu SSH hotfix thủ công)",
      "Because it deletes all Kubernetes manifests (Vì nó xóa toàn bộ manifest Kubernetes)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Desired state có thể version trong Git</b><br>GitOps phụ thuộc vào declarative manifests để Git trở thành source of truth cho hệ thống.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D trái với GitOps."
  },
  {
    q: "Which one is a direct risk of the Traditional Operation Model? (Rủi ro trực tiếp của Traditional Operation Model là gì?)",
    opts: [
      "All changes are automatically audited in Git (Mọi thay đổi tự động audit trong Git)",
      "No one can access the cluster (Không ai truy cập được cluster)",
      "Direct cluster access can create untracked manual changes (Truy cập cluster trực tiếp có thể tạo thay đổi thủ công không được trace)",
      "Configuration drift is impossible (Configuration drift là không thể)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Manual changes khó trace</b><br>Khi user thao tác trực tiếp bằng kubectl, cluster có thể lệch khỏi desired state và khó audit nếu không qua Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là lợi ích GitOps.<br>❌ B sai với traditional direct access.<br>❌ D sai."
  },
  {
    q: "Which phrase best describes GitOps source of truth? (Cụm nào mô tả đúng source of truth của GitOps?)",
    opts: [
      "Production shell history (Lịch sử shell production)",
      "Developer local folder only (Chỉ folder local developer)",
      "Random cluster changes (Thay đổi cluster ngẫu nhiên)",
      "Git repository"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Git repository</b><br>GitOps dùng Git repository làm source of truth cho desired state của application và infrastructure.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không phù hợp source of truth có versioning/audit."
  },
  {
    q: "Which GitOps benefit is related to restoring an older commit? (Lợi ích GitOps nào liên quan đến việc restore commit cũ?)",
    opts: [
      "Easier rollbacks",
      "No traceability",
      "Manual drift",
      "Disabling Git"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Easier rollbacks</b><br>Vì desired state nằm trong Git, rollback có thể thực hiện bằng cách revert/checkout về commit hoặc version trước.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D trái với GitOps."
  },
  {
    q: "Which GitOps benefit is related to reducing manual production changes? (Lợi ích GitOps nào liên quan đến giảm thay đổi thủ công production?)",
    opts: [
      "More direct kubectl usage (Dùng kubectl trực tiếp nhiều hơn)",
      "Safer deployments",
      "No approval process (Không có approval process)",
      "Less automation (Ít automation hơn)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Safer deployments</b><br>GitOps làm deployment an toàn hơn bằng cách đưa thay đổi qua Git/review/automation thay vì sửa trực tiếp production.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/D ngược với GitOps.<br>❌ C không đúng với change approval."
  },
  {
    q: "Which GitOps benefit is related to deployment speed? (Lợi ích GitOps nào liên quan đến tốc độ deployment?)",
    opts: [
      "Slower deployments",
      "No deployments",
      "Faster deployments",
      "Manual deployments only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Faster deployments</b><br>Deployment agent tự động sync thay đổi đã approve từ Git sang cluster, giúp giảm thời gian thao tác thủ công.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D đều trái với lợi ích trong slide."
  },
  {
    q: "Which GitOps benefit is related to proving what happened during a change? (Lợi ích GitOps nào liên quan đến việc chứng minh thay đổi đã xảy ra như thế nào?)",
    opts: [
      "No history",
      "Hidden changes",
      "Manual patching",
      "Straightforward auditing"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Straightforward auditing</b><br>Git history, PR, approval và diff giúp audit thay đổi rõ ràng hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C làm audit khó hơn."
  },
  {
    q: "Which term means ArgoCD is applying changes to reach desired state? (Thuật ngữ nào nghĩa là ArgoCD đang apply thay đổi để đạt desired state?)",
    opts: [
      "Sync",
      "Delete",
      "Fork",
      "Clone only"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Sync</b><br>Sync là quá trình ArgoCD đưa application từ current state tới desired target state trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là xóa.<br>❌ C/D là Git operations khác."
  },
  {
    q: "Which ArgoCD status should appear when live state matches desired state and app is good? (Status nào xuất hiện khi live state khớp desired state và app tốt?)",
    opts: [
      "Out Of Sync",
      "Healthy",
      "Degraded",
      "Missing"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Healthy</b><br>Healthy nghĩa là application live state và desired state đang in sync và app ở trạng thái tốt.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là lệch state.<br>❌ C health xấu đi.<br>❌ D resource bị thiếu."
  },
  {
    q: "Which ArgoCD status indicates the app may become healthy soon because sync is still ongoing? (Status nào cho biết app có thể healthy sớm vì sync vẫn đang diễn ra?)",
    opts: [
      "Healthy",
      "Out Of Sync",
      "Progressing",
      "Deleted"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Progressing</b><br>Progressing nghĩa là sync operation đang diễn ra và application có thể healthy sau khi hoàn tất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là đã healthy.<br>❌ B là lệch state.<br>❌ D không phải status trong slide."
  },
  {
    q: "Which ArgoCD status indicates worsening app health? (Status nào cho biết health app đang xấu đi?)",
    opts: [
      "Synced",
      "Healthy",
      "Progressing",
      "Degraded"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Degraded</b><br>Degraded nghĩa là app health đang suy giảm, cần điều tra lỗi resource, workload, readiness hoặc dependency.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B là trạng thái tốt hơn.<br>❌ C là đang trong quá trình sync."
  },
  {
    q: "Which model reduces the need for direct kubectl access to the cluster? (Model nào giảm nhu cầu dùng kubectl trực tiếp vào cluster?)",
    opts: [
      "GitOps Operation Model",
      "Traditional Operation Model",
      "Manual Ops Model",
      "Throw-it-over-wall Model"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: GitOps Operation Model</b><br>GitOps model đưa thay đổi qua configuration repository và deployment agent thay vì user thao tác trực tiếp cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D dựa nhiều vào thao tác thủ công hoặc quy trình truyền thống."
  },
  {
    q: "Which tool in the slide is used as GitOps CD for Kubernetes? (Công cụ nào trong slide dùng làm GitOps CD cho Kubernetes?)",
    opts: [
      "Jenkins only",
      "ArgoCD",
      "Docker Compose",
      "RCS"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: ArgoCD</b><br>Slide định nghĩa ArgoCD là declarative GitOps continuous delivery tool for Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là CI/CD tool chung nhưng không phải nội dung chính ở đây.<br>❌ C là Docker local multi-container tool.<br>❌ D là local VCS cũ."
  },
  {
    q: "Which repository content is most important for ArgoCD deployment? (Nội dung repo nào quan trọng nhất cho ArgoCD deployment?)",
    opts: [
      "Office documents only (Chỉ tài liệu văn phòng)",
      "Browser screenshots only (Chỉ screenshot trình duyệt)",
      "Kubernetes manifests or declarative application definitions (Kubernetes manifests hoặc định nghĩa app dạng declarative)",
      "Compiled CPU firmware only (Chỉ firmware CPU đã compile)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Manifests/Declarative definitions</b><br>ArgoCD đọc manifest từ Git để biết desired state cần deploy vào cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không phải nguồn desired state Kubernetes."
  },
  {
    q: "Which statement is TRUE about GitOps and rollbacks? (Phát biểu nào đúng về GitOps và rollback?)",
    opts: [
      "Rollback is impossible because Git has no history (Không thể rollback vì Git không có history)",
      "Rollback requires deleting the whole cluster every time (Rollback luôn phải xóa cả cluster)",
      "Rollback must be done only by editing running Pods manually (Rollback chỉ làm bằng sửa Pod đang chạy thủ công)",
      "Rollback is easier because previous desired states are versioned in Git (Rollback dễ hơn vì desired state cũ được version trong Git)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Desired state cũ được version trong Git</b><br>GitOps hỗ trợ rollback bằng cách quay lại commit/version trước của manifests.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Git có history.<br>❌ B/C quá rủi ro và không đúng."
  },
  {
    q: "Which statement is TRUE about GitOps and configuration drift? (Phát biểu nào đúng về GitOps và configuration drift?)",
    opts: [
      "GitOps helps eliminate configuration drift by monitoring and syncing desired state (GitOps giúp loại bỏ drift bằng cách monitor và sync desired state)",
      "GitOps creates drift intentionally and never fixes it (GitOps cố ý tạo drift và không sửa)",
      "GitOps ignores the live cluster state completely (GitOps bỏ qua hoàn toàn live cluster state)",
      "GitOps stores desired state only in Slack messages (GitOps chỉ lưu desired state trong Slack)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Monitor và sync desired state</b><br>Deployment agent như ArgoCD so sánh Git desired state với live cluster state để phát hiện và xử lý drift.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D trái với GitOps."
  },
  {
    q: "Which statement is TRUE about GitOps and approvals? (Phát biểu nào đúng về GitOps và approval?)",
    opts: [
      "Approved changes are ignored forever (Thay đổi đã approve bị bỏ qua mãi mãi)",
      "Approved changes can be automated and applied to the system (Thay đổi đã approve có thể được tự động apply vào hệ thống)",
      "Approvals remove all Git history (Approval xóa toàn bộ Git history)",
      "Approval means direct kubectl edit only (Approval nghĩa là chỉ sửa kubectl trực tiếp)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Approved changes được automation apply</b><br>Nguyên tắc GitOps trong slide nêu changes approved are automated and applied to the system.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C/D không đúng với GitOps principles."
  },
  {
    q: "Which statement is TRUE about ArgoCD sync direction? (Phát biểu nào đúng về hướng sync của ArgoCD?)",
    opts: [
      "ArgoCD randomly writes code into Git without cluster state (ArgoCD ghi code ngẫu nhiên vào Git không cần cluster state)",
      "ArgoCD deletes manifests before deploying (ArgoCD xóa manifest trước khi deploy)",
      "ArgoCD pulls desired manifests from Git and applies them to the cluster (ArgoCD pull manifests từ Git và apply vào cluster)",
      "ArgoCD only pushes Docker images to registry (ArgoCD chỉ push Docker image lên registry)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Pull từ Git và apply vào cluster</b><br>ArgoCD triển khai theo GitOps pattern: Git là source of manifests, ArgoCD sync vào destination cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/D không đúng vai trò ArgoCD."
  },
  {
    q: "Which slide topic comes after 'Why we need GitOps?' in the agenda? (Trong agenda, mục nào đứng sau 'Why we need GitOps?')",
    opts: [
      "What is Docker?",
      "Docker Networking",
      "Kubernetes Storage",
      "GitOps Principles?"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: GitOps Principles?</b><br>Agenda trong slide gồm What is GitOps, GitOps Operation Model, Why we need GitOps, GitOps Principles, What is ArgoCD, Demo.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C thuộc chương Docker/Kubernetes, không phải agenda GitOps này."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "ArgoCD - GitOps CD tool for Kubernetes",
      "Out Of Sync - live and desired states are the same",
      "Progressing - app health is degrading",
      "Healthy - desired and live states are different"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: ArgoCD là GitOps CD tool cho Kubernetes</b><br>ArgoCD là declarative GitOps continuous delivery tool for Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Healthy/Synced hơn.<br>❌ C là Degraded.<br>❌ D là Out Of Sync."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Imperative Way - YAML desired state only",
      "Declarative Way - YAML manifest describing desired state",
      "GitOps - direct kubectl only",
      "Traditional Ops - no Dev-QA handoff"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Declarative Way dùng YAML desired state</b><br>Declarative Way mô tả desired state bằng manifest YAML như Deployment manifest trong slide.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là imperative command.<br>❌ C trái GitOps.<br>❌ D sai vì traditional có handoff Dev-QA-Ops."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Sync - permanent app failure",
      "Healthy - live and desired state are not same",
      "Out Of Sync - desired and live state are not the same",
      "Degraded - app is fully healthy"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Out Of Sync là desired/live không giống nhau</b><br>Out Of Sync báo hiệu trạng thái thực tế khác với trạng thái mong muốn trong Git.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ B là Healthy bị diễn giải sai.<br>❌ D ngược nghĩa Degraded."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "GitOps - no Git repository needed",
      "ArgoCD - database backup tool",
      "Traditional Ops - deployment agent monitors Git continuously",
      "Progressing - sync operation is ongoing"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Progressing nghĩa là sync đang diễn ra</b><br>Progressing trong ArgoCD Health Status là sync operation đang ongoing và app có thể healthy sớm.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Git là trung tâm GitOps.<br>❌ B sai.<br>❌ C là GitOps model hơn."
  },
  {
    q: "Which is the best reason to avoid direct cluster changes in GitOps? (Lý do tốt nhất để tránh sửa cluster trực tiếp trong GitOps là gì?)",
    opts: [
      "Direct changes can bypass Git history and create drift (Thay đổi trực tiếp có thể bypass Git history và tạo drift)",
      "Direct changes always improve auditing (Thay đổi trực tiếp luôn cải thiện audit)",
      "Direct changes automatically create Pull Requests (Thay đổi trực tiếp tự tạo PR)",
      "Direct changes make desired state clearer in Git (Thay đổi trực tiếp làm desired state trong Git rõ hơn)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Bypass Git history và tạo drift</b><br>Nếu sửa cluster trực tiếp, Git không còn phản ánh đúng trạng thái thực tế, làm mất audit/traceability.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D sai vì thay đổi trực tiếp không tự tạo audit trail trong Git."
  },
  {
    q: "Which is the best description of GitOps Operation Model? (Mô tả nào đúng nhất về GitOps Operation Model?)",
    opts: [
      "Users directly patch live Pods and skip Git (User sửa Pod live trực tiếp và bỏ qua Git)",
      "Git repository stores desired state and an agent synchronizes it to the cluster (Git repo lưu desired state và agent sync vào cluster)",
      "QA manually copies files to production servers (QA copy file thủ công lên server production)",
      "Docker Hub stores all Kubernetes desired state by default (Docker Hub mặc định lưu toàn bộ desired state K8S)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Git desired state + agent sync</b><br>GitOps Operation Model dùng config repo làm source of truth và deployment agent để apply/sync cluster.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/C là manual/traditional.<br>❌ D sai vì Docker Hub là image registry."
  },
  {
    q: "Which statement best explains why GitOps is declarative? (Phát biểu nào giải thích đúng vì sao GitOps mang tính declarative?)",
    opts: [
      "It stores only shell command history (Nó chỉ lưu lịch sử shell command)",
      "It avoids configuration files (Nó tránh file cấu hình)",
      "It defines what the desired system state should be, not just manual steps (Nó định nghĩa hệ thống nên ở trạng thái nào, không chỉ là các bước thủ công)",
      "It requires all changes to be done by clicking UI only (Nó yêu cầu mọi thay đổi chỉ bằng click UI)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Định nghĩa desired state</b><br>Declarative nghĩa là khai báo trạng thái mong muốn; agent/controller sẽ làm việc để cluster đạt trạng thái đó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là imperative/history.<br>❌ B sai vì cần config/manifest.<br>❌ D không phải bản chất declarative."
  },
  {
    q: "Which statement best describes the relationship between GitOps and ArgoCD? (Phát biểu nào mô tả đúng quan hệ giữa GitOps và ArgoCD?)",
    opts: [
      "GitOps is a database and ArgoCD is a database client (GitOps là database còn ArgoCD là database client)",
      "GitOps replaces Kubernetes and ArgoCD replaces Docker (GitOps thay Kubernetes và ArgoCD thay Docker)",
      "GitOps is a hardware standard and ArgoCD is a CPU scheduler (GitOps là chuẩn phần cứng còn ArgoCD là CPU scheduler)",
      "GitOps is the practice/model; ArgoCD is a tool implementing GitOps for Kubernetes (GitOps là practice/model; ArgoCD là tool triển khai GitOps cho Kubernetes)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: GitOps là model, ArgoCD là tool</b><br>GitOps là cách vận hành dựa trên Git source of truth; ArgoCD là công cụ CD triển khai mô hình đó cho Kubernetes.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C đều sai khái niệm."
  }
];
