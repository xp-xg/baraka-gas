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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { LocalBusinessSchema } from "@/components/seo/local-business-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

import { sendEmail } from "@/lib/email-service";

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

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have questions or need assistance? We're here to help. Reach out to us using the form below or visit one of our offices.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Contact Information */}
                <div className="space-y-6">
                    <Card>
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
                <div className="lg:col-span-2">
                    <Card>
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

            {/* Map Section */}
            <div className="bg-slate-100 dark:bg-slate-900 py-12">
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8176449087!2d36.8219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2ske!4v1234567890"
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
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.123!2d37.9876!3d-0.6543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzknMTUuNSJTIDM3wrA1OSczOS40IkU!5e0!3m2!1sen!2ske!4v1234567890"
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
                        <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href="/quote">Quick Order</Link>
                        </Button>
                        <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                            <Link href="/products">Browse Products</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
