"use client";

import React, { useEffect, useRef, useState } from "react";
import FAQComponent from "@/components/common/FAQComponent";
import Heading5 from "@/components/common/Heading5";
import { GoCheckCircleFill } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import Button from "@/components/common/Button";
import Image from "next/image";
import gsap from "gsap";
import Heading2 from "@/components/common/Heading2";
import Tab2 from "@/components/common/Tab2";
import Switch from "@/components/common/Switch";
import { ArrowRight, Check } from "lucide-react";
import Heading7 from "@/components/common/Heading7";
import Heading3 from "@/components/common/Heading3";
import PlansComparison from "@/components/pricing/PlansComparison";
const questions = [
  {
    question: "Is there a minimum order quantity?",
    answer:
      "No. Etarath does not impose any minimum order quantity. Whether you're placing a small retail order or a large bulk purchase, the platform is flexible enough to support transactions of any size.",
  },
  {
    question: "What if my vendor doesn't answer my call?",
    answer:
      "If your vendor is unavailable, you can connect directly with your assigned Etarath sales executive through the platform. Your sales executive will assist you with updates or help place your order.",
  },
  {
    question: "How do I submit a claim?",
    answer: (
      <>
        Submitting a claim on Etarath is straightforward. From your dashboard,
        navigate to the Warranty and Claims section and complete the claim
        request form with all relevant details. For assistance contact{" "}
        <a href="mailto:support@etarath.ai" className="text-primary">
          support@etarath.ai
        </a>
        .
      </>
    ),
  },
  {
    question: "Is Etarath available outside the UAE?",
    answer:
      "Currently Etarath operates within the UAE market. Expansion across GCC is part of our roadmap.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Absolutely. Etarath is built with strict data security standards ensuring that all business data and transactions remain protected.",
  },
];

const plans = [
  {
    name: "Standard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    price: "Free",
    priceMonthly: null,
    badge: "Limited Features",
    features: [
      "Order Management",
      "Warranty Management",
      "Purchasing",
      "Sales",
    ],
    highlighted: false,
  },
  {
    name: "Executive",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    priceMonthly: 49,
    badge: "75 days free",
    features: [
      "Order Management",
      "Warranty Management",
      "Purchasing",
      "Sales",
      "Inventory Control",
      "Delivery Management",
    ],
    highlighted: true,
  },
  {
    name: "Corporate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    priceMonthly: 99,
    badge: "75 days free",
    features: [
      "Order Management",
      "Warranty Management",
      "Purchasing",
      "Sales",
      "Inventory Control",
      "Delivery Management",
    ],
    highlighted: false,
  },
];

const Tabs = ["Retailer", "Vendor"];
const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const planContainerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>(Tabs[0]);
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".plan-card");
      const names = gsap.utils.toArray(".plan-name");
      const descriptions = gsap.utils.toArray(".plan-description");
      const badges = gsap.utils.toArray(".plan-badge");
      const prices = gsap.utils.toArray(".plan-price");
      const btns = gsap.utils.toArray(".plan-btn");
      const dividers = gsap.utils.toArray(".plan-divider");
      const features = gsap.utils.toArray(".plan-feature");
      const highlighted = gsap.utils.toArray(".highlighted");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        {
          opacity: 1,
          duration: 0.6,
        },
      )
        .from(headingRef.current, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
        })
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
          },
          "-=0.3",
        )
        .fromTo(
          planContainerRef.current,
          {
            opacity: 0,
            y: 100,
            duration: 0.6,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.9",
        )
        .from(
          tabRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 40,
            duration: 0.6,
          },
          "-=0.5",
        )
        .from(
          switchRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 40,
            duration: 0.6,
          },
          "-=0.5",
        )
        .from(
          cards,
          {
            opacity: 0,
            y: 100,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.2",
        )
        .from(
          names,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          descriptions,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          badges,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          prices,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          btns,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          dividers,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          features,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.5",
        )
        .from(
          highlighted,
          {
            opacity: 0,
            y: 200,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=1",
        )
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0">
      <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
        <Heading2 ref={headingRef} className="text-center">
          Simple, Flexible Pricing <br className="hidden md:block" /> Plans of{" "}
          <span className="text-primary">Etarath</span>
        </Heading2>

        <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
          See our pricing data and select your best service from our side. We
          always appreciateyour subscription and we are dedicate to give our
          best efforts
        </Paragraph>
      </div>

      <div
        ref={planContainerRef}
        className="flex flex-col items-center  gap-20 md:gap-[90px] mb-[50px] md:mb-20 lg:mb-[100px]"
      >
        <div className="flex flex-col items-center gap-5 md:gap-[30px]">
          <div ref={tabRef} className="md:w-[320px]">
            <Tab2
              tabs={Tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div
            ref={switchRef}
            className="flex flex-col gap-[15px] items-center"
          >
            <div className="flex items-center gap-[10px]">
              <h6 className="text-[15px] font-[600] ">Monthly</h6>
              <Switch checked={isAnnual} onChange={setIsAnnual} />
              <h6 className="text-[15px] font-[600] ">Annually</h6>
            </div>
            <h6 className="text-center text-[15px] font-[600] text-primary">
              Save 25% Off in Annual Plan
            </h6>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[25px] w-full ">
            {plans.map((plan, index) => {
              const price = isAnnual
                ? plan.priceMonthly
                  ? Math.floor(plan.priceMonthly * 12 * 0.75)
                  : null
                : plan.priceMonthly;

              return (
                <div
                  key={index}
                  className={`plan-card relative ${index === 0 ? `order-2 lg:order-1` : index === 1 ? `order-1 lg:order-2 md:col-span-2 lg:col-span-1 max-w-[600px] mx-auto flex justify-center ` : index === 2 ? `order-3 lg:order-3` : `order-${index} lg:order-${index}`}    `}
                >
                  {plan.highlighted && (
                    <div className="highlighted w-full text-center h-[100px] absolute -top-[42px] left-1/2 -translate-x-1/2 bg-white text-black text-[17px] md:text-[20px] font-semibold px-6 py-2 rounded-[30px]">
                      Best Value
                    </div>
                  )}
                  <div
                    className={`relative h-full flex flex-col justify-between rounded-[24px] border border-white px-5  md:px-[25px] py-10 text-white bg-black`}
                  >
                    <div className="">
                      <Heading7 className="plan-name text-center mb-[10px]">
                        {plan.name}
                      </Heading7>

                      {/* Description */}
                      <Paragraph className="plan-description text-center mb-[10px] ">
                        {plan.description}
                      </Paragraph>

                      {/* Badge */}
                      {plan.badge && (
                        <Paragraph className="plan-badge text-center text-primary">
                          {plan.badge}
                        </Paragraph>
                      )}

                      {/* Price */}
                      <div className="plan-price text-center mt-[10px] mb-[30px]">
                        {plan.price === "Free" ? (
                          <Heading3 className="!capitalize">Free</Heading3>
                        ) : (
                          <Heading3 className="!capitalize">
                            {price} AED
                            <span className="text-sm font-medium text-white">
                              {isAnnual ? "/Year" : "/Month"}
                            </span>
                          </Heading3>
                        )}
                      </div>

                      {/* Button */}
                      {/* <button className="flex items-center justify-center gap-3 w-full bg-primary text-black font-semibold py-3 rounded-full hover:opacity-90 transition">
                      
                      <ArrowRight size={18} />
                    </button> */}
                      <div className="plan-btn">
                        <Button className="w-full " textColor="black">
                          Speak to a Sales Expert
                        </Button>
                      </div>

                      {/* Divider */}
                      <div className="plan-divider border-t border-white my-[30px] md:my-10" />

                      {/* Features */}
                      <ul className="flex flex-col gap-3 md:gap-5">
                        {plan.features.map((feature, i) => (
                          <li
                            key={i}
                            className="plan-feature flex items-center gap-[15px] text-sm text-gray-300"
                          >
                            <GoCheckCircleFill className="w-[30px] h-[30px] text-white  rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>{" "}
        </div>
      </div>

      <PlansComparison />

      <FAQComponent questions={questions} />
    </div>
  );
};

export default Pricing;
