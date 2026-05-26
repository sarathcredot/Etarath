import axios from "axios";
import { getUniqueCategories, getUniqueTags } from "@/lib/blog";
import type {
  Blog,
  BlogCategoriesApiResponse,
  BlogTagsApiResponse,
  BlogsApiResponse,
} from "@/types/blog";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const BLOGS_URL = `${BASE_URL}/common/blogs`;
const BLOG_CATEGORIES_URL = `${BASE_URL}/common/blogs/category`;
const BLOG_TAGS_URL = `${BASE_URL}/common/blogs/tag`;

function parseCategoryList(data: unknown): string[] {
  if (!Array.isArray(data)) return [];

  if (data.length > 0 && typeof data[0] === "object" && data[0] !== null) {
    const categories = (data[0] as { categories?: string[] }).categories;
    return Array.isArray(categories) ? categories.filter(Boolean) : [];
  }

  return data.filter((item): item is string => typeof item === "string");
}

function parseTagList(data: unknown): string[] {
  if (!Array.isArray(data)) return [];

  if (data.length > 0 && typeof data[0] === "object" && data[0] !== null) {
    const tags = (data[0] as { tags?: string[] }).tags;
    return Array.isArray(tags) ? tags.filter(Boolean) : [];
  }

  return data.filter((item): item is string => typeof item === "string");
}

function parseBlogsList(payload: BlogsApiResponse["data"] | undefined): Blog[] {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  return payload.data ?? [];
}

export async function getBlogs(): Promise<Blog[]> {
  const response = await axios.get<BlogsApiResponse>(BLOGS_URL);
  const blogs = parseBlogsList(response?.data?.data);
  return blogs.filter((blog) => blog.status);
}

export async function getBlogCategories(
  fallbackBlogs: Blog[] = []
): Promise<string[]> {
  try {
    const response = await axios.get<BlogCategoriesApiResponse>(
      BLOG_CATEGORIES_URL
    );
    const categories = parseCategoryList(response?.data?.data);
    if (categories.length > 0) return categories;
  } catch {
    // Fall back to blog-derived list when the filter API is unavailable
  }

  return getUniqueCategories(fallbackBlogs);
}

export async function getBlogTags(fallbackBlogs: Blog[] = []): Promise<string[]> {
  try {
    const response = await axios.get<BlogTagsApiResponse>(BLOG_TAGS_URL);
    const tags = parseTagList(response?.data?.data);
    if (tags.length > 0) return tags;
  } catch {
    // Fall back to blog-derived list when the filter API is unavailable
  }

  return getUniqueTags(fallbackBlogs);
}

export async function getBlogById(id: string): Promise<Blog | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog._id === id) ?? null;
}
