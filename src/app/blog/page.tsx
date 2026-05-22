"use client";

import { useEffect, useState } from "react";
import BlogBanner from "@/components/blog/Banner";
import Blogs from "@/components/blog/Blogs";
import Paragraph from "@/components/common/Paragraph";
import {
  getBlogCategories,
  getBlogTags,
  getBlogs,
} from "@/services/blog.service";
import type { Blog } from "@/types/blog";

function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlogData() {
      try {
        const blogList = await getBlogs();
        setBlogs(blogList);

        const [categoryList, tagList] = await Promise.all([
          getBlogCategories(blogList),
          getBlogTags(blogList),
        ]);
        setCategories(categoryList);
        setTags(tagList);
      } catch {
        setBlogs([]);
        setCategories([]);
        setTags([]);
      } finally {
        setLoading(false);
      }
    }

    loadBlogData();
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
      <Blogs blogs={blogs} categories={categories} tags={tags} />
    </div>
  );
}

export default BlogPage;
