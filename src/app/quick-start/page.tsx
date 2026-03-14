"use client";

import React, { useEffect, useRef } from "react";
import FAQComponent from "@/components/common/FAQComponent";
import Heading5 from "@/components/common/Heading5";
import { GoCheckCircleFill } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import Button from "@/components/common/Button";
import Image from "next/image";
import gsap from "gsap";
import Heading2 from "@/components/common/Heading2";

const QuickStart = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

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
      id: 1,
      title: "Become a Vendor",
      description:
        "Ready to grow your tyre business across the UAE? Joining Etarath as a verified vendor puts your products in front of real, active buyers — backed by a suite of intelligent digital tools designed to simplify your operations and accelerate your revenue.",
      features: [
        "Expand your customer base across the UAE and GCC ",
        " Improve operational efficiency with end-to-end digital tools ",
        "Gain real-time business insights through advanced analytics ",
        "Increase sales with AI-powered smart tools",
        "Strengthen and manage customer relationships with confidence",
      ],
      image: "/images/img1.webp",
      btnText: "Join as Vendor",
    },
    {
      id: 2,
      title: "Become a Retailer",
      description:
        "Ready to take your tyre retail business to the next level? Etarath gives retailers direct access to a wide network of verified suppliers and multiple markets across the UAE — all managed from one smart, intuitive digital platform. No more chasing quotes, managing fragmented supplier relationships, or operating in the dark.",
      features: [
        "Discover new, verified suppliers across the UAE ",
        "Expand your product offerings with a wider catalogue ",
        "Speed up the quotation process with instant digital tools ",
        "Improve claim handling with AI-powered management ",
        "Track every order transparently in real time ",
        "Grow your customer base with faster, smarter service",
      ],
      image: "/images/img2.webp",
      btnText: "Join as Retailer",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".plan-card");

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
        .from(
          cards,
          {
            opacity: 0,
            y: 80,
            duration: 0.8,
            stagger: 0.25,
          },
          "-=0.2",
        );

      cards.forEach((card: any) => {
        const image = card.querySelector(".plan-image");
        const title = card.querySelector(".plan-title");
        const desc = card.querySelector(".plan-desc");
        const features = card.querySelectorAll(".plan-feature");
        const button = card.querySelector(".plan-button");

        const cardTL = gsap.timeline({ delay: 1.5 });

        cardTL
          .from(image, {
            opacity: 0,
            scale: 1.1,
            duration: 0.8,
          })
          .from(
            title,
            {
              opacity: 0,
              x: -30,
              duration: 0.4,
            },
            "-=0.1",
          )
          .from(
            desc,
            {
              opacity: 0,
              x: -30,
              duration: 0.4,
            },
            "-=0.1",
          )
          .from(
            features,
            {
              opacity: 0,
              x: -30,
              stagger: 0.15,
              duration: 0.5,
            },
            "-=0.2",
          )
          .from(
            button,
            {
              opacity: 0,
              x: -50,
              duration: 0.4,
            },
            "-=0.2",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0">
      <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
        <Heading2 ref={headingRef} className="text-center">
          Let get started <br /> with{" "}
          <span className="text-primary">Etarath</span>
        </Heading2>

        <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-[50px] md:mb-10 lg:mb-[100px]">
        {plans.map((item, index) => (
          <div
            key={index}
            className="plan-card relative min-h-100 sm:min-h-[500px] md:min-h-[650px] rounded-[20px] bg-black overflow-hidden"
          >
            <div className="plan-image absolute inset-0">
              <Image src={item.image} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent"></div>
            </div>

            <div className="relative z-10 h-full text-white p-4 md:px-8 md:py-10 flex flex-col">
              <Heading5 className="plan-title mb-5 md:mb-[30px]">{item.title}</Heading5>

              <Paragraph className="plan-desc mb-5 md:mb-[30px]">
                {item.description}
              </Paragraph>

              <div className="hidden sm:flex flex-col gap-3 md:gap-5 mb-6">
                {item.features.map((feature, i) => (
                  <div key={i} className="plan-feature flex items-center gap-3">
                    <GoCheckCircleFill className="min-w-5 min-h-5 md:min-w-[30px] md:min-h-[30px] " />
                    <Paragraph>{feature}</Paragraph>
                  </div>
                ))}
              </div>

              <div className="plan-button mt-auto">
                <Button variant="outline" color="white">
                  {item.btnText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FAQComponent questions={questions} />
    </div>
  );
};

export default QuickStart;
