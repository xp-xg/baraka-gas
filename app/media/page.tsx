import React from "react";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Newspaper } from "lucide-react";

export const metadata: Metadata = {
    title: "Media & News | Baraka Gas Ltd",
    description: "Stay updated with the latest news, press releases, and media coverage from Baraka Gas Ltd.",
};

const newsItems = [
    {
        id: 1,
        title: "Baraka Gas Expands Distribution Network to Coastal Region",
        category: "Press Release",
        date: "2025-01-15",
        excerpt: "We are excited to announce the expansion of our distribution network to serve more customers in the coastal region with reliable LPG delivery services.",
    },
    {
        id: 2,
        title: "New Safety Initiative Launched for LPG Users",
        category: "Safety",
        date: "2025-01-10",
        excerpt: "Baraka Gas launches comprehensive safety training program for dealers and customers to ensure safe handling and usage of LPG products.",
    },
    {
        id: 3,
        title: "Baraka Gas Wins Industry Excellence Award",
        category: "Awards",
        date: "2024-12-20",
        excerpt: "Recognized for outstanding service delivery and commitment to safety standards in the energy sector.",
    },
    {
        id: 4,
        title: "Sustainable Energy Solutions for Businesses",
        category: "Business",
        date: "2024-12-05",
        excerpt: "Introducing our new bulk LPG solutions designed specifically for commercial and industrial clients seeking clean energy alternatives.",
    },
];

export default function MediaPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Newspaper className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Media & News</h1>
                <p className="text-xl text-muted-foreground">
                    Stay informed with the latest updates, announcements, and stories from Baraka Gas Ltd.
                </p>
            </div>

            {/* News Grid */}
            <div className="max-w-5xl mx-auto grid gap-6">
                {newsItems.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4 mb-2">
                                <Badge variant="secondary">{item.category}</Badge>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(item.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })}</span>
                                </div>
                            </div>
                            <CardTitle className="text-2xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">{item.excerpt}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Media Contact Section */}
            <div className="mt-16 max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-primary to-primary/10 p-0.5 rounded-lg">
                    <div className="bg-background rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-2 text-primary">Media Inquiries</h2>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            For press releases, media kits, or interview requests, please contact our communications team.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
                            <div className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-lg border border-border">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                </div>
                                <p className="text-center">
                                    <a href="mailto:info@barakagas.com" className="text-primary hover:underline">
                                        info@barakagas.com
                                    </a>
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-6 bg-muted/50 rounded-lg border border-border">
                                <div className="flex items-center gap-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                </div>
                                <p className="text-center">
                                    <a href="tel:+254721489755" className="text-primary hover:underline">
                                        +254 721 489 755
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <span>General Enquiries? Contact Us</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
