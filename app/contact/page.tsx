"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CallOrderDialog } from "@/components/common/call-order-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

import { sendEmail } from "@/lib/email-service";
import { GOOGLE_MAPS_API_KEY } from "@/lib/google-maps-config";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [highlightForm, setHighlightForm] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            await sendEmail({
                from_name: values.name,
                from_email: values.email,
                phone: values.phone,
                subject: values.subject,
                message: values.message,
                to_name: "Baraka Gas Team",
            });
            setIsSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please check your connection or try again later.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const scrollToForm = () => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
            setHighlightForm(true);
            setTimeout(() => setHighlightForm(false), 2000);
        }
    };

    return (
        <div className="w-full">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Have questions or need assistance? We're here to help. Choose your preferred way to reach us.
                    </p>

                    {/* Contact Method Options */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                        {/* Direct Email Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                            <Card className="border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 h-full">
                                <CardHeader className="text-center pb-3">
                                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <CardTitle className="text-xl">Direct Email</CardTitle>
                                    <CardDescription className="text-sm">Quick response via your email client</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Opens your default email app for immediate communication. Best for detailed inquiries or document sharing.
                                    </p>
                                    <div className="pt-2 flex flex-col items-center">
                                        <div className="inline-flex flex-col items-start gap-3 w-full max-w-xs">
                                            <a
                                                href="mailto:info@barakagas.com"
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 w-full transition-all group/email"
                                            >
                                                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full group-hover/email:bg-blue-200 dark:group-hover/email:bg-blue-800 transition-colors">
                                                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <span className="text-sm font-medium text-muted-foreground">General Inquiries</span>
                                                    <span className="text-blue-600 dark:text-blue-400 font-semibold">info@barakagas.com</span>
                                                </div>
                                            </a>
                                            <a
                                                href="mailto:depot@barakagas.com"
                                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 w-full transition-all group/email"
                                            >
                                                <div className="bg-orange-100 dark:bg-orange-900/50 p-2 rounded-full group-hover/email:bg-orange-200 dark:group-hover/email:bg-orange-800 transition-colors">
                                                    <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <span className="text-sm font-medium text-muted-foreground">Depot & Orders</span>
                                                    <span className="text-orange-600 dark:text-orange-400 font-semibold">depot@barakagas.com</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                                <CardHeader className="text-center pb-3">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <CardTitle className="text-xl">Contact Form</CardTitle>
                                    <CardDescription className="text-sm">Structured inquiry submission</CardDescription>
                                </CardHeader>
                                <CardContent className="text-center space-y-3">
                                    <p className="text-sm text-muted-foreground">
                                        Fill out our form below for organized communication. We'll respond within 24 hours during business days.
                                    </p>
                                    <div className="pt-2">
                                        <Button
                                            variant="outline"
                                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                            onClick={scrollToForm}
                                        >
                                            Go to Form
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
                    <div className="container mx-auto px-4">

                        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Contact Information */}
                            <div className="space-y-6">
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Get in Touch</CardTitle>
                                        <CardDescription>We'd love to hear from you.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <p className="font-medium">Nairobi Head Office</p>
                                                <p className="text-sm text-muted-foreground">
                                                    P.O. Box 26806 - 00100<br />
                                                    Nairobi, Kenya
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <p className="font-medium">Factory & Depot</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Matuu Town, Along Mwingi - Garissa Rd<br />
                                                    Machakos County, Kenya
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 opacity-60">
                                            <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                                            <div>
                                                <p className="font-medium">Mombasa Office</p>
                                                <p className="text-sm text-muted-foreground italic">
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium">Phone (Nairobi)</p>
                                                <p className="text-sm text-muted-foreground">+254 721 489 755</p>
                                                <p className="text-sm text-muted-foreground">+254 733 756 125</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Phone className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium">Phone (Depot)</p>
                                                <p className="text-sm text-muted-foreground">+254 722 240086</p>
                                                <p className="text-sm text-muted-foreground">+254 733 216074</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Mail className="w-5 h-5 text-primary" />
                                            <div>
                                                <p className="font-medium">Email</p>
                                                <p className="text-sm text-muted-foreground">info@barakagas.com</p>
                                                <p className="text-sm text-muted-foreground">depot@barakagas.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Clock className="w-5 h-5 text-primary mt-1" />
                                            <div>
                                                <p className="font-medium">Business Hours</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Mon - Sat: 8:00 AM - 5:30 PM<br />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2" id="contact-form">
                                <Card className={`transition-all duration-500 h-full ${highlightForm ? 'ring-4 ring-primary ring-offset-2 scale-[1.01]' : ''}`}>
                                    <CardHeader>
                                        <CardTitle>Send us a Message</CardTitle>
                                        <CardDescription>
                                            Fill out the form below and we'll get back to you as soon as possible.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        {isSuccess ? (
                                            <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-6 rounded-lg text-center">
                                                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                                <p>Thank you for contacting us. We will be in touch shortly.</p>
                                                <Button
                                                    variant="outline"
                                                    className="mt-4"
                                                    onClick={() => setIsSuccess(false)}
                                                >
                                                    Send Another Message
                                                </Button>
                                            </div>
                                        ) : (
                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        <FormField
                                                            control={form.control}
                                                            name="name"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Name</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="John Doe" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name="email"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel>Email</FormLabel>
                                                                    <FormControl>
                                                                        <Input placeholder="john@example.com" {...field} />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Phone Number</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="+254..." {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="subject"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Subject</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="How can we help?" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="message"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Message</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Type your message here..."
                                                                        className="min-h-[150px]"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                                                        {isSubmitting ? "Sending..." : "Send Message"}
                                                    </Button>
                                                </form>
                                            </Form>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-slate-100 dark:bg-slate-900 py-12 border-t-4 border-primary/20">
                        <div className="container mx-auto px-4">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-2">Find Us</h2>
                                <p className="text-muted-foreground">Visit our offices across Kenya</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {/* Nairobi Map */}
                                <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="p-4 bg-primary text-white">
                                        <h3 className="font-bold text-lg">Nairobi Head Office</h3>
                                        <p className="text-sm opacity-90">P.O. Box 26806 - 00100, Nairobi</p>
                                    </div>
                                    <div className="aspect-video">
                                        <iframe
                                            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=P.O.+Box+26806+-+00100+Nairobi+Kenya&zoom=15`}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Baraka Gas Nairobi Office Location"
                                        />
                                    </div>
                                </div>

                                {/* Matuu Map */}
                                <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="p-4 bg-accent text-white">
                                        <h3 className="font-bold text-lg">Matuu Factory & Depot</h3>
                                        <p className="text-sm opacity-90">Matuu Town, Machakos County</p>
                                    </div>
                                    <div className="aspect-video">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0374439039474!2d37.571077349545064!3d-1.133598632519832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1825e9001f72cab7%3A0xb5ff4993987f3617!2sBaraka%20Gas%20Limited!5e0!3m2!1sen!2sus!4v1764855017152!5m2!1sen!2sus&key=AIzaSyBX9sZrFMq4A3RZNwISSBsiEjIjZe-Hdjo"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Baraka Gas Matuu Depot Location"
                                        />
                                    </div>
                                </div>

                                {/* Mombasa Coming Soon */}
                                <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                                    <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                        <h3 className="font-bold text-lg">Mombasa Branch</h3>
                                        <p className="text-sm opacity-90">Opening Soon</p>
                                    </div>
                                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                                        <div className="text-center p-6">
                                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <h4 className="text-xl font-bold text-foreground mb-2">Coming Soon</h4>
                                            <p className="text-muted-foreground text-sm">
                                                We're expanding to Mombasa!<br />
                                                Stay tuned for updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Need Gas Now?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                Don't wait! Order your LPG cylinder online and get it delivered to your doorstep quickly and safely.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <CallOrderDialog size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                    Call to Order
                                </CallOrderDialog>
                                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                                    <Link href="/products">Browse Products</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
