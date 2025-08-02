"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  component,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  mask = false,
  isBrand = false,
  className,
}: {
  component: React.ReactNode;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  mask?: boolean;
  isBrand?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);

  useEffect(() => {
    addAnimation();
    startHighlightCheck();
  }, []);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Highlight center item
  const startHighlightCheck = () => {
    const checkHighlight = () => {
      if (!containerRef.current || !scrollerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = null;
      let closestDistance = Infinity;

      Array.from(scrollerRef.current.children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== highlightIndex) {
        setHighlightIndex(closestIndex);
      }

      requestAnimationFrame(checkHighlight);
    };

    requestAnimationFrame(checkHighlight);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden ",
        mask &&
          "[mask-image:linear-gradient(to_right,transparent,white_45%,white_55%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 ",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {isBrand
          ? React.Children.map(component, (child, index) => (
              <li
                className={cn(
                  highlightIndex === index
                    ? "scale-90 md:scale-125 brightness-150"
                    : " scale-90 md:scale-100 brightness-90",
                  "transition-transform duration-500"
                )}
              >
                {child}
              </li>
            ))
          : component}
      </ul>
    </div>
  );
};
