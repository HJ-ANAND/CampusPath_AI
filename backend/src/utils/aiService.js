const axios = require("axios");

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`;

const generateEnhancedContent = async (rawDescription, type) => {
  try {
    const prompt = `
      You are an AI assistant for a Lost and Found application.
      The user provided this description of a ${type} item: "${rawDescription}"

      Your task:
      1. Rewrite the description to be clear, professional, and detailed.
      2. Generate a short, catchy title (max 6-8 words).
      3. Extract specific metadata: color, brand, distinctiveMark, and category (e.g., Electronics, Keys, Wallets, Pets).

      Strictly return your response as a JSON object with this exact structure:
      {
        "title": "...",
        "description": "...",
        "metadata": {
          "color": "...",
          "brand": "...",
          "distinctiveMark": "...",
          "category": "..."
        }
      }
      Do not include any markdown formatting like \`\`\`json. Just the raw JSON object.
    `;

    const response = await axios.post(MODEL_URL, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const candidate = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidate) throw new Error("No response from AI");

    // Remove any accidental markdown backticks if AI ignores instruction
    const cleanJson = candidate.replace(/```json|```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("AI Service Error:", error.response?.data || error.message);
    throw new Error("Failed to process AI request");
  }
};

module.exports = { generateEnhancedContent };
