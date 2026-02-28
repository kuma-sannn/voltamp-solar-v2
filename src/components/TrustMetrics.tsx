"use client";

import { motion } from "framer-motion";
import { TreePine, Zap, ShieldCheck } from "lucide-react";

export default function TrustMetrics() {
    const metrics = [
        {
            id: 1,
            value: "245M+",
            label: "lbs of CO₂ Prevented",
            icon: <TreePine className="w-8 h-8 text-primary mb-4" />,
            delay: 0.1,
        },
        {
            id: 2,
            value: "Since 2011",
            label: "Trusted Experience",
            icon: <ShieldCheck className="w-8 h-8 text-primary mb-4" />,
            delay: 0.2,
        },
        {
            id: 3,
            value: "100%",
            label: "Clean Energy Guarantee",
            icon: <Zap className="w-8 h-8 text-primary mb-4" />,
            delay: 0.3,
        },
    ];

    return (
        <section className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {metrics.map((metric) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: metric.delay }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-foreground/5 border border-white/5 backdrop-blur-sm hover:bg-foreground/10 transition-colors"
                        >
                            {metric.icon}
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                                {metric.value}
                            </h3>
                            <p className="text-lg text-muted-foreground font-medium">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
