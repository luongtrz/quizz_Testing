// 08-1 Deployment Strategies (40 câu)
// Đáp án chia đều: ans 0/1/2/3 mỗi loại 10 câu
DEVOPS_QUIZ_DATA.topics[6].questions = [
  {
    q: "What is a deployment strategy? (Deployment strategy là gì?)",
    opts: [
      "A method for releasing or updating an application version in an environment (Phương pháp release hoặc update version ứng dụng trong một môi trường)",
      "A Git command for creating branches (Lệnh Git để tạo branch)",
      "A Docker instruction for copying files (Docker instruction để copy file)",
      "A database backup format (Định dạng backup database)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Deployment strategy là cách triển khai version mới</b><br>Deployment strategy mô tả cách đưa version mới của app/service vào môi trường target như dev, staging hoặc production.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B thuộc Git.<br>❌ C thuộc Dockerfile.<br>❌ D thuộc database backup."
  },
  {
    q: "What is Basic Deployment? (Basic Deployment là gì?)",
    opts: [
      "Deploying only to a shadow environment (Chỉ deploy vào shadow environment)",
      "Simultaneously updating the new version on every node or instance in the target environment (Cập nhật version mới đồng thời trên mọi node/instance trong môi trường target)",
      "Gradually releasing to a small subset of users first (Release dần cho một nhóm nhỏ user trước)",
      "Running two identical environments and switching traffic (Chạy hai môi trường giống nhau rồi chuyển traffic)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Basic Deployment cập nhật đồng thời</b><br>Basic Deployment update version mới trên toàn bộ node/instance cùng lúc trong target environment.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Shadow Deployment.<br>❌ C là Canary Deployment.<br>❌ D là Blue-Green Deployment."
  },
  {
    q: "Which is a pro of Basic Deployment? (Ưu điểm của Basic Deployment là gì?)",
    opts: [
      "Zero infrastructure cost in all cases (Luôn không tốn chi phí hạ tầng)",
      "No outage risk at all (Không có rủi ro outage)",
      "Fast, simple, and cost-effective (Nhanh, đơn giản và tiết kiệm chi phí)",
      "Always supports instant rollback (Luôn rollback tức thì)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Fast, simple, cost-effective</b><br>Basic Deployment dễ hiểu, triển khai nhanh và không cần duy trì nhiều môi trường song song.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá tuyệt đối.<br>❌ B sai vì Basic có outage vulnerability.<br>❌ D sai vì rollback thường khó."
  },
  {
    q: "Which is a con of Basic Deployment? (Nhược điểm của Basic Deployment là gì?)",
    opts: [
      "Requires two identical environments (Cần hai môi trường giống nhau)",
      "Only works with feature flags (Chỉ hoạt động với feature flag)",
      "Cannot update all instances (Không thể update toàn bộ instance)",
      "Outage vulnerability and difficult rollback (Dễ bị outage và khó rollback)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Outage vulnerability và difficult rollback</b><br>Vì update đồng thời toàn bộ instance, nếu version mới lỗi thì service dễ bị ảnh hưởng rộng và rollback không thuận tiện.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Blue-Green.<br>❌ B là Feature Toggle.<br>❌ C ngược với Basic Deployment."
  },
  {
    q: "What is Rolling Deployment? (Rolling Deployment là gì?)",
    opts: [
      "Replacing instances of the previous version one by one until all are updated (Thay thế từng instance của version cũ lần lượt cho đến khi tất cả được cập nhật)",
      "Updating all nodes at exactly the same time (Cập nhật tất cả node cùng lúc)",
      "Testing two UI options with real users (Test hai option UI với user thật)",
      "Deploying hidden features only to internal users (Deploy feature ẩn cho user nội bộ)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Rolling Deployment update từng phần</b><br>Rolling Deployment thay thế version cũ bằng version mới theo từng instance/node, không update toàn bộ cùng lúc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Basic/Multi-service Deployment.<br>❌ C là A/B Testing.<br>❌ D gần với Dark Launch/Feature Toggle."
  },
  {
    q: "Which is a pro of Rolling Deployment? (Ưu điểm của Rolling Deployment là gì?)",
    opts: [
      "Requires no backward compatibility (Không cần backward compatibility)",
      "Minimum downtime and flexible rollout (Downtime thấp và rollout linh hoạt)",
      "Always has the fastest rollback (Luôn rollback nhanh nhất)",
      "Requires two full production environments (Cần hai production environment đầy đủ)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Minimum downtime và flexible</b><br>Rolling Deployment giảm downtime vì chỉ update từng phần, hệ thống vẫn có instance còn hoạt động trong quá trình deploy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Rolling thường cần backward compatibility.<br>❌ C sai vì rollback có thể chậm.<br>❌ D là Blue-Green."
  },
  {
    q: "Which is a con of Rolling Deployment? (Nhược điểm của Rolling Deployment là gì?)",
    opts: [
      "It cannot reduce downtime (Không thể giảm downtime)",
      "It cannot update services (Không thể update service)",
      "Slow rollback and requires backward compatibility (Rollback chậm và cần backward compatibility)",
      "It requires no monitoring (Không cần monitoring)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Slow rollback và backward compatibility</b><br>Trong Rolling Deployment, nhiều version có thể cùng tồn tại tạm thời nên app/API/database cần tương thích ngược.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì rolling giúp giảm downtime.<br>❌ B sai.<br>❌ D sai vì vẫn cần monitoring."
  },
  {
    q: "What is Multi-service Deployment? (Multi-service Deployment là gì?)",
    opts: [
      "Deploying only one service with canary traffic (Chỉ deploy một service với canary traffic)",
      "Deploying a hidden feature at runtime (Deploy feature ẩn lúc runtime)",
      "Testing option A and option B (Test option A và B)",
      "Simultaneously updating every node in the target environment with multiple services (Cập nhật đồng thời mọi node với nhiều service)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Update nhiều service đồng thời</b><br>Multi-service Deployment giống Basic Deployment nhưng áp dụng cho nhiều service cùng lúc.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Canary.<br>❌ B là Feature Toggle.<br>❌ C là A/B Testing."
  },
  {
    q: "Which deployment strategy is similar to Basic Deployment but applies mostly to services? (Chiến lược nào giống Basic Deployment nhưng thường áp dụng cho nhiều service?)",
    opts: [
      "Multi-service Deployment",
      "Shadow Deployment",
      "Dark Launch Deployment",
      "Blue-Green Deployment"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Multi-service Deployment</b><br>Slide mô tả Multi-service Deployment tương tự Basic Deployment nhưng chủ yếu áp dụng cho services.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B dùng môi trường shadow.<br>❌ C release feature cho nhóm nhỏ.<br>❌ D dùng hai môi trường blue/green."
  },
  {
    q: "Which is a con of Multi-service Deployment? (Nhược điểm của Multi-service Deployment là gì?)",
    opts: [
      "Requires feature flags only (Chỉ cần feature flag)",
      "Outage vulnerability and difficult rollback (Dễ outage và khó rollback)",
      "Always provides instant rollback (Luôn rollback tức thì)",
      "No service can be updated (Không service nào được update)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Outage vulnerability và difficult rollback</b><br>Vì nhiều service bị update đồng thời, nếu có lỗi thì phạm vi ảnh hưởng lớn và rollback phức tạp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A không phải đặc điểm chính.<br>❌ C sai.<br>❌ D ngược với định nghĩa."
  },
  {
    q: "What is Blue-Green Deployment? (Blue-Green Deployment là gì?)",
    opts: [
      "Updating each instance one by one (Update từng instance)",
      "Testing two UI variants only (Chỉ test hai UI variant)",
      "Using two identical environments where traffic switches from old to new after testing (Dùng hai môi trường giống nhau và chuyển traffic từ cũ sang mới sau khi test)",
      "Deploying only invisible features (Chỉ deploy feature vô hình)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Hai môi trường blue/green giống nhau</b><br>Blue-Green duy trì hai môi trường: một môi trường đang chạy version cũ và một môi trường chạy version mới. Sau khi test xong, traffic được chuyển sang môi trường mới.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Rolling.<br>❌ B là A/B Testing.<br>❌ D là Dark Launch/Feature Toggle."
  },
  {
    q: "Which is a pro of Blue-Green Deployment? (Ưu điểm của Blue-Green Deployment là gì?)",
    opts: [
      "Lowest infrastructure cost in all cases (Luôn có chi phí hạ tầng thấp nhất)",
      "No need for testing before switching traffic (Không cần test trước khi chuyển traffic)",
      "No rollback possible (Không thể rollback)",
      "Instant rollout/rollback and minimum downtime (Rollout/rollback nhanh và downtime thấp)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Instant rollout/rollback và minimum downtime</b><br>Vì môi trường cũ vẫn còn, có thể chuyển traffic lại nhanh nếu môi trường mới lỗi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Blue-Green thường high cost.<br>❌ B sai vì cần test trước khi switch.<br>❌ C sai vì rollback là ưu điểm lớn."
  },
  {
    q: "Which is a con of Blue-Green Deployment? (Nhược điểm của Blue-Green Deployment là gì?)",
    opts: [
      "High cost and difficult to scale (Chi phí cao và khó scale)",
      "Cannot minimize downtime (Không thể giảm downtime)",
      "Cannot rollback quickly (Không thể rollback nhanh)",
      "Only supports one environment (Chỉ hỗ trợ một môi trường)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: High cost và difficult to scale</b><br>Blue-Green cần hai môi trường gần như giống nhau nên tốn chi phí tài nguyên và có thể khó scale.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì downtime thấp là ưu điểm.<br>❌ C sai vì rollback nhanh là ưu điểm.<br>❌ D sai vì cần hai môi trường."
  },
  {
    q: "In Blue-Green Deployment, when is traffic switched to the new environment? (Trong Blue-Green Deployment, khi nào traffic được chuyển sang môi trường mới?)",
    opts: [
      "Before the new version is deployed (Trước khi version mới được deploy)",
      "After testing is complete (Sau khi testing hoàn tất)",
      "Only after all users log out forever (Chỉ sau khi mọi user logout mãi mãi)",
      "Before any health check (Trước mọi health check)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Sau khi testing hoàn tất</b><br>Version mới được deploy vào môi trường green, sau khi test ổn thì traffic mới chuyển từ blue sang green.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và D quá rủi ro.<br>❌ C không thực tế."
  },
  {
    q: "What is Canary Deployment? (Canary Deployment là gì?)",
    opts: [
      "Updating all users at exactly the same time (Update toàn bộ user cùng lúc)",
      "Keeping all features hidden forever (Ẩn toàn bộ feature mãi mãi)",
      "Rolling out an update to a small subset of users first, then gradually increasing scope (Release cho nhóm nhỏ user trước rồi tăng dần phạm vi)",
      "Using two full identical production environments only (Chỉ dùng hai môi trường production giống nhau)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Release từng phần cho nhóm nhỏ trước</b><br>Canary Deployment đưa version mới đến một nhóm nhỏ user trước, quan sát kết quả rồi mở rộng dần tới 100%.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Basic/Multi-service.<br>❌ B không phải canary.<br>❌ D là Blue-Green."
  },
  {
    q: "Which is a pro of Canary Deployment? (Ưu điểm của Canary Deployment là gì?)",
    opts: [
      "No need to observe metrics (Không cần quan sát metric)",
      "Always updates every user immediately (Luôn update mọi user ngay lập tức)",
      "No rollback possible (Không thể rollback)",
      "Minimum downtime and fast rollback (Downtime thấp và rollback nhanh)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Minimum downtime và fast rollback</b><br>Vì chỉ một nhóm nhỏ user nhận version mới ban đầu, nếu có lỗi có thể rollback nhanh với phạm vi ảnh hưởng nhỏ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì Canary cần high observation.<br>❌ B sai vì rollout dần.<br>❌ C sai."
  },
  {
    q: "Which is a con of Canary Deployment? (Nhược điểm của Canary Deployment là gì?)",
    opts: [
      "Slow rollout and requires high observation (Rollout chậm và cần quan sát kỹ)",
      "Cannot test with live users (Không thể test với user thật)",
      "Always requires two full environments (Luôn cần hai môi trường đầy đủ)",
      "Cannot rollback (Không thể rollback)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Slow rollout và high observation</b><br>Canary cần tăng traffic theo từng bước và theo dõi kỹ metrics/logs để quyết định có tiếp tục rollout hay không.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì canary test với user thật.<br>❌ C là Blue-Green.<br>❌ D sai vì rollback nhanh là ưu điểm."
  },
  {
    q: "What is Dark Launch Deployment? (Dark Launch Deployment là gì?)",
    opts: [
      "Updating every instance simultaneously (Update mọi instance cùng lúc)",
      "Releasing production-ready features to a small user group before exposing them to the rest (Release feature production-ready cho nhóm user nhỏ trước khi mở cho toàn bộ user)",
      "Only deploying to a shadow environment with no users (Chỉ deploy vào shadow environment không có user)",
      "Deleting old production versions immediately (Xóa version production cũ ngay lập tức)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Release feature cho nhóm nhỏ user trước</b><br>Dark Launch cho phép thử nghiệm feature gần production với một nhóm user nhỏ trước khi public rộng rãi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Basic.<br>❌ C là Shadow Deployment.<br>❌ D không phải dark launch."
  },
  {
    q: "Which is a pro of Dark Launch Deployment? (Ưu điểm của Dark Launch Deployment là gì?)",
    opts: [
      "No cost of implementation (Không tốn chi phí implementation)",
      "No user feedback possible (Không thể lấy feedback user)",
      "Gain feedback, minimize risk, and run experiments (Lấy feedback, giảm rủi ro và chạy experiment)",
      "No setup time needed (Không cần setup time)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Feedback, risk reduction, experiments</b><br>Dark Launch giúp team thử feature với user thật, lấy feedback và giảm rủi ro trước khi mở rộng.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì có high implementation cost.<br>❌ B ngược với mục tiêu.<br>❌ D sai vì setup time có thể lớn."
  },
  {
    q: "Which is a con of Dark Launch Deployment? (Nhược điểm của Dark Launch Deployment là gì?)",
    opts: [
      "Cannot be used for production-ready features (Không thể dùng cho feature production-ready)",
      "Always gives zero risk (Luôn không có rủi ro)",
      "Only works without users (Chỉ hoạt động khi không có user)",
      "Large setup timeframes and high implementation cost (Setup lâu và chi phí implementation cao)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Large setup timeframes và high cost</b><br>Dark Launch cần cơ chế kiểm soát nhóm user, routing, monitoring và feature exposure nên setup phức tạp, tốn chi phí.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì dark launch dùng cho production-ready feature.<br>❌ B quá tuyệt đối.<br>❌ C sai vì cần user thật/nhóm nhỏ."
  },
  {
    q: "What is Feature Toggle Deployment? (Feature Toggle Deployment là gì?)",
    opts: [
      "A deployment approach that enables, disables, or hides features at runtime for selected user groups (Cách deploy cho phép bật/tắt/ẩn feature lúc runtime cho nhóm user cụ thể)",
      "A deployment where all instances update simultaneously (Deploy update mọi instance cùng lúc)",
      "A deployment that only uses two identical environments (Deploy chỉ dùng hai môi trường giống nhau)",
      "A deployment that never exposes any feature (Deploy không bao giờ expose feature)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Bật/tắt feature lúc runtime</b><br>Feature Toggle cho phép đưa code lên production nhưng điều khiển feature có visible hay không cho từng nhóm user.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B là Basic.<br>❌ C là Blue-Green.<br>❌ D quá tuyệt đối."
  },
  {
    q: "Which is a pro of Feature Toggle Deployment? (Ưu điểm của Feature Toggle Deployment là gì?)",
    opts: [
      "Feature flags always reduce implementation cost to zero (Feature flag luôn giảm cost về 0)",
      "Rapid feedback and unfinished features can be deployed safely behind toggles (Feedback nhanh và feature chưa hoàn tất có thể deploy sau toggle)",
      "It requires no runtime control (Không cần runtime control)",
      "It only works with database migration (Chỉ hoạt động với database migration)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Rapid feedback và deploy feature sau toggle</b><br>Feature Toggle giúp team deploy sớm, lấy feedback và kiểm soát việc bật/tắt tính năng mà không cần redeploy toàn bộ app.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì implementation cost có thể cao.<br>❌ C sai vì runtime control là điểm chính.<br>❌ D không đúng."
  },
  {
    q: "Which is a con of Feature Toggle Deployment? (Nhược điểm của Feature Toggle Deployment là gì?)",
    opts: [
      "It cannot hide features (Không thể ẩn feature)",
      "It cannot deploy unfinished features (Không thể deploy feature chưa hoàn tất)",
      "High implementation cost and possible impact on user experience (Chi phí implementation cao và có thể ảnh hưởng UX)",
      "It always requires two production environments (Luôn cần hai production environment)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: High cost và ảnh hưởng user experience</b><br>Quản lý nhiều toggle phức tạp, dễ gây technical debt hoặc trải nghiệm không nhất quán nếu thiết kế không tốt.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì toggle dùng để hide/enable/disable feature.<br>❌ B sai.<br>❌ D là Blue-Green."
  },
  {
    q: "What is Shadow Deployment? (Shadow Deployment là gì?)",
    opts: [
      "Deploying all traffic directly to the new version (Chuyển toàn bộ traffic thẳng sang version mới)",
      "Running A/B UI experiments only (Chỉ chạy A/B UI experiment)",
      "Updating each node one by one (Update từng node một)",
      "Deploying app/service changes in a parallel environment that mimics production, invisible to end users (Deploy thay đổi vào môi trường song song mô phỏng production, không visible với end users)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Deploy song song trong shadow environment</b><br>Shadow Deployment chạy version mới trong môi trường giống production nhưng user không nhìn thấy kết quả trực tiếp.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá rủi ro, không phải shadow.<br>❌ B là A/B Testing.<br>❌ C là Rolling."
  },
  {
    q: "Which is a pro of Shadow Deployment? (Ưu điểm của Shadow Deployment là gì?)",
    opts: [
      "Real-world testing and risk mitigation (Test với điều kiện thực tế và giảm rủi ro)",
      "No infrastructure cost (Không có chi phí hạ tầng)",
      "No need to mimic production (Không cần mô phỏng production)",
      "Visible to all end users immediately (Hiển thị cho toàn bộ user ngay lập tức)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Real-world testing và risk mitigation</b><br>Shadow Deployment cho phép kiểm tra behavior của version mới với traffic/điều kiện gần thực tế nhưng không ảnh hưởng trực tiếp user.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì high cost là nhược điểm.<br>❌ C sai vì shadow cần mimic production.<br>❌ D sai vì không visible với end users."
  },
  {
    q: "Which is a con of Shadow Deployment? (Nhược điểm của Shadow Deployment là gì?)",
    opts: [
      "Cannot test with real-world conditions (Không thể test điều kiện thực tế)",
      "High implementation cost (Chi phí implementation cao)",
      "Cannot reduce risk (Không thể giảm rủi ro)",
      "Always changes production data directly (Luôn thay đổi dữ liệu production trực tiếp)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: High implementation cost</b><br>Shadow Deployment cần môi trường song song, routing/traffic duplication và monitoring nên chi phí triển khai cao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì real-world testing là ưu điểm.<br>❌ C sai vì risk mitigation là ưu điểm.<br>❌ D không phải yêu cầu của shadow."
  },
  {
    q: "What is A/B Test Deployment mainly used for? (A/B Test Deployment chủ yếu dùng để làm gì?)",
    opts: [
      "Replacing every instance at once (Thay mọi instance cùng lúc)",
      "Hiding unfinished features forever (Ẩn feature chưa xong mãi mãi)",
      "Comparing two versions by collecting real-time data from users (So sánh hai version bằng cách thu thập real-time data từ user)",
      "Creating Kubernetes namespaces (Tạo namespace Kubernetes)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: So sánh hai version bằng dữ liệu thực tế</b><br>A/B Testing release hai biến thể, ví dụ Option A và Option B, rồi đo dữ liệu thật để ra quyết định business.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Basic.<br>❌ B không phải A/B.<br>❌ D thuộc Kubernetes."
  },
  {
    q: "A/B Testing is described as what in the slide? (Slide mô tả A/B Testing là gì?)",
    opts: [
      "Strictly a replacement for all deployment strategies (Thay thế hoàn toàn mọi deployment strategy)",
      "A Docker registry pattern (Pattern Docker Registry)",
      "A Kubernetes storage strategy (Chiến lược storage Kubernetes)",
      "A testing approach that builds on the canary deployment strategy (Một testing approach xây trên Canary Deployment)"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Testing approach dựa trên Canary</b><br>Slide nói A/B Test không strictly là deployment strategy, mà là testing approach dựa trên canary deployment.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A quá tuyệt đối.<br>❌ B không liên quan.<br>❌ C không liên quan."
  },
  {
    q: "Which is a pro of A/B Test Deployment? (Ưu điểm của A/B Test Deployment là gì?)",
    opts: [
      "Experimentation and traffic routing based on business need (Experimentation và routing traffic theo nhu cầu business)",
      "Zero maintenance cost (Không có maintenance cost)",
      "No user impact possible (Không thể ảnh hưởng user)",
      "No data collection needed (Không cần thu thập dữ liệu)"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Experimentation và traffic routing</b><br>A/B Testing giúp thử nghiệm nhiều option, chia traffic theo tỷ lệ và quyết định dựa trên dữ liệu thực tế.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B sai vì maintenance cost cao.<br>❌ C sai vì có thể ảnh hưởng UX.<br>❌ D sai vì phải collect data."
  },
  {
    q: "Which is a con of A/B Test Deployment? (Nhược điểm của A/B Test Deployment là gì?)",
    opts: [
      "Cannot collect real-time data (Không thể thu thập real-time data)",
      "High maintenance cost and possible negative impact on user experience (Chi phí maintenance cao và có thể ảnh hưởng xấu UX)",
      "Cannot route traffic by percentage (Không thể route traffic theo tỷ lệ)",
      "Cannot be used for experimentation (Không thể dùng cho experimentation)"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: High maintenance cost và có thể ảnh hưởng UX</b><br>A/B Testing cần duy trì nhiều version/logic đo lường và user có thể gặp trải nghiệm khác nhau.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A sai vì real-time data là cốt lõi.<br>❌ C sai vì traffic split là đặc điểm chính.<br>❌ D sai."
  },
  {
    q: "Which strategy is best when rollback speed and minimum downtime are top priorities but cost is acceptable? (Chiến lược nào phù hợp khi cần rollback nhanh, downtime thấp và chấp nhận chi phí cao?)",
    opts: [
      "Basic Deployment",
      "Multi-service Deployment",
      "Blue-Green Deployment",
      "Manual-only Deployment"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Blue-Green Deployment</b><br>Blue-Green giữ môi trường cũ và mới song song nên rollback nhanh bằng cách chuyển traffic lại môi trường cũ.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A và B khó rollback hơn.<br>❌ D không phải strategy trong slide."
  },
  {
    q: "Which strategy is best for gradually exposing a new version to users? (Chiến lược nào phù hợp để mở version mới dần cho user?)",
    opts: [
      "Basic Deployment",
      "Shadow Deployment",
      "Multi-service Deployment",
      "Canary Deployment"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Canary Deployment</b><br>Canary release version mới cho nhóm nhỏ trước rồi tăng dần đến toàn bộ user nếu không có lỗi.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B C update rộng hơn.<br>❌ B không visible với end users."
  },
  {
    q: "Which strategy is most suitable for testing production-like behavior without exposing changes to end users? (Chiến lược nào phù hợp để test behavior giống production mà không expose cho end users?)",
    opts: [
      "Shadow Deployment",
      "Basic Deployment",
      "A/B Testing",
      "Multi-service Deployment"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: Shadow Deployment</b><br>Shadow Deployment chạy thay đổi trong môi trường song song mô phỏng production nhưng không visible với user.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B expose toàn bộ.<br>❌ C expose cho một phần user.<br>❌ D update nhiều service đồng thời."
  },
  {
    q: "Which strategy relies heavily on runtime feature visibility control? (Chiến lược nào phụ thuộc nhiều vào kiểm soát visibility của feature lúc runtime?)",
    opts: [
      "Rolling Deployment",
      "Feature Toggle Deployment",
      "Basic Deployment",
      "Shadow Deployment"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Feature Toggle Deployment</b><br>Feature Toggle kiểm soát bật/tắt/ẩn feature theo user group hoặc runtime condition.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A update theo instance.<br>❌ C update đồng thời.<br>❌ D chạy song song không visible."
  },
  {
    q: "Which strategy is most likely to require backward compatibility during rollout? (Chiến lược nào thường cần backward compatibility trong lúc rollout?)",
    opts: [
      "Basic Deployment only",
      "Shadow Deployment only",
      "Rolling Deployment",
      "A/B Testing only"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Rolling Deployment</b><br>Trong Rolling Deployment, version cũ và mới có thể cùng tồn tại trong một khoảng thời gian nên cần tương thích ngược.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A update đồng thời.<br>❌ B không phải rollout visible chính.<br>❌ D không phải điểm nhấn backward compatibility trong slide."
  },
  {
    q: "Which strategy is the simplest but most vulnerable to outage? (Chiến lược nào đơn giản nhất nhưng dễ outage nhất?)",
    opts: [
      "Canary Deployment",
      "Blue-Green Deployment",
      "Shadow Deployment",
      "Basic Deployment"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Basic Deployment</b><br>Basic Deployment nhanh, đơn giản, cost-effective nhưng do update đồng thời nên dễ outage và rollback khó.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A giảm rủi ro bằng rollout dần.<br>❌ B rollback nhanh hơn.<br>❌ C không expose trực tiếp user."
  },
  {
    q: "Which deployment strategy is most related to business experiments and informed decisions? (Chiến lược nào liên quan nhất đến business experiment và quyết định dựa trên dữ liệu?)",
    opts: [
      "A/B Test Deployment",
      "Basic Deployment",
      "Rolling Deployment",
      "Multi-service Deployment"
    ],
    ans: 0,
    exp: "<b>✅ Đáp án đúng là A: A/B Test Deployment</b><br>A/B Testing đo hiệu quả của các version/option khác nhau bằng real-time data để hỗ trợ quyết định business.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ B/C/D tập trung vào cách rollout, không phải experiment business chính."
  },
  {
    q: "Which strategy can deploy unfinished features while keeping them hidden? (Chiến lược nào có thể deploy feature chưa hoàn tất nhưng vẫn ẩn đi?)",
    opts: [
      "Blue-Green Deployment",
      "Feature Toggle Deployment",
      "Basic Deployment",
      "Multi-service Deployment"
    ],
    ans: 1,
    exp: "<b>✅ Đáp án đúng là B: Feature Toggle Deployment</b><br>Feature Toggle cho phép deploy code chứa feature chưa hoàn tất nhưng tắt/ẩn với user chưa được phép thấy.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A chỉ switch môi trường.<br>❌ C/D update đồng thời, không điều khiển feature visibility."
  },
  {
    q: "Which pair is correctly matched? (Cặp nào ghép đúng?)",
    opts: [
      "Canary - two identical environments (Canary - hai môi trường giống nhau)",
      "Blue-Green - small subset first (Blue-Green - nhóm nhỏ trước)",
      "Shadow - parallel production-like environment invisible to users (Shadow - môi trường song song giống production và invisible với user)",
      "Basic - gradual rollout by percentage (Basic - rollout dần theo phần trăm)"
    ],
    ans: 2,
    exp: "<b>✅ Đáp án đúng là C: Shadow đúng với môi trường song song invisible</b><br>Shadow Deployment deploy thay đổi vào môi trường song song mô phỏng production nhưng không visible với end users.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A là Blue-Green.<br>❌ B là Canary.<br>❌ D là Canary/Rolling hơn."
  },
  {
    q: "Which strategy usually has high cost because it needs a production-like parallel environment? (Chiến lược nào thường high cost vì cần môi trường song song giống production?)",
    opts: [
      "Basic Deployment",
      "Rolling Deployment",
      "Multi-service Deployment",
      "Shadow Deployment"
    ],
    ans: 3,
    exp: "<b>✅ Đáp án đúng là D: Shadow Deployment</b><br>Shadow Deployment cần môi trường song song mô phỏng production và cơ chế routing/monitoring nên chi phí implementation cao.<br><br><b>Tại sao các đáp án khác sai?</b><br>❌ A/B/C không nhất thiết cần shadow environment."
  }
];
