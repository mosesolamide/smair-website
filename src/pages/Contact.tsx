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
        image="https://static.wixstatic.com/media/42289d_d204f1b7c57341f8accac95a707def8b~mv2.png"
      />
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Reach SMAIR</p>
            <h2 className="section-title">1B Ibitayo Street, Off Adekunle Banjo Avenue, Magodo GRA II, Lagos.</h2>
            <div className="mt-8 grid gap-3 text-lg font-medium text-slate-700">
              <p>Phone: +234 916-177-1271</p>
              <p>Email: info@smairfoundation.com</p>
              <p>Social: Instagram, YouTube, LinkedIn</p>
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
    <section className="bg-brand-mist/80 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="section-kicker">Support SMAIR</p>
          <h2 className="section-title">Help more students build, code, and create.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Your donation funds robotics kits, bootcamps, and SMAIR Club sessions for students aged 8 and above.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="mt-10 rounded-md border border-brand-blue/15 bg-white p-6 shadow-lift sm:p-8">
            <div className="flex gap-3">
              {(["one-time", "monthly"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFrequency(option)}
                  className={`flex-1 rounded-md border px-4 py-3 font-medium transition ${
                    frequency === option
                      ? "border-brand-cyan bg-brand-blue text-white"
                      : "border-brand-blue/20 text-brand-blue hover:border-brand-cyan"
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
                  onClick={() => {
                    setAmount(value);
                    setCustomAmount("");
                  }}
                  className={`rounded-md border px-4 py-3 font-mono font-medium transition ${
                    amount === value && !customAmount
                      ? "border-brand-cyan bg-brand-blue text-white"
                      : "border-brand-blue/20 text-brand-blue hover:border-brand-cyan"
                  }`}
                >
                  ₦{value}
                </button>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-brand-blue">
              Custom amount (NGN)
              <input
                className="form-input"
                type="number"
                min="1"
                placeholder="Enter an amount"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
              />
            </label>
            <button type="submit" className="mt-6 w-full btn-primary">
              Donate {frequency === "monthly" ? "Monthly" : "Now"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
