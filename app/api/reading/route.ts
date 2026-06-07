import OpenAI from "openai";

export async function POST() {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  
    const response = await client.responses.create({
      model: "gpt-4o-mini",
     input:
      `Create a symbolic daily reading for SoulAI.

Return ONLY valid markdown.

Format exactly as:

# [Title]

## Reflection

2 short paragraphs.

## Practical Action

1 practical action for today.

Do not predict the future.
Do not use fortune telling.
Keep the tone inspirational and reflective.`
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