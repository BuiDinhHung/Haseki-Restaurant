import Image from "next/image";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contactImage, restaurant } from "@/lib/site-data";

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

        <div className="hidden min-h-[520px] flex-col justify-between rounded-lg bg-[#FFFDF8] p-6 shadow-sm sm:p-8 lg:flex">
          <MapPin className="mb-4 text-[#B8322A]" size={30} />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B8322A]">Google Maps</p>
            <h3 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">
              Route zu Haseki öffnen
            </h3>
            <p className="mt-4 text-lg font-semibold leading-8 text-[#5A3824]">
              Waltersdorfer Straße 1A
              <br />
              12526 Berlin
            </p>
            <p className="mt-5 leading-7 text-[#7A6A58]">
              Die Karte wird direkt in Google Maps geöffnet. Das funktioniert zuverlässiger, wenn diese
              Website in Webcake oder einem mobilen In-App-Browser eingebettet ist.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
        </div>
      </div>
    </section>
  );
}

