<div align="center">

# 🎓 Haven Tutors

### *Your Gateway to Academic Excellence*

[![Live Website](https://img.shields.io/badge/Website-Live-brightgreen?style=for-the-badge)](https://haventutors.com)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

**Empowering students worldwide with personalized online tutoring across 200+ subjects**

[Live Demo](https://haventutors.com) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started)

</div>

---

## 🌟 About Haven Tutors

Haven Tutors is a modern, full-featured online tutoring platform designed to connect students with expert educators worldwide. Built with cutting-edge web technologies, the platform offers a seamless, responsive experience across all devices.

### ✨ What Makes Us Special

- 🎯 **200+ Subjects** - From K-12 to Professional Certifications
- 👨‍🏫 **Expert Tutors** - Carefully vetted, experienced educators
- 🌍 **Global Reach** - Students from 50+ countries
- 💼 **Flexible Scheduling** - Learn at your own pace
- 📱 **Mobile Responsive** - Seamless experience on any device
- 🎨 **Modern UI/UX** - Clean, intuitive interface

---

## 🚀 Features

### 🏠 **Home Page**
- Eye-catching hero section with call-to-action
- Real-time statistics showcase (5000+ students, 500+ tutors)
- Feature highlights with animated icons
- Student testimonials carousel
- Interactive demo booking modal

### 📚 **Services**
- Comprehensive subject categorization (K-12, Languages, Professional, etc.)
- Dynamic category filtering with tabs
- 200+ subjects with detailed descriptions
- Beautiful card-based layout with hover effects
- Cloudinary-powered image optimization

### ℹ️ **About Us**
- Company story and mission statement
- Interactive timeline of vision and values
- Detailed "What We Do" section
- Our unique approach to education
- Team statistics and achievements

### 📞 **Contact**
- Interactive contact form with validation
- Real-time email notifications via Nodemailer
- Multiple contact methods (phone, email, social media)
- Google Maps integration (ready to implement)
- Auto-reply confirmation emails

### 🎓 **Book Demo Modal**
- Dual-tab interface (Student/Tutor applications)
- International phone number input
- Country selection dropdown
- Grade/board selection for students
- Resume upload for tutors
- Form validation and error handling

---

## 🛠️ Tech Stack

### **Frontend**
```
⚛️  React 18.3.1          - Component-based UI
🎨  Tailwind CSS 4.0      - Utility-first styling
⚡  Vite 5.4              - Lightning-fast build tool
🎭  Lucide React          - Beautiful icon library
📱  React Router 7        - Client-side routing
🌍  React Phone Input 2   - International phone inputs
```

### **Backend**
```
🟢  Node.js + Express     - RESTful API server
📧  Nodemailer            - Email service integration
🔐  CORS                  - Cross-origin security
📦  Multer                - File upload handling
```

### **Infrastructure**
```
☁️  Cloudinary             - Image CDN & optimization
🌐  Hosted                - Production deployment
📊  Analytics Ready       - Google Analytics integration
```

---

## 📁 Project Structure

```
Haven/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── BookDemoModal.jsx # Demo booking interface
│   │   └── ScrollToTop.jsx  # Route scroll utility
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # Company information
│   │   ├── Services.jsx     # Subject catalog
│   │   └── Contact.jsx      # Contact form
│   ├── App.jsx              # Main layout wrapper
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── backend/
│   └── server.js            # Express API server
├── public/                  # Static assets
├── DESIGN_SYSTEM.md         # Visual design guide
└── package.json             # Dependencies
```

---

## 🎨 Design System

Our comprehensive design system ensures visual consistency across the entire platform:

- **Colors**: Blue primary (#2563eb), Slate text variants
- **Typography**: Montserrat font family (400-800 weights)
- **Components**: Pre-built buttons, cards, forms, modals
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design with Tailwind breakpoints

👉 See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete details

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18+ and npm/yarn installed
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/technovanam/Haven.git
cd Haven
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Set up environment variables**
```bash
# Create .env file in backend directory
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

5. **Run development servers**
```bash
# Terminal 1 - Frontend (http://localhost:5173)
npm run dev

# Terminal 2 - Backend (http://localhost:5001)
cd backend
node server.js
```

### Build for Production
```bash
npm run build
```

---

## 📸 Screenshots

### Home Page
> Modern hero section with statistics and testimonials

### Services Catalog
> 200+ subjects organized by category with beautiful cards

### Contact Form
> Interactive form with real-time validation

### Book Demo Modal
> Dual-tab interface for students and tutors

---

## 🌐 Live Demo

Visit the live website: **[haventutors.com](https://haventutors.com)**

---

## 📫 Contact

- **Website**: [haventutors.com](https://haventutors.com)
- **Email**: haventutors@gmail.com
- **Phone**: +91 960 684 0892
- **Instagram**: [@haven__tutors](https://www.instagram.com/haven__tutors)
- **Facebook**: [Haven Tutors](https://www.facebook.com/haventutors)
- **LinkedIn**: [Haven Tutors](https://www.linkedin.com/in/haven-tutors-5b89b638b)
- **YouTube**: [@haventutors](https://youtube.com/@haventutors)

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary and confidential. All rights reserved © 2025 Haven Tutors.

---

## 🙏 Acknowledgments

- **Lucide React** for beautiful icons
- **Tailwind CSS** for rapid UI development
- **React Router** for seamless navigation
- **Cloudinary** for image optimization
- **Vite** for blazing-fast development experience

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

[⬆ Back to Top](#-haven-tutors)

</div>
