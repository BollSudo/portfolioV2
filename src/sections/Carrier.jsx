import React from 'react'
import {experiences} from "../constants/index.js";
import TitleSection from "../components/TitleSection.jsx";
import Card from "../components/Card.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Carrier = () => {
    useGSAP(() => {
        gsap.utils.toArray('.carrier-left-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            })
        })

        gsap.utils.toArray('.carrier-right-card').forEach((card) => {
            gsap.from(card, {
                xPercent: 100,
                opacity: 0,
                transformOrigin: "right right",
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '80% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })
                }
            }
        })
    }, []);

    return (
        <section id="carrier" className="w-full h-full md:mt-40 mt-20">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                <TitleSection title="Parcours" subTitle="Expérience" />
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {experiences.map((card, index) => (
                            <div key={card.id} className={`exp-card-wrapper flex flex-col xl:flex-row items-center ${index % 2 === 0 ? "xl:flex-row-reverse" : ""}`}>
                                <div className="xl:w-1/2 flex items-start justify-center">
                                    <div className={`flex items-start w-full ${index % 2 === 0 ? "" : "justify-end"}`}>
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className={`expText flex xl:gap-20 md:gap-10 gap-5 w-full relative z-20 ${index % 2 === 0 ? "" : "xl:flex-row-reverse"}`}>
                                            <div style={{ backgroundColor: card.iconBg }} className={`timeline-logo p-1 relative ${index % 2 === 0 ? "md:left-[-40px] left-[-20px]" : "md:right-[-40px] right-[-20px]" }`}>
                                                <img src={card.icon} alt={card.company_name} className="w-full h-auto" />
                                            </div>
                                            <Card card={card} index={index}>
                                                <div className="w-full">
                                                    <h1>{card.title}</h1>
                                                    <p>{card.date}</p>
                                                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5">
                                                        {card.points.map((point) => (
                                                            <li key={point} className="text-lg">
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Carrier
