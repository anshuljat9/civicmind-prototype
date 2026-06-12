import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function getSchemeRecommendations(userData) {
  const prompt = `
You are an expert on Indian Government Schemes.

User Details:
${JSON.stringify(userData)}

Suggest:
1. Eligible government schemes
2. Benefits of each scheme
3. Why the user qualifies

Keep response simple and easy to read.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}