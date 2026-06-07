"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ReadingPage() {
  const [reading, setReading] = useState(
    "Press the button to receive a symbolic AI reading."
  );
  const [loading, setLoading] = useState(false);

  async function generateReading() {
    setLoading(true);

    try {
      const response = await fetch("/api/reading", {
        method: "POST",
      });

      const data = await response.json();
      setReading(data.reading);
    } catch {
      setReading("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#070412] text-white flex items-center justify-center px-6 py-10">
      <section className="max-w-3xl text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/reading" className="hover:text-white transition">Reading</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <p className="uppercase tracking-[0.3em] text-purple-300 mb-4">
          AI Symbolic Reading
        </p>

        <h1 className="text-5xl font-bold mb-8">SoulAI Reading</h1>

        <div className="rounded-3xl bg-white/10 p-10 border border-white/10 shadow-2xl text-left">
          <div className="prose prose-invert prose-lg max-w-none">
           <ReactMarkdown
            components={{
            h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-center text-white mb-6">
             {children}
            </h1>
             ),
            h2: ({ children }) => (
            <h2 className="text-xl font-semibold text-purple-300 mt-6 mb-3">
             {children}
           </h2>
             ),
           p: ({ children }) => (
           <p className="text-gray-200 leading-relaxed mb-4">
          {children}
        </p>
      ),
    }}
  >
    {reading}
  </ReactMarkdown>
</div>
        </div>

        <p className="mt-6 text-sm text-gray-400 max-w-2xl mx-auto">
          SoulAI is designed for reflection, inspiration, and personal growth.
          It does not predict the future and does not replace professional,
          medical, legal, or financial advice.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={generateReading}
            disabled={loading}
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold hover:bg-purple-400 transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate AI Reading"}
          </button>

          <a
            href="/"
            className="rounded-full border border-purple-300 px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            Back Home
          </a>
        </div>
      </section>
    </main>
  );
}