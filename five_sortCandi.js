const candidates = [
  {
    id: 1,
    name: "Aman",
    skills: ["JavaScript", "Node.js", "Git"],
    testScore: 78,
    interviewScore: 72,
  },
  {
    id: 2,
    name: "Riya",
    skills: ["JavaScript", "React", "Git"],
    testScore: 88,
    interviewScore: 84,
  },
  {
    id: 3,
    name: "Soham",
    skills: ["Python", "SQL"],
    testScore: 65,
    interviewScore: 70,
  },
  {
    id: 4,
    name: "Nisha",
    skills: ["JavaScript", "Node.js", "MySQL"],
    testScore: 92,
    interviewScore: 89,
  },
  {
    id: 5,
    name: "Arjun",
    skills: ["Java", "Spring Boot", "Git"],
    testScore: 74,
    interviewScore: 76,
  },
  {
    id: 6,
    name: "Megha",
    skills: ["JavaScript", "Node.js", "React", "Git"],
    testScore: 85,
    interviewScore: 80,
  },
];

function sortCandidates(candidates, compareCallback) {
  return [...candidates].sort(compareCallback);
}

// Test Score
const byTest = sortCandidates(candidates, (a, b) => b.testScore - a.testScore);
console.log("Test Score");
console.log(byTest.map(c => `${c.name} - ${c.testScore}`));

// Interview Score
const byInterview = sortCandidates(candidates, (a, b) => b.interviewScore - a.interviewScore);
console.log("Interveww");
console.log(byInterview.map(c => `${c.name} - ${c.interviewScore}`));

// Final Score
const byFinal = sortCandidates(
  candidates,
  (a, b) =>
    (b.testScore + b.interviewScore) -
    (a.testScore + a.interviewScore)
);
console.log("Final highest Score");
console.log(byFinal.map(c => `${c.name} - ${c.testScore + c.interviewScore}`));

// Name
const byName = sortCandidates(candidates, (a, b) =>
  a.name.localeCompare(b.name)
);
console.log(byName.map(c => c.name));

// Number of Skills
//const bySkills = sortCandidates(
  //candidates,
  //(a, b) => b.skills.length - a.skills.length);
//console.log(bySkills.map(c => `${c.name} - ${c.skills.length}`));