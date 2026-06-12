import type { LucideIcon } from "lucide-react";

export type Course = {
  slug: string;
  title: string;
  intro: string;
  outcomes: string[];
  image: string;
  icon: LucideIcon;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  venue: string;
  image: string;
  summary: string;
};

export type TeamMember = {
  name: string;
  role: string;
  email: string;
  image: string;
};

export type GalleryImage = {
  src: string;
  label: string;
};
