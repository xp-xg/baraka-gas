"use client";

import { AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";

export function EmergencyBanner() {
    return (
        <div className="bg-destructive text-white py-2 px-4 fixed top-0 left-0 right-0 z-[60] shadow-lg">
            <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
                <span className="font-semibold">Emergency Gas Leak?</span>
                <Link
                    href="tel:+254721489755"
                    className="flex items-center gap-2 bg-white text-destructive px-4 py-1 rounded-md font-bold hover:bg-slate-100 transition-colors"
                >
                    <Phone className="w-4 h-4" />
                    Call: +254 721 489 755
                </Link>
            </div>
        </div>
    );
}
