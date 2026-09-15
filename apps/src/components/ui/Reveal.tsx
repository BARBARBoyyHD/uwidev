"use client";

import { MotionConfig, motion } from "framer-motion";
import { useHydrated, useReducedMotion } from "@/lib/hydrated";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Per-block reveal. Sections pass a `delay` (e.g. `Math.min(i * 0.14, 0.56)`)
 * to stagger repeated items one-by-one instead of revealing the section as
 * one block.
 *
 * Hydration-safe: the server and the hydration pass render the static,
 * fully-visible div, so no-JS / slow-JS visitors never see blank sections.
 * The animation only activates after the client snapshot kicks in AND the
 * user has not requested reduced motion (reduced-motion users see content
 * immediately; MotionConfig only snaps transform keys, not opacity).
 *
 * The motion itself is a big, clearly-visible slide-fade: elements start
 * translated down 40px and slightly scaled, then decelerate smoothly into
 * place over 0.7s once ~25% of the block is in view (so the reveal is
 * actually witnessed instead of finishing off-screen).
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const isHydrated = useHydrated();
  const reduceMotion = useReducedMotion();
  const canAnimate = isHydrated && !reduceMotion;

  return (
    <MotionConfig reducedMotion="user">
      {canAnimate ? (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </motion.div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </MotionConfig>
  );
}