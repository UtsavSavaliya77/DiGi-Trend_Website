import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./HeroTeaser.css";

const SCENES = [
  ["AI", 1800],
  ["is", 1800],
  ["evolving", 3000],
  ["fasterBlur", 1400],
  ["fasterThanEver", 2600],
  ["soAre", 1800],
  ["toHolmes", 2200],
  ["toai360", 2200],
  ["andNow", 3200],
  ["DigiTrendFull", 1800],
  ["intelSolid", 2200],
  ["holdIntel", 4200],
  ["empowering", 2800],
  ["withPillAi", 4200],
  ["adaptTriad", 3600],
  ["withPillSolutions", 4200],
  ["solutionTriad", 3600],
  ["innovationPill", 4200],
  ["coinnovate", 3200],
  ["leadCycle", 8000],
  ["outcomes", 4200],
  ["DiGiTrend", 1800],
  ["finale", 2200],
  ["proof", 4200],
  ["beyond", 4200],
  ["tech", 4200],
  ["human", 4200],
  ["ai", 4200],
];

const LEAD_WORDS = ["AI", "era", "industry"];

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
      aria-hidden="true"
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
    <span className={`hero-digitrend-word ${className}`}>
      <span>{children}</span>
      <DotRing />
    </span>
  );
}

export default function HeroTeaser() {
  const reduceMotion = useReducedMotion();
  const [sceneIndex, setSceneIndex] = useState(0);
  const [leadIdx, setLeadIdx] = useState(0);
  const leadTimerRef = useRef(null);

  const currentScene = SCENES[sceneIndex][0];
  const currentDuration = SCENES[sceneIndex][1];
  const EXTRA_DELAY = 800;
  useEffect(() => {
    if (reduceMotion) {
      setSceneIndex(SCENES.findIndex((item) => item[0] === "ai"));
      return;
    }

    const timer = setTimeout(() => {
      setSceneIndex((prev) => (prev + 1) % SCENES.length);
    }, currentDuration + EXTRA_DELAY);

    return () => clearTimeout(timer);
  }, [sceneIndex, currentDuration, reduceMotion]);

  useEffect(() => {
    if (currentScene !== "leadCycle" || reduceMotion) {
      setLeadIdx(0);
      if (leadTimerRef.current) clearInterval(leadTimerRef.current);
      return;
    }

    let i = 0;
    setLeadIdx(0);

    leadTimerRef.current = setInterval(() => {
      i += 1;
      if (i < LEAD_WORDS.length) {
        setLeadIdx(i);
      } else {
        clearInterval(leadTimerRef.current);
      }
    }, 3500);

    return () => {
      if (leadTimerRef.current) clearInterval(leadTimerRef.current);
    };
  }, [currentScene, reduceMotion]);

  const fadeMotion = {
    initial: { opacity: 0, y: 24, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -14, filter: "blur(8px)" },
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  };

  const renderScene = () => {
    switch (currentScene) {
      case "AI":
        return (
          <motion.p key="AI" {...fadeMotion} className="hero-line hero-line--hero">
            AI
          </motion.p>
        );

      case "is":
        return (
          <motion.p key="is" {...fadeMotion} className="hero-line hero-line--hero">
            is
          </motion.p>
        );

      case "evolving":
        return (
          <motion.p key="evolving" {...fadeMotion} className="hero-line hero-line--hero">
            evolving.
          </motion.p>
        );

      case "fasterBlur":
        return (
          <motion.p key="fasterBlur" {...fadeMotion} className="hero-line hero-line--hero">
            faster
          </motion.p>
        );

      case "fasterThanEver":
        return (
          <motion.p key="fasterThanEver" {...fadeMotion} className="hero-line hero-line--hero">
            faster than ever.
          </motion.p>
        );

      case "soAre":
        return (
          <motion.p key="soAre" {...fadeMotion} className="hero-line hero-line--hero">
            <span className="hero-muted">so</span>{" "}
            <span className="hero-dark">are</span>{" "}
            <span className="hero-dark">we.</span>
          </motion.p>
        );

      case "toHolmes":
        return (
          <motion.div key="toHolmes" {...fadeMotion} className="hero-stack-center">
            <span className="hero-to">from</span>
            <div className="hero-logo-row">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="hero-subbrand">holmes</span>
            </div>
          </motion.div>
        );

      case "toai360":
        return (
          <motion.div key="toai360" {...fadeMotion} className="hero-stack-center">
            <span className="hero-to">to</span>
            <div className="hero-logo-row">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="hero-subbrand">ai360</span>
            </div>
          </motion.div>
        );

      case "andNow":
        return (
          <motion.p key="andNow" {...fadeMotion} className="hero-line hero-line--mid">
            and now...the next frontier.
          </motion.p>
        );

      case "DigiTrendFull":
        return (
          <motion.div key="DigiTrendFull" {...fadeMotion} className="hero-logo-row hero-logo-row--navy">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
          </motion.div>
        );

      case "intelSolid":
        return (
          <motion.h1 key="intelSolid" {...fadeMotion} className="hero-brand">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="hero-intel-solid">intelligence</span>
            <sup className="hero-tm">™</sup>
          </motion.h1>
        );

      case "holdIntel":
        return (
          <motion.h1 key={currentScene} {...fadeMotion} className="hero-brand">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="hero-intel-gradient">intelligence</span>
            <sup className="hero-tm">™</sup>
          </motion.h1>
        );

      case "empowering":
        return (
          <motion.p key="empowering" {...fadeMotion} className="hero-line hero-line--gradient">
            empowering enterprises
          </motion.p>
        );

      case "withPillAi":
        return (
          <motion.div key="withPillAi" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill">
              <span className="hero-pill-inner">AI platforms</span>
            </div>
          </motion.div>
        );

      case "adaptTriad":
        return (
          <motion.div key="adaptTriad" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill">
              <span className="hero-pill-inner">AI platforms</span>
            </div>
            <p className="hero-triad">
              <span>adapt.</span> <span>accelerate.</span> <span>scale.</span>
            </p>
          </motion.div>
        );

      case "withPillSolutions":
        return (
          <motion.div key="withPillSolutions" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill">
              <span className="hero-pill-inner">AI solutions</span>
            </div>
          </motion.div>
        );

      case "solutionTriad":
        return (
          <motion.div key="solutionTriad" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill">
              <span className="hero-pill-inner">AI solutions</span>
            </div>
            <p className="hero-triad">
              <span>consulting-led.</span> <span>industry-focused.</span>
            </p>
          </motion.div>
        );

      case "innovationPill":
        return (
          <motion.div key="innovationPill" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill hero-pill--wide">
              <span className="hero-pill-inner-row">
                <DiGiTrendWord className="hero-pill-digitrend">DiGi Trend</DiGiTrendWord>
                <span className="hero-pill-net">innovation network</span>
              </span>
            </div>
          </motion.div>
        );

      case "coinnovate":
        return (
          <motion.div key="coinnovate" {...fadeMotion} className="hero-empower-block">
            <p className="hero-line hero-line--gradient">empowering enterprises</p>
            <p className="hero-with">with</p>
            <div className="hero-pill hero-pill--wide">
              <span className="hero-pill-inner-row">
                <DiGiTrendWord className="hero-pill-digitrend">DiGi Trend</DiGiTrendWord>
                <span className="hero-pill-net">innovation network</span>
              </span>
            </div>
            <p className="hero-tagline-gray">co-innovate. reimagine.</p>
          </motion.div>
        );

      case "leadCycle":
        return (
          <motion.div key="leadCycle" {...fadeMotion} className="hero-empower-block hero-lead-block">
            <p className="hero-line hero-line--gradient-split">
              <span>empowering</span> <span>enterprises</span>
            </p>
            <p className="hero-lead-line">
              to lead in an{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={LEAD_WORDS[leadIdx]}
                  className="hero-cycle-word"
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {LEAD_WORDS[leadIdx]}
                </motion.span>
              </AnimatePresence>
            </p>
          </motion.div>
        );

      case "outcomes":
        return (
          <motion.p key="outcomes" {...fadeMotion} className="hero-outcomes">
            <span>outcomes you can </span>
            <span className="hero-outcomes-strong">
              measure.
              <span className="teaser-outcomes-underline" aria-hidden />
              </span>
          </motion.p>
        );

      case "DiGiTrend":
        return (
          <motion.div key="DiGiTrend" {...fadeMotion} className="hero-logo-row hero-logo-row--navy">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
          </motion.div>
        );

      case "finale":
        return (
          <motion.h1 key="finale" {...fadeMotion} className="hero-brand">
            <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            <span className="hero-intel-gradient">intelligence</span>
            <sup className="hero-tm">™</sup>
          </motion.h1>
        );

      case "proof":
        return (
          <motion.div key="proof" {...fadeMotion}>
            <h1 className="hero-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="hero-intel-gradient">intelligence</span>
              <sup className="hero-tm">™</sup>
            </h1>
            <p className="hero-line hero-line--black">proof over promise.</p>
          </motion.div>
        );

      case "beyond":
        return (
          <motion.div key="beyond" {...fadeMotion}>
            <h1 className="hero-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
              <span className="hero-intel-gradient">intelligence</span>
              <sup className="hero-tm">™</sup>
            </h1>
            <p className="hero-line hero-line--black">AI and beyond.</p>
          </motion.div>
        );

      case "tech":
        return (
          <motion.div key="tech" {...fadeMotion}>
            <h1 className="hero-brand">
              <DiGiTrendWord>DiGi Trend</DiGiTrendWord>
            </h1>
            <p className="hero-triad hero-triad--tech">
              <span>consulting.</span>
              <span>technology.</span>
              <span>engineering.</span>
              <span>business process.</span>
            </p>
          </motion.div>
        );

      case "human":
        return (
          <motion.p key="human" {...fadeMotion} className="hero-line hero-line--black">
            this video is made by humans.
          </motion.p>
        );

      case "ai":
        return (
          <motion.p key="ai" {...fadeMotion} className="hero-line hero-line--black">
            this video is powered by AI.
          </motion.p>
        );

      default:
        return null;
    }
  };

  return (
    <section id="teaser" className="hero-teaser" aria-label="DiGi Trend Intelligence teaser">
      <div className="hero-bg hero-bg--right" />
      <div className="hero-bg hero-bg--left" />

      <div className="hero-stage">
        <AnimatePresence mode="wait">
          <div key={currentScene} className="hero-stage-inner">
            {renderScene()}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}