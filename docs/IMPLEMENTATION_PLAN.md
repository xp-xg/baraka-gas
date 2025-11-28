# Implementation Plan - Remaining Features

## Goal Description
Complete the Baraka Gas Portal with remaining industry-standard features: FAQ section, live chat, advanced SEO, and accessibility compliance.

## Completed Features ✅
- Emergency Banner with 24/7 hotline
- EPRA/KEBS certifications in footer
- Customer testimonials and statistics
- Expanded download center (9 documents in 3 categories)
- Real asset integration
- Blueprint-aligned branding

---

## Remaining Features

### 1. FAQ Section

#### [MODIFY] [contact/page.tsx](file:///home/tab/.gemini/antigravity/scratch/baraka-gas-portal/app/contact/page.tsx)
**Add FAQ accordion below contact form:**
- How do I order LPG?
- What cylinder sizes are available?
- How long does delivery take?
- What should I do if I smell gas?
- How do I become a dealer?
- What are your payment methods?
- Do you offer bulk discounts?
- How often should cylinders be inspected?

---

### 2. Live Chat Integration

#### Option A: Tawk.to Widget
- Sign up at tawk.to
- Add widget script to `app/layout.tsx`
- Configure to match Baraka branding

#### Option B: WhatsApp Business API
- Enhance FAB to include "Live Chat" that opens WhatsApp
- Already partially implemented via FAB

---

### 3. SEO Enhancement

#### [MODIFY] [layout.tsx](file:///home/tab/.gemini/antigravity/scratch/baraka-gas-portal/app/layout.tsx)
**Add JSON-LD structured data:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Baraka Gas Ltd",
  "url": "https://barakagas.com",
  "logo": "https://barakagas.com/images/logo.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-721-489-755",
    "contactType": "Customer Service"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressLocality": "Nairobi",
    "postalCode": "00100"
  }
}
```

**Add Open Graph meta tags:**
- og:title, og:description, og:image
- twitter:card, twitter:title, twitter:description

#### [NEW] Generate Open Graph Images
- Create dynamic OG images for each page
- Use `@vercel/og` or similar

---

### 4. Accessibility Compliance

#### [MODIFY] [layout.tsx](file:///home/tab/.gemini/antigravity/scratch/baraka-gas-portal/app/layout.tsx)
**Add skip to content link:**
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to content
</a>
```

#### Audit Checklist:
- [ ] All images have descriptive alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Sufficient color contrast (4.5:1 minimum)
- [ ] Keyboard navigation works everywhere
- [ ] Form labels properly associated
- [ ] ARIA labels for icon-only buttons

---

### 5. Additional Pages

#### [NEW] `/certifications` Page
**Display all regulatory approvals:**
- EPRA License (full details + scan)
- KEBS Certification (full details + scan)
- Insurance certificates
- Safety compliance documents
- Quality assurance certifications

#### [MODIFY] [about/page.tsx](file:///home/tab/.gemini/antigravity/scratch/baraka-gas-portal/app/about/page.tsx)
**Add sections:**
- **Our Partners**: Oil Marketing Companies, Suppliers
- **Industry Memberships**: Trade associations, chambers of commerce

---

### 6. PDF Creation

#### Required PDFs (see `/public/downloads/README.md` for templates):
1. `msds-lpg.pdf` - Material Safety Data Sheet (UN GHS format)
2. `emergency-response.pdf` - Emergency procedures
3. `safety-poster.pdf` - Visual safety guide
4. `installation-manual.pdf` - Step-by-step installation
5. `maintenance-guide.pdf` - Inspection and maintenance
6. `technical-specs.pdf` - Product specifications
7. `epra-license.pdf` - Scan of EPRA license
8. `kebs-certificate.pdf` - Scan of KEBS certification
9. `corporate-profile.pdf` - Company brochure

---

## Verification Plan

### Automated Testing
- Run Lighthouse audit (target: 90+ in all categories)
- Run WAVE accessibility checker
- Test all download links

### Manual Testing
1. **FAQ**: Verify accordion works, answers are helpful
2. **Live Chat**: Test chat widget on desktop and mobile
3. **SEO**: Use Facebook/Twitter debugger to verify OG tags
4. **Accessibility**: Navigate entire site with keyboard only
5. **PDFs**: Download and verify all documents open correctly

---

## Priority Ranking

**High Priority (Do First):**
1. PDF Creation (critical for compliance)
2. FAQ Section (improves customer service)
3. SEO Enhancement (improves discoverability)

**Medium Priority:**
4. Accessibility Audit (legal requirement)
5. Live Chat Widget (nice-to-have)

**Low Priority:**
6. Certifications Page (can use existing footer badges)
7. Partners Section (not critical for launch)
