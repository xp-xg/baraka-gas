"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ToastContainer, ToastProps } from "@/components/ui/toast";
import { sendEmail } from "@/lib/email-service";

export function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendEmail({
                from_name: "Newsletter Subscription",
                from_email: email,
                message: `New newsletter subscription from: ${email}`,
                subject: "Newsletter Subscription Request",
            });
            addToast({
                title: "Success!",
                description: "You've been subscribed to our newsletter.",
                variant: "success",
            });
            setEmail("");
        } catch (error) {
            console.error("Failed to subscribe:", error);
            addToast({
                title: "Error",
                description: "Failed to subscribe. Please try again later.",
                variant: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer toasts={toasts} onClose={removeToast} />
            <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                        {/* Brand & About */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">
                                Baraka<span className="text-accent">Gas</span><span className="text-primary">Ltd</span>
                            </h3>
                            <p className="text-sm text-primary font-semibold italic">
                                Clean & Reliable Cooking Partner
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Leading provider of safe, reliable, and affordable LPG solutions in Kenya.
                                Powering homes and businesses with clean energy.
                            </p>
                            <div className="flex space-x-4 pt-2">
                                <Link href="https://web.facebook.com/barakagasltd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </Link>
                                <Link href="https://x.com/BarakaGas" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.instagram.com/p/B8blFOhFqy0" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/baraka-gas-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/about" className="hover:text-primary transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition-colors">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/products" className="hover:text-primary transition-colors">
                                        Our Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/bulk-lpg" className="hover:text-primary transition-colors">
                                        Bulk LPG Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/safety" className="hover:text-primary transition-colors">
                                        Safety Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locator" className="hover:text-primary transition-colors">
                                        Find a Dealer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="hover:text-primary transition-colors">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                                    <span>
                                        P.O. Box 26806 - 00100<br />
                                        Nairobi, Kenya
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-primary shrink-0" />
                                    <span>+254 721 489 755</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-primary shrink-0" />
                                    <span>info@barakagas.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Certifications & Compliance */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Certifications</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="text-primary font-bold text-xs">EPRA</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">EPRA Licensed</p>
                                        <p className="text-xs text-slate-400">Energy Regulatory Authority</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                                        <span className="text-accent font-bold text-xs">KEBS</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">KEBS Certified</p>
                                        <p className="text-xs text-slate-400">Kenya Bureau of Standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter - Coming Soon */}
                        {/* <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
                            <p className="text-sm text-slate-400">
                                Subscribe to get safety tips and exclusive offers.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus-visible:ring-primary"
                                />
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                                </Button>
                            </form>
                        </div> */}

                        {/* Why Choose Baraka Gas */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Why Choose Us?</h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>24/7 Emergency Gas Delivery</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>EPRA & KEBS Certified Quality</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Competitive Pricing Guaranteed</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-0.5">✓</span>
                                    <span>Free Safety Inspections</span>
                                </li>
                            </ul>
                            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </div>

                    <Separator className="my-8 bg-slate-800" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                        <div className="flex flex-col md:flex-row items-center gap-2">
                            <p>&copy; {new Date().getFullYear()} Baraka Gas Ltd. All rights reserved.</p>
                            <span className="hidden md:inline text-slate-700">|</span>
                            <p>
                                Designed and developed by{" "}
                                <Link
                                    href="https://wa.me/254735644100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-primary transition-colors font-medium"
                                >
                                    XP-XG
                                </Link>
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
