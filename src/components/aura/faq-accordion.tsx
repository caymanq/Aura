"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? "");

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = item.question === openQuestion;

        return (
          <div
            key={item.question}
            className="glass-panel overflow-hidden rounded-[1.75rem]"
          >
            <button
              type="button"
              onClick={() =>
                setOpenQuestion((current) =>
                  current === item.question ? "" : item.question
                )
              }
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-[#21332d]">
                {item.question}
              </span>
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#edf5ef] text-[#2b4a40] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-[#e5efe8] px-6 pb-6 pt-5 text-[15px] leading-7 text-[#54756a]">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
