"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState<"default" | "click" | "view">("default")
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    let lastExecution = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastExecution < throttleDelay) return;
      lastExecution = now;

      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = target.closest('button:not([disabled]), a:not([href="#"]), [role="button"], input, textarea, select');
      const isViewable = !isClickable && (
        target.closest('[data-cursor-view="true"]') ||
        target.tagName === 'IMG' ||
        target.closest('img') ||
        target.closest('[class*="card"]') ||
        target.closest('[class*="Card"]') ||
        target.closest('[class*="gallery"]')
      );

      if (isViewable) {
        setCursorVariant("view");
      } else if (isClickable) {
        setCursorVariant("click");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])

  if (!isDesktop) return null

  return (
    <>
      {/* Default Arrow Cursor */}
      {cursorVariant === "default" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:block"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            x: { type: "tween", duration: 0, ease: "linear" },
            y: { type: "tween", duration: 0, ease: "linear" },
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform -translate-x-1 -translate-y-1"
          >
            <path
              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
              fill="black"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}

      {/* Click Hand Cursor */}
      {cursorVariant === "click" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:block"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            x: { type: "tween", duration: 0, ease: "linear" },
            y: { type: "tween", duration: 0, ease: "linear" },
            scale: { duration: 0.15 },
            opacity: { duration: 0.15 },
          }}
        >
          <div className="transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/Rotation Prank macOS Animated--pointer--SweezyCursors.png"
              alt="Pointer cursor"
              width={24}
              height={24}
              className="drop-shadow-lg"
              unoptimized
              style={{ objectFit: "contain" }}
            />
          </div>
        </motion.div>
      )}

      {/* View Button Cursor - Arrow + Button Pill */}
      {cursorVariant === "view" && (
        <>
          {/* Arrow cursor at mouse position */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:block"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              x: { type: "tween", duration: 0, ease: "linear" },
              y: { type: "tween", duration: 0, ease: "linear" },
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform -translate-x-1 -translate-y-1 drop-shadow-sm"
            >
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="white"
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Button pill to the right and slightly below arrow */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:flex items-center justify-center"
            style={{
              x: mousePosition.x + 16,
              y: mousePosition.y + 8,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              x: { type: "tween", duration: 0, ease: "linear" },
              y: { type: "tween", duration: 0, ease: "linear" },
              scale: { duration: 0.15 },
              opacity: { duration: 0.15 },
            }}
          >
            <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-lg">
              View Detail
            </div>
          </motion.div>
        </>
      )}
    </>
  )
}
