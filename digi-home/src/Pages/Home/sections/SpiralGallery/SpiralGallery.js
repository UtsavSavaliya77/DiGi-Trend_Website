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

export default function SpiralGallery() {
  const ref = useRef(null);
  const [step, setStep] = useState(0);
  const targetStepRef = useRef(0);
  const rafRef = useRef(null);

  const images = [
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
  ];

  useEffect(() => {
    const animate = () => {
      setStep((prev) => prev + (targetStepRef.current - prev) * 0.2);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const sectionHeight = ref.current.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0.7), sectionHeight);
      const progress = sectionHeight > 1 ? scrolled / sectionHeight : 0;

      targetStepRef.current = progress * (images.length - 1);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [images.length]);

  return (
    <section
      ref={ref}
      style={{
        height: "280vh",
        position: "relative",
        background: "white",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          perspective: "1400px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((src, i) => {
            const offset = i - step;
            const abs = Math.abs(offset) * 1.1;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 340,
                  height: 230,
                  transform: `
                    translate(-50%, -50%)
                    translateX(${offset * 330}px)
                    translateY(${offset * 170}px)
                    translateZ(${-abs * 100}px)
                    rotateY(${offset * 45}deg)
                  `,
                  opacity: abs > 2 ? 0 : 1,
                  transition: "all 0s ease",
                  borderRadius: 2,
                  overflow: "hidden",
                  background: "#111",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}