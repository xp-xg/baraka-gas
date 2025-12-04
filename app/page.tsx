import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CallOrderDialog } from "@/components/common/call-order-dialog";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ServiceHighlights } from "@/components/home/service-highlights";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Testimonials } from "@/components/home/testimonials";
import { StatsCounter } from "@/components/home/stats-counter";

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
