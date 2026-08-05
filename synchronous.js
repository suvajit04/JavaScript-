const candidates = [];

function addCandidate(candidate) {
  if (!candidate || typeof candidate.id !== "number") return "Invalid candidate";

  if (candidates.some(d=> d.id === candidate.id))
    return "Duplicate ID";

  if (candidates.some(c => c.email === candidate.email))
    return "Duplicate Email";

  candidates.push(candidate);
  return "Candidate Added";
}

function findById(id) {
  return candidates.find(c => c.id === id);
}

function findByEmail(email) {
  return candidates.find(c => c.email === email);
}

function updateScore(id, score) {
  const candidate = findById(id);
  if (!candidate) return "Candidate Not Found";
  candidate.testScore = score;
  return "Score Updated";
}

function addSkill(id, skill) {
  const candidate = findById(id);
  if (!candidate) return "Candidate Not Found";

  if (!candidate.skills.includes(skill))
    candidate.skills.push(skill);

  return candidate;
}

function removeCandidate(id) {
  const index = candidates.findIndex(c => c.id === id);

  if (index === -1) return "Candidate Not Found";

  candidates.splice(index, 1);
  return "Candidate Removed";
}

function listCandidates() {
  return candidates;
}

function availableCandidates() {
  return candidates.filter(c => c.isAvailable);
}

function scoreAbove(score) {
  return candidates.filter(c => c.testScore > score);
}

function averageScore() {
  if (candidates.length === 0) return 0;

  return candidates.reduce((sum, c) => sum + c.testScore, 0) / candidates.length;
}

function highestScorer() {
  return candidates.reduce((a, b) =>
    a.testScore > b.testScore ? a : b
  );
}

function groupCandidates() {
  return {
    Qualified: candidates.filter(c => c.testScore >= 80),
    "Needs Improvement": candidates.filter(c => c.testScore >= 50 && c.testScore < 80),
    Rejected: candidates.filter(c => c.testScore < 50)
  };
}

function summary() {
  return {
    totalCandidates: candidates.length,
    availableCandidates: availableCandidates().length,
    qualifiedCandidates: candidates.filter(c => c.testScore >= 80).length,
    averageScore: averageScore()
  };
}

addCandidate({
  id: 1,
  name: "suvajit",
  email:"suvajitsahoo2004@gmail.com ",
  skills: ["JavaScript", "Node.js"],
  testScore: 75,
  isAvailable: true
});

addCandidate({
  id: 2,
  name: "sam",
  email: "sam909@gmail.com",
  skills: ["JavaScript"],
  testScore: 90,
  isAvailable: false
});

console.log(listCandidates());
console.log(findById(1));
console.log(findByEmail("sam909@gmail.com"));

updateScore(1, 85);
addSkill(1, "python");

console.log(scoreAbove(80));
console.log(availableCandidates());
console.log(averageScore());
console.log(highestScorer());
console.log(groupCandidates());
console.log(summary());

removeCandidate(2);
console.log(listCandidates());