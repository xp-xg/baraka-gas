import React from "react";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Truck, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Baraka Gas Ltd",
    description: "Learn about Baraka Gas Ltd, our mission, and why we are the leading LPG provider in the region.",
};

const features = [
    {
        title: "Safety First",
        description: "We prioritize safety in every cylinder we fill and deliver. Our rigorous testing ensures you get the safest product.",
        icon: ShieldCheck,
    },
    {
        title: "Reliable Delivery",
        description: "Our extensive network ensures that your gas is delivered on time, every time, right to your doorstep.",
        icon: Truck,
    },
    {
        title: "Customer Focus",
        description: "We believe in building lasting relationships. Our dedicated support team is always ready to assist you.",
        icon: Users,
    },
    {
        title: "Eco-Friendly",
        description: "Promoting clean energy solutions for a greener future. LPG is a cleaner burning fuel that helps reduce carbon footprint.",
        icon: Leaf,
    },
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Powering Your Life with Clean Energy</h1>
                <p className="text-xl text-muted-foreground">
                    Baraka Gas Ltd is dedicated to providing safe, reliable, and affordable LPG solutions to households and businesses across the region.
                </p>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-secondary">Our Story</h2>
                    <p className="text-lg text-muted-foreground">
                        Baraka Gas Ltd is an established privately owned company incorporated in 2018 under the Companies Act Cap 486 of the laws of Kenya. Founded by Jack Kimwele, our vision was to become a key logistics partner for Multinational Companies for bulk supply of Liquefied Petroleum Gas (LPG).
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Our LPG Division specializes in providing superior customer service and safe transportation of your LPG gas. We provide well-trained professional drivers, late model equipment, and real-time information through satellite tracking.
                    </p>
                    <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
                    <p className="text-lg text-muted-foreground">
                        To be the preferred energy partner by delivering high-quality LPG products with unmatched safety standards and customer service. We aim to revolutionize the energy landscape by making clean cooking fuel accessible to everyone across Kenya.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="relative h-64 bg-muted rounded-2xl overflow-hidden shadow-lg">
                        <img src="/images/fleet.jpg" alt="Baraka Gas Fleet" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="text-white font-semibold">Extensive Delivery Fleet</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-40 bg-muted rounded-2xl overflow-hidden shadow-lg">
                            <img src="/images/bulk-storage.jpg" alt="Bulk Storage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="relative h-40 bg-muted rounded-2xl overflow-hidden shadow-lg">
                            <img src="/images/refill-station.jpg" alt="Refill Station" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="pb-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
