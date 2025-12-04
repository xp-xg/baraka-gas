"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Building2, Home, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { sendEmail } from "@/lib/email-service";

const steps = [
    { id: 1, title: "Customer Type" },
    { id: 2, title: "Usage Details" },
    { id: 3, title: "Contact Info" },
];

export default function QuotePage() {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState({
        type: "home",
        usage: "",
        name: "",
        email: "",
        phone: "",
        location: "",
    });

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await sendEmail({
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone,
                subject: `New Quote Request: ${formData.type.toUpperCase()}`,
                message: `
                    Customer Type: ${formData.type}
                    Usage/Product: ${formData.usage}
                    Location: ${formData.location}
                `,
                to_name: "Baraka Gas Sales",
                // Additional fields for template
                customer_type: formData.type,
                usage_details: formData.usage,
                location: formData.location
            });

            alert("✅ Quote request submitted successfully! Our team will contact you within 24 hours.");
            // Reset form or redirect
            // window.location.href = "/";
        } catch (error) {
            console.error("Failed to submit quote:", error);
            alert("Failed to submit quote. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-4">Get a Quote</h1>
                    <p className="text-muted-foreground">
                        Tell us about your energy needs and we'll create a custom plan for you.
                    </p>
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between mb-8 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10" />
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center gap-2 bg-slate-50 dark:bg-slate-900 px-2">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${currentStep >= step.id
                                    ? "bg-primary border-primary text-black"
                                    : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400"
                                    }`}
                            >
                                {currentStep > step.id ? <Check className="w-6 h-6" /> : step.id}
                            </div>
                            <span className={`text-sm font-medium ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>
                                {step.title}
                            </span>
                        </div>
                    ))}
                </div>

                <Card className="shadow-xl">
                    <form onSubmit={handleSubmit}>
                        <CardHeader>
                            <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                            <CardDescription>Step {currentStep} of 3</CardDescription>
                        </CardHeader>
                        <CardContent className="min-h-[300px]">
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <RadioGroup
                                            defaultValue={formData.type}
                                            onValueChange={(val) => setFormData({ ...formData, type: val })}
                                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                                        >
                                            <div>
                                                <RadioGroupItem value="home" id="home" className="peer sr-only" />
                                                <Label
                                                    htmlFor="home"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full"
                                                >
                                                    <Home className="mb-3 h-10 w-10 text-muted-foreground" />
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">Home Use</div>
                                                        <div className="text-sm text-muted-foreground mt-1">Cooking & Heating</div>
                                                    </div>
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="business" id="business" className="peer sr-only" />
                                                <Label
                                                    htmlFor="business"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full"
                                                >
                                                    <Building2 className="mb-3 h-10 w-10 text-muted-foreground" />
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">Business / Bulk</div>
                                                        <div className="text-sm text-muted-foreground mt-1">Hotels, Industry, Institutions</div>
                                                    </div>
                                                </Label>
                                            </div>
                                            <div>
                                                <RadioGroupItem value="accessories" id="accessories" className="peer sr-only" />
                                                <Label
                                                    htmlFor="accessories"
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer h-full"
                                                >
                                                    <Flame className="mb-3 h-10 w-10 text-muted-foreground" />
                                                    <div className="text-center">
                                                        <div className="font-semibold text-lg">Accessories</div>
                                                        <div className="text-sm text-muted-foreground mt-1">Regulators, Hoses, Stoves</div>
                                                    </div>
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </motion.div>
                                )}

                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        {formData.type === 'accessories' ? (
                                            <>
                                                <div className="space-y-2">
                                                    <Label>Select Product(s)</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, usage: val })}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Choose an accessory" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="regulator">High Pressure Regulator</SelectItem>
                                                            <SelectItem value="hose">LPG Hose Pipe (1.5m)</SelectItem>
                                                            <SelectItem value="stove">2-Burner Gas Stove</SelectItem>
                                                            <SelectItem value="lighter">Gas Lighter</SelectItem>
                                                            <SelectItem value="trolley">Gas Cylinder Trolley</SelectItem>
                                                            <SelectItem value="detector">LPG Leak Detector</SelectItem>
                                                            <SelectItem value="stand">Gas Cylinder Stand</SelectItem>
                                                            <SelectItem value="burner">Burner Head</SelectItem>
                                                            <SelectItem value="multiple">Multiple Items</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex gap-3 items-start">
                                                    <Flame className="w-5 h-5 text-blue-600 mt-0.5" />
                                                    <p className="text-sm text-blue-700">
                                                        All our accessories are <strong>safety certified</strong> and come with warranty.
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="space-y-2">
                                                    <Label>Estimated Monthly Consumption</Label>
                                                    <Select onValueChange={(val) => setFormData({ ...formData, usage: val })}>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select usage level" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="low">Low (1-2 Cylinders)</SelectItem>
                                                            <SelectItem value="medium">Medium (3-10 Cylinders)</SelectItem>
                                                            <SelectItem value="high">High (10+ Cylinders)</SelectItem>
                                                            <SelectItem value="bulk">Bulk Tank Refill</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex gap-3 items-start">
                                                    <Flame className="w-5 h-5 text-blue-600 mt-0.5" />
                                                    <p className="text-sm text-blue-700">
                                                        Based on your selection, we recommend our <strong>{formData.type === 'home' ? '13kg Cylinder' : 'Bulk LPG Solution'}</strong>.
                                                    </p>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                )}

                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input id="name" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input id="phone" placeholder="+254..." />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="location">Location / Estate</Label>
                                            <Input id="location" placeholder="e.g. Westlands, Nairobi" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                            >
                                <ChevronLeft className="mr-2 w-4 h-4" /> Back
                            </Button>

                            {currentStep < 3 ? (
                                <Button type="button" onClick={nextStep}>
                                    Next <ChevronRight className="ml-2 w-4 h-4" />
                                </Button>
                            ) : (
                                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Submit Request
                                </Button>
                            )}
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}
