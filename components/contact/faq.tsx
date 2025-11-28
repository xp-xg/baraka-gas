"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How do I order LPG from Baraka Gas?",
        answer: "You can order through our website using the Quote Request form, call us at +254 721 489 755, or WhatsApp us. We deliver to your location within 24 hours in most areas.",
    },
    {
        question: "What cylinder sizes are available?",
        answer: "We offer three sizes: 6kg (ideal for small families), 13kg (most popular for households), and 50kg (for commercial use and large families). All cylinders meet KEBS safety standards.",
    },
    {
        question: "How long does delivery take?",
        answer: "Standard delivery within Nairobi takes 2-4 hours. For areas outside Nairobi, delivery typically takes 24-48 hours. Emergency deliveries can be arranged for urgent needs.",
    },
    {
        question: "What should I do if I smell gas?",
        answer: "Immediately: 1) Turn off the gas supply at the cylinder valve, 2) Open all windows and doors, 3) Do NOT use any electrical switches or flames, 4) Evacuate the area, 5) Call our emergency hotline: +254 721 489 755.",
    },
    {
        question: "How do I become a Baraka Gas dealer?",
        answer: "Contact our sales team at info@barakagas.com or call +254 733 756 125. We'll guide you through the dealer application process, requirements, and training program.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept M-Pesa, bank transfers, cash on delivery, and corporate invoicing for registered businesses. Payment is required upon delivery for individual customers.",
    },
    {
        question: "Do you offer bulk discounts?",
        answer: "Yes! We offer competitive pricing for bulk orders and corporate clients. Contact our Bulk LPG division at +254 733 756 125 for a customized quote based on your monthly consumption.",
    },
    {
        question: "How often should cylinders be inspected?",
        answer: "We recommend professional inspection every 5 years. However, you should visually check your cylinder monthly for rust, dents, or damage. Never use a damaged cylinder and contact us for replacement.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">
                        Quick answers to common questions about our services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                <span className="font-semibold text-foreground pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 text-muted-foreground">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-muted-foreground mb-2">
                        Still have questions?
                    </p>
                    <p className="font-semibold text-foreground">
                        Call us at{" "}
                        <a href="tel:+254721489755" className="text-primary hover:underline">
                            +254 721 489 755
                        </a>{" "}
                        or email{" "}
                        <a href="mailto:info@barakagas.com" className="text-primary hover:underline">
                            info@barakagas.com
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
