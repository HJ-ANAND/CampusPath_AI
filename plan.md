# 🧩 Lost & Found System — Development Plan

## 📌 Project Overview

A campus-focused Lost & Found platform where users can:

* Report lost or found items
* Automatically match reports using text + image signals
* Get notified when a match is found
* Connect via chat to recover items

---

# 🏗️ Current Stack

* **Frontend:** React
* **Backend:** Node.js + Express
* **Database:** MongoDB
* **Auth:** Clerk
* **Media Storage:** Cloudinary (planned)
* **Automation:** n8n (planned)

---

# 🚀 Roadmap

## ✅ Phase 1: Core Enhancements

### 1. Image Upload Integration

**Goal:** Allow users to upload item images

**Tasks:**

* Integrate Cloudinary SDK in backend
* Create upload API endpoint
* Store in DB:

  * `imageUrl`
  * `publicId`
  * `dominantColors` (from Cloudinary)
  * `uploadedAt`

---

### 2. Improve Item Report Structure

**Goal:** Better matching accuracy via structured data

**Fields to ensure:**

* title
* description
* category (dropdown)
* color (controlled input)
* brand (optional)
* location (structured or coordinates)
* date/time

---

## 🧠 Phase 2: Matching System (Core Logic)

### 🔹 Step 1: Candidate Filtering

Reduce search space before scoring

**Filters:**

* Opposite type (Lost ↔ Found)
* Same category
* Location proximity
* Time window (last 7 days)

---

### 🔹 Step 2: Text Matching

**Approach (MVP):**

* Combine fields:

  ```
  fullText = title + description + brand + color
  ```
* Apply:

  * TF-IDF OR
  * keyword overlap OR
  * cosine similarity

---

### 🔹 Step 3: Image Matching

#### Phase 1 (MVP)

* Use:

  * dominant color comparison
  * optional tags

#### Phase 2 (Later)

* Use CLIP model for embeddings
* Compare using cosine similarity

---

### 🔹 Step 4: Scoring System

```
finalScore =
  0.35 * textScore +
  0.20 * imageScore +
  0.15 * categoryMatch +
  0.10 * colorMatch +
  0.10 * locationScore +
  0.10 * timeScore
```

---

### 🔹 Step 5: Match Thresholds

* **> 0.75** → strong match → notify
* **0.55–0.75** → possible match → show suggestion
* **< 0.55** → ignore

---

## ⚙️ Phase 3: Notifications (n8n)

### Flow:

1. Backend detects match
2. Send webhook to n8n
3. n8n:

   * Send email to both users
   * Include:

     * item preview
     * match confidence
     * link to view match

### Safeguards:

* Limit notifications (avoid spam)
* Only notify high-confidence matches

---

## 💬 Phase 4: User-to-User Chat

### Flow:

1. Match detected
2. Users see "Potential match"
3. User clicks **Connect**
4. Chat room created

### Tech Options:

* Socket.io (real-time)
* OR simple polling (MVP)

---

## 🧪 Phase 5: Future Improvements

* Sentence embeddings for text (semantic matching)
* CLIP-based image similarity
* Ranking improvements based on user feedback
* Admin moderation panel
* Push notifications

---

# ⚠️ Key Design Principles

## 1. Start Simple

* Avoid heavy ML initially
* Focus on structured data + scoring

## 2. Data Quality > Model Complexity

* Better forms → better matches

## 3. Avoid External APIs

* Use open-source models when scaling

## 4. Optimize for Campus Use

* Location + time are critical signals

---

# 🧱 System Flow

```
User submits report
        ↓
Store in MongoDB
        ↓
Run candidate filtering
        ↓
Compute match scores
        ↓
Rank matches
        ↓
If threshold met:
        ↓
Trigger n8n → send email
        ↓
User accepts → chat starts
```

---

# 🎯 Success Metrics

* Match accuracy
* Number of successful recoveries
* User engagement (reports + responses)
* Time to recovery

---

# 📌 Next Immediate Tasks

* [ ] Implement Cloudinary upload
* [ ] Enhance report form (structured inputs)
* [ ] Build candidate filtering query
* [ ] Implement basic scoring system
* [ ] Set up n8n webhook + email
* [ ] Create chat system (MVP)

---

## 🧩 Final Note

Matching is a **ranking problem**, not just an ML problem.
Start with strong heuristics → improve with data over time.

---
