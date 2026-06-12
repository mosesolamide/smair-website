export function ContactForm() {
  return (
    <form className="rounded-md border border-brand-blue/15 bg-white p-6 text-brand-blue shadow-lift sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          First name*
          <input className="form-input" type="text" name="firstName" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Last name*
          <input className="form-input" type="text" name="lastName" />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium">
        Email*
        <input className="form-input" type="email" name="email" />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-medium">
        Inquiry*
        <textarea className="form-input min-h-36 resize-y" name="message" placeholder="I would like to know more about ..." />
      </label>
      <label className="mt-5 flex items-start gap-3 text-sm text-brand-blue/80">
        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-brand-blue/40 accent-brand-blue" />
        Yes, subscribe me to your newsletter.
      </label>
      <button type="button" className="mt-6 w-full rounded-md bg-brand-blue px-6 py-4 font-medium text-white transition hover:bg-brand-navy">
        Submit
      </button>
    </form>
  );
}
