# AI Services (Backend)

## Overview

To improve the accuracy of our Matching System, the platform utilizes AI to process messy, user-generated descriptions into clean, structured metadata.

## Libraries Used

- **`axios`**: Used to send RESTful HTTP requests to the Google Gemini AI endpoints.

## How it Works (`aiService.js`)

1. **Data Ingestion:** A user submits a raw string (e.g., _"I lost my black iPhone 13 with a cracked screen near the library yesterday."_).
2. **Prompt Engineering:** The backend passes this text to the Google Gemini API with a strict prompt, instructing the AI to act as a data extractor.
3. **Structured Response:** The AI returns a structured JSON object containing:
   - `Title`: "Black iPhone 13"
   - `Category`: "Electronics"
   - `Color`: "Black"
   - `Distinctive Marks`: "Cracked screen"
4. **Database Storage:** The output is saved to the database. Because the data is now structured and standardized, the heuristics in the `matchingService` can easily compare "Black" to "Black" and "Electronics" to "Electronics" with high accuracy.
