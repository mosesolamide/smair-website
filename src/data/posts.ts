import type { Post } from "../types";
import { formatDate, parseFrontmatter, slugFromPath, sortTime, toNumber } from "./contentLoader";

const files = import.meta.glob("/content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? ""),
      date: formatDate(data.date),
      image: String(data.image ?? ""),
      excerpt: String(data.excerpt ?? ""),
      author: String(data.author ?? ""),
      readTime: String(data.readTime ?? ""),
      category: String(data.category ?? ""),
      views: toNumber(data.views),
      comments: toNumber(data.comments),
      likes: toNumber(data.likes),
      body,
      _sortTime: sortTime(data.date),
    };
  })
  .sort((a, b) => b._sortTime - a._sortTime)
  .map(({ _sortTime, ...post }) => post);
