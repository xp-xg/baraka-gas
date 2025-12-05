import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CylinderShowcase } from "@/components/products/cylinder-showcase";
import { AccessoriesGrid } from "@/components/products/accessories-grid";
import { CallOrderDialog } from "@/components/common/call-order-dialog";
import { ProductListSchema } from "@/components/seo/product-list-schema";

export const metadata: Metadata = {
    title: "LPG Products & Accessories Kenya | Gas Cylinders, Regulators, Safety Equipment | Baraka Gas",
    description: "Buy LPG gas cylinders (6kg, 13kg, 50kg), regulators, hoses, stoves, safety equipment & industrial accessories in Kenya. Best prices. Fast delivery Nairobi, Machakos, Kitui.",
    keywords: [
        // Cylinders
        "LPG gas cylinder Kenya", "6kg gas cylinder", "13kg gas cylinder", "50kg gas cylinder",
        "gas cylinder Nairobi", "gas cylinder Machakos", "gas cylinder Kitui",
        // Accessories - Standard
        "high pressure regulator Kenya", "LPG hose pipe", "gas stove Kenya", "2 burner stove",
        "gas lighter Kenya", "gas cylinder trolley", "LPG leak detector", "cylinder stand",
        "burner head", "gas accessories Kenya",
        // Industrial Equipment - NEW
        "Class 300 valve Kenya", "industrial gas valve", "emergency shut-off switch",
        "breakaway coupling", "explosion proof lighting Kenya", "ex-proof switch",
        "industrial gas leak detector", "gas leak detector series", "industrial safety equipment Kenya",
        "ex-proof fluorescent tube", "hazardous area equipment",
        // Location keywords
        "Nairobi", "Machakos", "Kitui", "Matuu", "gas supplier Kenya",
        // General
        "LPG accessories", "gas safety equipment", "industrial gas equipment Kenya"
    ],
    openGraph: {
        title: "LPG Products & Gas Accessories - Baraka Gas Ltd",
        description: "Complete range of LPG cylinders and safety accessories. Industrial grade equipment available. Serving Nairobi, Machakos, Kitui.",
        images: ["/opengraph-image.jpg"],
    },
};

// Product data for schema markup
const productSchemaData = [
    { position: 1, name: "6kg LPG Gas Cylinder", description: "Compact 6kg LPG cylinder ideal for small families and camping", image: "/images/cylinder-6kg.jpg", sku: "BG-CYL-6KG" },
    { position: 2, name: "13kg LPG Gas Cylinder", description: "Standard 13kg LPG cylinder perfect for medium to large families", image: "/images/cylinder-13kg.jpg", sku: "BG-CYL-13KG" },
    { position: 3, name: "50kg LPG Gas Cylinder", description: "Industrial 50kg LPG cylinder for commercial and industrial use", image: "/images/cylinder-50kg.jpg", sku: "BG-CYL-50KG" },
    { position: 4, name: "Industrial Gas Leak Detectors", description: "Professional gas leak detection equipment for safety monitoring", image: "/images/products/Industrial gas leak detectors.jpeg", sku: "BG-DET-SERIES" },
    { position: 5, name: "Class 300 Valve", description: "Industrial grade Class 300 valve for LPG systems", image: "/images/products/Class 300 Valve.jpeg", sku: "BG-VALVE-300" },
    { position: 6, name: "Emergency Shut-off Switch", description: "EX-rated emergency shut-off switch for hazardous areas", image: "/images/products/EX - Emergency Shut off switch.jpeg", sku: "BG-SW-EMERGENCY" },
    { position: 7, name: "Emergency Breakaway Coupling", description: "Safety breakaway coupling for emergency disconnect", image: "/images/products/Emergency Break away coupling.jpeg", sku: "BG-COUP-BREAK" },
    { position: 8, name: "Ex-proof Fluorescent Tube", description: "2ft double explosion-proof fluorescent lighting for hazardous areas", image: "/images/products/Ex prof 2ft double fluorescent tube.jpeg", sku: "BG-LIGHT-EXPROOF" },
    { position: 9, name: "Ex-proof Start Stop Switch", description: "Explosion-proof start and stop switch for industrial applications", image: "/images/products/Ex- Start&Stop Switch.jpeg", sku: "BG-SW-STARTSTOP" },
    { position: 10, name: "High Pressure Regulator", description: "Quality LPG high pressure regulator with safety valve", image: "/images/products/high-pressure-regulator.png", sku: "BG-REG-HP" },
    { position: 11, name: "LPG Hose Pipe", description: "1.5m safety-certified LPG hose pipe for gas connections", image: "/images/products/lpg-hose-pipe.png", sku: "BG-HOSE-1.5M" },
    { position: 12, name: "2-Burner Gas Stove", description: "Efficient 2-burner gas stove for home cooking", image: "/images/products/two-burner-stove.png", sku: "BG-STOVE-2B" },
    { position: 13, name: "Gas Cylinder Trolley", description: "Heavy-duty gas cylinder trolley for easy transport", image: "/images/products/gas-cylinder-trolley.png", sku: "BG-TROLLEY" },
    { position: 14, name: "LPG Leak Detector", description: "Electronic LPG leak detector for home safety", image: "/images/products/lpg-leak-detector.png", sku: "BG-DET-HOME" },
];


export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Product Schema for SEO */}
            <ProductListSchema products={productSchemaData}
            />

            {/* Page Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">LPG Gas Cylinders & Accessories in Kenya</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Complete range of LPG gas cylinders (6Kg, 13Kg, 50Kg), high-pressure regulators, hoses, stoves, and industrial safety equipment. Serving Nairobi, Machakos, Kitui & beyond.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <CylinderShowcase />
            </div>

            <AccessoriesGrid />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Order?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Get your LPG cylinders and accessories delivered straight to your door. Order now or find your nearest dealer.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CallOrderDialog size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Order Now
                        </CallOrderDialog>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <Link href="/locator">Find Nearest Dealer</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
