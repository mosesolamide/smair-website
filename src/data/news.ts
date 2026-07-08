import type { EventItem } from "../types";
import { formatDate, parseFrontmatter, slugFromPath, sortTime } from "./contentLoader";

const files = import.meta.glob("/content/news/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export type NewsItem = EventItem & { body?: string };

export const cmsNews: NewsItem[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? ""),
      date: formatDate(data.date),
      venue: String(data.venue ?? "SMAIR Foundation"),
      image: String(data.image ?? ""),
      summary: String(data.summary ?? ""),
      body,
      _sortTime: sortTime(data.date),
    };
  })
  .sort((a, b) => b._sortTime - a._sortTime)
  .map(({ _sortTime, ...item }) => item);
