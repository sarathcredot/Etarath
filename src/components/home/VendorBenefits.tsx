"use client";

import React, { useState } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Heading6 from "../common/Heading6";
import Heading7 from "../common/Heading7";
import Button3 from "../common/Button3";

const VendorBenefits = () => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const benefits = [
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
    {
      title: "Lorem ipsum set amet",
      heading: "Lorem ipsum dolor, consectetur adipiscing elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Suit ipsum dolor sit amet, consectetur adipiscing elit ut dem sed magna.Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet. ",
    },
  ];

  return (
    <div className=" mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 md:gap-[30px] lg:gap-[60px]">
          <Heading2 className="lg:w-[50%]">
            Benefits of Becoming an{" "} <br className="hidden md:block lg:hidden"/>
            <span className="text-primary">Etarath</span> Vendor
          </Heading2>
          <Paragraph className="lg:w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna. sed do
            eiusmod tempor incididunt ut labore et dolore lorem ipsum set ut do
            elit suit labore et magna adipisicing dem sed dolor amet.{" "}
          </Paragraph>
        </div>
        <div className="flex flex-col lg:flex-row flex-nowrap justify-center  gap-5">
          {benefits?.map((item, index) => (
            <div
              key={index}

              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`relative  lg:h-[470px] flex  items-center lg:justify-center border border-white rounded-[15px] md:rounded-[20px] group cursor-pointer hover:bg-primary hover:border-primary  ${
                activeTab === index ? "flex-col justify-start items-start lg:!w-[500px] group bg-primary !border-primary px-5 py-[15px] lg:px-[45px] lg:py-10" : "flex-1 px-5 py-[15px]"
              }    transition-all duration-500 ease-in-out`}
            >
                {activeTab === index?(
                    <>
                    <Heading7 className="mb-[15px] md:mb-5">{item?.heading}</Heading7>
                    <Paragraph className="mb-5 md:mb-10 lg:mb-[70px]">{item?.description}</Paragraph>
                    <Button3 color="white">Become a Vendor</Button3>
                    </>
                ):(

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
