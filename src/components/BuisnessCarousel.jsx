
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { buisnesses } from "../data/buisnesses";
import CarouselPlatform from "./CarouselPlatform";

const ROTATION_SECONDS = 12;

export default function BusinessCarousel() {
  const reduceMotion = useReducedMotion();
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let frame;
    let previousTime;

    const animate = (time) => {
      if (previousTime !== undefined) {
        const delta = Math.min(time - previousTime, 50);
        setAngle((previous) =>
          (previous + (delta / 1000) * (360 / ROTATION_SECONDS)) % 360
        );
      }

      previousTime = time;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  const cards = buisnesses.map((business, index) => {
    const theta =
      (angle + index * (360 / buisnesses.length)) *
      (Math.PI / 180);

    // Front is at theta = 0
    const depth = Math.cos(theta);
    const horizontal = Math.sin(theta);

const x = horizontal * 220;
const y = (1 - depth) * -8;
const scale = 0.55 + ((depth + 1) / 2) * 0.85;
const rotateY = -horizontal * 38;

    return {
      business,
      x,
      y,
      scale,
      rotateY,
      depth,
    };
  });

  return (
    <div className="relative mx-auto flex h-[430px] w-full max-w-[650px] items-center justify-center overflow-hidden [perspective:1100px]">

      {/* Background glow */}
    <div
  className="
    pointer-events-none
    absolute
    h-[350px]
    w-[550px]
    rounded-full
    bg-gradient-to-r
    from-purple-300/40
    via-fuchsia-300/50
    to-purple-400/40
    blur-[65px]
  "
/>

{/* 3D glowing platform */}
<CarouselPlatform />



      {/* Business cards */}
      {cards.map(
        ({ business, x, y, scale, rotateY, depth }) => (
          <div
            key={business.id}
           className="absolute left-1/2 top-[40%] h-[230px] w-[205px] will-change-transform"
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
              className="h-full overflow-hidden rounded-[24px] border-[3px] bg-white"
              style={{
                borderColor:
                
  depth > 0.7 ? "#FFC2ED" : "#D8A4FF",
              
                 boxShadow:
  depth > 0.7
    ? "0 0 22px rgba(255,125,230,0.7), 0 20px 45px rgba(109,0,245,0.35)"
    : "0 8px 25px rgba(109,0,245,0.25)",
              }}
            >
              {business.image ? (
                <img
                  src={business.image}
                  alt={business.name}
                  className="h-[75%] w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-[75%] items-center justify-center text-6xl"
                  style={{
                    background: `linear-gradient(145deg, white, ${business.color}30)`,
                  }}
                >
                  {business.icon}
                </div>
              )}

              <div className="flex h-[25%] items-center justify-center bg-white px-2 text-center">
                <h3 className="text-sm font-extrabold text-ankive-navy">
                  {business.name}
                </h3>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
