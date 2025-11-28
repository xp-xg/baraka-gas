import { SafetyGuide } from "@/components/safety/safety-guide";
import { DownloadCenter } from "@/components/safety/download-center";

export default function SafetyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Page Header */}
            <div className="bg-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety & Compliance</h1>
                    <p className="text-xl text-red-100 max-w-2xl mx-auto">
                        We are committed to the highest standards of safety in every cylinder we deliver.
                    </p>
                </div>
            </div>

            <SafetyGuide />
            <DownloadCenter />
        </div>
    );
}
