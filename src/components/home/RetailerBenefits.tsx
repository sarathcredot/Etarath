"use client";

import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import FAQ from "../common/FAQ";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RetailerBenefits = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !faqRef.current) return;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        heading2Ref.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=.1"
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, x: -100, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=.1"
      )
      .fromTo(
        faqRef.current?.children,
        { opacity: 0, x: -50, stagger: 0.1 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" },
        "-=.1"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <div ref={containerRef} className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 md:gap-[60px]">
        <div className="lg:w-[47%] flex flex-col items-start justify-start">
          <Heading2 ref={heading2Ref} className="mb-[30px]">
            Benefits of Becoming an <br className="hidden md:block lg:hidden" />
            <span className="text-primary">Etarath</span> Retailer
          </Heading2>
          <Paragraph ref={paragraphRef} className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna. sed do
            eiusmod tempor incididunt ut labore et dolore lorem ipsum set ut do
            elit suit labore et magna adipisicing dem sed dolor amet.{" "}
          </Paragraph>
          <Button
            ref={buttonRef}
            type="link"
            href="/"
            textColor="black"
            className=""
          >
            Get Started
          </Button>
        </div>
        <div className="lg:w-[50%]">
          <FAQ ref={faqRef} />
        </div>
      </div>
    </div>
  );
};

export default RetailerBenefits;
