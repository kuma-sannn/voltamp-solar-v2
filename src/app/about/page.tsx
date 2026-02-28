"use client";

import { motion } from "framer-motion";
import { Leaf, Zap, ShieldCheck, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
    const timelineEvents = [
        {
            year: "2016",
            title: "Corporate Foundation",
            description: "Voltamp Solar Panacea was formally incorporated as a Private Limited entity, establishing a high standard for Solar EPC (Engineering, Procurement, and Construction) in Mumbai.",
            icon: <ShieldCheck className="w-6 h-6 text-primary-foreground" />
        },
        {
            year: "2020",
            title: "Industrial Specialization",
            description: "We pivoted to focus on high-capacity industrial power plants and innovative solar electric fencing, helping factories across Maharashtra achieve energy independence.",
            icon: <TrendingUp className="w-6 h-6 text-primary-foreground" />
        },
        {
            year: "2026",
            title: "The Zero-Carbon Goal",
            description: "With over a decade of combined technical expertise, we are now scaling our operations to facilitate 100+ Megawatts of clean energy deployments for the Mumbai industrial corridor.",
            icon: <Zap className="w-6 h-6 text-primary-foreground" />
        }
    ];

    return (
        <div className="bg-background min-h-screen text-foreground overflow-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
                <div className="container max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Driving <span className="relative inline-flex flex-col">
                            <span className="text-primary">Industrial</span>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-1 bg-primary mt-1"
                            />
                        </span> Efficiency
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                    >
                        Voltamp Solar Panacea Pvt Ltd is a premier solar solutions provider dedicated to engineering high-performance, sustainable energy grids for Mumbai's commercial and residential sectors.
                    </motion.p>
                </div>
            </section>

            {/* Vertical Timeline Section */}
            <section className="py-24 relative bg-foreground/5 overflow-hidden">
                <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
                    
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Legacy</h2>
                        <p className="text-lg text-muted-foreground">A decade of engineering excellence in renewable energy.</p>
                    </div>

                    <div className="relative">
                        {/* The Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 md:-ml-px top-0 bottom-0 w-1 bg-primary/20 rounded-full" />

                        <div className="space-y-16">
                            {timelineEvents.map((event, index) => {
                                const isEven = index % 2 === 0;
                                return (
                                    <motion.div
                                        key={event.year}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    >

                                        {/* The Icon Node */}
                                        <div className="absolute left-[4px] md:left-1/2 md:-ml-[20px] top-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(4,120,87,0.5)] z-10 border-4 border-background">
                                            {event.icon}
                                        </div>

                                        {/* Empty Space for the inactive side (Desktop) */}
                                        <div className="hidden md:block md:w-1/2" />

                                        {/* Content Card */}
                                        <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                            <div className="bg-foreground text-background p-8 rounded-3xl shadow-2xl border border-white/5 hover:-translate-y-1 transition-transform duration-300">
                                                <span className="text-primary font-bold text-xl mb-2 block">{event.year}</span>
                                                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                                                <p className="text-background/80 leading-relaxed">
                                                    {event.description}
                                                </p>
                                            </div>
                                        </div>

                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 px-4 text-center">
                 <div className="container max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16">Why Voltamp Solar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8">
                            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h4 className="text-xl font-bold mb-4">Unmatched Precision</h4>
                            <p className="text-muted-foreground">Every deployment is architected by certified electrical engineers for maximum ROI.</p>
                        </div>
                        <div className="p-8">
                            <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h4 className="text-xl font-bold mb-4">Eco-Engineering</h4>
                            <p className="text-muted-foreground">We focus on components with the longest lifecycles to minimize e-waste.</p>
                        </div>
                        <div className="p-8">
                            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h4 className="text-xl font-bold mb-4">Local Expertise</h4>
                            <p className="text-muted-foreground">Headquartered in Malad, we understand the specific power needs of Mumbai's suburbs.</p>
                        </div>
                    </div>
                 </div>
            </section>
        </div>
    );
}