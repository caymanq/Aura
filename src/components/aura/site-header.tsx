"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AuraLogo } from "@/components/aura/brand-art";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[#faf6ef]/80 backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-6 py-2.5">
        <Link href="/" aria-label="Aura home">
          <AuraLogo />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium text-[#365047] hover:bg-white/70",
                  isActive && "bg-[#9fd0ba] text-[#173029] shadow-sm"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            className="ml-2 rounded-full bg-[#173029] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#24483d]"
          >
            Buy fresh+
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e6de] bg-white/80 text-[#173029] md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="site-shell space-y-3 pb-5 md:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-[1.5rem] border border-white/60 bg-white/75 px-5 py-4 text-sm font-medium text-[#2b443b]",
                  isActive && "border-[#b9dcca] bg-[#eaf5ef]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
