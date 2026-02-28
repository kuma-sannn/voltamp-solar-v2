"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

// Updated Schema to include service selection
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number."),
    monthlyBill: z.string()
        .min(1, "Please enter a bill amount.")
        .refine((val) => !isNaN(Number(val)), "Must be a number.")
        .refine((val) => Number(val) >= 500, "Bill amount is too low for industrial ROI estimation."),
    service: z.string().min(1, "Please select a service."),
});

type FormData = z.infer<typeof formSchema>;

function ContactFormContent() {
    const searchParams = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            monthlyBill: "",
            service: "general",
        }
    });

    // Catch the service ID from URL and update the form
    useEffect(() => {
        const serviceId = searchParams.get("service");
        if (serviceId) {
            setValue("service", serviceId);
        }
    }, [searchParams, setValue]);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/consultation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to submit request.");

            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (err: any) {
            alert(err.message || "Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-primary/20 text-primary-foreground border border-primary/50 rounded-xl p-4 flex items-center gap-3 mb-6"
                    >
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                        <p className="font-medium">Request received! Our engineers will contact you shortly.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Full Name</label>
                    <input
                        {...register("name")}
                        className={`w-full bg-background/10 border ${errors.name ? 'border-red-500/50' : 'border-white/20 focus:ring-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all`}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Phone Number</label>
                    <input
                        {...register("phone")}
                        className={`w-full bg-background/10 border ${errors.phone ? 'border-red-500/50' : 'border-white/20 focus:ring-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all`}
                        placeholder="+91 98XXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Monthly Bill Amount (₹)</label>
                    <input
                        {...register("monthlyBill")}
                        type="number"
                        className={`w-full bg-background/10 border ${errors.monthlyBill ? 'border-red-500/50' : 'border-white/20 focus:ring-primary'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all`}
                        placeholder="e.g. 15000"
                    />
                    {errors.monthlyBill && <p className="text-red-400 text-xs mt-1">{errors.monthlyBill.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Interested Service</label>
                    <div className="relative">
                        <select
                            {...register("service")}
                            className={`w-full bg-background/10 border ${errors.service ? 'border-red-500/50' : 'border-white/20 focus:ring-primary'} rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 transition-all cursor-pointer`}
                        >
                            <option value="general" className="text-gray-900">General Inquiry</option>
                            <option value="epc" className="text-gray-900">Solar EPC Services</option>
                            <option value="industrial" className="text-gray-900">Industrial Power Plants</option>
                            <option value="fencing" className="text-gray-900">Solar Electric Fencing</option>
                            <option value="geysers" className="text-gray-900">Solar Water Heaters</option>
                            <option value="street-lighting" className="text-gray-900">Solar Street Lighting</option>
                            <option value="om" className="text-gray-900">Operations & Maintenance</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-6">
                <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground text-xl font-bold py-5 rounded-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                    {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "Claim Your Free Solar Audit"}
                </motion.button>
            </div>
        </form>
    );
}

// Export with Suspense wrapper for Next.js searchParams
export default function ContactForm() {
    return (
        <Suspense fallback={<div className="text-white/50 p-10 text-center italic">Loading form...</div>}>
            <ContactFormContent />
        </Suspense>
    );
}