import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafetyGuide } from "@/components/safety/safety-guide";
import { DownloadCenter } from "@/components/safety/download-center";
import { CallOrderDialog } from "@/components/common/call-order-dialog";

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

            {/* Maintenance & Support Section */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Maintenance & After-Sales Support</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We don't just supply gas; we ensure your entire system remains safe and efficient for years to come.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "Annual Safety Audits",
                                desc: "Comprehensive inspections of your entire gas system to identify and rectify potential hazards before they become issues.",
                                icon: "🛡️"
                            },
                            {
                                title: "24/7 Emergency Support",
                                desc: "Our rapid response team is on standby around the clock to handle any gas-related emergencies or urgent repairs.",
                                icon: "🚑"
                            },
                            {
                                title: "Preventive Maintenance",
                                desc: "Scheduled servicing of valves, regulators, and piping to extend the lifespan of your infrastructure and ensure peak performance.",
                                icon: "🔧"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all text-center">
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                        <CallOrderDialog size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Order with Confidence
                        </CallOrderDialog>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <a href="#download-center">Safety Resources</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
