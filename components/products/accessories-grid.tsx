import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const accessories = [
    {
        name: "High Pressure Regulator",
        price: "KSh 1,500",
        image: "/images/products/high-pressure-regulator.png",
        tag: "Best Seller",
    },
    {
        name: "LPG Hose Pipe (1.5m)",
        price: "KSh 450",
        image: "/images/products/lpg-hose-pipe.png",
        tag: "Safety Certified",
    },
    {
        name: "2-Burner Gas Stove",
        price: "KSh 3,500",
        image: "/images/products/two-burner-stove.png",
        tag: "New",
    },
    {
        name: "Gas Lighter",
        price: "KSh 200",
        image: "/images/products/gas-lighter.png",
        tag: null,
    },
    {
        name: "Gas Cylinder Trolley",
        price: "KSh 2,800",
        image: "/images/products/gas-cylinder-trolley.png",
        tag: "Popular",
    },
    {
        name: "LPG Leak Detector",
        price: "KSh 350",
        image: "/images/products/lpg-leak-detector.png",
        tag: "Safety Essential",
    },
    {
        name: "Gas Cylinder Stand",
        price: "KSh 1,200",
        image: "/images/products/gas-cylinder-stand.svg",
        tag: "Stable & Safe",
    },
    {
        name: "Burner Head",
        price: "KSh 600",
        image: "/images/products/burner-head.svg",
        tag: "Replacement Part",
    },
];

export function AccessoriesGrid() {
    return (
        <section className="py-12 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Essential Accessories</h2>
                    <p className="text-muted-foreground">
                        Enhance your cooking experience with our high-quality accessories.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessories.map((item, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square relative bg-white">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain p-4"
                                />
                                <div className="absolute top-2 right-2">
                                    {item.tag && <Badge variant="secondary">{item.tag}</Badge>}
                                </div>
                            </div>
                            <CardHeader className="p-4">
                                <CardTitle className="text-lg">{item.name}</CardTitle>
                                <p className="text-primary font-bold">{item.price}</p>
                            </CardHeader>
                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full" variant="outline" asChild>
                                    <a href="/quote">
                                        <ShoppingBag className="mr-2 w-4 h-4" /> Enquire
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
