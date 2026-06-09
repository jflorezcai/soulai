import OpenAI from "openai";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const selectedCards = body.cards || [
      "El Faro",
      "La Luna",
      "La Llave",
    ];

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: `
Crea una lectura simbólica diaria para SoulAI usando estas 3 cartas seleccionadas por el usuario:

Carta 1 - Energía presente: ${selectedCards[0]}
Carta 2 - Aspecto a observar: ${selectedCards[1]}
Carta 3 - Próximo paso: ${selectedCards[2]}

Devuelve SOLO markdown válido.

Formato exacto:

# Lectura de tres cartas

## Energía presente: ${selectedCards[0]}

Explica esta carta en 1 párrafo corto.

## Aspecto a observar: ${selectedCards[1]}

Explica esta carta en 1 párrafo corto.

## Próximo paso: ${selectedCards[2]}

Explica esta carta en 1 párrafo corto.

## Reflexión integrada

Escribe 2 párrafos cortos conectando las tres cartas en una narrativa simbólica coherente.

## Acción práctica

Escribe 1 acción práctica para hoy.

Reglas importantes:
No predigas el futuro.
No uses adivinación.
No afirmes tener poderes sobrenaturales.
No des consejos médicos, legales ni financieros.
El tono debe ser inspirador, reflexivo, ético y práctico.
      `,
    });

    return Response.json({
      cards: selectedCards,
      reading: response.output_text,
    });
  } catch (error: any) {
    console.error("OPENAI ERROR:", error);

    return Response.json(
      {
        reading: "API error: " + (error?.message || "Unknown error"),
      },
      { status: 500 }
    );
  }
}