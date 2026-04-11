import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesShowcase() {
    const servicesData = [
        {
            title: "UI/UX Design",
            subtitle: "Designs That Click - And Stick",
            description:
                "We craft interfaces that are not just pretty, they perform. From user flows and wireframes to polished final screens.",
            serviceList: [
                "User Research & Strategy",
                "Wireframing & Prototyping",
                "UI Design & Visual Branding",
                "UX Optimization & Testing",
                "Responsive & Adaptive Design",
            ],
            images: [
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
            ],
        },
        {
            title: "Website Development",
            subtitle: "Tailor-Made Modern Websites for Brands That Demand More",
            description:
                "Tailor-Made Modern Websites for Brands That Demand More. From structure to performance, we build sites that convert and scale.",
            serviceList: [
                "Custom Website Development",
                "Frontend Engineering",
                "Backend Integration",
                "CMS & Admin Panels",
                "Performance Optimization",
            ],
            images: [
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
            ],
        },
        {
            title: "Brand Strategy",
            subtitle: "Positioning, messaging, and identity built for growth",
            description:
                "Positioning, messaging, and identity built for growth. Get a strategy that aligns your brand story with real results.",
            serviceList: [
                "Brand Positioning",
                "Messaging Framework",
                "Visual Identity Direction",
                "Audience Research",
                "Growth-Focused Strategy",
            ],
            images: [
                "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
            ],
        },
    ];

    const [openService, setOpenService] = useState(0);
    const [slideIndexes, setSlideIndexes] = useState(
        servicesData.map(() => 0)
    );

    const handleToggle = (index) => {
        setOpenService((prev) => (prev === index ? null : index));
    };

    const handleSlideChange = (sectionIndex, direction) => {
        setSlideIndexes((prev) => {
            const updated = [...prev];
            const total = servicesData[sectionIndex].images.length;

            updated[sectionIndex] =
                direction === "next"
                    ? (updated[sectionIndex] + 1) % total
                    : (updated[sectionIndex] - 1 + total) % total;

            return updated;
        });
    };

    return (
        <section
            id="technology"
            className="services-showcase"
            aria-label="Service showcase section"
        >
            <div className="services-showcase-inner">
                <h2 className="services-title">
                    What we&apos;re
                    <span className="services-title-star" aria-hidden="true">
                        Services
                    </span>
                    <br />
                    absolutely killer at
                </h2>

                <div className="services-list">
                    {servicesData.map((service, index) => {
                        const isOpen = openService === index;
                        const currentIndex = slideIndexes[index];

                        const visibleImages = [
                            service.images[currentIndex],
                            service.images[(currentIndex + 1) % service.images.length],
                        ];

                        return (
                            <article key={service.title} className={`service-item ${isOpen ? "is-open" : ""}`.trim()}>
                                <div className="service-row">
                                    <div>
                                        <h3 className="service-row-title">{service.title}</h3>
                                        <p className="service-row-text">{service.subtitle}</p>
                                    </div>
                                    <button type="button" className="service-row-plusBtn" aria-label={`Toggle ${service.title} details`}
                                        aria-expanded={isOpen}
                                        onClick={() => handleToggle(index)}>
                                        <span className="service-row-plus" aria-hidden>
                                            {isOpen ? "-" : "+"}
                                        </span>
                                    </button>
                                </div>
                                <hr />
                                <div className="service-expand" role="region" aria-hidden={!isOpen} >
                                    <div
                                        className="service-expand"
                                        role="region"
                                        aria-hidden={!isOpen}
                                    >
                                        <motion.div
                                            initial={false}
                                            animate={
                                                isOpen
                                                    ? {
                                                        height: "auto",
                                                        opacity: 1,
                                                    }
                                                    : {
                                                        height: 0,
                                                        opacity: 0,
                                                    }
                                            }
                                            transition={{
                                                height: {
                                                    duration: 0.8,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                                opacity: {
                                                    duration: 0.35,
                                                    ease: "easeOut",
                                                },
                                            }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <motion.div
                                                initial={false}
                                                animate={
                                                    isOpen
                                                        ? { y: 0, filter: "blur(0px)" }
                                                        : { y: -8, filter: "blur(6px)" }
                                                }
                                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                                className="service-expand-content"
                                            >
                                                <div className="service-details-layout">
                                                    <div className="service-tags">
                                                        {service.serviceList.map((item) => (
                                                            <span key={item} className="service-tag">
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="service-carousel">
                                                        <p className="service-row-text1">{service.description}</p>

                                                        <div className="service-carousel-imageWrap">
                                                            <div className="service-carousel-track">
                                                                {visibleImages.map((img, i) => (
                                                                    <img
                                                                        key={i}
                                                                        src={img}
                                                                        alt={service.title}
                                                                        className="service-carousel-image"
                                                                    />
                                                                ))}
                                                            </div>

                                                            <button
                                                                type="button"
                                                                className="service-carousel-arrow service-carousel-arrow-left"
                                                                aria-label={`Previous ${service.title} image`}
                                                                onClick={() => handleSlideChange(index, "prev")}
                                                            >
                                                                ‹
                                                            </button>

                                                            <button
                                                                type="button"
                                                                className="service-carousel-arrow service-carousel-arrow-right"
                                                                aria-label={`Next ${service.title} image`}
                                                                onClick={() => handleSlideChange(index, "next")}
                                                            >
                                                                ›
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}