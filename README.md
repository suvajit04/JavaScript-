# Candidate Screening — Simple JavaScript Examples

A tiny, easy-to-read collection of JavaScript examples that show how to build a small candidate screening pipeline using reusable functions and callbacks.

Quick start
1. Install Node.js (v12+).
2. Run an example: node one_filterCandidates.js

What’s here
- one_filterCandidates.js — filter candidates (availability, skills, scores, graduation year).
- two _transformCandidates.js — transform candidates (names, total score, skill counts, formatted strings).
- three_calculateCandidateScore.js — calculate final scores with different weights and bonuses.
- four_shortCandidate.js — shortlist candidates using eligibility and scoring callbacks.
- five_sortCandi.js — sort candidates by test, interview, final score, or name.
- Six_findCandidate.js — find a specific candidate by id, name, skill, or score.
- Seven _generateScreeningReport.js & Eight _generateScreeningReport.js — generate a ranked screening report.

Why this repo
- Short, focused examples to learn how higher-order functions and callbacks can make candidate processing flexible and reusable.

Run tips
- Each file is standalone. Run any file with node <filename>.js.
- Open the file to see short comments and example outputs.

License
Feel free to copy and adapt these examples for learning and small demos.

---

## Technologies Used
- JavaScript (ES6+)
- Node.js (v12+)
- No external libraries required — all examples use built-in JS features and standard Node runtime.

## Concepts Used
- Higher-order functions and callbacks
- Array methods: filter, map, reduce, sort, find
- Functional programming patterns (pure functions, immutability where practical)
- Modular code: small, focused example files
- Simple scoring and ranking algorithms
- Data transformation and formatting

## How to run the combined JS file
If this repository includes a combined example file (for example `combined.js` or `combinedjs.js`), run it with Node:

1. Install Node.js (v12 or newer): https://nodejs.org/
2. From the repository root, run one of the commands below depending on the filename:
   - node combined.js
   - node combinedjs.js

If you meant to combine multiple examples into a single file first, create a `combined.js` that imports or copies the desired sections from the example files and then run `node combined.js`.

## Assignment Modules
A quick reference to the example files and their purpose:

- one_filterCandidates.js — Filtering candidates by availability, skills, scores, and graduation year.
- two_transformCandidates.js — Transforming candidate objects (name formatting, total score, skill counts, formatted output strings).
- three_calculateCandidateScore.js — Computing final scores with configurable weights and bonus rules.
- four_shortCandidate.js — Shortlisting candidates using eligibility and scoring callbacks.
- five_sortCandi.js — Sorting candidates by various criteria (test score, interview score, final score, name).
- Six_findCandidate.js — Finding a specific candidate by id, name, skill, or score.
- Seven_generateScreeningReport.js & Eight_generateScreeningReport.js — Generating ranked screening reports and formatted summaries.

(Adjust filenames if your local copy uses slightly different names/casing.)

## Learning Outcomes
After studying and running these examples you should be able to:
- Understand and apply higher-order functions and callbacks in JavaScript.
- Use array iteration helpers (filter/map/reduce/sort/find) to process lists of objects.
- Build small, composable functions for data transformation and scoring.
- Implement simple ranking and shortlisting logic for candidate data.
- Write clear, standalone example scripts that can be executed with Node.

## Author
- suvajit04 (GitHub)

---

Feel free to open an issue or submit a PR with improvements, additional examples, or corrections.
