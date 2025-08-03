"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import Heading7 from "../common/Heading7";
import Button3 from "../common/Button3";
import Heading3 from "../common/Heading3";
import Heading5 from "../common/Heading5";
import { GoCheckCircleFill } from "react-icons/go";
import Button from "../common/Button";

const RetailerPlans = () => {
  const plans = [
    {
      id: 1,
      title: "Standard",
      description: "For small shop owners and retailers",
      features: [
        "Lorem ipsum set amet elit sed dotempor enim.",
        "Amet set ipsum elit set do tempor.",
        "Ipsum elit lorem sed tempor que amet.",
        "Sed afet set amet que ipsum elite do eiusmod.",
        "Adispising veniam minim enim ad magna.",
      ],
      freeTrial: 75,
      price: 49,
      image: "/home/plan_card_image.webp",
    },
    {
      id: 2,
      title: "Executive",
      description: "For intermediate shop owners and retailers",
      features: [
        "Lorem ipsum set amet elit sed dotempor enim.",
        "Amet set ipsum elit set do tempor.",
        "Ipsum elit lorem sed tempor que amet.",
        "Sed afet set amet que ipsum elite do eiusmod.",
        "Adispising veniam minim enim ad magna.",
      ],
      freeTrial: 75,
      price: 89,
      image: "/home/plan_card_image.webp",
    },
    {
      id: 3,
      title: "Corporate",
      description: "For large scale business owners and retailers",
      features: [
        "Lorem ipsum set amet elit sed dotempor enim.",
        "Amet set ipsum elit set do tempor.",
        "Ipsum elit lorem sed tempor que amet.",
        "Sed afet set amet que ipsum elite do eiusmod.",
        "Adispising veniam minim enim ad magna.",
      ],
      freeTrial: 75,
      price: 129,
      image: "/home/plan_card_image.webp",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const imageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const h5Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current && imageRef.current) {
      const tl = gsap.timeline({ duration: 0.8, ease: "power2.out" });
      const featureItems = featuresRef.current.children;

      tl.fromTo(
        imageRef.current,
        { opacity: 0.9 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          h5Ref.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
          "-=1"
        )

        .fromTo(
          featureItems,
          { opacity: 0, x: -30, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
          },
          "-=1"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
          "=0.1"
        );
    }
  }, [selectedPlan]);

  const handlePlanSelect = (plan: (typeof plans)[0]) => {
    if (plan.id === selectedPlan.id) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setSelectedPlan(plan);
      },
    });

    // Fade out current
    if (featuresRef.current && imageRef.current) {
      const featureItems = featuresRef.current.children;

      tl.to(featureItems, {
        opacity: 0,
        x: 30,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        stagger: 0.05,
      })
        .to(
          buttonRef.current,
          {
            opacity: 0,
            x: -30,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.1"
        )
        .to(
          h5Ref.current,
          {
            opacity: 0,
            x: -30,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.1"
        )
        .to(
          imageRef.current,
          {
            opacity: 0.9,
            duration: 0.4,
            ease: "power2.in",
          },
          "-=0.1"
        );
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-[30px] md:gap-10 900:gap-[60px] max-w-[1280px] mx-auto  px-5 md:px-10 lg:px-[70px] pt-10 md:pt-[70px]  lg:pt-[90px] pb-[50px] md:pb-[80px] lg:pb-[100px] text-black">
        <div className="  flex flex-col items-center justify-center gap-[10px] md:gap-5 lg:gap-[30px]">
          <Heading2 className="text-center">Choose idle plan for Retailer</Heading2>
          <Paragraph className="text-center max-w-[730px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet.
          </Paragraph>
        </div>
        <div className="900:h-[610px] flex-col 900:flex-row flex 900:items-center justify-center gap-5">
          <div className="flex-1 relative min-h-[400px] h-full 900:w-1/2 rounded-[20px] bg-black overflow-hidden">
            <div className="absolute inset-0 z-10  text-white px-5 py-[15px] md:px-10 md:py-[35px] 900:px-[60px] 900:py-[55px]">
              <div className="relative  h-full">
                <Heading5
                  ref={h5Ref}
                  className="mb-[15px] md:mb-5 900:mb-[30px]"
                >
                  What Included:
                </Heading5>
                <div
                  ref={featuresRef}
                  className="flex flex-col gap-[15px] 900:gap-5"
                >
                  {selectedPlan?.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center  gap-[10px] 900:gap-[15px]"
                    >
                      <GoCheckCircleFill className=" !min-w-5 md:w-[25px] 900:w-[30px] text-[20px] md:text-[25px] 900:text-[30px]" />
                      <Paragraph>{feature}</Paragraph>
                    </div>
                  ))}
                </div>
                <div
                  ref={buttonRef}
                  className="hidden  absolute bottom-0  left-0 sm:block mt-auto"
                >
                  <Button variant="outline" color="white">
                    See All Comparison
                  </Button>
                </div>
              </div>
            </div>

            <div ref={imageRef}>
              <Image
                src={selectedPlan?.image}
                alt=""
                fill
                className="object-cover w-full h-full "
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent pointer-events-none"></div>
          </div>

          <div className="flex-1 flex flex-col h-full  justify-between gap-5 ">
            {plans?.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePlanSelect(item)}
                className={`relative flex-1 flex flex-col sm:flex-row   sm:items-center justify-between  900:gap-[35px]  ${
                  selectedPlan?.id === item?.id
                    ? "bg-black text-white"
                    : "bg-[#F2F2F2]"
                } cursor-pointer rounded-[20px] px-5 md:px-[25px] 900:px-[35px] py-[15px] md:py-5 900:py-0  transition-all duration-300 ease-in-out`}
              >
                <div>
                  <Heading7 className="mb-[9px]">{item?.title}</Heading7>
                  <Paragraph className="mb-[10px]">
                    {item?.description}
                  </Paragraph>
                  <Button3
                    color={`${
                      selectedPlan?.id === item?.id ? "white" : "black"
                    }`}
                    className="!hidden sm:!flex"
                  >
                    Purchase
                  </Button3>
                </div>
                <div className="flex flex-col items-end">
                  <Paragraph className="text-primary sm:whitespace-nowrap">
                    {item?.freeTrial}days free, then monthly
                  </Paragraph>
                  <Heading3>{item?.price} AED</Heading3>
                </div>
                <Button3
                  color={`${selectedPlan?.id === item?.id ? "white" : "black"}`}
                  className="absolute left-5 bottom-5 sm:!hidden"
                >
                  Purchase
                </Button3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerPlans;
