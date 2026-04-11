import React, { useState } from "react";
import "../../WakeLanding.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Do you really give a free homepage first?",
      answer:
        "Yes, 100%. We deliver a homepage design in 48 hours — no payments, no commitments. You only pay if you're vibing with it",
    },
    {
      question: "How long does the full project take?",
      answer:
        "Most projects take around 2 to 4 weeks depending on scope, revisions, and how fast feedback comes in.",
    },
    {
      question: "Can you work with our existing brand?",
      answer:
        "Yes. We can build around your existing identity or help refine it where needed.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="app1">
      <section className="faq-section1">
        <div className="faq-heading-wrap">
          <h1 className="faq-title">
            <span>You ask,</span>
            <span>we answer.</span>
          </h1>

          <div className="faq-badge">FAQS</div>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? "active" : ""}`} key={index}>
                <div className="faq-question-row">
                  <div className="faq-question">{item.question}</div>

                  <button
                    className="faq-toggle"
                    aria-label="toggle faq"
                    onClick={() => handleToggle(index)}
                    type="button"
                  >
                    <span className="faq-arrow">{isOpen ? "▲" : "▼"}</span>
                  </button>
                </div>

                {isOpen && (
                  <div className="faq-answer-wrap">
                    <div className="faq-answer">{item.answer}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}