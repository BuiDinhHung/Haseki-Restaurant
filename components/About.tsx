import Image from "next/image";
import { Leaf, Soup, Sparkles } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { aboutImages } from "@/lib/site-data";

export function About() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <FadeUp>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Willkommen bei Haseki</p>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[#5A3824] sm:text-5xl">
            Warmes Holz, bunte Laternen und frische japanisch-vietnamesische Küche.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#7A6A58]">
            Willkommen bei Haseki. Genießen Sie Sushi, Pho, Ramen, Bowls, Reisgerichte, asiatische
            Spezialitäten und hausgemachte Getränke in moderner Atmosphäre in Berlin.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              [Leaf, "Frische Zutaten"],
              [Soup, "Sushi, Pho & Ramen"],
              [Sparkles, "Hausgemachte Getränke"]
            ].map(([Icon, label]) => (
              <div key={label as string} className="rounded-lg bg-[#FFFDF8] p-4 shadow-sm">
                <Icon className="mb-3 text-[#3F7D3A]" />
                <p className="font-semibold text-[#5A3824]">{label as string}</p>
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl shadow-[#5A3824]/15">
            <Image
              src={aboutImages[0].path}
              alt={aboutImages[0].title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-4 hidden w-44 overflow-hidden rounded-lg border-4 border-[#F8F4EC] shadow-xl sm:block">
            <div className="relative aspect-[4/5]">
              <Image
                src={aboutImages[1].path}
                alt={aboutImages[1].title}
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

