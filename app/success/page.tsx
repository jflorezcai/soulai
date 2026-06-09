export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#070412] text-white px-6 py-16">
      <section className="max-w-3xl mx-auto text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/reading" className="hover:text-white transition">Reading</a>
          <a href="/premium" className="hover:text-white transition">Premium</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <p className="uppercase tracking-[0.3em] text-purple-300 mb-4">
          Payment Successful
        </p>

        <h1 className="text-5xl font-bold mb-6">Welcome to SoulAI Premium</h1>

        <p className="text-xl text-gray-300 mb-10">
          Thank you for subscribing. Your Premium access is being prepared.
        </p>

        <div className="rounded-3xl bg-white/10 border border-white/10 p-10">
          <h2 className="text-2xl font-bold mb-4">What happens next?</h2>

          <p className="text-gray-300 mb-4">
            In the next version, SoulAI will automatically activate your Premium
            account after payment.
          </p>

          <p className="text-gray-300">
            For now, this page confirms that the payment flow is working.
          </p>
        </div>

        <a
          href="/reading"
          className="mt-8 inline-block rounded-full bg-purple-500 px-8 py-4 font-semibold hover:bg-purple-400 transition"
        >
          Go to AI Reading
        </a>
      </section>
    </main>
  );
}