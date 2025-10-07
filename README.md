# Nexa Facilities Group Website

A modern, professional Next.js 15.5 website with Tailwind CSS 4.1 for Nexa Facilities Group - Expert HVAC/R Maintenance Services.

## 🚀 Features

- **Next.js 15.5** with App Router
- **Tailwind CSS 4.1** for modern styling
- **TypeScript** for type safety
- **Responsive Design** - Mobile-first approach
- **Reusable Components** - Modular and maintainable
- **Smooth Animations** - Intersection Observer for scroll animations
- **Global Header & Footer** - Consistent layout across all pages

## 📁 Project Structure

```
nexa-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── layout.tsx            # Root layout with Header & Footer
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles with CSS variables
├── components/
│   ├── layout/
│   │   ├── Header.tsx        # Global navigation header
│   │   └── Footer.tsx        # Global footer
│   ├── sections/
│   │   ├── Hero.tsx          # Hero section component
│   │   ├── Stats.tsx         # Statistics section
│   │   ├── AboutSection.tsx  # About section
│   │   ├── WhyChooseUs.tsx   # Features section
│   │   ├── CTA.tsx           # Call-to-action section
│   │   └── ServiceCard.tsx   # Service card component
│   └── ui/
│       └── Icon.tsx          # Icon component
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Blue/Navy (Professional & Trustworthy)
- **Secondary**: Industrial Orange (Energy & Technical Expertise)
- **Accent**: Technical Teal (Highlights)
- **Success**: Green (Positive Actions)

### Typography
- **Font Family**: Inter, Roboto (Sans-serif)
- **Monospace**: Roboto Mono

### Components
- Hero sections with gradient backgrounds
- Animated statistics counters
- Service cards with hover effects
- Contact form with validation
- Responsive navigation with mobile menu

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nexa-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Available Pages

- **Home** (`/`) - Hero, Stats, About, Why Choose Us, CTA
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Company information, mission, vision, values
- **Contact** (`/contact`) - Contact form and information

## 🚀 Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly mobile menu

### Animations
- Scroll-triggered animations using Intersection Observer
- Smooth transitions and hover effects
- Staggered animations for list items

### Performance
- Next.js App Router for optimal performance
- Image optimization with next/image
- CSS variables for theming

### SEO
- Semantic HTML structure
- Meta tags configured
- Accessible navigation

## 🔧 Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: oklch(0.3500 0.1800 250);
  --secondary: oklch(0.6500 0.2000 45);
  --accent: oklch(0.5800 0.1500 195);
  /* ... */
}
```

### Content
- Update text content in component files
- Replace placeholder images in sections
- Modify contact information in Footer and Contact page

## 📞 Contact Information

- **Phone**: 1-504-688-2541
- **Email**: info@nexafacilitiesgroup.com
- **Service**: 24/7 Emergency Service Available

## 📝 License

© 2025 Nexa Facilities Group. All rights reserved.

## 🙏 Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)