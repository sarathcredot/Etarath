"use client";

import { useEffect, useState } from "react";
import BlogBanner from "@/components/blog/Banner";
import Blogs from "@/components/blog/Blogs";
import Paragraph from "@/components/common/Paragraph";
import { getBlogs } from "@/services/blog.service";
import type { Blog } from "@/types/blog";

function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs()
      .then(setBlogs)
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center mb-20 py-20">
        <Paragraph className="opacity-70 text-sm">Loading blogs...</Paragraph>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center mb-20 py-20">
        <Paragraph className="text-lg font-medium mb-2">
          No blogs available
        </Paragraph>
        <Paragraph className="opacity-70 text-sm">
          New articles will be published soon. Stay tuned.
        </Paragraph>
      </div>
    );
  }

  return (
    <div>
      <BlogBanner blogs={blogs} />
      <Blogs blogs={blogs} />
    </div>
  );
}

export default BlogPage;
