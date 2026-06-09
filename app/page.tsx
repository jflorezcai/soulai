export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0714] text-white flex items-center justify-center px-6">
      <section className="max-w-5xl text-center">
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
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-300">
          Symbolic Intelligence + AI
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">SoulAI</h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A personal AI mentor that uses symbolic guidance, reflection, and
          positive psychology to help you find clarity, confidence, and new
          opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="/reading"
            className="rounded-full bg-purple-500 px-8 py-4 text-lg font-semibold hover:bg-purple-400 transition inline-block"
          >
            Start Your Journey
          </a>

          <a
            href="/reading"
            className="rounded-full border border-purple-300 px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition inline-block"
          >
            Get Daily Reading
          </a>
        </div>
        <div className="mb-12">
          <a
           href="/about"
           className="text-purple-300 hover:text-white transition font-semibold"
          >
            Learn more about SoulAI
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl bg-white/10 p-6">
            <h2 className="text-xl font-semibold mb-3">AI Tarot</h2>
            <p className="text-gray-300">
              Symbolic readings designed for reflection, decisions, and
              emotional clarity.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h2 className="text-xl font-semibold mb-3">Personal Guidance</h2>
            <p className="text-gray-300">
              Daily messages that help you recognize opportunities and act with
              confidence.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6">
            <h2 className="text-xl font-semibold mb-3">Positive Mindset</h2>
            <p className="text-gray-300">
              A practical system to improve optimism, focus, and meaningful
              action.
            </p>
          </div>
        </div>
        

        <div className="mt-16 rounded-3xl bg-white/10 p-8 text-left border border-white/10">
         <h2 className="text-3xl font-bold mb-6 text-center">
           How SoulAI Works
         </h2>

        <div className="grid md:grid-cols-3 gap-6">
         <div>
          <h3 className="text-xl font-semibold mb-2">
             1. Choose a Reading
          </h3>

         <p className="text-gray-300">
          Start with a symbolic card designed to open reflection and clarity.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-semibold mb-2">
           2. Reflect
         </h3>

         <p className="text-gray-300">
           Use the message to observe your emotions, decisions, and opportunities.
         </p>
        </div>

        <div>
         <h3 className="text-xl font-semibold mb-2">
           3. Act Better
         </h3>

        <p className="text-gray-300">
        Turn insight into small actions that improve confidence and connection.
        </p>
        </div>
        </div>
       </div>
       <div className="mt-16">
  <h2 className="text-4xl font-bold text-center mb-8">
    Choose Your Path
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="rounded-3xl bg-white/10 p-8 border border-white/10">
      <h3 className="text-3xl font-bold mb-4">
        Free
      </h3>

      <p className="text-5xl font-bold mb-6">
        $0
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Daily Reading</li>
        <li>✓ Symbolic Guidance</li>
        <li>✓ Reflection Messages</li>
        <li>✓ Unlimited Visits</li>
      </ul>

      <button className="mt-8 w-full rounded-full bg-gray-700 py-3 font-semibold">
        Start Free
      </button>
    </div>

    <div className="rounded-3xl bg-purple-900/40 p-8 border border-purple-500">
      <h3 className="text-3xl font-bold mb-4">
        Premium
      </h3>

      <p className="text-5xl font-bold mb-6">
        $9<span className="text-xl">/month</span>
      </p>

      <ul className="space-y-3">
        <li>✓ Unlimited Premium Readings</li>
        <li>✓ Personalized Guidance</li>
        <li>✓ Future AI Mentor</li>
        <li>✓ Reading History</li>
        <li>✓ Early Access Features</li>
      </ul>

      <a
       href="/premium"
       className="mt-8 block w-full rounded-full bg-purple-500 py-3 font-semibold hover:bg-purple-400 transition"
       >
        Upgrade to Premium
      </a>
    </div>

      </div>
     </div>
             <div className="mt-16">
          <h2 className="text-4xl font-bold text-center mb-8">
            What Users May Experience
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                “SoulAI helped me pause, think clearly, and make a better decision instead of reacting emotionally.”
              </p>
              <p className="font-semibold">— Early User</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                “The daily symbolic reading gave me a positive focus for the day and helped me notice opportunities.”
              </p>
              <p className="font-semibold">— Beta Tester</p>
            </div>

            <div className="rounded-3xl bg-white/10 p-6 border border-white/10">
              <p className="text-gray-300 mb-4">
                “It feels like a calm personal mentor that helps me reflect without judging me.”
              </p>
              <p className="font-semibold">— New Member</p>
            </div>
          </div>
        </div>
                <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p className="mb-3">
            SoulAI is designed for reflection, inspiration, and personal growth.
            It does not predict the future or replace professional advice.
          </p>

          <p>
            © 2026 SoulAI. All rights reserved.
          </p>
        </footer>
      </section>
    </main>
  );
}