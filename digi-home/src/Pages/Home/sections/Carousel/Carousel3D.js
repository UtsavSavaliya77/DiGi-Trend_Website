import React, { useEffect, useRef, useState } from "react";
import logo11 from "../../../../assets/images/a.jpg";
import logo12 from "../../../../assets/images/b.jpg";
import logo13 from "../../../../assets/images/c.jpg";
import logo14 from "../../../../assets/images/d.jpg";
import logo15 from "../../../../assets/images/e.jpg";
import logo16 from "../../../../assets/images/f.jpg";
import logo17 from "../../../../assets/images/g.jpg";
import logo18 from "../../../../assets/images/h.jpg";
import logo19 from "../../../../assets/images/i.jpg";

const cards = [
  { id: 1, image: logo11 },
  { id: 2, image: logo12 },
  { id: 3, image: logo13 },
  { id: 4, image: logo14 },
  { id: 5, image: logo15 },
  { id: 6, image: logo16 },
  { id: 7, image: logo17 },
  { id: 8, image: logo18 },
  { id: 9, image: logo19 },
];

const TOTAL = cards.length;
const ANGLE_STEP = 14;
const ARC_RADIUS = 900;
const CARD_W = 200;
const CARD_H = 260;

function CardWithReflection({ card }) {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
      }}
    >
      <img
        src={card.image}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default function Carousel3D() {
  const [rotation, setRotation] = useState(0);
  const dragging = useRef(false);
  const rotationRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  useEffect(() => {
    const AUTO_SPEED = 0.0005;

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!dragging.current) {
        const next = rotationRef.current + delta * AUTO_SPEED;
        rotationRef.current = next;
        setRotation(next);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const getStyle = (cardIdx) => {
    let offset = cardIdx - rotation;
    while (offset > TOTAL / 2) offset -= TOTAL;
    while (offset < -TOTAL / 2) offset += TOTAL;

    const absOff = Math.abs(offset);

    if (absOff > 5) {
      return {
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      };
    }

    const angleDeg = offset * ANGLE_STEP;
    const angleRad = (angleDeg * Math.PI) / 180;

    const translateX = ARC_RADIUS * Math.sin(angleRad);
    const translateYFinal = ARC_RADIUS * (1 - Math.cos(angleRad)) * 0.2;
    const rotateY = -angleDeg * 1.6;
    const zIndex = Math.round(100 - absOff * 20);

    return {
      transform: `translateX(${translateX}px) translateY(${translateYFinal}px) rotateY(${rotateY}deg) scale(1)`,
      zIndex,
      opacity: 0.9,
      visibility: "visible",
      pointerEvents: "auto",
      willChange: "transform",
    };
  };

  return (
    <div
      className="relative w-full flex justify-center select-none"
      style={{ height: 480, overflow: "hidden" }}
    >
      <div
        style={{
          perspective: "1700px",
          perspectiveOrigin: "50% 0%",
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            style={{
              position: "absolute",
              transformStyle: "preserve-3d",
              ...getStyle(i),
            }}
          >
            <CardWithReflection card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}