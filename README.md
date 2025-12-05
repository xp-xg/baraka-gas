# Baraka Gas Ltd - Corporate Website

Official corporate website for **Baraka Gas Ltd**, Kenya's trusted LPG provider.

> *"Clean & Reliable Cooking Partner"*

## 🚀 Project Overview

This is a modern, industry-standard corporate portal built with Next.js 15, featuring:
- **Comprehensive LPG product catalog** (6kg, 13kg, 50kg cylinders)
- **B2B bulk supply solutions** (Propane, Butane, Propylene)
- **Safety-first approach** with emergency response features
- **Regulatory compliance** (EPRA, KEBS certifications)
- **Customer trust elements** (testimonials, statistics, certifications)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + Shadcn/UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes (Dark Mode support)

## 📁 Project Structure

```
baraka-gas-ltd/
├── app/                    # Next.js app router pages
│   ├── about/             # Company information
│   ├── bulk-lpg/          # B2B solutions
│   ├── contact/           # Contact form & locations
│   ├── products/          # Product catalog
│   ├── safety/            # Safety guidelines & downloads
│   └── ...
├── components/            # Reusable React components
│   ├── home/             # Homepage sections
│   ├── layout/           # Header, Footer, FAB, Emergency Banner
│   ├── products/         # Product showcase components
│   ├── safety/           # Safety & download components
│   └── ui/               # Shadcn/UI components
├── public/
│   ├── images/           # Product photos, infrastructure images
│   └── downloads/        # PDFs (MSDS, manuals, certificates)
└── lib/                  # Utility functions
```

## 🎨 Branding

**Color Palette:**
- **Primary**: Warm Yellow (`#FFC107`) - Energy and optimism
- **Secondary**: Flame Blue (`#0D47A1`) - Trust and stability
- **Accent**: Baraka Green (`#2E7D32`) - Safety and eco-friendliness
- **Destructive**: Energy Red (`#D32F2F`) - Heat and power

**Typography:** Plus Jakarta Sans (Google Fonts)

## ✨ Key Features

### Industry-Standard Compliance
- ✅ **Emergency Banner**: 24/7 hotline on all pages
- ✅ **Regulatory Badges**: EPRA & KEBS certifications in footer
- ✅ **Download Center**: 9 industry-standard documents
  - Safety & Emergency (MSDS, Emergency Guide, Safety Poster)
  - Technical Manuals (Installation, Maintenance, Specs)
  - Compliance (EPRA License, KEBS Cert, Corporate Profile)

### Customer Trust Elements
- ✅ **Testimonials**: Real customer reviews with star ratings
- ✅ **Statistics Counter**: Animated stats (7+ Years, 5000+ Customers, etc.)
- ✅ **Real Photography**: Actual company assets (fleet, storage, team)

### User Experience
- ✅ **Dark Mode**: System-aware theme switching
- ✅ **Floating Action Button**: Quick access to WhatsApp, Call, App Install
- ✅ **Interactive Product Showcase**: 3D-style cylinder rotation
- ✅ **Call-to-Action Sections**: Unique CTAs on every page
- ✅ **Responsive Design**: Mobile-first approach

### SEO & Performance
- ✅ **JSON-LD Structured Data**: Schema.org markup for search engines
  - Organization, LocalBusiness, Product, FAQ, Breadcrumb schemas
  - Enhanced search visibility and rich snippets
- ✅ **Sitemap & Robots.txt**: Complete SEO configuration
- ✅ **Open Graph Images**: Social media optimization

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Deployment Options

#### Option 1: DirectAdmin Hosting (Recommended for cPanel/DirectAdmin)

```bash
# Build and prepare for upload
npm run deploy:directadmin
```

Then upload the `out/` folder contents to your server. See [DIRECTADMIN_DEPLOYMENT.md](DIRECTADMIN_DEPLOYMENT.md) for detailed instructions.

#### Option 2: Firebase Hosting

```bash
# Build and deploy to Firebase
npm run deploy
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for Firebase setup instructions.

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📋 Remaining Tasks

**High Priority:**
- [ ] Create actual PDFs (templates in `/public/downloads/README.md`)
  - *Requires: Real EPRA/KEBS certificates, professional design tools*
- [x] Add FAQ section to Contact page
- [x] Add Call-to-Action sections to all pages
- [x] Implement JSON-LD structured data for SEO
  - ✅ Organization schema (global)
  - ✅ LocalBusiness, Product, FAQ, Breadcrumb components ready
  - 📝 See `/components/seo/` for integration examples
- [x] Update Product Page
  - ✅ Add "Call to Order" & "Call to Enquire" with depot numbers
  - ✅ Remove displayed prices (replaced with engagement text)
  - ✅ Add Industrial Gas Leak Detectors (Grouped Grid View)
- [x] Integrate EmailJS for contact forms

**Medium Priority:**
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Live chat widget integration
- [ ] Performance optimization (Lighthouse 90+)

## 📄 Documentation

- **Deployment Guides**: 
  - [DirectAdmin Deployment](DIRECTADMIN_DEPLOYMENT.md) - For cPanel/DirectAdmin hosting
  - [Firebase Deployment](DEPLOYMENT.md) - For Firebase Hosting
- **Project Walkthrough**: [docs/WALKTHROUGH.md](docs/WALKTHROUGH.md)
- **EmailJS Setup**: [docs/EMAILJS_SETUP.md](docs/EMAILJS_SETUP.md)
- **PDF Templates**: [public/downloads/README.md](public/downloads/README.md)

## 🔗 Important Links

- **Live Site**: [barakagas.com](https://barakagas.com)
- **Emergency Hotline**: +254 721 489 755
- **Email**: info@barakagas.com

## 👨‍💻 Developer

Designed and developed by **XP-XG**  
Contact: [WhatsApp](https://wa.me/254735644100)

## 📜 License

Proprietary - © 2024 Baraka Gas Ltd. All rights reserved.
# baraka-gas
