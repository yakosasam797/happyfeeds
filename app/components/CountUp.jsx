"use client";

import { useState, useEffect, useRef } from "react";

/**
 * CountUp — animates a number from 0 to `end` when it scrolls into view.
 * Supports suffixes like "+" and formats like "20+", "100+", "500", "3".
 */
export default function CountUp({ value, duration = 2000, className }) {
  /* Parse numeric part and suffix */
  const match = String(value).match(/^(\d+)(.*)$/);
  const end = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  /* Intersection Observer — trigger once when element is 20% visible */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  /* Animate from 0 → end using easeOutExpo */
  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let raf;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.round(easedProgress * end));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
