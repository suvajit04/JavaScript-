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

//announceCandidate
function announce(candidate, delay) {
  setTimeout(() => {
    console.log("Candidate:", candidate.name);
    console.log("Email:", candidate.email);
  }, delay);
}
announce(candidates[2], 2000);

//scheduleStatusUpdate
function update(candidate, newStatus, delay) {
  setTimeout(() => {
    candidate.status = newStatus;
    console.log(candidate);
  }, delay);
}

update(candidates[3], "done bro", 3000);

//startCandidateCountdown
function count(candidate, seconds) {
  let time = seconds;

  const interval = setInterval(() => {
    if (time > 0) {
      console.log(`review ${candidate.name} starts in ${time} seconds`);
      time--;
    } else {
      console.log(`review started for ${candidate.name}`);
      clearInterval(interval);
    }
  }, 1000);
}

count(candidates[3], 3);

//scheduleCandidateReminders
function remind(candidates, dif) {
  let index = 0;

  const interval = setInterval(() => {
    if (index < candidates.length) {
      console.log(`remander sent to ${candidates[index].name}`);
      index++;
    } else {
      console.log("All reminders completed");
      clearInterval(interval);
    }
  }, dif);
}

remind(candidates, 100);

//createCancelableReview
function review(candidate, delay) {
  return setTimeout(() => {
    console.log(`hi i am }`);
  }, delay);
}

const timerId = review(candidates[3], 3000);

clearTimeout(timerId);
console.log("No review message should be printed because the timer was cancelled.");
