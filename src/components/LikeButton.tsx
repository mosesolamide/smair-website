import { Heart } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";

function storageKey(slug: string): string {
  return `smair-liked-${slug}`;
}

export function LikeButton({ slug, baseLikes }: { slug: string; baseLikes: number }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey(slug)) === "1");
  }, [slug]);

  function toggle(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const next = !liked;
    setLiked(next);
    if (next) {
      localStorage.setItem(storageKey(slug), "1");
    } else {
      localStorage.removeItem(storageKey(slug));
    }
  }

  const count = baseLikes + (liked ? 1 : 0);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this post" : "Like this post"}
      className="flex cursor-pointer items-center gap-1.5 text-xs text-zinc-400 transition-colors duration-150 hover:text-red-400"
    >
      {count}
      <Heart className={`h-4 w-4 transition-colors duration-150 ${liked ? "fill-red-400 text-red-400" : ""}`} />
    </button>
  );
}
