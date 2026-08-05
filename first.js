console.log("happy smail");
age =24;
fname =" tony stark";
x = null;
console.log(fname);
y = undefined;
console.log(y);
console.log(x);
isfallow=true;
console.log(isfallow)
let name="Samu";
console.log(name)
const namea=23; 
console.log(namea)
{
    let a=5;
    console.log(a);

}
{
    let a=10;
    console.log(a);
}
let k=BigInt(121);
console.log(k)
let t=Symbol("hellow!")
console.log(t)





// OBJECT
// .............

const student={
    fname:"Samu",
    age:21,
    cgpa:90.4,
};
student["age"]=student["age"]+10;
student["fname"]="Samu Roy"
console.log(student.age)
console.log(student["fname"])




function formatUser(user, formatter) {
    return formatter(user);
}

function getName(user) {
    return user.name;
}

function getDetails(user) {
    return `Name: ${user.name}, Age: ${user.age}, City: ${user.city}`;
}

const user = {
    name: "Riya",
    age: 22,
    city: "Kolkata"
};


console.log(formatUser(user, getName));
console.log(formatUser(user, getDetails));


