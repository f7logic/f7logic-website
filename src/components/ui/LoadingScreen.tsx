"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const showLoader = () => setIsLoading(true);
    window.addEventListener("f7:navigation-start", showLoader);

    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 700);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("f7:navigation-start", showLoader);
    };
  }, [pathname]);

  const orbitDots = [
    { className: "-top-2 left-1/2 -translate-x-1/2" },
    { className: "right-0 top-1/2 -translate-y-1/2" },
    { className: "bottom-0 left-1/2 -translate-x-1/2" },
    { className: "left-0 top-1/2 -translate-y-1/2" },
    { className: "left-8 top-8" },
    { className: "right-8 bottom-8" },
  ];

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f5f1ea]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,146,60,0.18),_rgba(245,241,234,0)_42%)]" />
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute h-48 w-48 rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.6)_0%,_rgba(251,146,60,0.18)_32%,transparent_70%)] blur-3xl sm:h-60 sm:w-60"
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute h-44 w-44 rounded-full border border-orange-200/70 bg-[conic-gradient(from_0deg,rgba(251,146,60,0.18),rgba(251,146,60,0.8),rgba(255,255,255,0),rgba(251,146,60,0.18))] blur-[1px] sm:h-56 sm:w-56"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute h-60 w-60 rounded-full border border-zinc-400/80 border-dashed sm:h-72 sm:w-72"
              />

              {orbitDots.map((dot, index) => (
                <motion.span
                  key={index}
                  animate={{ scale: [0.8, 1.35, 0.8], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
                  className={`absolute h-3.5 w-3.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-[0_0_16px_rgba(251,146,60,0.9)] ${dot.className}`}
                />
              ))}

              <motion.div
                animate={{ rotate: [0, 7, -7, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-orange-200/80 bg-white/85 shadow-[0_0_36px_rgba(251,146,60,0.2)] backdrop-blur-md sm:h-36 sm:w-36"
              >
                <div className="absolute inset-2 rounded-full border border-orange-200/60" />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Image
                    src="/logo.png"
                    alt="F7 Logic Logo"
                    width={128}
                    height={128}
                    loading="eager"
                    priority
                    className="h-full w-full rounded-full object-contain p-3 grayscale brightness-80 contrast-125 opacity-90"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
              className="mt-8 flex w-72 flex-col items-center gap-4 sm:w-80"
            >
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.42em] text-zinc-700">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
                <span>Loading systems</span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200/80 shadow-inner">
                <motion.div
                  initial={{ width: "12%" }}
                  animate={{ width: ["12%", "60%", "100%", "86%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-zinc-900"
                />
              </div>

              <div className="flex w-full items-center justify-center text-[10px] font-semibold uppercase tracking-[0.42em] text-zinc-600">
                <span className="text-zinc-900">F7 LOGIC</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
