"use client";

import { motion } from "framer-motion";
import { CopySlash, Factory, BatteryCharging, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPreview() {
    const services = [
        {
            id: "residential",
            title: "Residential Solar",
            description: "Say goodbye to rising energy bills. Custom home setups for clean, reliable power and total energy independence.",
            icon: <CopySlash className="w-6 h-6 text-primary-foreground" />,
        },
        {
            id: "commercial",
            title: "Commercial Solutions",
            description: "Scale your business sustainably. Reduce environmental impact and demonstrate your commitment to a healthier planet.",
            icon: <Factory className="w-6 h-6 text-primary-foreground" />,
        },
        {
            id: "battery",
            title: "Battery Storage",
            description: "Crucial components for power backup and true 24/7 energy independence, even when the grid goes down.",
            icon: <BatteryCharging className="w-6 h-6 text-primary-foreground" />,
        },
    ];

    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                        >
                            Premium Energy <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Solutions</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-muted-foreground"
                        >
                            From custom residential installations to massive commercial grid integrations, our expert engineering ensures maximum efficiency.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/services"
                            className="group flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors"
                        >
                            View All Services
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative bg-foreground/5 border border-white/5 p-8 rounded-3xl hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(4,120,87,0.2)] hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <Link
                                href={`/services#${service.id}`}
                                className="absolute bottom-8 left-8 flex items-center gap-2 text-sm font-bold text-primary/80 group-hover:text-primary transition-colors"
                            >
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
