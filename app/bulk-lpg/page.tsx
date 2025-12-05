import { Metadata } from "next";
import BulkLPGPageClient from "./page-client";

export const metadata: Metadata = {
    title: "Bulk LPG Supply Kenya | Industrial & Commercial LPG | Baraka Gas",
    description: "Bulk LPG solutions for industries, hotels, restaurants & institutions in Kenya. Propane, Butane, Propylene supply. Expert installation, 24/7 support. Uninterrupted supply guaranteed. Call +254 721 489 755",
    keywords: [
        // Core services
        "bulk LPG Kenya", "industrial LPG supply", "commercial LPG Kenya",
        "bulk propane Kenya", "bulk butane supply", "propylene industrial Kenya",
        // Industries  
        "hotel LPG supply", "restaurant gas supply Kenya", "industrial gas Kenya",
        "institution LPG supply", "manufacturing gas supply",
        // Services
        "LPG installation Kenya", "bulk gas storage", "LPG tank installation",
        "industrial gas installation", "commercial gas setup",
        // Locations
        "bulk LPG Nairobi", "industrial gas Machakos", "commercial LPG Kitui",
        // Features
        "24/7 LPG support Kenya", "LPG remote monitoring", "bulk gas delivery Kenya",
        "cost effective LPG", "reliable gas supply Kenya"
    ],
    openGraph: {
        title: "Bulk LPG Supply - Industrial & Commercial Solutions",
        description: "Power your business with reliable bulk LPG. Uninterrupted supply, expert installation, competitive pricing.",
        images: ["/images/industrial-installation.png"],
    },
};

export default function BulkLPGPage() {
    return <BulkLPGPageClient />;
}
