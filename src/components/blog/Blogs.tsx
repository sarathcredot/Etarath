"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BsFilter } from "react-icons/bs";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import type { Blog } from "@/types/blog";
import {
  buildBlogFiltersUrl,
  filterBlogs,
  parseBlogFilters,
  type BlogFilters,
} from "@/lib/blog";

interface BlogsProps {
  blogs: Blog[];
  categories: string[];
  tags: string[];
}

function BlogsPageLayout({ blogs, categories, tags }: BlogsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);

  const filters = useMemo(
    () => parseBlogFilters(searchParams),
    [searchParams]
  );

  const updateFilters = (next: Partial<BlogFilters>) => {
    router.replace(buildBlogFiltersUrl({ ...filters, ...next }), {
      scroll: false,
    });
  };

  const filteredBlogs = useMemo(
    () => filterBlogs(blogs, filters),
    [blogs, filters]
  );

  const sidebarProps = {
    blogs,
    categories,
    tags,
    search: filters.search,
    selectedTags: filters.tags,
    selectedCategories: filters.categories,
    onSearchChange: (search: string) => updateFilters({ search }),
    onTagsChange: (selectedTags: string[]) => updateFilters({ tags: selectedTags }),
    onCategoriesChange: (selectedCategories: string[]) =>
      updateFilters({ categories: selectedCategories }),
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

function Blogs(props: BlogsProps) {
  return (
    <Suspense fallback={null}>
      <BlogsPageLayout {...props} />
    </Suspense>
  );
}

export default Blogs;
