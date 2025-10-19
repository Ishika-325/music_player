"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // ✅ corrected import
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <motion.div
      className={cn("fixed inset-0 overflow-hidden pointer-events-none", className)} // ✅ fixed full-screen positioning
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const meteorCount = number || 20;

        // Randomized position across full screen
        const startLeft = Math.random() * 100; // percentage of screen width
        const topOffset = Math.random() * 100; // random starting vertical position

        return (
          <span
            key={"meteor-" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']"
            )}
            style={{
              top: `${topOffset}%`,
              left: `${startLeft}%`,
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
            }}
          />
        );
      })}
    </motion.div>
  );
};
