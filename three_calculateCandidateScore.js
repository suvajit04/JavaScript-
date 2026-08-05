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

function calculateCandidateScore(candidate, scoreCallback) {
  return scoreCallback(candidate);
}

// Equal Weight
const equalWeight = c => c.testScore + c.interviewScore;

// Weighted Score (60% Test + 40% Interview)
const weightedScore = c =>
  c.testScore * 0.6 + c.interviewScore * 0.4;

// Weighted Score with Skill Bonus
const weightedBonus = c => {
  let bonus = 0;

  if (c.skills.includes("JavaScript")) bonus += 5;
  if (c.skills.includes("Node.js")) bonus += 5;
  if (c.skills.includes("Git")) bonus += 3;

  return c.testScore * 0.6 + c.interviewScore * 0.4 + bonus;
};

candidates.forEach(c => {
  console.log("Name:", c.name);
  console.log("Equal Weight:", calculateCandidateScore(c, equalWeight));
  console.log("Weighted Score:", calculateCandidateScore(c, weightedScore));
  console.log("Weighted Score with Bonus:", calculateCandidateScore(c, weightedBonus));
  console.log("=>>>>>>>>>=>>>>>>>>=>>>");
});
