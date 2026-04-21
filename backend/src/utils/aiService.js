const axios = require("axios");

const KEYS = [
  process.env.GEMINI_API_KEY,
  process.env.GEMINI_API_KEY_BACKUP
].filter(Boolean);

const generateEnhancedContent = async (rawDescription, type) => {
  let lastError = null;

  for (const key of KEYS) {
    const MODEL_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${key}`;
    
    try {
      const prompt = `
        You are an AI assistant for a Lost and Found application.
        The user provided this description of a ${type} item: "${rawDescription}"

        Your task:
        1. Rewrite the description to be clear, professional, and detailed. Focus ONLY on describing the item itself — its physical appearance, brand, color, condition, distinguishing features, and where/when it was lost or found.
        2. Generate a short, catchy title (max 6-8 words).
        3. Extract specific metadata: color, brand, distinctiveMark, and category (e.g., Electronics, Keys, Wallets, Pets).

        CRITICAL RULES:
        - Do NOT include any advisory, instructional, or action-oriented text in the description such as "report to the nearest lost and found desk", "contact the lost and found department", "if found please return to", "please hand it over to authorities", or similar phrases.
        - The description must ONLY contain factual details about the item itself. No instructions, no advice, no calls to action.
        - Keep the category to a single standard word (e.g., "Electronics", "Keys", "Wallet", "Bag", "Clothing", "Jewelry", "Pets", "Documents", "Accessories", "Other").

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

      const cleanJson = candidate.replace(/```json|```/g, "").trim();
      return JSON.parse(cleanJson);
    } catch (error) {
      lastError = error;
      console.warn(`AI Key failed, trying next... Error: ${error.response?.data?.error?.message || error.message}`);
      continue; // Try next key
    }
  }

  console.error("All AI Keys failed.");
  throw new Error(lastError?.response?.data?.error?.message || "Failed to process AI request");
};

module.exports = { generateEnhancedContent };
