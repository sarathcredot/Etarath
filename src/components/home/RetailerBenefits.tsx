import React from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import FAQ from "../common/FAQ";

const RetailerBenefits = () => {
  return (
    <div className="mb-[100px]">
      <div className="flex items-center justify-between gap-[60px]">
        <div className="w-[47%] flex flex-col items-start justify-start">
          <Heading2 className="mb-[30px]">
            Benefits of Becoming an{" "}
            <span className="text-primary">Etarath</span> Retailer
          </Heading2>
          <Paragraph className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna. sed do
            eiusmod tempor incididunt ut labore et dolore lorem ipsum set ut do
            elit suit labore et magna adipisicing dem sed dolor amet.{" "}
          </Paragraph>
          <Button textColor="black" className="">
            Get Started
          </Button>
        </div>
        <div className="w-[50%]">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default RetailerBenefits;
