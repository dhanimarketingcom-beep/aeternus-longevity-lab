# Aeternus Longevity Lab Website

A modern, responsive website for Aeternus Longevity Lab - a premium fitness and wellness studio focused on science-based longevity training.

![Aeternus Longevity Lab](./public/modern-premium-fitness-gym-with-weights-and-people.jpg)

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop (320px to 4K)
- **High Performance**: Built with Next.js 16 for optimal performance and SEO
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Smooth Animations**: Scroll animations, fade effects, and interactive elements
- **PWA Ready**: Progressive Web App capabilities for mobile installation
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **Analytics Ready**: Integration with Vercel Analytics

## 🎨 Design Features

- **Color Scheme**: Sophisticated gold (#c9a227) and navy (#0d1117) palette with warm accents
- **Typography**: Inter for body text, Playfair Display for elegant headings
- **Animations**: Fade, scale, slide, shimmer, and pulse effects throughout
- **Interactive Components**: Hover effects, animated counters, and smooth page transitions
- **Responsive Images**: Optimized AVIF/WebP formats with lazy loading

## 📋 Pages

- **Home** (`/`) - Hero section, features, programs preview, testimonials, and CTA
- **About** (`/about`) - Company story, mission, values, and timeline
- **Programs** (`/programs`) - Detailed program listings with benefits
- **Trainers** (`/trainers`) - Team showcase with bios and specialties
- **Events** (`/events`) - Upcoming and past events calendar
- **Contact** (`/contact`) - Contact form, location, hours, and FAQ

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/aeternus-longevity-lab-website.git
cd aeternus-longevity-lab-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (Optional)
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration if needed.

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Build for Production

### Build the application

```bash
npm run build
```

### Test production build locally

```bash
npm run start
```

## 📦 Deployment to Netlify

### Method 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/aeternus-longevity-lab-website.git
git push -u origin main
```

2. **Go to Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Set up environment variables** (if needed)
   - Go to Site settings → Environment variables
   - Add any variables from `.env.example`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Initialize and deploy**
```bash
netlify init
netlify deploy --prod
```

### Method 3: Deploy via Drag & Drop

1. **Build the project**
```bash
npm run build
```

2. **Go to Netlify Drop**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your `.next` folder

### Post-Deployment Configuration

1. **Set up custom domain** (Optional)
   - Go to Domain settings in Netlify
   - Add your custom domain
   - Update DNS records as instructed

2. **Enable HTTPS**
   - Netlify automatically provisions SSL certificates
   - Force HTTPS in Domain settings

3. **Configure redirects** (Already set in `netlify.toml`)
   - 404 redirects are handled automatically
   - Custom redirects can be added to `netlify.toml`

## 🎯 Customization Guide

### Update Colors

Edit `app/globals.css`:

```css
:root {
  --accent: #c9a227; /* Your primary gold color */
  --secondary: #1a5566; /* Your teal accent */
  --primary: #0d1117; /* Your navy color */
}
```

### Update Content

- **Images**: Replace files in `/public` directory
- **Text**: Edit component files in `/components` and page files in `/app`
- **Navigation**: Update `components/header.tsx` and `components/footer.tsx`
- **Contact Info**: Update `components/footer.tsx` and `app/contact/page.tsx`

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google"

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: "--font-your-font"
})
```

### Add New Pages

1. Create a new folder in `app/` directory (e.g., `app/blog`)
2. Add a `page.tsx` file inside
3. Update navigation in `components/header.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)
- **Large Desktop**: > 1920px (2xl)

## 🧩 Tech Stack

### Core
- **Framework**: Next.js 16.0.7
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Node.js**: 18+

### Styling
- **CSS Framework**: Tailwind CSS 4.1.9
- **Animation**: Custom CSS + tw-animate-css
- **UI Components**: Radix UI
- **Icons**: Lucide React

### Deployment
- **Platform**: Netlify
- **Plugin**: @netlify/plugin-nextjs
- **Analytics**: Vercel Analytics

## 📂 Project Structure

```
aeternus-longevity-lab-website/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── events/              # Events page
│   ├── programs/            # Programs page
│   ├── trainers/            # Trainers page
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── loading.tsx          # Loading state
│   ├── error.tsx            # Error handling
│   ├── not-found.tsx        # 404 page
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── home/               # Home page sections
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── programs-preview.tsx
│   │   ├── testimonials-section.tsx
│   │   └── cta-section.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── animated-section.tsx
│   │   ├── button.tsx
│   │   └── ... (50+ components)
│   ├── header.tsx          # Site header
│   └── footer.tsx          # Site footer
├── lib/                     # Utility functions
│   └── utils.ts            # Helper functions
├── hooks/                   # Custom React hooks
│   ├── use-mobile.ts       # Mobile detection
│   └── use-toast.ts        # Toast notifications
├── public/                  # Static assets
│   ├── images/             # Logo and images
│   ├── *.jpg               # Page images
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── netlify.toml            # Netlify configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies & scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## ⚡ Performance Optimizations

- **Image Optimization**: Next.js Image component with AVIF/WebP
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components load on scroll
- **Caching**: Aggressive caching headers (31536000s for static assets)
- **Font Optimization**: Google Fonts with `font-display: swap`
- **Bundle Size**: Optimized webpack configuration
- **Animations**: CSS-based animations with GPU acceleration

## 🔒 Security Features

- **Security Headers**: Configured in `netlify.toml`
  - X-Frame-Options: SAMEORIGIN
  - X-XSS-Protection: 1; mode=block
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: origin-when-cross-origin
- **HTTPS**: Automatic SSL via Netlify
- **Content Security Policy**: Applied to SVG images
- **No Sensitive Data**: All secrets in environment variables

## ♿ Accessibility Features

- **WCAG 2.1 Level AA** compliant
- **Semantic HTML** structure
- **ARIA labels** and roles where needed
- **Keyboard navigation** support
- **Focus indicators** on all interactive elements
- **Alt text** for all images
- **Reduced motion** support for users with vestibular disorders
- **High contrast** mode support
- **Screen reader** friendly

## 🐛 Troubleshooting

### Build fails on Netlify

**Issue**: TypeScript or build errors

**Solution**: 
- The project has `ignoreBuildErrors: true` in `next.config.mjs`
- Make sure all dependencies are installed: `npm install`
- Try building locally first: `npm run build`

### Images not loading

**Issue**: Images show broken links

**Solution**:
- Verify images exist in `/public` directory
- Check image paths (they should start with `/` not `./`)
- Clear browser cache and Netlify cache

### Animations not working

**Issue**: Scroll animations don't trigger

**Solution**:
- Ensure JavaScript is enabled
- Check browser compatibility (needs Intersection Observer API)
- Try disabling ad blockers

### Netlify Functions timeout

**Issue**: Serverless functions timeout

**Solution**:
- Increase function timeout in `netlify.toml`
- Optimize heavy operations
- Consider using Edge Functions for better performance

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier
npm run clean        # Clean build artifacts
```

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to your repository:

1. **Push to main branch** → Deploys to production
2. **Push to other branches** → Creates deploy preview
3. **Pull requests** → Automatic deploy previews

## 📊 Analytics

The site includes Vercel Analytics. To enable:

1. Install: Already included in `package.json`
2. The `<Analytics />` component is in `app/layout.tsx`
3. View analytics in your Vercel dashboard (works on Netlify too)

## 🆘 Support

If you encounter any issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Netlify documentation](https://docs.netlify.com/)
3. Review this README thoroughly
4. Check existing issues on GitHub
5. Create a new issue with details

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

**Aeternus Longevity Lab**
- Website: https://aeternuslongevitylab.com
- Email: info@aeternuslongevitylab.com
- Phone: +1 (555) 123-4567
- Address: 123 Wellness Street, Fitness District, City 10001

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Netlify](https://www.netlify.com/) - Hosting platform

---

**Built with ♥ for longevity** | © 2025 Aeternus Longevity Lab

### Deployment Checklist

Before deploying, ensure:

- [ ] All images are optimized and in `/public`
- [ ] Environment variables are set (if any)
- [ ] Contact information is updated
- [ ] Social media links are correct
- [ ] Google Analytics/tracking codes added (optional)
- [ ] Custom domain DNS configured (if using)
- [ ] Test build locally: `npm run build && npm start`
- [ ] All pages load correctly
- [ ] Forms work (if any backend is needed)
- [ ] Mobile responsive on all pages
- [ ] SEO metadata is correct
- [ ] Sitemap is generated correctly
- [ ] Robots.txt is configured
- [ ] 404 page works
- [ ] Error page works

**Ready to deploy! 🚀**