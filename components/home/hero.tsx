"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Hero() {
    const router = useRouter();
    const [quickOrder, setQuickOrder] = useState({
        cylinderType: "",
        location: "",
        phone: "",
    });

    const handleQuickOrder = (e: React.FormEvent) => {
        e.preventDefault();
        // Store data in sessionStorage for quote page
        if (quickOrder.cylinderType && quickOrder.location && quickOrder.phone) {
            sessionStorage.setItem("quickOrderData", JSON.stringify(quickOrder));
            router.push("/quote");
        }
    };

    return (
        <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video/Gradient Placeholder */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
                            <a href="/quote">
                                Order Now <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg h-12 px-8" asChild>
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
                                Get your gas delivered in minutes.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleQuickOrder} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cylinder-type">Cylinder Size</Label>
                                    <Select onValueChange={(val) => setQuickOrder({ ...quickOrder, cylinderType: val })} required>
                                        <SelectTrigger id="cylinder-type">
                                            <SelectValue placeholder="Select size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="6kg">6kg Cylinder (Refill)</SelectItem>
                                            <SelectItem value="13kg">13kg Cylinder (Refill)</SelectItem>
                                            <SelectItem value="50kg">50kg Cylinder (Refill)</SelectItem>
                                            <SelectItem value="new-6kg">6kg Cylinder (New)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location">Delivery Location</Label>
                                    <Input
                                        id="location"
                                        placeholder="Enter your estate/area"
                                        value={quickOrder.location}
                                        onChange={(e) => setQuickOrder({ ...quickOrder, location: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="07..."
                                        value={quickOrder.phone}
                                        onChange={(e) => setQuickOrder({ ...quickOrder, phone: e.target.value })}
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-destructive hover:bg-destructive/90 text-white text-lg h-12 mt-2">
                                    Proceed to Order
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
