# Smart Matching System (Backend)

## Overview

The matching system is the core engine of the platform, responsible for pairing "Lost" items with "Found" items. Instead of relying on heavy Machine Learning models, it uses a **Hybrid Heuristics Approach** backed by AI metadata extraction.

## Libraries Used

- **`string-similarity`**: Analyzes the degree of similarity between titles and descriptions using string distance algorithms (e.g., Dice's Coefficient).
- **Mongoose**: Executes efficient queries to filter items by category and report type before running the matching logic.

## How it Works

1. **Filtering (Pre-computation):**
   - When a new item is reported, the system only compares it against items of the _opposite_ type (e.g., a newly "Lost" item is only compared to existing "Found" items).
   - Comparisons are strictly limited to the same `Category` (e.g., Electronics, Keys, Wallets) to reduce compute overhead.

2. **Scoring Engine:**
   - The engine (`matchingService.js`) calculates a 0-100 score based on multiple weighted criteria:
     - **Title & Description (40%):** Uses `string-similarity` to compare the AI-refined text.
     - **Color & Brand (15% + 10%):** Exact or close matches in categorical fields.
     - **Location (15%):** Proximity of where the item was lost vs. found.
     - **Distinctive Marks (10%):** Matches in unique identifiers extracted by AI.
     - **Time Proximity (10%):** How close the lost and found dates are.

3. **Thresholds & Actions:**
   - **Score > 0.70:** High confidence match. A Match record is created in the database and users are notified.
   - **Score 0.50 - 0.69:** Potential match. Added to a "suggested" queue for user manual review.
   - **Score < 0.50:** Discarded as irrelevant.
