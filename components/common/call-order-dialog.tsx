"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type CallOrderDialogProps = {
    children: React.ReactNode;
    className?: string;
    size?: "default" | "sm" | "lg" | "icon";
};

export function CallOrderDialog({ children, className, size }: CallOrderDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={className} size={size}>
                    {children}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Call to Order</DialogTitle>
                    <DialogDescription>
                        Choose the department you wish to contact.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
                            <a href="tel:+254721489755">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Main Office (Nairobi)</div>
                                    <div className="text-sm text-muted-foreground">For Bulk LPG & Inquiries</div>
                                    <div className="text-sm font-bold text-primary">+254 721 489 755</div>
                                </div>
                            </a>
                        </Button>
                        <Button variant="outline" className="h-auto py-4 justify-start gap-4" asChild>
                            <a href="tel:+254722240086">
                                <div className="bg-destructive/10 p-2 rounded-full">
                                    <Phone className="w-5 h-5 text-destructive" />
                                </div>
                                <div className="text-left">
                                    <div className="font-semibold">Depot (Matuu)</div>
                                    <div className="text-sm text-muted-foreground">For Cylinders & Deliveries</div>
                                    <div className="text-sm font-bold text-destructive">+254 722 240086</div>
                                </div>
                            </a>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
