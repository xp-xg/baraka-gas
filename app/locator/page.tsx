"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, MapPin, Navigation, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sendEmail, EMAILJS_CONFIG } from "@/lib/email-service";
import { ToastContainer, ToastProps } from "@/components/ui/toast";
import { CallOrderDialog } from "@/components/common/call-order-dialog";

const dealers = [
    {
        id: 1,
        name: "Baraka Gas Center - South B",
        address: "Shopping Center, South B, Nairobi",
        distance: "0.5 km",
        phone: "+254 700 000 001",
    },
    {
        id: 2,
        name: "Quick Mart - Embakasi",
        address: "Eastern Bypass, Embakasi",
        distance: "2.1 km",
        phone: "+254 700 000 002",
    },
    {
        id: 3,
        name: "Total Energy - Mombasa Rd",
        address: "Mombasa Road, Next to Panari",
        distance: "3.4 km",
        phone: "+254 700 000 003",
    },
    {
        id: 4,
        name: "Naivas Supermarket - Capital Centre",
        address: "Mombasa Road, Nairobi",
        distance: "4.0 km",
        phone: "+254 700 000 004",
    },
];

export default function LocatorPage() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [toasts, setToasts] = React.useState<ToastProps[]>([]);
    const router = useRouter();

    const addToast = (toast: Omit<ToastProps, "id" | "onClose">) => {
        const id = Date.now().toString();
        setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            from_name: "Dealer Locator Lead",
            from_email: "no-reply@barakagas.com", // Placeholder as we don't ask for email
            phone: formData.get("phone") as string,
            location: formData.get("location") as string,
            message: `New Dealer Locator Lead:\nPhone: ${formData.get("phone")}\nLocation: ${formData.get("location")}`,
            subject: "New Dealer Locator Lead",
        };

        try {
            await sendEmail(data, EMAILJS_CONFIG.TEMPLATES.DEALER_LEAD);
            addToast({
                title: "Success!",
                description: "Thank you! We'll contact you shortly.",
                variant: "success",
            });
            // Redirect to home after a short delay to show the toast
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (error) {
            console.error("Failed to submit lead:", error);
            addToast({
                title: "Error",
                description: "Failed to submit. Please try calling us directly.",
                variant: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ToastContainer toasts={toasts} onClose={removeToast} />
            {/* Coming Soon Overlay */}
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
                <Card className="w-full max-w-md shadow-2xl border-primary/20">
                    <CardHeader className="text-center space-y-2">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                            <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Dealer Locator Coming Soon</CardTitle>
                        <p className="text-muted-foreground">
                            We are currently updating our dealer network map. Leave your details to get notified when we launch in your area.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="+254..."
                                    required
                                    type="tel"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="location">Your Location</Label>
                                <Input
                                    id="location"
                                    name="location"
                                    placeholder="e.g. Nairobi, Mombasa Road"
                                    required
                                />
                            </div>
                            <Button className="w-full" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>Sending...</>
                                ) : (
                                    <>Notify Me When Available <ArrowRight className="ml-2 w-4 h-4" /></>
                                )}
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                By submitting, you agree to be contacted by Baraka Gas regarding dealer locations.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row filter blur-[2px] pointer-events-none select-none">
                {/* Sidebar / List View */}
                <div className="w-full md:w-1/3 lg:w-1/4 bg-white dark:bg-slate-900 border-r dark:border-slate-700 flex flex-col z-10 shadow-xl">
                    <div className="p-4 border-b dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                        <h1 className="text-xl font-bold mb-4">Find a Dealer</h1>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                placeholder="Search city or estate..."
                                className="pl-9"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <ScrollArea className="flex-1">
                        <div className="p-4 space-y-4">
                            {dealers.map((dealer) => (
                                <Card key={dealer.id} className="cursor-pointer hover:border-primary transition-colors group">
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-semibold group-hover:text-primary transition-colors">{dealer.name}</h3>
                                            <span className="text-xs font-medium bg-slate-100 px-2 py-1 rounded text-slate-600">
                                                {dealer.distance}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
                                            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                                            {dealer.address}
                                        </p>
                                        <Button variant="outline" size="sm" className="w-full gap-2">
                                            <Navigation className="w-3 h-3" /> Get Directions
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Map View (Placeholder) */}
                <div className="flex-1 bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale">
                        <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-2xl text-center max-w-md mx-4">
                            <MapPin className="w-12 h-12 text-destructive mx-auto mb-4 animate-bounce" />
                            <h2 className="text-2xl font-bold mb-2">Interactive Map</h2>
                            <p className="text-muted-foreground mb-4">
                                Google Maps integration requires a valid API Key.
                                In production, this area will show an interactive map with custom markers for all our 500+ dealers nationwide.
                            </p>
                            <Button>Enable Location Services</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white filter blur-[2px] pointer-events-none select-none">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Prefer Home Delivery?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Skip the trip and get your LPG delivered straight to your doorstep. Fast, safe, and convenient ordering online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CallOrderDialog size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Order Home Delivery
                        </CallOrderDialog>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <Link href="/products">View Products</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
