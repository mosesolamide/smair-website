import { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { Eye, MessageCircle, Search } from "lucide-react";
import { marked } from "marked";
import { Link, useParams } from "react-router";
import { CommentForm } from "../components/CommentForm";
import { Hero } from "../components/Hero";
import { LikeButton } from "../components/LikeButton";
import { commentsForPost } from "../data/comments";
import { posts } from "../data/posts";
import type { Post } from "../types";

const CATEGORIES = ["Blogs & Newsletters", "newsletter", "smair bootcamp"];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("Blogs & Newsletters");
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchesCat =
      activeCategory === "Blogs & Newsletters" || p.category === activeCategory;
    const matchesSearch =
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.author.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* ── Category nav ─────────────────────────────────── */}
      <div className="border-b border-zinc-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <nav className="flex gap-0 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer whitespace-nowrap border-b-2 px-4 py-4 text-sm font-semibold transition-colors duration-150 ${
                  activeCategory === cat
                    ? "border-brand-blue text-brand-blue"
                    : "border-transparent text-zinc-500 hover:text-brand-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="cursor-pointer p-2 text-zinc-500 transition-colors hover:text-brand-blue"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
        {searchOpen && (
          <div className="border-t border-zinc-100 px-5 py-3 sm:px-8">
            <input
              type="search"
              placeholder="Search posts…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full max-w-md rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* ── Page heading ─────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-10 sm:px-8">
        <h1 className="text-4xl font-black text-brand-blue sm:text-5xl">
          Blogs &amp; Newsletters
        </h1>
      </div>

      {/* ── Card grid ────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        {filtered.length === 0 ? (
          <p className="py-20 text-center text-zinc-400">No posts found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      className="group block overflow-hidden rounded-sm border border-zinc-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      {/* Image with blue overlay */}
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Blue overlay: matches Wix tint */}
        <div className="absolute inset-0 bg-brand-blue/50" />

        {/* Top row: author + date + three-dot */}
        <div className="absolute left-0 right-0 top-0 flex items-start justify-between p-4">
          <div>
            <p className="text-sm font-bold text-white drop-shadow">{post.author}</p>
            <p className="mt-0.5 text-xs text-white/90 drop-shadow">
              {post.date} &nbsp;·&nbsp; {post.readTime}
            </p>
          </div>
          <button
            type="button"
            aria-label="Options"
            onClick={(e) => e.preventDefault()}
            className="cursor-pointer p-1 text-white opacity-80 hover:opacity-100"
          >
            <svg viewBox="0 0 4 20" className="h-5 w-1.5 fill-current">
              <circle cx="2" cy="2" r="2" />
              <circle cx="2" cy="10" r="2" />
              <circle cx="2" cy="18" r="2" />
            </svg>
          </button>
        </div>

        {/* Bottom: title */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h2 className="text-xl font-black leading-snug text-white drop-shadow-sm">
            {post.title}
          </h2>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between border-t border-zinc-100 px-4 py-3">
        <div className="flex items-center gap-5 text-zinc-400">
          <span className="flex items-center gap-1.5 text-xs">
            <Eye className="h-4 w-4" />
            {post.views ?? 0}
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <MessageCircle className="h-4 w-4" />
            {commentsForPost(post.slug).length}
          </span>
        </div>
        <LikeButton slug={post.slug} baseLikes={post.likes ?? 0} />
      </div>
    </Link>
  );
}

export function PostPage({ post }: { post: Post }) {
  const html = useMemo(
    () => DOMPurify.sanitize(marked.parse(post.body ?? "", { async: false }) as string),
    [post.body],
  );
  const postComments = commentsForPost(post.slug);

  return (
    <>
      <Hero title={post.title} text={post.excerpt} image={post.image} />
      <section className="bg-white py-20 sm:py-24">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="font-semibold text-zinc-600">{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span className="ml-auto flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-xs">
                <Eye className="h-4 w-4" />
                {post.views ?? 0}
              </span>
              <span className="flex items-center gap-1.5 text-xs">
                <MessageCircle className="h-4 w-4" />
                {postComments.length}
              </span>
              <LikeButton slug={post.slug} baseLikes={post.likes ?? 0} />
            </span>
          </div>
          <div
            className="prose-content space-y-5 text-lg leading-8 text-zinc-600"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Link to="/blog" className="mt-10 inline-flex btn-dark">
            ← Back to Blog
          </Link>

          <div className="mt-16 border-t border-zinc-100 pt-10">
            <h2 className="text-2xl font-black text-zinc-900">
              {postComments.length === 0 ? "Be the first to comment" : `${postComments.length} Comment${postComments.length === 1 ? "" : "s"}`}
            </h2>

            {postComments.length > 0 && (
              <div className="mt-6 grid gap-4">
                {postComments.map((c) => (
                  <div key={c.slug} className="rounded-xl border border-zinc-100 bg-zinc-50 p-5">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">
                        {c.name.charAt(0).toUpperCase()}
                      </div>
                      <p className="text-sm font-bold text-zinc-900">{c.name}</p>
                      <span className="text-xs text-zinc-400">{c.date}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">{c.comment}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <CommentForm postSlug={post.slug} />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export function PostRoute() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return null;
  return <PostPage post={post} />;
}
