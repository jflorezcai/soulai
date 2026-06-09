"use client";

import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";

const cardDeck = [
  { name: "El Sol", image: "/cards/sol.jpg" },
  { name: "La Luna", image: "/cards/luna.jpg" },
  { name: "La Estrella", image: "/cards/estrella.jpg" },
  { name: "El Río", image: "/cards/rio.jpg" },
  { name: "La Montaña", image: "/cards/montana.jpg" },
  { name: "La Brújula", image: "/cards/brujula.jpg" },
  { name: "El Faro", image: "/cards/faro.jpg" },
  { name: "El Puente", image: "/cards/puente.jpg" },
  { name: "El Sendero", image: "/cards/sendero.jpg" },
  { name: "La Llave", image: "/cards/llave.jpg" },
  { name: "La Semilla", image: "/cards/semilla.jpg" },
  { name: "El Árbol", image: "/cards/arbol.jpg" },
  { name: "El Jardín", image: "/cards/jardin.jpg" },
  { name: "La Cascada", image: "/cards/cascada.jpg" },
  { name: "El Horizonte", image: "/cards/horizonte.jpg" },
  { name: "El Espejo", image: "/cards/espejo.jpg" },
  { name: "El Fénix", image: "/cards/fenix.jpg" },
  { name: "La Puerta", image: "/cards/puerta.jpg" },
  { name: "El Viento", image: "/cards/viento.jpg" },
  { name: "La Antorcha", image: "/cards/antorcha.jpg" },
  { name: "El Libro", image: "/cards/libro.jpg" },
  { name: "La Balanza", image: "/cards/balanza.jpg" },
  { name: "El Reloj", image: "/cards/reloj.jpg" },
  { name: "El Taller", image: "/cards/taller.jpg" },
  { name: "El Cofre", image: "/cards/cofre.jpg" },
];

function shuffleCards() {
  return [...cardDeck].sort(() => Math.random() - 0.5);
}

export default function ReadingPage() {
  const shuffledDeck = useMemo(() => shuffleCards(), []);

  const [reading, setReading] = useState(
    "Escoge 3 cartas volteadas para recibir tu lectura simbólica."
  );
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function chooseCard(cardName: string) {
    if (loading) return;

    if (selectedCards.includes(cardName)) {
      setSelectedCards(selectedCards.filter((c) => c !== cardName));
      return;
    }

    if (selectedCards.length >= 3) return;

    setSelectedCards([...selectedCards, cardName]);
  }

  async function generateReading() {
    if (selectedCards.length !== 3) {
      alert("Por favor escoge 3 cartas.");
      return;
    }

    setLoading(true);
    setReading("Generando tu lectura simbólica...");

    try {
      const response = await fetch("/api/reading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cards: selectedCards }),
      });

      const data = await response.json();
      setReading(data.reading);
    } catch {
      setReading("Algo salió mal. Por favor intenta de nuevo.");
    }

    setLoading(false);
  }

  function resetCards() {
    if (loading) return;

    setSelectedCards([]);
    setReading("Escoge 3 cartas volteadas para recibir tu lectura simbólica.");
  }

  return (
    <main className="min-h-screen bg-[#070412] text-white flex items-center justify-center px-6 py-10">
      <section className="max-w-6xl text-center">
        <nav className="mb-12 flex justify-center gap-8 text-sm font-semibold text-purple-300">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/reading" className="hover:text-white transition">Reading</a>
          <a href="/premium" className="hover:text-white transition">Premium</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <p className="uppercase tracking-[0.3em] text-purple-300 mb-4">
          Lectura Simbólica con IA
        </p>

        <h1 className="text-5xl font-bold mb-6">Escoge 3 cartas</h1>

        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Elige 3 cartas volteadas. SoulAI usará esos símbolos como punto de partida
          para una reflexión personal, práctica y positiva.
        </p>

        <p className="mb-8 text-purple-300 font-semibold">
          Cartas seleccionadas: {selectedCards.length} / 3
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {shuffledDeck.map((card) => {
            const isSelected = selectedCards.includes(card.name);

            return (
              <button
                key={card.name}
                onClick={() => chooseCard(card.name)}
                disabled={loading}
                className="h-52 rounded-2xl perspective-[1000px] disabled:opacity-50"
              >
                <div
                  className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                    isSelected ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl border border-purple-400 bg-purple-900/50 shadow-xl flex items-center justify-center [backface-visibility:hidden]">
                    <span className="text-4xl">✦</span>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-purple-200 bg-purple-950 shadow-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-sm font-semibold">
                      {card.name}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {selectedCards.length > 0 && (
          <p className="mb-6 text-purple-300 font-semibold">
            Cartas seleccionadas: {selectedCards.join(" · ")}
          </p>
        )}

        <div className="mb-10 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={generateReading}
            disabled={loading || selectedCards.length !== 3}
            className="rounded-full bg-purple-500 px-8 py-4 font-semibold hover:bg-purple-400 transition disabled:opacity-50"
          >
            {loading ? "Generando..." : "Generar lectura"}
          </button>

          <button
            onClick={resetCards}
            disabled={loading}
            className="rounded-full border border-purple-300 px-8 py-4 font-semibold hover:bg-white hover:text-black transition disabled:opacity-50"
          >
            Reiniciar cartas
          </button>
        </div>

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
          SoulAI está diseñado para reflexión, inspiración y crecimiento personal.
          No predice el futuro ni reemplaza consejo profesional, médico, legal o financiero.
        </p>
      </section>
    </main>
  );
}