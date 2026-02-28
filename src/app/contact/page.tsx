"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen text-foreground overflow-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-10 pointer-events-none" />
                <div className="container max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Ready for an industrial-grade energy upgrade? Reach out to Voltamp Solar Panacea experts in Malad for a technical audit.
                    </motion.p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="pb-32 px-4 relative z-10">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Info & Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-12"
                        >

                            <div className="bg-foreground/5 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl">
                                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Corporate Office</h2>

                                <ul className="space-y-8">
                                    <li className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Registered Address</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Shop No. 5, Panchsheel-1 CHS,<br />
                                                Raheja Township, Malad East,<br />
                                                Mumbai, Maharashtra 400097
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Business Inquiry</h3>
                                            <a href="tel:+918169114568" className="text-muted-foreground hover:text-primary transition-colors">
                                                +91 81691 14568
                                            </a>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Official Email</h3>
                                            <div className="flex flex-col gap-1">
                                                <a href="mailto:info@sunonrent.com" className="text-muted-foreground hover:text-primary transition-colors">
                                                    info@sunonrent.com
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Operational Hours</h3>
                                            <p className="text-muted-foreground">Mon-Sat: 10:00 AM - 6:00 PM</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </motion.div>

                        {/* Right Column: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-foreground text-background p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5 relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-extrabold mb-2 text-white">Request an Expert Audit</h2>
                                <p className="text-white/60 mb-8">Fill out the form below and our technical team will contact you for a site survey.</p>

                                {/* Wrapped in Suspense to handle the searchParams logic inside the form */}
                                <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/50 italic">Loading audit form...</div>}>
                                    <ContactForm />
                                </Suspense>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

        </div>
    );
}