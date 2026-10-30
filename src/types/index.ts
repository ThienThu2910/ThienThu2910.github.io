export type Language = 'vi' | 'en';

export type Theme = 'dark' | 'light';

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface ProfileData {
  name: string;
  eyebrow: LocalizedString;
  role: LocalizedString;
  university: LocalizedString;
  academicYear: LocalizedString;
  direction: LocalizedString;
  location: LocalizedString;
  shortBio: LocalizedString;
  aboutDetails: {
    story: LocalizedString[];
    approach: LocalizedString[];
    highlights: LocalizedString[];
  };
  contact: {
    email: string | null; // TODO: Cung cấp email thật
    githubUrl: string | null; // TODO: Cung cấp link GitHub thật
    linkedinUrl: string | null; // TODO: Cung cấp link LinkedIn thật
    cvPath: string | null; // TODO: Thêm file PDF vào public/cv.pdf
  };
}

export type SkillProficiency = 'comfortable' | 'familiar' | 'learning';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
  badgeColor?: string;
}

export interface SkillCategory {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  skills: SkillItem[];
}

export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface ProjectItem {
  id: string;
  title: string;
  category: LocalizedString;
  shortDescription: LocalizedString;
  problemStatement: LocalizedString;
  solutionAndFeatures: LocalizedString[];
  techStack: string[];
  personalRole: LocalizedString;
  technicalHighlights: LocalizedString[];
  githubUrl: string | null; // TODO: URL mã nguồn nếu có
  demoUrl: string | null; // TODO: URL Live Demo nếu có
  status: ProjectStatus;
  statusText: LocalizedString;
  coverImagePlaceholderText: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: LocalizedString;
  institution: LocalizedString;
  location: LocalizedString;
  highlights: LocalizedString[];
  status: LocalizedString;
}
