"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Throttle function untuk optimize performance
function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null = null;
    let lastExecTime = 0;

    return function (this: any, ...args: Parameters<T>) {
        const currentTime = Date.now();

        if (currentTime - lastExecTime < delay) {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastExecTime = currentTime;
                func.apply(this, args);
            }, delay);
        } else {
            lastExecTime = currentTime;
            func.apply(this, args);
        }
    };
}

export default function EyeTracker() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const eyeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Optimize mouse tracking dengan throttling
    const updateMousePosition = useCallback((e: MouseEvent) => {
        if (eyeRef.current) {
            const rect = eyeRef.current.getBoundingClientRect();
            const eyeCenterX = rect.left + rect.width / 2;
            const eyeCenterY = rect.top + rect.height / 2;

            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            const distance = Math.min(8, Math.sqrt(Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 10);

            setMousePosition({
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
            });
        }
    }, []);

    // Throttled version - hanya update 60fps max
    const throttledMouseMove = useCallback(
        throttle(updateMousePosition, 16), // ~60fps
        [updateMousePosition]
    );

    // Intersection Observer untuk hanya track saat terlihat
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Hanya track mouse saat visible
    useEffect(() => {
        if (!isVisible) return;

        window.addEventListener('mousemove', throttledMouseMove);
        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
        };
    }, [isVisible, throttledMouseMove]);

    return (
        <div ref={containerRef} className="flex justify-center md:justify-start items-center gap-2 flex-shrink-0 mb-2 md:mb-0">
            {/* First Eye */}
            <div ref={eyeRef} className="relative w-6 h-6">
                {/* Eye outline */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 dark:text-gray-500"
                    suppressHydrationWarning
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>
                {/* Pupil that follows cursor */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full"
                    style={{
                        x: mousePosition.x - 4,
                        y: mousePosition.y - 4,
                        willChange: 'transform'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                />
            </div>
            {/* Second Eye */}
            <div className="relative w-6 h-6">
                {/* Eye outline */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-400 dark:text-gray-500"
                    suppressHydrationWarning
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>
                {/* Pupil that follows cursor */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-700 dark:bg-gray-300 rounded-full"
                    style={{
                        x: mousePosition.x - 4,
                        y: mousePosition.y - 4,
                        willChange: 'transform'
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                />
            </div>
        </div>
    );
}
