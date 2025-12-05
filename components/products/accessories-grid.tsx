import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const accessories = [
    {
        name: "Industrial Gas Leak Detectors (Series)",
        price: "Best Market Price",
        image: "/images/products/Industrial gas leak detectors.jpeg", // Fallback/Main
        images: [
            "/images/products/Industrial gas leak detectors.jpeg",
            "/images/products/Industrial gas leak detectors1.jpeg",
            "/images/products/Industrial gas leak detectors2.jpeg"
        ],
        tag: "Top Rated Series",
    },
    {
        name: "Class 300 Valve (Series)",
        price: "Best Market Price",
        image: "/images/products/Class 300 Valve.jpeg",
        images: [
            "/images/products/Class 300 Valve.jpeg",
            "/images/products/Class 300 Valve12.jpeg"
        ],
        tag: "Industrial Grade",
    },
    {
        name: "Emergency Shut-off Switch (EX)",
        price: "Best Market Price",
        image: "/images/products/EX - Emergency Shut off switch.jpeg",
        tag: "Safety Critical",
    },
    {
        name: "Emergency Breakaway Coupling",
        price: "Best Market Price",
        image: "/images/products/Emergency Break away coupling.jpeg",
        tag: "Safety Essential",
    },
    {
        name: "Ex-proof 2ft Double Fluorescent Tube",
        price: "Best Market Price",
        image: "/images/products/Ex prof 2ft double fluorescent tube1.jpeg",
        tag: "Explosion Proof",
    },
    {
        name: "Ex-proof Start/Stop Switch",
        price: "Best Market Price",
        image: "/images/products/Ex- Start&Stop Switch.jpeg",
        tag: "Certified Safe",
    },
    {
        name: "High Pressure Regulator",
        price: "Best Market Price",
        image: "/images/products/high-pressure-regulator.png",
        tag: "Best Seller",
    },
    {
        name: "LPG Hose Pipe (1.5m)",
        price: "Best Market Price",
        image: "/images/products/lpg-hose-pipe.png",
        tag: "Safety Certified",
    },
    {
        name: "2-Burner Gas Stove",
        price: "Best Market Price",
        image: "/images/products/two-burner-stove.png",
        tag: "New",
    },
    {
        name: "Gas Lighter",
        price: "Best Market Price",
        image: "/images/products/gas-lighter.png",
        tag: null,
    },
    {
        name: "Gas Cylinder Trolley",
        price: "Best Market Price",
        image: "/images/products/gas-cylinder-trolley.png",
        tag: "Popular",
    },
    {
        name: "LPG Leak Detector",
        price: "Best Market Price",
        image: "/images/products/lpg-leak-detector.png",
        tag: "Safety Essential",
    },
    {
        name: "Gas Cylinder Stand",
        price: "Best Market Price",
        image: "/images/products/gas-cylinder-stand.svg",
        tag: "Stable & Safe",
    },
    {
        name: "Burner Head",
        price: "Best Market Price",
        image: "/images/products/burner-head.svg",
        tag: "Replacement Part",
    },
];

export function AccessoriesGrid() {
    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Essential LPG Accessories & Safety Equipment</h2>
                    <p className="text-muted-foreground">
                        Premium quality LPG regulators, hoses, stoves, leak detectors, and industrial safety equipment for homes and businesses across Kenya.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessories.map((item, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square relative bg-white p-2">
                                {/* @ts-ignore - images property exists on some items */}
                                {item.images ? (
                                    <div className="w-full h-full grid grid-rows-2 gap-2">
                                        <div className="relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded overflow-hidden">
                                            {/* @ts-ignore */}
                                            <img
                                                src={item.images[0]}
                                                alt={`${item.name} - LPG industrial equipment Kenya | Baraka Gas`}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded overflow-hidden">
                                                {/* @ts-ignore */}
                                                <img
                                                    src={item.images[1]}
                                                    alt={`${item.name} detail view - gas safety equipment`}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            </div>
                                            <div className="relative w-full h-full bg-slate-50 dark:bg-slate-800 rounded overflow-hidden">
                                                {/* @ts-ignore */}
                                                <img
                                                    src={item.images[2]}
                                                    alt={`${item.name} product view - LPG accessory Kenya`}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`${item.name} - LPG gas accessory Kenya | Baraka Gas`}
                                        className="w-full h-full object-contain p-4"
                                    />
                                )}
                                <div className="absolute top-2 right-2">
                                    {item.tag && <Badge variant="secondary">{item.tag}</Badge>}
                                </div>
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg">{item.name}</CardTitle>
                                <p className="text-primary font-bold">{item.price}</p>
                            </CardHeader>
                            <CardFooter className="p-4 pt-0">
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="text-sm text-center mb-1">
                                        <p className="font-semibold text-muted-foreground">Call to Enquire:</p>
                                        <div className="flex flex-col gap-0.5">
                                            <a href="tel:+254722240086" className="text-primary hover:underline font-medium">+254 722 240086</a>
                                            <a href="tel:+254733216074" className="text-primary hover:underline font-medium">+254 733 216074</a>
                                        </div>
                                    </div>
                                    <Button className="w-full" variant="outline" asChild>
                                        <a href="/contact">
                                            <ShoppingBag className="mr-2 w-4 h-4" /> Send Message
                                        </a>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
