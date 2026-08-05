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

// Higher-order function
function transformCandidates(candidates, transformCallback) {
  return candidates.map(transformCallback);
}

//Candidate names
const candidateNames = transformCandidates(
  candidates,
  candidate => candidate.name
);

console.log("Candidate Names:");
console.log(candidateNames);

// total score
const nameWithTotalScore = transformCandidates(
  candidates,
  candidate => ({
    name: candidate.name,
    totalScore: candidate.testScore + candidate.interviewScore
  })
);

console.log("Name with Total Score:");
console.log(nameWithTotalScore);

// 3. skill 
const nameWithSkillCount = transformCandidates(
  candidates,
  candidate => ({
    name: candidate.name,
    skillCount: candidate.skills.length
  })
);

console.log("Name with Skill Count:");
console.log(nameWithSkillCount);

// 4. Formatted candidate
const formattedCandidates = transformCandidates(
  candidates,
  candidate =>
    `${candidate.name} - Skills: ${candidate.skills.length} - Total Score: ${
      candidate.testScore + candidate.interviewScore
    }`
);

console.log("Formatted Candidate Strings:");
console.log(formattedCandidates);
