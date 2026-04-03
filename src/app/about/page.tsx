import Image from "next/image";
import { SiteFrame } from "@/components/aura/site-frame";

export default function AboutPage() {
  return (
    <SiteFrame>
      <div className="site-shell py-10 pb-20 sm:py-12 lg:pb-24">
        <section className="glass-panel p-8 sm:p-10 lg:p-14">
          <p className="section-kicker">About Aura</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5 text-[17px] leading-8 text-[#4d6660]">
              <h1 className="max-w-2xl text-5xl font-semibold leading-[1] text-[#173029] sm:text-6xl">
                A ritual created for confidence, presence, and real relief.
              </h1>
              <p>
                For years, I struggled with persistent bad breath and buildup, no
                matter how much I brushed, flossed, or scraped my tongue. I tried
                everything: mouthwash, gum, and multiple brushings a day.
              </p>
              <p>They worked in the moment, but never for long.</p>
              <p>
                What bothered me most was not just my mouth. It was the mental
                distraction. The quiet anxiety during dates, meetings, and
                everyday conversations. I was never fully present.
              </p>
              <p>
                I did not want another temporary fix. I wanted something that
                worked from the inside out.
              </p>
              <p>
                Working alongside dental professionals, I created Aura fresh+, a
                hydration mix designed to support oral balance and long-term
                freshness through daily use.
              </p>
              <p>
                This is not a quick fix. It is a daily mix that helps you feel
                confident, focused, and fully present.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-[5/7] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/60">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0679/1413/7679/files/WhatsApp_Image_2026-02-06_at_19.20.58.jpg?v=1770434988"
                  alt="Aura lifestyle image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
