import React from "react";
import SubHeading2 from "./Subheading2";

interface Props {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

type Tab = {
  title: string;
  count?: number;
};

const Tab = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <div>
      <div className="w-full flex items-center border-b border-black">
        {tabs &&
          tabs.map((item: Tab, index: number) => (
            <div
              key={index}
              className={`px-5 py-[15px] border-b-2 ${
                activeTab === index ? " border-primary" : "border-transparent"
              }  cursor-pointer  transition-all duration-300 ease-in-out`}
              onClick={() => setActiveTab(index)}
            >
              <SubHeading2
                className={`${
                  activeTab === index ? "!font-[600]" : "!font-[400]"
                } transition-all duration-300 ease-in-out`}
              >
                {item?.title}
              </SubHeading2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tab;
