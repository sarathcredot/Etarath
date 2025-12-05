"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Heading6 from "../common/Heading6";
import Heading7 from "../common/Heading7";
import Button3 from "../common/Button3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VendorBenefits = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const benefitsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !benefitsContainerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    )
      .fromTo(
        containerRef.current.children[0],
        { opacity: 0, scale: 0.6, y: 50, stagger: 0.2 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        }
      )
      .fromTo(
        benefitsContainerRef.current.children,
        { opacity: 0, x: -100, stagger: 0.2 },
        { opacity: 1, x: 0, stagger: 0.2, duration: 0.3, ease: "power2.out" }, '-=0.2'
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const benefits = [
    {
      title: "Analytics Dashboard ",
      heading: "Analytics Dashboard ",
      description:
        "Monitor your business and performance in real-time. Track sales trends, analyze customer behavior, and make data-driven decisions that drive revenue growth."
    },
    {
      title: "Streamlined Inventory & Ordering",
      heading: "Streamlined Inventory & Ordering",
      description:
        "Manage stock levels across all channels from one platform. Automate inventory updates and fulfill orders faster, reducing manual work and human error.Create a business in less than a minute. "
    },
    {
      title: "Multiple Pricing System",
      heading: "Multiple Pricing System",
      description:
        "Set flexible pricing tiers for different customer segments, bulk orders, and seasonal campaigns. Ensure to reach buyers with the best offers autonomously. "
    },
    {
      title: "Claim Management System",
      heading: "Claim Management System",
      description:
        "Handle warranty and product claims efficiently through an automated system. Resolve issues faster and maintain customer relationships with transparency and professionalism."
    },
    {
      title: "Sales Tracker",
      heading: "Sales Tracker",
      description:
        "Monitor every deal in progress. Track pipeline orders and performance, conversion rates, and team productivity—giving you the visibility needed to meet targets and accelerate growth."
    },
    {
      title: "Business Expansion & Reach",
      heading: "Business Expansion & Reach",
      description:
        "Access a growing network of qualified buyers across the UAE and beyond. Reduce customer acquisition costs and scale your business without additional overhead."
    },

    
  ];

  return (
    <div className=" mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div ref={containerRef} className="flex flex-col gap-[60px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 md:gap-[30px] lg:gap-[60px]">
          <Heading2 className="lg:w-[50%]">
            {/* Benefits of Becoming an <br className="hidden md:block lg:hidden" />
            <span className="text-primary">Etarath</span> Vendor */}
            {/* Why Join <span className="text-primary">Etarath</span>  as a Verified Vendor */}
            Why Join  <span className="text-primary">Etarath</span>  as a Verified Vendor
          </Heading2>
          <Paragraph className="lg:w-[50%]">
            Partner with a network of trusted buyers and grow your business with confidence and
            safety.
          </Paragraph>
        </div>
        <div
          ref={benefitsContainerRef}
          className="flex flex-col lg:flex-row flex-nowrap justify-center  gap-5"
        >
          {benefits?.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`relative  lg:h-[470px] flex  items-center lg:justify-center border border-white rounded-[15px] md:rounded-[20px] group cursor-pointer hover:bg-white hover:text-primary  ${activeTab === index
                ? "flex-col justify-start items-start lg:!w-[500px] group bg-primary !border-primary px-5 py-[15px] lg:px-[45px] lg:py-10"
                : "flex-1 px-5 py-[15px]"
                }    transition-all duration-600 ease-in-out`}
            >
              {activeTab === index ? (
                <>
                  <Heading7 className="mb-[15px] md:mb-5">
                    {item?.heading}
                  </Heading7>
                  <Paragraph className={`mb-5 md:mb-10 lg:mb-[70px]   transition-all duration-300 ease-in-out`}>
                    {item?.description}
                  </Paragraph>
                  <Button3 color="white">Become a Vendor</Button3>
                </>
              ) : (
                <Heading6 className="lg:absolute transform lg:-rotate-90 lg:whitespace-nowrap">
                  {item?.title}
                </Heading6>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorBenefits;
