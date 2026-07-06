import type { UpcomingEvent } from "../types";
import { formatDate, parseFrontmatter, slugFromPath, sortTime } from "./contentLoader";

const files = import.meta.glob("/content/upcoming/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const upcomingEvents: UpcomingEvent[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: String(data.title ?? ""),
      date: formatDate(data.date),
      venue: String(data.venue ?? ""),
      image: data.image ? String(data.image) : undefined,
      summary: String(data.summary ?? body ?? ""),
      _sortTime: sortTime(data.date),
    };
  })
  .sort((a, b) => a._sortTime - b._sortTime)
  .map(({ _sortTime, ...event }) => event);
