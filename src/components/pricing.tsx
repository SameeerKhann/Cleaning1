import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Standard Clean",
    price: "From $120",
    cadence: "per visit",
    description: "Regular upkeep for homes that just need a refresh.",
    features: [
      "Kitchen & bathrooms",
      "Dusting & vacuuming",
      "Floors mopped",
      "Trash removal",
    ],
    highlighted: false,
  },
  {
    name: "Deep Clean",
    price: "From $220",
    cadence: "per visit",
    description: "Our most popular service — a thorough, top-to-bottom clean.",
    features: [
      "Everything in Standard",
      "Baseboards & vents",
      "Inside appliances",
      "Grout & detail scrubbing",
      "Priority scheduling",
    ],
    highlighted: true,
  },
  {
    name: "Commercial",
    price: "Custom Quote",
    cadence: "per contract",
    description: "Tailored cleaning plans for offices and retail spaces.",
    features: [
      "Flexible after-hours visits",
      "Dedicated account manager",
      "Supplies included",
      "Multi-location pricing",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#fffaf0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#db9d00]">
            Simple, Honest Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#2a2312] sm:text-4xl">
            Pick a plan, or get a custom quote
          </h2>
          <p className="mt-4 text-[#50461f]">
            Every quote is free and obligation-free. Final pricing depends on
            size, condition, and frequency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? "bg-[#2a2312] text-[#fffaf0] shadow-xl lg:-translate-y-3"
                  : "bg-white text-[#2a2312] ring-1 ring-[#2a2312]/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 right-8 flex items-center gap-1 rounded-full bg-[#ffbe0b] px-3 py-1 text-xs font-bold text-[#2a2312]">
                  <Star className="h-3 w-3 fill-[#2a2312]" />
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  tier.highlighted ? "text-[#e7e2d3]" : "text-[#50461f]"
                }`}
              >
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold">
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? "text-[#e7e2d3]" : "text-[#756a47]"
                  }`}
                >
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? "text-[#ffbe0b]" : "text-[#db9d00]"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  tier.highlighted
                    ? "bg-[#ffbe0b] text-[#2a2312]"
                    : "bg-[#2a2312] text-[#ffbe0b]"
                }`}
              >
                Get This Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
