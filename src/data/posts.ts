import { parse } from "yaml";
import type { Post } from "../types";

const files = import.meta.glob("/content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };
  const data = (parse(match[1]) as Record<string, unknown>) ?? {};
  return { data, body: match[2].trim() };
}

function formatDate(value: unknown): string {
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return String(value ?? "");
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function toNumber(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const sortDate = data.date instanceof Date ? data.date : new Date(String(data.date));
    return {
      slug,
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
      _sortTime: sortDate.getTime(),
    };
  })
  .sort((a, b) => b._sortTime - a._sortTime)
  .map(({ _sortTime, ...post }) => post);
