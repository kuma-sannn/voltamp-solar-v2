"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, PiggyBank } from "lucide-react";

export default function SolarFlow() {
    const steps = [
        {
            title: "1. Consultation & Survey",
            description: "Our experts visit your location to assess feasibility, analyze energy needs, and provide a tailored system design.",
            icon: <ClipboardCheck className="w-10 h-10 text-primary" />
        },
        {
            title: "2. Expert Installation",
            description: "We handle the entire process from permits to panel mounting using tier-1 equipment ensuring highest safety standards.",
            icon: <Wrench className="w-10 h-10 text-primary" />
        },
        {
            title: "3. Enjoy Maximum Savings",
            description: "Turn on your system, reduce your carbon footprint, and watch your electricity bills plummet instantly.",
            icon: <PiggyBank className="w-10 h-10 text-primary" />
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        Your journey to energy independence in three simple steps.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connector Line (visible on desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative bg-white z-10 p-8 rounded-3xl shadow-xl border border-muted/50 hover:border-primary/50 transition-colors group"
                            >
                                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-center mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
