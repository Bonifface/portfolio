"use client";

import { useEffect, useState, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import cn from "./Loader.module.scss";

interface LogoProps {
  isLoading: boolean;
  setLoading: (value: boolean) => void;
}

export const Loader: React.FC<LogoProps> = ({ isLoading, setLoading }) => {
  const hasAnimatedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  const runAnimation = () => {
    const anim = anime.timeline({
      loop: true,
      direction: "alternate",
    });

    anim
      .add({
        targets: "#hexagon path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 1500,
        delay: 300,
      })
      .add({
        targets: "#hexagon #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#hexagon",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      });

    setTimeout(() => setLoading(false), 3300);
  };

  useEffect(() => {
    if (isLoading) {
      if (!hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        runAnimation();
      }

      const timeout = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setIsMounted(false);
    }
  }, [isLoading, setLoading]);

  if (!isLoading) return null;

  return (
    <div className={cn.loaderContainer} style={{ opacity: isMounted ? 1 : 0 }}>
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className={cn.svgWrapper}
      >
        <g>
          <g
            id="B"
            transform="translate(36, 33)"
            fill="#64FFDA"
            style={{ opacity: 0 }}
          >
            <text
              fontSize="50"
              fontWeight="400"
              letterSpacing="4.2"
              fontFamily="system-ui, Calibre-Medium, Calibre, sans-serif"
            >
              <tspan x="0.14" y="33">
                B
              </tspan>
            </text>
          </g>
          <path
            stroke="#64FFDA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};
