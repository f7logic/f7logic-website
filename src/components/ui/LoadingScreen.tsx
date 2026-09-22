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
          <div className="absolute inset-0 bg-[#f8f8f6]" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 shadow-[0_10px_32px_rgba(24,24,27,0.28)] sm:h-28 sm:w-28"
              >
                <Image
                  src="/logo.png"
                  alt="F7 Logic"
                  width={96}
                  height={96}
                  priority
                  className="h-auto w-20 object-contain sm:w-24"
                  style={{ height: "auto" }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
              className="mt-6 flex w-56 flex-col items-center gap-3 sm:w-64"
            >
              <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-200">
                <motion.div
                  initial={{ width: "12%" }}
                  animate={{ width: ["12%", "60%", "100%", "86%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full rounded-full bg-zinc-950"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
