import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CylinderShowcase } from "@/components/products/cylinder-showcase";
import { AccessoriesGrid } from "@/components/products/accessories-grid";
import { CallOrderDialog } from "@/components/common/call-order-dialog";

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <div className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Explore our range of LPG cylinders (6Kg, 13Kg, 50Kg) and accessories designed for safety and efficiency.
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
