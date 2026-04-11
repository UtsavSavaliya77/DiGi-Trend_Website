import React, { useState } from "react";
import "./letstalk.css";
import instaIcon from "../../../../assets/images/instagram.svg";
import twitterIcon from "../../../../assets/images/twitter.svg";
import facebookIcon from "../../../../assets/images/facebook.svg";

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

export default function Talk() {
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitStatus("Message sent successfully");
      setTimeout(() => {
        setFormData(initialFormData);
        setSubmitStatus("");
      }, 3000);
    } catch (error) {
      setSubmitStatus(error.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lt-section">
      <div className="lt-wrapper">
        <div className="lt-card">
          <svg
            className="absolute inset-0 w-full h-full shad"
            viewBox="-4 -4 408 753"
            preserveAspectRatio="none"
          >
            <path className="pat"></path>
          </svg>

          <div className="lt-grid">
            <div>
              <h2 className="lt-title">Let&apos;s talk</h2>
              <p className="lt-desc">
                To request a quote or want to meet up for coffee, contact us directly or
                fill out the form and we will get back to you promptly.
              </p>

              <form className="lt-form" onSubmit={handleSubmit}>
                <div className="lt-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="lt-field">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="lt-field">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Type something if you want..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="lt-btn" disabled={loading}>
                  <span className="lt-outline"></span>

                  <span className="lt-state lt-state-default">
                    <span className="lt-icon">{loading ? "⏳" : "✈"}</span>
                    <span className="lt-text">
                      {loading ? "Sending..." : "Send Message"}
                    </span>
                  </span>

                  {!loading && submitStatus === "Message sent successfully" && (
                    <span className="lt-state lt-state-sent">
                      <span className="lt-icon">✔</span>
                      <span className="lt-text">Sent</span>
                    </span>
                  )}
                </button>

                {submitStatus && (
                  <p
                    style={{
                      marginTop: "12px",
                      color: submitStatus.toLowerCase().includes("success")
                        ? "green"
                        : "red",
                    }}
                  >
                    {submitStatus}
                  </p>
                )}
              </form>
            </div>

            <div className="lt-right">
              <div className="lt-illustration">
                <div className="bubble" />
                <div className="mini-card" />
                <div className="envelope" />
                <div className="paper" />
                <div className="arrow" />
                <div className="arrow-small" />
              </div>

              <div className="lt-contact">
                <div className="lt-item">
                  <span>{'📍\uFE0E'}</span>
                  <p>
                    151 New Park Ave, Hartford, CT 06106
                    <br />
                    United States
                  </p>
                </div>

                <div className="lt-item">
                  <span>{'📞\uFE0E'}</span>
                  <a href="tel:+12033029545">+1 (203) 302-9545</a>
                </div>

                <div className="lt-item">
                  <span>{'✉\uFE0E'}</span>
                  <a href="mailto:contactus@inveritasoft.com">
                    contactus@inveritasoft.com
                  </a>
                </div>
              </div>

              <div className="lt-socials">
                <button type="button">
                  <img src={facebookIcon} alt="facebook" />
                </button>
                <button type="button">
                  <img src={twitterIcon} alt="twitter" />
                </button>
                <button type="button">
                  <img src={instaIcon} alt="insta" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}