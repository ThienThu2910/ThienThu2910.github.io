import type { ProjectItem } from '../types';

export const projectItems: ProjectItem[] = [
  {
    id: 'altf4-hotel',
    title: 'ALTF4 HOTEL – Hotel Management System',
    category: {
      vi: 'Hệ thống Quản lý Khách sạn & Đặt phòng',
      en: 'Hotel Booking & Management System',
    },
    shortDescription: {
      vi: 'Ứng dụng web toàn diện hỗ trợ đặt phòng trực tuyến cho khách hàng và phân hệ quản trị dành cho nhân viên/quản lý khách sạn.',
      en: 'Comprehensive web application supporting online room reservations for guests and a management portal for hotel staff and administrators.',
    },
    problemStatement: {
      vi: 'Quy trình đặt phòng và theo dõi tình trạng buồng phòng thủ công dễ xảy ra sai sót trùng lịch, khó quản lý danh mục phòng trống theo thời gian thực và quản lý hóa đơn thanh toán.',
      en: 'Manual room booking and availability tracking lead to double-booking risks, lack of real-time vacancy visibility, and inefficient billing management.',
    },
    solutionAndFeatures: [
      {
        vi: 'Giao diện khách hàng: Tìm kiếm phòng theo loại, xem chi tiết tiện ích, chọn ngày nhận/trả phòng và gửi yêu cầu đặt phòng.',
        en: 'Customer Portal: Search rooms by category, view amenities, select check-in/out dates, and place booking requests.',
      },
      {
        vi: 'Phân hệ quản trị: Bảng điều khiển quản lý danh mục phòng, duyệt đơn đặt phòng, theo dõi trạng thái (trống, đã đặt, đang dọn).',
        en: 'Admin Dashboard: Manage room inventory, review and approve reservations, and monitor real-time status (vacant, booked, cleaning).',
      },
      {
        vi: 'Quản lý khách hàng và lập hóa đơn: Lưu trữ lịch sử lưu trú và tính toán tổng chi phí dịch vụ chính xác.',
        en: 'Guest & Invoice Management: Maintain stay history and compute total booking costs accurately.',
      },
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap 5', 'HTML5/CSS3'],
    personalRole: {
      vi: 'Tham gia thiết kế cơ sở dữ liệu quan hệ (ERD), lập trình phân hệ quản trị danh mục phòng, xác thực người dùng và xây dựng giao diện hiển thị danh sách phòng.',
      en: 'Co-designed relational database schema (ERD), implemented room inventory management in admin portal, handled user authentication, and built responsive room listings.',
    },
    technicalHighlights: [
      {
        vi: 'Mô hình hóa cơ sở dữ liệu MySQL chuẩn hóa, đảm bảo tính toàn vẹn dữ liệu đặt phòng qua Foreign Keys và Transaction.',
        en: 'Normalized MySQL schema ensuring reservation integrity with Foreign Keys and transactional integrity.',
      },
      {
        vi: 'Phân quyền rõ ràng giữa vai trò Khách hàng (Client) và Quản trị viên (Admin) qua cơ chế session PHP an toàn.',
        en: 'Clear role-based access control (RBAC) separating Guests and Staff via secure PHP session management.',
      },
      {
        vi: 'Giao diện responsive tương thích tốt trên điện thoại và máy tính để bàn bằng Bootstrap.',
        en: 'Fully responsive UI optimized for mobile devices and desktop computers using Bootstrap grid.',
      },
    ],
    // =========================================================================
    // LƯU Ý BỔ SUNG LINK PROJECT (TODO):
    // Thay null bằng URL thật khi đã public repository hoặc có link video/demo.
    // =========================================================================
    githubUrl: null, // TODO: Cung cấp link GitHub repository (VD: 'https://github.com/username/altf4-hotel')
    demoUrl: null, // TODO: Cung cấp link Live Demo hoặc video demo nếu có
    status: 'completed',
    statusText: {
      vi: 'Đã hoàn thành (Đồ án)',
      en: 'Completed (Academic Project)',
    },
    coverImagePlaceholderText: 'ALTF4 HOTEL PREVIEW',
  },
  {
    id: 'equiptrack',
    title: 'EquipTrack – Equipment Borrowing Management',
    category: {
      vi: 'Hệ thống Quản lý Mượn/Trả Thiết bị',
      en: 'Equipment Lending & Tracking System',
    },
    shortDescription: {
      vi: 'Giải pháp số hóa toàn bộ quy trình đề xuất, phê duyệt, bàn giao và lưu trữ biên bản mượn trả thiết bị kỹ thuật.',
      en: 'Digital solution streamlining requisition, approval, handover, and documentation for technical equipment borrowing workflows.',
    },
    problemStatement: {
      vi: 'Việc quản lý tài sản, thiết bị tại đơn vị bằng sổ sách hoặc bảng tính dễ thất lạc, khó truy cứu trách nhiệm khi thiết bị hư hại và thiếu chứng từ đính kèm.',
      en: 'Tracking physical equipment with paper logs or spreadsheets causes item loss, unclear accountability for damaged goods, and lost handover records.',
    },
    solutionAndFeatures: [
      {
        vi: 'Quy trình mượn/trả chuẩn: Tạo phiếu mượn, chọn thiết bị khả dụng, chỉ định ngày hoàn trả và theo dõi trạng thái phê duyệt.',
        en: 'Standard Borrow/Return Flow: Create borrowing tickets, select available hardware, set expected return dates, and follow approval stages.',
      },
      {
        vi: 'Quản lý kho thiết bị: Theo dõi tình trạng thiết bị (sẵn sàng, đang mượn, bảo trì, hỏng) với mã định danh.',
        en: 'Inventory Management: Monitor equipment lifecycle states (ready, loaned, maintenance, damaged) via unique asset identifiers.',
      },
      {
        vi: 'Lưu trữ tệp đính kèm với MinIO: Lưu ảnh hiện trạng thiết bị khi bàn giao và hóa đơn/biên bản bàn giao số.',
        en: 'Attachment Storage with MinIO: Securely store equipment handover condition photos and digital receipts.',
      },
    ],
    techStack: ['Docker', 'MinIO', 'PHP / Web Stack', 'MySQL', 'REST API'],
    personalRole: {
      vi: 'Nghiên cứu và cấu hình môi trường Docker cho hệ thống, tích hợp kết nối MinIO Object Storage để lưu trữ hình ảnh biên bản và thiết kế luồng trạng thái thiết bị.',
      en: 'Researched and configured Dockerized environment, integrated MinIO Object Storage for asset photos/receipts, and designed equipment state machine logic.',
    },
    technicalHighlights: [
      {
        vi: 'Đóng gói môi trường nhất quán bằng Docker Compose giúp dễ dàng khởi chạy trên mọi máy trạm phát triển.',
        en: 'Consistent environment packaging using Docker Compose enabling zero-friction local setup and deployment.',
      },
      {
        vi: 'Ứng dụng lưu trữ đối tượng tương thích S3 (MinIO) tách biệt hoàn toàn dữ liệu tệp nhị phân khỏi cơ sở dữ liệu quan hệ.',
        en: 'S3-compatible Object Storage (MinIO) decoupling binary files and photos cleanly from relational database records.',
      },
      {
        vi: 'Kiểm soát luồng trạng thái mượn trả chặt chẽ nhằm tránh việc cùng lúc cho mượn một thiết bị đã có người giữ.',
        en: 'Strict state transition validation preventing overlapping loans for the same physical equipment piece.',
      },
    ],
    githubUrl: null, // TODO: Cung cấp link GitHub repository (VD: 'https://github.com/username/equiptrack')
    demoUrl: null, // TODO: Cung cấp link Live Demo hoặc video demo nếu có
    status: 'in-progress',
    statusText: {
      vi: 'Đang hoàn thiện / Nghiên cứu',
      en: 'In Progress / Research',
    },
    coverImagePlaceholderText: 'EQUIPTRACK PREVIEW',
  },
  {
    id: 'cpu-scheduling-simulator',
    title: 'CPU Process Scheduling Simulator',
    category: {
      vi: 'Chương trình Mô phỏng Thuật toán Điều phối CPU',
      en: 'Operating System CPU Scheduling Simulator',
    },
    shortDescription: {
      vi: 'Ứng dụng dòng lệnh / trực quan hóa thuật toán điều phối tiến trình của Hệ điều hành với thuật toán FCFS và SJF (Non-preemptive / Preemptive).',
      en: 'Algorithm visualization and performance analysis tool for Operating System CPU scheduling algorithms, focusing on FCFS and SJF.',
    },
    problemStatement: {
      vi: 'Các thuật toán điều phối tiến trình trong môn học Hệ điều hành tương đối trừu tượng, sinh viên gặp khó khăn khi tính toán thủ công thời gian chờ (Waiting Time) và thời gian hoàn thành (Turnaround Time).',
      en: 'Operating System process scheduling concepts are abstract and tedious to compute manually for Average Waiting Time, Response Time, and Turnaround Time.',
    },
    solutionAndFeatures: [
      {
        vi: 'Nhập dữ liệu tiến trình linh hoạt: ID tiến trình, Thời điểm đến (Arrival Time) và Thời gian thực thi (Burst Time).',
        en: 'Flexible Process Input: Process ID, Arrival Time, and CPU Burst Time configuration.',
      },
      {
        vi: 'Hỗ trợ thuật toán cốt lõi: First-Come, First-Served (FCFS) và Shortest Job First (SJF).',
        en: 'Core Algorithm Support: First-Come, First-Served (FCFS) and Shortest Job First (SJF).',
      },
      {
        vi: 'Biểu đồ Gantt & Thống kê: Mô phỏng trình tự thực thi theo từng mốc thời gian, tính toán chi tiết Average Waiting Time và Turnaround Time.',
        en: 'Gantt Chart & Statistics: Chronological timeline execution output, computing precise Average Waiting Time and Turnaround Time metrics.',
      },
    ],
    techStack: ['C++', 'Algorithms & Data Structures', 'Console / Visualization'],
    personalRole: {
      vi: 'Hiện thực hóa cấu trúc dữ liệu tiến trình, viết thuật toán sắp xếp và điều phối tiến trình theo hàng đợi thời gian, xây dựng hàm hiển thị biểu đồ Gantt trực quan trên màn hình.',
      en: 'Implemented process data structures, wrote queuing and scheduling algorithms, and developed clear Gantt chart visualizers.',
    },
    technicalHighlights: [
      {
        vi: 'Ứng dụng cấu trúc dữ liệu hàng đợi (Queue), mảng cấu trúc (Struct Array) và con trỏ trong C++ để quản lý tiến trình tối ưu bộ nhớ.',
        en: 'Leveraged C++ Structs, Queue structures, and pointers to handle process control blocks (PCB) with zero memory leaks.',
      },
      {
        vi: 'Xử lý chính xác các trường hợp CPU nhàn rỗi (CPU Idle) khi chưa có tiến trình nào tới hệ thống.',
        en: 'Accurately handled CPU idle intervals when arrival times contain dead zones before subsequent processes arrive.',
      },
      {
        vi: 'Kết quả tính toán đối chiếu chính xác với lý thuyết môn học Hệ điều hành.',
        en: 'Results rigorously verified against textbook Operating Systems theoretical benchmarks.',
      },
    ],
    githubUrl: null, // TODO: Cung cấp link GitHub repository (VD: 'https://github.com/username/cpu-scheduling')
    demoUrl: null, // TODO: Cung cấp link Live Demo hoặc video demo nếu có
    status: 'completed',
    statusText: {
      vi: 'Đã hoàn thành (Mô phỏng thuật toán)',
      en: 'Completed (Algorithm Simulator)',
    },
    coverImagePlaceholderText: 'CPU SCHEDULER GANTT PREVIEW',
  },
];
