"use client";

import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import FAQ from "../common/FAQ";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQComponentProps {
  questions?: {
    question: string;
    answer: string | React.ReactNode;
  }[];
  heading?: React.ReactNode;
  description?: string;
}

const FAQComponent = ({
  questions,
  heading,
  description,
}: FAQComponentProps) => {
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
          start: "top 90%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        heading2Ref.current,
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=.1",
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
        "-=.1",
      )
      .fromTo(
        faqRef.current?.children,
        { opacity: 0, x: -50, stagger: 0.1 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, ease: "power2.out" },
        "-=.1",
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
            {heading ?? (
              <>
                Frequently asked
                <br className="hidden md:block " /> Questions
              </>
            )}
          </Heading2>
          {description === "" ? null : (
            <Paragraph ref={paragraphRef} className="mb-10">
              {description ??
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit."}
            </Paragraph>
          )}
          <Button
            ref={buttonRef}
            type="link"
            href="/contact"
            textColor="black"
            className=""
          >
            Contact Us
          </Button>
        </div>
        <div className="lg:w-[50%]">
          <FAQ questions={questions} ref={faqRef} />
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
