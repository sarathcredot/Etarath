
"use client";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";

function BlogsPageLayout() {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="">

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
                        <BlogSidebar />
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
