
"use client";

import { useState } from "react";
import Paragraph from "../common/Paragraph";
import { BsSearch } from "react-icons/bs";


export default function BlogSidebar({ tagclick }: any) {

    const allTags = [
        "PCR",
        "Motor Cycle",
        "Tyres",
        "Achievements",
        "Industrial",
        "UAE",
        "Dubai",
        "OTR",
        "Agriculture",
        "TBR",
        "Tubes",
        "LTR",
    ];
    const allCategories = [
        "Industrial",
        "History",
        "Blog",
        "News",
        "Events",
        "UAE",
        "Videos",
    ]

    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleTagClick = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );

        tagclick(selectedTags);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    return (

        <div className="sticky lg:sticky lg:top-24 ">
            <div className="bg-[#1a1b1d] rounded-2xl p-6 space-y-8 ">

                {/* Search */}
                <div>
                    <Paragraph className="text-sm font-medium mb-3 text-white">Search</Paragraph>

                    <div className="relative">
                        <input
                            placeholder="Search"
                            className="
            w-full
            bg-transparent
            border
            border-gray-600
            rounded-full
            pl-10
            pr-4
            py-2.5
            text-sm
            outline-none
            placeholder:text-gray-400
          "
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <BsSearch />
                        </span>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <Paragraph className="text-sm font-medium mb-4">Categories</Paragraph>

                    <ul className="space-y-3 text-sm cursor-pointer text-gray-300">
                        {allCategories.map((category) => (
                            <li onClick={() => handleCategoryClick(category)} key={category} className={`
                transition
                ${selectedCategories.includes(category)
                                    ? "text-[#ff600f] font-medium"
                                    : "hover:text-white "}
              `}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Posts */}
                <div>
                    <Paragraph className="text-sm font-medium mb-4">Recent Posts</Paragraph>

                    <div className="space-y-5">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex gap-3 cursor-pointer">
                                <img
                                    src="/images/home/banner_img.webp"
                                    className="w-14 h-14 rounded-lg object-cover"
                                    alt="recent"
                                />

                                <div className="text-sm">
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                                        STANDARD • December 29, 2022
                                    </p>

                                    <p className="leading-snug text-gray-100">
                                        Must-have software to edit videos and photos
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div>
                    <Paragraph className="text-sm font-medium mb-4">Tags</Paragraph>


                    <div className="flex flex-wrap gap-2">
                        {allTags.map((tag) => {
                            const isSelected = selectedTags.includes(tag);

                            return (
                                <span
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`
                text-xs
                px-3
                py-1.5
                rounded-full
                border
                cursor-pointer
                transition
                ${isSelected
                                            ? "bg-white text-black border-black"
                                            : "text-gray-200 border-gray-500 "}
              `}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>

                </div>

            </div>
        </div>

    );
}
