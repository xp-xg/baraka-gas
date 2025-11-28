Project: Baraka Gas Ltd Corporate Portal (Next.js)

Role: Act as a Senior Full-Stack Developer and UI/UX Architect.
Task: Rebuild the official Baraka Gas Ltd website (barakagas.com) as a high-performance, modern web application.
Framework: Next.js 14+ (App Router).
Goal: Deliver an industry-standard, SEO-optimized corporate site with "all bells and whistles" regarding performance, animation, and interactivity.
Theme & Branding:

Primary Color: Warm Yellow (Light gradient used in backgrounds - energy and optimism).

Secondary Colors: * Flame Blue (Deep royal blue from the flame icon - trust and stability).

Energy Red (Vibrant red from the flame icon - heat and power).

Accent/Background: Baraka Green (Fresh, distinct green used in the logo text - implies safety and eco-friendliness).

Typography: Modern Sans-Serif (e.g., Inter or Plus Jakarta Sans) for readability and professionalism.

1. Technical Stack & Architecture (Industry Standard)

Framework: Next.js 14 (React Server Components).

Why: Superior SEO (SSR/SSG), blazing fast initial load, and robust routing.

Styling: Tailwind CSS + shadcn/ui (customized to Baraka branding).

Requirement: Use a consistent design system with CSS variables for theming.

Animations: Framer Motion for "bells and whistles" (smooth scroll, entry animations, hover effects).

CMS: Sanity.io or Contentful (Headless CMS) for managing blog posts, safety alerts, and product details without code changes.

Forms & Data: React Hook Form + Zod (Validation) pushing to a serverless API endpoint.

Maps: Google Maps JavaScript API (custom styled) for the Dealer/Depot Locator.

2. Core Pages & Features

2.1. Homepage (The "Wow" Factor)

Hero Section: Full-width video background or high-quality slider showing gas plant operations/happy families.

Interaction: Floating "Quick Order" widget always visible.

Trust Bar: Animated ticker of partners/certifications (EPRA, KEBS).

Service Highlights: 3D-tilt cards for "Home Delivery," "Bulk LPG," and "Accessories."

2.2. Products & Services Hub

LPG Cylinders: Interactive product showcase for 6kg, 13kg, and 50kg.

Feature: "360-degree view" (simulated with images) of cylinders.

Bulk LPG: Dedicated B2B landing page with a "Savings Calculator" (Estimated usage vs. Cost).

Accessories: Grid view of burners, regulators, and hoses with "Enquire" buttons.

2.3. Safety & Compliance (Critical Industry Standard)

Safety Center: A rich content hub with illustrated guides on:

"How to check for leaks."

"Emergency procedures."

"Genuine vs. Fake Seals."

Download Center: PDF links for Material Safety Data Sheets (MSDS) and Corporate Profiles.

2.4. Interactive Dealer Locator

Function: Search by City/Estate.

Visuals: Custom map markers (Gas Cylinder Icons).

Result: List of nearest authorized retailers with "Get Directions" links.

2.5. "Get a Quote" / Order Engine

Smart Form: Multi-step wizard for B2B/Bulk inquiries.

Step 1: User Type (Home/Business).

Step 2: Usage estimation.

Step 3: Contact details.

3. "Bells and Whistles" (Advanced Features)

Dark Mode: Fully supported, automatic system detection.

Page Transitions: Smooth fade/slide effects when navigating between routes (using template.js in Next.js).

Dynamic SEO:

Auto-generated sitemap.xml and robots.txt.

Open Graph Images: Dynamically generated social share cards for every blog post/product.

Structured Data (JSON-LD): Organization, Product, and LocalBusiness schema for Google Rich Snippets.

Performance:

Blur-up Image Loading: No layout shifts (CLS = 0).

Font Optimization: next/font to eliminate FOUT (Flash of Unstyled Text).

4. Layout & Navigation

Header: Sticky, semi-transparent glassmorphism effect on scroll.

Links: Home, Products, Bulk LPG, Safety, Media, Contact.

CTA: "Order Online" (Pulsing Energy Red Button).

Footer: Mega-footer with quick links, newsletter signup, and legal/compliance badges.

Global Floating Action Button (FAB):

Position: Fixed at the bottom-right of the viewport (z-index: 50), visible on all pages.

Design: Circular, branded Baraka Green button with a "Chat/Support" or "Gas Flame" icon.

Function: On click, expands a radial menu or small modal offering quick actions:

WhatsApp: Direct link to WhatsApp Business API for instant ordering.

Call Now: Trigger phone dialer for support.

Install App: (If PWA is installable) Prompt to install to home screen.

Animation: Subtle vertical bounce or "pulse" effect to draw user attention without blocking content.

5. Implementation Plan

Setup: Initialize Next.js app with TypeScript and Tailwind.

Design System: Configure tailwind.config.ts with the Baraka Green/Blue/Red palette.

Components: Build atomic UI components (Buttons, Cards, Inputs) using shadcn/ui.

Pages: Construct the high-fidelity pages with Framer Motion entry effects.

Integration: Connect forms to the backend (Email API or serverless function).

Optimization: Run Lighthouse audit to ensure 95+ Performance/SEO scores.

Deliverable: A production-ready, deployed Next.js application source code that reflects the stature of a market leader.