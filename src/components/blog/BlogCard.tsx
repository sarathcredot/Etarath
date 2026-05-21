import Paragraph from "../common/Paragraph";
import Link from "next/link";
import type { Blog } from "@/types/blog";
import { formatBlogDate } from "@/lib/blog";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog._id}`}>
      <div className="bg-[#0f0f0f] rounded-xl cursor-pointer overflow-hidden h-full">
        <img
          src={blog.imgUrl}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <p className="text-[15px] uppercase tracking-wide text-gray-200 mb-2">
            {blog.category}
          </p>

          <Paragraph className="font-semibold leading-snug mb-3 line-clamp-2">
            {blog.title}
          </Paragraph>

          <p className="text-xs text-gray-400">
            {formatBlogDate(blog.date)} • 0 Comments
          </p>
        </div>
      </div>
    </Link>
  );
}
