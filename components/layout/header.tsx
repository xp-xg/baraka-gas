"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CallOrderDialog } from "@/components/common/call-order-dialog";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Bulk LPG", href: "/bulk-lpg" },
    { name: "Safety", href: "/safety" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const pathname = usePathname();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-10 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-950/80"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
                            <img src="/images/logo.jpg" alt="Baraka Gas Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            Baraka<span className="text-accent">Gas</span><span className="text-primary">Ltd</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Theme Toggle & CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <CallOrderDialog className="bg-destructive hover:bg-destructive/90 text-white shadow-lg shadow-destructive/20 animate-pulse-slow">
                            Call to Order
                        </CallOrderDialog>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b"
                    >
                        <div className="container px-4 py-4 space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-base font-medium py-2 transition-colors",
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <CallOrderDialog className="w-full bg-destructive hover:bg-destructive/90 text-white mt-4">
                                Call to Order
                            </CallOrderDialog>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
