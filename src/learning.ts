let awesomeName: string = "shakeand bake";
awesomeName = "somethi";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

// awesomeName = 20

let amouunt: number = 20;
amouunt = 12 - 1;
// amouunt = "pants";

let isAwesone: boolean = true;
isAwesone = false;
// isAwesone = "shakeandBake"

// excercise 1
let teamName: string = "Man u";
teamName = teamName.toUpperCase();

let score: number = 3;
score++;

let resultwin: boolean = score >= 2;
console.log(resultwin);

/* Uinon Section starts here*/

// union types(lets us accept multiple types)
let tax: number | string = 10;
tax = 100;
tax = "$100";

// uinon types can also be used on specici sting like below
let requestStatus: "sent" | "recieved" | "error" = "recieved";
requestStatus = "sent";
// requestStatus ='not working'

// learing type ANY type(lets us use various type with a vairiable)
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;
// let random;

// type annotation
const books = ["1984", "Brave:New world", "Frankeinstines Monster"];
let foundbook: string | undefined;
for (let book of books) {
  if (book === "1984") {
    foundbook = book;
    foundbook = foundbook.toUpperCase();
    break;
  }
}

console.log(foundbook?.length);

// challenge 2(union types)

// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";

// - Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.
let discountNum: number | string = 20;
discountNum = "20%";

/* Array with typescript starts here*/

let price: number[] = [100, 76, 67];
price.push(76);
// price.push("hello")

let fruit: string[] = ["apples", "watermelon", "tangerine"];
fruit.push("mango");

/* let randomValue:[]=[hello] */
// the array above will not work because typescript expect it to be empty because we didnt define it but below will work
let emptyValue: number[] = [];
emptyValue.push(127);

let names = ["peter", "susan", 1];
names.push(3);
// typescript is seeing it as a union of name and string because we didnt decalare on and its using whats in the string
let array: (string | boolean)[] = ["apple", true, "pear", false];
array.pop;

/*
Challenge 3(array in types)
 */

// - Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
let temp: number[] = [20, 25, 30];
temp.push(56);
/* temp.push("hot") */

// - Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
let color: string[] = ["blue", "black", "indigo", "red"];
color.splice(1, 1);
console.log(color);
/* color.push(true) */

// - Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
let mixedArray: (number | string)[] = [1, 3, "hello", "hey"];
mixedArray.push("yoo");
// mixedArray.push(true)

/* Object in typescript*/
let car: { brand: string; year: number } = { brand: "toyota", year: 2020 };
car.brand = "ford";

let car1: { brand: string; year: number } = { brand: "ferrai", year: 2022 };
car1.brand = "ford";

let book = { title: "book", cost: 20 };
let pen = { title: "book", cost: 10 };
let noteBook = { title: "notebook" };

let items: { title: string; cost?: number }[] = [book, pen, noteBook];
items.pop();
// the ? makes the cost to be opptional so we dont get an error as notebook doesnt have a cost

/*
 Challenge 4 object fundermentals
 */

/* Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property. */

// let bike: { brand: string; year: number } = { brand: "suzuki", year: "2010" };
let bike: { brand: string; year: number } = { brand: "suzuki", year: 2010 };

/* - Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.*/
let laptop: { brand: string; year?: number } = { brand: "dell" };

/* - Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.*/

// let products:{title:string,price?:number}[]=[{title:"macbook",price:1300},{title:"iphone12",price:"1000"}]
let products: { title: string; price?: number }[] = [
  { title: "macbook", price: 1300 },
  { title: "iphone12", price: 1000 },
];

/* Function in Typescript */
function sayHi(name: string) {
  console.log(`hello there ${name.toUpperCase()}`);
}
sayHi("john");
// sayHi(3)

/* FUnction return */
function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
    // because we added the number type after the bracket, we're expeting the price to be a number and to return a number,so the fuction can no longer accept a sting which will raise a type error
    // return "Discount applied"
  }
  return price * 0.9;
}

const finalPrice = calculateDiscount(200);

/* Challenge 5 Function */
// - Create a new array of names.
// let name:{personName:string}[]=[{personName:"bello"},{personName:"bimbo"},{personName:"daniel"}]
const humanName: string[] = ["bimbo", "daniel", "david"];
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
function validName(name: string): boolean {
  return humanName.includes(name);
}
// - Use this function to check if various names are in your array and log the results.
let ranName = "bio";
if (validName(ranName)) {
  console.log(`${ranName} is there`);
} else {
  console.log(`${ranName} is not there`);
}

/* Optional and Default parameter in functions */
function calPrice(price: number, discountedItem?: number): number {
  return price - (discountedItem || 0);
  // this lets us calculate price for people that donet have discount, see below
}

calPrice(100, 20);
calPrice(100);

/* Another way to use optionl paramater in funtions*/
// we can do it be asisgn it a default value like 0, if it doenst have penscore
function calFinalScore(score: number, penScore: number = 0): number {
  return score - penScore;
}
calFinalScore(100, 20);
calFinalScore(100);

/* Laerning Rest with Ts */
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message} ${total}`;
}

let result = sum("the total is", 1, 2, 3, 4, 5);
console.log(result);

/* Laerning Void with Ts */
function logMessage(message: string) {
  console.log(message);
}
logMessage("hello, Ts");

/* Using union types as fuction parameter(type gaurd)*/

//  Challenge 6 Union Types

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log(input * 2);
  } else {
    console.log(input.toLowerCase);
  }
}

processInput(10);
processInput("hello");

/* Using object as parameter */
function createEmployed({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
const first = createEmployed({ id: 1 });
const sec = createEmployed({ id: 2 });
console.log(first, sec);

// alternative approach
function createStudent(student: { id: number; name: string }): void {
  console.log(`welcome back ${student.name.toLowerCase()},`);
}

const newStudent = {
  id: 12334,
  name: "kola",
};
// We reffer the object type in the parameter as student, unlike before where the object and type where inline(directly set in the parameter)
createStudent(newStudent);

/* NOTE
 if we were to add a new proprty (email) to the object, typescript wouldn't flag an error because we're just refrencing the object, the error will only happen if we call the object inline 

 const newStudent = {
//   id: 12334,
//   name: "kola",
//   email: 'kolaw@gmail.com' 
// };

there will be an error here because it's inline
// createStudent({id:1, name:'kola',email:"kola@gmail.com"});

*/

/*
 Challenge 7 Function 

Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.
*/

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false } //this is a default value
  // we set the default result for the boolean to false so it will only be active when we wet it to true
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? // we used a  ternary operator(?) which is like a if-else statemenet
        input.toUpperCase().split("").reverse().join("")
      : //if reverse is set to true the above happens else the below happens
        input.toUpperCase();
  }
}
console.log(processData(10));
console.log(processData("hello"));
console.log(processData("hello", { reverse: true }));

// Type alias
type user = { id: number; name: string; isActive: boolean };

const john: user = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: user = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: user): user {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = "hello";
value = 123;

type Theme = "light" | "dark"; // Type alias for theme

let theme: Theme;
theme = "light"; // This is valid
theme = "dark"; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark"); // This will set the theme to 'dark'

/* challenge 8 type allias
- Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

- Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

- Create a Union Type: Define a type Staff that is a union of Employee and Manager.

- Create the printStaffDetails function: This function should accept a parameter of type Staff. 
Inside the function, use a type guard to check if the 'employees' property exists in the passed object. 
If it does, print a message indicating that the person is a manager and the number of employees they manage. 
If it doesn't, print a message indicating that the person is an employee and the department they belong to.

- Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

- Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
*/
type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;
function printStaffDetails(t: Staff) {
  if ("employees" in t) {
    console.log(`${t.name} is a manager and he manages ${t.employees.length}`);
  } else {
    console.log(
      `${t.name} is and employee and works at deprtment ${t.department}`
    );
  }
}
const steve: Employee = { id: 2, name: "steve", department: "e-comm" };
const alice: Employee = { id: 1, name: "alice", department: "sales" };
const bob: Manager = { id: 3, name: "Bob", employees: [alice, steve] };
printStaffDetails(alice);
printStaffDetails(bob);
printStaffDetails(alice);
