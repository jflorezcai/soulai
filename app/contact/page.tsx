export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0714] text-white px-6 py-16">
      <section className="max-w-3xl mx-auto text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/reading" className="hover:text-white transition">Reading</a>
          <a href="/premium" className="hover:text-white transition">
            Premium
          </a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
          Contact
        </p>

        <h1 className="text-5xl font-bold mb-6">Get in touch</h1>

        <p className="text-xl text-gray-300 mb-10">
          SoulAI is currently in early development. For questions, feedback,
          or collaboration opportunities, contact us.
        </p>

        <div className="rounded-3xl bg-white/10 p-8 border border-white/10">
          <p className="text-gray-300 mb-2">Email</p>
          <p className="text-2xl font-semibold text-purple-300">
            aiquantfinance@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}