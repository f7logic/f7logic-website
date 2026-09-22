"use client";

import { useEffect, useRef } from "react";

export default function DenseNeurons() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = canvas.offsetWidth * dpr);
    let height = (canvas.height = canvas.offsetHeight * dpr);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
      mouse.x = width / 2;
      mouse.y = height / 2;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (event.clientX - rect.left) * dpr;
      mouse.targetY = (event.clientY - rect.top) * dpr;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    // 🧠 DEEP SPACE SCI-FI NEURAL CORE
    const nodeCount = 160;
    const nodes: {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      angle: number;
      speed: number;
      distFromCenter: number;
      radius: number;
      color: string;
    }[] = [];

    const colors = [
      "#67e8f9",
      "#60a5fa",
      "#93c5fd",
      "#a78bfa",
      "#c4b5fd",
      "#38bdf8",
    ];

    const cx = width / 2;
    const cy = height / 2;
    const maxCoreRadius = Math.min(220 * dpr, width * 0.42, height * 0.35);

    for (let i = 0; i < nodeCount; i++) {
      const r = Math.sqrt(Math.random()) * maxCoreRadius;
      const theta = Math.random() * Math.PI * 2;

      nodes.push({
        x: cx + Math.cos(theta) * r,
        y: cy + Math.sin(theta) * r,
        baseX: cx + Math.cos(theta) * r,
        baseY: cy + Math.sin(theta) * r,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        distFromCenter: r,
        radius: (Math.random() * 2.8 + 1.6) * dpr,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const pulses: {
      from: number;
      to: number;
      prog: number;
      speed: number;
      color: string;
    }[] = [];

    const firePulse = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      pulses.push({
        from,
        to,
        prog: 0,
        speed: Math.random() * 0.045 + 0.025,
        color: Math.random() > 0.4 ? "#67e8f9" : "#8b5cf6",
      });
    };

    let tick = 0;

    const render = () => {
      tick++;
      if (tick % 4 === 0 && pulses.length < 50) {
        firePulse();
      }

      ctx.clearRect(0, 0, width, height);

      const center_x = width / 2;
      const center_y = height / 2;

      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const centerGlow = ctx.createRadialGradient(center_x, center_y, 20, center_x, center_y, maxCoreRadius * 1.9);
      centerGlow.addColorStop(0, "rgba(125, 211, 252, 0.20)");
      centerGlow.addColorStop(0.35, "rgba(96, 165, 250, 0.14)");
      centerGlow.addColorStop(0.7, "rgba(167, 139, 250, 0.10)");
      centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = centerGlow;
      ctx.beginPath();
      ctx.arc(center_x, center_y, maxCoreRadius * 1.9, 0, Math.PI * 2);
      ctx.fill();

      const connectDist = 90 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.45;
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = (1 - dist / connectDist) * 1.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.prog += pulse.speed;

        const n1 = nodes[pulse.from];
        const n2 = nodes[pulse.to];

        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * pulse.prog;
          const py = n1.y + (n2.y - n1.y) * pulse.prog;

          ctx.fillStyle = pulse.color;
          ctx.shadowBlur = 18 * dpr;
          ctx.shadowColor = pulse.color;
          ctx.beginPath();
          ctx.arc(px, py, 4.5 * dpr, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (pulse.prog >= 1) pulses.splice(p, 1);
      }

      nodes.forEach((n) => {
        n.angle += n.speed;

        const baseX = center_x + Math.cos(n.angle) * n.distFromCenter;
        const baseY = center_y + Math.sin(n.angle) * (n.distFromCenter * 0.82);
        n.baseX = baseX;
        n.baseY = baseY;

        let x = baseX;
        let y = baseY;

        if (mouse.active) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.hypot(dx, dy) || 1;
          const influenceRadius = 180 * dpr;

          if (dist < influenceRadius) {
            const pull = (1 - dist / influenceRadius) * 0.9;
            x += dx * pull * 0.55;
            y += dy * pull * 0.55;

            if (dist < 42 * dpr) {
              const repel = (1 - dist / (42 * dpr)) * 10 * dpr;
              x -= (dx / dist) * repel;
              y -= (dy / dist) * repel;
            }
          }
        }

        n.x = x;
        n.y = y;

        ctx.fillStyle = n.color + "4d";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 3.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = n.color;
        ctx.shadowBlur = 18 * dpr;
        ctx.shadowColor = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 1.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative mx-auto flex h-[clamp(320px,72vw,620px)] w-full max-w-[820px] items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
    </div>
  );
}