"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/site-data";

export function Gallery() {
  const [active, setActive] = useState<(typeof galleryImages)[number] | null>(null);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <section id="galerie" className="bg-[#FFFDF8] py-20 sm:py-28">
      <div className="section-shell">
        <div className="balanced-heading">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#B8322A]">Galerie</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[#5A3824] sm:text-4xl">Viele kleine Momente, viel Geschmack</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setActive(image)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.25), ease: "easeOut" }}
              className="focus-ring interactive-card shine-hover group relative flex h-[320px] flex-col overflow-hidden rounded-lg border border-[#5A3824]/10 bg-[#FFFDF8] text-left shadow-sm sm:h-[340px] lg:h-[360px]"
            >
              <div className="relative h-[calc(100%-64px)] shrink-0 overflow-hidden bg-[#F8F4EC]">
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="image-lift object-cover"
                />
              </div>
              <div className="relative z-10 flex h-16 shrink-0 items-center border-t border-[#5A3824]/10 bg-[#FFFDF8] px-4 py-3">
                <span className="gallery-caption-text text-sm font-bold leading-5 text-[#5A3824]">
                  {image.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#2B2B2B]/88 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Galerie schließen"
            className="button-pop absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-[#5A3824] shadow-xl"
          >
            <X size={18} />
            Schließen
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={active.path} alt={active.title} fill sizes="90vw" className="object-contain" />
          </div>
          <p className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#5A3824] sm:block">
            Zum Schließen außerhalb des Bildes klicken oder Esc drücken
          </p>
        </div>
      ) : null}
    </section>
  );
}

