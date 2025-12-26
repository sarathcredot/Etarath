
"use client";
import { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import axios from "axios";

function BlogsPageLayout() {
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        // Fetch blog data from the API
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_UR}/common/blogs`);
                const blogs = response?.data?.data;

                console.log("Fetched blogs:", blogs);

                // Check if there are any blogs available
                if (blogs.length === 0) {
                    console.log("No blogs available");
                    // setShow(false);
                } else {
                    console.log("Blogs are available");

                }
            } catch (error) {
                console.error('Error fetching blogs:', error);

            }
        };

        fetchBlogs();
    }, []);


    const handilTagClick = (tag: any) => {
       
        console.log("Selected tag:", tag);
    };

    return (
        <div className="mb-20">

            {/* 🔥 Mobile Filter Button */}
            <div className="flex justify-end mb-6 lg:hidden">
                <button
                    onClick={() => setOpenFilter(true)}
                    className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                >
                    <BsFilter />
                    Filter
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Blog Content */}
                <div className="lg:col-span-8">
                    <BlogGrid />

                </div>

                {/* ================= DESKTOP SIDEBAR ================= */}
                <div className="lg:col-span-4 hidden lg:block">
                    <div className="sticky top-24">
                        <BlogSidebar tagclick={handilTagClick} />
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
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
}

export default BlogsPageLayout;
