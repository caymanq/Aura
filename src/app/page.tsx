import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { FaqAccordion } from "@/components/aura/faq-accordion";
import { SiteFrame } from "@/components/aura/site-frame";
import { faqItems, keyFeatures } from "@/lib/aura-content";

export default function Home() {
  return (
    <SiteFrame>
      <section className="relative bg-black">
        <div className="relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            <Image
              src="/aura/hero-room-background-upscaled.png"
              alt="Woman holding Aura fresh+ in a bright room"
              fill
              className="object-cover object-[72%_center] lg:object-[78%_center]"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,19,14,0.76)_0%,rgba(24,19,14,0.56)_24%,rgba(24,19,14,0.24)_48%,rgba(24,19,14,0.08)_72%,rgba(24,19,14,0.02)_100%)]" />
          <div className="site-shell relative flex min-h-[70vh] items-center px-6 py-16 sm:px-8 lg:min-h-[78vh] lg:px-10">
            <div className="max-w-xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f1dfc2]">
                Aura fresh+
              </p>
              <h1 className="mt-5 text-5xl font-semibold uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
                Upgrade Your Presence.
              </h1>
              <p className="mt-5 text-xl uppercase tracking-[0.18em] text-white/92 sm:text-2xl">
                Rip. Sip. Refresh.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#132720] hover:bg-[#f4f0e8]"
                >
                  Buy fresh+
                </Link>
                <div className="inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.14em] text-[#e1bf68]">
                  Fresh breath starts within
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 lg:py-20">
        <div className="grid gap-5 md:grid-cols-4">
          {keyFeatures.map((feature, index) => (
            <article
              key={feature}
              className="glass-panel min-h-[180px] p-6 sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#edf6ef] text-[#26463a]">
                {index === 0 ? (
                  <ShieldCheck className="h-5 w-5" />
                ) : index === 1 ? (
                  <Sparkles className="h-5 w-5" />
                ) : index === 2 ? (
                  <Droplets className="h-5 w-5" />
                ) : (
                  <ArrowRight className="h-5 w-5" />
                )}
              </div>
              <h2 className="text-2xl font-semibold text-[#183129]">{feature}</h2>
              <p className="mt-4 text-[15px] leading-7 text-[#5a7168]">
                {index === 0
                  ? "Helps target odor-causing bacteria and maintain a healthier oral environment."
                  : index === 1
                    ? "Supports freshness in a way that feels clean, modern, and lasting."
                    : index === 2
                      ? "Promotes smoother-feeling teeth by supporting hydration and mineral balance."
                      : "Connects oral care with hydration, pH balance, and overall wellness support."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-16 lg:pb-20">
        <div className="grid gap-8 overflow-hidden rounded-[2.4rem] border border-white/55 bg-white/70 p-8 shadow-[0_24px_60px_rgba(28,52,45,0.08)] lg:grid-cols-[1fr_0.9fr] lg:p-12">
          <div className="flex items-center">
            <div className="max-w-2xl">
              <p className="section-kicker">Science</p>
              <h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-[#173029] sm:text-6xl">
                The science behind fresh+.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4f6660]">
                Explore how Aura fresh+ supports bacterial balance, odor
                neutralization, hydration, enamel support, and the full oral
                environment in one daily ritual.
              </p>
              <Link
                href="/science"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#173029] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#24483d]"
              >
                Explore science <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
            <Image
              src="/aura/home-science-box.png"
              alt="Aura fresh+ Cucumber Mint oral wellness hydration mix box"
              fill
              className="object-contain scale-[1.08] rounded-[1.5rem] p-1 sm:p-2"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="site-shell pb-16 lg:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Q&A</p>
            <h2 className="mt-4 text-4xl font-semibold text-[#173029] sm:text-5xl">
              Everything you want to know.
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-2 text-sm font-semibold text-[#24453a] lg:inline-flex"
          >
            Go to shop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <FaqAccordion items={faqItems} />
      </section>
    </SiteFrame>
  );
}
