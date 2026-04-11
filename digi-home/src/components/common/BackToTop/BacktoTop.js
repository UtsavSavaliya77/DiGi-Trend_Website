import React, { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Back to top"
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: 1000,
        width: "40px",
        height: "38px",
        borderRadius: "999px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",

        // Color change effect
        background: hover
          ? "linear-gradient(135deg, #2563eb,rgb(237, 58, 58))"
          : "#0f62fe",
        color: "#fff",

        // Optional little lift effect
        transform: hover ? "translateY(-2px) scale(1.04)" : "translateY(0) scale(1)",
        boxShadow: hover
          ? "0 10px 24px rgba(37, 99, 235, 0.35)"
          : "0 6px 18px rgba(0,0,0,0.2)",

        // Show only after scroll
        opacity: show ? 1 : 0,
        visibility: show ? "visible" : "hidden",
        pointerEvents: show ? "auto" : "none",

        transition:
          "opacity 0.25s ease, visibility 0.25s ease, background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Arrow animation wrapper */}
      <span
        style={{
          position: "relative",
          width: "20px",
          height: "20px",
          display: "block",
          overflow: "hidden",
        }}
      >
        {/* Arrow 1 (moves up on hover) */}
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            lineHeight: "20px",
            fontSize: "20px",
            transform: hover ? "translateY(-24px)" : "translateY(0)",
            opacity: hover ? 0 : 1,
            transition: "transform 0.25s ease, opacity 0.25s ease",
          }}
        >
          ↑
        </span>

        {/* Arrow 2 (comes from bottom on hover) */}
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            lineHeight: "20px",
            fontSize: "20px",
            transform: hover ? "translateY(0)" : "translateY(24px)",
            opacity: hover ? 1 : 0,
            transition: "transform 0.25s ease, opacity 0.25s ease",
          }}
        >
          ↑
        </span>
      </span>
    </button>
  );
}