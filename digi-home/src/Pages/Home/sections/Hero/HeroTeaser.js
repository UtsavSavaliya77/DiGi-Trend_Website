import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SCENES = [
  ["AI", 1000],
  ["is", 1000],
  ["evolving", 2000],
  ["fasterBlur", 750],
  ["fasterThanEver", 1450],
  ["soAre", 850],
  ["toHolmes", 1150],
  ["toai360", 1150],
  ["andNow", 2300],
  ["DigiTrendGlow", 1150],
  ["DigiTrendFull", 850],
  ["intelSolid", 1050],
  ["intelGradient", 2000],
  ["holdIntel", 3433],
  ["empowering", 2100],
  ["withPillAi", 3400],
  ["adaptTriad", 2600],
  ["withPillSolutions", 2600],
  ["solutionTriad", 2600],
  ["innovationPill", 3800],
  ["coinnovate", 2400],
  ["leadCycle", 6200],
  ["outcomes", 3300],
  ["DiGiTrend", 850],
  ["finale", 1150],
  ["proof", 3300],
  ["beyond", 3300],
  ["tech", 3300],
  ["human", 3300],
  ["ai", 3300],
];

function DotRing({ className = "" }) {
  const angles = Array.from({ length: 7 }, (_, i) => {
    const t = i / 6;
    return -Math.PI * 0.42 + t * Math.PI * 0.84;
  });

  const colors = [
    "#c5e500",
    "#00b189",
    "#0072ce",
    "#5b2c90",
    "#e10098",
    "#f9423a",
    "#ffb612",
    "#7cc242",
  ];

  const r = 28;
  const cx = -18;
  const cy = 26;

  return (
    <svg
      className={className}
      width="20"
      height="52"
      viewBox="-6 0 24 52"
      style={{ overflow: "visible", display: "block", flex: "0 0 auto" }}
      aria-hidden
    >
      {angles.map((a, i) => {
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        return <circle key={i} cx={x} cy={y} r={4.2} fill={colors[i]} />;
      })}
    </svg>
  );
}

function DiGiTrendWord({ children, className = "" }) {
  return (
    <span
      className={`DiGiTrend-word ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}
    >
      <span>{children}</span>
      <DotRing />
    </span>
  );
}

const leadWords = ["AI", "era", "industry"];

export default function HeroTeaser() {
  const reduceMotion = useReducedMotion();
  const [scene, setScene] = useState(SCENES[0][0]);
  const [leadIdx, setLeadIdx] = useState(0);
  const timers = useRef([]);

  useEffect(() => {
    if (reduceMotion) {
      setScene("ai");
      return;
    }

    const cancelledRef = { current: false };

    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const playLoop = () => {
      clearAll();
      let t = 0;

      for (const [key, ms] of SCENES) {
        const when = t;
        timers.current.push(
          setTimeout(() => {
            if (!cancelledRef.current) setScene(key);
          }, when)
        );
        t += ms;
      }

      timers.current.push(
        setTimeout(() => {
          if (!cancelledRef.current) playLoop();
        }, t)
      );
    };

    playLoop();

    return () => {
      cancelledRef.current = true;
      clearAll();
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (scene === "leadCycle") setLeadIdx(0);
  }, [scene]);

  useEffect(() => {
    if (scene !== "leadCycle" || reduceMotion) return;

    let i = 0;
    const id = setInterval(() => {
      i++;
      setLeadIdx(i);
      if (i >= leadWords.length - 1) clearInterval(id);
    }, 2100);

    return () => clearInterval(id);
  }, [scene, reduceMotion]);

  const renderStage = () => {
    switch (scene) {
      case "AI":
        return (
          <p className="teaser-line teaser-line--hero zoom-spacing-clean1">AI</p>
        );
      case "is":
        return (
          <p className="teaser-line teaser-line--hero zoom-in">is</p>
        );
      case "evolving":
        return (
          <p className="teaser-line teaser-line--hero zoom-spacing-clean">evolving.</p>
        );
      case "fasterBlur":
        return (
          <p className="teaser-line teaser-line--hero">faster</p>
        );
      case "fasterThanEver":
        return (
          <p className="teaser-line teaser-line--hero">faster than ever.</p>
        );
      case "soAre":
        return (
          <p className="teaser-line teaser-line--hero ">
            <span className="teaser-muted">so</span>{" "}
            <span className="teaser-dark">are</span>{" "}
            <span className="teaser-dark">we.</span>
          </p>
        );
      case "toHolmes":
        return (
          <div className="teaser-stack-center">
            <span className="teaser-to">from</span>
            <div className="teaser-logo-row">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <motion.span
                className="holmes"
                initial={{ filter: "blur(10px)", scaleX: 1.35, opacity: 0.85 }}
                animate={{ filter: "blur(0px)", scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                holmes
              </motion.span>
            </div>
          </div>
        );
      case "toai360":
        return (
          <div className="teaser-stack-center">
            <span className="teaser-to">to</span>
            <div className="teaser-logo-row">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <motion.span
                className="holmes"
                initial={{ filter: "blur(10px)", scaleX: 1.35, opacity: 0.85 }}
                animate={{ filter: "blur(0px)", scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                ai360
              </motion.span>
            </div>
          </div>
        );
      case "andNow":
        return (
          <p className="teaser-line teaser-line--hero teaser-line--mid-gray">
            and now...the next frontier.
          </p>
        );
      case "DigiTrendGlow":
        return (
          <div className="teaser-glow-wrap">
            <div />
            <div className="teaser-logo-row teaser-logo-row--navy">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            </div>
          </div>
        );
      case "DigiTrendFull":
        return (
          <div className="teaser-logo-row teaser-logo-row--navy">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
          </div>
        );
      case "intelSolid":
        return (
          <h1 className="teaser-brand teaser-brand--solid">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="teaser-intel-solid">intelligence</span>
          </h1>
        );
      case "intelGradient":
      case "holdIntel":
        return (
          <h1 className="teaser-brand">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="teaser-intel-gradient">intelligence</span>
          </h1>
        );
      case "empowering":
        return (
          <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
        );
      case "withPillAi":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill">
              <span
                className={`teaser-pill-inner `}
              >
                AI platforms
              </span>
            </div>
          </div>
        );
      case "adaptTriad":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill">
              <span className="teaser-pill-inner">AI platforms</span>
            </div>
            <p className="teaser-triad">
              <span className="triad-1">adapt.</span>{" "}
              <span className="triad-2">accelerate.</span>{" "}
              <span className="triad-3">scale.</span>
            </p>
          </div>
        );
      case "withPillSolutions":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill">
              <span
                className={`teaser-pill-inner `}
              >
                AI solutions
              </span>
            </div>
          </div>
        );
      case "solutionTriad":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill">
              <span className="teaser-pill-inner">AI solutions</span>
            </div>
            <p className="teaser-triad">
              <span className="triad-1">consulting-led .</span>{" "}
              <span className="triad-2">industry-focused .</span>{" "}
            </p>
          </div>
        );
      case "innovationPill":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill teaser-pill--wide">
              <span className="teaser-pill-inner-row">
                <DiGiTrendWord className="pill-DiGiTrend">DiGi Trend</DiGiTrendWord>
                <span className="pill-net">innovation network</span>
              </span>
            </div>
          </div>
        );
      case "coinnovate":
        return (
          <div className="teaser-empower-block">
            <p className="teaser-line teaser-line--gradient-lg">empowering enterprises</p>
            <p className="teaser-with">with</p>
            <div className="teaser-pill teaser-pill--wide">
              <span className="teaser-pill-inner-row">
                <DiGiTrendWord className="pill-DiGiTrend">DiGi Trend</DiGiTrendWord>
                <span className="pill-net">innovation network</span>
              </span>
            </div>
            <p className="teaser-tagline-gray">co-innovate. reimagine.</p>
          </div>
        );
      case "leadCycle":
        return (
          <div className="teaser-empower-block teaser-lead-block">
            <p className="teaser-line teaser-line--gradient-split">
              <span className="grad-a">empowering</span>{" "}
              <span className="grad-b">enterprises</span>
            </p>
            <p className="teaser-lead-line">
              to lead in an{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={leadWords[leadIdx]}
                  className="teaser-cycle-word"
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {leadWords[leadIdx]}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
        );
      case "outcomes":
        return (
          <p className="teaser-outcomes">
            <span className="teaser-outcomes-plain">outcomes you can </span>
            <span className="teaser-outcomes-strong-wrap">
              measure.
              <span className="teaser-outcomes-underline" aria-hidden />
            </span>
          </p>
        );
      case "DiGiTrend":
        return (
          <div className="teaser-glow-wrap">
            <div />
            <div className="teaser-logo-row teaser-logo-row--navy">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            </div>
          </div>
        );
      case "finale":
        return (
          <h1 className="teaser-brand">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="teaser-intel-gradient">intelligence</span>
          </h1>
        );
      case "proof":
        return (
          <div>
            <h1 className="teaser-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="teaser-intel-gradient">intelligence</span>
            </h1>
            <p className="teaser-line teaser-line--mid-black">proof over promise.</p>
          </div>
        );
      case "beyond":
        return (
          <div>
            <h1 className="teaser-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="teaser-intel-gradient">intelligence</span>
            </h1>
            <p className="teaser-line teaser-line--mid-black">AI and beyond.</p>
          </div>
        );
      case "tech":
        return (
          <div>
            <h1 className="teaser-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            </h1>
            <p className="teaser-triad">
              <span className="triad-1">consulting .</span>{" "}
              <span className="triad-2">technology .</span>{" "}
              <span className="triad-3">engineering .</span>{" "}
              <span className="triad-4">business process .</span>{" "}
            </p>
          </div>
        );
      case "human":
        return (
          <div>
            <p className="teaser-line teaser-line--mid-black">this video is made by humans.</p>
          </div>
        );
      case "ai":
        return (
          <div>
            <p className="teaser-line teaser-line--mid-black">this video is powered by AI.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="teaser" className="teaser" aria-label="DiGi Trend Intelligence teaser">
      <div className="teaser-stage">
        <div key={scene} className="teaser-stage-inner">
          {renderStage()}
        </div>
      </div>
    </section>
  );
}