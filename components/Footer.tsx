import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Twitter, Github, ExternalLink } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="w-full border-t border-gray-800 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/navifi-logo.png"
                                alt="NaviFi Logo"
                                width={40}
                                height={40}
                                className="rounded"
                            />
                            <span className="font-semibold text-xl tracking-tight text-foreground">NaviFi</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Revolutionizing DeFi with advanced liquidity and trading solutions powered by Saros.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github size={20} />
                            </Link>
                            <Link href="https://discord.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                {/* <Discord size={20} /> */}
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/pools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Pools
                                </Link>
                            </li>
                            <li>
                                <Link href="/trade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Trade
                                </Link>
                            </li>
                            <li>
                                <Link href="/stake" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    Stake
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                    Documentation <ExternalLink size={12} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/whitepaper" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                                    Whitepaper <ExternalLink size={12} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Theme & Community */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Preferences</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Theme:</span>
                            <ModeToggle />
                        </div>
                        <div className="pt-4">
                            <Link 
                                href="https://discord.com" 
                                target="_blank"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-sm font-medium"
                            >
                                {/* <Discord size={18} /> */}
                                Join Community
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-800 gap-4">
                    <div className="text-sm text-muted-foreground">
                        © {currentYear} NaviFi. Built on <Link href="https://saros.com" target="_blank" className="text-primary hover:underline">Saros</Link>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;