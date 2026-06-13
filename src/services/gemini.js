import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function getSchemeRecommendations(userData) {
  try {
const prompt = `
You are an expert on Indian Government Schemes.

User Details:
${JSON.stringify(userData)}

Suggest:

1. Eligible government schemes
2. Benefits of each scheme
3. Why the user qualifies
4. Required documents for each scheme
5. Step-by-step application process
6. Official website link

Rules:
- Give 3 to 5 most relevant schemes.
- Use simple Hindi.
- Use headings and bullet points.
- Mention official government website whenever available.
- Explain in a way that less educated citizens can understand.

Respond completely in Hindi (Devanagari).
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.error(error);

    return `❌ Gemini Error: ${
      error?.message || "Unknown Error"
    }`;
  }
}