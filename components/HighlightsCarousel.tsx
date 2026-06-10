"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { foodImages } from "@/lib/site-data";

const bowlImage =
  foodImages.find((image) => image.title.includes("Haseki Curry")) ??
  foodImages.find((image) => image.title.includes("Mien Xao")) ??
  foodImages[0];

export function HighlightsCarousel() {
  return (
    <section className="overflow-hidden bg-[#F2E7D7] py-16 sm:py-24">
      <div className="section-shell grid max-w-6xl items-center gap-10 lg:grid-cols-[0.82fr_0.95fr_0.72fr]">
        <FadeUp className="max-w-[520px]">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.18em] text-[#B8322A]">Für jeden Geschmack</p>
          <h2 className="display-punch max-w-[9ch] text-[clamp(42px,5.7vw,82px)] leading-[0.94] text-[#5A3824]">
            HASEKI
            <br />
            FÜR ALLE
          </h2>
          <p className="mt-5 max-w-sm text-base font-semibold leading-7 text-[#7A6A58]">
            Sushi, Pho, Ramen, Bowls und hausgemachte Getränke in einem warmen Bistro-Moment.
          </p>
          <a
            href="#speisekarte"
            className="button-pop mt-8 inline-flex items-center gap-2 rounded-full bg-[#B8322A] px-7 py-4 text-base font-black text-white"
          >
            Speisekarte ansehen
            <ArrowRight size={18} />
          </a>
        </FadeUp>

        <FadeUp delay={0.1} className="relative mx-auto w-full max-w-[440px]">
          <div className="absolute left-1/2 top-[58%] h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#86715F]/34 blur-[1px] sm:h-[320px] sm:w-[320px]" />
          <motion.div
            initial={{ opacity: 0, rotate: -75, scale: 0.84 }}
            whileInView={{ opacity: 1, rotate: 360, scale: 1 }}
            viewport={{ once: false, amount: 0.45 }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-[min(82vw,420px)] overflow-hidden rounded-full bg-[#FFFDF8] shadow-2xl shadow-[#5A3824]/15"
          >
            <Image
              src={bowlImage.path}
              alt={bowlImage.title}
              fill
              sizes="(min-width: 1024px) 420px, 82vw"
              className="object-contain p-5"
            />
          </motion.div>
        </FadeUp>

        <FadeUp delay={0.16} className="lg:justify-self-end">
          <div className="-rotate-2 text-[#3F7D3A]">
            <p className="text-5xl font-black sm:text-6xl">100%</p>
            <p className="mt-2 text-3xl font-black leading-none sm:text-4xl">Frisch</p>
            <p className="mt-5 max-w-xs text-base font-semibold leading-7">
              Für Lunch, Abendessen, Drinks und kleine Runden am Tisch.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
