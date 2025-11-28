import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Heart, Zap, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
    title: "Careers | Baraka Gas Ltd",
    description: "Join the Baraka Gas Ltd team. Explore current job openings and help us power the future with clean energy.",
    openGraph: {
        title: "Careers at Baraka Gas Ltd",
        description: "Build your career with a leading energy provider. Check out our open positions.",
        type: "website",
    },
};

const benefits = [
    {
        title: "Competitive Salary",
        description: "We offer attractive compensation packages that match your skills and experience.",
        icon: Briefcase,
    },
    {
        title: "Health & Wellness",
        description: "Comprehensive medical cover for you and your family to ensure peace of mind.",
        icon: Heart,
    },
    {
        title: "Growth Opportunities",
        description: "Continuous learning and development programs to help you advance your career.",
        icon: GraduationCap,
    },
    {
        title: "Dynamic Culture",
        description: "Work in a fast-paced, innovative environment where your ideas matter.",
        icon: Zap,
    },
];

const jobs = [
    {
        id: "job-1",
        title: "Senior Logistics Manager",
        department: "Operations",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "We are looking for an experienced Logistics Manager to oversee our supply chain and distribution network.",
    },
    {
        id: "job-2",
        title: "Sales Executive",
        department: "Sales & Marketing",
        location: "Mombasa, Kenya",
        type: "Full-time",
        description: "Join our sales team and help us expand our market reach in the coastal region.",
    },
    {
        id: "job-3",
        title: "Customer Support Representative",
        department: "Customer Service",
        location: "Nairobi, Kenya",
        type: "Full-time",
        description: "Be the voice of Baraka Gas. Assist customers with inquiries, orders, and support.",
    },
];

export default function CareersPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Join Our Team</h1>
                <p className="text-xl text-muted-foreground">
                    At Baraka Gas, we are more than just an energy company. We are a family dedicated to innovation, safety, and service. Come build the future with us.
                </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <benefit.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-lg">{benefit.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm">{benefit.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Open Positions Section */}
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
                <div className="grid gap-6">
                    {jobs.map((job) => (
                        <Card key={job.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-xl font-semibold">{job.title}</h3>
                                    <Badge variant="secondary">{job.type}</Badge>
                                </div>
                                <div className="text-sm text-muted-foreground flex gap-4">
                                    <span>{job.department}</span>
                                    <span>•</span>
                                    <span>{job.location}</span>
                                </div>
                                <p className="text-muted-foreground max-w-2xl">
                                    {job.description}
                                </p>
                            </div>
                            <Button asChild>
                                <Link href={`/careers/${job.id}`}>Apply Now</Link>
                            </Button>
                        </Card>
                    ))}
                </div>
                <div className="mt-12 text-center bg-muted p-8 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Don't see the right fit?</h3>
                    <p className="text-muted-foreground mb-6">
                        We are always looking for talent. Send your CV to careers@barakagas.com and we'll keep you in mind for future opportunities.
                    </p>
                    <Button variant="outline" asChild>
                        <a href="mailto:careers@barakagas.com">Email Us</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
