"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BlogSidebar from "./BlogSidebar";
import Heading4 from "../common/Heading4";
import Paragraph from "../common/Paragraph";
import {
  BsFacebook,
  BsInstagram,
  BsX,
  BsFilter,
} from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { getBlogs } from "@/services/blog.service";
import type { Blog } from "@/types/blog";
import { formatBlogDate } from "@/lib/blog";

function BlogDetails() {
  const params = useParams();
  const router = useRouter();
  const blogId = params?.id as string;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  const sortedBlogs = useMemo(
    () =>
      [...blogs].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [blogs]
  );

  const blog = useMemo(
    () => sortedBlogs.find((item) => item._id === blogId) ?? null,
    [sortedBlogs, blogId]
  );

  const currentIndex = blog
    ? sortedBlogs.findIndex((item) => item._id === blog._id)
    : -1;
  const prevBlog =
    currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex >= 0 && currentIndex < sortedBlogs.length - 1
      ? sortedBlogs[currentIndex + 1]
      : null;

  const sidebarProps = {
    blogs,
    search,
    selectedTags,
    selectedCategories,
    onSearchChange: setSearch,
    onTagsChange: setSelectedTags,
    onCategoriesChange: setSelectedCategories,
  };

  if (loading) {
    return (
      <div className="text-center mb-20 py-20">
        <Paragraph className="opacity-70 text-sm">Loading article...</Paragraph>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center mb-20 py-20">
        <Paragraph className="text-lg font-medium mb-2">
          Blog not found
        </Paragraph>
        <Link href="/blog" className="text-primary text-sm hover:underline">
          Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
        <div className="w-full">
          <div className="flex justify-end mb-4 lg:hidden">
            <button
              onClick={() => setOpenFilter(true)}
              className="flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              <BsFilter />
              Filter
            </button>
          </div>

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
              <Paragraph className="truncate">{blog.title}</Paragraph>
            </span>
          </div>

          <Heading4 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            {blog.title}
          </Heading4>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
            <span className="text-white uppercase tracking-wide">
              {blog.category}
            </span>
            <span>{formatBlogDate(blog.date)}</span>
            {blog.tags.length > 0 && (
              <span className="text-gray-400">{blog.tags.join(", ")}</span>
            )}
          </div>

          <div className="rounded-2xl overflow-hidden mb-8">
            <img
              src={blog.imgUrl}
              alt={blog.title}
              className="w-full object-cover"
            />
          </div>

          <div
            className="blog-content space-y-6 text-sm leading-relaxed text-gray-300 [&_p]:mb-4 [&_strong]:text-white [&_a]:text-primary"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div className="flex flex-wrap justify-between items-center mt-12 text-sm text-gray-200 gap-4">
            <div className="flex items-center gap-3">
              <button
                disabled={!prevBlog}
                onClick={() => prevBlog && router.push(`/blog/${prevBlog._id}`)}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <IoIosArrowBack size={18} />
              </button>
              <button
                disabled={!nextBlog}
                onClick={() => nextBlog && router.push(`/blog/${nextBlog._id}`)}
                className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
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

        <div className="relative hidden lg:block">
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

export default BlogDetails;
