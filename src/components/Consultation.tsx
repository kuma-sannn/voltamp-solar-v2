"use client";

import { motion } from "framer-motion";

import ContactForm from "./ContactForm";

export default function Consultation() {
    return (
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
            {/* Subtle ambient glow in the background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />

            <div className="container px-4 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Ready for a Brighter Tomorrow?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground/80 max-w-2xl mx-auto"
                    >
                        Fill out this quick form and our experts will contact you for a personalized, zero-obligation solar audit to maximize your savings.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-background/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    );
}
