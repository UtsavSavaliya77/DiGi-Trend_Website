import React from "react";

export default function Benefits() {
  return (
    <section className="benefits" aria-label="Service benefits section" id="company">
      <div className="benefits-grid">
        <article className="benefit-card">
          <div className="benefit-illustration benefit-illustration--delivery" aria-hidden>
            <span className="benefit-doodle">⏱</span>
            <span className="benefit-doodle benefit-doodle--accent">✦</span>
          </div>
          <h3 className="benefit-title">Fast &amp; Reliable Delivery</h3>
          <p className="benefit-text">
            Creativity moves fast here- your deadline doesn&apos;t stand a chance.
            We deliver at turbo speed, powered by fresh ideas
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-illustration benefit-illustration--pricing" aria-hidden>
            <span className="benefit-doodle">💵</span>
            <span className="benefit-doodle benefit-doodle--accent">✓</span>
          </div>
          <h3 className="benefit-title">Clear, No-Surprise Pricing</h3>
          <p className="benefit-text">
            One plan, one price, no sneaky fees. Pay by milestone, get unlimited
            changes in design. What you see is what you pay.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-illustration benefit-illustration--allinone" aria-hidden>
            <span className="benefit-doodle">🧰</span>
            <span className="benefit-doodle benefit-doodle--accent">♫</span>
          </div>
          <h3 className="benefit-title">Everything Under One Roof</h3>
          <p className="benefit-text">
            Branding, design, websites, research-we&apos;ve got it all covered. From
            first wireframe to launch, you only need us.
          </p>
        </article>
      </div>
    </section>
  );
}