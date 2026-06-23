import { useState } from "react";
import { useNavigate } from "react-router";
import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/motion";

const presetAmounts = ["10,000", "50,000", "100,000", "500,000"];

export function Contact() {
  return (
    <>
      <Hero
        title="Have a question, suggestion, or partnership idea?"
        text="Send a message about courses, workshops, school partnerships, or student enrollment."
      />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Reach SMAIR</p>
            <h2 className="section-title">Get in touch with us.</h2>
            <div className="mt-8 grid gap-4">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">Address</p>
                <p className="mt-1 font-semibold text-zinc-900">
                  1B Ibitayo Street, Off Adekunle Banjo Avenue, Magodo GRA II, Lagos.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">Phone</p>
                <p className="mt-1 font-semibold text-zinc-900">+234 916-177-1271</p>
              </div>
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-400">Email</p>
                <p className="mt-1 font-semibold text-zinc-900">info@smairfoundation.com</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <DonationSection />
    </>
  );
}

function DonationSection() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState(presetAmounts[1]);
  const [customAmount, setCustomAmount] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigate("/donation-thank-you-page");
  }

  return (
    <section className="bg-brand-navy py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker">Support SMAIR</p>
          <h2 className="section-title-dark">Help more students build, code, and create.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-400">
            Your donation funds robotics kits, bootcamps, and SMAIR Club sessions for students aged 8 and above.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-white/8 bg-white/5 p-7 sm:p-10"
          >
            <div className="flex gap-3">
              {(["one-time", "monthly"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFrequency(option)}
                  className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                    frequency === option
                      ? "border-brand-cyan bg-brand-cyan text-zinc-900"
                      : "border-white/15 text-white hover:border-brand-cyan/50"
                  }`}
                >
                  {option === "one-time" ? "One-Time" : "Monthly"}
                </button>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => { setAmount(value); setCustomAmount(""); }}
                  className={`rounded-lg border px-4 py-3 font-mono text-sm font-semibold transition ${
                    amount === value && !customAmount
                      ? "border-brand-cyan bg-brand-cyan text-zinc-900"
                      : "border-white/15 text-white hover:border-brand-cyan/50"
                  }`}
                >
                  ₦{value}
                </button>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-white">
              Custom amount (NGN)
              <input
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-brand-cyan"
                type="number"
                min="1"
                placeholder="Enter an amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </label>
            <button type="submit" className="mt-6 w-full rounded-lg bg-brand-blue px-6 py-4 font-semibold text-white transition hover:bg-brand-blue/85">
              Donate {frequency === "monthly" ? "Monthly" : "Now"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
