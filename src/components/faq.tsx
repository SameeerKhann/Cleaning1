"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No. Many of our clients give us a key, code, or lockbox access and aren't home during the visit. We're fully insured and background-checked, so you can trust us with access to your space.",
  },
  {
    question: "What products and equipment do you use?",
    answer:
      "We bring our own eco-friendly, pet- and family-safe products and equipment. If you prefer we use specific products you already have at home, just let us know.",
  },
  {
    question: "What if I'm not happy with the clean?",
    answer:
      "We offer a 100% satisfaction guarantee. If anything was missed, contact us within 24 hours and we'll return to fix it at no extra charge.",
  },
  {
    question: "How do you price a job before seeing the space?",
    answer:
      "We give you a free estimate based on square footage, number of rooms, and condition. We can finalize exact pricing with photos or a quick walkthrough — no surprise charges after the fact.",
  },
  {
    question: "Can I cancel or reschedule a visit?",
    answer:
      "Yes — we don't lock you into long contracts. Just give us at least 24 hours' notice to reschedule or cancel without any fees.",
  },
  {
    question: "Do you offer one-time cleans or only recurring service?",
    answer:
      "Both. Book a single deep clean, a move-in/move-out clean, or set up weekly, bi-weekly, or monthly recurring visits — whatever fits your life.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#2a2312] py-20 text-[#fffaf0] lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#ffbe0b]">
            Questions, Answered
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl bg-[#fffaf0]/[0.06] ring-1 ring-[#fffaf0]/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#ffbe0b] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[#e7e2d3]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
