# Lost & Found — System Workflow

## Complete Flow: From Report Submission to Item Recovery

```mermaid
flowchart TD
    subgraph USER_ACTION["👤 User Action"]
        A["User opens Report Form\n(Lost or Found)"]
        B["Fills in: Description,\nLocation, Time"]
        C{"Clicks ✨ Enhance\nwith AI?"}
    end

    subgraph AI_ENHANCEMENT["🤖 AI Enhancement (Gemini)"]
        D["POST /api/items/enhance"]
        E["Gemini rewrites description\n+ extracts metadata"]
        F["Returns:\n• title\n• description\n• color, brand, category"]
    end

    subgraph REPORT_SAVED["💾 Report Saved"]
        G["User clicks Submit"]
        H["POST /api/items"]
        I["Report saved to MongoDB\nwith extractedDetails"]
    end

    subgraph MATCHING["🔍 AI Matching Engine (Background)"]
        J["findMatches triggered\n(non-blocking)"]
        K["Query all opposite-type\nactive items from other users"]
        L["For each candidate:\ncalculateScore"]
        M{"Score ≥ 50%?"}
        N["Create Match record\nin MongoDB"]
    end

    subgraph SCORING["📊 Scoring Breakdown"]
        S1["Category Match — 25%\n(Must match or reject)"]
        S2["Title Similarity — 25%\n(Dice coefficient)"]
        S3["Description Similarity — 10%\n(weighted low, AI diverges)"]
        S4["Color Match — 15%"]
        S5["Location Similarity — 15%"]
        S6["Brand Match — 10%"]
    end

    subgraph NOTIFICATIONS["🔔 Dual Notification"]
        O["Notify Lost-Item Owner:\n🔍 A found item matching\nyour lost item was reported!"]
        P["Notify Found-Item Reporter:\n📦 Someone may be looking\nfor the item you found!"]
        Q["Send Email via Gmail SMTP\nto both users"]
    end

    subgraph RESOLUTION["✅ Resolution"]
        R["Lost-item owner reviews\nmatches in dashboard"]
        T{"Accepts match?"}
        U["Match status → accepted"]
        V["Found reporter notified:\n✅ Owner confirmed!"]
        W["💬 Chat opens between\nboth users"]
        X["🎉 Item returned!"]
        Y["Match status → rejected"]
    end

    A --> B --> C
    C -- Yes --> D --> E --> F --> G
    C -- No --> G
    G --> H --> I --> J
    J --> K --> L
    L --> S1
    S1 --> S2 --> S3 --> S4 --> S5 --> S6
    S6 --> M
    M -- "Yes ≥ 50%" --> N
    M -- "No < 50%" --> Z["Skip — not a match"]
    N --> O & P
    O --> Q
    P --> Q
    Q --> R --> T
    T -- Accept --> U --> V --> W --> X
    T -- Reject --> Y
```

---

## Detailed Step-by-Step Breakdown

### Step 1: Report Submission

| Stage | What Happens | Code Location |
|-------|-------------|---------------|
| User fills form | Description, location, time entered | `AppPage.jsx` |
| AI Enhancement _(optional)_ | Gemini rewrites description + extracts `color`, `brand`, `category` | `aiService.js → POST /api/items/enhance` |
| Submit | Report saved to MongoDB with all metadata | `itemController.js → createItem()` |

> [!IMPORTANT]
> Clicking **"✨ Enhance with AI"** is critical for matching quality. Without it, `color`, `brand`, and `category` are empty — the match score drops by ~50%.

---

### Step 2: Matching Engine (Automatic, Background)

After a report is saved, `findMatches()` runs asynchronously:

1. **Query candidates** — fetches all opposite-type (`lost` ↔ `found`) active items from other users
2. **Score each pair** using the weighted algorithm:

| Factor | Weight | How It Works |
|--------|--------|-------------|
| **Category** | 25% | Hard gate — if both have categories and they don't match, score = 0. Uses fuzzy comparison (≥50% similarity) |
| **Title** | 25% | Dice coefficient on AI-generated titles |
| **Description** | 10% | Dice coefficient (weighted low — AI rewrites diverge) |
| **Color** | 15% | Exact/fuzzy string comparison |
| **Location** | 15% | Fuzzy comparison on user-entered location |
| **Brand** | 10% | Exact/fuzzy string comparison |

3. **Threshold**: Score ≥ **50%** creates a match

> [!TIP]
> When categories are missing (user didn't use AI enhance), the system falls back to **title similarity** as a gate — requiring ≥45% title match to prevent false positives like "Charger" ↔ "Wristwatch".

---

### Step 3: Notifications

When a match is found, **both users** receive:

| Recipient | In-App Notification | Email |
|-----------|-------------------|-------|
| **Lost-item owner** | 🔍 "A found item matching your lost _[title]_ was reported near _[location]_" | ✅ Full email with match details |
| **Found-item reporter** | 📦 "Someone may be looking for the item you found: _[title]_" | ✅ Full email with match details |

---

### Step 4: Resolution

```mermaid
flowchart LR
    A["Lost-item owner\nreviews match"] --> B{"Is this\nmy item?"}
    B -- "✅ Accept" --> C["Match confirmed"]
    C --> D["Found reporter notified:\n✅ Owner confirmed!"]
    D --> E["💬 Real-time chat\nopens via Socket.IO"]
    E --> F["🎉 Coordinate return"]
    B -- "❌ Reject" --> G["Match dismissed\nOther matches still visible"]
```

---

### Step 5: Real-Time Chat

- Built on **Socket.IO** for instant messaging
- Chat is tied to a specific match (match ID = room ID)
- Both users receive in-app notifications for new messages:
  - 💬 "New message about _[title]_ — tap to continue the conversation"

---

## Architecture Overview

```mermaid
flowchart TB
    subgraph Frontend["Frontend (React + Vite)"]
        UI["Report Form"]
        Dashboard["Dashboard"]
        Chat["Chat Window"]
    end

    subgraph Backend["Backend (Express.js)"]
        API["REST API"]
        Socket["Socket.IO Server"]
        Matching["Matching Engine"]
        AI["Gemini AI Service"]
        Email["Email Service (SMTP)"]
    end

    subgraph External["External Services"]
        Gemini["Google Gemini API"]
        Clerk["Clerk Auth"]
        MongoDB["MongoDB Atlas"]
        Gmail["Gmail SMTP"]
    end

    UI -- "POST /api/items" --> API
    UI -- "POST /api/items/enhance" --> API
    Dashboard -- "GET /api/matches" --> API
    Chat -- "WebSocket" --> Socket

    API --> Matching
    API --> AI
    Matching --> Email
    AI --> Gemini
    Email --> Gmail
    API --> MongoDB
    Matching --> MongoDB
    Frontend --> Clerk
    Backend --> Clerk
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `aiService.js` | Gemini prompt + metadata extraction |
| `matchingService.js` | Scoring algorithm + match creation + notifications |
| `emailService.js` | Gmail SMTP transport + email templates |
| `clerkClient.js` | User email lookup from Clerk |
| `itemController.js` | Report CRUD + triggers matching |
| `matchController.js` | Match accept/reject + status notifications |
| `index.js` | Socket.IO chat + chat notifications |
