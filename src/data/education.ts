import type { EducationItem } from '../types';

export const educationItems: EducationItem[] = [
  {
    id: 'bdu-it',
    period: '2024 – Hiện tại',
    degree: {
      vi: 'Cử nhân / Kỹ sư Công nghệ Thông tin',
      en: 'Information Technology Undergraduate',
    },
    institution: {
      vi: 'Đại học Bình Dương – Phân hiệu Cà Mau',
      en: 'Binh Duong University – Ca Mau Campus',
    },
    location: {
      vi: 'Cà Mau, Việt Nam',
      en: 'Ca Mau, Vietnam',
    },
    highlights: [
      {
        vi: 'Sinh viên năm thứ 2, duy trì tinh thần học tập kỷ luật và kết quả rèn luyện tốt.',
        en: '2nd-year undergraduate student maintaining disciplined study habits and solid academic performance.',
      },
      {
        vi: 'Tập trung nghiên cứu các môn chuyên ngành: Cấu trúc dữ liệu & Giải thuật, Cơ sở dữ liệu, Lập trình hướng đối tượng, Mạng máy tính và Hệ điều hành.',
        en: 'Focused on core CS subjects: Data Structures & Algorithms, Databases, Object-Oriented Programming, Computer Networks, and Operating Systems.',
      },
      {
        vi: 'Tích cực tham gia các đồ án học phần thực tế (Phát triển ứng dụng Web quản lý khách sạn ALTF4, Thiết kế mô phỏng điều phối CPU bằng C++).',
        en: 'Actively built practical coursework software projects (ALTF4 Hotel Management Web App, C++ CPU Scheduling Simulator).',
      },
    ],
    status: {
      vi: 'Đang theo học (Năm 2)',
      en: 'Currently Studying (Year 2)',
    },
  },
];
