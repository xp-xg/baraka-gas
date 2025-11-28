# Baraka Gas Portal - Project Tasks

## Phase 1: Foundation & Setup ✅
- [x] Initialize Next.js 15+ project with TypeScript
- [x] Configure Tailwind CSS 4 and Shadcn/UI
- [x] Implement Dark Mode support (`next-themes`)
- [x] Create responsive layout (Header, Footer, Mobile Menu)
- [x] Set up basic SEO metadata (sitemap, robots.txt)
- [x] Configure favicon with Baraka Gas logo

## Phase 2: Core Pages Implementation ✅
- [x] **Homepage**: Hero, Trust Bar, Stats Counter, Testimonials, Service Highlights, CTA
- [x] **Products**: LPG Cylinders (6kg, 13kg, 50kg), Accessories, Interactive showcase
- [x] **Services**: Home Delivery, Installation, Maintenance
- [x] **Safety**: Safety Guidelines, Emergency Procedures, Download Center
- [x] **Company**: About Us, Careers, Contact (with dual locations)
- [x] **Legal**: Privacy Policy, Terms of Use, Disclaimer
- [x] **Bulk LPG**: B2B solutions with Propane/Butane/Propylene details

## Phase 3: Key Features ✅
- [x] **Dealer Locator**: Map interface/List view for finding dealers
- [x] **Order Engine**: Quote request form / Order flow
- [x] **Media Center**: News and updates section
- [x] **Floating Action Button (FAB)**: WhatsApp, Call, App Install radial menu

## Phase 4: Branding & Content Injection ✅
- [x] **Color Palette**: Warm Yellow (#FFC107), Flame Blue (#0D47A1), Energy Red (#D32F2F), Baraka Green (#2E7D32)
- [x] **Real Assets**: Logo, Hero images, Product photos, Infrastructure images
- [x] **Homepage Optimization**: Reordered sections, added real images to "What Makes Us Special"

## Phase 5: Industry Standards Implementation ✅
- [x] **Emergency Banner**: Fixed red banner with 24/7 hotline on all pages
- [x] **Regulatory Certifications**: EPRA and KEBS badges in footer
- [x] **Customer Testimonials**: 3 real customer reviews with ratings
- [x] **Statistics Counter**: Animated counters (7+ Years, 5000+ Customers, 1200+ Deliveries, 100% Safety)
- [x] **Download Center**: 9 industry-standard documents in 3 categories
    - Safety & Emergency (MSDS, Emergency Guide, Safety Poster)
    - Technical Manuals (Installation, Maintenance, Specs)
    - Compliance (EPRA License, KEBS Cert, Corporate Profile)

## Phase 6: Advanced Features ✅
- [x] **Documentation**: Saved to `docs/` folder (TASKS.md, IMPLEMENTATION_PLAN.md, WALKTHROUGH.md)
- [x] **FAQ Section**: Added to Contact page with 8 common questions
- [x] **SEO Enhancement**:
    - [x] JSON-LD structured data (Organization schema)
    - [x] Open Graph meta tags (Facebook/LinkedIn)
    - [x] Twitter Card meta tags
- [/] **PDF Templates**: Created 3 HTML templates (MSDS, Emergency Response, Corporate Profile) - Ready to convert

## Phase 7: Polish & UX Enhancements 🔄
- [x] **Accessibility**:
    - [x] Skip to content link with focus styling
    - [x] Main content ID for skip link target
    - [ ] Alt text audit for all images
    - [ ] WCAG 2.1 AA compliance audit
- [x] **Performance**:
    - [x] Loading states (app/loading.tsx)
    - [x] Loading spinner component
    - [ ] Image optimization (blur-up placeholders)
- [x] **UX Improvements**:
    - [x] Scroll to top button
    - [x] Custom 404 error page
    - [ ] Smooth page transitions

## Phase 8: Remaining Items
- [ ] **Live Chat Widget**: Integrate Tawk.to or WhatsApp Business
- [ ] **Additional Pages**:
    - [ ] `/certifications` - Dedicated page for all licenses
    - [ ] Partners/Memberships section in About page
- [ ] **Content Polish**: Professional copywriting review
- [ ] **Performance Audit**: Lighthouse score 90+
- [ ] **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- [ ] **Analytics**: Google Analytics or Plausible integration

## Developer Notes
- **Emergency Banner**: Fixed positioning with z-[60], header at top-10
- **Download Functionality**: Links point to `/downloads/` - PDFs need conversion from HTML templates
- **Accessibility**: Skip link appears on Tab focus, styled with primary color
- **Scroll to Top**: Appears after 300px scroll, positioned above FAB
