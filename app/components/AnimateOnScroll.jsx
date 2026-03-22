"use client";

import { useEffect, useRef } from "react";

export default function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
    threshold = 0.15,
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`animate-on-scroll ${delay ? `delay-${delay}` : ""} ${className}`}
        >
            {children}
        </div>
    );
}
