# Trương Thiện Thư – Personal IT Developer Portfolio

Website Portfolio cá nhân dành cho sinh viên ngành Công nghệ Thông tin, xây dựng trên nền tảng **React + TypeScript + Vite + Tailwind CSS**, hỗ trợ song ngữ (Tiếng Việt / English), Dark/Light Mode và được tối ưu hóa để triển khai tĩnh trên **GitHub Pages**.

---

## 🚀 Công nghệ sử dụng

- **Frontend Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Kiến trúc:** Modular Component & Data Separation (Data layer tách biệt hoàn toàn khỏi UI)
- **CI/CD & Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) + GitHub Pages

---

## 📂 Cấu trúc thư mục dự án

```text
thien-thu-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # CI/CD pipeline tự động build và deploy lên GitHub Pages
├── public/
│   ├── favicon.svg                 # Favicon monogram TT
│   ├── og-image.png                # Ảnh thumbnail khi chia sẻ liên kết
│   └── cv.pdf                      # File CV PDF (TODO: người dùng thêm vào)
├── src/
│   ├── components/                 # Các component tái sử dụng (Navbar, Footer, ProjectCard, Modal...)
│   ├── context/                    # Context providers (ThemeProvider, LanguageProvider)
│   ├── data/                       # DỮ LIỆU CẦN CHỈNH SỬA TẠI ĐÂY
│   │   ├── profile.ts              # Thông tin cá nhân, định hướng, email, links
│   │   ├── projects.ts             # Chi tiết 3 dự án (ALTF4 Hotel, EquipTrack, CPU Scheduler)
│   │   ├── skills.ts               # Kỹ năng phân loại theo mức độ thực tế
│   │   └── education.ts            # Quá trình đào tạo tại ĐH Bình Dương - Phân hiệu Cà Mau
│   ├── hooks/                      # Custom hooks (useTheme, useLanguage)
│   ├── sections/                   # Các section trang (Hero, About, Skills, Projects, Education, Contact)
│   ├── types/                      # TypeScript definitions
│   ├── App.tsx                     # Bố cục trang chính
│   ├── index.css                   # Tailwind theme & utility classes
│   └── main.tsx                    # Entry point React
├── index.html                      # SEO metadata & Open Graph
├── vite.config.ts                  # Cấu hình Vite base path
└── package.json
```

---

## 🛠️ Hướng dẫn cài đặt và chạy thử nghiệm

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Trình duyệt sẽ mở tại: `http://localhost:5173/` (hoặc cổng được Vite chỉ định).

### 3. Kiểm tra mã nguồn (Lint & Typecheck)
```bash
npm run lint
npm run build
```

### 4. Xem trước bản build (Preview)
```bash
npm run preview
```

---

## 📝 Hướng dẫn cập nhật thông tin cá nhân (TODO Checkpoints)

Tất cả thông tin đều được gom tại thư mục `src/data/`, bạn chỉ cần chỉnh sửa trực tiếp các file sau:

### 1. `src/data/profile.ts`
- **Email:** Điền email thật vào `contact.email` (Ví dụ: `'thienthu.dev@gmail.com'`). Nút sao chép và form liên hệ sẽ tự động kích hoạt.
- **GitHub URL:** Điền URL tài khoản GitHub vào `contact.githubUrl`.
- **LinkedIn URL:** Điền URL LinkedIn vào `contact.linkedinUrl` (nếu có).
- **File CV (PDF):** Đặt file CV của bạn vào thư mục `public/cv.pdf`, sau đó đổi `contact.cvPath: './cv.pdf'`. Nút **Tải CV** trên Hero Section sẽ mở tải file ngay lập tức.

### 2. `src/data/projects.ts`
Cập nhật link Repository và Live Demo cho từng dự án:
- `githubUrl`: Điền link GitHub chứa mã nguồn thực tế (nếu để `null`, website sẽ hiển thị nhãn trung thực "Mã nguồn: Cần bổ sung").
- `demoUrl`: Điền link website chạy thử hoặc video demo (nếu có).

### 3. `src/data/skills.ts`
Thêm hoặc cập nhật kỹ năng theo đúng tiến độ học tập:
- `comfortable`: Những công nghệ bạn đã vững và áp dụng tốt trong đồ án.
- `familiar`: Những công nghệ bạn đã thực hành hoặc nắm chắc lý thuyết nền tảng.
- `learning`: Những công nghệ mới bạn đang tiếp tục trau dồi.

---

## 🌐 Hướng dẫn triển khai lên GitHub Pages

Website được thiết lập tự động hóa hoàn toàn thông qua **GitHub Actions**.

### Bước 1: Khởi tạo Git và đẩy lên repository của bạn
```bash
git init
git add .
git commit -m "feat: complete initial portfolio website"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git push -u origin main
```
*(Thay `<USERNAME>` bằng tên tài khoản GitHub của bạn và `<REPO_NAME>` bằng tên repository bạn vừa tạo).*

### Bước 2: Kích hoạt GitHub Pages từ GitHub Actions
1. Truy cập vào repository của bạn trên GitHub.
2. Chọn tab **Settings** -> mục **Pages** (ở thanh menu bên trái).
3. Tại phần **Build and deployment** -> **Source**, chọn: **GitHub Actions**.
4. GitHub Actions sẽ tự động kích hoạt workflow `.github/workflows/deploy.yml`, thực hiện typecheck, build và deploy website của bạn sau khoảng 1-2 phút.

### Bước 3: Xem website
Địa chỉ website chính thức của bạn sẽ có dạng:
```text
https://<USERNAME>.github.io/<REPO_NAME>/
```

---

## 📋 Checklist nghiệm thu

- [x] Không tự ý bịa đặt thông tin cá nhân, số liệu hay chứng chỉ.
- [x] Đầy đủ 7 section: Hero, About Me, Skills, Projects, Education, Contact, Footer.
- [x] Hỗ trợ chuyển đổi song ngữ Tiếng Việt & English.
- [x] Hỗ trợ chế độ Sáng / Tối (Dark / Light Mode) lưu trạng thái qua `localStorage`.
- [x] Responsive mượt mà trên Mobile (375px+), Tablet và Desktop.
- [x] Nút liên hệ và nút tải CV hoạt động trung thực (không tạo link giả `#`).
- [x] Modal xem chi tiết kiến trúc và giải pháp cho từng dự án.
- [x] Kiểm thử Lint (0 lỗi, 0 cảnh báo) và Build (`tsc -b && vite build` thành công 100%).
- [x] Cấu hình sẵn GitHub Actions CI/CD và Vite relative base path.
