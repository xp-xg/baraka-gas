"use client";

import * as React from "react";
import { Search, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

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

    return (
        <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row">
            {/* Sidebar / List View */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r flex flex-col z-10 shadow-xl">
                <div className="p-4 border-b bg-slate-50">
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
    );
}
