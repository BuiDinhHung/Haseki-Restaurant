"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function BackgroundEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });
  const driftUp = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const driftDown = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-[#B8322A]"
        style={{ scaleX }}
      />
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-paper" />
        <motion.div className="ambient-stroke ambient-stroke-left" style={{ y: driftUp }} />
        <motion.div className="ambient-stroke ambient-stroke-right" style={{ y: driftDown }} />
        <motion.div className="ambient-label ambient-label-left" style={{ y: driftDown }}>
          HASEKI
        </motion.div>
        <motion.div className="ambient-label ambient-label-right" style={{ y: driftUp }}>
          SUSHI · PHO · RAMEN
        </motion.div>
      </div>
    </>
  );
}
