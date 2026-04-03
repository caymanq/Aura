import { ReactNode } from "react";
import { SiteFooter } from "@/components/aura/site-footer";
import { SiteHeader } from "@/components/aura/site-header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
