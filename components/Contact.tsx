import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contactImage, restaurant } from "@/lib/site-data";

const googleMapSrc = "https://www.google.com/maps?q=52.4049612,13.5732529&z=16&hl=de&output=embed";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Kontakt</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">Besuchen Sie uns in Berlin</h2>
          <div className="mt-8 overflow-hidden rounded-lg bg-[#FFFDF8] shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={contactImage.path}
                alt={contactImage.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-4">
            <div className="rounded-lg bg-[#FFFDF8] p-5 shadow-sm">
              <MapPin className="mb-3 text-[#B8322A]" />
              <p className="font-bold text-[#5A3824]">Adresse</p>
              <p className="mt-1 text-[#7A6A58]">{restaurant.address}</p>
            </div>
            <div className="rounded-lg bg-[#FFFDF8] p-5 shadow-sm">
              <Phone className="mb-3 text-[#B8322A]" />
              <p className="font-bold text-[#5A3824]">Telefon</p>
              {restaurant.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replaceAll(" ", "")}`} className="mt-1 block text-[#7A6A58] hover:text-[#B8322A]">
                  {phone}
                </a>
              ))}
            </div>
            <div className="rounded-lg bg-[#FFFDF8] p-5 shadow-sm">
              <Clock className="mb-3 text-[#B8322A]" />
              <p className="font-bold text-[#5A3824]">Öffnungszeiten</p>
              {restaurant.openingHours.map((row) => (
                <p key={row.days} className="mt-1 flex justify-between gap-4 text-[#7A6A58]">
                  <span>{row.days}</span>
                  <span>{row.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-[#FFFDF8] shadow-sm">
          <div className="h-[420px] bg-[#F8F4EC] sm:h-[520px]">
            <iframe
              title="Google Map Haseki Restaurant"
              src={googleMapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          <div className="grid gap-3 border-t border-[#5A3824]/10 p-5 sm:grid-cols-2">
            <a
              href={restaurant.routeHref}
              target="_blank"
              rel="noreferrer"
              className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#B8322A] px-6 py-4 font-bold text-white"
            >
              <Navigation size={18} />
              Route öffnen
            </a>
            <a
              href={restaurant.callHref}
              className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#5A3824] px-6 py-4 font-bold text-white"
            >
              <Phone size={18} />
              Anrufen
            </a>
          </div>
          <a
            href={restaurant.routeHref}
            target="_blank"
            rel="noreferrer"
            className="block px-5 pb-5 text-center text-xs font-semibold text-[#7A6A58] hover:text-[#B8322A]"
          >
            Karte größer auf Google Maps ansehen
          </a>
        </div>
      </div>
    </section>
  );
}

