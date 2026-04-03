import { SiteFrame } from "@/components/aura/site-frame";
import { ProductSelector } from "@/components/aura/product-selector";

export default function ShopPage() {
  return (
    <SiteFrame>
      <div className="site-shell py-10 pb-20 sm:py-12 lg:pb-24">
        <section className="mb-10">
          <div className="mb-8 max-w-3xl">
            <p className="section-kicker">Shop Aura</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] text-[#173029] sm:text-6xl">
              Choose the fresh+ format that fits your routine.
            </h1>
            <p className="mt-5 text-base leading-8 text-[#587068] sm:text-lg">
              Same bright mint ritual. Two ways to bring it with you.
            </p>
          </div>

          <ProductSelector />
        </section>
      </div>
    </SiteFrame>
  );
}
