import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafetyGuide } from "@/components/safety/safety-guide";
import { DownloadCenter } from "@/components/safety/download-center";

export default function SafetyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <div className="bg-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety & Compliance</h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        We are committed to the highest standards of safety in every cylinder we deliver.
                    </p>
                </div>
            </div>

            <SafetyGuide />
            <DownloadCenter />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-700 via-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Experience Safe & Reliable Service
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        With our commitment to safety and compliance, you can trust Baraka Gas for all your LPG needs. Order now and experience the difference.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/quote">Order with Confidence</Link>
                        </Button>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <a href="#download-center">Safety Resources</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
