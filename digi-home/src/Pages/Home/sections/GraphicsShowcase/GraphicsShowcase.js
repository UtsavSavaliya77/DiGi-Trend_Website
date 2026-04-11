import React from "react";
import Carousel3D from "../Carousel/Carousel3D.js";

export default function GraphicsShowcase() {
  return (
    <section
      id="design"
      className="graphics-showcase"
      aria-label="Graphics carousel section"
    >
      <div style={{ width: "100%" }}>
        <div className="graphics-showcase-inner">
          <p className="graphics-pill">Graphics</p>
          <h2 className="graphics-title">Design to Stare</h2>
          <p className="graphics-subtitle">
            We create the most stunning graphic designs for your social media,
            websites, branding, or literally anything. They are just mindblowing.
          </p>
        </div>

        <div className="carousel">
          <Carousel3D />
        </div>
      </div>
    </section>
  );
}