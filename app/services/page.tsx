import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Home,
    Factory,
    Wrench,
    HeadphonesIcon,
    ShieldCheck,
    Truck,
    Clock,
    CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services | Baraka Gas Ltd",
    description: "Comprehensive LPG services including residential delivery, bulk commercial solutions, installation, maintenance, and 24/7 emergency support.",
    openGraph: {
        title: "Services - Baraka Gas Ltd",
        description: "Explore our full range of LPG services for homes and businesses.",
        type: "website",
    },
};

const services = [
    {
        id: "residential",
        title: "Residential LPG Delivery",
        description: "Fast and reliable home delivery of 6kg and 13kg LPG cylinders directly to your doorstep.",
        icon: Home,
        color: "bg-blue-500",
        features: [
            "Same-day delivery available",
            "Quality-tested cylinders",
            "Flexible payment options",
            "Subscription plans available"
        ],
        link: "/products"
    },
    {
        id: "commercial",
        title: "Commercial & Bulk LPG",
        description: "Customized bulk gas solutions for hotels, restaurants, industries, and institutions.",
        icon: Factory,
        color: "bg-orange-500",
        features: [
            "Volume-based pricing",
            "Dedicated account manager",
            "Scheduled deliveries",
            "Remote tank monitoring"
        ],
        link: "/bulk-lpg"
    },
    {
        id: "installation",
        title: "Installation Services",
        description: "Professional installation of LPG systems, tanks, and piping by certified technicians.",
        icon: Wrench,
        color: "bg-green-500",
        features: [
            "Certified technicians",
            "Safety compliance guaranteed",
            "Free site assessment",
            "Warranty included"
        ],
        link: "/contact"
    },
    {
        id: "maintenance",
        title: "Maintenance & Inspection",
        description: "Regular maintenance and safety inspections to ensure optimal performance and safety.",
        icon: ShieldCheck,
        color: "bg-purple-500",
        features: [
            "Scheduled maintenance plans",
            "Safety audits",
            "Leak detection",
            "Equipment servicing"
        ],
        link: "/safety"
    },
    {
        id: "emergency",
        title: "24/7 Emergency Support",
        description: "Round-the-clock emergency response for gas-related issues and urgent deliveries.",
        icon: HeadphonesIcon,
        color: "bg-red-500",
        features: [
            "24/7 hotline",
            "Emergency deliveries",
            "Rapid response team",
            "Expert troubleshooting"
        ],
        link: "/contact"
    },
    {
        id: "logistics",
        title: "Logistics & Distribution",
        description: "Efficient supply chain management ensuring timely delivery across all regions.",
        icon: Truck,
        color: "bg-indigo-500",
        features: [
            "Wide coverage area",
            "GPS-tracked deliveries",
            "Real-time order tracking",
            "Flexible scheduling"
        ],
        link: "/locator"
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="secondary" className="mb-4">
                        Comprehensive Energy Solutions
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        From residential delivery to large-scale industrial solutions, Baraka Gas provides comprehensive LPG services tailored to meet your specific energy needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/quote">Get a Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                            <Link href="/contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg overflow-hidden">
                            <div className={`h-2 w-full ${service.color}`} />
                            <CardHeader>
                                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {service.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="ghost" asChild className="w-full group-hover:text-primary">
                                    <Link href={service.link}>
                                        Learn More →
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Baraka Gas?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We're committed to providing safe, reliable, and affordable energy solutions with exceptional customer service.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[
                            { icon: Clock, title: "Fast Service", desc: "Quick response and delivery times" },
                            { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety standards" },
                            { icon: CheckCircle, title: "Quality Assured", desc: "Premium products guaranteed" },
                            { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always here when you need us" },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center p-6 bg-background rounded-lg shadow-sm">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss your energy needs and discover how we can serve you better.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/quote">Request a Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
