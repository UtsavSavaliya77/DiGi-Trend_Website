import React from "react";
import "../../WakeLanding.css";

export default function OurClient() {
  return (
    <div className="app">
      <h1 className="title">we listen</h1>

      <div className="testimonial-wrap">
        <div className="testimonial-tag">Suchitra Puthran Says...</div>

        <div className="testimonial-card">
          <div className="testimonial-bubble">
            <p>
              “Boundaryz didn’t just build us a website — they built an
              experience. Every scroll, every click felt like it belonged to our
              brand. No boring templates, no fluff — just clean, bold, custom
              work that actually converts. From the first wireframe to the final
              launch, the process was fast, chill, and sharp. Couldn’t have
              asked for a better team to bring Vanta Wolf online”
            </p>
          </div>

          <div className="testimonial-footer">
            <div className="logo-circle">
              <span>✦</span>
            </div>
            <p>Co-Founder, Vanta Wolf</p>
          </div>
        </div>
      </div>
    </div>
  );
}
