import { Metadata } from "next";
import InstallationPipingPageClient from "./page-client";

export const metadata: Metadata = {
    title: "LPG Installation & Piping Services | Schools & Institutions | Baraka Gas",
    description: "Expert LPG installation and piping services for schools, institutions, and industries in Kenya. EPRA licensed, compliant with Petroleum Act 2019 & KS standards. Safe, reliable, and professional.",
    keywords: [
        "LPG piping Kenya", "school gas installation", "institutional gas piping",
        "laboratory gas piping", "kitchen gas installation", "EPRA licensed installer",
        "bulk LPG installation", "gas safety systems", "Baraka Gas installation"
    ],
    openGraph: {
        title: "Professional LPG Installation & Piping Services",
        description: "Safety-first LPG solutions for educational and medical institutions. Certified experts, compliant designs.",
        images: ["/images/installationandpipping.jpeg"],
    },
};

export default function InstallationPipingPage() {
    return <InstallationPipingPageClient />;
}
