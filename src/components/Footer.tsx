import Link from "next/link";
import { Sun, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-primary p-2 rounded-xl">
                                <Sun className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-bold tracking-tight text-white">Voltamp</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">Solar Panacea</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground/80 leading-relaxed max-w-sm">
                            Engineering high-performance solar EPC solutions and industrial energy grids across Mumbai since 2016.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-muted-foreground/80 hover:text-primary transition-colors">Corporate Profile</Link></li>
                            <li><Link href="/services" className="text-muted-foreground/80 hover:text-primary transition-colors">Our Services</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground/80 hover:text-primary transition-colors">Contact Support</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground/80 hover:text-primary transition-colors">Technical Audit</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white">Our Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services#industrial" className="text-muted-foreground/80 hover:text-primary transition-colors">Industrial Solar EPC</Link></li>
                            <li><Link href="/services#commercial" className="text-muted-foreground/80 hover:text-primary transition-colors">Commercial Solutions</Link></li>
                            <li><Link href="/services#fencing" className="text-muted-foreground/80 hover:text-primary transition-colors">Solar Electric Fencing</Link></li>
                            <li><Link href="/services#audit" className="text-muted-foreground/80 hover:text-primary transition-colors">Technical Site Surveys</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary shrink-0" />
                                <span className="text-muted-foreground/80">
                                    Shop No. 5, Panchsheel-1 CHS,<br />
                                    Raheja Township, Malad East,<br />
                                    Mumbai, MH 400097
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary shrink-0" />
                                <a href="tel:+918169114568" className="text-muted-foreground/80 hover:text-white transition-colors">
                                    +91 81691 14568
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary shrink-0" />
                                <div className="flex flex-col">
                                    <a href="mailto:info@sunonrent.com" className="text-muted-foreground/80 hover:text-white transition-colors">
                                        info@sunonrent.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Voltamp Solar Panacea Pvt Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}