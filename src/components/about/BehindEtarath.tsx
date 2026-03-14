'use client'

import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BehindEtarath = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const paragraph2Ref = useRef<HTMLDivElement>(null);
  const membersContainerRef = useRef<HTMLDivElement>(null);
  const ImageRef1 = useRef<HTMLDivElement>(null);
  const ImageRef2 = useRef<HTMLDivElement>(null);
  const ImageRef3 = useRef<HTMLDivElement>(null);
  const ImageRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
          containerRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        )
        .fromTo(
          heading1Ref.current,
          { opacity: 0, scale: 0.8, y: -200 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" },
        )
        .fromTo(
          heading2Ref.current,
          { opacity: 0, scale: 0.8, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
        )
        .fromTo(
          paragraphRef.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=.1",
        )
        .fromTo(
          paragraph2Ref.current,
          { opacity: 0, scale: 0.8, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=.1",
        )
        .fromTo(
          ImageRef1.current,
          { opacity: 0, scale: 0.8, x: -30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=.5",
        )
        .fromTo(
          ImageRef2.current,
          { opacity: 0, scale: 0.8, x: 30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=.4",
        )
        .fromTo(
          ImageRef3.current,
          { opacity: 0, scale: 0.8, x: -30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=.4",
        )
        .fromTo(
          ImageRef4.current,
          { opacity: 0, scale: 0.8, x: 30 },
          { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=.4",
        )
        .fromTo(
          membersContainerRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=.2",
        );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleans everything
  }, []);

  return (
    <div className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row items-center gap-10 opacity-0"
      >
        <div className="hidden 1180:block -rotate-90 w-[120px] mt-[430px]">
          <h1
            ref={heading1Ref}
            className="text-[80px] md:text-[120px] lg:text-[150px] leading-none tracking-[3px]  font-[700]  text-outline-shadow-primary font-manrope "
          >
            Etarath
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-[30px]">
          <Heading2 ref={heading2Ref} className="">
            Built from Industry Insight. Powered by Technology.
          </Heading2>

          <Paragraph ref={paragraphRef} className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna.
          </Paragraph>
          <Paragraph ref={paragraph2Ref} className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna. sed do
            eiusmod tempor incididunt ut labore et dolore lorem ipsum set ut do
            elit suit labore et magna adipisicing dem sed dolor amet.
          </Paragraph>
        </div>
        <div className="relative  grid grid-cols-2 grid-rows-3 gap-5 min-w-full md:min-w-[350px] lg:min-w-[435px] h-100  sm:h-[550px] lg:h-[620px] transition-all duration-300 ease-in-out">
          <div
            ref={ImageRef1}
            className="relative row-span-1 rounded-[20px] overflow-hidden  "
          >
            <Image
              src="/images/about/img_1.webp"
              alt="employee_1"
              fill
              className="object-cover "
            />
          </div>
          <div
            ref={ImageRef2}
            className="relative row-span-2 rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/about/img_2.webp"
              alt="employee_2"
              fill
              className="object-cover "
            />
          </div>
          <div
            ref={ImageRef3}
            className="relative row-span-2 rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/about/img_3.webp"
              alt="employee_3"
              fill
              className="object-cover "
            />
          </div>
          <div
            ref={ImageRef4}
            className="relative row-span-1 rounded-[20px] overflow-hidden"
          >
            <Image
              src="/images/about/img_4.webp"
              alt="employee_4"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindEtarath;
