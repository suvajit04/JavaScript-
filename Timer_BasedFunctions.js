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

//findCandidateById

function findCandidateById(candidates, id) {
  return new Promise((resolve, reject) => {
    const candidate = candidates.find(c => c.id === id);

    if (candidate) {
      resolve(candidate);
    } else {
      reject(new Error("Candidate not found"));
    }
  });
}

findCandidateById(candidates, 2)
  .then(candidate => console.log(candidate))
  .catch(error => console.error(error.message));

findCandidateById(candidates, 99)
  .then(candidate => console.log(candidate))
  .catch(error => console.error(error.message));

//validateCandidateScore
function check(candidate) {
  return new Promise((resolve, reject) => {
    if (
      typeof candidate.testScore !== "number" ||
      candidate.testScore < 0 ||
      candidate.testScore > 100
    ) {
      reject(new Error("Test score must be between 0 and 100"));
    } else if (
      typeof candidate.interviewScore !== "number" ||
      candidate.interviewScore < 0 ||
      candidate.interviewScore > 100
    ) {
      reject(new Error("Interview score must be between 0 and 100"));
    } else {
      resolve(`Scores are valid for ${candidate.name}`);
    }
  });
}


check(candidates[2])
  .then(msg => console.log(msg))
  .catch(err => console.error(err.message));


candidates[0].testScore = 1120;

check(candidates[0])
  .then(msg => console.log(msg))
  .catch(err => console.error(err.message));

//calculateFinalScore
function score(c) {
  return new Promise((resolve, reject) => {
    if (c.testScore == null || c.interviewScore == null) {
      reject(new Error("Required score fields are missing"));
    } else {
      resolve({
        name: c.name,
        finalScore: c.testScore * 0.6 + c.interviewScore * 0.4,
      });
    }
  });
}

score(candidates[3])
  .then(res => console.log(res))
  .catch(err => console.error(err.message));

//updateCandidateStatus

function status(c, s) {
  return new Promise((resolve, reject) => {
    const list = ["pending", "reviewed", "shortlisted", "rejected"];

    if (!list.includes(s)) {
      reject(new Error("Invalid candidate status"));
    } else {
      c.status = s;
      resolve(c);
    }
  });
}

status(candidates[0], "shortlisted")
  .then(res => console.log(res))
  .catch(err => console.error(err.message));

status(candidates[0], "selected")
  .then(res => console.log(res))
  .catch(err => console.error(err.message));

//processCandidate

function process(candidates, id) {
  return find(candidates, id)
    .then(c => {
      return check(c).then(() => c);
    })
    .then(c => {
      return score(c).then(r => {
        return status(c, r.finalScore >= 75 ? "shortlisted" : "rejected")
          .then(() => ({
            id: c.id,
            name: c.name,
            finalScore: r.finalScore,
            status: c.status
          }));
      });
    });
}

process(candidates, 1)
  .then(result => console.log(result))
  .catch(error => console.error(error.message))
  .finally(() => console.log("Processing completed"));

  //processAllCandidates
function all(candidates) {
  return Promise.all(
    candidates.map(c => process(candidates, c.id))
  );
}

all(candidates)
  .then(results => console.log(results))
  .catch(error => console.error(error.message));
