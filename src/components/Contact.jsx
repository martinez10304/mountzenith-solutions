"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="max-w-2xl mx-auto px-6">
        <p className="font-mono text-xs text-teal tracking-widest mb-3">START A PROJECT</p>
        <h2 className="font-display font-bold text-white text-3xl mb-8">Tell me what&apos;s slow, stuck, or missing.</h2>

        {sent ? (
          <div className="bg-white/10 border border-teal rounded-lg p-6 text-white">
            Message received. I&apos;ll follow up shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-mono text-xs text-white/70 block mb-2">NAME</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-white/70 block mb-2">EMAIL</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-white/70 block mb-2">WHAT YOU NEED</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/40 focus:outline-none focus-visible:outline-2 focus-visible:outline-teal"
                placeholder="A quick description of the problem"
              />
            </div>
            {error && (
              <p className="text-sm text-gold">
                Something went wrong sending that. Try again, or email directly.
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 bg-teal text-navy font-semibold px-6 py-3 rounded-md bg-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-white disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send"} <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
