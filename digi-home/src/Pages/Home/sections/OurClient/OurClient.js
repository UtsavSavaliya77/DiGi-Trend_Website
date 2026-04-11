import React from "react";
import "./OurClient.css"
import logo1 from "../../../../assets/Logo/google.png";
import logo2 from "../../../../assets/Logo/bitshares.png";
import logo3 from "../../../../assets/Logo/centos.png";
import logo4 from "../../../../assets/Logo/DiGi Logo.png";
import logo5 from "../../../../assets/Logo/figma.png";
import logo6 from "../../../../assets/Logo/gmail.png";

// Use ORIGINAL colored PNG/SVG logos only
const clients = [
  { name: "Google", logo: logo1 , description: "Google Lens"},
  { name: "Bitshares", logo: logo2 , description: "Google Lens"},
  { name: "Centos", logo: logo3 , description: "Google Lens"},
  { name: "DiGi Trend", logo: logo4 , description: "Google Lens"},
  { name: "Figma", logo: logo5 , description: "Google Lens"},
  { name: "Gmail", logo: logo6 , description: "Google Lens"},
  { name: "Google", logo: logo1 , description: "Google Lens"},
  { name: "Bitshares", logo: logo2 , description: "Google Lens"},
  { name: "Centos", logo: logo3 , description: "Google Lens"},
  { name: "DiGi Trend", logo: logo4 , description: "Google Lens"},
  { name: "Figma", logo: logo5 , description: "Google Lens"},
  { name: "Gmail", logo: logo6 , description: "Google Lens"},
  { name: "Google", logo: logo1 , description: "Google Lens"},
  { name: "Bitshares", logo: logo2 , description: "Google Lens"},
  { name: "Centos", logo: logo3 , description: "Google Lens"},
  { name: "DiGi Trend", logo: logo4 , description: "Google Lens"},
  { name: "Figma", logo: logo5 , description: "Google Lens"},
  { name: "Gmail", logo: logo6 , description: "Google Lens"},

];

export default function OurClientsSection() {
    return (
        <section className="clients-section">
          <div className="clients-container">
            <div className="clients-header">
              <h2>Our Clients</h2>
              <p>We are proud of contributing to the success of leading brands.</p>
            </div>
    
            <div className="clients-grid">
              {clients.map((client, index) => (
                <div className="client-card" key={index}>
                  <div className="client-card-inner">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="client-logo"
                    />
                    <span className="client-name">{client.name}</span>
                    <p className="client-description">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
