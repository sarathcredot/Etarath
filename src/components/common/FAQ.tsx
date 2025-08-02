"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Heading8 from "./Heading8";
import Paragraph from "./Paragraph";

const FAQ = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(
    0
  );
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useEffect(() => {
    // Calculate heights after component mounts
    const heights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
    setContentHeights(heights);
  }, []);

  useEffect(() => {
    // Recalculate heights when active question changes
    if (activeQuestionIndex !== null) {
      const heights = contentRefs.current.map(ref => ref?.scrollHeight || 0);
      setContentHeights(heights);
    }
  }, [activeQuestionIndex]);

  const questions = [
    {
      question: "Lorem ipsum sed ut amet suit queue",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum sed ut amet suit queue",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum sed ut amet suit queue",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      question: "Lorem ipsum sed ut amet suit queue",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];
  return (
    <div className="flex flex-col">
      {questions?.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            questions?.length - 1 !== index && `border-b border-white`
          } transition-all duration-300 ease-in-out`}
        >
          <div 
            className="group flex items-center gap-5 py-4 md:py-[22px] cursor-pointer  transition-all duration-200"
            onClick={() =>
              setActiveQuestionIndex(activeQuestionIndex === index ? null : index)
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
            <Heading8 className="transition-colors duration-200">{item?.question}</Heading8>
          </div>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: activeQuestionIndex === index 
                ? `${contentHeights[index] + 25}px` 
                : '0px',
              opacity: activeQuestionIndex === index ? 1 : 0,
              paddingBottom: activeQuestionIndex === index ? '25px' : '0px',
            }}
          >
            <div 
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="transform transition-transform duration-500 ease-in-out"
              style={{
                transform: activeQuestionIndex === index 
                  ? 'translateY(0)' 
                  : 'translateY(-10px)'
              }}
            >
              <Paragraph>{item?.answer}</Paragraph>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
