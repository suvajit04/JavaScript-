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

function findCandidate(candidates, searchCallback) {
  return candidates.find(searchCallback);
}

// Find id
console.log(findCandidate(candidates, c => c.id === 4));

// Name
console.log(findCandidate(candidates, c => c.name === "Nisha"));

//  candidates above 90
console.log(findCandidate(candidates, c => c.testScore > 90));

// candidate knows Node.js
console.log(findCandidate(candidates, c => c.skills.includes("Node.js")));
