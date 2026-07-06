import { useState, type FormEvent } from "react";

function encode(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export function CommentForm({ postSlug }: { postSlug: string }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "comments", postSlug, name, comment }),
      });
      if (!response.ok) throw new Error(`${response.status}`);
      setStatus("sent");
      setName("");
      setComment("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6 text-center">
        <p className="font-semibold text-brand-blue">Thanks for your comment!</p>
        <p className="mt-1 text-sm text-zinc-500">
          It's been sent for review and will appear here once approved.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-7">
      <h3 className="text-lg font-bold text-zinc-900">Leave a comment</h3>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Name *
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-zinc-700">
        Comment *
        <textarea
          className="form-input min-h-28 resize-y"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          required
        />
      </label>
      {status === "error" && (
        <p className="mt-3 text-sm font-semibold text-red-500">
          Something went wrong sending your comment. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 cursor-pointer rounded-lg bg-brand-blue px-6 py-3 font-semibold text-white transition hover:bg-brand-blue/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Post Comment"}
      </button>
    </form>
  );
}
