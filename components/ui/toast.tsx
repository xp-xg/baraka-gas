"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
    id: string;
    title?: string;
    description?: string;
    variant?: "default" | "success" | "error";
    duration?: number;
    onClose: (id: string) => void;
}

export function Toast({ id, title, description, variant = "default", onClose }: ToastProps) {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, 5000);

        return () => clearTimeout(timer);
    }, [id, onClose]);

    return (
        <div
            className={cn(
                "pointer-events-auto flex w-full max-w-md rounded-lg shadow-lg overflow-hidden",
                variant === "success" && "bg-green-600 text-white",
                variant === "error" && "bg-red-600 text-white",
                variant === "default" && "bg-slate-900 text-white"
            )}
        >
            <div className="flex-1 p-4">
                {title && <div className="font-semibold">{title}</div>}
                {description && <div className="mt-1 text-sm opacity-90">{description}</div>}
            </div>
            <button
                onClick={() => onClose(id)}
                className="flex items-center justify-center px-4 hover:bg-black/10 transition-colors"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
}

export function ToastContainer({ toasts, onClose }: { toasts: ToastProps[]; onClose: (id: string) => void }) {
    return (
        <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 pointer-events-none">
            {toasts.map((toast) => (
                <Toast key={toast.id} {...toast} onClose={onClose} />
            ))}
        </div>
    );
}
