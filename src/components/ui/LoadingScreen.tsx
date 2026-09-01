"use client";

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
    const timer = setTimeout(() => setIsLoading(false), 1300);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("f7:navigation-start", showLoader);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f1ea] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,146,60,0.14),_rgba(245,241,234,0)_48%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(24,24,27,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.04)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-orange-200/80 bg-white/70 shadow-[0_0_24px_rgba(251,146,60,0.12)] sm:h-36 sm:w-36">
          <div className="absolute inset-2 rounded-full border border-orange-200/60" />
          <Image
            src="/logo.png"
            alt="F7 Logic Logo"
            width={128}
            height={128}
            loading="eager"
            priority
            className="relative z-10 h-full w-full rounded-full object-contain p-3 grayscale brightness-75 contrast-125 opacity-85"
          />
        </div>

        <div className="mt-8 flex w-64 flex-col items-center gap-3 sm:w-80">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/80">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-400 via-amber-500 to-zinc-900 animate-pulse" />
          </div>

          <div className="flex w-full items-center justify-between text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
            <span>Initializing</span>
            <span>F7 LOGIC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
