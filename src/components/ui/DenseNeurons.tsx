"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  angle: number;
  speed: number;
  distFromCenter: number;
  radius: number;
  color: string;
};

type Pulse = {
  from: number;
  to: number;
  prog: number;
  speed: number;
  color: string;
};

const NODE_COLORS = ["#2b5cff", "#4f6bff", "#0ea5e9", "#6366f1", "#3b82f6", "#0891b2"];

export default function DenseNeurons({
  className = "relative mx-auto flex h-[clamp(320px,72vw,620px)] w-full max-w-[820px] items-center justify-center",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = canvas.offsetWidth * dpr);
    let height = (canvas.height = canvas.offsetHeight * dpr);
    let animId = 0;
    let visible = true;

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2, active: false };

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * dpr;
      height = canvas.height = canvas.offsetHeight * dpr;
      mouse.x = mouse.targetX = width / 2;
      mouse.y = mouse.targetY = height / 2;
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

    const nodeCount = 150;
    const maxCoreRadius = Math.min(230 * dpr, width * 0.44, height * 0.38);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: width / 2,
        y: height / 2,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
        distFromCenter: Math.sqrt(Math.random()) * maxCoreRadius,
        radius: (Math.random() * 2.2 + 1.4) * dpr,
        color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
      });
    }

    const pulses: Pulse[] = [];

    const firePulse = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      pulses.push({
        from,
        to,
        prog: 0,
        speed: Math.random() * 0.04 + 0.02,
        color: Math.random() > 0.4 ? "#2b5cff" : "#0ea5e9",
      });
    };

    let tick = 0;

    const render = () => {
      if (!visible) {
        animId = 0;
        return;
      }

      tick++;
      if (tick % 5 === 0 && pulses.length < 40) firePulse();

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, maxCoreRadius * 1.9);
      glow.addColorStop(0, "rgba(43, 92, 255, 0.10)");
      glow.addColorStop(0.45, "rgba(43, 92, 255, 0.05)");
      glow.addColorStop(1, "rgba(43, 92, 255, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, maxCoreRadius * 1.9, 0, Math.PI * 2);
      ctx.fill();

      // Move nodes first so links and pulses use this frame's positions.
      for (const n of nodes) {
        n.angle += n.speed;
        let x = cx + Math.cos(n.angle) * n.distFromCenter;
        let y = cy + Math.sin(n.angle) * (n.distFromCenter * 0.82);

        if (mouse.active) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.hypot(dx, dy) || 1;
          const influence = 180 * dpr;

          if (dist < influence) {
            const pull = (1 - dist / influence) * 0.9;
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
      }

      const connectDist = 90 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectDist) {
            const strength = 1 - dist / connectDist;
            ctx.strokeStyle = `rgba(43, 92, 255, ${strength * 0.32})`;
            ctx.lineWidth = strength * 1.4 * dpr;
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

        const a = nodes[pulse.from];
        const b = nodes[pulse.to];
        const px = a.x + (b.x - a.x) * pulse.prog;
        const py = a.y + (b.y - a.y) * pulse.prog;

        ctx.fillStyle = pulse.color;
        ctx.shadowBlur = 12 * dpr;
        ctx.shadowColor = pulse.color;
        ctx.beginPath();
        ctx.arc(px, py, 3.6 * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (pulse.prog >= 1) pulses.splice(p, 1);
      }

      for (const n of nodes) {
        ctx.fillStyle = n.color + "26";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) animId = requestAnimationFrame(render);
    };

    // Pause drawing while the canvas is off screen.
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && animId === 0 && !reduceMotion) animId = requestAnimationFrame(render);
    });
    observer.observe(canvas);

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={className}>
      <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full cursor-crosshair" />
    </div>
  );
}
