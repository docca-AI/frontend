// server.js

import "dotenv/config";
import express from "express";
import cors from "cors";
// This line uses the correct named export from the SDK's module structure
import { GoogleGenAI } from "@google/genai";

const app = express();
const PORT = process.env.PORT || 5000;

// ----------------- Middleware -----------------
app.use(cors());
app.use(express.json());

// ----------------- Gemini Setup -----------------
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("FATAL ERROR: GEMINI_API_KEY is not set in the .env file!");
  process.exit(1);
}

// Initialize the AI client securely
// Note: We use 'GoogleGenAI' here, matching the import name.
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const model = "gemini-2.5-flash";

// ----------------- API Endpoint -----------------
app.post("/api/chat", async (req, res) => {
  const { message, language, history } = req.body;

  // Safety and Rule Enforcement Prompt (The Triage/Pidgin brain!)
  const systemInstruction = `You are Docca AI, a clinical triage assistant. Your goal is to guide the user to the correct next step: a doctor referral or self-care advice. 
    RULES: 1. Do NOT offer a diagnosis. Only ask clarifying questions (max 2) before providing the final advice. 2. Output MUST have two sections: Self-Care Tips and Doctor Recommendation. 3. The user's current language preference is ${language}. All your responses must be delivered in ${language}, using simple, non-technical language.`;

  try {
    // Start a chat session
    const chat = ai.chats.create({
      model: model,
      config: { systemInstruction: systemInstruction },
      history: history || [],
    });

    // Send the message and wait for the Gemini response
    const result = await chat.sendMessage({ message: message });

    // Send the AI's Pidgin/English text back to the React front-end
    res.json({ text: result.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error:
        language === "Nigerian Pidgin"
          ? "Sorry, AI dey get trouble now. Abeg try again small time."
          : "Sorry, the AI is encountering an error. Please try again later.",
    });
  }
});

// ----------------- Start Server -----------------
app.listen(PORT, () => {
  console.log(`Docca AI Backend running securely on http://localhost:${PORT}`);
});
