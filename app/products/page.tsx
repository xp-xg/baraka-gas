import { CylinderShowcase } from "@/components/products/cylinder-showcase";
import { AccessoriesGrid } from "@/components/products/accessories-grid";

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
        </div>
    );
}
