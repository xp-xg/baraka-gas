"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
            >
                <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading...</p>
            </motion.div>
        </div>
    );
}
