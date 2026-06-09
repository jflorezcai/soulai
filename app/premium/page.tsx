"use client";
export default function PremiumPage() {
    async function handleCheckout() {
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
  });

  const data = await response.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Something went wrong. Please try again.");
  }
  }
  return (
    <main className="min-h-screen bg-[#070412] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/reading" className="hover:text-white transition">Reading</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <p className="uppercase tracking-[0.3em] text-purple-300 mb-4">
          Premium
        </p>

        <h1 className="text-5xl font-bold mb-6">SoulAI Premium</h1>

        <p className="text-xl text-gray-300 mb-10">
          Unlock unlimited AI symbolic readings, deeper reflections, and a more
          personalized growth experience.
        </p>

        <div className="rounded-3xl bg-purple-900/40 border border-purple-400 p-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">$9/month</h2>

          <div className="space-y-3 text-gray-200 mb-8">
            <p>✓ Unlimited AI readings</p>
            <p>✓ Personalized reflection prompts</p>
            <p>✓ Reading history</p>
            <p>✓ Early access to future SoulAI tools</p>
          </div>

          <button
            onClick={handleCheckout}
            className="rounded-full bg-purple-500 px-8 py-4 font-semibold hover:bg-purple-400 transition"
           >
            Upgrade Now
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Payments will be enabled soon through a secure checkout system.
        </p>
      </section>
    </main>
  );
}