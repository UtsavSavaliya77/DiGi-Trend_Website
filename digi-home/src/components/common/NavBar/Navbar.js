import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/Logo/DiGi Logo.png";
import Button from "../GetInTouch/Getintouch";

function Navbar1() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    const handleNavLinkClick = () => {
      setIsNavOpen(false);
    };
  
    // 🔥 scroll detection
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
        <header className="siteHeader">
          <nav className={`siteNav ${isScrolled ? "scrolled" : ""}`}>
            <a className="siteNav-brand" href="#teaser">
              <img src={logo} alt="Logo" className="nav-logo" />
            </a>
  
            <button
              className={`siteNav-toggle ${isNavOpen ? "is-open" : ""}`}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
  
            <div className={`siteNav-links ${isNavOpen ? "is-open" : ""}`}>
              <a className="siteNav-link animated-underline" href="#teaser" onClick={handleNavLinkClick}>Home</a>
              <a className="siteNav-link animated-underline" href="#magicteal" onClick={handleNavLinkClick}>About Us</a>
              <a className="siteNav-link animated-underline" href="#saleshero" onClick={handleNavLinkClick}>Services</a>
              <a className="siteNav-link animated-underline" href="#company" onClick={handleNavLinkClick}>Blog</a>
              <a className="siteNav-link animated-underline" href="#faq" onClick={handleNavLinkClick}>Contact Us</a>
  
              <div className="siteNav-mobile-cta">
                <Button />
              </div>
            </div>
  
            <div className="siteNav-desktop-cta">
              <Button />
            </div>
          </nav>
        </header>
    );
  }

export default Navbar1;