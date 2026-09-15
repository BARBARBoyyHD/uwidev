"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { t, type Locale } from "@/lib/lang";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-on-dark transition-colors duration-150 placeholder:text-ink-on-dark-muted/60 focus:border-accent";

const labelClass =
  "mb-1.5 block font-mono text-[11px] font-medium text-ink-on-dark-muted";

export default function ContactForm({ locale }: { locale: Locale }) {
  const dict = t(locale).contactForm;

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: dict.budgetOptions[0],
    timeline: dict.timelineOptions[0],
  });

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `${dict.emailSubject} — ${form.name}`;
    const body = [
      `${dict.emailBodyName}: ${form.name}`,
      `${dict.emailBodyEmail}: ${form.email}`,
      `${dict.emailBodyCompany}: ${form.company || "—"}`,
      "",
      dict.emailBodyMessage,
      form.message,
      "",
      `${dict.emailBodyBudget}: ${form.budget}`,
      `${dict.emailBodyTimeline}: ${form.timeline}`,
    ].join("\n");
    // ponytail: swap mailto for a real endpoint once one exists
    window.location.href = `mailto:muhammadnahrulhayat98@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-6 font-mono text-[11px] font-medium text-ink-on-dark-muted">
        {dict.title}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {dict.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {dict.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder={dict.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="company" className={labelClass}>
          {dict.company}{" "}
          <span className="text-ink-on-dark-muted/50">{dict.optional}</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={handleChange}
          placeholder={dict.companyPlaceholder}
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {dict.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder={dict.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            {dict.budget}
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${inputClass} bg-[#0A1030]`}
          >
            {dict.budgetOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            {dict.timeline}
          </label>
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={`${inputClass} bg-[#0A1030]`}
          >
            {dict.timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-electric"
        >
          {dict.submit}
          <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
        </button>
        <span className="font-mono text-[11px] text-ink-on-dark-muted">
          {dict.hint}
        </span>
      </div>
    </form>
  );
}