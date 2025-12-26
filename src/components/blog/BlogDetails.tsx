
"use client";
import React, { useState } from 'react'
import BlogSidebar from './BlogSidebar'
import Heading4 from '../common/Heading4'
import Paragraph from '../common/Paragraph'
import { BsFacebook, BsInstagram, BsX, BsArrowBarRight, BsClock, BsFilter } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';


function BlogDetails() {
    // 🔥 NEW
    const [openFilter, setOpenFilter] = useState(false);
    const handleTagClick = (tag: string[]) => {

        console.log("Selected tag:", tag);
    };

    return (
        <div className="mb-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">

                {/* ================= LEFT: BLOG CONTENT ================= */}
                <div className="w-full">

                    {/* 🔥 Mobile Filter Button */}
                    <div className="flex justify-end mb-4 lg:hidden">
                        <button
                            onClick={() => setOpenFilter(true)}
                            className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                        >
                            <BsFilter />
                            Filter
                        </button>
                    </div>

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-200 mb-4">
                        <span className="border border-gray-300 cursor-pointer hover:bg-white hover:text-black rounded-full px-7 py-2">

                            <Link href="/">
                                <Paragraph>Home</Paragraph>
                            </Link>
                        </span>

                        <span className="border border-gray-300 cursor-pointer hover:bg-white hover:text-black rounded-full px-7 py-2">
                            <Link href="/blog">
                                <Paragraph>Blog</Paragraph>
                            </Link>
                        </span>





                        <span className="border border-gray-300 rounded-full px-7 py-2 bg-white text-black max-w-[260px] truncate">
                            <Paragraph className="truncate">
                                How to Can I Get-started in Etarath...
                            </Paragraph>
                        </span>
                    </div>

                    {/* Title */}
                    <Heading4 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                        How to Can I Get-started in Etarath <br />
                        as a Business Dealer
                    </Heading4>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/avatars/avatar_4.webp"
                                className="w-6 h-6 rounded-full object-cover"
                            />
                            <span className="text-white">Shameer</span>
                            <span>— Founding CEO</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <BsClock /> <span>9 minutes</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-2xl overflow-hidden mb-8">
                        <img
                            src="/images/home/banner_img.webp"
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-sm leading-relaxed text-gray-300">
                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam aliquam consequatur facere, quas soluta explicabo accusamus
                            quaerat, atque perferendis esse qui, rem sequi nobis! Tempora magnam
                            nostrum labore nihil hic.</Paragraph>

                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam aliquam consequatur facere, quas soluta explicabo accusamus
                            quaerat, atque perferendis esse qui, rem sequi nobis! Tempora magnam
                            nostrum labore nihil hic.</Paragraph>

                        <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nam aliquam consequatur facere, quas soluta explicabo accusamus
                            quaerat, atque perferendis esse qui, rem sequi nobis! Tempora magnam
                            nostrum labore nihil hic.</Paragraph>


                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex flex-wrap justify-between items-center mt-12 text-sm text-gray-200 gap-4">
                        <div className="flex items-center gap-3">
                            <button className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition">
                                <IoIosArrowBack size={18} />
                            </button>
                            <button className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition">
                                <IoIosArrowForward size={18} />
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <Paragraph>Share</Paragraph>
                            <div className="flex gap-2">
                                <span className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                                    <BsFacebook />
                                </span>
                                <span className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                                    <BsX />
                                </span>
                                <span className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-white hover:text-black">
                                    <BsInstagram />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= DESKTOP SIDEBAR ================= */}
                <div className="relative hidden lg:block">
                    <div className="sticky top-24">
                        <BlogSidebar tagclick={handleTagClick} />
                    </div>
                </div>
            </div>

            {/* ================= MOBILE SIDEBAR DRAWER ================= */}
            <div
                className={`fixed inset-0 z-50 lg:hidden transition ${openFilter ? "visible" : "invisible"
                    }`}
            >
                {/* Overlay */}
                <div
                    onClick={() => setOpenFilter(false)}
                    className={`absolute inset-0 bg-black/60 transition-opacity ${openFilter ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Sidebar */}
                <div
                    className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-black p-6 transition-transform duration-300 ${openFilter ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <BlogSidebar tagclick={handleTagClick} />
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;






