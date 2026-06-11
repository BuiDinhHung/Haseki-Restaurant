"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, restaurant } from "@/lib/site-data";

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="start" className="relative overflow-hidden bg-[#B87946] px-3 pb-12 pt-28 sm:px-5 sm:pb-20 sm:pt-32">
      <div className="hero-motion-frame relative mx-auto h-[calc(100vh-150px)] min-h-[560px] max-w-[1960px] overflow-hidden rounded-[28px] bg-[#5A3824] shadow-2xl shadow-[#5A3824]/25 sm:rounded-[34px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlides[active].id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[active].path}
              alt={heroSlides[active].title}
              fill
              priority={active === 0}
              sizes="100vw"
              className={`hero-slide-image object-cover object-center ${
                heroSlides[active].kind === "food" ? "hero-slide-food" : ""
              }`}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-[#5A3824]/18 via-[#5A3824]/36 to-[#5A3824]/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A3824]/78 via-[#5A3824]/24 to-transparent" />

        <div className="absolute bottom-7 left-5 right-5 sm:bottom-12 sm:left-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-5xl min-w-0"
          >
            <p className="mb-5 inline-flex max-w-full rounded-full bg-[#FFFDF8] px-4 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[#B8322A] sm:text-xs sm:tracking-[0.18em]">
              Japanisch · Vietnamesisch · Berlin
            </p>
            <h1 className="display-punch max-w-full text-[clamp(52px,10vw,154px)] leading-[0.86] text-[#FFFDF8]">
              HASEKI
              <br />
              STREET FOOD
            </h1>
            <p className="mt-6 max-w-[calc(100vw-40px)] text-base font-bold leading-7 text-[#FFFDF8]/92 sm:max-w-2xl sm:text-2xl">
              Sushi, Pho, Ramen und warme asiatische Küche mit frischen Zutaten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#speisekarte" className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#B8322A] px-7 py-4 font-black text-white">
                Speisekarte ansehen
                <ArrowRight size={18} />
              </a>
              <a href={restaurant.callHref} className="button-pop inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-7 py-4 font-black text-[#5A3824]">
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-7 right-7 hidden gap-2 sm:flex" aria-label="Hero Slider">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`${slide.title} anzeigen`}
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition-all ${
                active === index ? "w-12 bg-[#FFFDF8]" : "w-3 bg-[#FFFDF8]/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
