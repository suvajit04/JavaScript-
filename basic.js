console.log("------1111111-------------");
let Name = "Suvajit Sahoo";
let age = 21;
let graduteYear = 2026;
let Employed = true;
let skills = ["JavaScript", "SQL"];
let address = {
    village: "Mugberia",
    state: "West Bengal",
};

console.log(Name,"==>",typeof Name);
console.log(age,"==>",typeof age);
console.log(graduteYear,"==>",typeof graduteYear);
console.log(Employed,"==>",typeof Employed);
console.log(skills, "==>", typeof skills);
console.log(address,"==>", typeof address);

console.log("---------2222----------");


// var
var a = 10;
console.log(a);  

a = 20;           // Reassig
console.log(a);   // 20


// let
let b = 100;
console.log(b);   

b = 200;          // Reassignment
console.log(b);

// const
const c = 500;
console.log(c);

{

    var x=1;
    let y=2;
    const z=3;

}

console.log(x);
// y,z give error,not execute outside block,referance error

console.log("----------333333---------");


console.log(typeof "JavaScript");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});


console.log("---------4444----------");

let num1 = 100;
let num2 = num1;  //copy num1=100, mun 2 =100,

num2 = 200;// num2=200

console.log(num1);
console.log(num2);


console.log("----------5555---------");


const user1 = {
name: "Rahul",
age: 22,
};
const user2 = user1;
user2.age=23
console.log(user1)
console.log(user2)


console.log("-------6666------------");


const user3 = {
  name: "ram",
  age: 22,
};

const user4= Object.assign({}, user3);// using Object.assign

user4.name = "Suvajit";

console.log(user3);
console.log(user4);


console.log("------77777-------------");


const employee = {
  name: "Ananya",
  address: {
    city: "Kolkata",
    state: "West Bengal",
  },
};

const employeeCopy = { ...employee };

employeeCopy.address.city = "Delhi";

console.log(employee);
console.log(employeeCopy);



console.log("------88888-------------");

const num5 = 20;
const num6 = 5;
const zero =0;

console.log("Add>>>", num5 + num6);
console.log("Sub>", num5 - num6);
console.log("Mul>", num5 * num6);
console.log("Div>:", num5 / num6);
console.log("Remainder>", num5 % num6);
console.log("Expo>", num5 ** num6);

console.log("divided by zero:", num5 / zero);




console.log("------99999-------------");

const str = "123";
const num = 456;
const zro = 0;
const one = 1;
const empty = "";
const hi = "false";

console.log(Number(str));
console.log(String(num));
console.log(Boolean(zro));
console.log(Boolean(one));
console.log(Boolean(empty));
console.log(Boolean(hi));



console.log("------10-------------");

console.log(5 == "5");// == valu only
console.log(5 === "5");
console.log(false == 0);
console.log(false === 0);
console.log(null == undefined);
console.log(null === undefined);// === valu & datatype



console.log("------11------------");


const values = [
  false,
  0,
  -0,
  0n,
  "",
  null,
  undefined,
  NaN,
  "hello",
  [],
  {},
];

values.forEach(value => {
  console.log(value, "=>", Boolean(value));
});



console.log("------12-----------");

const ege = 22;
const graduation = 2026;
const knowsJs = true;
const aligibleForThree= true;

if (ege >= 18 &&
    graduation >= 2024 &&
    graduation<= 2027 &&
    knowsJs &&
    aligibleForThree) {
  console.log("Eligible for Internship");
} else {
  console.log("Not Eligible");
  
}







console.log("------13-----------");

const score = 99;


if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score >= 90) {
  console.log("grade= A");
} else if (score >= 80) {
  console.log("Grade =B");
} else if (score >= 70) {
  console.log("Grade =C");
} else if (score >= 60) {
  console.log("grade =D");
} else {
  console.log("grade: F");
}





console.log("------14----------");

// if else
const role = "manager";
const accountStatus = "active";
const emailVerified = true;

if (accountStatus !== "active") {
  console.log("Account is inactive");
} else if (!emailVerified) {
  console.log("Email not verified");
} else if (role === "admin") {
  console.log("Full access");
} else if (role === "manager") {
  console.log("Manager access");
} else if (role === "employee") {
  console.log("Employee access");
} else {
  console.log("Guest access");
}




console.log("------15----------");

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "Invalid";
  return a + b;
}

function isEven(n) {
  if (typeof n !== "number") return "Invalid";
  return n % 2 === 0;
}

function area(length, width) {
  if (typeof length !== "number" || typeof width !== "number") return "Invalid";
  return length * width;
}

function celsiusToFahrenheit(c) {
  if (typeof c !== "number") return "Invalid";
  return (c * 9) / 5 + 32;
}

function larger(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "Invalid";
  return a > b ? a : b;
}

console.log(add(10, 20));
console.log(isEven(8));
console.log(area(5, 4));
console.log(celsiusToFahrenheit(25));
console.log(larger(15, 20));




console.log("------16----------");

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 4));

const multiplyExp = function(a, b) {
  return a * b;
};
console.log(multiplyExp(5, 4));

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(5, 4));




console.log("------17----------");


function calculateSalary(baseSalary, bonus, taxPercent) {
  if (baseSalary < 0 || bonus < 0 || taxPercent < 0) {
    return "Invalid input";
  }

  const grossSalary = baseSalary + bonus;
  const taxAmount = (grossSalary * taxPercent) / 100;
  const netSalary = grossSalary - taxAmount;

  return {
    grossSalary,
    taxAmount,
    netSalary
  };
}

console.log(calculateSalary(50000, 5000, 10));





console.log("------18----------")


function validatePassword(password) {
  if (password.length < 8)
    return "Password must be at least 8 characters.";

  if (!/[A-Z]/.test(password))
    return "Password must contain an uppercase letter.";

  if (!/[a-z]/.test(password))
    return "Password must contain a lowercase letter.";

  if (!/[0-9]/.test(password))
    return "Password must contain a number.";

  if (/\s/.test(password))
    return "Password must not contain spaces.";

  return "Password is valid.";
}

//const password = prompt("Enter your password:");

console.log(validatePassword("pass98word"));




console.log("------19----------");


var globalVar ="10";
let globalLet = "12";
const globalConst = "12";

function demo() {
  var functionVar = "Fun";
  let functionLet = "Fun";
  const functionConst = "Fun";

  if (true) {
    var blockVar = "Bk";
    let blockLet = "Bk";
    const blockConst = "Bk";

    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
  }

  console.log(globalVar);
  console.log(functionVar);
  console.log(blockVar);

  // console.log(blockLet);   // Error
  // console.log(blockConst); // Error
}

demo();

console.log(globalVar);
// console.log(functionVar); // Error
// console.log(blockVar);    // Error
//Global: Accessible everywhere.
//Function: Accessible only inside the function.
//Block: let and const are accessible only inside { };





console.log("------20----------");




let company = "WorkR";

function printCompany() {
  let department = "Engineering";

  if (true) {
    let role = "SDE Intern";
    var duration = "3 months";

    console.log(company);
    console.log(department);
    console.log(role);
    console.log(duration);
  }

  console.log(duration);
  console.log(role);
}

printCompany();





console.log("------21----------");


let message = "Global Message";

function showMessage() {
  let message = "Function Message";

  console.log(message);

  {
    let message = "Block Message";
    console.log(message);
  }

  console.log(message);
}

console.log(message);
showMessage();
console.log(message);





console.log("------21--------------------");



const scores = [78, 95, 92, 55, 78, 45, 73, 95, 81, 60];

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;

let passed = scores.filter(score => score >= 40).length;

let above80 = scores.filter(score => score > 80);

console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Total:", total);
console.log("Average:", average);
console.log("Passed:", passed);
console.log("Above 80:", above80);





console.log("-----23-----------");

//using loop

const skiles = [
  "JavaScript",
  "Node.js",
  "JavaScript",
  "MySQL",
  "Node.js",
  "Git",
];

const uniqueSkills = [];

for (const skill of skiles) {
  if (!uniqueSkills.includes(skill)) {
    uniqueSkills.push(skill);
  }
}

console.log(uniqueSkills);



//set

const ss = [
  "JavaScript",
  "Node.js",
  "JavaScript",
  "MySQL",
  "Node.js",
  "Git",
];

const uniquess = [...new Set(ss)];

console.log(uniquess);



console.log("------24---------");

const E1 = [
  { id: 1, name: "Aman", department: "Engineering", salary: 30000 },
  { id: 2, name: "Riya", department: "Sales", salary: 25000 },
  { id: 3, name: "Soham", department: "Engineering", salary: 35000 },
  { id: 4, name: "Nisha", department: "Operations", salary: 28000 },
];

const ee = E1.find(emp => emp.id === 3);
const engineering = E1.filter(emp => emp.department === "Engineering");
const names = E1.map(emp => emp.name);
const totalSalary = E1.reduce((sum, emp) => sum + emp.salary, 0);
const above32000 = E1.some(emp => emp.salary > 32000);
const above20000 = E1.every(emp => emp.salary > 20000);

console.log("Employee:", ee);
console.log("Engineering:", engineering);
console.log("Names:", names);
console.log("Total Salary:", totalSalary);
console.log("Above 32000:", above32000);
console.log("Above 20000:", above20000);



console.log("------25----------");

const product = {
  id: 47,
  name: "AK47",
  price: 50000,
  category: "Artillery",
  stock: 10,
  active: true,
  tags: ["AK47", "AR-15", "Heckler & Koch MP5"],

  priceAfterDiscount(discount) {
    return this.price - (this.price * discount) / 100;
  },

  checkStock() {
    return this.stock > 0 ? "In Stock" : "Out of Stock";
  },

  reduceStock(quantity) {
    if (quantity <= this.stock) {
      this.stock -= quantity;
      return `Remaining Stock: ${this.stock}`;
    }
    return "Insufficient Stock";
  }
};

console.log(product.priceAfterDiscount(10));
console.log(product.checkStock());
console.log(product.reduceStock(3));
console.log(product.stock);
console.log(product.tags)


console.log("------26----------");

const think = {
  id: 400,
  name: "machine gun",
  price: 50000,
  category:"Artillerys",
  stock: 10,
  active: true,
  tags: ["AK47", "Heckler & Koch MP5: "]
};

think.price = 45000;

delete product.category;

product.brand = "Made in Russia ";
console.log(Object.keys(think));
console.log(Object.values(think));
console.log(Object.entriesthink );

console.log(product.hasOwnProperty("price"));
console.log("stock" in product);





console.log("------27----------");


const user = {
  name: "Suvajit",
  email: "suvajitsahoo2004@gmail.com",
  address: {
    city: "Kolkata",
    state: "West Bengal"
  }
};

const {
  name,
  email: userEmail,
  address: { city, state },
  phone = "Not Available"
} = user;

console.log(name);
console.log(userEmail);
console.log(city);
console.log(state);
console.log(phone);





console.log("------28---------");


function analyzeString(sentence) {
  const words = sentence.trim().split(" ");

  return {
    totalCharacters: sentence.length,
    charactersWithoutSpaces: sentence.replace(/\s/g, "").length,
    totalWords: words.length,
    uppercase: sentence.toUpperCase(),
    lowercase: sentence.toLowerCase(),
    firstWord: words[0],
    lastWord: words[words.length - 1],
    containsJavaScript: sentence.includes("happiness")
  };
}

console.log(analyzeString("happiness is an illusion"));



console.log("------29----------");

function validateEmail(email) {
  if (typeof email !== "string")
    return "Invalid input";

  if (email.includes(" "))
    return "Email must not contain spaces";

  if (!email.includes("@"))
    return "Email must contain @";

  if (email.startsWith("@") || email.endsWith("@"))
    return "Email cannot begin or end with @";

  const at = email.indexOf("@");

  if (!email.slice(at + 1).includes("."))
    return "Email must contain a dot after @";

  return "Valid Email";
}

console.log(validateEmail("test@example.com"));



console.log("------30---------");


function isPalindrome(text) {
  const str = text.toLowerCase().replace(/\s/g, "");
  const reversed = str.split("").reverse().join("");

  return str === reversed
    ? "Palindrome"
    : "Not a Palindrome";
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("Never odd or even"));
console.log(isPalindrome("hello"));


console.log("------END--------------");