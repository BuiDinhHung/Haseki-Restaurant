import { MapPin, Navigation, Phone } from "lucide-react";
import { restaurant } from "@/lib/site-data";

export function LocationBand() {
  return (
    <section className="bg-[#FFFDF8] py-16">
      <div className="section-shell grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Find Haseki</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">Finden Sie uns in Berlin</h2>
          <p className="mt-4 max-w-xl leading-7 text-[#7A6A58]">
            Öffnen Sie direkt die Route oder rufen Sie uns an. Wir sind in der Waltersdorfer Straße 1A für
            Sushi, Pho, Ramen und warme asiatische Küche da.
          </p>
        </div>
        <div className="rounded-lg bg-[#F8F4EC] p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 rounded-full bg-[#FFFDF8] p-2 shadow-inner sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 text-[#5A3824]">
              <MapPin className="shrink-0 text-[#B8322A]" />
              <span className="truncate text-sm font-semibold">{restaurant.address}</span>
            </div>
            <div className="flex gap-2">
              <a
                href={restaurant.routeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#B8322A] px-5 py-3 text-sm font-bold text-white"
              >
                <Navigation size={17} />
                Route
              </a>
              <a
                href={restaurant.callHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#5A3824] px-5 py-3 text-sm font-bold text-white"
              >
                <Phone size={17} />
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

