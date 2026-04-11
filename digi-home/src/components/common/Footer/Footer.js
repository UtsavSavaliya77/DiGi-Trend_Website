import React from "react";
import "./Footer.css";
import insta from "../../../assets/images/instagram.svg";
import linkedin from "../../../assets/images/linkedin.svg";

export default function Footer() {
  return (
    <footer className="ft-footer">
    <div className="ft-circle" />

    <div className="ft-container">
      <div className="ft-top">
        <div className="ft-left">
          <p className="ft-label">CONTACT</p>

          <a href="mailto:hello@digitrend.com" className="ft-mail">
            hello@digitrend.com
          </a>

          <a href="tel:+919428163116" className="ft-phone">
            +91 94281 63116
          </a>
        </div>

        <div className="ft-center">
          <h2>Got a project? Want to collaborate?</h2>
          <button type="button">Discuss your project</button>
        </div>

        <div className="ft-right">
          <p className="ft-address-title">711-SILVER HIGHTS</p>
          <p>near mavdi chowk</p>
          <p>Rajkot-360004</p>
        </div>
      </div>

      <div className="ft-middle">
        <p>© 2026 DigiTrend Solution. All rights reserved.</p>

        <a href="/">Terms &amp; Conditions</a>

        <div className="ft-socials">
          <a href="/" aria-label="Instagram">
          <img src={insta} alt="intagram"/>
          </a>
          
          <a href="/" aria-label="LinkedIn">
          <img src={linkedin} alt="LinkedIn"/>
          </a>
        </div>
      </div>

      <div className="ft-bottom-wrap">
        <div className="ft-bottom-text">LET&apos;S WORK TOGETHER</div>
      </div>
    </div>
  </footer>
  );
}
