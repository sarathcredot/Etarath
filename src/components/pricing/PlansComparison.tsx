"use client";

import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../common/Button";
import Heading7 from "../common/Heading7";
import { GoCheckCircleFill } from "react-icons/go";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "GL and Financials",
    standard: true,
    commercial: true,
    corporate: true,
  },
  { name: "CRM", standard: true, commercial: true, corporate: true },
  { name: "Sales", standard: true, commercial: true, corporate: true },
  { name: "Purchasing", standard: true, commercial: true, corporate: true },
  {
    name: "Inventory Control",
    standard: true,
    commercial: true,
    corporate: true,
  },
  {
    name: "Office Management",
    standard: true,
    commercial: true,
    corporate: true,
  },
  {
    name: "Production Planning",
    standard: true,
    commercial: true,
    corporate: true,
  },
  { name: "BPM", standard: true, commercial: true, corporate: true },
  {
    name: "Priority Mobile",
    standard: false,
    commercial: true,
    corporate: true,
  },
  {
    name: "System Administration",
    standard: false,
    commercial: true,
    corporate: true,
  },
  {
    name: "Manufacturing",
    standard: false,
    commercial: false,
    corporate: true,
  },
  { name: "Fixed Assets", standard: false, commercial: false, corporate: true },
  {
    name: "Purchase Planning",
    standard: false,
    commercial: false,
    corporate: true,
  },
];
const PlansComparison = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  // const paragraph2Ref = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const thRef1 = useRef<HTMLDivElement>(null);
  const thRef2 = useRef<HTMLDivElement>(null);
  const thRef3 = useRef<HTMLDivElement>(null);
  const thRef4 = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      const table_feature = gsap.utils.toArray(".table_feature");
      const table_check1 = gsap.utils.toArray(".table_check1");
      const table_check2 = gsap.utils.toArray(".table_check2");
      const table_check3 = gsap.utils.toArray(".table_check3");
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
          btnRef.current,
          { opacity: 0, scale: 0.8, x: -100 },
          { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: "power2.out" },
          "-=.2",
        )
        .fromTo(
          tableRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=.2",
        )
        .fromTo(
          thRef1.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=.3",
        )
        .fromTo(
          thRef2.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=.3",
        )
        .fromTo(
          thRef3.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=.3",
        )
        .fromTo(
          thRef4.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=.3",
        )
        .from(
          table_feature,
          {
            opacity: 0,
            scale: 0.9,
            x: -80,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=1",
        )
        .from(
          table_check1,
          {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            stagger: 0.1,
          },
          "-=0.9",
        )
        .from(
          table_check2,
          {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            stagger: 0.1,
          },
          "-=1",
        )
        .from(
          table_check3,
          {
            opacity: 0,
            scale: 0,
            duration: 0.2,
            stagger: 0.1,
          },
          "-=1",
        );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleans everything
  }, []);

  return (
    <div ref={containerRef} className=" mb-[50px] md:mb-20 lg:mb-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-10 mb-[60px]">
        <div className=" ">
          <Heading2
            ref={heading1Ref}
            className="max-w-[615px] mb-5 md:mb-[30px]"
          >
            See all plans comparison for your ultimate decission
          </Heading2>

          <Paragraph ref={paragraphRef} className=" max-w-[730px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet.
          </Paragraph>
        </div>
        <div ref={btnRef} className="">
          <Button className="whitespace-nowrap" textColor="black">
            Get Started
          </Button>
        </div>
      </div>
      <div
        ref={tableRef}
        className="bg-[#1E1F21] rounded-[28px] p-5 md:p-10 lg:p-[50px] text-white overflow-hidden"
      >
        {/* Header */}
        <div className=" overflow-x-scroll">
          <div className="min-w-[600px] grid grid-cols-9 border-b border-gray-600 pb-4 gap-2">
            {/* <div className="text-orange-500 font-semibold">
             
            </div> */}
            <Heading7
              ref={thRef1}
              className="col-span-3 text-primary whitespace-nowrap"
            >
              {" "}
              Included Features
            </Heading7>
            <Heading7
              ref={thRef2}
              className="col-span-2 text-center whitespace-nowrap"
            >
              Standard
            </Heading7>
            <Heading7
              ref={thRef3}
              className="col-span-2 text-center whitespace-nowrap"
            >
              Commercial
            </Heading7>
            <Heading7
              ref={thRef4}
              className="col-span-2 text-center whitespace-nowrap"
            >
              Corporate
            </Heading7>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="table_feature min-w-[600px]  grid grid-cols-9 items-center border-t border-[#E2EDFF] "
            >
              <Paragraph className="col-span-3 py-4 border-r border-[#E2EDFF] whitespace-nowrap">
                {feature.name}
              </Paragraph>

              <div className="col-span-2 flex justify-center py-4 border-r border-[#E2EDFF]  h-full">
                {feature.standard && (
                  <GoCheckCircleFill className="table_check1 w-5 h-5 text-white" />
                )}
              </div>

              <div className="col-span-2 flex justify-center py-4 border-r border-[#E2EDFF] h-full">
                {feature.commercial && (
                  <GoCheckCircleFill className="table_check2 w-5 h-5 text-white" />
                )}
              </div>

              <div className="col-span-2 flex justify-center py-4  h-full">
                {feature.corporate && (
                  <GoCheckCircleFill className="table_check3 w-5 h-5 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansComparison;
