import { useEffect, useState } from "react";
import "./Review.css";

const reviews = [
  {
    gradient: "grad1",
    name: "@Olivia",
    text: "Absolutely amazing experience. The team delivered beyond expectations!",
  },
  {
    gradient: "grad2",
    name: "@Liam",
    text: "Professional service and great communication throughout the project.",
  },
  {
    gradient: "grad3",
    name: "@Sophia",
    text: "Highly satisfied with the results. Would definitely recommend!",
  },
  {
    gradient: "grad4",
    name: "@Noah",
    text: "Outstanding quality and fast delivery. Truly impressive work.",
  },
  {
    gradient: "grad5",
    name: "@Emma",
    text: "Fantastic support and attention to detail. Loved working with them!",
  },
  {
    gradient: "grad6",
    name: "@James",
    text: "Top-notch service with excellent creativity and execution.",
  },
];

export default function Reviews({ id }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardW = isMobile ? 420 : 180;
  const cardH = isMobile ? 340 : 180;
  const activeReviews = isMobile ? reviews.slice(0, 3) : reviews;

  const ROPE_PATH = isMobile
    ? "M -260,120 Q 250,250 500,250 Q 750,250 1260,120"
    : "M -120,60 Q 250,140 500,140 Q 750,140 1120,60";

  // const stringLen = isMobile ? 55 : 25;
  const stringLen = isMobile ? 70 : 25;
  const animationDuration = isMobile ? 10 : 18;
  const delayGap = animationDuration / activeReviews.length;

  return (
    <section id={id} className="hanging-section">
      <div className="hanging-header">
        <h2 className="hanging-title">What Our Customers Say</h2>
        <p className="hanging-subtitle">Trusted by businesses worldwide</p>
      </div>

      <div className="hanging-svg-wrap">
        <svg
          key={isMobile ? "mobile-svg" : "desktop-svg"}
          viewBox={isMobile ? "0 0 1000 820" : "0 0 1000 460"}
          preserveAspectRatio={isMobile ? "xMinYMid slice" : "xMidYMid meet"}
          className="hanging-svg"
        >
          <defs>
            {activeReviews.map((rev, i) => (
              <linearGradient
                key={i}
                id={rev.gradient}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a18cd1" />
                <stop offset="100%" stopColor="#fbc2eb" />
              </linearGradient>
            ))}
          </defs>

          <path
            id="ropePath"
            d={ROPE_PATH}
            stroke="#8B6914"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          {activeReviews.map((rev, i) => (
            <g key={`${isMobile ? "m" : "d"}-${i}`}>
              <g>
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={stringLen}
                  stroke="#8B6914"
                  strokeWidth="2"
                />

                <circle cx="0" cy="0" r="6" fill="#22a553" />
                <circle cx="0" cy="0" r="2.5" fill="#fff" />

                <g transform={`translate(${-cardW / 2}, ${stringLen})`}>
                  <rect
                    width={cardW}
                    height={cardH}
                    rx={isMobile ? "18" : "16"}
                    fill="white"
                    stroke="#ddd"
                  />

                  <rect
                    x={isMobile ? 14 : 10}
                    y={isMobile ? 14 : 10}
                    width={cardW - (isMobile ? 28 : 20)}
                    height={cardH - (isMobile ? 72 : 50)}
                    rx={isMobile ? 14 : 10}
                    fill="rgba(30, 58, 138, 0.7)"
                  />

                  <text
                    x={cardW / 2}
                    y={isMobile ? 45 : 30}
                    textAnchor="middle"
                    fontSize={isMobile ? "28" : "16"}
                    fill="#FFBF00"
                  >
                    ★★★★★
                  </text>

                  <foreignObject
                    x={isMobile ? 24 : 15}
                    y={isMobile ? 52 : 45}
                    width={cardW - (isMobile ? 48 : 30)}
                    height={cardH - (isMobile ? 130 : 110)}
                  >
                    <div className={`review-text ${isMobile ? "review-text-mobile" : "review-text-desktop"}`}>
                      {rev.text}
                    </div>
                  </foreignObject>

                  <text
                    x={cardW / 2}
                    y={cardH - (isMobile ? 20 : 18)}
                    textAnchor="middle"
                    fontSize={isMobile ? "28" : "13"}
                    fontWeight="bold"
                    fill="#222"
                  >
                    {rev.name}
                  </text>
                </g>

                <animateMotion
                  dur={`${animationDuration}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                  begin={`${-((i + 1) * delayGap)}s`}
                  // keyPoints="1;0"
                  // keyTimes="0;1"
                >
                  <mpath href="#ropePath" />
                </animateMotion>
              </g>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}