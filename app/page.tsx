import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CallOrderDialog } from "@/components/common/call-order-dialog";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServiceHighlights } from "@/components/home/service-highlights";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { StatsCounter } from "@/components/home/stats-counter";

export const metadata: Metadata = {
  title: "Baraka Gas Ltd | Leading LPG Gas Supplier Kenya | Energy for Life",
  description: "Kenya's trusted LPG gas supplier. Order gas cylinders (6kg, 13kg, 50kg), bulk LPG, accessories. Fast delivery Nairobi, Machakos, Kitui. 100,000+ happy customers. Call +254 721 489 755",
  keywords: [
    // Core business
    "LPG gas supplier Kenya", "gas cylinder delivery Kenya", "Baraka Gas",
    // Products
    "6kg gas cylinder", "13kg gas cylinder", "50kg gas cylinder",
    "bulk LPG Kenya", "industrial LPG", "commercial LPG",
    // Services
    "gas cylinder delivery Nairobi", "LPG home delivery", "gas refill service",
    "bulk LPG installation", "industrial gas supply",
    // Locations
    "Nairobi gas supplier", "Machakos LPG", "Kitui gas cylinder", "Matuu gas delivery",
    // Accessories
    "LPG regulators Kenya", "gas stove", "gas accessories",
    // Keywords
    "cooking gas Kenya", "clean energy", "propane", "butane", "safe gas delivery"
  ],
  openGraph: {
    title: "Baraka Gas Ltd - Kenya's Trusted LPG Supplier",
    description: "10+ years experience. 100,000+ happy customers. Fast delivery across Kenya. Call +254 721 489 755 for instant service.",
    images: ["/opengraph-image.jpg"],
  },
};


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <StatsCounter />
      <WhyChooseUs />
      <ServiceHighlights />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden border-t-4 border-primary/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599690964299-cd85e3d4dbd7?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Switch to Baraka Gas?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who trust us for their daily energy needs. Safe, affordable, and reliable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallOrderDialog size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Call to Order
            </CallOrderDialog>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
