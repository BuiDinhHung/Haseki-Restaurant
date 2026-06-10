"use client";

import { MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ambientImages, logoImage, restaurant } from "@/lib/site-data";

const links = [
  ["Speisekarte", "#speisekarte"],
  ["Galerie", "#galerie"],
  ["Kontakt", "#kontakt"],
  ["Route", restaurant.routeHref]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5 sm:py-5">
      <nav className="mx-auto flex h-[72px] max-w-[1760px] items-center justify-between gap-3 rounded-2xl bg-[#5A3824] px-4 shadow-2xl shadow-[#5A3824]/25 sm:h-[82px] sm:px-6">
        <a href="#start" className="focus-ring group flex min-w-0 items-center gap-3">
          <span className="block h-12 w-12 shrink-0 overflow-hidden rounded-md bg-[#FFFDF8] shadow-sm transition group-hover:scale-105 sm:h-14 sm:w-14">
            <Image
              src={logoImage.src}
              alt={logoImage.alt}
              width={56}
              height={56}
              className="h-full w-full object-contain p-1"
              priority
            />
          </span>
          <span className="truncate text-2xl font-black text-[#FFFDF8] sm:text-4xl">Haseki</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring text-sm font-black text-[#FFFDF8] transition hover:text-[#F0C391]"
            >
              {label}
            </a>
          ))}
          <a
            href={restaurant.routeHref}
            className="focus-ring button-pop rounded-full border border-[#F0C391] px-5 py-2.5 text-sm font-black text-[#FFFDF8]"
          >
            Haseki To Go
          </a>
          <a
            href={restaurant.callHref}
            className="focus-ring button-pop inline-flex items-center gap-2 rounded-full bg-[#B8322A] px-5 py-3 text-sm font-black text-white"
          >
            <Phone size={16} />
            Anrufen
          </a>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setOpen(true)}
          className="focus-ring shrink-0 rounded-full p-2 text-[#FFFDF8] transition hover:bg-white/10"
        >
          <Menu size={34} strokeWidth={2.4} />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-[#111]/55 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[60] flex w-[min(88vw,400px)] flex-col overflow-hidden bg-[#5A3824] text-[#FFFDF8] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-44 shrink-0 overflow-hidden">
          <Image src={ambientImages[1].path} alt={ambientImages[1].title} fill sizes="400px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5A3824]/30 to-[#5A3824]/92" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="flex items-center gap-3">
              <span className="block h-12 w-12 overflow-hidden rounded-md bg-[#FFFDF8]">
                <Image
                  src={logoImage.src}
                  alt={logoImage.alt}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain p-1"
                />
              </span>
              <span className="text-2xl font-black">Haseki</span>
            </span>
            <button type="button" aria-label="Menü schließen" onClick={() => setOpen(false)} className="rounded-full bg-white/12 p-2">
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="flex-1 px-6 py-6">
          <div className="rounded-2xl bg-[#4A2C1B] p-3">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 px-4 py-4 text-base font-black last:border-b-0"
              >
                {label}
                <span className="text-[#F0C391]">→</span>
              </a>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={restaurant.callHref} className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#B8322A] px-4 py-3 text-center text-sm font-black text-white">
              <Phone size={16} />
              Anrufen
            </a>
            <a href={restaurant.routeHref} className="button-pop inline-flex items-center justify-center gap-2 rounded-full border border-[#F0C391] px-4 py-3 text-center text-sm font-black text-white">
              <MapPin size={16} />
              Route
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
