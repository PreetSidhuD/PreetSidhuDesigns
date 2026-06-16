"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  end,
  suffix = "+",
  label,
  sub,
}: {
  end: number;
  suffix?: string;
  label: string;
  sub: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        <span className="text-gradient">{count}</span>
        <span className="text-gradient">{suffix}</span>
      </div>
      <p className="mt-2 text-base font-bold text-white">{label}</p>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{sub}</p>
    </div>
  );
}
