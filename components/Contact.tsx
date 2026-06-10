import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
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

        <div className="min-h-[520px] overflow-hidden rounded-lg bg-[#FFFDF8] shadow-sm">
          <iframe
            title="Google Map Haseki Restaurant"
            src="https://www.google.com/maps?q=Waltersdorfer%20Stra%C3%9Fe%201A%2C%2012526%20Berlin&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[520px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

