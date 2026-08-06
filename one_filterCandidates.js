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
  }
function filterCandidates(candidates, conditionCallback) {
  return candidates.filter(conditionCallback);
}

//  Available candidates
const availableCandidates = filterCandidates(
  candidates,
  candidate => candidate.isAvailable
);

console.log("Available Candidates:");
console.log(availableCandidates);

// Candidates scoring above 75
const highScorers = filterCandidates(
  candidates,
  candidate => candidate.testScore > 75
);

console.log("Candidates Scoring Above 75:");
console.log(highScorers);

// Candidates who know Js
const javaScriptCandidates = filterCandidates(
  candidates,
  candidate => candidate.skills.includes("JavaScript")
);

console.log("Candidates Who Know JavaScript:");
console.log(javaScriptCandidates);

//  gradetu after 2025
const recentGraduates = filterCandidates(
  candidates,
  candidate => candidate.graduationYear >= 2025
);

console.log("Candidates Graduating After 2025:");
console.log(recentGraduates);
