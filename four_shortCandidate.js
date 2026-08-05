const candidates = [
  {
    id: 1,
    name: "Aman",
    skills: ["JavaScript", "Node.js", "Git"],
    testScore: 78,
    interviewScore: 72,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Riya",
    skills: ["JavaScript", "React", "Git"],
    testScore: 88,
    interviewScore: 84,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Soham",
    skills: ["Python", "SQL"],
    testScore: 65,
    interviewScore: 70,
    isAvailable: false,
  },
  {
    id: 4,
    name: "Nisha",
    skills: ["JavaScript", "Node.js", "MySQL"],
    testScore: 92,
    interviewScore: 89,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Arjun",
    skills: ["Java", "Spring Boot", "Git"],
    testScore: 74,
    interviewScore: 76,
    isAvailable: true,
  },
  {
    id: 6,
    name: "Megha",
    skills: ["JavaScript", "Node.js", "React", "Git"],
    testScore: 85,
    interviewScore: 80,
    isAvailable: false,
  },
];

function shortlistCandidates(candidates, eligibilityCallback, scoreCallback) {
  const minScore = 60;

  return candidates
    .filter(eligibilityCallback)
    .map(c => ({
      id: c.id,
      name: c.name,
      finalScore: scoreCallback(c),
    }))
    .filter(c => c.finalScore >= minScore);
}

const shortlisted = shortlistCandidates(
  candidates,
  c =>
    c.isAvailable &&
    c.skills.includes("JavaScript") &&
    c.testScore >= 70,
  c => (c.testScore * 0.6 + c.interviewScore * 0.4).toFixed(1)
);

console.log(shortlisted);