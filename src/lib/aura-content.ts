export const faqItems = [
  {
    question: "What is Aura fresh+?",
    answer:
      "Aura fresh+ is a daily oral wellness and hydration drink mix designed to support fresher breath, balanced oral bacteria, smoother-feeling teeth, and better hydration from the inside out.",
  },
  {
    question: "When should I drink it?",
    answer:
      "Most people use fresh+ once a day as part of their morning or mid-day routine. It fits well after brushing or whenever you want to feel cleaner, more refreshed, and more confident.",
  },
  {
    question: "How quickly does it work?",
    answer:
      "Many people notice a fresher mouth and cleaner feeling quickly, while the long-term oral wellness benefits build with consistent daily use.",
  },
  {
    question: "Does it replace brushing or flossing?",
    answer:
      "No. fresh+ is designed to complement your normal oral care routine, not replace brushing, flossing, or dental checkups.",
  },
  {
    question: "What does it taste like?",
    answer:
      "It has a crisp mint-forward flavor that feels clean and cooling without the harsh aftertaste of traditional mouthwash.",
  },
  {
    question: "Who is it for?",
    answer:
      "fresh+ is ideal for anyone who wants to feel more confident in close conversations, reduce oral buildup, and support a healthier mouth as part of a daily wellness ritual.",
  },
] as const;

export const keyFeatures = [
  "Fights harmful bacteria",
  "Freshens breath",
  "Cleans teeth",
  "Improves overall oral health",
] as const;

export const scienceCards = [
  {
    eyebrow: "Bacteria balance",
    title: "Fights Harmful Bacteria",
    description:
      "Targets odor-causing bacteria and yeast that build up on the tongue and in the mouth. Xylitol helps reduce harmful bacteria and supports a healthier oral environment.",
  },
  {
    eyebrow: "Freshness support",
    title: "Freshens Breath",
    description:
      "fresh+ neutralizes odor at the source instead of masking it. Zinc helps eliminate sulfur compounds while pH-balancing minerals make it harder for odor to return.",
  },
  {
    eyebrow: "Daily polish",
    title: "Cleans & Smooths Teeth",
    description:
      "Supports cleaner, smoother-feeling teeth by reducing surface buildup and helping maintain strong enamel.",
  },
  {
    eyebrow: "Whole-mouth care",
    title: "Overall Oral Health",
    description:
      "Supports balanced pH, gum health, and enamel strength. Oral health is closely connected to overall wellness, making daily care an important part of supporting your body from the inside out.",
  },
] as const;

export const scienceStory = [
  {
    kicker: "The science",
    title: "Fresh breath starts deeper than surface-level fixes.",
    body: "Aura fresh+ is built to support the full oral environment, not just cover odor for a few minutes. Instead of relying on harsh rinses or sugary gum, the formula helps address the conditions that allow odor, dryness, and buildup to return.",
    supporting:
      "That means targeting harmful bacteria, supporting saliva flow, maintaining enamel-friendly mineral balance, and helping the mouth stay in a healthier rhythm throughout the day.",
    image: "/aura/hero-room-background.png",
    imageAlt: "Woman holding Aura fresh+ pouch in a sunlit room",
  },
  {
    kicker: "The 3-part approach",
    title: "Balance the microbiome. Neutralize odor. Support the mouth barrier.",
    body: "Xylitol and oral probiotics work together to support a better microbial balance in the mouth, while zinc helps neutralize sulfur compounds linked to bad breath. Electrolytes and minerals support hydration, saliva flow, and a cleaner-feeling oral environment.",
    supporting:
      "This layered approach is why fresh+ feels different from products that only chase a minty aftertaste.",
    image: "/aura/bag-back.jpg",
    imageAlt: "Aura fresh+ supplement facts and product science details",
  },
] as const;

export const scienceBreakdown = [
  {
    label: "1. Bacteria balance",
    title: "Help reduce harmful bacteria without disrupting everything.",
    text: "Xylitol helps make the mouth less hospitable to odor-causing bacteria, while the probiotic blend supports a more balanced oral microbiome over time.",
  },
  {
    label: "2. Odor neutralization",
    title: "Address odor at the source, not just the after-smell.",
    text: "Zinc gluconate helps neutralize sulfur compounds that are closely linked to bad breath, so freshness is grounded in chemistry, not just flavor.",
  },
  {
    label: "3. Enamel + pH support",
    title: "Create a cleaner-feeling, enamel-friendly environment.",
    text: "Calcium, phosphorus, and pH-supportive minerals help the mouth feel smoother, cleaner, and better supported as part of a daily routine.",
  },
  {
    label: "4. Hydration support",
    title: "A hydrated mouth is a fresher mouth.",
    text: "Electrolytes support hydration and saliva flow, which play an important role in rinsing the mouth naturally and supporting overall oral comfort.",
  },
] as const;

export const ingredients = [
  {
    name: "Zinc Gluconate",
    title: "The odor neutralizer",
    description:
      "Helps eliminate sulfur compounds that cause lingering odor, so freshness starts at the source.",
  },
  {
    name: "Xylitol",
    title: "The bacteria fighter",
    description:
      "Supports a healthier oral environment by helping reduce harmful bacteria linked to bad breath and buildup.",
  },
  {
    name: "Probiotic Blend",
    title: "The microbiome balancer",
    description:
      "L. reuteri and L. salivarius help support a more balanced oral microbiome over time.",
  },
  {
    name: "Vitamin C",
    title: "The gum guardian",
    description:
      "Supports gum health and everyday tissue maintenance so your mouth feels healthier and more resilient.",
  },
  {
    name: "Calcium & Phosphorus",
    title: "The enamel defenders",
    description:
      "Help support mineral balance and maintain strong enamel as part of your daily oral care routine.",
  },
  {
    name: "Natural Mint Extract",
    title: "The freshness booster",
    description:
      "Delivers the clean, bright mint finish that makes each sip feel instantly refreshing.",
  },
  {
    name: "Electrolyte Blend",
    title: "The hydration helper",
    description:
      "Supports hydration and saliva flow, both of which play an important role in oral comfort and freshness.",
  },
] as const;

export const productOptions = [
  {
    id: "box",
    name: "1 box",
    detail: "10 pouches",
    price: "$24.99",
    description:
      "A lighter introduction to your new ritual, perfect for travel, handbags, and daily touch-ups.",
  },
  {
    id: "bag",
    name: "1 bag",
    detail: "20 pouches",
    price: "$39.99",
    description:
      "The best-value refill for steady daily use when you want fresh+ in your routine every day.",
  },
] as const;
