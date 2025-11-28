import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/contact">
                            <Search className="w-5 h-5 mr-2" />
                            Contact Support
                        </Link>
                    </Button>
                </div>

                <div className="mt-12 pt-8 border-t">
                    <p className="text-sm text-muted-foreground mb-4">Quick Links:</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/products" className="text-primary hover:underline">Products</Link>
                        <Link href="/services" className="text-primary hover:underline">Services</Link>
                        <Link href="/bulk-lpg" className="text-primary hover:underline">Bulk LPG</Link>
                        <Link href="/safety" className="text-primary hover:underline">Safety</Link>
                        <Link href="/about" className="text-primary hover:underline">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
