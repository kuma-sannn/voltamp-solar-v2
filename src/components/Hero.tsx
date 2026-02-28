"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background gradients or subtle visual assets */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-primary)_0%,_transparent_50%)] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--color-secondary)_0%,_transparent_40%)] opacity-10 blur-3xl pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Light-ray Sweep Animation on Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 relative inline-block overflow-hidden">
                        Energy Sources for a<br />
                        <span className="relative inline-block text-primary">
                            Sustainable Future
                            {/* The light ray sweep effect */}
                            <motion.div
                                initial={{ left: "-100%" }}
                                animate={{ left: "200%" }}
                                transition={{
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                }}
                                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                            />
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        Select Green Energy for Business Success and a Healthier Planet. We require solar solutions to shape a brighter tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-primary/50 transition-all w-full justify-center">
                                Get a Free Estimate
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Link href="/about" className="px-8 py-4 bg-muted text-foreground rounded-full font-semibold text-lg hover:bg-muted/80 transition-all w-full justify-center inline-block">
                                Learn More
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
