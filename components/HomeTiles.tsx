import { ArrowRight, MapPin, Phone } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { restaurant } from "@/lib/site-data";

const cards = [
  {
    title: "Unsere Speisekarte",
    text: "Sushi, Pho, Ramen, Bowls und warme Küche. Alles klar nach Kategorien sortiert.",
    href: "#speisekarte",
    label: "Speisekarte ansehen",
    icon: ArrowRight
  },
  {
    title: "Haseki To Go",
    text: "Direkt anrufen, abholen oder die Route zum Restaurant öffnen.",
    href: restaurant.callHref,
    label: "Jetzt anrufen",
    secondaryHref: restaurant.routeHref,
    secondaryLabel: "Route",
    icon: Phone
  }
];

export function HomeTiles() {
  return (
    <section className="overflow-hidden rounded-b-[42px] bg-[#B87946] px-4 pb-20 pt-4 text-[#FFFDF8] sm:pb-28">
      <div className="section-shell grid max-w-7xl gap-6 lg:grid-cols-2">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <FadeUp key={card.title} delay={index * 0.08}>
              <article className="cta-motion-card interactive-card relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[28px] bg-[#5A3824] px-6 py-10 text-center shadow-xl shadow-[#5A3824]/18 sm:min-h-[340px] sm:px-10">
                <h2 className="text-4xl font-black leading-none sm:text-5xl">{card.title}</h2>
                <p className="mt-7 max-w-md text-lg font-semibold leading-8 text-[#FFFDF8]/92">{card.text}</p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                  <a
                    href={card.href}
                    className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-7 py-4 text-base font-black text-[#5A3824]"
                  >
                    {card.label}
                    <Icon size={18} />
                  </a>
                  {card.secondaryHref ? (
                    <a
                      href={card.secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                      className="button-pop inline-flex items-center justify-center gap-2 rounded-full border border-[#F0C391]/75 px-7 py-4 text-base font-black text-[#FFFDF8]"
                    >
                      {card.secondaryLabel}
                      <MapPin size={18} />
                    </a>
                  ) : null}
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
