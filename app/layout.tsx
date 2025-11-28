import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActionButton } from "@/components/layout/fab";
import { EmergencyBanner } from "@/components/layout/emergency-banner";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baraka Gas Ltd | Energy for Life",
  description: "Official corporate portal for Baraka Gas Ltd. Order LPG, find dealers, and learn about safety. Leading provider of safe, reliable, and affordable LPG solutions in Kenya.",
  keywords: ["LPG", "Baraka Gas", "Kenya", "Gas cylinders", "Propane", "Butane", "Energy", "Cooking gas"],
  authors: [{ name: "Baraka Gas Ltd" }],
  creator: "XP-XG",
  publisher: "Baraka Gas Ltd",
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://barakagas.com",
    title: "Baraka Gas Ltd | Energy for Life",
    description: "Leading provider of safe, reliable, and affordable LPG solutions in Kenya. Order now for fast delivery.",
    siteName: "Baraka Gas Ltd",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Baraka Gas - Energy for Life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baraka Gas Ltd | Energy for Life",
    description: "Leading provider of safe, reliable, and affordable LPG solutions in Kenya.",
    images: ["/images/hero-bg.jpg"],
    creator: "@BarakaGas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[70] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Baraka Gas Ltd",
              url: "https://barakagas.com",
              logo: "https://barakagas.com/images/logo.jpg",
              description: "Leading provider of safe, reliable, and affordable LPG solutions in Kenya.",
              foundingDate: "2018",
              founder: {
                "@type": "Person",
                name: "Jack Kimwele",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+254-721-489-755",
                  contactType: "Customer Service",
                  areaServed: "KE",
                  availableLanguage: ["English", "Swahili"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+254-722-240086",
                  contactType: "Depot",
                  areaServed: "KE",
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressCountry: "KE",
                  addressLocality: "Nairobi",
                  postalCode: "00100",
                  streetAddress: "P.O. Box 26806",
                },
                {
                  "@type": "PostalAddress",
                  addressCountry: "KE",
                  addressLocality: "Matuu Town",
                  addressRegion: "Machakos County",
                  streetAddress: "Along Mwingi - Garissa Rd",
                },
              ],
              sameAs: [
                "https://web.facebook.com/barakagasltd",
                "https://x.com/BarakaGas",
                "https://www.instagram.com/p/B8blFOhFqy0",
                "https://www.linkedin.com/company/baraka-gas-ltd",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <EmergencyBanner />
          <Header />
          <main id="main-content" className="flex-grow pt-28">
            {children}
          </main>
          <Footer />
          <FloatingActionButton />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
