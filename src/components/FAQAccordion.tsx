"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-bold">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-[var(--color-primary)] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-[var(--color-text-muted)]">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
