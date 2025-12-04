"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export function Hero() {

    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Gradient Placeholder */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                {/* Hero Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4 border border-primary/20">
                            #1 Trusted LPG Provider in Kenya
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                            Fueling Your Life with <span className="text-primary">Energy</span> & <span className="text-destructive">Safety</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold italic mt-4">
                            Clean & Reliable Cooking Partner
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0"
                    >
                        Experience the reliability of Baraka Gas. From home cooking to industrial power, we deliver clean energy with unmatched safety standards.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12 px-8" asChild>
                            <a href="/contact">
                                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg h-12 px-8" asChild>
                            <a href="/locator">
                                Find a Dealer
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Quick Order Widget */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full max-w-md"
                >
                    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-primary/20">
                        <CardHeader className="space-y-1 pb-4">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <Flame className="w-6 h-6 text-destructive fill-destructive" />
                                Quick Order
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Call us directly for instant service.
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/40 border border-blue-100 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Bulk LPG & Inquiries</h3>
                                <p className="text-sm text-blue-700 dark:text-blue-200 mb-2">For industrial and commercial needs</p>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                                    <a href="tel:+254721489755">Call Main Office</a>
                                </Button>
                                <p className="text-xs text-blue-600 dark:text-blue-200 mt-2 text-center font-medium hidden md:block">
                                    📞 +254 721 489 755
                                </p>
                            </div>

                            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/40 border border-orange-100 dark:border-orange-700 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
                                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Cylinder Refills</h3>
                                <p className="text-sm text-orange-700 dark:text-orange-200 mb-2">For home delivery and retail</p>
                                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white" asChild>
                                    <a href="tel:+254722240086">Call Depot</a>
                                </Button>
                                <p className="text-xs text-orange-600 dark:text-orange-200 mt-2 text-center font-medium hidden md:block">
                                    📞 +254 722 240086
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
