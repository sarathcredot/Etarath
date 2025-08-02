import React from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Button from "../common/Button";
import FAQ from "../common/FAQ";

const RetailerBenefits = () => {
  return (
    <div className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 md:gap-[60px]">
        <div className="lg:w-[47%] flex flex-col items-start justify-start">
          <Heading2 className="mb-[30px]">
            Benefits of Becoming an <br className="hidden md:block lg:hidden" />
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
          <Button type="link" href="/" textColor="black" className="">
            Get Started
          </Button>
        </div>
        <div className="lg:w-[50%]">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default RetailerBenefits;
