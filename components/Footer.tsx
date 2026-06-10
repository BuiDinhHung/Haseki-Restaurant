import Image from "next/image";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { logoImage, menuCategories, restaurant } from "@/lib/site-data";

const links = [
  ["Startseite", "#start"],
  ["Über uns", "#ueber-uns"],
  ["Speisekarte", "#speisekarte"],
  ["Galerie", "#galerie"],
  ["Kontakt", "#kontakt"]
];

export function Footer() {
  return (
    <footer className="bg-[#2B2B2B] pb-24 pt-16 text-[#FFFDF8] lg:pb-12">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-white/20 bg-[#FFFDF8] shadow-lg shadow-black/20">
              <Image
                src={logoImage.src}
                alt={logoImage.alt}
                width={80}
                height={80}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div>
              <p className="text-4xl font-black">Haseki Restaurant</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Japanisch - Vietnamesische Küche in Berlin. Frische Zutaten, warme Atmosphäre und authentischer Geschmack.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={restaurant.callHref} className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#B8322A] px-5 py-3 text-sm font-black text-white">
              <Phone size={17} />
              Anrufen
            </a>
            <a href={restaurant.routeHref} className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-5 py-3 text-sm font-black text-[#5A3824]">
              <MapPin size={17} />
              Route
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1fr_1fr_1.35fr]">
          <div>
            <p className="font-black uppercase">Adresse</p>
            <p className="mt-3 text-sm leading-6 text-white/70">{restaurant.address}</p>
          </div>
          <div>
            <p className="font-black uppercase">Öffnungszeiten</p>
            <div className="mt-3 grid gap-2">
              {restaurant.openingHours.map((row) => (
                <p key={row.days} className="text-sm text-white/70">
                  {row.days}: {row.time}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black uppercase">Speisekarte</p>
            <div className="mt-3 grid gap-2">
              {menuCategories.slice(0, 5).map((category) => (
                <a key={category.id} href="#speisekarte" className="text-sm text-white/70 hover:text-white">
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black uppercase">Haseki in Berlin</p>
            <a href={restaurant.callHref} className="group mt-4 inline-flex items-center gap-4 text-4xl font-black leading-none text-[#FFFDF8] sm:text-5xl">
              Jetzt anrufen
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#B8322A] transition group-hover:translate-x-1">
                <ArrowRight size={30} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5">
            {links.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Haseki Restaurant. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
