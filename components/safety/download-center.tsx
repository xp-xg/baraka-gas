import { FileText, Download, Shield, Wrench, Award, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const documentCategories = {
    safety: [
        {
            title: "Material Safety Data Sheet (MSDS)",
            description: "UN GHS compliant safety data sheet for LPG handling and storage.",
            size: "2.4 MB",
            file: "/downloads/msds-lpg.pdf",
            icon: Shield,
        },
        {
            title: "Emergency Response Guide",
            description: "Step-by-step procedures for gas leak emergencies.",
            size: "1.8 MB",
            file: "/downloads/emergency-response.pdf",
            icon: Shield,
        },
        {
            title: "Safety Guidelines Poster",
            description: "Printable poster for kitchen and workplace safety.",
            size: "1.2 MB",
            file: "/downloads/safety-poster.pdf",
            icon: Shield,
        },
    ],
    technical: [
        {
            title: "Installation Manual",
            description: "Complete guide for LPG cylinder installation and setup.",
            size: "3.5 MB",
            file: "/downloads/installation-manual.pdf",
            icon: Wrench,
        },
        {
            title: "Maintenance Guide",
            description: "Cylinder inspection and maintenance procedures.",
            size: "2.1 MB",
            file: "/downloads/maintenance-guide.pdf",
            icon: Wrench,
        },
        {
            title: "Technical Specifications",
            description: "Detailed specs for all cylinder sizes and accessories.",
            size: "1.5 MB",
            file: "/downloads/technical-specs.pdf",
            icon: FileCheck,
        },
    ],
    compliance: [
        {
            title: "EPRA License Certificate",
            description: "Energy and Petroleum Regulatory Authority license.",
            size: "0.8 MB",
            file: "/downloads/epra-license.pdf",
            icon: Award,
        },
        {
            title: "KEBS Certification",
            description: "Kenya Bureau of Standards certification documents.",
            size: "1.1 MB",
            file: "/downloads/kebs-certificate.pdf",
            icon: Award,
        },
        {
            title: "Corporate Profile",
            description: "Overview of Baraka Gas Ltd, our mission, and services.",
            size: "5.1 MB",
            file: "/downloads/corporate-profile.pdf",
            icon: FileText,
        },
    ],
};

export function DownloadCenter() {
    return (
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4">Download Center</h2>
                    <p className="text-muted-foreground">
                        Access important documents, safety resources, and compliance certificates.
                    </p>
                </div>

                <Tabs defaultValue="safety" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="safety">Safety & Emergency</TabsTrigger>
                        <TabsTrigger value="technical">Technical Manuals</TabsTrigger>
                    </TabsList>

                    <TabsContent value="safety">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {documentCategories.safety.map((doc, index) => (
                                <DocumentCard key={index} doc={doc} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="technical">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {documentCategories.technical.map((doc, index) => (
                                <DocumentCard key={index} doc={doc} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

function DocumentCard({ doc }: { doc: any }) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <doc.icon className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-lg">{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{doc.size}</span>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={doc.file} download>
                            <Download className="w-4 h-4" /> Download
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
