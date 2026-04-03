import Image from "next/image";
import { cn } from "@/lib/utils";

type ArtProps = {
  className?: string;
};

export function AuraLogo({ className }: ArtProps) {
  return (
    <div
      className={cn(
        "relative h-[4.6rem] w-[320px] sm:h-[5.1rem] sm:w-[376px]",
        className
      )}
    >
      <Image
        src="https://cdn.shopify.com/s/files/1/0679/1413/7679/files/BOOK_GENIUS_3_f7fd47a4-58aa-4201-8748-afb4809ee746.png?v=1770429348"
        alt="Aura logo"
        fill
        className="object-contain object-left"
        sizes="376px"
        priority
      />
    </div>
  );
}

export function ProductArtwork({
  className,
  variant = "bag",
}: ArtProps & { variant?: "bag" | "box" }) {
  const isBag = variant === "bag";
  const imageSrc = isBag ? "/aura/bag-front-glossy.jpg" : "/aura/box-front.jpg";
  const imageAlt = isBag
    ? "Aura fresh+ bag front"
    : "Aura fresh+ box front";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-white/55 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(235,246,239,0.92),rgba(225,235,228,0.95))] p-5 shadow-[0_26px_70px_rgba(36,67,57,0.12)]",
        className
      )}
    >
      <div className="absolute inset-0 soft-grid opacity-25" />
      <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-[#b8dbc7]/50 blur-3xl" />
      <div className="absolute -left-10 bottom-6 h-28 w-28 rounded-full bg-[#f0d8bb]/60 blur-3xl" />
      <div className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-[2.2rem] bg-white/70">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            "object-contain p-6",
            isBag ? "scale-[1.04]" : "scale-[1.02]"
          )}
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </div>
  );
}

export function GlowPortrait({
  className,
  title = "fresh+",
}: ArtProps & { title?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.75rem] border border-white/60 bg-[linear-gradient(145deg,#e9f4ee_0%,#f8f3ea_36%,#dfede3_100%)] shadow-[0_26px_70px_rgba(36,67,57,0.12)]",
        className
      )}
    >
      <div className="absolute -left-8 top-8 h-44 w-44 rounded-full bg-[#f2dec4]/70 blur-3xl" />
      <div className="absolute right-4 top-5 h-56 w-56 rounded-full bg-[#b3d9c6]/60 blur-3xl" />
      <div className="relative grid h-full min-h-[620px] gap-4 p-5 sm:grid-cols-[1.08fr_0.92fr] sm:p-6">
        <div className="relative overflow-hidden rounded-[2.2rem]">
          <Image
            src="/aura/bag-cucumber-mint.jpg"
            alt={`Aura ${title} with cucumber and mint`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 55vw"
          />
        </div>
        <div className="grid gap-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/70">
            <Image
              src="/aura/stick-pack.jpg"
              alt="Aura fresh+ stick pack"
              fill
              className="object-contain p-4"
              sizes="(max-width: 640px) 100vw, 24vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white/70">
            <Image
              src="/aura/box-angle.jpg"
              alt="Aura fresh+ box packaging"
              fill
              className="object-contain p-3"
              sizes="(max-width: 640px) 100vw, 24vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
