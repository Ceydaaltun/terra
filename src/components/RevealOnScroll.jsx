'use client'

import React, { useEffect, useRef, useState } from 'react';

// Throttle function to limit the rate at which the scroll handler is executed
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}

export default function RevealOnScroll({ children, direction = 'left', waitForPrevious = 0 }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const ANIMATION_DURATION = 1000;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add initial delay for elements that need to wait
                    setTimeout(() => {
                        setIsVisible(true);
                        observer.disconnect();
                    }, waitForPrevious * ANIMATION_DURATION);
                }
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '-80px 0px'
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [waitForPrevious]);

    const classes = `transition-all duration-[1000ms] ease-out
        ${isVisible 
            ? 'opacity-100 translate-x-0' 
            : direction === 'left'
                ? 'opacity-0 -translate-x-20'
                : 'opacity-0 translate-x-20'}`;

    return (
        <>
            {React.Children.map(children, (child, index) => (
                <div
                    ref={index === 0 ? ref : undefined}
                    key={index}
                    className={classes}
                    style={{ transitionDelay: `${index * ANIMATION_DURATION}ms` }}
                >
                    {child}
                </div>
            ))}
        </>
    );
}

