import { motion } from "framer-motion";
import { Award, Check, CircuitBoard, Copy, GraduationCap, HandHeart, Heart, Wallet, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ContactBand } from "../components/ContactBand";
import { Hero } from "../components/Hero";
import { Reveal, cardVariants, staggerVariants, viewport } from "../components/motion";
import { bankDetails } from "../data/donation";
import { sampleImages } from "../data/siteData";

const presetAmounts = [10000, 25000, 50000, 100000];
const formatNaira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

const coverage = [
  {
    icon: Wallet,
    title: "Course Fees Covered",
    text: "Your sponsorship pays for a student's full course fees, from electronics basics through advanced robotics and AI.",
  },
  {
    icon: CircuitBoard,
    title: "Robotics Kits Provided",
    text: "Every sponsored student receives the hardware they need: breadboards, sensors, motors, and microcontrollers.",
  },
  {
    icon: GraduationCap,
    title: "Mentor-Led Support",
    text: "Instructors and engineers from the AIR Innovation Tech guide each student through every module and build.",
  },
  {
    icon: Award,
    title: "Certificates & Showcases",
    text: "Sponsored students graduate with real projects, certificates, and the confidence to keep building.",
  },
];

export function Sponsorship() {
  const [donationOpen, setDonationOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | "">(presetAmounts[0]);
  const [copied, setCopied] = useState(false);

  const openDonation = (amount: number | "" = "") => {
    setSelectedAmount(amount);
    setDonationOpen(true);
    setCopied(false);
  };

  const copyAccountNumber = async () => {
    await navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Hero
        title={<span className="text-brand-blue">Support the next generation of innovators.</span>}
        text="Your generosity puts robotics kits, expert mentorship, and hands-on technology education within reach of more young people."
        image={sampleImages[0].src}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-rose-100 text-rose-600">
            <Heart className="h-7 w-7 fill-current" aria-hidden="true" />
          </span>
          <p className="section-kicker mt-6 justify-center">Support SMAIR</p>
          <h2 className="section-title">Every gift helps a young mind build what comes next.</h2>
          <p className="mt-5 text-lg leading-8 text-zinc-500">
            Help SMAIR Foundation expand access to practical AI, coding, and robotics education.
            You can support a learner, equip a classroom, strengthen a workshop, or partner with
            us to reach more schools and communities.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="section-kicker justify-center">Make a Donation</p>
            <h2 className="section-title mx-auto max-w-3xl">Choose an amount or give what you can.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-500">
              Select a suggested amount below or enter any amount. All donations are made by direct bank transfer.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {presetAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => openDonation(amount)}
                className="cursor-pointer border-2 border-brand-blue/15 bg-blue-50 px-5 py-7 text-2xl font-black text-brand-blue transition hover:-translate-y-1 hover:border-brand-blue hover:bg-white"
              >
                {formatNaira(amount)}
              </button>
            ))}
          </div>

          <div className="mt-5 text-center">
            <button type="button" onClick={() => openDonation("")} className="btn-primary">
              <Heart className="h-4 w-4 fill-current" />
              Donate a different amount
            </button>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-5 border border-zinc-200 bg-zinc-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Bank transfer details</p>
              <dl className="mt-4 grid gap-2 text-sm text-zinc-600">
                <div><dt className="inline font-bold text-zinc-900">Bank: </dt><dd className="inline">{bankDetails.bankName}</dd></div>
                <div><dt className="inline font-bold text-zinc-900">Account name: </dt><dd className="inline">{bankDetails.accountName}</dd></div>
                <div><dt className="inline font-bold text-zinc-900">Account number: </dt><dd className="inline font-mono text-base">{bankDetails.accountNumber}</dd></div>
              </dl>
            </div>
            <button type="button" onClick={copyAccountNumber} className="btn-outline px-4 py-3">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy account"}
            </button>
          </div>
        </div>
      </section>

      <section className="surface-grid bg-brand-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="section-kicker justify-center">Your Support in Action</p>
            <h2 className="section-title mx-auto max-w-2xl">Where the support goes.</h2>
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerVariants}
          >
            {coverage.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className={`feature-card ${["bg-sky-50 border-sky-200", "bg-amber-50 border-amber-200", "bg-violet-50 border-violet-200", "bg-emerald-50 border-emerald-200"][index]}`}
                variants={cardVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-zinc-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-500">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="surface-grid-dark bg-brand-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="brand-card mx-auto flex max-w-4xl flex-col items-center gap-6 p-8 text-center sm:p-10">
            <span className="icon-tile-dark"><HandHeart className="h-5 w-5" /></span>
            <p className="section-kicker justify-center">Ready to Help?</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Give a student their first robot, their first line of code, their future.
            </h2>
            <p className="max-w-xl leading-7 text-white/60">
              Reach out and our team will guide you through the best way to contribute, from
              supporting one course to funding kits, workshops, or a full year of mentorship.
            </p>
            <Link to="/contact" className="btn-primary shrink-0">
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
              Support SMAIR
            </Link>
          </div>
        </div>
      </section>

      <ContactBand />

      {donationOpen && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="donation-title" onMouseDown={(event) => event.target === event.currentTarget && setDonationOpen(false)}>
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto bg-white p-6 shadow-2xl sm:p-9">
            <button type="button" onClick={() => setDonationOpen(false)} className="absolute right-4 top-4 grid h-10 w-10 cursor-pointer place-items-center bg-zinc-100 text-zinc-600 hover:bg-zinc-200" aria-label="Close donation form">
              <X className="h-5 w-5" />
            </button>
            <Heart className="h-9 w-9 fill-current text-brand-blue" aria-hidden="true" />
            <h2 id="donation-title" className="mt-5 pr-10 text-3xl font-black text-brand-blue">Support SMAIR</h2>
            <p className="mt-2 leading-7 text-zinc-500">Enter your donation amount, then transfer it to the account below.</p>

            <form className="mt-7 grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Donation amount (₦)
                <input type="number" min="1" required value={selectedAmount} onChange={(event) => setSelectedAmount(event.target.value ? Number(event.target.value) : "")} placeholder="Enter any amount" className="form-input" autoFocus />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Your name <span className="font-normal text-zinc-400">(optional)</span>
                <input type="text" className="form-input" placeholder="Full name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-800">
                Email address <span className="font-normal text-zinc-400">(optional)</span>
                <input type="email" className="form-input" placeholder="you@example.com" />
              </label>
            </form>

            <div className="mt-7 bg-blue-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-blue">Send your transfer to</p>
              <p className="mt-3 font-bold text-zinc-900">{bankDetails.bankName}</p>
              <p className="mt-1 text-sm text-zinc-600">{bankDetails.accountName}</p>
              <p className="mt-2 font-mono text-2xl font-black text-brand-navy">{bankDetails.accountNumber}</p>
              {selectedAmount && <p className="mt-3 text-sm font-bold text-brand-blue">Amount: {formatNaira(selectedAmount)}</p>}
              <button type="button" onClick={copyAccountNumber} className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-brand-blue hover:underline">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Account number copied" : "Copy account number"}
              </button>
            </div>
            <p className="mt-5 text-xs leading-5 text-zinc-400">After transferring, keep your bank receipt as confirmation. Contact SMAIR if you need a donation acknowledgement.</p>
          </div>
        </div>
      )}
    </>
  );
}
