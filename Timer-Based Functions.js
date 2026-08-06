const candidates = [
  {
    id: 1,
    name: "Aman",
    email: "aman@example.com",
    testScore: 78,
    interviewScore: 72,
    status: "pending",
  },
  {
    id: 2,
    name: "Riya",
    email: "riya@example.com",
    testScore: 88,
    interviewScore: 84,
    status: "pending",
  },
  {
    id: 3,
    name: "Soham",
    email: "soham@example.com",
    testScore: 65,
    interviewScore: 70,
    status: "pending",
  },
  {
    id: 4,
    name: "Nisha",
    email: "nisha@example.com",
    testScore: 92,
    interviewScore: 89,
    status: "pending",
  },
  {
    id: 5,
    name: "Arjun",
    email: "arjun@example.com",
    testScore: 74,
    interviewScore: 76,
    status: "pending",
  },
];
function announceCandidate(candidate, delay) {
  setTimeout(() => {
    console.log("Candidate:", candidate.name);
    console.log("Email:", candidate.email);
  }, delay);
}
announceCandidate(candidates[0], 2000);
