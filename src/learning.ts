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

// Challenge 3(array in types)

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

// the ? makes the cost to be opptional so we dont get an error as notebook doesnt have a cost
