// let character = "Devender";
// let age = 30;
// let isBlackBelt = false;

// we cannot change the value type of the variables
// age = "30";
// isBlackBelt = "yes";
// isBlackBelt = true; 

// const inputs = document.querySelectorAll("input");
// console.log(inputs);

// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }

// console.log(circ(5));




// Array
// let names = ["Devender", "Kumar", "Singh"];
// // names = 23;
// // names = "Dev";
// names.push("Pal");
// names.push(4);
// names[0] = 3.2;

// let numbers = [10, 20, 30, 40];
// numbers.push(25);
// // numbers.push("Devender");

// let mixed = ["Devender", 30, "Kumar", 40, true];
// mixed.push(50);
// mixed.push("Singh");
// mixed.push(false);

// // Objects
// let ninja = {
//     name: "Devender",
//     belt: "Black",
//     age: 30,
// };

// ninja.age = 40;
// // ninja.age = '40';
// ninja.name = "Devender";
// // ninja.skills = ["React", "Python", "django", "CSS", "JavaScript", "TypeScript"];

// ninja = {
//     name: "Devender",
//     belt: "Black",
//     age: 30,
//     // skills: []
// }



// expicit types
let character: string | number;
let age: number;
let isLoggedIn: boolean;

// character = 5;
character = "Dev";

// age = "Devender";
age = 30;

// isLoggedIn = 1;
isLoggedIn = false;

// arrays
let ninjas: string[] = [];
// ninjas = [1,2,3];
// ninjas = ["Devender", "Kumar", "Singh"];
ninjas.push("Dev");
ninjas.push("1");

// union types
let mixed: (string | boolean | number)[] = [];
mixed.push("Dev");
mixed.push(19);
mixed.push(true);

// objects
let ninjaOne: object;
ninjaOne = {
    name: "Devender",
    age: 30,
}
// ninjaOne.name = "Dev";
// ninjaOne.age = 30;
// ninjaOne = [];

// let ninjaTwo: {
//     name: string, 
//     age: number,
//     beltColor: string,
// }

// ninjaTwo = {
//     name: "Devender",
//     age: 30,
//     beltColor: "Black",
// }

// ninjaTwo.name = "Jay"



// Dynamic (any) types
let age2: any = 25;
age2 = true;
age2 = "string";
age2 = { name: 'Dev', age: 30 };

let mixed2: any[] = [];


interface User {
    name: String
    age: number
}

interface Employee extends User {
    id: number
}

const employee: Employee = {
    id: 1,
    name: "Jay",
    age: 21,
}

console.log(employee);