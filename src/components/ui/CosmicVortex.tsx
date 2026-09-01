"use client";

import { useEffect, useRef } from "react";

export default function CosmicVortex() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = 260;
    const particles: {
      r: number;
      angle: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = [
      "rgba(147, 197, 253, ",
      "rgba(192, 132, 252, ",
      "rgba(255, 255, 255, ",
      "rgba(96, 165, 250, ",
      "rgba(251, 146, 60, ",
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        r: Math.random() * (width * 0.42) + 90,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.004 + 0.002,
        size: Math.random() * 2.2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.28;

      const gradient = ctx.createRadialGradient(cx, cy, 30, cx, cy, width * 0.45);
      gradient.addColorStop(0, "rgba(5, 7, 15, 0.95)");
      gradient.addColorStop(0.2, "rgba(59, 130, 246, 0.45)");
      gradient.addColorStop(0.4, "rgba(147, 51, 234, 0.3)");
      gradient.addColorStop(0.7, "rgba(6, 182, 212, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.45, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach((p) => {
        p.angle += p.speed;
        const x = cx + Math.cos(p.angle) * p.r;
        const y = cy + Math.sin(p.angle) * (p.r * 0.42);

        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.shadowBlur = p.size * 5;
        ctx.shadowColor = p.color + "1)";

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const voidGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 80);
      voidGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
      voidGrad.addColorStop(0.7, "rgba(3, 4, 9, 0.9)");
      voidGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = voidGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[680px] pointer-events-none -z-10 opacity-90 mix-blend-screen"
    />
  );
}