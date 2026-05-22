"use client";

import { useMemo, useState } from "react";
import { BsFilter } from "react-icons/bs";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import type { Blog } from "@/types/blog";
import { filterBlogs } from "@/lib/blog";

interface BlogsProps {
  blogs: Blog[];
  categories: string[];
  tags: string[];
}

function BlogsPageLayout({ blogs, categories, tags }: BlogsProps) {
  const [openFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredBlogs = useMemo(
    () =>
      filterBlogs(blogs, {
        search,
        categories: selectedCategories,
        tags: selectedTags,
      }),
    [blogs, search, selectedCategories, selectedTags]
  );

  const sidebarProps = {
    blogs,
    categories,
    tags,
    search,
    selectedTags,
    selectedCategories,
    onSearchChange: setSearch,
    onTagsChange: setSelectedTags,
    onCategoriesChange: setSelectedCategories,
  };

  return (
    <div className="mb-20">
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
        <div className="lg:col-span-8">
          <BlogGrid blogs={filteredBlogs} />
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <BlogSidebar {...sidebarProps} />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition ${
          openFilter ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setOpenFilter(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            openFilter ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-black p-6 transition-transform duration-300 overflow-y-auto ${
            openFilter ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <BlogSidebar {...sidebarProps} />
        </div>
      </div>
    </div>
  );
}

export default BlogsPageLayout;
