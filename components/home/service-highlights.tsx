"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Factory, ShoppingBag, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Home Delivery",
        description: "Fast, reliable delivery of 6kg, 13kg, and 50kg cylinders directly to your doorstep.",
        icon: Truck,
        color: "bg-blue-500",
        link: "/products",
    },
    {
        title: "Bulk LPG",
        description: "Customized bulk gas solutions for hotels, industries, and institutions.",
        icon: Factory,
        color: "bg-orange-500",
        link: "/bulk-lpg",
    },
    {
        title: "Accessories",
        description: "High-quality burners, regulators, and hoses for safe and efficient usage.",
        icon: ShoppingBag,
        color: "bg-green-500",
        link: "/products",
    },
];

export function ServiceHighlights() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t-2 border-primary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Core <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        We provide comprehensive LPG solutions tailored to meet your energy needs with efficiency and safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                                <div className={`h-2 w-full ${service.color}`} />
                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="group-hover:text-primary p-0 hover:bg-transparent" asChild>
                                        <Link href={service.link}>
                                            Learn More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
