"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, CheckCircle, Flame, ShieldAlert } from "lucide-react";

const safetyTips = [
    {
        id: "leaks",
        title: "How to Check for Leaks",
        icon: AlertTriangle,
        content: "Never use a match or open flame to check for leaks. Apply soapy water to the cylinder valve and hose connection. If bubbles form, there is a leak. Turn off the valve immediately and ventilate the area.",
    },
    {
        id: "emergency",
        title: "Emergency Procedures",
        icon: Flame,
        content: "In case of fire, evacuate immediately. Do not attempt to extinguish a gas fire unless you can safely turn off the gas supply. Call the fire department and Baraka Gas emergency line.",
    },
    {
        id: "seals",
        title: "Genuine vs. Fake Seals",
        icon: ShieldAlert,
        content: "Always check for the branded Baraka Gas shrink wrap seal on the valve. The seal should be intact and have a holographic strip. Do not accept cylinders with broken or missing seals.",
    },
    {
        id: "storage",
        title: "Proper Storage",
        icon: CheckCircle,
        content: "Store cylinders in an upright position in a well-ventilated area. Keep away from direct sunlight, heat sources, and flammable materials. Ensure the cylinder is on a stable surface.",
    },
];

export function SafetyGuide() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Safety First</h2>
                    <p className="text-muted-foreground">
                        Your safety is our priority. Follow these guidelines to ensure safe usage of LPG.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {safetyTips.map((tip) => (
                        <AccordionItem key={tip.id} value={tip.id} className="border rounded-lg px-4 bg-slate-50 dark:bg-slate-800">
                            <AccordionTrigger className="hover:no-underline py-4">
                                <div className="flex items-center gap-3 text-left">
                                    <tip.icon className="w-5 h-5 text-primary" />
                                    <span className="font-semibold text-lg">{tip.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-4 text-base leading-relaxed">
                                {tip.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
