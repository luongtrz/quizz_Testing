// 0.2 Architecture Patterns (60 câu)
DEVOPS_QUIZ_DATA.topics[1].questions = [
  {
    "q": "What is Layered Architecture? (Layered Architecture là gì?)",
    "opts": [
      "An architecture where all components communicate only by events (Kiến trúc mọi thành phần chỉ giao tiếp bằng event)",
      "An architecture with a small core and plugins (Kiến trúc có lõi nhỏ và plugin)",
      "An architecture where the app runs only as cloud functions (Kiến trúc chỉ chạy app bằng cloud functions)",
      "An architecture that divides an application into multiple layers such as UI, business logic, and data access (Kiến trúc chia ứng dụng thành nhiều tầng như UI, business logic và data access)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Layered Architecture chia ứng dụng thành nhiều tầng</b><br>Layered Architecture tổ chức hệ thống thành các layer như Presentation/UI, Business Logic và Data Access. Mỗi layer có trách nhiệm riêng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Event-driven Architecture.<br>❌ B là Microkernel Architecture.<br>❌ C là Serverless Architecture."
  },
  {
    "q": "Which layers are commonly found in Layered Architecture? (Các tầng phổ biến trong Layered Architecture là gì?)",
    "opts": [
      "Producer, Broker, Consumer",
      "Kernel, Plugin, Extension",
      "Presentation, Business Logic, Data Access",
      "Function, Trigger, Cloud Provider"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Presentation, Business Logic, Data Access</b><br>Layered Architecture thường gồm Presentation Layer xử lý giao diện, Business Logic Layer xử lý nghiệp vụ, và Data Access Layer xử lý truy cập dữ liệu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Event-driven Architecture.<br>❌ B thuộc Microkernel Architecture.<br>❌ D thuộc Serverless Architecture."
  },
  {
    "q": "What is the main role of the Presentation layer? (Vai trò chính của Presentation layer là gì?)",
    "opts": [
      "Store data permanently (Lưu dữ liệu lâu dài)",
      "Scale containers automatically (Tự động scale container)",
      "Execute background cloud functions only (Chỉ chạy cloud function nền)",
      "Handle user interface and user interaction (Xử lý giao diện và tương tác người dùng)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Xử lý UI và tương tác người dùng</b><br>Presentation layer là tầng gần người dùng nhất, phụ trách giao diện, input/output và tương tác với user.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc database/persistence layer.<br>❌ B liên quan orchestration/cloud.<br>❌ C liên quan serverless."
  },
  {
    "q": "What is the main role of the Business Logic layer? (Vai trò chính của Business Logic layer là gì?)",
    "opts": [
      "Only render HTML/CSS (Chỉ render HTML/CSS)",
      "Handle business rules and application logic (Xử lý luật nghiệp vụ và logic ứng dụng)",
      "Only store files and database records (Chỉ lưu file và record database)",
      "Only monitor CPU and memory (Chỉ monitor CPU và RAM)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Xử lý business rules</b><br>Business Logic layer chứa các quy tắc nghiệp vụ, xử lý dữ liệu theo logic của ứng dụng trước khi gửi xuống data layer hoặc trả về UI.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Presentation layer.<br>❌ C thuộc Data/Persistence layer.<br>❌ D thuộc monitoring/operations."
  },
  {
    "q": "What is an advantage of Layered Architecture? (Ưu điểm của Layered Architecture là gì?)",
    "opts": [
      "No need for any testing (Không cần testing)",
      "Always has the best performance (Luôn có hiệu năng tốt nhất)",
      "Easy maintenance and modular updates (Dễ bảo trì và cập nhật từng module/tầng)",
      "Eliminates all deployment complexity (Loại bỏ toàn bộ độ phức tạp deploy)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Easy maintenance and modular updates</b><br>Do hệ thống được chia thành các tầng rõ ràng, việc bảo trì hoặc sửa một phần có thể ít ảnh hưởng đến toàn bộ hệ thống hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì mọi kiến trúc đều cần testing.<br>❌ B sai vì Layered có thể bị giảm performance do đi qua nhiều layer.<br>❌ D sai vì deployment vẫn cần quản lý."
  },
  {
    "q": "What is a disadvantage of Layered Architecture? (Nhược điểm của Layered Architecture là gì?)",
    "opts": [
      "It cannot be maintained (Không thể bảo trì)",
      "It cannot be used for enterprise applications (Không thể dùng cho enterprise applications)",
      "It requires cloud vendor lock-in (Bắt buộc bị phụ thuộc cloud vendor)",
      "Performance may be impacted due to multiple layers (Hiệu năng có thể bị ảnh hưởng do đi qua nhiều tầng)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Performance may be impacted</b><br>Vì request có thể phải đi qua nhiều layer, hệ thống có thể có thêm overhead và ảnh hưởng performance.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Layered khá dễ bảo trì.<br>❌ B sai vì enterprise app là use case phổ biến.<br>❌ C là nhược điểm thường gặp của Serverless."
  },
  {
    "q": "Which use case best fits Layered Architecture? (Use case nào phù hợp nhất với Layered Architecture?)",
    "opts": [
      "Only real-time IoT event streaming (Chỉ streaming event IoT thời gian thực)",
      "Only small cloud functions (Chỉ cloud functions nhỏ)",
      "Enterprise applications and management software (Ứng dụng doanh nghiệp và phần mềm quản lý)",
      "Only IDE plugin systems (Chỉ hệ thống plugin của IDE)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Enterprise applications and management software</b><br>Layered Architecture phù hợp với hệ thống enterprise hoặc phần mềm quản lý vì cấu trúc rõ ràng, dễ bảo trì.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A phù hợp Event-driven.<br>❌ B phù hợp Serverless.<br>❌ D phù hợp Microkernel."
  },
  {
    "q": "Which frameworks are examples related to Layered Architecture? (Framework nào là ví dụ liên quan Layered Architecture?)",
    "opts": [
      "Kafka, RabbitMQ, Pulsar",
      "Visual Studio Code, Eclipse",
      "Laravel, ASP.NET MVC, Django",
      "AWS Lambda, Azure Functions"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Laravel, ASP.NET MVC, Django</b><br>Các web framework như Laravel, ASP.NET MVC và Django thường tổ chức ứng dụng theo các tầng như view/controller/model/service/data access.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là message/event platforms.<br>❌ B là IDE, phù hợp Microkernel.<br>❌ D là Serverless/FaaS."
  },
  {
    "q": "Why does Layered Architecture support modular updates? (Vì sao Layered Architecture hỗ trợ cập nhật module dễ hơn?)",
    "opts": [
      "Because each layer has a clear responsibility (Vì mỗi tầng có trách nhiệm rõ ràng)",
      "Because all logic is placed in one file (Vì toàn bộ logic nằm trong một file)",
      "Because it avoids separation of concerns (Vì nó tránh phân tách trách nhiệm)",
      "Because it never uses databases (Vì nó không bao giờ dùng database)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Clear responsibility per layer</b><br>Mỗi layer phụ trách một phần riêng, nên thay đổi ở UI hoặc data access có thể được cô lập tốt hơn nếu thiết kế đúng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và C trái với ý tưởng layered.<br>❌ D sai vì Layered thường có data/database layer."
  },
  {
    "q": "Which statement is TRUE about Layered Architecture? (Phát biểu nào đúng về Layered Architecture?)",
    "opts": [
      "It is always the best for real-time streaming (Luôn tốt nhất cho streaming thời gian thực)",
      "It removes the need for business logic (Loại bỏ nhu cầu business logic)",
      "It is the same as Serverless Architecture (Giống hệt Serverless Architecture)",
      "It is easy to understand but may have overhead between layers (Dễ hiểu nhưng có thể có overhead giữa các tầng)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Easy to understand but may have overhead</b><br>Layered Architecture rõ ràng, dễ hiểu, dễ bảo trì, nhưng có thể ảnh hưởng performance vì request đi qua nhiều tầng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A phù hợp Event-driven hơn.<br>❌ B sai vì business logic là tầng quan trọng.<br>❌ C sai vì Serverless là kiến trúc khác."
  },
  {
    "q": "What is Event-driven Architecture? (Event-driven Architecture là gì?)",
    "opts": [
      "The application is built as one single unit (Ứng dụng được xây thành một khối duy nhất)",
      "The app is divided into UI, business, and data layers only (App chỉ chia thành UI, business và data layer)",
      "The app has a small core and plugins only (App chỉ có lõi nhỏ và plugin)",
      "Components communicate through events (Các thành phần giao tiếp thông qua event)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Components communicate through events</b><br>Event-driven Architecture là kiến trúc trong đó các thành phần phát sinh, gửi, nhận và xử lý event để giao tiếp với nhau.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Monolithic.<br>❌ B là Layered.<br>❌ C là Microkernel."
  },
  {
    "q": "Which components are commonly involved in Event-driven Architecture? (Thành phần nào thường có trong Event-driven Architecture?)",
    "opts": [
      "Presentation layer, business layer, data layer",
      "Event producer, event broker/channel, event consumer",
      "Kernel, plugin, extension",
      "Function, trigger, cloud billing"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Producer, broker/channel, consumer</b><br>Event producer tạo event, broker/channel truyền event, event consumer nhận và xử lý event.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thuộc Layered.<br>❌ C thuộc Microkernel.<br>❌ D thuộc Serverless."
  },
  {
    "q": "What is an advantage of Event-driven Architecture? (Ưu điểm của Event-driven Architecture là gì?)",
    "opts": [
      "Flexible and scalable (Linh hoạt và dễ scale)",
      "Always easiest to debug (Luôn dễ debug nhất)",
      "No need for monitoring (Không cần monitoring)",
      "Only works for small internal apps (Chỉ dùng cho app nội bộ nhỏ)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Flexible and scalable</b><br>Event-driven giúp các component tách rời hơn, dễ mở rộng consumer/producer và phù hợp hệ thống cần phản ứng theo sự kiện.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì debugging thường khó hơn.<br>❌ C sai vì cần monitoring mạnh.<br>❌ D sai vì có thể dùng cho hệ thống lớn."
  },
  {
    "q": "Why is Event-driven Architecture suitable for real-time processing? (Vì sao Event-driven Architecture phù hợp xử lý thời gian thực?)",
    "opts": [
      "Because all code runs in one process (Vì toàn bộ code chạy trong một process)",
      "Because it avoids asynchronous communication (Vì nó tránh giao tiếp bất đồng bộ)",
      "Because it does not need data flow (Vì không cần luồng dữ liệu)",
      "Because components can react to events as they occur (Vì các thành phần có thể phản ứng khi event xảy ra)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: React to events as they occur</b><br>Khi sự kiện phát sinh, consumer có thể nhận và xử lý gần như ngay lập tức, nên phù hợp real-time hoặc near real-time systems.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là kiểu monolith/single process.<br>❌ B sai vì event-driven thường dùng async communication.<br>❌ C sai vì event chính là một dạng data/message flow."
  },
  {
    "q": "What is a common disadvantage of Event-driven Architecture? (Nhược điểm phổ biến của Event-driven Architecture là gì?)",
    "opts": [
      "Debugging is challenging and strong monitoring is required (Debug khó và cần monitoring mạnh)",
      "It cannot scale (Không thể scale)",
      "It cannot support real-time systems (Không hỗ trợ hệ thống thời gian thực)",
      "It always requires a single database only (Luôn bắt buộc dùng một database duy nhất)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Debugging is challenging</b><br>Do luồng xử lý phân tán qua nhiều event và consumer, việc trace lỗi, thứ tự event và trạng thái hệ thống có thể phức tạp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì Event-driven có khả năng scale tốt.<br>❌ C sai vì nó phù hợp real-time.<br>❌ D không phải đặc điểm bắt buộc."
  },
  {
    "q": "Which use case is suitable for Event-driven Architecture? (Use case nào phù hợp Event-driven Architecture?)",
    "opts": [
      "Only static websites (Chỉ website tĩnh)",
      "IoT systems and streaming data processing (Hệ thống IoT và xử lý dữ liệu streaming)",
      "Only simple CRUD admin panels (Chỉ admin CRUD đơn giản)",
      "Only desktop text editors (Chỉ trình soạn thảo desktop)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: IoT and streaming data</b><br>IoT và streaming data thường có nhiều event liên tục, nên Event-driven Architecture là lựa chọn phù hợp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và C có thể dùng kiến trúc đơn giản hơn.<br>❌ D phù hợp Microkernel nếu có plugin system."
  },
  {
    "q": "Which technologies are commonly associated with Event-driven Architecture? (Công nghệ nào thường gắn với Event-driven Architecture?)",
    "opts": [
      "Laravel and Django",
      "Visual Studio Code and Eclipse",
      "Kafka and RabbitMQ",
      "Terraform and Ansible"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Kafka and RabbitMQ</b><br>Kafka và RabbitMQ là các nền tảng message/event broker phổ biến dùng để truyền event/message giữa các service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là web frameworks.<br>❌ B là IDE/plugin systems.<br>❌ D là IaC/configuration tools."
  },
  {
    "q": "In Event-driven Architecture, what does an event producer do? (Trong Event-driven Architecture, event producer làm gì?)",
    "opts": [
      "Only stores UI templates (Chỉ lưu UI template)",
      "Creates or publishes events (Tạo hoặc phát event)",
      "Only manages serverless billing (Chỉ quản lý chi phí serverless)",
      "Only compiles source code (Chỉ compile source code)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Creates/publishes events</b><br>Event producer là thành phần tạo ra event khi có hành động hoặc thay đổi trạng thái xảy ra.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không mô tả vai trò producer trong event-driven."
  },
  {
    "q": "In Event-driven Architecture, what does an event consumer do? (Trong Event-driven Architecture, event consumer làm gì?)",
    "opts": [
      "Only designs database schema (Chỉ thiết kế database schema)",
      "Only renders CSS (Chỉ render CSS)",
      "Only manages sprint backlog (Chỉ quản lý sprint backlog)",
      "Receives and processes events (Nhận và xử lý event)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Receives and processes events</b><br>Event consumer đăng ký nhận event và thực hiện hành động tương ứng, ví dụ gửi email, cập nhật dữ liệu, tạo notification.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải vai trò consumer."
  },
  {
    "q": "Why does Event-driven Architecture require strong monitoring? (Vì sao Event-driven Architecture cần monitoring mạnh?)",
    "opts": [
      "Because it has no components (Vì nó không có component)",
      "Because all errors are visible in one screen by default (Vì mặc định mọi lỗi đều hiện trên một màn hình)",
      "Because it does not process data (Vì nó không xử lý dữ liệu)",
      "Because failures may happen across asynchronous and distributed event flows (Vì lỗi có thể xảy ra trong các luồng event bất đồng bộ và phân tán)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Distributed async flows are hard to trace</b><br>Khi nhiều producer/consumer xử lý event bất đồng bộ, team cần log, metrics và tracing để biết event đang đi đâu và lỗi ở đâu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì có nhiều component.<br>❌ B sai vì lỗi không dễ thấy mặc định.<br>❌ C sai vì event-driven thường xử lý data/event."
  },
  {
    "q": "What is Microkernel Architecture? (Microkernel Architecture là gì?)",
    "opts": [
      "An architecture with a small core and extensible plugins (Kiến trúc có lõi nhỏ và các plugin mở rộng)",
      "An architecture where all services are independent APIs (Kiến trúc mọi service độc lập giao tiếp qua API)",
      "An architecture built as a single frontend-backend unit (Kiến trúc xây thành một khối frontend-backend duy nhất)",
      "An architecture that only runs cloud functions (Kiến trúc chỉ chạy cloud function)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Small core + plugins</b><br>Microkernel Architecture gồm một phần lõi nhỏ chứa chức năng cốt lõi, còn tính năng mở rộng được thêm bằng plugin.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Microservices.<br>❌ C là Monolithic.<br>❌ D là Serverless."
  },
  {
    "q": "What is the role of the kernel/core in Microkernel Architecture? (Vai trò của kernel/core trong Microkernel Architecture là gì?)",
    "opts": [
      "Provide minimal core functionality and extension points (Cung cấp chức năng lõi tối thiểu và điểm mở rộng)",
      "Store all business features as one large module (Lưu toàn bộ tính năng nghiệp vụ trong một module lớn)",
      "Replace all plugins (Thay thế toàn bộ plugin)",
      "Run only database queries (Chỉ chạy truy vấn database)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Core functionality and extension points</b><br>Kernel/core nên nhỏ, ổn định, chứa logic nền tảng và cho phép plugin mở rộng chức năng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B làm core quá lớn và phức tạp.<br>❌ C sai vì plugin là phần quan trọng.<br>❌ D quá hẹp."
  },
  {
    "q": "What is the role of plugins in Microkernel Architecture? (Vai trò của plugin trong Microkernel Architecture là gì?)",
    "opts": [
      "Make the system impossible to extend (Làm hệ thống không thể mở rộng)",
      "Extend or customize the system without changing the core too much (Mở rộng hoặc tùy biến hệ thống mà không thay đổi core quá nhiều)",
      "Remove the need for architecture (Loại bỏ nhu cầu kiến trúc)",
      "Only monitor CPU usage (Chỉ monitor CPU)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Extend/customize system</b><br>Plugin cho phép thêm chức năng mới, tùy biến behavior hoặc tích hợp thêm mà không phải sửa nhiều vào core.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với mục tiêu plugin.<br>❌ C sai vì vẫn cần kiến trúc tốt.<br>❌ D không phải vai trò plugin."
  },
  {
    "q": "What is an advantage of Microkernel Architecture? (Ưu điểm của Microkernel Architecture là gì?)",
    "opts": [
      "Always simplest for distributed systems (Luôn đơn giản nhất cho hệ phân tán)",
      "Easy to extend and customize (Dễ mở rộng và tùy biến)",
      "No need to design the core carefully (Không cần thiết kế core cẩn thận)",
      "Cannot become complex (Không thể trở nên phức tạp)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Easy to extend and customize</b><br>Nhờ plugin, hệ thống có thể được mở rộng chức năng mà không làm thay đổi core quá nhiều.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải ưu điểm chính.<br>❌ C sai vì core phải được thiết kế tốt.<br>❌ D sai vì nhiều plugin có thể làm hệ thống phức tạp."
  },
  {
    "q": "What is a disadvantage of Microkernel Architecture? (Nhược điểm của Microkernel Architecture là gì?)",
    "opts": [
      "It cannot support plugins (Không hỗ trợ plugin)",
      "It requires a well-designed core and can become complex with many plugins (Cần core thiết kế tốt và có thể phức tạp khi nhiều plugin)",
      "It cannot be customized (Không thể tùy biến)",
      "It is only for e-commerce platforms (Chỉ dùng cho e-commerce)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Core design and plugin complexity</b><br>Nếu core thiết kế kém hoặc plugin quá nhiều, hệ thống có thể khó quản lý, khó debug và khó đảm bảo compatibility.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và C trái với định nghĩa Microkernel.<br>❌ D sai vì use case điển hình là IDE/OS."
  },
  {
    "q": "Which use case fits Microkernel Architecture? (Use case nào phù hợp Microkernel Architecture?)",
    "opts": [
      "IDEs and operating systems (IDE và hệ điều hành)",
      "Only small CRUD websites (Chỉ website CRUD nhỏ)",
      "Only serverless event processing (Chỉ xử lý event serverless)",
      "Only simple static pages (Chỉ trang tĩnh đơn giản)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: IDEs and operating systems</b><br>IDE và OS thường cần core ổn định và nhiều plugin/extension để mở rộng chức năng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và D thường không cần plugin architecture phức tạp.<br>❌ C phù hợp Serverless/Event-driven hơn."
  },
  {
    "q": "Which products are examples of Microkernel-style extensibility? (Sản phẩm nào là ví dụ cho kiểu mở rộng Microkernel?)",
    "opts": [
      "Visual Studio Code and Eclipse",
      "Kafka and RabbitMQ",
      "AWS Lambda and Azure Functions",
      "Prometheus and Grafana"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Visual Studio Code and Eclipse</b><br>VS Code và Eclipse có core editor/IDE và hệ sinh thái extension/plugin để mở rộng chức năng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là event/message brokers.<br>❌ C là serverless platforms.<br>❌ D là monitoring/visualization tools."
  },
  {
    "q": "Why must the core be well-designed in Microkernel Architecture? (Vì sao core trong Microkernel Architecture phải được thiết kế tốt?)",
    "opts": [
      "Because many plugins depend on the core interfaces (Vì nhiều plugin phụ thuộc vào interface của core)",
      "Because no plugin uses the core (Vì không plugin nào dùng core)",
      "Because the core should change every day (Vì core nên thay đổi mỗi ngày)",
      "Because the core must contain all possible features (Vì core phải chứa mọi tính năng)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Plugins depend on core interfaces</b><br>Core cung cấp API/extension points cho plugin. Nếu core không ổn định, plugin dễ lỗi hoặc khó tương thích.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì plugin phụ thuộc core.<br>❌ C sai vì core nên ổn định.<br>❌ D sai vì core nên nhỏ gọn."
  },
  {
    "q": "What can happen if a Microkernel system has too many plugins? (Điều gì có thể xảy ra nếu Microkernel system có quá nhiều plugin?)",
    "opts": [
      "The system automatically becomes simpler (Hệ thống tự động đơn giản hơn)",
      "The system can become complex to manage (Hệ thống có thể trở nên phức tạp để quản lý)",
      "The core disappears (Core biến mất)",
      "All performance issues are eliminated (Mọi vấn đề performance bị loại bỏ)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Complexity increases</b><br>Nhiều plugin có thể tạo ra vấn đề dependency, compatibility, debug và quản lý version.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì nhiều plugin thường tăng độ phức tạp.<br>❌ C sai vì core vẫn tồn tại.<br>❌ D sai vì plugin có thể làm performance phức tạp hơn."
  },
  {
    "q": "Which statement is TRUE about Microkernel Architecture? (Phát biểu nào đúng về Microkernel Architecture?)",
    "opts": [
      "It separates core functionality from optional extensions (Nó tách chức năng lõi khỏi phần mở rộng tùy chọn)",
      "It always deploys every feature as a separate microservice (Luôn deploy từng tính năng thành microservice riêng)",
      "It requires no architectural planning (Không cần thiết kế kiến trúc)",
      "It is mainly used to avoid all plugins (Chủ yếu dùng để tránh plugin)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Core separated from extensions</b><br>Microkernel tách phần lõi ổn định khỏi các phần mở rộng bằng plugin, giúp hệ thống dễ tùy biến.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Microservices.<br>❌ C sai vì cần thiết kế core tốt.<br>❌ D sai vì plugin là thành phần chính."
  },
  {
    "q": "What is Microservices Architecture? (Microservices Architecture là gì?)",
    "opts": [
      "The entire application is built as one unit (Toàn bộ app xây thành một khối)",
      "The app only has UI, business, and data layers (App chỉ có UI, business và data layer)",
      "The application is divided into small independent services communicating via APIs (Ứng dụng được chia thành các service nhỏ, độc lập, giao tiếp qua API)",
      "The system has only one core and plugins (Hệ thống chỉ có core và plugin)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Small independent services via APIs</b><br>Microservices chia hệ thống thành nhiều service nhỏ, mỗi service có trách nhiệm riêng và giao tiếp với nhau thông qua API/message.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Monolithic.<br>❌ B là Layered.<br>❌ D là Microkernel."
  },
  {
    "q": "What is a major advantage of Microservices Architecture? (Ưu điểm lớn của Microservices Architecture là gì?)",
    "opts": [
      "Always easier to manage than monolith (Luôn dễ quản lý hơn monolith)",
      "No monitoring required (Không cần monitoring)",
      "Scalable and independently deployable services (Service có thể scale và deploy độc lập)",
      "All services must use the same technology (Mọi service bắt buộc dùng cùng công nghệ)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Independent scale and deployment</b><br>Mỗi microservice có thể được phát triển, deploy và scale riêng theo nhu cầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì quản lý microservices thường phức tạp hơn.<br>❌ B sai vì rất cần monitoring.<br>❌ D sai vì microservices cho phép flexible technology choices."
  },
  {
    "q": "What does independent deployment mean in Microservices? (Independent deployment trong Microservices nghĩa là gì?)",
    "opts": [
      "Every service must be deployed at the same time (Mọi service phải deploy cùng lúc)",
      "The whole application must be one executable file (Toàn bộ app phải là một file executable)",
      "A service can be deployed without redeploying the whole application (Một service có thể deploy mà không cần deploy lại toàn bộ ứng dụng)",
      "No service can be updated separately (Không service nào được update riêng)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Deploy service separately</b><br>Independent deployment giúp release nhanh hơn, giảm phạm vi ảnh hưởng khi chỉ thay đổi một service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D là đặc điểm trái với Microservices hoặc giống Monolithic hơn."
  },
  {
    "q": "What does flexible technology choice mean in Microservices? (Flexible technology choices trong Microservices nghĩa là gì?)",
    "opts": [
      "All services must use one programming language (Mọi service phải dùng một ngôn ngữ)",
      "No service can use a database (Không service nào được dùng database)",
      "Only frontend can choose technology (Chỉ frontend được chọn công nghệ)",
      "Different services may use different suitable technologies (Các service có thể dùng công nghệ khác nhau phù hợp với nhiệm vụ)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Different services can use different technologies</b><br>Microservices cho phép mỗi service chọn ngôn ngữ/framework/database phù hợp, miễn là giao tiếp qua interface/API thống nhất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với flexible technology choices.<br>❌ B sai vì service có thể dùng database.<br>❌ C quá hẹp."
  },
  {
    "q": "What is a disadvantage of Microservices Architecture? (Nhược điểm của Microservices Architecture là gì?)",
    "opts": [
      "Complex management and need for distributed systems monitoring (Quản lý phức tạp và cần monitoring cho hệ phân tán)",
      "Cannot scale (Không thể scale)",
      "Cannot be deployed independently (Không thể deploy độc lập)",
      "Only suitable for tiny applications (Chỉ phù hợp app cực nhỏ)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Complex distributed management</b><br>Microservices tạo ra độ phức tạp về network, service discovery, monitoring, tracing, deployment và data consistency.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì microservices scale tốt.<br>❌ C sai vì deploy độc lập là ưu điểm.<br>❌ D sai vì phù hợp hệ thống lớn."
  },
  {
    "q": "Which use case is suitable for Microservices Architecture? (Use case nào phù hợp Microservices Architecture?)",
    "opts": [
      "A tiny static landing page (Một trang landing page tĩnh rất nhỏ)",
      "A simple one-person script (Script đơn giản một người dùng)",
      "Large-scale systems, e-commerce platforms, SaaS applications (Hệ thống lớn, e-commerce, SaaS)",
      "Only offline desktop calculators (Chỉ máy tính desktop offline)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Large-scale systems, e-commerce, SaaS</b><br>Microservices phù hợp hệ thống lớn có nhiều module, nhiều team, nhu cầu scale và deploy độc lập.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, D thường quá nhỏ, dùng monolith hoặc kiến trúc đơn giản sẽ hợp lý hơn."
  },
  {
    "q": "How do microservices commonly communicate? (Microservices thường giao tiếp với nhau bằng gì?)",
    "opts": [
      "Only direct function calls in one process (Chỉ gọi hàm trực tiếp trong một process)",
      "APIs or messages/events (API hoặc message/event)",
      "Only manual file copy (Chỉ copy file thủ công)",
      "Only through UI screens (Chỉ qua màn hình UI)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: APIs or messages/events</b><br>Các service độc lập thường giao tiếp qua REST/gRPC API hoặc message/event để trao đổi dữ liệu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A giống monolith hơn.<br>❌ C và D không phải cách giao tiếp chuẩn giữa service."
  },
  {
    "q": "Why does Microservices Architecture require strong monitoring? (Vì sao Microservices cần monitoring mạnh?)",
    "opts": [
      "Because there is only one component (Vì chỉ có một component)",
      "Because no network is involved (Vì không có network)",
      "Because failures can occur across many distributed services (Vì lỗi có thể xảy ra trên nhiều service phân tán)",
      "Because services never fail (Vì service không bao giờ lỗi)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Many distributed services can fail</b><br>Trong microservices, request có thể đi qua nhiều service, nên cần metrics, logs, tracing để phát hiện lỗi và bottleneck.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì có nhiều service.<br>❌ B sai vì network rất quan trọng.<br>❌ D sai vì service vẫn có thể lỗi."
  },
  {
    "q": "Which problem becomes more important in Microservices than in Monolithic systems? (Vấn đề nào quan trọng hơn trong Microservices so với Monolithic?)",
    "opts": [
      "Having only one code module (Chỉ có một module code)",
      "Distributed system complexity (Độ phức tạp của hệ phân tán)",
      "Lack of APIs (Không có API)",
      "No need for deployment automation (Không cần tự động hóa deploy)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Distributed system complexity</b><br>Microservices phân tán nhiều service qua network, nên phải xử lý latency, failure, monitoring, deployment và consistency phức tạp hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là monolith.<br>❌ C sai vì API là nền tảng giao tiếp.<br>❌ D sai vì automation càng cần thiết."
  },
  {
    "q": "Which statement is TRUE about Microservices? (Phát biểu nào đúng về Microservices?)",
    "opts": [
      "They are always easier than monoliths in every aspect (Luôn dễ hơn monolith ở mọi mặt)",
      "They do not need APIs (Không cần API)",
      "They are best only for very small internal apps (Chỉ tốt nhất cho app nội bộ rất nhỏ)",
      "They support independent scaling, deployment, and technology choices (Hỗ trợ scale, deploy và chọn công nghệ độc lập)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Independent scaling/deployment/technology</b><br>Microservices giúp từng service độc lập hơn, nhưng đổi lại cần quản lý hệ phân tán tốt.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì microservices có độ phức tạp cao.<br>❌ B sai vì API/message là cách giao tiếp chính.<br>❌ C sai vì thường dùng cho hệ thống lớn."
  },
  {
    "q": "What is Monolithic Architecture? (Monolithic Architecture là gì?)",
    "opts": [
      "The application is split into many independent services (Ứng dụng chia thành nhiều service độc lập)",
      "Components communicate only through events (Các component chỉ giao tiếp qua event)",
      "The app runs only as cloud functions (App chỉ chạy bằng cloud functions)",
      "The entire application is built as a single unit containing frontend and backend (Toàn bộ ứng dụng được xây thành một khối gồm frontend và backend)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Single-unit application</b><br>Monolithic Architecture đóng gói toàn bộ chức năng ứng dụng trong một khối triển khai duy nhất.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Microservices.<br>❌ B là Event-driven.<br>❌ C là Serverless."
  },
  {
    "q": "What is an advantage of Monolithic Architecture? (Ưu điểm của Monolithic Architecture là gì?)",
    "opts": [
      "Always scales each module independently (Luôn scale từng module độc lập)",
      "Requires distributed tracing by default (Mặc định cần distributed tracing)",
      "Easy to develop, deploy, and debug (Dễ phát triển, deploy và debug)",
      "Always best for very large SaaS systems (Luôn tốt nhất cho SaaS cực lớn)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Easy to develop, deploy, and debug</b><br>Vì app nằm trong một khối, luồng xử lý đơn giản hơn, dễ chạy local, deploy và debug trong giai đoạn đầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là ưu điểm của Microservices.<br>❌ B thường cần trong Microservices hơn.<br>❌ D sai vì hệ rất lớn thường khó scale/maintain bằng monolith."
  },
  {
    "q": "What is a disadvantage of Monolithic Architecture? (Nhược điểm của Monolithic Architecture là gì?)",
    "opts": [
      "It is impossible to build small apps with it (Không thể xây app nhỏ bằng nó)",
      "It always requires vendor lock-in (Luôn bị vendor lock-in)",
      "Difficult to scale, maintain, and implement CI/CD (Khó scale, maintain và triển khai CI/CD)",
      "It cannot contain frontend and backend (Không thể chứa frontend và backend)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Difficult to scale and maintain</b><br>Khi hệ thống lớn dần, codebase monolith có thể khó bảo trì, khó scale riêng từng phần và pipeline CI/CD có thể chậm/phức tạp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì monolith phù hợp app nhỏ.<br>❌ B là nhược điểm thường gặp của Serverless.<br>❌ D sai vì monolith có thể chứa cả frontend/backend."
  },
  {
    "q": "Which use case best fits Monolithic Architecture? (Use case nào phù hợp Monolithic Architecture?)",
    "opts": [
      "Huge distributed e-commerce platforms only (Chỉ nền tảng e-commerce phân tán cực lớn)",
      "Only IoT streaming platforms (Chỉ nền tảng streaming IoT)",
      "Only IDE plugin ecosystems (Chỉ hệ sinh thái plugin IDE)",
      "Small systems, startups, internal applications (Hệ thống nhỏ, startup, ứng dụng nội bộ)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Small systems, startups, internal apps</b><br>Monolith phù hợp khi hệ thống còn nhỏ, team nhỏ, yêu cầu đơn giản và cần phát triển nhanh.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thường phù hợp Microservices.<br>❌ B phù hợp Event-driven.<br>❌ C phù hợp Microkernel."
  },
  {
    "q": "Why is Monolithic Architecture easy to deploy at the beginning? (Vì sao Monolithic dễ deploy ở giai đoạn đầu?)",
    "opts": [
      "Because it has hundreds of services (Vì có hàng trăm service)",
      "Because it never needs a server (Vì không bao giờ cần server)",
      "Because there is usually one deployable unit (Vì thường chỉ có một đơn vị triển khai)",
      "Because it has no codebase (Vì không có codebase)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: One deployable unit</b><br>Monolith thường build/deploy một package hoặc một application duy nhất, nên đơn giản hơn ở giai đoạn đầu.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Microservices.<br>❌ B sai vì vẫn cần môi trường chạy.<br>❌ D vô lý."
  },
  {
    "q": "Why can Monolithic Architecture become hard to maintain? (Vì sao Monolithic có thể khó maintain?)",
    "opts": [
      "Because it has no source code (Vì không có source code)",
      "Because the codebase grows large and tightly coupled (Vì codebase lớn dần và các phần phụ thuộc chặt)",
      "Because every feature is always isolated as a plugin (Vì mọi feature luôn cô lập thành plugin)",
      "Because it has no frontend or backend (Vì không có frontend hoặc backend)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Large and tightly coupled codebase</b><br>Khi toàn bộ tính năng nằm trong một khối, thay đổi nhỏ có thể ảnh hưởng nhiều phần, làm việc maintain/test/release khó hơn.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai.<br>❌ C là Microkernel/plugin style.<br>❌ D sai vì monolith có thể chứa frontend/backend."
  },
  {
    "q": "Why is scaling Monolithic Architecture difficult? (Vì sao scale Monolithic khó?)",
    "opts": [
      "Because each component is always separately deployable (Vì mỗi component luôn deploy riêng)",
      "Because there are no shared resources (Vì không có tài nguyên dùng chung)",
      "Because it automatically scales only the needed function (Vì tự động scale đúng function cần thiết)",
      "Because the whole application often must be scaled together (Vì thường phải scale cả ứng dụng cùng lúc)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Scale the whole app together</b><br>Trong monolith, nếu chỉ một chức năng chịu tải cao, thường vẫn phải scale toàn bộ ứng dụng, gây kém hiệu quả hơn microservices/serverless.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Microservices.<br>❌ B không đúng.<br>❌ C là đặc điểm gần với Serverless/FaaS."
  },
  {
    "q": "Why can CI/CD be harder in a large Monolithic system? (Vì sao CI/CD khó hơn trong Monolithic lớn?)",
    "opts": [
      "Because one change may require building/testing/deploying the whole application (Vì một thay đổi có thể yêu cầu build/test/deploy toàn bộ ứng dụng)",
      "Because monolith has no deployment (Vì monolith không có deployment)",
      "Because CI/CD works only with microservices (Vì CI/CD chỉ dùng được với microservices)",
      "Because monolith cannot be tested (Vì monolith không thể test)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Whole-app pipeline impact</b><br>Khi codebase monolith lớn, pipeline có thể chậm vì một thay đổi nhỏ vẫn ảnh hưởng build/test/release toàn bộ app.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì vẫn deploy được.<br>❌ C sai vì CI/CD dùng được cho mọi kiến trúc.<br>❌ D sai vì vẫn test được."
  },
  {
    "q": "Which statement is TRUE about Monolithic Architecture? (Phát biểu nào đúng về Monolithic Architecture?)",
    "opts": [
      "It is simple at first but may become difficult as the system grows (Ban đầu đơn giản nhưng có thể khó khi hệ thống lớn dần)",
      "It is always better than microservices for large systems (Luôn tốt hơn microservices cho hệ thống lớn)",
      "It requires events for all communication (Bắt buộc mọi giao tiếp qua event)",
      "It has no deployment unit (Không có đơn vị deploy)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Simple early, harder later</b><br>Monolith rất hợp để bắt đầu nhanh, nhưng khi app lớn, vấn đề scale, maintain và CI/CD sẽ tăng lên.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì hệ lớn thường cân nhắc Microservices.<br>❌ C là Event-driven.<br>❌ D sai vì monolith thường có một deploy unit."
  },
  {
    "q": "When should a startup consider starting with a Monolithic Architecture? (Khi nào startup nên cân nhắc bắt đầu bằng Monolithic Architecture?)",
    "opts": [
      "When there are hundreds of independent teams from day one (Khi ngay từ đầu có hàng trăm team độc lập)",
      "When every function must scale independently from day one (Khi mọi function phải scale độc lập từ đầu)",
      "When the system is mainly plugin-based like an IDE (Khi hệ thống chủ yếu dựa trên plugin như IDE)",
      "When the system is small and speed of development is important (Khi hệ thống còn nhỏ và cần phát triển nhanh)"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Small system and fast development</b><br>Startup thường cần tốc độ, đơn giản và chi phí thấp ban đầu, nên monolith có thể là lựa chọn hợp lý trước khi cần tách service.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và C phù hợp Microservices hơn.<br>❌ C phù hợp Microkernel hơn."
  },
  {
    "q": "What is Serverless Architecture? (Serverless Architecture là gì?)",
    "opts": [
      "An architecture where the whole app is one deployable unit (Kiến trúc toàn bộ app là một khối deploy)",
      "An architecture that requires manual server management (Kiến trúc bắt buộc quản lý server thủ công)",
      "An architecture running on cloud platforms without managing servers, often using small functions (Kiến trúc chạy trên cloud mà không cần quản lý server, thường dùng các function nhỏ)",
      "An architecture only for IDE plugins (Kiến trúc chỉ dành cho plugin IDE)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Cloud-managed functions</b><br>Serverless cho phép chạy code trên cloud platform mà developer không phải trực tiếp quản lý server, thường qua FaaS.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Monolithic.<br>❌ B trái với serverless.<br>❌ D là Microkernel use case."
  },
  {
    "q": "What does FaaS stand for? (FaaS là viết tắt của gì?)",
    "opts": [
      "Frontend as a Service",
      "Framework as a Server",
      "File as a System",
      "Function as a Service"
    ],
    "ans": 3,
    "exp": "<b>✅ Đáp án đúng là D: Function as a Service</b><br>FaaS là mô hình chạy các function nhỏ trên cloud, thường được kích hoạt bởi event/trigger.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, B, C không phải nghĩa đúng của FaaS trong Serverless."
  },
  {
    "q": "What is an advantage of Serverless Architecture? (Ưu điểm của Serverless Architecture là gì?)",
    "opts": [
      "Auto-scaling, cost-efficient, and no infrastructure management (Auto-scaling, tiết kiệm chi phí và không cần quản lý hạ tầng)",
      "Full control over every server process (Toàn quyền kiểm soát mọi process server)",
      "No dependency on cloud providers (Không phụ thuộc cloud provider)",
      "Always best for long-running heavy workloads (Luôn tốt nhất cho workload nặng chạy lâu)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Auto-scaling and no infra management</b><br>Serverless giúp cloud provider tự quản lý server, tự scale theo nhu cầu và thường tính phí theo mức sử dụng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì serverless giảm quyền kiểm soát server.<br>❌ C sai vì có thể vendor lock-in.<br>❌ D không phải lúc nào đúng."
  },
  {
    "q": "What is a disadvantage of Serverless Architecture? (Nhược điểm của Serverless Architecture là gì?)",
    "opts": [
      "Vendor lock-in and difficult performance control (Vendor lock-in và khó kiểm soát performance)",
      "Too easy to control servers manually (Quá dễ kiểm soát server thủ công)",
      "It cannot auto-scale (Không thể auto-scale)",
      "It always requires managing physical servers (Luôn phải quản lý server vật lý)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Vendor lock-in and performance control</b><br>Serverless phụ thuộc API/runtime của cloud provider và developer có ít quyền kiểm soát môi trường chạy, nên performance tuning có thể khó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B và D trái với serverless.<br>❌ C sai vì auto-scaling là ưu điểm."
  },
  {
    "q": "Which use case is suitable for Serverless Architecture? (Use case nào phù hợp Serverless Architecture?)",
    "opts": [
      "Large monolithic enterprise system only (Chỉ hệ enterprise monolithic lớn)",
      "Event-driven processing and lightweight applications (Xử lý event-driven và ứng dụng nhẹ)",
      "Only IDE plugin systems (Chỉ hệ plugin IDE)",
      "Only systems that require full hardware control (Chỉ hệ thống cần kiểm soát phần cứng hoàn toàn)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Event-driven processing and lightweight apps</b><br>Serverless phù hợp với tác vụ phản ứng theo event như xử lý file upload, webhook, scheduled job hoặc API nhẹ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A thường không phải use case tốt nhất.<br>❌ C là Microkernel.<br>❌ D trái với serverless vì serverless ẩn hạ tầng."
  },
  {
    "q": "Why is Serverless often cost-efficient? (Vì sao Serverless thường tiết kiệm chi phí?)",
    "opts": [
      "Because it requires buying physical servers (Vì phải mua server vật lý)",
      "Because users often pay based on actual usage/execution (Vì thường trả phí theo mức sử dụng/lần thực thi thực tế)",
      "Because it always runs at full capacity (Vì luôn chạy full công suất)",
      "Because it duplicates all infrastructure manually (Vì nhân bản hạ tầng thủ công)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Pay for actual usage</b><br>Serverless thường tính phí theo số lần gọi, thời gian chạy hoặc tài nguyên thực dùng, nên tiết kiệm cho workload không chạy liên tục.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D đều làm tăng chi phí và không đúng serverless."
  },
  {
    "q": "What does 'no infrastructure management' mean in Serverless? ('No infrastructure management' trong Serverless nghĩa là gì?)",
    "opts": [
      "The cloud provider manages servers, scaling, and runtime infrastructure (Cloud provider quản lý server, scaling và runtime infrastructure)",
      "There is no infrastructure anywhere (Không có hạ tầng ở đâu cả)",
      "Developers must manually patch every server (Developer phải tự patch từng server)",
      "The application cannot be deployed (Ứng dụng không thể deploy)"
    ],
    "ans": 0,
    "exp": "<b>✅ Đáp án đúng là A: Cloud provider manages infrastructure</b><br>Serverless không có nghĩa là không có server, mà là developer không trực tiếp quản lý server; cloud provider xử lý phần đó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì server vẫn tồn tại phía cloud.<br>❌ C trái với serverless.<br>❌ D sai vì serverless vẫn deploy được."
  },
  {
    "q": "What is vendor lock-in in Serverless? (Vendor lock-in trong Serverless là gì?)",
    "opts": [
      "Having full freedom from all cloud services (Hoàn toàn không phụ thuộc cloud service)",
      "Being dependent on a cloud provider's services, APIs, and runtime (Phụ thuộc vào service, API và runtime của cloud provider)",
      "Using only open hardware (Chỉ dùng phần cứng mở)",
      "Avoiding all cloud-specific features (Tránh mọi tính năng đặc thù cloud)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Dependence on cloud provider</b><br>Serverless function thường gắn với trigger, runtime, permission và dịch vụ riêng của cloud provider, nên chuyển sang provider khác có thể khó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A, C, D không mô tả vendor lock-in."
  },
  {
    "q": "Why can performance control be difficult in Serverless? (Vì sao kiểm soát performance trong Serverless có thể khó?)",
    "opts": [
      "Because developers control every kernel parameter (Vì developer kiểm soát mọi tham số kernel)",
      "Because developers have limited control over the underlying runtime and infrastructure (Vì developer có ít quyền kiểm soát runtime và hạ tầng bên dưới)",
      "Because serverless never scales (Vì serverless không bao giờ scale)",
      "Because serverless cannot run code (Vì serverless không chạy được code)"
    ],
    "ans": 1,
    "exp": "<b>✅ Đáp án đúng là B: Limited infrastructure control</b><br>Trong serverless, cloud provider quản lý môi trường chạy. Điều này đơn giản hóa vận hành nhưng làm performance tuning khó hơn so với tự quản lý server.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A trái với serverless.<br>❌ C sai vì serverless thường auto-scale.<br>❌ D sai vì serverless chạy function/code."
  },
  {
    "q": "Which statement is TRUE about Serverless Architecture? (Phát biểu nào đúng về Serverless Architecture?)",
    "opts": [
      "It means servers do not exist at all (Nghĩa là server hoàn toàn không tồn tại)",
      "It is the same as Monolithic Architecture (Giống hệt Monolithic Architecture)",
      "It reduces server management but may introduce vendor lock-in (Giảm quản lý server nhưng có thể gây vendor lock-in)",
      "It always gives full control over infrastructure (Luôn cho toàn quyền kiểm soát hạ tầng)"
    ],
    "ans": 2,
    "exp": "<b>✅ Đáp án đúng là C: Less server management, possible vendor lock-in</b><br>Serverless giúp developer tập trung vào function/business logic, nhưng có thể phụ thuộc cloud provider và khó kiểm soát performance chi tiết.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì server vẫn tồn tại nhưng được cloud quản lý.<br>❌ B sai vì monolithic là kiến trúc khác.<br>❌ D sai vì serverless giảm quyền kiểm soát hạ tầng."
  }
];
