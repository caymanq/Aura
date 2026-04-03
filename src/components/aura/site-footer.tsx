import Link from "next/link";
import { AuraLogo } from "@/components/aura/brand-art";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/40">
      <div className="site-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <AuraLogo />
          <p className="max-w-xl text-sm leading-7 text-[#56746a]">
            Aura fresh+ is a daily ritual for cleaner breath, brighter confidence,
            and whole-mouth wellness support.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#365047]">
          <Link href="/">Home</Link>
          <Link href="/science">Science</Link>
          <Link href="/about">About Us</Link>
          <Link href="/shop">Shop</Link>
        </div>
      </div>
    </footer>
  );
}
