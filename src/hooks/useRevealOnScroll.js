// src/hooks/useRevealOnScroll.js
import { useEffect } from "react";



export default function useRevealOnScroll(
    elements = [],  // array of { selector, start }
    threshold = 0.1
) {
    useEffect(() => {
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold }
        );

        const observed = [];

        elements.forEach(({ selector, start }) => {
            if (!selector) return;

            const el = document.querySelector(selector);
            if (!el) return;

            // set dynamic CSS var
            if (start !== undefined) {
                el.style.setProperty("--start-position", start);
            }

            observer.observe(el);
            observed.push(el);
        });

        return () => {
            observed.forEach((el) => observer.unobserve(el));
        };
    }, [JSON.stringify(elements), threshold]);
}
