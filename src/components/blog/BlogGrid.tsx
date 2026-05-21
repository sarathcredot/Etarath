"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import Heading4 from "../common/Heading4";
import Button from "../common/Button";
import type { Blog } from "@/types/blog";

const PAGE_SIZE = 6;

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  if (blogs.length === 0) {
    return (
      <p className="text-sm text-gray-400">No blogs match your filters.</p>
    );
  }

  return (
    <div>
      <Heading4 className="text-2xl font-semibold mb-8">More Insights</Heading4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10 mb-10">
          <Button
            type="button"
            variant="solid"
            color="primary"
            textColor="black"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
