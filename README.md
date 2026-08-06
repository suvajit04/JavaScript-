# 🎯 Callback-Based Candidate Screening System

Build a small candidate-screening system using JavaScript. The same reusable functions should perform
different operations depending on the callback passed to them.

## 🚀 Quick start
1. Install Node.js (v12+).
2. Run an example: `node one_filterCandidates.js`

## 📁 What's here
- 🔍 **one_filterCandidates.js** — filter candidates (availability, skills, scores, graduation year).
- 🔄 **two_transformCandidates.js** — transform candidates (names, total score, skill counts, formatted strings).
- 📊 **three_calculateCandidateScore.js** — calculate final scores with different weights and bonuses.
- ✅ **four_shortCandidate.js** — shortlist candidates using eligibility and scoring callbacks.
- 📈 **five_sortCandi.js** — sort candidates by test, interview, final score, or name.
- 🔎 **Six_findCandidate.js** — find a specific candidate by id, name, skill, or score.
- 📋 **Seven_generateScreeningReport.js & Eight_generateScreeningReport.js** — generate a ranked screening report.

## 💡 Why this repo
- Short, focused examples to learn how higher-order functions and callbacks can make candidate processing flexible and reusable.

## 💻 Run tips
- Each file is standalone. Run any file with `node <filename>.js`.
- Open the file to see short comments and example outputs.

## 📄 License
Feel free to copy and adapt these examples for learning and small demos.

---

## 🛠️ Technologies Used
- **JavaScript** (ES6+)
- **Node.js** (v12+)
- ✨ No external libraries required — all examples use built-in JS features and standard Node runtime.

## 🎓 Concepts Used
- Higher-order functions and callbacks
- Array methods: `filter`, `map`, `reduce`, `sort`, `find`
- Functional programming patterns (pure functions, immutability where practical)
- Modular code: small, focused example files
- Simple scoring and ranking algorithms
- Data transformation and formatting

## ⚡ How to run the combined JS file

### 🎬 Running combinedCandidates.js (All Modules Combined)

This repository includes a comprehensive combined example file `combinedCandidates.js` that integrates all candidate screening modules into a single executable script.

**To run combinedCandidates.js:**

1. Install Node.js (v12 or newer): https://nodejs.org/
2. From the repository root, run:
   ```bash
   node combinedCandidates.js
   ```

**What combinedCandidates.js includes:**
- ✅ All candidate filtering logic (availability, skills, scores, graduation year)
- ✅ Candidate data transformation (name formatting, score calculations, skill counts)
- ✅ Score calculation with configurable weights and bonus rules
- ✅ Candidate shortlisting and eligibility checks
- ✅ Sorting candidates by multiple criteria (test score, interview score, final score, name)
- ✅ Finding specific candidates by id, name, skill, or score
- ✅ Generating ranked screening reports with formatted summaries

**Expected output:**
Running `combinedCandidates.js` will execute the complete candidate screening pipeline, displaying filtered candidates, transformed data, calculated scores, shortlisted results, sorted rankings, and a final comprehensive screening report.

## 📚 Assignment Modules
A quick reference to the example files and their purpose:

| File | Purpose |
|------|---------|
| **one_filterCandidates.js** | 🔍 Filtering candidates by availability, skills, scores, and graduation year. |
| **two_transformCandidates.js** | 🔄 Transforming candidate objects (name formatting, total score, skill counts, formatted output strings). |
| **three_calculateCandidateScore.js** | 📊 Computing final scores with configurable weights and bonus rules. |
| **four_shortCandidate.js** | ✅ Shortlisting candidates using eligibility and scoring callbacks. |
| **five_sortCandi.js** | 📈 Sorting candidates by various criteria (test score, interview score, final score, name). |
| **Six_findCandidate.js** | 🔎 Finding a specific candidate by id, name, skill, or score. |
| **Seven_generateScreeningReport.js & Eight_generateScreeningReport.js** | 📋 Generating ranked screening reports and formatted summaries. |
| **combinedCandidates.js** | 🎯 Complete candidate screening pipeline with all modules integrated. |

> (Adjust filenames if your local copy uses slightly different names/casing.)

## 🎯 Learning Outcomes
After studying and running these examples you should be able to:
- ✓ Understand and apply higher-order functions and callbacks in JavaScript.
- ✓ Use array iteration helpers (filter/map/reduce/sort/find) to process lists of objects.
- ✓ Build small, composable functions for data transformation and scoring.
- ✓ Implement simple ranking and shortlisting logic for candidate data.
- ✓ Write clear, standalone example scripts that can be executed with Node.
- ✓ Integrate multiple modules into a single comprehensive application.

## 👨‍💻 Author
- **suvajit04** (GitHub)

---

💬 Feel free to open an issue or submit a PR with improvements, additional examples, or corrections!
