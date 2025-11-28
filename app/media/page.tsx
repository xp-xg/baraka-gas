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
            <div className="mt-16 max-w-3xl mx-auto bg-muted p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Media Inquiries</h2>
                <p className="text-muted-foreground mb-6">
                    For press releases, media kits, or interview requests, please contact our communications team.
                </p>
                <div className="space-y-2">
                    <p className="font-medium">Email: media@barakagas.com</p>
                    <p className="font-medium">Phone: +254 700 000 001</p>
                </div>
            </div>
        </div>
    );
}
