import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/navifi-logo.png"
              alt="NaviFi Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="font-semibold text-lg bg-gradient-to-r from-[#1cc7e7] to-[#0070f3] bg-clip-text text-transparent">
              NaviFi
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/pools" className="hover:text-primary transition-colors">
              Pools
            </Link>
            <Link href="/docs" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>

          {/* Social + Theme */}
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/navifiapp"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </Link>
            <Link
              href="https://github.com/David-CCrown/navifi"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </Link>
            <ModeToggle />
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {currentYear} NaviFi · Built on{" "}
          <Link
            href="https://saros.com"
            target="_blank"
            className="text-primary hover:underline"
          >
            Saros
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
