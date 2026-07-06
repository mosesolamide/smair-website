import { formatDate, parseFrontmatter, slugFromPath, sortTime } from "./contentLoader";

export type Comment = {
  slug: string;
  postSlug: string;
  name: string;
  comment: string;
  date: string;
};

const files = import.meta.glob("/content/comments/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const comments: Comment[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      postSlug: String(data.postSlug ?? ""),
      name: String(data.name ?? "Anonymous"),
      comment: String(data.comment ?? ""),
      date: formatDate(data.date),
      _sortTime: sortTime(data.date),
    };
  })
  .sort((a, b) => a._sortTime - b._sortTime)
  .map(({ _sortTime, ...comment }) => comment);

export function commentsForPost(postSlug: string): Comment[] {
  return comments.filter((c) => c.postSlug === postSlug);
}
