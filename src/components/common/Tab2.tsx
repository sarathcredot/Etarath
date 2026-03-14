import React from "react";

type Tab2Props = {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
  tabs: string[];
};

const Tab2 = ({ tabs, setActiveTab, activeTab }: Tab2Props) => {
  return (
    <>
      <div className="inline-flex items-center bg-[#1E1F21] rounded-full p-1 min-w-full overflow-x-scroll">
        {tabs?.map((item: string) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            className={`flex-1 px-[30px] py-2 ${
              activeTab === item ? "text-black bg-white" : "text-white"
            } rounded-full text-center cursor-pointer transition-all duration-300 ease-in-out`}
          >
            <p className="text-[15px] font-[600] font-jakarta ">
              {item}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tab2;
