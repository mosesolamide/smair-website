export function ContactForm() {
  return (
    <form className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          First name *
          <input className="form-input" type="text" name="firstName" placeholder="e.g. Ada" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-zinc-700">
          Last name *
          <input className="form-input" type="text" name="lastName" placeholder="e.g. Lovelace" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
        Email *
        <input className="form-input" type="email" name="email" placeholder="you@example.com" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-700">
        Message *
        <textarea
          className="form-input min-h-36 resize-y"
          name="message"
          placeholder="I would like to know more about..."
        />
      </label>
      <label className="mt-5 flex items-center gap-3 text-sm text-zinc-500">
        <input type="checkbox" className="h-4 w-4 rounded accent-brand-blue" />
        Subscribe me to the SMAIR newsletter.
      </label>
      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-brand-blue px-6 py-3.5 font-semibold text-white transition hover:bg-brand-blue/85"
      >
        Send Message
      </button>
    </form>
  );
}
