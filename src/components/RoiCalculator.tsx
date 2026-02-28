"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import { Calculator, IndianRupee, Leaf, Zap } from "lucide-react";
import Link from "next/link";

function Counter({ value, isFloat = false }: { value: number; isFloat?: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const startValue = Number(node.dataset.value) || 0;
        const controls = animate(startValue, value, {
            duration: 0.4, // Snappy duration
            ease: "easeOut",
            onUpdate(v) {
                node.textContent = isFloat ? v.toFixed(1) : Math.round(v).toLocaleString();
            },
        });

        node.dataset.value = value.toString();

        return () => controls.stop();
    }, [value, isFloat]);

    return <span ref={ref}>{isFloat ? value.toFixed(1) : Math.round(value).toLocaleString()}</span>;
}

export default function RoiCalculator() {
    const [monthlyBill, setMonthlyBill] = useState<number>(3000);

    // Simplified logic for estimation
    const yearlySavings = monthlyBill * 12 * 0.9; // Assume 90% savings
    const systemSizeKW = Math.max(1, (monthlyBill / 1000) * 1.5).toFixed(1);
    const estimatedCost = parseFloat(systemSizeKW) * 60000; // rough ₹60k per kW
    const roiYears = (estimatedCost / yearlySavings).toFixed(1);

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6"
                    >
                        <Calculator className="w-5 h-5" />
                        <span>Calculate Your Savings</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        See Your ROI Instantly
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground"
                    >
                        Adjust your current monthly electricity bill to estimate your solar savings.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-background rounded-3xl shadow-2xl p-8 md:p-12 border border-muted">
                    {/* Input Side */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-xl font-medium mb-4 flex items-center justify-between">
                                Current Monthly Bill
                                <span className="text-primary font-bold text-2xl">
                                    ₹{monthlyBill.toLocaleString()}
                                </span>
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="20000"
                                step="500"
                                value={monthlyBill}
                                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                                className="w-full h-3 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-sm text-muted-foreground mt-2">
                                <span>₹1k</span>
                                <span>₹20k+</span>
                            </div>
                        </div>

                        <p className="text-muted-foreground">
                            Based on Indian average sunlight hours and standard mono-perc panel efficiency. Actual figures may vary.
                        </p>
                    </div>

                    {/* Results Side */}
                    <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-inner space-y-6">
                        <h3 className="text-2xl font-semibold mb-6">Estimated Impact</h3>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <IndianRupee className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-primary-foreground/80 text-sm">Yearly Savings</p>
                                <p className="text-3xl font-bold">₹<Counter value={yearlySavings} /></p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <Zap className="w-6 h-6 text-yellow-300" />
                            </div>
                            <div>
                                <p className="text-primary-foreground/80 text-sm">Recommended System Size</p>
                                <p className="text-3xl font-bold"><Counter value={parseFloat(systemSizeKW)} isFloat /> kW</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 rounded-xl">
                                <Leaf className="w-6 h-6 text-green-300" />
                            </div>
                            <div>
                                <p className="text-primary-foreground/80 text-sm">Estimated ROI Period</p>
                                <p className="text-3xl font-bold"><Counter value={parseFloat(roiYears)} isFloat /> Years</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/20 mt-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-white text-primary rounded-xl py-4 font-bold text-lg hover:shadow-lg transition-all"
                                >
                                    Get Exact Custom Quote
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
