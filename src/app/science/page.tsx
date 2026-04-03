import Image from "next/image";
import { SiteFrame } from "@/components/aura/site-frame";
import {
  ingredients,
  scienceBreakdown,
  scienceStory,
} from "@/lib/aura-content";

export default function SciencePage() {
  return (
    <SiteFrame>
      <section className="site-shell py-10 lg:py-14">
        <div className="max-w-4xl">
          <p className="section-kicker">Science</p>
          <h1 className="mt-4 text-6xl font-semibold leading-[0.92] text-[#173029] sm:text-7xl lg:text-[6.6rem]">
            The science behind fresh+.
          </h1>
        </div>
      </section>

      <section className="site-shell pb-14 lg:pb-18">
        <div className="space-y-10">
          {scienceStory.map((section, index) => (
            <article
              key={section.title}
              className="grid overflow-hidden rounded-[2.4rem] border border-white/55 bg-white/70 shadow-[0_24px_60px_rgba(28,52,45,0.08)] lg:grid-cols-2"
            >
              <div
                className={`flex items-center px-8 py-10 sm:px-10 lg:px-12 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="max-w-xl">
                  <p className="section-kicker">{section.kicker}</p>
                  <h2 className="mt-4 text-4xl font-semibold leading-[0.98] text-[#173029] sm:text-5xl">
                    {section.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-[#4f6660]">
                    {section.body}
                  </p>
                  <p className="mt-5 text-lg leading-8 text-[#4f6660]">
                    {section.supporting}
                  </p>
                </div>
              </div>
              <div className={`relative min-h-[420px] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell pb-14 lg:pb-18">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/55 bg-white/75 p-6 shadow-[0_24px_60px_rgba(28,52,45,0.08)] sm:p-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111]">
              <Image
                src="/aura/bag-cucumber-mint.jpg"
                alt="Aura fresh+ with cucumber and mint"
                width={1400}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-8">
              <p className="section-kicker">The formula</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#173029] sm:text-5xl">
                A complete daily oral support system.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4f6660]">
                fresh+ combines probiotics, minerals, hydration support, and
                freshness-focused actives so the formula works as a system rather
                than a single-note mint product.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {scienceBreakdown.map((item) => (
              <article key={item.label} className="glass-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#56776c]">
                  {item.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#173029]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[#5a7168]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell pb-16 lg:pb-24">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/55 bg-white/72 px-5 py-6 shadow-[0_24px_60px_rgba(28,52,45,0.08)] sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mb-8 max-w-[42rem]">
            <p className="section-kicker">Ingredients</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-[#173029] sm:text-5xl">
              Swipe through the ingredients behind fresh+.
            </h2>
          </div>

          <div className="flex snap-x gap-4 overflow-x-auto pb-5 [scrollbar-color:#9aa8a1_transparent] [scrollbar-width:thin]">
            {ingredients.map((ingredient, index) => (
              <article
                key={ingredient.name}
                className="min-w-[250px] max-w-[250px] snap-start rounded-[1.8rem] border border-white/70 bg-white/86 p-4 shadow-[0_18px_45px_rgba(28,52,45,0.08)] sm:min-w-[280px] sm:max-w-[280px]"
              >
                <div
                  className={`relative mb-5 overflow-hidden rounded-[1.5rem] p-5 ${
                    index % 4 === 0
                      ? "bg-[linear-gradient(135deg,#e7f2ec_0%,#d5e8dd_50%,#cae1d4_100%)]"
                      : index % 4 === 1
                        ? "bg-[linear-gradient(135deg,#f7eedb_0%,#f2dfb2_52%,#ead6a2_100%)]"
                        : index % 4 === 2
                          ? "bg-[linear-gradient(135deg,#e5edf2_0%,#d5e0e5_52%,#ccd9dd_100%)]"
                          : "bg-[linear-gradient(135deg,#e6f2ea_0%,#d8ebe2_50%,#cbe4d6_100%)]"
                  }`}
                >
                  <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.9),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.7),transparent_26%)]" />
                  <div className="relative flex h-36 items-end justify-end rounded-[1.1rem]">
                    <span className="rounded-full bg-white/92 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#4f6c63]">
                      fresh+
                    </span>
                  </div>
                </div>

                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5b7a70]">
                  {ingredient.title}
                </p>
                <h3 className="mt-3 text-[2rem] font-semibold text-[#173029]">
                  {ingredient.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5a7168]">
                  {ingredient.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#d8ddd8]">
            <div className="h-full w-[48%] rounded-full bg-[#8f9993]" />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
