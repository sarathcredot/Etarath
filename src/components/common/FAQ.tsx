"use client";

import React, { useState, useRef, useEffect, forwardRef } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Heading8 from "./Heading8";
import Paragraph from "./Paragraph";

const FAQ = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    0
  );
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useEffect(() => {
    // Calculate heights after component mounts
    const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, []);

  useEffect(() => {
    // Recalculate heights when active question changes
    if (activeQuestionIndex !== null) {
      const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
      setContentHeights(heights);
    }
  }, [activeQuestionIndex]);

  const questions = [
    {
      question: "Smart Quotation System",
      answer:
        "Request and compare quotes from multiple verified suppliers instantly. Get competitive pricing, transparent terms, and detailed product specifications—all in seconds."
    },
    {
      question: "Wide Range of Products",
      answer:
        "Access the largest verified supplier network of tyre products and automotive solutions.Discover new products, explore innovations, and stay ahead of market trends with real - time product knowledge."
    },
    {
      question: "Connect with Industry Leaders",
      answer:
        "Build relationships with established suppliers and industry experts. Collaborate on business opportunities, gain insights from market leaders, and grow through strategic partnerships."
    },
    {
      question: "Delivery Tracking",
      answer:
        "Track every order from the supplier in real-time. Know the exact time of arrival, manage receiving, and maintain accurate inventory records with complete visibility."
    },
  ];
  return (
    <div ref={ref} className="flex flex-col">
      {questions?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${questions?.length - 1 !== index && `border-b border-white`
            } transition-all duration-300 ease-in-out`}
        >
          <div
            className="group flex items-center gap-5 py-4 md:py-[22px] cursor-pointer  transition-all duration-200"
            onClick={() =>
              setActiveQuestionIndex(
                activeQuestionIndex === index ? null : index
              )
            }
          >
            <div className="transition-transform duration-300 ease-in-out">
              {activeQuestionIndex === index ? (
                <FaMinus
                  color="#FFF"
                  className=" md:text-[20px] transform rotate-0 transition-transform duration-300 ease-in-out"
                />
              ) : (
                <FaPlus
                  color="#FFF"
                  className=" md:text-[20px] transform rotate-0 transition-transform duration-300 ease-in-out group-hover:rotate-90"
                />
              )}
            </div>
            <Heading8 className="transition-colors duration-200">
              {item?.question}
            </Heading8>
          </div>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight:
                activeQuestionIndex === index
                  ? `${contentHeights[index] + 25}px`
                  : "0px",
              opacity: activeQuestionIndex === index ? 1 : 0,
              paddingBottom: activeQuestionIndex === index ? "25px" : "0px",
            }}
          >
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="transform transition-transform duration-500 ease-in-out"
              style={{
                transform:
                  activeQuestionIndex === index
                    ? "translateY(0)"
                    : "translateY(-10px)",
              }}
            >
              <Paragraph>{item?.answer}</Paragraph>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
