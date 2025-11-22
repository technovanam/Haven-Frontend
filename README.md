# 🎓 Haven Tutors - Frontend Application

<div align="center">

![Haven Tutors Logo](https://res.cloudinary.com/dnmvriw3e/image/upload/v1761212328/logo_jgnqdd.jpg)

**Empowering Students Through Personalized Online Learning**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

[Live Demo](https://haventutor.com) • [Report Bug](https://github.com/technovanam/Haven/issues) • [Request Feature](https://github.com/technovanam/Haven/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About The Project

Haven Tutors is a modern, responsive web application designed to connect students with expert tutors for personalized online learning. The platform offers one-on-one tutoring, group classes, and comprehensive educational support across multiple curricula including CBSE, ICSE, IGCSE, IB, and more.

### Why Haven Tutors?

- ✅ **Personalized Learning** - Tailored lessons matching each student's pace and goals
- ✅ **Expert Tutors** - Qualified educators with proven track records
- ✅ **Flexible Scheduling** - Learn at your convenience, 24/7 support
- ✅ **Multi-Curriculum** - Support for all major educational boards
- ✅ **Interactive Platform** - Engaging virtual classroom with modern tools
- ✅ **Parent Transparency** - Regular progress reports and updates

---

## ✨ Features

### 🏠 Core Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark Theme Footer** - Modern, professional footer with brand colors
- **Interactive Hero Section** - Engaging landing page with dynamic elements
- **Service Showcase** - Comprehensive display of tutoring services
- **Testimonials** - Real student and parent reviews with ratings
- **Contact Forms** - Integrated demo booking and tutor application forms
- **Multi-Page Navigation** - Smooth routing between Home, About, Services, and Contact pages

### 🎨 Design Features

- **Brand Colors** - Consistent use of #0a2d4a (dark blue) and #e8b112 (gold)
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, semantic HTML, and proper heading structure
- **Performance** - Lazy loading, optimized images, and code splitting

### 📱 User Features

- **Free Demo Booking** - Easy-to-use form for scheduling trial classes
- **Tutor Application** - Streamlined process for educators to join
- **Contact Support** - Multiple channels including email, phone, and WhatsApp
- **Social Media Integration** - Connect via Facebook, LinkedIn, Instagram, YouTube
- **Real-time Form Validation** - Instant feedback on form submissions

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI library for building component-based interfaces |
| **Vite** | 7.1.7 | Next-generation frontend build tool |
| **React Router DOM** | 7.9.4 | Client-side routing and navigation |
| **TailwindCSS** | 4.1.14 | Utility-first CSS framework |

### UI & Icons

| Package | Version | Purpose |
|---------|---------|---------|
| **Lucide React** | 0.546.0 | Modern icon library |
| **Heroicons** | 2.2.0 | Beautiful hand-crafted SVG icons |
| **React Icons** | 5.5.0 | Popular icon library with multiple sets |

### Form & Utilities

| Package | Version | Purpose |
|---------|---------|---------|
| **React Phone Input 2** | 2.15.1 | International phone number input |
| **World Countries** | 5.1.0 | Country data and utilities |

### Development Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.36.0 | Code linting and quality checks |
| **@vitejs/plugin-react** | 5.0.4 | Vite plugin for React support |
| **@tailwindcss/vite** | 4.1.14 | Vite plugin for Tailwind CSS |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

Check your versions:

```bash
node --version
npm --version
git --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/technovanam/Haven.git
cd Haven-Frontend
```

2. **Install dependencies**

```bash
npm install
```

or with yarn:

```bash
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration (see [Environment Variables](#environment-variables) section).

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=https://your-backend-api.com

# EmailJS Configuration (Optional - for contact forms)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_STUDENT_TEMPLATE_ID=your_student_template_id
VITE_EMAILJS_TUTOR_TEMPLATE_ID=your_tutor_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (Optional)
VITE_GA_TRACKING_ID=your_google_analytics_id
```

**Important:** Never commit the `.env` file to version control. It's already included in `.gitignore`.

---

## 💻 Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```
Haven-Frontend/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, etc.
│   │   └── contact.jpg
│   ├── components/              # Reusable components
│   │   ├── BookDemoModal.jsx   # Demo booking modal
│   │   ├── Footer.jsx           # Site footer
│   │   ├── Header.jsx           # Site header
│   │   └── ScrollToTop.jsx     # Scroll to top utility
│   ├── data/                    # Static data
│   │   └── testimonials.js     # Testimonial data
│   ├── pages/                   # Page components
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact page
│   │   ├── Home.jsx             # Home page
│   │   └── Services.jsx         # Services page
│   ├── App.jsx                  # Main app component
│   ├── config.js                # Configuration file
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── .env                         # Environment variables (not in repo)
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── README.md                    # This file
├── tailwind.config.js           # Tailwind configuration
└── vite.config.js               # Vite configuration
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Deploy**

```bash
vercel
```

3. **Set Environment Variables**

Add your environment variables in the Vercel dashboard under Settings → Environment Variables.

### Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Add environment variables** in Site Settings → Build & Deploy → Environment

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting provider.

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Dark** | `#0a2d4a` | Main text, headers, dark backgrounds |
| **Primary Accent** | `#e8b112` | Highlights, CTAs, hover states |
| **White** | `#ffffff` | Backgrounds, light text |
| **Transparent Variants** | Various | Overlays and subtle backgrounds |

### Typography

- **Font Family:** System fonts (optimized for performance)
- **Headings:** Bold, ranging from 2xl to 6xl
- **Body Text:** Regular weight, responsive sizing

### Spacing

- **Container Max Width:** 1280px (7xl)
- **Padding:** Responsive (4-24 units)
- **Gaps:** Consistent 4-12 unit spacing

### Components

- **Buttons:** Rounded, with hover effects and transitions
- **Cards:** Elevated with shadows, hover animations
- **Forms:** Clean inputs with focus states
- **Modals:** Centered overlays with backdrop blur

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Code Style Guidelines

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all tests pass before submitting
- Update documentation as needed

---

## 📄 License

Distributed under the ISC License. See `LICENSE` file for more information.

---

## 📞 Contact

**Haven Tutors**

- 📧 Email: info@haventutor.com
- 📱 Phone/WhatsApp: +91 9606840892
- 🌐 Website: [www.haventutor.com](https://www.haventutor.com)
- 💼 LinkedIn: [Haven Tutors](https://www.linkedin.com/in/haven-tutors-5b89b638b)
- 📘 Facebook: [Haven Tutors](https://www.facebook.com/haventutors)
- 📸 Instagram: [@haven__tutors](https://www.instagram.com/haven__tutors)
- 🎥 YouTube: [Haven Tutors](https://youtube.com/@haventutors)

**Project Link:** [https://github.com/technovanam/Haven](https://github.com/technovanam/Haven)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The amazing UI library
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful icon library
- [Cloudinary](https://cloudinary.com/) - Image hosting and optimization
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

**Made with ❤️ by the Haven Tutors Team**

⭐ Star us on GitHub if you find this project helpful!

</div>
