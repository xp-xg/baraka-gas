"use client";

import { motion } from "framer-motion";
import { Truck, Factory, Users, Warehouse, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const highlights = [
    {
        title: "BARAKA GAS ROAD DELIVERY",
        description: "Our service goes beyond simply delivering goods when asked, it includes offering a wide selection and choice from stock of reliable products with guaranteed quality and continuity of supply.",
        image: "/images/road-delivery.jpg",
    },
    {
        title: "STATE OF ART REFILL STATION",
        description: "Modern refilling facilities equipped with the latest technology to ensure safe and efficient cylinder refilling operations.",
        image: "/images/refill-station.jpg",
    },
    {
        title: "EXTENSIVE FLEET",
        description: "Well-maintained delivery vehicles with GPS tracking, ensuring timely and secure transportation of LPG to your location.",
        image: "/images/fleet.jpg",
    },
    {
        title: "BULK STORAGE FACILITIES",
        description: "Large-scale storage infrastructure that guarantees uninterrupted supply and availability of LPG products year-round.",
        image: "/images/bulk-storage.jpg",
    },
    {
        title: "WORLD CLASS TEAM",
        description: "Dedicated employees working within the former eastern province to deliver operational excellence every day, every year.",
        image: "/images/team.jpg",
    },
    {
        title: "GAS FOR EVERYONE",
        description: "Accessible and affordable LPG solutions for households, businesses, and industries across Kenya.",
        image: "/images/hero-bg.jpg",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Makes Us <span className="text-primary">Special?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We have a team of dedicated employees delivering operational excellence every day, every year.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={highlight.image}
                                        alt={highlight.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg font-bold text-center">
                                        {highlight.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground text-center">
                                        {highlight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
