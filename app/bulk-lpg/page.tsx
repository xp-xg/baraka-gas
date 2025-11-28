"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function BulkLPGPage() {
    const [usage, setUsage] = React.useState([100]);
    const [estimatedCost, setEstimatedCost] = React.useState(0);

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
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Get a Quote
                        </Button>
                    </div>
                    <div className="flex-1">
                        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20">
                            <img
                                src="/images/industrial-installation.png"
                                alt="Industrial LPG Installation with storage tanks and piping system"
                                className="w-full h-full object-cover"
                            />
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
                        <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-lg">
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Propane", desc: "High-efficiency fuel for industrial heating and drying processes." },
                            { name: "Butane", desc: "Ideal for specific chemical applications and low-pressure needs." },
                            { name: "Propylene", desc: "Key feedstock for petrochemical and manufacturing industries." }
                        ].map((gas, index) => (
                            <div key={index} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                                <h3 className="text-2xl font-bold text-primary mb-4">{gas.name}</h3>
                                <p className="text-slate-300">{gas.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Savings Calculator */}
            <section className="py-16 bg-slate-50">
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

                                    <div className="bg-blue-50 p-6 rounded-xl space-y-6">
                                        <div>
                                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Estimated Monthly Cost</h4>
                                            <div className="text-4xl font-bold text-slate-900">
                                                KSh {estimatedCost.toLocaleString()}
                                            </div>
                                            <p className="text-sm text-green-600 mt-2 font-medium">
                                                *Includes bulk discount for high volume
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-blue-200">
                                            <Button className="w-full" size="lg">
                                                Request Detailed Proposal <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
