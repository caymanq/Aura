"use client";

import Image from "next/image";
import { Check, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { productOptions } from "@/lib/aura-content";
import { cn } from "@/lib/utils";

type ProductOption = (typeof productOptions)[number];

export function ProductSelector() {
  const [selected, setSelected] = useState<ProductOption>(productOptions[0]);
  const gallery =
    selected.id === "bag"
      ? [
          {
            src: "/aura/bag-front-glossy.jpg",
            alt: "Aura fresh+ bag front",
          },
          {
            src: "/aura/bag-cucumber-mint.jpg",
            alt: "Aura fresh+ bag with cucumber and mint",
          },
          {
            src: "/aura/bag-back.jpg",
            alt: "Aura fresh+ bag back",
          },
        ]
      : [
          {
            src: "/aura/box-front.jpg",
            alt: "Aura fresh+ box front",
          },
          {
            src: "/aura/box-angle.jpg",
            alt: "Aura fresh+ box angle view",
          },
          {
            src: "/aura/stick-pack.jpg",
            alt: "Aura fresh+ single stick",
          },
        ];

  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass-panel p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {productOptions.map((option) => {
            const active = option.id === selected.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelected(option)}
                className={cn(
                  "rounded-[1.75rem] border px-5 py-4 text-left transition-all",
                  active
                    ? "border-[#9fd0ba] bg-[#eaf5ef] shadow-sm"
                    : "border-[#e1ebe5] bg-white/80 hover:bg-[#f7fbf8]"
                )}
              >
                <div className="text-lg font-semibold text-[#1d2e28]">
                  {option.name}
                </div>
                <div className="text-sm text-[#60716b]">{option.detail}</div>
                <div className="mt-2 text-base font-semibold text-[#244439]">
                  {option.price}
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-[2rem] border border-[#e4efe8] bg-[#fbfcfa] p-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="section-kicker">Shop fresh+</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#183028]">
                {selected.name} ({selected.detail})
              </h2>
            </div>
            <div className="rounded-full bg-[#173029] px-4 py-2 text-sm font-semibold text-white">
              {selected.price}
            </div>
          </div>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#597168]">
            {selected.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <FeatureChip icon={Sparkles} label="Cleaner daily ritual" />
            <FeatureChip icon={FlaskConical} label="Thoughtfully formulated" />
            <FeatureChip icon={ShieldCheck} label="Tested ingredient profile" />
          </div>

          <button
            type="button"
            className="mt-8 inline-flex rounded-full bg-[#9fd0ba] px-6 py-3 text-sm font-semibold text-[#173029] hover:bg-[#8bc4aa]"
          >
            Choose this option
          </button>
        </div>
      </div>

      <div className="glass-panel p-5">
        <div className="relative min-h-[470px] overflow-hidden rounded-[2.2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(239,246,241,0.92),rgba(230,239,233,0.95))]">
          <div className="absolute inset-0 soft-grid opacity-25" />
          <div className="relative h-full p-3">
            <div className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] bg-white">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-contain p-1 sm:p-0"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureChip({
  icon: Icon,
  label,
}: {
  icon: typeof Check;
  label: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-[#e3ebe5] bg-white/75 px-4 py-4 text-sm font-medium text-[#355046]">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#edf6ef] text-[#2b4a40]">
        <Icon className="h-4 w-4" />
      </div>
      {label}
    </div>
  );
}
