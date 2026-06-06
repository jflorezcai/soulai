"use client";

import { useState } from "react";

const readings = [
  {
    title: "The Navigator",
    image: "/cards/navigator.jpg",
    message:
      "Today suggests a moment of subtle opportunities. Small decisions may create larger paths than expected.",
    reflection:
      "Move calmly today. Listen carefully. Observe people. A meaningful opportunity may appear through patience or conversation.",
  },

  {
    title: "The Mirror",
    image: "/cards/mirror.jpg",
    message:
      "A hidden emotional pattern may become visible today. Reflection creates clarity.",
    reflection:
      "Pay attention to your reactions. Sometimes the way we interpret events shapes reality more than the events themselves.",
  },

  {
    title: "The Flame",
    image: "/cards/flame.jpg",
    message:
      "Your energy is stronger than you think today. Momentum begins with small actions.",
    reflection:
      "Do not wait for perfect certainty. Action itself often creates confidence and new opportunities.",
  },

  {
    title: "The Bridge",
    image: "/cards/bridge.jpg",
    message:
      "A connection with another person may open an unexpected path.",
    reflection:
      "Kindness and curiosity create invisible networks of opportunity. Speak openly and listen deeply.",
  },
];

function getRandomReading() {
  return readings[Math.floor(Math.random() * readings.length)];
}

export default function ReadingPage() {
  const [reading, setReading] = useState(getRandomReading());

  return (
    <main className="min-h-screen bg-[#070412] text-white flex items-center justify-center px-6 py-10">
      <section className="max-w-3xl text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
        <a href="/" className="hover:text-white transition">
          Home
        </a>

        <a href="/about" className="hover:text-white transition">
         About
        </a>

        <a href="/reading" className="hover:text-white transition">
          Reading
        </a>
        <a href="/contact" className="hover:text-white transition">
         Contact
        </a>
        </nav>
        <p className="uppercase tracking-[0.3em] text-purple-300 mb-4">
          Daily Symbolic Reading
        </p>

        <img
          src={reading.image}
          alt={reading.title}
          className="mx-auto rounded-3xl mb-8 w-full max-w-md shadow-2xl"
        />

        <h1 className="text-5xl font-bold mb-8">
          {reading.title}
        </h1>

        <div className="rounded-3xl bg-white/10 p-10 border border-white/10 shadow-2xl">

          <p className="text-2xl leading-relaxed text-gray-200 mb-8">
            {reading.message}
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            {reading.reflection}
          </p>

        </div>
        <p className="mt-6 text-sm text-gray-400 max-w-2xl mx-auto">
          SoulAI is designed for reflection, inspiration, and personal growth. 
          It does not predict the future and does not replace professional, medical, 
          legal, or financial advice.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <button
            onClick={() => setReading(getRandomReading())}
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold hover:bg-purple-400 transition"
          >
            Generate Another Reading
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