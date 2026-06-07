export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0714] text-white px-6 py-16">
      <section className="max-w-4xl mx-auto">
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
         <a href="/premium" className="hover:text-white transition">
          Premium
         </a>
         <a href="/contact" className="hover:text-white transition">
          Contact
         </a>
        </nav>
        <a
          href="/"
          className="inline-block mb-10 text-purple-300 hover:text-white transition"
        >
          ← Back Home
        </a>

        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
          About SoulAI
        </p>

        <h1 className="text-5xl font-bold mb-8">
          Symbolic guidance for clarity, reflection, and better action.
        </h1>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            SoulAI is a symbolic intelligence experience designed to help people
            pause, reflect, and approach life with more clarity and confidence.
          </p>

          <p>
            It combines symbolic readings, positive psychology, and artificial
            intelligence to create moments of reflection that may help users
            recognize opportunities, understand emotions, and take better daily
            actions.
          </p>

          <p>
            SoulAI does not predict the future. It is not a supernatural claim,
            medical service, financial advisory tool, or legal advisor. It is a
            reflective companion for personal growth and inspiration.
          </p>

          <p>
            The goal is simple: help people feel calmer, think more clearly, and
            act with more intention.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>

          <p className="text-gray-300 leading-relaxed">
            Symbols do not control our lives, but they can help us think better.
            A meaningful symbol can create optimism, attention, and emotional
            focus. When people feel more hopeful and attentive, they often notice
            more opportunities and build better connections.
          </p>
        </div>
      </section>
    </main>
  );
}