"use client";

import { useEffect, useRef } from "react";

export default function AiNeurons() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 4K High-Visibility Synaptic Network
    const nodeCount = 70;
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      pulse: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.1,
        vy: (Math.random() - 0.5) * 1.1,
        radius: Math.random() * 4 + 3,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Firing Action Potential Pulses
    const pulses: {
      from: number;
      to: number;
      prog: number;
      speed: number;
    }[] = [];

    const fireSynapse = () => {
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      pulses.push({
        from,
        to,
        prog: 0,
        speed: Math.random() * 0.025 + 0.015,
      });
    };

    let tick = 0;

    const render = () => {
      tick++;
      if (tick % 10 === 0 && pulses.length < 40) {
        fireSynapse();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw High-Contrast Axon Dendrites
      const maxDist = 200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.7;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = (1 - dist / maxDist) * 2.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Firing Electrical Action Potentials (Glowing white energy balls)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.prog += pulse.speed;

        const n1 = nodes[pulse.from];
        const n2 = nodes[pulse.to];

        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * pulse.prog;
          const py = n1.y + (n2.y - n1.y) * pulse.prog;

          ctx.fillStyle = "#ffffff";
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#ffffff";
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (pulse.prog >= 1) pulses.splice(p, 1);
      }

      // 3. Draw Synaptic Neuron Bodies (Soma)
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        n.pulse += 0.04;
        const currentR = n.radius + Math.sin(n.pulse) * 1.5;

        // Radiant Outer Glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, currentR * 3);
        grad.addColorStop(0, "rgba(255, 255, 255, 1)");
        grad.addColorStop(0.4, "rgba(255, 220, 150, 0.7)");
        grad.addColorStop(1, "rgba(255, 100, 0, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR * 3, 0, Math.PI * 2);
        ctx.fill();

        // White-Hot Center
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(n.x, n.y, currentR, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}