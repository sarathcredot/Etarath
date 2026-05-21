import axios from "axios";
import type { Blog, BlogsApiResponse } from "@/types/blog";

const BLOGS_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/common/blogs`;

export async function getBlogs(): Promise<Blog[]> {
  const response = await axios.get<BlogsApiResponse>(BLOGS_URL);
  const blogs = response?.data?.data ?? [];
  return blogs.filter((blog) => blog.status);
}

export async function getBlogById(id: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog._id === id) ?? null;
}
