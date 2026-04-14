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
                Persistent bad breath and buildup do not come from a lack of
                effort. Brushing, flossing, mouthwash, and gum help in the
                moment, but they do not always solve the root of the problem.
              </p>
              <p>
                The result is not just physical. It becomes a constant
                distraction, creating quiet anxiety during conversations,
                meetings, and everyday interactions. It pulls you out of the
                moment and chips away at confidence.
              </p>
              <p>
                Aura Fresh+ was created to go beyond temporary fixes. Developed
                alongside dental professionals, this daily hydration mix is
                designed to support oral balance from within and promote long
                term freshness with a more consistent sense of confidence.
              </p>
              <p>
                This is not a quick fix. It is a daily ritual to help you feel
                clear, focused, and fully present.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-square overflow-hidden rounded-[2.2rem] border border-white/60 bg-white/60">
                <Image
                  src="/aura/about-product-story.png"
                  alt="Aura fresh+ box and stick packs on a marble counter"
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
