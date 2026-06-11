"use client";

import { motion, useReducedMotion } from "framer-motion";

const ingredientLabels = ["Sushi", "Pho", "Ramen", "Bowls"];

export function IngredientBubbles({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      {ingredientLabels.map((label, index) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, y: 18, rotate: index % 2 ? 4 : -4 }}
          animate={
            reduceMotion
              ? { opacity: 0.86, y: 0 }
              : {
                  opacity: [0.65, 1, 0.65],
                  y: [0, -12, 0],
                  rotate: index % 2 ? [4, -2, 4] : [-4, 2, -4]
                }
          }
          transition={{
            duration: 3.4 + index * 0.3,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: index * 0.18
          }}
          className="mb-3 block w-fit rounded-full border border-[#FFFDF8]/30 bg-[#FFFDF8]/90 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#5A3824] shadow-xl shadow-[#2B2B2B]/20 backdrop-blur"
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}

export function SteamWisps({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none relative h-20 w-24 ${className}`} aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14, x: index * 18 }}
          animate={
            reduceMotion
              ? { opacity: 0.35, y: 0, x: index * 18 }
              : {
                  opacity: [0, 0.55, 0],
                  y: [18, -28],
                  x: [index * 18, index * 18 + (index === 1 ? 8 : -7)]
                }
          }
          transition={{
            duration: 2.4,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeOut",
            delay: index * 0.38
          }}
          className="absolute bottom-0 h-16 w-4 rounded-full border-l-2 border-[#FFFDF8]/70"
        />
      ))}
    </div>
  );
}

export function ChopstickAccent({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: 18, rotate: -16 }}
      whileInView={{ opacity: 1, x: 0, rotate: -16 }}
      animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.8, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute h-24 w-28 ${className}`}
    >
      <span className="absolute left-2 top-8 h-2 w-28 rounded-full bg-[#F0C391] shadow-lg shadow-[#5A3824]/20" />
      <span className="absolute left-0 top-14 h-2 w-28 rounded-full bg-[#FFFDF8] shadow-lg shadow-[#5A3824]/20" />
    </motion.div>
  );
}

export function SauceSwipe({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      initial={{ scaleX: 0.2, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      animate={reduceMotion ? undefined : { scaleX: [0.86, 1, 0.86] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2.4, repeat: reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute h-2 origin-left rounded-full bg-[#B8322A] ${className}`}
    />
  );
}
