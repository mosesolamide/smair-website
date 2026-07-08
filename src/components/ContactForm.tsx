import { useState, type FormEvent } from "react";

function encode(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          firstName,
          lastName,
          email,
          inquiry,
          newsletter: newsletter ? "Yes" : "No",
        }),
      });
      if (!response.ok) throw new Error(`${response.status}`);
      setStatus("sent");
      setFirstName("");
      setLastName("");
      setEmail("");
      setInquiry("");
      setNewsletter(false);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-8 text-center shadow-sm">
        <p className="text-lg font-bold text-brand-blue">Message sent!</p>
        <p className="mt-2 text-sm text-zinc-500">
          Thanks for reaching out. The SMAIR team will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          First name *
          <input
            className="form-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="e.g. Ada"
            autoComplete="given-name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          Last name *
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="e.g. Lovelace"
            autoComplete="family-name"
            required
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
        Email *
        <input
          className="form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
        Inquiry *
        <textarea
          className="form-input min-h-36 resize-y"
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="I would like to know more about..."
          required
        />
      </label>
      <label className="mt-5 flex items-center gap-3 text-sm text-zinc-500">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="h-4 w-4 rounded accent-brand-blue"
        />
        Subscribe me to the SMAIR newsletter.
      </label>
      {status === "error" && (
        <p className="mt-4 text-sm font-semibold text-red-500">
          Something went wrong sending your message. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full cursor-pointer rounded-lg bg-brand-blue px-6 py-3.5 font-semibold text-white transition hover:bg-brand-blue/85 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
