# Haven Tutors - Design System & Style Guide

This document defines the visual design system, UI components, colors, typography, and styling standards for the Haven Tutors website.

---

## Table of Contents

1. [Color Palette](#1-color-palette)
2. [Typography](#2-typography)
3. [Spacing & Layout](#3-spacing--layout)
4. [Buttons](#4-buttons)
5. [Form Elements](#5-form-elements)
6. [Cards & Containers](#6-cards--containers)
7. [Icons & Images](#7-icons--images)
8. [Animations & Transitions](#8-animations--transitions)
9. [Responsive Design](#9-responsive-design)
10. [Component Examples](#10-component-examples)

---

## 1. Color Palette

### Primary Colors
```css
Blue (Primary Brand Color):
- bg-blue-600  → #2563eb   (Primary buttons, links, CTAs)
- bg-blue-700  → #1d4ed8   (Hover states, darker accents)
- bg-blue-50   → #eff6ff   (Light backgrounds, subtle highlights)
- bg-blue-100  → #dbeafe   (Icon backgrounds, badges)
- text-blue-600 → #2563eb  (Primary text links)
- text-blue-700 → #1d4ed8  (LinkedIn brand color)
```

### Text Colors
```css
Slate (Main text colors):
- text-slate-900 → #0f172a  (Headings, primary text)
- text-slate-800 → #1e293b  (Body text, darker content)
- text-slate-600 → #475569  (Secondary text, descriptions)
- text-slate-500 → #64748b  (Muted text, placeholders)
- text-slate-400 → #94a3b8  (Disabled text, subtle elements)
```

### Neutral Colors
```css
White & Gray:
- bg-white     → #ffffff   (Main background, cards)
- bg-gray-50   → #f9fafb   (Subtle backgrounds, input fields)
- bg-gray-100  → #f3f4f6   (Card hover states, borders)
- border-gray-300 → #d1d5db (Input borders, dividers)
```

### Accent Colors
```css
Social Media & Status:
- bg-pink-600   → #db2777  (Instagram)
- bg-green-500  → #22c55e  (WhatsApp)
- bg-green-600  → #16a34a  (Success states)
- bg-red-600    → #dc2626  (YouTube, errors)
```

### Gradients
```css
Background Gradients:
- bg-gradient-to-br from-blue-50 to-white  (Hero sections)
- bg-gradient-to-b from-white to-gray-50   (Section backgrounds)
```

---

## 2. Typography

### Font Family
```css
Primary Font: Montserrat (Google Fonts)
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- Fallback: Arial, sans-serif
```

### Heading Sizes
```css
H1 (Hero Titles):
- text-4xl sm:text-5xl md:text-6xl    (36px → 48px → 60px)
- font-bold or font-extrabold
- text-slate-900
- leading-tight

H2 (Section Titles):
- text-3xl md:text-4xl                (30px → 36px)
- font-bold
- text-slate-900

H3 (Subsection Titles):
- text-2xl md:text-3xl                (24px → 30px)
- font-semibold or font-bold
- text-slate-900

H4 (Card Titles):
- text-lg or text-xl                  (18px or 20px)
- font-semibold
- text-slate-900
```

### Body Text
```css
Large Text:
- text-lg                             (18px)
- text-slate-600

Regular Text:
- text-base                           (16px)
- text-slate-600 or text-slate-800

Small Text:
- text-sm                             (14px)
- text-slate-500

Extra Small:
- text-xs                             (12px)
- text-slate-400
```

### Font Weights
```css
font-normal      → 400  (body text)
font-medium      → 500  (emphasized text)
font-semibold    → 600  (subheadings, buttons)
font-bold        → 700  (headings)
font-extrabold   → 800  (hero titles)
```

### Line Heights
```css
leading-tight    → 1.25  (headings)
leading-normal   → 1.5   (default)
leading-relaxed  → 1.625 (body text)
```

### Letter Spacing
```css
tracking-tight   → -0.025em  (large headings)
tracking-normal  → 0         (default)
tracking-wide    → 0.025em   (uppercase labels)
tracking-wider   → 0.05em    (badges, tags)
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

**Last Updated**: October 2025  
**Maintained By**: Haven Tutors Development Team
