

import React from 'react'
import BlogSidebar from './BlogSidebar'
import Heading4 from '../common/Heading4'
import Paragraph from '../common/Paragraph'
import { BsFacebook, BsInstagram, BsX, BsArrowBarRight, BsClock } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";





function BlogDetails() {
    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">

                {/* ================= LEFT: BLOG CONTENT ================= */}
                <div className="w-full">

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-200 mb-4">
                        <span
                            className="border border-gray-300 cursor-pointer
              hover:bg-white hover:text-black
              rounded-full px-7 py-2"
                        >
                            <Paragraph>Home</Paragraph>
                        </span>

                        <span
                            className="border border-gray-300 cursor-pointer
              hover:bg-white hover:text-black
              rounded-full px-7 py-2"
                        >
                            <Paragraph>Blog</Paragraph>
                        </span>

                        <span
                            className="border border-gray-300 rounded-full px-7 py-2
              bg-white text-black max-w-[260px] truncate"
                        >
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
                                alt="author"
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
                            alt="blog cover"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-sm leading-relaxed text-gray-300">
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.
                        </Paragraph>

                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.
                        </Paragraph>

                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium.
                        </Paragraph>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex flex-wrap justify-between items-center mt-12 text-sm text-gray-200 gap-4">
                        <div className="flex items-center gap-3 mt-10">
                            {/* Previous */}
                            <button
                                className="
      w-11 h-11
      rounded-full
      bg-[#1a1a1a]
      flex items-center justify-center
      text-white
      transition
      hover:bg-white hover:text-black
    "
                            >
                                <IoIosArrowBack size={18} />
                            </button>

                            {/* Next */}
                            <button
                                className="
      w-11 h-11
      rounded-full
      bg-[#1a1a1a]
      flex items-center justify-center
      text-white
      transition
      hover:bg-white hover:text-black
    "
                            >
                                <IoIosArrowForward size={18} />
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <Paragraph>Share</Paragraph>
                            <div className="flex gap-2">
                                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
                                    <BsFacebook />
                                </span>
                                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
                                    <BsX />
                                </span>
                                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
                                    <BsInstagram />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT: STICKY SIDEBAR ================= */}
                <div className="relative">
                    <div className="sticky top-24">
                        <BlogSidebar />
                    </div>
                </div>

            </div>
        </div>
    )
}





export default BlogDetails