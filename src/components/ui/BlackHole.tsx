"use client";

import { useEffect, useRef } from "react";

export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 780);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = 780;
    };
    window.addEventListener("resize", handleResize);

    // Relativistic accretion plasma particles (dense matter stream)
    const particleCount = 450;
    const particles: {
      r: number;
      theta: number;
      speed: number;
      size: number;
      alpha: number;
      color: string;
      trail: number;
    }[] = [];

    const colors = [
      "rgba(255, 255, 255, ", // Pure white hot core
      "rgba(186, 230, 253, ", // Electric cyan
      "rgba(96, 165, 250, ",  // Deep neon blue
      "rgba(192, 132, 252, ", // Relativistic lavender
      "rgba(56, 189, 248, ",  // Bright aqua
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * (width * 0.38) + 110;
      particles.push({
        r: radius,
        theta: Math.random() * Math.PI * 2,
        // Keplerian differential rotation: matter closer to the singularity spins faster
        speed: (180 / radius) * 0.0035 + 0.0015,
        size: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.85 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        trail: Math.random() * 0.15 + 0.05,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Black Hole Singularity Center
      const cx = width / 2;
      const cy = 250;
      const horizonRadius = 85;

      // -------------------------------------------------------------
      // 1. VOLUMETRIC BACKGROUND CORONA & ACCRETION GLOW (Bloom)
      // -------------------------------------------------------------
      const bgGlow = ctx.createRadialGradient(cx, cy, horizonRadius, cx, cy, width * 0.42);
      bgGlow.addColorStop(0, "rgba(56, 189, 248, 0.4)");
      bgGlow.addColorStop(0.25, "rgba(37, 99, 235, 0.22)");
      bgGlow.addColorStop(0.55, "rgba(147, 51, 234, 0.12)");
      bgGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.42, 0, Math.PI * 2);
      ctx.fill();

      // -------------------------------------------------------------
      // 2. GRAVITATIONAL LENSING ARC (Upper Warped Light Dome)
      // -------------------------------------------------------------
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // Upper warped light halo (Einstein Lensing Arc)
      const topArcGrad = ctx.createRadialGradient(cx, cy - 20, horizonRadius + 10, cx, cy - 20, horizonRadius + 95);
      topArcGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      topArcGrad.addColorStop(0.2, "rgba(56, 189, 248, 0.75)");
      topArcGrad.addColorStop(0.5, "rgba(99, 102, 241, 0.4)");
      topArcGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = topArcGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy - 15, horizonRadius + 75, horizonRadius + 65, 0, Math.PI * 0.9, Math.PI * 2.1);
      ctx.fill();

      // -------------------------------------------------------------
      // 3. REAR ACCRETION DISK (Behind Event Horizon)
      // -------------------------------------------------------------
      particles.forEach((p) => {
        // Rear half of the orbit (sin(theta) < 0)
        if (Math.sin(p.theta) < 0) {
          p.theta += p.speed;
          const x = cx + Math.cos(p.theta) * p.r;
          const y = cy + Math.sin(p.theta) * (p.r * 0.32);

          // Doppler beaming: approaching matter is brighter
          const doppler = (Math.cos(p.theta) + 1) * 0.45 + 0.1;

          ctx.fillStyle = p.color + p.alpha * doppler + ")";
          ctx.shadowBlur = p.size * 4;
          ctx.shadowColor = "rgba(56, 189, 248, 0.8)";

          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // -------------------------------------------------------------
      // 4. EVENT HORIZON (Absolute Black Void & Intense Photon Ring)
      // -------------------------------------------------------------
      // Outer Glowing Photon Ring (Trapped Light Halo)
      const photonGlow = ctx.createRadialGradient(cx, cy, horizonRadius - 6, cx, cy, horizonRadius + 16);
      photonGlow.addColorStop(0, "rgba(0, 0, 0, 1)");
      photonGlow.addColorStop(0.65, "rgba(255, 255, 255, 1)");
      photonGlow.addColorStop(0.85, "rgba(56, 189, 248, 0.9)");
      photonGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = photonGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, horizonRadius + 16, 0, Math.PI * 2);
      ctx.fill();

      // Pure Black Singularity Center
      ctx.fillStyle = "#000000";
      ctx.beginPath();
      ctx.arc(cx, cy, horizonRadius, 0, Math.PI * 2);
      ctx.fill();

      // -------------------------------------------------------------
      // 5. FRONT ACCRETION DISK (Foreground Swirling Matter Disk)
      // -------------------------------------------------------------
      // High-density plasma filaments passing in front of singularity
      const diskGrad = ctx.createRadialGradient(cx, cy, horizonRadius, cx, cy, width * 0.36);
      diskGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      diskGrad.addColorStop(0.15, "rgba(56, 189, 248, 0.75)");
      diskGrad.addColorStop(0.4, "rgba(79, 70, 229, 0.35)");
      diskGrad.addColorStop(0.8, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = diskGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 5, width * 0.35, 65, 0, 0, Math.PI * 2);
      ctx.fill();

      // Foreground relativistic matter particles
      particles.forEach((p) => {
        // Front half of the orbit (sin(theta) >= 0)
        if (Math.sin(p.theta) >= 0) {
          p.theta += p.speed;
          const x = cx + Math.cos(p.theta) * p.r;
          const y = cy + Math.sin(p.theta) * (p.r * 0.32);

          // Doppler beaming & relativistic velocity
          const doppler = (Math.cos(p.theta) + 1) * 0.5 + 0.2;

          ctx.fillStyle = p.color + p.alpha * doppler + ")";
          ctx.shadowBlur = p.size * 6;
          ctx.shadowColor = "rgba(255, 255, 255, 0.9)";

          ctx.beginPath();
          ctx.arc(x, y, p.size * 1.25, 0, Math.PI * 2);
          ctx.fill();

          // Particle relativistic motion trail
          const prevX = cx + Math.cos(p.theta - p.trail) * p.r;
          const prevY = cy + Math.sin(p.theta - p.trail) * (p.r * 0.32);

          ctx.strokeStyle = p.color + p.alpha * 0.35 * doppler + ")";
          ctx.lineWidth = p.size * 0.8;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(prevX, prevY);
          ctx.stroke();
        }
      });

      // -------------------------------------------------------------
      // 6. LOWER GRAVITATIONAL LENSING ARC (Bottom Light Reflection)
      // -------------------------------------------------------------
      const bottomArcGrad = ctx.createRadialGradient(cx, cy + 25, horizonRadius + 5, cx, cy + 25, horizonRadius + 60);
      bottomArcGrad.addColorStop(0, "rgba(56, 189, 248, 0.6)");
      bottomArcGrad.addColorStop(0.4, "rgba(99, 102, 241, 0.3)");
      bottomArcGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = bottomArcGrad;
      ctx.beginPath();
      ctx.ellipse(cx, cy + 18, horizonRadius + 55, horizonRadius + 35, 0, 0, Math.PI);
      ctx.fill();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[780px] pointer-events-none -z-10 opacity-95"
    />
  );
}