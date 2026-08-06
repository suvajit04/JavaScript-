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
function requiredFields(candidate) {
  if (!candidate.name || candidate.name.trim() === "") {
    return {
      isValid: false,
      message: "Candidate  required",
    };
  }

  if (candidate.testScore === undefined) {
    return {
      isValid: false,
      message: "T.score is requid",
    };
  }

  if (candidate.interviewScore === undefined) {
    return {
      isValid: false,
      message: "Intervie is required",
    };
  }

  return {
    isValid: true,
    message: "Required fiels valid",
  };
}
function validateScore(candidate) {
  if (
    candidate.testScore < 0 ||
    candidate.testScore > 100
  ) {
    return {
      isValid: false,
      message: "Test score btw 0 and 100",
    };
  }

  if (
    candidate.interviewScore < 0 ||
    candidate.interviewScore > 100
  ) {
    return {
      isValid: false,
      message: "Interview score betw 0 and 100",
    };
  }

  return {
    isValid: true,
    message: "Scores are valid",
  };
}

function validateSkills(candidate) {
  if (
    !Array.isArray(candidate.skills) ||
    candidate.skills.length === 0
  ) {
    return {
      isValid: false,
      message: "Candidate must have at least one skill",
    };
  }

  return {
    isValid: true,
    message: "Skills are valid",
  };
}
//Graduation year
function validateGraduationYear(candidate) {
  if (
    candidate.graduationYear < 2023 ||
    candidate.graduationYear > 2030
  ) {
    return {
      isValid: false,
      message: "Invalid graduation year",
    };
  }

  return {
    isValid: true,
    message: "Graduation year is valid",
  };
}


function validateAvailability(candidate) {
  if (typeof candidate.isAvailable !== "boolean") {
    return {
      isValid: false,
      message: "Availability must be true or false",
    };
  }

  return {
    isValid: true,
    message: "Availability is valid",
  };
}

function validateCandidate(candidate, validationCallback) {
  return validationCallback(candidate);
}


function validateAll(candidate) {
  const validations = [
    requiredFields,
    validateScore,
    validateSkills,
    validateGraduationYear,
    validateAvailability,
  ];

  for (let validation of validations) {
    const result = validateCandidate(candidate, validation);

    if (!result.isValid) {
      return result;
    }
  }

  return {
    isValid: true,
    message: "Candidate is valid",
  };
