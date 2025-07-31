import React from "react";
import Heading8 from "../common/Heading8";
import Paragraph from "../common/Paragraph";
import Heading1 from "../common/Heading1";
import Button3 from "../common/Button3";

const Features = () => {
  return (
    <div className="my-[100px]">
      <div className=" grid grid-cols-18 gap-5">
        <div className=" col-span-9    border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Interaction</Heading8>{" "}
          <Paragraph className="mb-[20px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Do eiusmod
            dolore ut magna sed ipsum
          </Paragraph>
          <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
        <div className=" col-span-9    border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Privacy & Security</Heading8>
          <Paragraph className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Do eiusmod
            dolore ut magna sed ipsum elit due eiusmod tempor do etil.
          </Paragraph>
           <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
        <div className=" col-span-4    row-span-2 border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Warehouse management</Heading8>
          <Paragraph className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna.
          </Paragraph>
           <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
        <div className=" col-span-10  flex flex-col items-center justify-center gap-0  px-[30px] py-[25px]  transition-all duration-300">
          <Heading1 className="">KEY</Heading1>
          <h1 className="text-center text-[115px] leading-none tracking-[3px] font-[800]  text-outline-shadow font-jakarta"
          >FEATURES</h1>
        </div>
        <div className=" col-span-4     border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px] ">
            Sales Exicutive management
          </Heading8>
            <Paragraph className="mb-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut dem sed
              magna.
            </Paragraph>
             <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
        <div className="  col-span-7    border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Multi Level Marketing</Heading8>
          <Paragraph className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod
            tempor incididunt.
          </Paragraph>
           <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
        <div className="  col-span-7    border border-white rounded-[23px] px-[30px] py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Online Invoice Generation</Heading8>{" "}
          <Paragraph className="mb-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod
            tempor incididunt.
          </Paragraph>
           <Button3 color="white" className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">Get Started</Button3>
        </div>
      </div>
    </div>
  );
};

export default Features;
