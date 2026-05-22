"use client";

import Paragraph from "../common/Paragraph";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import type { Blog } from "@/types/blog";
import { formatBlogDate } from "@/lib/blog";

interface BlogSidebarProps {
  blogs: Blog[];
  categories: string[];
  tags: string[];
  search: string;
  selectedTags: string[];
  selectedCategories: string[];
  onSearchChange: (value: string) => void;
  onTagsChange: (tags: string[]) => void;
  onCategoriesChange: (categories: string[]) => void;
}

export default function BlogSidebar({
  blogs,
  categories,
  tags,
  search,
  selectedTags,
  selectedCategories,
  onSearchChange,
  onTagsChange,
  onCategoriesChange,
}: BlogSidebarProps) {
  const recentPosts = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const handleTagClick = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange(next);
  };

  const handleCategoryClick = (category: string) => {
    const next = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    onCategoriesChange(next);
  };

  return (
    <div className="sticky lg:sticky lg:top-24">
      <div className="bg-[#1a1b1d] rounded-2xl p-6 space-y-8">
        <div>
          <Paragraph className="text-sm font-medium mb-3 text-white">
            Search
          </Paragraph>

          <div className="relative">
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent border border-gray-600 rounded-full pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-gray-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <BsSearch />
            </span>
          </div>
        </div>

        {categories.length > 0 && (
          <div>
            <Paragraph className="text-sm font-medium mb-4">
              Categories
            </Paragraph>

            <ul className="space-y-3 text-sm cursor-pointer text-gray-300">
              {categories.map((category) => (
                <li
                  onClick={() => handleCategoryClick(category)}
                  key={category}
                  className={`transition ${
                    selectedCategories.includes(category)
                      ? "text-[#ff600f] font-medium"
                      : "hover:text-white"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recentPosts.length > 0 && (
          <div>
            <Paragraph className="text-sm font-medium mb-4">
              Recent Posts
            </Paragraph>

            <div className="space-y-5">
              {recentPosts.map((post) => (
                <Link
                  key={post._id}
                  href={`/blog/${post._id}`}
                  className="flex gap-3 cursor-pointer"
                >
                  <img
                    src={post.imgUrl}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                    alt={post.title}
                  />

                  <div className="text-sm">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      {post.category} • {formatBlogDate(post.date)}
                    </p>

                    <p className="leading-snug text-gray-100 line-clamp-2">
                      {post.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div>
            <Paragraph className="text-sm font-medium mb-4">Tags</Paragraph>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag);

                return (
                  <span
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`text-xs px-3 py-1.5 rounded-full border cursor-pointer transition ${
                      isSelected
                        ? "bg-white text-black border-black"
                        : "text-gray-200 border-gray-500"
                    }`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
