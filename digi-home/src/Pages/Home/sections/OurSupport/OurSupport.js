import "./OurSupport.css";
import { useState } from 'react';

export default function OurSupport() {

    const [active, setActive] = useState(false);

    return (
        <section className="growth-hero">
            <div className="growth-hero__lines" aria-hidden="true">
                {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="growth-hero__line" />
                ))}
            </div>

            <div className="growth-hero__floating growth-hero__floating--one" />
            <div className="growth-hero__floating growth-hero__floating--two" />
            <div className="growth-hero__floating growth-hero__floating--three" />

            <div className="growth-hero__content">
                <p className="growth-hero__eyebrow">CONSULTING, PROGRAMMING & DESIGN</p>

                <div className="growth-hero__headline-wrap">
                    <h1 className="growth-hero__headline">
                        <span className="growth-hero__headline-top">
                            We support
                            <span className="growth-hero__arrow">↗</span>
                        </span>
                        <span
                            className={`growth-hero__headline-main ${active ? "is-green" : ""
                                }`}
                        >
                            gr
                            <span
                                className={`growth-hero__toggle ${active ? "is-active" : ""}`}
                                onClick={() => setActive(!active)}
                            >
                                <span className="growth-hero__toggle1">
                                    <span className="growth-hero__toggle-knob" />
                                </span>
                            </span>
                            wth
                        </span>

                        <span className="growth-hero__headline-bottom">
                            <svg width="60" height="55" viewBox="0 0 80 70">
                                <path d="M35 5 A28 28 0 1 0 35 61 A28 28 0 1 0 35 5" fill="black" />
                                <path
                                    d="M42 38 L70 48 L60 52 L64 63 L57 66 L53 55 L45 63 Z"
                                    fill="#111"
                                    stroke="#fff"
                                    stroke-width="4"
                                    stroke-linejoin="round"
                                />
                            </svg>
                            of your business
                        </span>
                    </h1>
                </div>

                <p className="growth-hero__text">
                    We turn great ideas into working products.
                    <br />
                    We focus on good communication and understanding your business.
                </p>

                <div className="growth-hero__actions">
                    <button className="growth-hero__btn growth-hero__btn--primary">
                        Estimate the project
                    </button>
                    <a href="#about" className="growth-hero__link">
                        More about us
                    </a>
                </div>
            </div>
        </section>
    );
}