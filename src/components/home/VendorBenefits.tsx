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
    <div className="mb-[100px]">
      <div className="flex flex-col gap-[60px]">
        <div className="flex justify-between items-center gap-[60px]">
          <Heading2 className="w-[50%]">
            Benefits of Becoming an{" "}
            <span className="text-primary">Etarath</span> Vendor
          </Heading2>
          <Paragraph className="w-[50%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna. sed do
            eiusmod tempor incididunt ut labore et dolore lorem ipsum set ut do
            elit suit labore et magna adipisicing dem sed dolor amet.{" "}
          </Paragraph>
        </div>
        <div className="flex flex-nowrap justify-center  gap-5">
          {benefits?.map((item, index) => (
            <div
              key={index}

              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`relative  h-[470px] flex items-center justify-center border border-white rounded-[20px] group cursor-pointer hover:bg-primary hover:border-primary  ${
                activeTab === index ? "flex-col justify-start items-start !w-[500px] group bg-primary !border-primary px-[45px] py-10" : "flex-1"
              }    transition-all duration-500 ease-in-out`}
            >
                {activeTab === index?(
                    <>
                    <Heading7 className="mb-5">{item?.heading}</Heading7>
                    <Paragraph className="mb-[70px]">{item?.description}</Paragraph>
                    <Button3 color="white">Become a Vendor</Button3>
                    </>
                ):(

                    <Heading6 className="absolute transform -rotate-90 whitespace-nowrap">
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
