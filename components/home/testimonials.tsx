"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        name: "James Mwangi",
        role: "Restaurant Owner, Nairobi",
        content: "Baraka Gas has been our trusted partner for 3 years. Their bulk LPG supply is consistent, and the delivery team is always professional. Highly recommended!",
        rating: 5,
    },
    {
        name: "Sarah Njeri",
        role: "Homemaker, Machakos",
        content: "I switched to Baraka Gas last year and haven't looked back. The 13kg cylinder lasts longer, and their safety standards give me peace of mind for my family.",
        rating: 5,
    },
    {
        name: "David Omondi",
        role: "Hotel Manager, Mombasa",
        content: "Excellent service! The team helped us transition to bulk LPG seamlessly. Our energy costs have reduced by 15%. Thank you, Baraka Gas!",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our <span className="text-primary">Customers Say</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Trusted by thousands of homes and businesses across Kenya.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-4 right-4 text-primary/10">
                                    <Quote className="w-16 h-16" />
                                </div>
                                <CardContent className="p-6 relative z-10">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-6 italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
