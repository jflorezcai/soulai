import OpenAI from "openai";

export async function POST() {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  
    const response = await client.responses.create({
      model: "gpt-4o-mini",
     input:
  "Create a short symbolic daily reading for SoulAI in clean plain text only. Do not use markdown, hashtags, asterisks, bullet points, or numbered lists. Use exactly this format:\n\nTitle: [symbolic title]\n\nReflection: [short reflective message]\n\nPractical Action: [one simple action for today]\n\nDo not claim to predict the future.",
    });

    return Response.json({
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