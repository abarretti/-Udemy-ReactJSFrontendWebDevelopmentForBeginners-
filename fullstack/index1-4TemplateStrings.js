let fname = "Ryan";
let lname = "D";
let age = prompt("Guess Ryan's Age..");

// old way
// let result = fname + " " + lname + " " + age + " years old";
// alert(result);

// using template string
let result = `${fname} ${lname} is ${age} years old.`;
alert(result);
