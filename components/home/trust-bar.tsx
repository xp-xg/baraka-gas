"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, ThumbsUp, Truck } from "lucide-react";

const partners = [
    { name: "EPRA Certified", icon: ShieldCheck },
    { name: "KEBS Approved", icon: Award },
    { name: "Top Safety Rated", icon: ThumbsUp },
    { name: "Nationwide Delivery", icon: Truck },
    { name: "EPRA Certified", icon: ShieldCheck },
    { name: "KEBS Approved", icon: Award },
    { name: "Top Safety Rated", icon: ThumbsUp },
    { name: "Nationwide Delivery", icon: Truck },
];

export function TrustBar() {
    return (
        <div className="w-full bg-slate-50 border-y border-slate-200 overflow-hidden py-4">
            <div className="container mx-auto px-4">
                <div className="flex overflow-hidden relative">
                    <motion.div
                        className="flex gap-12 items-center whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 20,
                        }}
                    >
                        {[...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex items-center gap-2 text-slate-600 font-medium">
                                <partner.icon className="w-5 h-5 text-primary" />
                                <span>{partner.name}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradients for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
                </div>
            </div>
        </div>
    );
}
