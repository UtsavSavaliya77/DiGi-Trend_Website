import React, { useEffect, useRef, useState } from "react";

const faqReplies = {
  hello: "Hello! Welcome to our company website. How can we help you?",
  hi: "Hi! How can we assist you today?",
  services: "We offer web development, app development, and digital solution services.",
  pricing: "For pricing details, please contact our team because pricing depending on services.",
  contact: "You can reach us from the Contact Us page on this website.",
  support: "Our support team will help you with your query as soon as possible.",
  default: "Thanks for your message. Please check our website sections or contact our team for more help.",
};

export default function CompanyChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [hover, setHover] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to our website. How can we help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    for (const key of Object.keys(faqReplies)) {
      if (key !== "default" && lower.includes(key)) {
        return faqReplies[key];
      }
    }

    return faqReplies.default;
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const reply = getBotReply(input);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: hover
            ? "linear-gradient(135deg, #2563eb,rgb(196, 58, 58))"
            : "#0f62fe",
          color: "#fff",

          // Optional little lift effect
          transform: hover ? "translateY(-2px) scale(1.04)" : "translateY(0) scale(1)",
          boxShadow: hover
            ? "0 10px 24px rgba(37, 99, 235, 0.35)"
            : "0 6px 18px rgba(0,0,0,0.2)",

          transition:
            "opacity 0.25s ease, visibility 0.25s ease, background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
          border: "none",
          borderRadius: "999px",
          padding: "10px 18px",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 1000,
        }}
      >
        {isOpen ? "Close" : "Chat"}
      </button>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "340px",
            height: "460px",
            background: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000,
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              background: "#0f62fe",
              color: "#fff",
              padding: "14px 16px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Company Support
          </div>

          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              background: "#f9fafb",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 12px",
                    borderRadius: "14px",
                    background:
                      msg.sender === "user" ? "#0f62fe" : "#e5e7eb",
                    color: msg.sender === "user" ? "#fff" : "#111827",
                    fontSize: "14px",
                    lineHeight: "1.4",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "12px",
              borderTop: "1px solid #e5e7eb",
              background: "#fff",
            }}
          >
            <input
              type="text"
              value={input}
              placeholder="Type your message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: "10px",
                border: "1px solid #d1d5db",
                outline: "none",
                fontSize: "14px",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                background: "#0f62fe",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "10px 14px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}