"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Phone, Mail } from "lucide-react";
import { useState } from "react";

const faqCategories = [
    {
        category: "Ordering & Delivery",
        questions: [
            {
                question: "How do I order LPG from Baraka Gas?",
                answer: "You can order through our website using the Quote Request form, call us at +254 721 489 755, WhatsApp us, or visit any of our offices. We deliver to your location within 24 hours in most areas.",
            },
            {
                question: "How long does delivery take?",
                answer: "Standard delivery within Nairobi takes 2-4 hours. For areas outside Nairobi, delivery typically takes 24-48 hours. Emergency deliveries can be arranged for urgent needs.",
            },
            {
                question: "What are your delivery charges?",
                answer: "Delivery charges vary based on location. Within Nairobi CBD, delivery is free for orders above KSh 2,000. For other areas, charges range from KSh 100-500 depending on distance.",
            },
            {
                question: "Do you deliver on weekends?",
                answer: "Yes! We deliver Monday to Saturday from 8:00 AM to 5:30 PM. Sunday deliveries can be arranged for emergencies at an additional charge.",
            },
        ],
    },
    {
        category: "Products & Pricing",
        questions: [
            {
                question: "What cylinder sizes are available?",
                answer: "We offer three sizes: 6kg (ideal for small families), 13kg (most popular for households), and 50kg (for commercial use and large families). All cylinders meet KEBS safety standards.",
            },
            {
                question: "What's the difference between refill and new cylinder?",
                answer: "A refill is when you exchange your empty cylinder for a filled one. A new cylinder purchase includes both the cylinder and the gas. Refills are more economical for regular customers.",
            },
            {
                question: "Do you offer bulk discounts?",
                answer: "Yes! We offer competitive pricing for bulk orders and corporate clients. Contact our Bulk LPG division at +254 733 756 125 for a customized quote based on your monthly consumption.",
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept M-Pesa, bank transfers, cash on delivery, and corporate invoicing for registered businesses. Payment is required upon delivery for individual customers.",
            },
        ],
    },
    {
        category: "Safety & Maintenance",
        questions: [
            {
                question: "What should I do if I smell gas?",
                answer: "Immediately: 1) Turn off the gas supply at the cylinder valve, 2) Open all windows and doors, 3) Do NOT use any electrical switches or flames, 4) Evacuate the area, 5) Call our emergency hotline: +254 721 489 755.",
            },
            {
                question: "How often should cylinders be inspected?",
                answer: "We recommend professional inspection every 5 years. However, you should visually check your cylinder monthly for rust, dents, or damage. Never use a damaged cylinder and contact us for replacement.",
            },
            {
                question: "How long does a cylinder last?",
                answer: "A 13kg cylinder typically lasts 3-4 weeks for an average family of 4-5 people cooking 2-3 meals daily. Usage varies based on cooking habits and appliance efficiency.",
            },
            {
                question: "Can I use any regulator with Baraka Gas cylinders?",
                answer: "We recommend using KEBS-certified regulators. Our cylinders use standard clip-on regulators. We sell certified regulators and can install them for you during delivery.",
            },
        ],
    },
    {
        category: "Business & Partnerships",
        questions: [
            {
                question: "How do I become a Baraka Gas dealer?",
                answer: "Contact our sales team at info@barakagas.com or call +254 733 756 125. We'll guide you through the dealer application process, requirements, and training program.",
            },
            {
                question: "Do you supply to hotels and restaurants?",
                answer: "Yes! We specialize in bulk LPG supply for commercial clients including hotels, restaurants, schools, and industries. We offer competitive rates and reliable supply.",
            },
            {
                question: "What is your bulk LPG minimum order?",
                answer: "For bulk tank refills, the minimum order is typically 500kg. However, we can discuss custom arrangements based on your specific needs and consumption patterns.",
            },
        ],
    },
    {
        category: "Installation & Piping",
        questions: [
            {
                question: "How long does a typical installation take?",
                answer: "Timeline varies by project size. A standard school laboratory setup typically takes 3-5 days, while larger industrial systems may take 2-3 weeks including testing and commissioning.",
            },
            {
                question: "Do you handle EPRA licensing?",
                answer: "Yes, we handle the entire EPRA licensing process for our installations. We prepare all necessary technical drawings and documentation required for approval.",
            },
            {
                question: "What are the safety requirements for a school lab?",
                answer: "School labs require specific safety measures including gas leak detection systems, automatic shut-off valves, fume hoods, and proper ventilation. We ensure all installations meet KS and EPRA standards.",
            },
        ],
    },
    {
        category: "Account & Support",
        questions: [
            {
                question: "Do I need to create an account to order?",
                answer: "No, you can order as a guest. However, creating an account allows you to track orders, view history, and get faster checkout for repeat orders.",
            },
            {
                question: "How can I track my order?",
                answer: "After placing an order, you'll receive an SMS with your order number. You can call our customer service at +254 721 489 755 to track your delivery status.",
            },
            {
                question: "What is your refund policy?",
                answer: "If you receive a faulty cylinder or incorrect order, contact us immediately. We'll replace it at no charge. Refunds are processed within 7-14 business days for prepaid orders.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

    const toggleItem = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
                    >
                        <HelpCircle className="w-5 h-5" />
                        <span className="font-semibold">Help Center</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find answers to common questions about our products, services, and policies.
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-1 h-8 bg-primary rounded-full" />
                                {category.category}
                            </h2>
                            <div className="space-y-4">
                                {category.questions.map((item, questionIndex) => {
                                    const key = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openItems[key];

                                    return (
                                        <div
                                            key={questionIndex}
                                            className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
                                        >
                                            <button
                                                onClick={() => toggleItem(categoryIndex, questionIndex)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                                            >
                                                <span className="font-semibold text-foreground pr-4">
                                                    {item.question}
                                                </span>
                                                <ChevronDown
                                                    className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <motion.div
                                                initial={false}
                                                animate={{
                                                    height: isOpen ? "auto" : 0,
                                                    opacity: isOpen ? 1 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-4 text-muted-foreground">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="text-muted-foreground mb-6">
                            Our customer support team is here to help you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+254721489755"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call: +254 721 489 755
                            </a>
                            <a
                                href="mailto:info@barakagas.com"
                                className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-foreground px-6 py-3 rounded-lg font-semibold border border-border hover:bg-accent transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
