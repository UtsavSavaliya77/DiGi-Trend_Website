// ClarioHeroSection.jsx
import React from "react";
import "./clario.css";

export default function clario() {
  return (
    <section className="clario-section">
      <div className="clario-hero">
        <div className="hero-center">
          <h1 className="hero-title">
            Marketing Made Simple.
            <br />
            From Clicks to Loyal <span>Customers</span>
          </h1>

          <p className="hero-description">
            An all-in-one marketing platform that helps you attract, convert,
            <br />
            and retain customers without juggling multiple tools.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Book a Call</button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="mid">
          <div className="stat-card stat-card-left">
            <div className="followers-head">
              <h3>Followers</h3>
              <div className="followers-legend">
                <span><i className="dot green"></i>Income</span>
                <span><i className="dot red"></i>Outcome</span>
              </div>
            </div>

            <div className="followers-chart">
              <div className="chart-lines"></div>
              <svg viewBox="0 0 280 160" className="chart-svg" preserveAspectRatio="none">
                <path d="M0,105 C35,85 55,88 82,95 C118,104 145,120 171,116 C206,110 236,78 280,42" fill="none" stroke="#18c43b" strokeWidth="3.2" strokeLinecap="round" />
                <path d="M0,70 C42,66 70,75 103,94 C134,112 154,116 184,100 C216,84 240,88 280,118" fill="none" stroke="#e55555" strokeWidth="3.2" strokeLinecap="round" />
                <line x1="222" y1="28" x2="222" y2="126" stroke="#b7c7d3" strokeDasharray="4 5" strokeWidth="2" />
                <circle cx="222" cy="90" r="6" fill="#ef4f4f" />
              </svg>
              <div className="x-axis">
                <span>200</span>
                <span>1000</span>
                <span>2000</span>
                <span>5000</span>
              </div>
            </div>
          </div>

          <div className="mini-stat mini-stat-top">
            <div className="mini-stat-graph green-graph">
              <svg viewBox="0 0 90 40">
                <path d="M4,30 L18,22 L28,6 L42,18 L56,11 L68,29 L82,20" fill="none" stroke="#16c53a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4>123</h4>
              <span className="mini-growth">+43.99%</span>
              <p>Comments received</p>
            </div>
          </div>

          <div className="mini-stat mini-stat-bottom">
            <div className="mini-stat-graph purple-graph">
              <svg viewBox="0 0 90 40">
                <path d="M5,9 L18,28 L30,14 L42,25 L55,12 L68,18 L82,9" fill="none" stroke="#8a67dc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4>635</h4>
              <span className="mini-growth">+21.01%</span>
              <p>Average Likes</p>
            </div>
          </div>

          <div className="tags-stack">
            <span className="tag marketing">marketing</span>
            <span className="tag social">social media</span>
            <span className="tag seo">SEO</span>
            <span className="tag email">email marketing</span>
            <span className="tag conversion">conversions</span>
            <span className="tag ads">ads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
