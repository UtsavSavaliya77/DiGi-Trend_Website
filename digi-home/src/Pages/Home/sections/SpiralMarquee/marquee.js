import { useEffect, useRef, useState } from "react";
import "../../WakeLanding.css";
import logo1 from "../../../../assets/images/a.svg";
import logo2 from "../../../../assets/images/2.svg";
import logo3 from "../../../../assets/images/3.svg";
import logo4 from "../../../../assets/images/4.svg";
import logo5 from "../../../../assets/images/5.svg";
import logo6 from "../../../../assets/images/6.svg";
import logo7 from "../../../../assets/images/7.svg";
import logo8 from "../../../../assets/images/8.svg";
import logo9 from "../../../../assets/images/9.svg";
import logo10 from "../../../../assets/images/10.svg";

const marqueeLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
];

const SPEED = 1;
const MAX_X_STRETCH = 1.35;
const MAX_Y_STRETCH = 1.9;

function getResponsiveDims(width) {
    if (width < 480) {
        return {
            cardW: 82,
            cardH: 46,
            amplitude: 26,
            wavelength: 340,
            stepX: 98,
        };
    }

    if (width < 640) {
        return {
            cardW: 96,
            cardH: 50,
            amplitude: 32,
            wavelength: 400,
            stepX: 114,
        };
    }

    if (width < 1024) {
        return {
            cardW: 120,
            cardH: 60,
            amplitude: 45,
            wavelength: 520,
            stepX: 148,
        };
    }

    return {
        cardW: 140,
        cardH: 70,
        amplitude: 60,
        wavelength: 600,
        stepX: 140,
    };
}

export default function SpiralBrands({ id }) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const offsetRef = useRef(0);
    const rafRef = useRef(null);
    const stretchRef = useRef({ x: 1, y: 1 });
    const zoomRef = useRef(1.18);

    const [dims, setDims] = useState(() => getResponsiveDims(window.innerWidth));

    useEffect(() => {
        const update = () => {
            setDims(getResponsiveDims(window.innerWidth));
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

        const onScroll = () => {
            const el = containerRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const progress = clamp(
                (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
                0,
                1
            );

            stretchRef.current = {
                x: 1 + progress * (MAX_X_STRETCH - 1),
                y: 1 + progress * (MAX_Y_STRETCH - 1),
            };

            zoomRef.current = 1.18 - progress * 0.24;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const totalItems = marqueeLogos.length * 3;
        const totalW = totalItems * dims.stepX;
        const centerY =
            (dims.cardH + dims.amplitude * 2 * MAX_Y_STRETCH + 24) / 2;

        const tick = () => {
            offsetRef.current += SPEED;

            const el = containerRef.current;
            if (!el) {
                rafRef.current = requestAnimationFrame(tick);
                return;
            }

            const items = el.querySelectorAll(".sarpakar-item");

            items.forEach((node) => {
                const index = Number(node.dataset.index ?? 0);
                let x = index * dims.stepX - offsetRef.current;

                while (x < -dims.stepX) x += totalW;
                while (x >= totalW - dims.stepX) x -= totalW;

                const wave = dims.wavelength * stretchRef.current.x;
                const amp = dims.amplitude * stretchRef.current.y;
                const rad = (x / wave) * Math.PI * 2;
                const y = centerY + Math.sin(rad) * amp;
                const slope = (Math.cos(rad) * amp * (Math.PI * 2)) / wave;
                const angle = Math.atan(slope) * (180 / Math.PI);

                node.style.transform = `translate3d(${x}px, ${y - dims.cardH / 2}px, 0) rotate(${angle}deg)`;
            });

            if (trackRef.current) {
                trackRef.current.style.transform = `scale(${zoomRef.current})`;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [dims]);

    const containerHeight =
        dims.cardH + dims.amplitude * 2 * MAX_Y_STRETCH + 24;

    return (
        <div
            id={id}
            className="marquee-section-inner"
            style={{ backgroundColor: "white" }}
        >
            <div
                className="marquee-back"
                style={{
                    backgroundImage: `
            radial-gradient(circle, #e8e1d5 1.5px, transparent 1.5px),
            radial-gradient(circle, #e8e1d5 1.5px, transparent 1.5px)
          `,
                    backgroundPosition: "0 0, 10px 10px",
                    backgroundSize: "20px 20px",
                }}
            />

            <div className="sector-heading-wrap">
                <p className="our-text">Our Sector</p>
            </div>

            <div
                ref={containerRef}
                className="spiral-container"
                style={{ height: containerHeight }}
            >
                <div
                    ref={trackRef}
                    className="spiral-track"
                    style={{ transformOrigin: "center center" }}
                >
                    {[...marqueeLogos, ...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                        <BrandCard key={i} logo={logo} index={i} dims={dims} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function BrandCard({ logo, index, dims }) {
    return (
        <div
            className="sarpakar-item brand-card"
            data-index={index}
            style={{
                width: dims.cardW,
                height: dims.cardH,
                borderRadius: dims.cardH,
                overflow: "hidden",
            }}
        >
            <img
                src={logo}
                alt="brand"
                className="brand-image"
            />
        </div>
    );
}