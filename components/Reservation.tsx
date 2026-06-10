import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { reservationImage, restaurant } from "@/lib/site-data";

export function ReservationCTA() {
  return (
    <section className="py-16">
      <div className="section-shell relative max-w-6xl overflow-hidden rounded-lg px-6 py-12 text-white shadow-xl shadow-[#5A3824]/15 sm:px-10 lg:flex lg:items-center lg:justify-between">
        <Image
          src={reservationImage.path}
          alt={reservationImage.title}
          fill
          sizes="(min-width: 1180px) 1180px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#5A3824]/78" />
        <div className="relative">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F0C391]">Reservierung</p>
          <h2 className="mt-3 max-w-3xl font-heading text-3xl font-bold sm:text-4xl">
            Lust auf frisches Sushi, Pho oder asiatische Spezialitäten?
          </h2>
        </div>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <a href={restaurant.callHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B8322A] px-6 py-4 font-bold">
            <Phone size={18} />
            Jetzt anrufen
          </a>
          <a href={restaurant.routeHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-6 py-4 font-bold text-[#5A3824]">
            <MapPin size={18} />
            Route anzeigen
          </a>
        </div>
      </div>
    </section>
  );
}

export function Reservation() {
  return <ReservationCTA />;
}

