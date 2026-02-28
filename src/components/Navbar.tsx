"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm py-4" : "bg-transparent py-6"}`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary p-2 rounded-xl group-hover:scale-105 transition-transform">
                            <Sun className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold tracking-tight">Voltamp</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium">Solar Panacea</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative group py-2"
                                >
                                    <span className={`transition-colors ${isActive ? "text-primary font-bold" : "text-foreground/80 group-hover:text-primary"}`}>
                                        {link.label}
                                    </span>
                                    {/* Animated Active / Hover Underline */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                                            initial={false}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all"
                        >
                            Request Audit
                        </Link>

                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open Mobile Menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-background md:hidden flex flex-col"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-white/5">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="bg-primary p-2 rounded-xl">
                                    <Sun className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <span className="text-xl font-bold">Voltamp Solar</span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close Menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col p-6 gap-6 text-xl font-medium">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`border-b border-white/5 pb-4 ${isActive ? "text-primary font-bold" : "text-foreground"}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>

                        <div className="mt-auto p-6">
                            <Link
                                href="/contact"
                                className="block w-full text-center py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get Technical Audit
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}