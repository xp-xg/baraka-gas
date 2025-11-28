"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Users, Calendar, Truck, Award } from "lucide-react";

const stats = [
    { icon: Calendar, label: "Years in Business", value: 7, suffix: "+" },
    { icon: Users, label: "Happy Customers", value: 5000, suffix: "+" },
    { icon: Truck, label: "Deliveries Monthly", value: 1200, suffix: "+" },
    { icon: Award, label: "Safety Record", value: 100, suffix: "%" },
];

export function StatsCounter() {
    return (
        <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                    <stat.icon className="w-8 h-8 text-primary" />
                                </div>
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                <CountUp end={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-slate-300 text-sm md:text-base">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = end / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <>
            {count.toLocaleString()}
            {suffix}
        </>
    );
}
