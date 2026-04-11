import React from "react";
import Reviews from "./sections/Reviews/Reviews.js";
import OurClientSay from "./sections/OurClientSay/OurClientSay.js";
import FAQ from "./sections/Faq/Faq.js";
import Footer from "../../components/common/Footer/Footer.js";
import ServicesShowcase from "./sections/OurServices/ourservices.js";
import OurClientsSection from "./sections/OurClient/OurClient.js";
import Talk from "./sections/LetsTalk/letstalk.js";
import SpiralBrands from "./sections/SpiralMarquee/marquee.js";
import Clario from "./sections/Marketing/clario.js";
import OurSupport from "./sections/OurSupport/OurSupport.js";
import HeroTeaser from "./sections/Hero1/HeroTease.js";
import Benefits from "./sections/Benefits/Benefits.js";
import GraphicsShowcase from "./sections/GraphicsShowcase/GraphicsShowcase.js";
import SpiralGallery from "./sections/SpiralGallery/SpiralGallery.js";


import "./WakeLanding.css";

export default function WakeLanding() {
  return (
    <>
      <HeroTeaser />

      <section>
        <Clario />
      </section>

      <Benefits />

      <section className="marquee-section">
        <div className="logo-marquee-inner">
          <SpiralBrands />
        </div>
      </section>

      <GraphicsShowcase />

      <section
        id="technology"
        className="services-showcase"
        aria-label="Service showcase section"
      >
        <ServicesShowcase />
      </section>

      <SpiralGallery />

      <section id="reviewsection">
        <Reviews />
      </section>

      <Talk />
      <OurSupport />
      <OurClientsSection />

      <section id="ourclient" className="ourclient-section">
        <OurClientSay />
      </section>

      <section id="faq" className="faq-section">
        <FAQ />
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
}