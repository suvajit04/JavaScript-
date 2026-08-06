const candidates = [
  {
    id: 1,
    name: "Aman",
    graduationYear: 2025,
    skills: ["JavaScript", "Node.js", "Git"],
    testScore: 78,
    interviewScore: 72,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Riya",
    graduationYear: 2024,
    skills: ["JavaScript", "React", "Git"],
    testScore: 88,
    interviewScore: 84,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Soham",
    graduationYear: 2026,
    skills: ["Python", "SQL"],
    testScore: 65,
    interviewScore: 70,
    isAvailable: false,
  },
  {
    id: 4,
    name: "Nisha",
    graduationYear: 2025,
    skills: ["JavaScript", "Node.js", "MySQL"],
    testScore: 92,
    interviewScore: 89,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Arjun",
    graduationYear: 2023,
    skills: ["Java", "Spring Boot", "Git"],
    testScore: 74,
    interviewScore: 76,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Megha",
    graduationYear: 2026,
    skills: ["JavaScript", "Node.js", "React", "Git"],
    testScore: 85,
    interviewScore: 80,
    isAvailable: false,
  },
];

// ---------- Generic helpers (filter, transform, sort, find) ----------
function filterCandidates(list, conditionCallback) {
  return list.filter(conditionCallback);
}

function transformCandidates(list, transformCallback) {
  return list.map(transformCallback);
}

function sortCandidates(list, compareCallback) {
  return [...list].sort(compareCallback);
}

function findCandidate(list, searchCallback) {
  return list.find(searchCallback);
}

// ---------- Score calculators ----------
function calculateCandidateScore(candidate, scoreCallback) {
  return scoreCallback(candidate);
}

const equalWeight = c => c.testScore + c.interviewScore;

const weightedScore = c => c.testScore * 0.6 + c.interviewScore * 0.4;

const weightedBonus = c => {
  let bonus = 0;
  if (c.skills.includes("JavaScript")) bonus += 5;
  if (c.skills.includes("Node.js")) bonus += 5;
  if (c.skills.includes("Git")) bonus += 3;
  return c.testScore * 0.6 + c.interviewScore * 0.4 + bonus;
};

// A calculator used by the screening report (returns number rounded to 1 decimal)
function calculateReportScore(c) {
  return +(c.testScore * 0.6 + c.interviewScore * 0.4).toFixed(1);
}

// ---------- Shortlisting ----------
function shortlistCandidates(list, eligibilityCallback, scoreCallback) {
  const minScore = 60;
  return list
    .filter(eligibilityCallback)
    .map(c => ({
      id: c.id,
      name: c.name,
      finalScore: Number(scoreCallback(c)),
    }))
    .filter(c => c.finalScore >= minScore);
}

// ---------- Validation functions ----------
function requiredFields(candidate) {
  if (!candidate.name || candidate.name.trim() === "") {
    return { isValid: false, message: "Candidate name required" };
  }
  if (candidate.testScore === undefined) {
    return { isValid: false, message: "Test score is required" };
  }
  if (candidate.interviewScore === undefined) {
    return { isValid: false, message: "Interview score is required" };
  }
  return { isValid: true, message: "Required fields valid" };
}

function validateScore(candidate) {
  if (candidate.testScore < 0 || candidate.testScore > 100) {
    return { isValid: false, message: "Test score must be between 0 and 100" };
  }
  if (candidate.interviewScore < 0 || candidate.interviewScore > 100) {
    return { isValid: false, message: "Interview score must be between 0 and 100" };
  }
  return { isValid: true, message: "Scores are valid" };
}

function validateSkills(candidate) {
  if (!Array.isArray(candidate.skills) || candidate.skills.length === 0) {
    return { isValid: false, message: "Candidate must have at least one skill" };
  }
  return { isValid: true, message: "Skills are valid" };
}

function validateGraduationYear(candidate) {
  if (candidate.graduationYear < 2023 || candidate.graduationYear > 2030) {
    return { isValid: false, message: "Invalid graduation year" };
  }
  return { isValid: true, message: "Graduation year is valid" };
}

function validateAvailability(candidate) {
  if (typeof candidate.isAvailable !== "boolean") {
    return { isValid: false, message: "Availability must be true or false" };
  }
  return { isValid: true, message: "Availability is valid" };
}

function validateCandidate(candidate, validationCallback) {
  return validationCallback(candidate);
}

function validateAll(candidate) {
  const validations = [
    requiredFields,
    validateScore,
    validateSkills,
    validateGraduationYear,
    validateAvailability,
  ];

  for (let validation of validations) {
    const result = validateCandidate(candidate, validation);
    if (!result.isValid) return result;
  }
  return { isValid: true, message: "Candidate is valid" };
}

// ---------- Screening report (format & generator) ----------
function formatReport(candidate, rank) {
  return {
    rank,
    name: candidate.name,
    finalScore: candidate.finalScore,
    status: candidate.finalScore >= 90 ? "Strongly Recommended" : "Recommended",
  };
}

function generateScreeningReport(list, filterCallback, scoreCallback, formatterCallback) {
  return list
    .filter(filterCallback)
    .map(c => ({ ...c, finalScore: scoreCallback(c) }))
    .sort((a, b) => b.finalScore - a.finalScore)
    .map((c, i) => formatterCallback(c, i + 1));
}

// ---------- Demonstrations / Example runs ----------

console.log("=== Filter examples ===");
// Available candidates
const availableCandidates = filterCandidates(candidates, c => c.isAvailable);
console.log("Available Candidates:");
console.log(availableCandidates);

// Candidates scoring above 75 (testScore)
const highScorers = filterCandidates(candidates, c => c.testScore > 75);
console.log("Candidates Scoring Above 75 (testScore):");
console.log(highScorers);

// Candidates who know JavaScript
const javaScriptCandidates = filterCandidates(candidates, c => c.skills.includes("JavaScript"));
console.log("Candidates Who Know JavaScript:");
console.log(javaScriptCandidates);

// Graduating 2025 or later
const recentGraduates = filterCandidates(candidates, c => c.graduationYear >= 2025);
console.log("Candidates Graduating 2025 or Later:");
console.log(recentGraduates);

console.log("\n=== Transform examples ===");
// Candidate names
const candidateNames = transformCandidates(candidates, c => c.name);
console.log("Candidate Names:");
console.log(candidateNames);

// Name with total score
const nameWithTotalScore = transformCandidates(candidates, c => ({ name: c.name, totalScore: c.testScore + c.interviewScore }));
console.log("Name with Total Score:");
console.log(nameWithTotalScore);

// Name with skill count
const nameWithSkillCount = transformCandidates(candidates, c => ({ name: c.name, skillCount: c.skills.length }));
console.log("Name with Skill Count:");
console.log(nameWithSkillCount);

// Formatted strings
const formattedCandidates = transformCandidates(candidates, c =>
  `${c.name} - Skills: ${c.skills.length} - Total Score: ${c.testScore + c.interviewScore}`
);
console.log("Formatted Candidate Strings:");
console.log(formattedCandidates);

console.log("\n=== Sort examples ===");
// By test score
const byTest = sortCandidates(candidates, (a, b) => b.testScore - a.testScore);
console.log("Sorted by Test Score:");
console.log(byTest.map(c => `${c.name} - ${c.testScore}`));

// By interview score
const byInterview = sortCandidates(candidates, (a, b) => b.interviewScore - a.interviewScore);
console.log("Sorted by Interview Score:");
console.log(byInterview.map(c => `${c.name} - ${c.interviewScore}`));

// By combined final (test + interview)
const byFinal = sortCandidates(candidates, (a, b) =>
  (b.testScore + b.interviewScore) - (a.testScore + a.interviewScore)
);
console.log("Sorted by Combined Final Score:");
console.log(byFinal.map(c => `${c.name} - ${c.testScore + c.interviewScore}`));

// By name
const byName = sortCandidates(candidates, (a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name:");
console.log(byName.map(c => c.name));

console.log("\n=== Score calculations ===");
candidates.forEach(c => {
  console.log("Name:", c.name);
  console.log("Equal Weight:", calculateCandidateScore(c, equalWeight));
  console.log("Weighted Score (60/40):", calculateCandidateScore(c, weightedScore).toFixed(1));
  console.log("Weighted with Bonus:", calculateCandidateScore(c, weightedBonus).toFixed(1));
  console.log("--------------");
});

console.log("\n=== Find examples ===");
// Find by id
console.log("Find id === 4:");
console.log(findCandidate(candidates, c => c.id === 4));

// Find by name
console.log("Find name === 'Nisha':");
console.log(findCandidate(candidates, c => c.name === "Nisha"));

// Find testScore > 90
console.log("Find candidate with testScore > 90:");
console.log(findCandidate(candidates, c => c.testScore > 90));

// Find candidate knows Node.js
console.log("Find candidate who knows Node.js:");
console.log(findCandidate(candidates, c => c.skills.includes("Node.js")));

console.log("\n=== Shortlist example ===");
const shortlisted = shortlistCandidates(
  candidates,
  c => c.isAvailable && c.skills.includes("JavaScript") && c.testScore >= 70,
  c => +(c.testScore * 0.6 + c.interviewScore * 0.4).toFixed(1)
);
console.log("Shortlisted Candidates (min final 60):");
console.log(shortlisted);

console.log("\n=== Validation checks ===");
candidates.forEach(c => {
  const v = validateAll(c);
  console.log(`${c.name}: ${v.isValid ? "Valid" : "Invalid"} - ${v.message}`);
});

console.log("\n=== Screening report ===");
const screeningReport = generateScreeningReport(
  candidates,
  c => c.isAvailable, // filter
  calculateReportScore, // scoring (rounded to 1 decimal)
  formatReport // formatter
);
console.log("Screening Report:");
console.log(screeningReport);

// End of combinedCandidates.js
