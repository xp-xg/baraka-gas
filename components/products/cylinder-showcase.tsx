"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MoveHorizontal, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cylinders = [
    {
        id: "6kg",
        name: "6kg Cylinder",
        price: "Contact for Today's Rate",
        description: "Perfect for small families and light cooking. Portable and efficient.",
        image: "/images/cylinder-6kg.jpg",
    },
    {
        id: "13kg",
        name: "13kg Cylinder",
        price: "Contact for Today's Rate",
        description: "Ideal for medium to large families. Long-lasting and economical.",
        image: "/images/cylinder-13kg.jpg",
    },
    {
        id: "50kg",
        name: "50kg Cylinder",
        price: "Contact for Today's Rate",
        description: "Designed for commercial use, hotels, and restaurants.",
        image: "/images/baraka gas 50kgs cylinder1.jpeg",
    },
];

export function CylinderShowcase() {
    const [activeTab, setActiveTab] = React.useState("6kg");
    const x = useMotionValue(0);
    const rotateY = useTransform(x, [-200, 200], [-45, 45]);

    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Our LPG Cylinders</h2>
                <p className="text-muted-foreground">
                    Choose the perfect size for your needs. Drag to rotate.
                </p>
            </div>

            <Tabs defaultValue="6kg" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 mb-8">
                    {cylinders.map((cyl) => (
                        <TabsTrigger key={cyl.id} value={cyl.id}>{cyl.name}</TabsTrigger>
                    ))}
                </TabsList>

                {cylinders.map((cyl) => (
                    <TabsContent key={cyl.id} value={cyl.id} className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* 3D View Area */}
                            <div className="relative h-[400px] flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing perspective-1000">
                                <motion.div
                                    style={{ rotateY, x }}
                                    drag="x"
                                    dragConstraints={{ left: -200, right: 200 }}
                                    whileTap={{ cursor: "grabbing" }}
                                    className="relative z-10"
                                >
                                    <div className="w-64 h-auto relative">
                                        <img src={cyl.image} alt={cyl.name} className="w-full h-auto drop-shadow-2xl" />
                                    </div>
                                </motion.div>

                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground">
                                    <MoveHorizontal className="w-4 h-4" />
                                    Drag to rotate
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold">{cyl.name}</h3>
                                <p className="text-2xl text-primary font-semibold">{cyl.price}</p>
                                <p className="text-lg text-muted-foreground">{cyl.description}</p>

                                <div className="flex flex-col gap-3">
                                    <Button size="lg" className="w-full md:w-auto text-lg">
                                        <ShoppingCart className="mr-2 w-5 h-5" /> Order Refill
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full md:w-auto text-lg">
                                        Buy New Cylinder
                                    </Button>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <p className="font-semibold text-center mb-2">Call to Order:</p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
                                        <a href="tel:+254722240086" className="text-primary font-bold text-lg hover:underline">+254 722 240086</a>
                                        <span className="hidden sm:inline text-slate-300">|</span>
                                        <a href="tel:+254733216074" className="text-primary font-bold text-lg hover:underline">+254 733 216074</a>
                                    </div>
                                </div>

                                <Card className="bg-slate-50 dark:bg-slate-800 border-none">
                                    <CardContent className="pt-6">
                                        <h4 className="font-semibold mb-2">Features:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                            <li>Standardized valve connection</li>
                                            <li>Safety seal guarantee</li>
                                            <li>Durable steel construction</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
