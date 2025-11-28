"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Download, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingActionButton() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const menuItems = [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            color: "bg-green-500",
            action: () => window.open("https://wa.me/254721489755", "_blank"),
        },
        {
            icon: Phone,
            label: "Call Now",
            color: "bg-blue-600",
            action: () => window.open("tel:+254721489755"),
        },
        {
            icon: Download,
            label: "Get App",
            color: "bg-slate-800",
            action: () => console.log("Install App"),
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-3 items-end mb-2">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-md shadow-md text-sm font-medium">
                                    {item.label}
                                </span>
                                <Button
                                    size="icon"
                                    className={cn("rounded-full shadow-lg text-white", item.color)}
                                    onClick={item.action}
                                >
                                    <item.icon className="w-5 h-5" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <Button
                size="icon"
                className={cn(
                    "h-14 w-14 rounded-full shadow-xl transition-all duration-300",
                    isOpen ? "bg-slate-900 rotate-90" : "bg-accent hover:bg-accent/90 animate-bounce-slow"
                )}
                onClick={toggleOpen}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <Flame className="w-8 h-8 text-white fill-white" />
                )}
            </Button>
        </div>
    );
}
