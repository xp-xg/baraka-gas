"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function BulkLPGPage() {
    const [usage, setUsage] = React.useState([100]);
    const [estimatedCost, setEstimatedCost] = React.useState(0);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const images = ["/images/Bulkservices.jpeg", "/images/Bulkservices1.jpeg"];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        // Simple calculation logic: Base rate + volume discount
        const baseRate = 150; // KSh per kg
        const discount = usage[0] > 500 ? 0.1 : 0;
        const cost = usage[0] * baseRate * (1 - discount);
        setEstimatedCost(cost);
    }, [usage]);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900" />
                <div className="container relative z-10 mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Power Your Business with <span className="text-primary">Bulk LPG</span>
                        </h1>
                        <p className="text-xl text-blue-100">
                            Reliable, cost-effective energy solutions for industries, hotels, and institutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <a href="tel:+254721489755">Call Nairobi Office: +254 721 489 755</a>
                            </Button>
                            <Button size="lg" asChild className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20">
                                <a href="/contact">Send Message</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt="Industrial LPG Installation"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "Uninterrupted Supply",
                        "Cost Efficient",
                        "Expert Installation",
                        "24/7 Support",
                        "Safety Audits",
                        "Remote Monitoring",
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            <span className="font-semibold text-lg">{benefit}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Industrial Solutions */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Specialized Industrial Commodities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { name: "Propane", desc: "High-efficiency fuel for industrial heating and drying processes." },
                            { name: "Butane", desc: "Ideal for specific chemical applications and low-pressure needs." }
                        ].map((gas, index) => (
                            <div key={index} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="text-2xl font-bold text-primary mb-4">{gas.name}</h3>
                                <p className="text-slate-300">{gas.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* School & Institution Safety */}
            <section className="py-16 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Safe & Compliant Gas Solutions for Education</h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Ensuring the safety of students and staff is paramount. We provide comprehensive gas piping solutions, safety audits, and compliance documentation that meet strict EPRA and international standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Mandatory Safety Audits</h3>
                                    <p className="text-muted-foreground">
                                        We conduct rigorous annual inspections and pressure tests to certify your system's integrity, ensuring full compliance with the Petroleum Act 2019.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Emergency Response Training</h3>
                                    <p className="text-muted-foreground">
                                        Empower your staff with hands-on training. We establish clear evacuation protocols and emergency shut-off procedures for labs and kitchens.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400">
                                    <CheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Smart Safety Technology</h3>
                                    <p className="text-muted-foreground">
                                        Deploy state-of-the-art gas detection systems, automatic isolation valves, and remote monitoring to neutralize risks before they escalate.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h3 className="text-2xl font-bold mb-6">Safety Literature & Resources</h3>
                            <ul className="space-y-4 mb-8">
                                <li>
                                    <a href="/downloads/school-safety-checklist.pdf" download className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">School Gas Safety Checklist</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/downloads/lab-safety-protocol.pdf" download className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Laboratory Safety Protocol</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/downloads/emergency-response.pdf" download className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Emergency Response Guide</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/downloads/safety-poster.pdf" download className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                        <span className="font-medium">Safety Guidelines Poster</span>
                                    </a>
                                </li>
                            </ul>
                            <Button className="w-full" asChild>
                                <a href="/safety">Visit Download Center</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Savings Calculator */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-xl border-primary/20">
                            <CardHeader className="bg-slate-900 text-white rounded-t-xl">
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Calculator className="w-6 h-6 text-primary" />
                                    Savings Calculator
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <Label className="text-lg">Estimated Monthly Usage (kg)</Label>
                                            <div className="text-4xl font-bold text-primary">{usage[0]} kg</div>
                                            <Slider
                                                value={usage}
                                                onValueChange={setUsage}
                                                max={2000}
                                                step={10}
                                                className="py-4"
                                            />
                                            <div className="flex justify-between text-sm text-muted-foreground">
                                                <span>0 kg</span>
                                                <span>2000+ kg</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl space-y-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Estimated Monthly Cost</h4>
                                            <div className="text-4xl font-bold text-slate-900 dark:text-white">
                                                KSh {estimatedCost.toLocaleString()}
                                            </div>
                                            <p className="text-sm text-green-600 mt-2 font-medium">
                                                *Includes bulk discount for high volume
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-blue-200">
                                            <Button className="w-full" size="lg" asChild>
                                                <a href="/contact">
                                                    Request Detailed Proposal <ArrowRight className="ml-2 w-4 h-4" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Power Your Business?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get a customized bulk LPG solution tailored to your business needs. Start saving today with our competitive pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <a href="tel:+254721489755">Call Nairobi Office: +254 721 489 755</a>
                        </Button>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <a href="/contact">Send Message</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
