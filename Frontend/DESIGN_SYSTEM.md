<div align="center">

# 🎨 Haven Tutors Design System

<img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=600&size=28&duration=3000&pause=1000&color=2563EB&center=true&vCenter=true&width=800&height=50&lines=Visual+Design+Guide+%7C+UI+Components+%7C+Style+Standards" alt="Design System" />

**Complete reference for colors, typography, components, and styling standards**

---

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Design System](https://img.shields.io/badge/Design_System-Complete-4CAF50?style=for-the-badge)](.)
[![Montserrat](https://img.shields.io/badge/Font-Montserrat-FF6B6B?style=for-the-badge)](https://fonts.google.com/specimen/Montserrat)

</div>

<br/>

## 📚 Table of Contents

<table>
<tr>
<td width="50%">

- [🎨 Color Palette](#1--color-palette)
- [📝 Typography](#2--typography)
- [📐 Spacing & Layout](#3--spacing--layout)
- [🔘 Buttons](#4--buttons)
- [📝 Form Elements](#5--form-elements)

</td>
<td width="50%">

- [🃏 Cards & Containers](#6--cards--containers)
- [🖼️ Icons & Images](#7--icons--images)
- [⚡ Animations & Transitions](#8--animations--transitions)
- [📱 Responsive Design](#9--responsive-design)
- [🧩 Component Examples](#10--component-examples)

</td>
</tr>
</table>

---

## 1. 🎨 Color Palette

<div align="center">

### Primary Brand Colors

</div>

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| ![#2563eb](https://via.placeholder.com/100x40/2563eb/ffffff?text=BLUE-600) | `#2563eb` | `rgb(37, 99, 235)` | Primary buttons, links, CTAs |
| ![#1d4ed8](https://via.placeholder.com/100x40/1d4ed8/ffffff?text=BLUE-700) | `#1d4ed8` | `rgb(29, 78, 216)` | Hover states, darker accents |
| ![#eff6ff](https://via.placeholder.com/100x40/eff6ff/1e293b?text=BLUE-50) | `#eff6ff` | `rgb(239, 246, 255)` | Light backgrounds, highlights |
| ![#dbeafe](https://via.placeholder.com/100x40/dbeafe/1e293b?text=BLUE-100) | `#dbeafe` | `rgb(219, 234, 254)` | Icon backgrounds, badges |

### Text Colors (Slate Palette)

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| ![#0f172a](https://via.placeholder.com/100x40/0f172a/ffffff?text=SLATE-900) | `#0f172a` | `rgb(15, 23, 42)` | Headings, primary text |
| ![#1e293b](https://via.placeholder.com/100x40/1e293b/ffffff?text=SLATE-800) | `#1e293b` | `rgb(30, 41, 59)` | Body text, dark content |
| ![#475569](https://via.placeholder.com/100x40/475569/ffffff?text=SLATE-600) | `#475569` | `rgb(71, 85, 105)` | Secondary text, descriptions |
| ![#64748b](https://via.placeholder.com/100x40/64748b/ffffff?text=SLATE-500) | `#64748b` | `rgb(100, 116, 139)` | Muted text, placeholders |
| ![#94a3b8](https://via.placeholder.com/100x40/94a3b8/1e293b?text=SLATE-400) | `#94a3b8` | `rgb(148, 163, 184)` | Disabled, subtle elements |

### Neutral Colors

| Color | Hex Code | RGB | Usage |
|-------|----------|-----|-------|
| ![#ffffff](https://via.placeholder.com/100x40/ffffff/1e293b?text=WHITE) | `#ffffff` | `rgb(255, 255, 255)` | Main background, cards |
| ![#f9fafb](https://via.placeholder.com/100x40/f9fafb/1e293b?text=GRAY-50) | `#f9fafb` | `rgb(249, 250, 251)` | Subtle backgrounds, input fields |
| ![#f3f4f6](https://via.placeholder.com/100x40/f3f4f6/1e293b?text=GRAY-100) | `#f3f4f6` | `rgb(243, 244, 246)` | Card hover states, borders |
| ![#d1d5db](https://via.placeholder.com/100x40/d1d5db/1e293b?text=GRAY-300) | `#d1d5db` | `rgb(209, 213, 219)` | Input borders, dividers |

### Accent & Social Media Colors

| Color | Hex Code | RGB | Brand Usage |
|-------|----------|-----|-------------|
| ![#db2777](https://via.placeholder.com/100x40/db2777/ffffff?text=PINK-600) | `#db2777` | `rgb(219, 39, 119)` | Instagram |
| ![#22c55e](https://via.placeholder.com/100x40/22c55e/ffffff?text=GREEN-500) | `#22c55e` | `rgb(34, 197, 94)` | WhatsApp |
| ![#16a34a](https://via.placeholder.com/100x40/16a34a/ffffff?text=GREEN-600) | `#16a34a` | `rgb(22, 163, 74)` | Success states |
| ![#dc2626](https://via.placeholder.com/100x40/dc2626/ffffff?text=RED-600) | `#dc2626` | `rgb(220, 38, 38)` | YouTube, errors |
| ![#2563eb](https://via.placeholder.com/100x40/2563eb/ffffff?text=BLUE-600) | `#2563eb` | `rgb(37, 99, 235)` | Facebook, LinkedIn |

### Gradient Combinations

```css
/* Hero Section Gradient */
background: linear-gradient(to bottom right, #eff6ff, #ffffff);
/* Tailwind: bg-gradient-to-br from-blue-50 to-white */

/* Section Background Gradient */
background: linear-gradient(to bottom, #ffffff, #f9fafb);
/* Tailwind: bg-gradient-to-b from-white to-gray-50 */
```

<div align="center">

**🎨 Color Usage Tips:**
- Use **blue-600** for primary actions
- Use **slate-900** for main headings
- Use **slate-600** for body text
- Maintain consistent color hierarchy

</div>

---

## 2. 📝 Typography

<div align="center">

### Font Family: Montserrat

<img src="https://img.shields.io/badge/Font-Montserrat-FF6B6B?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Montserrat"/>

**Primary Font:** `Montserrat` (Google Fonts)  
**Fallback:** `Arial, sans-serif`

</div>

### Font Weight Scale

| Weight | Code | Tailwind Class | Usage |
|--------|------|----------------|-------|
| **Regular** | `400` | `font-normal` | Body text, paragraphs |
| **Medium** | `500` | `font-medium` | Emphasized text, links |
| **Semibold** | `600` | `font-semibold` | Subheadings, buttons |
| **Bold** | `700` | `font-bold` | Section headings |
| **Extrabold** | `800` | `font-extrabold` | Hero titles, main headlines |

### Heading Hierarchy

| Element | Size (Mobile → Desktop) | Tailwind Classes | Font Weight | Use Case |
|---------|------------------------|------------------|-------------|----------|
| **H1** | 36px → 48px → 60px | `text-4xl sm:text-5xl md:text-6xl` | Bold/Extrabold | Hero titles, main headlines |
| **H2** | 30px → 36px | `text-3xl md:text-4xl` | Bold | Section titles |
| **H3** | 24px → 30px | `text-2xl md:text-3xl` | Semibold/Bold | Subsection titles |
| **H4** | 18px or 20px | `text-lg` or `text-xl` | Semibold | Card titles, features |

### Body Text Scale

<table>
<tr>
<td width="25%">

**Large Text**
```css
font-size: 18px
class: text-lg
color: slate-600
```
*Used for: Lead paragraphs, important descriptions*

</td>
<td width="25%">

**Regular Text**
```css
font-size: 16px
class: text-base
color: slate-600/800
```
*Used for: Standard body content*

</td>
<td width="25%">

**Small Text**
```css
font-size: 14px
class: text-sm
color: slate-500
```
*Used for: Captions, metadata*

</td>
<td width="25%">

**Extra Small**
```css
font-size: 12px
class: text-xs
color: slate-400
```
*Used for: Fine print, labels*

</td>
</tr>
</table>

### Typography Utilities

```css
/* Line Heights */
leading-tight    → 1.25    /* Headings */
leading-normal   → 1.5     /* Default */
leading-relaxed  → 1.625   /* Body text */

/* Letter Spacing */
tracking-tight   → -0.025em   /* Large headings */
tracking-normal  → 0          /* Default */
tracking-wide    → 0.025em    /* Uppercase labels */
tracking-wider   → 0.05em     /* Badges, tags */
```

### Typography Examples

```jsx
{/* Hero Heading */}
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
  Welcome to Haven Tutors
</h1>

{/* Section Title */}
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
  Our Services
</h2>

{/* Body Text */}
<p className="text-base text-slate-600 leading-relaxed">
  We provide personalized online tutoring across 200+ subjects.
</p>

{/* Caption */}
<span className="text-sm text-slate-500">
  Last updated: October 2025
</span>
```

---

## 3. Spacing & Layout

### Container Widths
```css
Max Widths:
- max-w-7xl     → 1280px  (main content)
- max-w-6xl     → 1152px  (forms, modals)
- max-w-4xl     → 896px   (centered text content)
```

### Padding Scale (Tailwind)
```css
Container Padding:
- px-4 sm:px-6 lg:px-8    (Responsive horizontal padding)
- py-16 sm:py-20 md:py-24 (Section vertical padding)

Component Padding:
- p-4      → 16px   (Card padding)
- p-6      → 24px   (Modal padding)
- px-6 py-3 → Horizontal 24px, Vertical 12px (Button padding)
```

### Margin Scale
```css
Section Spacing:
- mt-8     → 32px   (Between elements)
- mt-12    → 48px   (Between sections)
- mb-6     → 24px   (Heading bottom margin)
- gap-6    → 24px   (Grid gaps)
- gap-8    → 32px   (Larger grid gaps)
```

### Grid & Flexbox
```css
Grid Layouts:
- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- gap-6 or gap-8

Flex Layouts:
- flex items-center justify-between
- flex flex-col items-center
```

---

## 4. Buttons

### Primary Button
```jsx
<button className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition">
  Book Demo
</button>

Styles:
- Background: bg-blue-600
- Text: text-white, font-medium
- Padding: px-5 py-2
- Border radius: rounded-full
- Hover: hover:opacity-95
- Transition: transition (200ms)
```

### Primary Button (Large)
```jsx
<button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
  Submit
</button>

Styles:
- Padding: px-6 py-3
- Border radius: rounded-lg
- Hover: hover:bg-blue-700
```

### Secondary Button (Outline)
```jsx
<button className="px-5 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">
  Learn More
</button>
```

### Tab Button
```jsx
<button className={`py-4 px-1 text-lg font-bold transition-colors ${
  isActive 
    ? 'text-blue-600 border-b-2 border-blue-600' 
    : 'text-gray-500 hover:text-blue-600'
}`}>
  Tab Name
</button>
```

### Icon Button
```jsx
<button className="text-slate-600 hover:text-blue-600 transition-colors">
  <Icon size={24} />
</button>
```

### Social Media Buttons
```jsx
{/* Facebook */}
<a className="bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">

{/* LinkedIn */}
<a className="bg-white hover:bg-blue-700 text-blue-700 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">

{/* Instagram */}
<a className="bg-white hover:bg-pink-600 text-pink-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">

{/* WhatsApp */}
<a className="bg-white hover:bg-green-500 text-green-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">

{/* YouTube */}
<a className="bg-white hover:bg-red-600 text-red-600 hover:text-white p-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
```

---

## 5. Form Elements

### Text Input
```jsx
<input 
  type="text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
  placeholder="Enter your name"
/>

Styles:
- Width: w-full
- Padding: px-4 py-3
- Border: border border-gray-300
- Border radius: rounded-lg
- Focus: focus:outline-none focus:ring-2 focus:ring-blue-600
```

### Textarea
```jsx
<textarea 
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
  rows="4"
  placeholder="Your message"
/>
```

### Select Dropdown
```jsx
<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
  <option>Select option</option>
</select>
```

### File Upload
```jsx
<input 
  type="file"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
             file:mr-4 file:py-2 file:px-4 
             file:rounded-full file:border-0 
             file:text-sm file:font-semibold 
             file:bg-blue-50 file:text-blue-700 
             hover:file:bg-blue-100"
/>
```

### Phone Input (react-phone-input-2)
```jsx
<PhoneInput
  inputClass="!w-full !h-[48px] !border !border-gray-300 !rounded-r-lg"
  buttonClass="!h-[48px] !border !border-gray-300 !rounded-l-lg !bg-gray-50 hover:!bg-gray-100 !transition"
  containerClass="!w-full"
/>
```

---

## 6. Cards & Containers

### Service Card
```jsx
<div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
  <div className="w-full h-48 overflow-hidden bg-gray-100">
    <img className="w-full h-full object-cover" />
  </div>
  <div className="p-6">
    <h3 className="text-lg font-semibold text-slate-900">Title</h3>
    <p className="text-slate-600 mt-3 text-base">Description</p>
  </div>
</div>

Styles:
- Background: bg-white
- Border radius: rounded-xl
- Shadow: shadow-md → hover:shadow-lg
- Border: border border-gray-100
- Transition: transition-all duration-300
```

### Testimonial Card
```jsx
<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
  <div className="flex items-center gap-1 text-yellow-500 mb-4">
    {/* Star icons */}
  </div>
  <p className="text-slate-600 text-base mb-6">Quote</p>
  <div className="flex items-center gap-4">
    <img className="w-12 h-12 rounded-full" />
    <div>
      <p className="font-semibold text-slate-900">Name</p>
      <p className="text-sm text-slate-500">Role</p>
    </div>
  </div>
</div>
```

### Modal Container
```jsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
  <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[95vh] overflow-y-auto">
    {/* Modal content */}
  </div>
</div>

Styles:
- Overlay: bg-black bg-opacity-50
- Container: bg-white rounded-2xl shadow-2xl
- Max width: max-w-4xl
- Max height: max-h-[95vh]
```

### Hero Section Container
```jsx
<div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg py-16 px-6 md:px-24">
  <div className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100 mb-6">
    <Icon /> Badge Text
  </div>
  <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
    Heading
  </h1>
  <p className="text-lg text-slate-600 max-w-3xl">
    Description
  </p>
</div>
```

---

## 7. Icons & Images

### Icon Sizes
```jsx
Icon from lucide-react:
- size={14} → 14px (small, badges)
- size={16} → 16px (inline text)
- size={20} → 20px (buttons)
- size={24} → 24px (standard)
- size={32} → 32px (feature icons)
- size={48} → 48px (large hero icons)
```

### Icon with Background
```jsx
<div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
  <Icon size={14} className="text-blue-600 group-hover:text-white" />
</div>
```

### Image Styles
```jsx
{/* Responsive image */}
<img className="w-full h-full object-cover" />

{/* Avatar/Profile image */}
<img className="w-12 h-12 rounded-full" />

{/* Card image */}
<img className="w-full h-48 object-cover" />

{/* Hero image */}
<img className="rounded-xl shadow-2xl" />
```

### Image Containers
```css
Standard Image Container:
- w-full h-48 overflow-hidden bg-gray-100

Logo Container:
- w-32 h-auto or h-8 w-auto
```

---

## 8. Animations & Transitions

### Standard Transitions
```css
Button Hover:
- transition (default 150ms)
- hover:opacity-95
- hover:bg-blue-700

Card Hover:
- transition-all duration-300
- hover:shadow-lg
- hover:scale-105

Icon/Link Hover:
- transition-colors
- hover:text-blue-600
```

### Scale Animations
```css
Social Icons:
- transition-all duration-300 hover:scale-110

Cards:
- transition-all duration-300 hover:scale-105
```

### Group Hover Effects
```jsx
<div className="group">
  <div className="bg-blue-100 group-hover:bg-blue-600 transition-colors">
    <Icon className="text-blue-600 group-hover:text-white" />
  </div>
</div>
```

### Fade In Animation
```css
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

Usage:
- animation: fadeIn 0.6s ease-out
```

---

## 9. Responsive Design

### Breakpoints (Tailwind CSS)
```css
sm:  640px   (Small tablets)
md:  768px   (Tablets)
lg:  1024px  (Desktops)
xl:  1280px  (Large desktops)
2xl: 1536px  (Extra large screens)
```

### Responsive Patterns

#### Text Sizing
```jsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

#### Padding/Spacing
```jsx
<div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
  Container
</div>
```

#### Grid Layouts
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

#### Flex Direction
```jsx
<div className="flex flex-col md:flex-row gap-6">
  {/* Content */}
</div>
```

#### Hide/Show Elements
```jsx
{/* Hide on mobile, show on desktop */}
<div className="hidden md:block">Desktop only</div>

{/* Show on mobile, hide on desktop */}
<div className="block md:hidden">Mobile only</div>
```

---

## 10. Component Examples

### Navigation Link (Active State)
```jsx
<NavLink
  to="/services"
  className={({ isActive }) => 
    isActive 
      ? "text-blue-600 font-semibold border-b-2 border-blue-600"
      : "text-slate-600 hover:text-blue-600 transition-colors"
  }
>
  Services
</NavLink>
```

### Badge/Tag
```jsx
<span className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm border border-blue-100">
  <Icon size={16} />
  Premium
</span>
```

### Contact Info Item
```jsx
<div className="flex items-start gap-4 group">
  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
    <Phone size={14} className="text-blue-600 group-hover:text-white" />
  </div>
  <div>
    <h4 className="font-semibold text-slate-900">Phone</h4>
    <p className="text-slate-600 text-sm">+91 960 684 0892</p>
  </div>
</div>
```

### Stat Display
```jsx
<div className="text-center">
  <div className="text-4xl md:text-5xl font-bold text-blue-600">5000+</div>
  <p className="text-slate-600 mt-2">Happy Students</p>
</div>
```

### Loading Spinner
```jsx
<div className="flex justify-center items-center">
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
</div>
```

---

## Quick Reference

### Most Used Classes

**Container:**
```css
container mx-auto px-4 sm:px-6 lg:px-8
```

**Section:**
```css
py-16 sm:py-20 md:py-24
```

**Card:**
```css
bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all
```

**Button:**
```css
px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition
```

**Input:**
```css
w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600
```

**Link:**
```css
text-blue-600 hover:text-blue-700 font-medium transition-colors
```

---

<div align="center">

## 🎉 Quick Reference Card

<table>
<tr>
<td width="50%">

### 🎨 **Color Quick Pick**

| Purpose | Color Preview | Hex | Tailwind Class |
|---------|---------------|-----|----------------|
| Primary Action | ![#2563eb](https://via.placeholder.com/50x20/2563eb/2563eb) | `#2563eb` | `bg-blue-600` |
| Hover State | ![#1d4ed8](https://via.placeholder.com/50x20/1d4ed8/1d4ed8) | `#1d4ed8` | `bg-blue-700` |
| Headings | ![#0f172a](https://via.placeholder.com/50x20/0f172a/0f172a) | `#0f172a` | `text-slate-900` |
| Body Text | ![#475569](https://via.placeholder.com/50x20/475569/475569) | `#475569` | `text-slate-600` |

</td>
<td width="50%">

### 📐 **Spacing Quick Pick**

| Component | Padding | Class |
|-----------|---------|-------|
| Container | 16-32px | `px-4 sm:px-6 lg:px-8` |
| Button | 20px 12px | `px-5 py-2` |
| Card | 24px | `p-6` |
| Section | 64-96px | `py-16 md:py-24` |

</td>
</tr>
</table>

### 🔥 Most Used Component Classes

| Component | Tailwind Classes |
|-----------|------------------|
| **Container** | `mx-auto px-4 sm:px-6 lg:px-8` |
| **Primary Button** | `px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:opacity-95 transition` |
| **Card** | `bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all` |
| **Input** | `w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600` |
| **Link** | `text-blue-600 hover:text-blue-700 font-medium transition-colors` |

---

## 📊 Design Metrics

<table align="center">
<tr>
<td align="center">
<img src="https://img.shields.io/badge/Colors-25+-2563EB?style=for-the-badge" />
<br/><sub>Defined Colors</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Components-15+-4CAF50?style=for-the-badge" />
<br/><sub>UI Components</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Typography-6_Sizes-FF9800?style=for-the-badge" />
<br/><sub>Text Scales</sub>
</td>
<td align="center">
<img src="https://img.shields.io/badge/Breakpoints-5-9C27B0?style=for-the-badge" />
<br/><sub>Responsive Points</sub>
</td>
</tr>
</table>

---

## 🎯 Design Principles

<table>
<tr>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/design.png" width="64"/>
<br/><br/>
<b>Consistency</b>
<br/>
<sub>Uniform design language across all pages</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/accessible.png" width="64"/>
<br/><br/>
<b>Accessibility</b>
<br/>
<sub>WCAG 2.1 compliant color contrasts</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/speed.png" width="64"/>
<br/><br/>
<b>Performance</b>
<br/>
<sub>Optimized for fast loading times</sub>
</td>
<td align="center" width="25%">
<img src="https://img.icons8.com/fluency/96/000000/responsive.png" width="64"/>
<br/><br/>
<b>Responsive</b>
<br/>
<sub>Mobile-first, works on all screens</sub>
</td>
</tr>
</table>

---

## 🛠️ Tools & Resources

<table>
<tr>
<td width="33%">

**🎨 Design Tools**
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Google Fonts - Montserrat](https://fonts.google.com/specimen/Montserrat)

</td>
<td width="33%">

**🖼️ Assets**
- [Icons8](https://icons8.com) - Icon library
- [Cloudinary](https://cloudinary.com) - Image CDN
- [Shields.io](https://shields.io) - Badges

</td>
<td width="33%">

**📚 References**
- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Can I Use](https://caniuse.com)

</td>
</tr>
</table>

---

## ✅ Design Checklist

- [x] **Color System** - Complete palette with semantic colors
- [x] **Typography Scale** - Consistent heading & body text sizes
- [x] **Spacing System** - Logical padding/margin scale
- [x] **Component Library** - Reusable UI components
- [x] **Responsive Design** - Mobile, tablet, desktop breakpoints
- [x] **Accessibility** - Color contrast, keyboard navigation
- [x] **Animations** - Smooth transitions and hover effects
- [x] **Documentation** - Comprehensive design guide

---

<br/>

<div align="center">

**📖 Last Updated:** October 2025  
**👥 Maintained By:** Haven Tutors Development Team

<br/>

<img src="https://img.shields.io/badge/Design_System-v1.0.0-2563EB?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Production_Ready-4CAF50?style=for-the-badge" />

<br/><br/>

### 💡 Questions or Suggestions?

Contact us at **haventutors@gmail.com**

<br/>

<a href="#-haven-tutors-design-system">
  <img src="https://img.shields.io/badge/⬆️_Back_to_Top-2563EB?style=for-the-badge" alt="Back to Top"/>
</a>

<br/><br/>

---

<sub>© 2025 Haven Tutors. All design elements are proprietary.</sub>

</div>
