import type { Blog } from "@/types/blog";

export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getUniqueCategories(blogs: Blog[]): string[] {
  return [...new Set(blogs.map((b) => b.category).filter(Boolean))].sort();
}

export function getUniqueTags(blogs: Blog[]): string[] {
  return [...new Set(blogs.flatMap((b) => b.tags ?? []))].sort();
}

export function filterBlogs(
  blogs: Blog[],
  {
    search = "",
    categories = [],
    tags = [],
  }: {
    search?: string;
    categories?: string[];
    tags?: string[];
  }
): Blog[] {
  const query = search.trim().toLowerCase();

  return blogs.filter((blog) => {
    const matchesSearch =
      !query ||
      blog.title.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesCategory =
      categories.length === 0 || categories.includes(blog.category);

    const matchesTags =
      tags.length === 0 || tags.some((tag) => blog.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });
}
