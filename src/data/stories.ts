import type { StoryVideo } from "../types";
import { formatDate, parseFrontmatter, slugFromPath, sortTime } from "./contentLoader";

const files = import.meta.glob("/content/stories/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export function getYoutubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url.trim();
}

export const stories: StoryVideo[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? ""),
      youtubeUrl: String(data.youtubeUrl ?? ""),
      date: formatDate(data.date),
      description: data.description ? String(data.description) : undefined,
      _sortTime: sortTime(data.date),
    };
  })
  .sort((a, b) => b._sortTime - a._sortTime)
  .map(({ _sortTime, ...story }) => story);
