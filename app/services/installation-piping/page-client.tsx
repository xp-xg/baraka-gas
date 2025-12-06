"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Wrench, GraduationCap, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function InstallationPipingPageClient() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/installationandpipping.jpeg"
                        alt="Professional LPG Piping Installation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
                </div>
                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl text-white"
                    >
                        <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-1 px-4">
                            EPRA Licensed & Certified
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Expert LPG Piping & <span className="text-primary">Installation</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                            Setting the standard for safety and reliability in schools, institutions, and industries across Kenya.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90" asChild>
                                <a href="/contact">Request Site Assessment</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                                <a href="#standards">View Standards</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction & Focus */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold leading-tight">
                                Powering Education & Healthcare with <span className="text-primary">Safe Energy</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                At Baraka Gas, we understand the critical importance of safety in educational and medical environments. Our specialized installation services are designed to meet the unique needs of schools, universities, and hospitals.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Card className="border-none shadow-lg bg-slate-50 dark:bg-slate-900">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                            <GraduationCap className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold">Schools & Universities</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Safe piping for science labs, dining halls, and dormitories.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-none shadow-lg bg-slate-50 dark:bg-slate-900">
                                    <CardContent className="p-6 flex flex-col gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                            <Building2 className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold">Institutions</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Reliable systems for hospitals, correctional facilities, and large complexes.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/installationandpipping1.jpeg"
                                    alt="School Laboratory Gas Installation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-xl shadow-xl hidden md:block">
                                <p className="text-4xl font-bold mb-2">100+</p>
                                <p className="text-sm font-medium opacity-90">Institutions Powered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Process */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Installation Process</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            A systematic approach ensuring safety, compliance, and efficiency from start to finish.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Site Survey & Design",
                                desc: "Comprehensive risk assessment and custom system design compliant with EPRA safety zones."
                            },
                            {
                                step: "02",
                                title: "Professional Installation",
                                desc: "Execution by licensed technicians using certified copper/steel piping and high-grade fittings."
                            },
                            {
                                step: "03",
                                title: "Testing & Commissioning",
                                desc: "Rigorous pressure testing, leak detection, and system verification before handover."
                            },
                            {
                                step: "04",
                                title: "Training & Support",
                                desc: "Staff training on safe operation, emergency procedures, and ongoing maintenance support."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-6xl font-bold text-slate-100 dark:text-slate-700 absolute top-4 right-4 -z-10">
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Safety Systems Checklist */}
            <section className="py-20 bg-white dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="/images/gasalarmcontroller.jpeg"
                                    alt="Gas Alarm Controller System"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium text-lg">Advanced Gas Detection & Shut-off Systems</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Critical Safety Systems for <span className="text-primary">High-Risk Environments</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We go beyond basic piping. Our installations include advanced safety mechanisms essential for laboratories and commercial kitchens.
                            </p>

                            <div className="grid gap-6">
                                {[
                                    {
                                        title: "Gas Leak Detection",
                                        desc: "Sensors that continuously monitor air quality and trigger alarms at the first sign of a leak."
                                    },
                                    {
                                        title: "Automatic Shut-Off Valves",
                                        desc: "Solenoid valves that instantly cut gas supply when a leak is detected or emergency button is pressed."
                                    },
                                    {
                                        title: "Ventilation Interlocks",
                                        desc: "Ensures gas supply is only active when the ventilation system is running, preventing fume buildup."
                                    },
                                    {
                                        title: "Pressure Regulators",
                                        desc: "High-precision regulators to maintain consistent and safe gas pressure for all appliances."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standards & Compliance */}
            <section id="standards" className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
                <div className="container relative z-10 mx-auto px-4">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="mb-4 text-primary border-primary">Uncompromising Safety</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Industry Standards & Compliance</h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            We strictly adhere to national and international regulations to ensure every installation is safe, legal, and durable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "EPRA Licensed",
                                desc: "Fully licensed by the Energy and Petroleum Regulatory Authority for LPG installation works.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Petroleum Act 2019",
                                desc: "All installations comply with the Petroleum Act 2019 and LPG Regulations 2019.",
                                icon: CheckCircle
                            },
                            {
                                title: "KS Standards",
                                desc: "Materials and workmanship adhere to Kenya Standards (KS) and engineering best practices.",
                                icon: Wrench
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <item.icon className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Work in Action</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            See how we've transformed energy infrastructure for institutions across the region.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "/images/installationandpipping2.jpeg",
                            "/images/installationandpipping3.jpeg",
                            "/images/installationandpipping4.jpeg",
                            "/images/installationandpipping5.jpeg",
                            "/images/installationandpipping.jpeg",
                            "/images/installationandpipping1.jpeg"
                        ].map((src, idx) => (
                            <div key={idx} className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
                                <img
                                    src={src}
                                    alt={`Installation Project ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Upgrade Your Infrastructure?</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
                        Get a free site assessment and technical proposal for your institution today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-10 py-6 text-primary font-bold" asChild>
                            <a href="/contact">Contact Our Engineers</a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-transparent border-white text-white hover:bg-white/10" asChild>
                            <a href="tel:+254721489755">Call +254 721 489 755</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
