import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      vi: 'Front-end Development',
      en: 'Front-end Development',
    },
    description: {
      vi: 'Xây dựng giao diện web phản hồi tốt, thân thiện với người dùng và tối ưu hiệu năng.',
      en: 'Building responsive, accessible, and user-friendly web interfaces.',
    },
    skills: [
      { name: 'HTML5 / CSS3', proficiency: 'comfortable' },
      { name: 'JavaScript (ES6+)', proficiency: 'comfortable' },
      { name: 'React', proficiency: 'familiar' },
      { name: 'Tailwind CSS', proficiency: 'familiar' },
      { name: 'TypeScript', proficiency: 'learning' },
      { name: 'Bootstrap', proficiency: 'comfortable' },
    ],
  },
  {
    id: 'backend',
    title: {
      vi: 'Back-end & Systems',
      en: 'Back-end & Systems',
    },
    description: {
      vi: 'Xử lý logic nghiệp vụ, quản lý phiên làm việc và lập trình hệ thống cơ bản.',
      en: 'Business logic processing, session management, and foundational systems programming.',
    },
    skills: [
      { name: 'PHP', proficiency: 'comfortable' },
      { name: 'C++', proficiency: 'comfortable' },
      { name: 'C# / .NET', proficiency: 'familiar' },
      { name: 'Node.js', proficiency: 'learning' },
      { name: 'RESTful API Concept', proficiency: 'familiar' },
    ],
  },
  {
    id: 'database',
    title: {
      vi: 'Database & Storage',
      en: 'Database & Storage',
    },
    description: {
      vi: 'Thiết kế lược đồ quan hệ, truy vấn dữ liệu và lưu trữ đối tượng.',
      en: 'Relational schema design, SQL queries, and object storage integration.',
    },
    skills: [
      { name: 'MySQL', proficiency: 'comfortable' },
      { name: 'Microsoft SQL Server', proficiency: 'familiar' },
      { name: 'MinIO Object Storage', proficiency: 'familiar' },
    ],
  },
  {
    id: 'devops-tools',
    title: {
      vi: 'DevOps & Developer Tools',
      en: 'DevOps & Developer Tools',
    },
    description: {
      vi: 'Các công cụ hỗ trợ kiểm soát phiên bản, đóng gói môi trường và quy trình làm việc.',
      en: 'Version control systems, environment containerization, and modern development workflows.',
    },
    skills: [
      { name: 'Git & GitHub', proficiency: 'comfortable' },
      { name: 'Docker', proficiency: 'familiar' },
      { name: 'VS Code', proficiency: 'comfortable' },
      { name: 'Postman', proficiency: 'familiar' },
    ],
  },
];
