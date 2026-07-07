import { parseFrontmatter, slugFromPath, toNumber } from "./contentLoader";

export type Testimonial = {
  slug: string;
  quote: string;
  name: string;
  role: string;
  order: number;
};

const files = import.meta.glob("/content/testimonials/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

export const testimonials: Testimonial[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      quote: String(data.quote ?? ""),
      name: String(data.name ?? ""),
      role: String(data.role ?? ""),
      order: toNumber(data.order) ?? 0,
    };
  })
  .sort((a, b) => a.order - b.order);
