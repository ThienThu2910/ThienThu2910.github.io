import type { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Trương Thiện Thư',
  eyebrow: {
    vi: 'XIN CHÀO, TÔI LÀ',
    en: "HELLO, I'M",
  },
  role: {
    vi: 'Sinh viên Công nghệ Thông tin',
    en: 'Information Technology Student',
  },
  university: {
    vi: 'Đại học Bình Dương – Phân hiệu Cà Mau',
    en: 'Binh Duong University – Ca Mau Campus',
  },
  academicYear: {
    vi: 'Sinh viên năm 2',
    en: '2nd Year Undergraduate Student',
  },
  direction: {
    vi: 'Web Development / Software Engineering',
    en: 'Web Development / Software Engineering',
  },
  location: {
    vi: 'Cà Mau, Việt Nam',
    en: 'Ca Mau, Vietnam',
  },
  shortBio: {
    vi: 'Sinh viên năm 2 ngành Công nghệ Thông tin với đam mê xây dựng các sản phẩm web và giải pháp phần mềm bài bản, ưu tiên tư duy logic, cấu trúc mã nguồn sạch và trải nghiệm người dùng thực tế.',
    en: '2nd-year Information Technology student passionate about building solid web applications and software solutions, focusing on logical problem solving, clean code architecture, and practical UX.',
  },
  aboutDetails: {
    story: [
      {
        vi: 'Tôi hiện là sinh viên năm thứ hai chuyên ngành Công nghệ Thông tin tại Đại học Bình Dương (Phân hiệu Cà Mau). Trong quá trình học, tôi tập trung rèn luyện nền tảng thuật toán, kiến trúc hệ thống và quy trình phát triển phần mềm chuẩn.',
        en: "I am currently a second-year Information Technology student at Binh Duong University (Ca Mau Campus). During my studies, I focus on building solid algorithmic foundations, system architecture knowledge, and standardized software development workflows.",
      },
      {
        vi: 'Tôi luôn tìm tòi các công nghệ mới và hứng thú với việc biến những bài toán quản lý, điều phối logic phức tạp thành các ứng dụng phần mềm trực quan, dễ thao tác và có giá trị sử dụng thật sự.',
        en: 'I continually explore modern technologies and enjoy transforming complex management workflows and scheduling logic into intuitive, efficient, and genuinely useful software applications.',
      },
    ],
    approach: [
      {
        vi: 'Phân tích yêu cầu & Mô hình hóa: Xác định rõ bài toán, luồng dữ liệu và thiết kế kiến trúc trước khi viết code.',
        en: 'Requirement Analysis & Modeling: Clearly understanding the problem, data flow, and architecture design before writing code.',
      },
      {
        vi: 'Chia nhỏ & Phát triển mô-đun: Tách biệt rành mạch các thành phần hệ thống, tối ưu tính tái sử dụng và khả năng bảo trì.',
        en: 'Modular Breakdown: Decomposing systems into clear, decoupled modules for reusability and maintainability.',
      },
      {
        vi: 'Kiểm thử & Cải tiến liên tục: Thử nghiệm với các ca biên (edge cases), tối ưu hiệu năng và chú trọng phản hồi thực tế từ người dùng.',
        en: 'Testing & Continuous Refinement: Validating edge cases, optimizing performance, and listening to practical user feedback.',
      },
    ],
    highlights: [
      {
        vi: 'Nắm vững kiến thức cốt lõi về Cơ sở dữ liệu, Thuật toán và Lập trình hướng đối tượng (OOP).',
        en: 'Strong foundations in Databases, Data Structures & Algorithms, and Object-Oriented Programming (OOP).',
      },
      {
        vi: 'Thực hành qua các đồ án môn học gắn liền với bài toán quản lý và mô phỏng thực tế.',
        en: 'Practical hands-on experience through academic projects tackling real-world management and simulation problems.',
      },
      {
        vi: 'Tác phong tự học kỷ luật, chủ động tìm tòi tài liệu kỹ thuật và tiếp thu công nghệ mới.',
        en: 'Disciplined self-learning mindset, proactively reading official docs and adopting modern tools.',
      },
    ],
  },
  contact: {
    // =========================================================================
    // LƯU Ý BỔ SUNG THÔNG TIN CÁ NHÂN (TODO PLACEHOLDERS):
    // Thay đổi các giá trị dưới đây thành thông tin thật khi bạn sẵn sàng.
    // Nếu để null, giao diện sẽ hiển thị nhãn "Chờ cập nhật" để đảm bảo tính trung thực.
    // =========================================================================
    email: null, // TODO: Cung cấp địa chỉ email của bạn (Ví dụ: 'example@email.com')
    githubUrl: null, // TODO: Cung cấp URL GitHub cá nhân (Ví dụ: 'https://github.com/your-username')
    linkedinUrl: null, // TODO: Cung cấp URL LinkedIn cá nhân nếu có (Ví dụ: 'https://linkedin.com/in/your-profile')
    cvPath: null, // TODO: Đặt file cv.pdf vào thư mục public/ và đổi giá trị thành './cv.pdf'
  },
};
