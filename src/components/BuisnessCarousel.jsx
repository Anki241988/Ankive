import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { buisnesses } from "../data/buisnesses";
import CarouselPlatform from "./CarouselPlatform";

const ROTATION_SECONDS = 12;

const STAGE_WIDTH = 650;
const STAGE_HEIGHT = 430;

export default function BuisnessCarousel() {
  const reduceMotion = useReducedMotion();

  const containerRef = useRef(null);

  const [angle, setAngle] = useState(0);
  const [containerWidth, setContainerWidth] = useState(650);

  // Observe the actual available width
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setContainerWidth(width);
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Continuous carousel rotation
  useEffect(() => {
    if (reduceMotion) return;

    let frame;
    let previousTime;

    const animate = (time) => {
      if (previousTime !== undefined) {
        const delta = Math.min(time - previousTime, 50);

        setAngle(
          (previous) =>
            (previous +
              (delta / 1000) * (360 / ROTATION_SECONDS)) %
            360
        );
      }

      previousTime = time;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  // Scale the whole stage based on available width
  const stageScale = Math.min(
    1,
    Math.max(0, containerWidth / STAGE_WIDTH)
  );

  const cards = buisnesses.map((buisness, index) => {
    const theta =
      (angle + index * (360 / buisnesses.length)) *
      (Math.PI / 180);

    const depth = Math.cos(theta);
    const horizontal = Math.sin(theta);

    const x = horizontal * 220;
    const y = (1 - depth) * -8;
    const scale = 0.55 + ((depth + 1) / 2) * 0.85;
    const rotateY = -horizontal * 38;

    return {
      buisness,
      x,
      y,
      scale,
      rotateY,
      depth,
    };
  });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[650px] overflow-hidden"
      style={{
        height: STAGE_HEIGHT * stageScale,
      }}
    >
      {/* Center the scaled carousel */}
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
          transform: `translateX(-50%) scale(${stageScale})`,
          transformOrigin: "top center",
        }}
      >
        {/* Main carousel stage */}
        <div className="relative h-full w-full [perspective:1100px]">

          {/* Background glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gradient-to-r
              from-purple-300/40
              via-fuchsia-300/50
              to-purple-400/40
              blur-[65px]
            "
          />

          {/* Glowing 3D platform */}
          <CarouselPlatform />

          {/* Rotating buisness cards */}
          {cards.map(
            ({
              buisness,
              x,
              y,
              scale,
              rotateY,
              depth,
            }) => (
              <div
                key={buisness.id}
                className="
                  absolute
                  left-1/2
                  top-[40%]
                  h-[230px]
                  w-[205px]
                  will-change-transform
                "
                style={{
                  zIndex: Math.round((depth + 1) * 100),

                  transform: `
                    translate(-50%, -50%)
                    translate3d(${x}px, ${y}px, 0)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                }}
              >
                <div
                  className="
                    h-full
                    overflow-hidden
                    rounded-[24px]
                    border-[3px]
                    bg-white
                  "
                  style={{
                    borderColor:
                      depth > 0.7
                        ? "#FFC2ED"
                        : "#D8A4FF",

                    boxShadow:
                      depth > 0.7
                        ? "0 0 22px rgba(255,125,230,0.7), 0 20px 45px rgba(109,0,245,0.35)"
                        : "0 8px 25px rgba(109,0,245,0.25)",
                  }}
                >
                  {/* Buisness image or fallback icon */}
                  {buisness.image ? (
                    <img
                      src={buisness.image}
                      alt={buisness.name}
                      className="h-[75%] w-full object-cover"
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-[75%]
                        items-center
                        justify-center
                        text-6xl
                      "
                      style={{
                        background: `linear-gradient(145deg, white, ${buisness.color}30)`,
                      }}
                    >
                      {buisness.icon}
                    </div>
                  )}

                  {/* Buisness name */}
                  <div
                    className="
                      flex
                      h-[25%]
                      items-center
                      justify-center
                      bg-white
                      px-2
                      text-center
                    "
                  >
                    <h3 className="text-sm font-extrabold text-ankive-navy">
                      {buisness.name}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}

        </div>
      </div>
    </div>
  );
}