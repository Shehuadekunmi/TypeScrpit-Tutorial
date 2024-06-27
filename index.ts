// type Person = {
//     name: string;
// };

// const person: Person = {
//     name: "John",
// }

// console.log(person.name);

// Annotation are used to secfiy the data tye of a variable, arameter, function return value, and other tyes of values
// string
let myName: string = "Shehu Adekunmi";
// myName = 'shehu'
console.log(myName);

// number
let myFAv: number = 12;
myFAv = 15;
console.log(myFAv);

// boolean
let tsHard: boolean = false;
tsHard = true;
console.log(tsHard);

// tyPe interference
//  is a feature in TS that allows the comPiler to automatic determine the tyPe of a variable based on its value.
let tech = "tyPeScriPt";
let myFav = 5;
let tsHard1 = true;
console.log(tech);
console.log(myFav);
console.log(tsHard1);

// Any TyPe; TS has has a sPecial any tyPe that can be used to rePresent any tyPe.
let color: any = "crimson";
color = 5;
color = true;
console.log(color);

// Function PArameter innovation in TS are used to sPecify the exected tPyes of the Parameter that a function taken
function addOne(num: number) {
  return num + 1;
}
const res = addOne(9);
console.log(res);

const dobule = (x: number, y: number) => x * y;
const res1 = dobule(4, 5);
console.log(res1);

// default Params Value
function greet(person: string = "anonomyus") {
  return `Hello ${person}`;
}
const res2 = greet("Shehu");
console.log(res2);

// return annotations
function dobule2(x: number): number {
  return x * x;
}
const res3 = dobule2(3);
console.log(res3);

const dobule3 = (x: number): number => x * x;
const res4 = dobule3(5);
console.log(res4);

// Void in TS is a tyPe that rePresent the absence of any value
function Printmsg(msg: string): void {
  console.log(`This is my ${msg}`);
}
Printmsg("msg");

// never is used to indicate thatsa fxn will not return anything or that a variable can never have a value
// function throwError(msg:string): never {
//     while (true) {}
// }

// function infinityLoo(): never {
//     while (true) {}
// }

// let x: never;
// function neverReturn(): never {
//     while (true) {}
// }

// x = neverReturn()

// ARRAYS TYPES is a type of obj that can store multiple values of the sane data

const num: number[] = [1, 2, 3];
console.log(num);

const str: string[] = ["boy", "guy", "man"];
console.log(str);

const num1: number[] = [];
num1.push(2);
num1.push(4);
console.log(num1);

const str1: string[] = [];
str1.push("boy");
console.log(str1);

// MULTI Dimensional or metrix or nested Array
// is an array that contains other arrays as its Element.

const singledi: number[] = [1, 2, 3, 4, 5];
const multidi: number[][] = [[1, 2, 3, 4, 5]];
const tridi: number[][][] = [[[1, 2, 3, 4, 5]]];
console.log(singledi);
console.log(multidi);
console.log(tridi);

// OBJECT an obj in ts is a structure data type that rePresents a collection of PPties, each with a key and an associated value

const Person: { firstName: string; lastName: string; age: number } = {
  firstName: "john",
  lastName: "doe",
  age: 20,
};
console.log(`Name: ${Person.firstName} ${Person.lastName}, age:${Person.age}`);

function PrintUser(): { name: string; age: number; location: string } {
  return {
    name: "Shehu",
    age: 20,
    location: "Nigeria",
  };
}
const res5 = PrintUser();
console.log(res5);

// tyPe Aliases
type User = {
  name: string;
  age: number;
  location: string;
};
const PrintUserInfo = (user: User) => {
  return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location})`;
};

const res6 = PrintUserInfo({ name: "Alex", age: 20, location: "USA" });
console.log(res6);

// OpTIONAL ppTIES

type User1 = { name: string; age?: number; location: string };
const user: User1 = {
  name: "Huxn",
  age: 20,
  location: "china",
};
console.log(`name:${user.name} ${user.age} ${user.location}`);

// Intersection types
// is a way to combine multile type into a songle type that includes all PPties and methodes of each constituent type
type user = {
  first: string;
  last: string;
  age: number;
};

type acc = {
  email: string;
  password: number;
};

type hu = user & acc;
const hun: hu = {
  first: "ade",
  last: "shehu",
  age: 20,
  email: "sirkumyemo@gmail.com",
  password: 123,
};

console.log(
  `Name:${hun.first} ${hun.last} age:${hun.age} email:${hun.email} password:${hun.password}`
);

//  UNIONS
// are use to declarea type that can have one of several possible type
let password: string | number = 20;

type man = {
  first: string;
  last: string;
  age: number;
};

type acco = {
  email: string;
  password: number;
};

let maninfo: man | acco = {
  first: "ade",
  last: "kunmi",
  age: 20,
};
let info: man | acco = {
  email: "someone@gmail.com",
  password: 123,
};

let info1: man | acco = {
  first: "ade",
  last: "ola",
  age: 20,
  email: "ade@gmail.com",
  password: 123,
};

let itmes: (string | number)[] = [1, 2, 3, "ade", "ola"];
console.log(itmes);

// Literal type
// allow you to specify a value that can only be one specific value

// Tuples
// is a type that represet an Array with a fixed num of ElementInternals,
//  where each element can have a diff. type

let myTuple: [string, number] = ["ade", 20];
let myFan: [string, number];
myFan = ["one", 20];
console.log(myFan, myTuple);

const products: [string, string, string] = ["game1", "game2", "game3"];
console.log(products);

// ENUMS  is a way to define a set of name constant.
enum WeatherCondition {
  sunny,
  cloudy,
  rainy,
}
console.log(WeatherCondition.rainy);

enum Teams {
  team1 = "Man u",
  team2 = " Chelsea",
  team3 = " Arsenal",
}
console.log(Teams.team3);

const WinningTeam = Teams.team1;
console.log(`The winning Team is ${WinningTeam}`);

// CLASS PPTIES ANNOTATION
// you can anotate class ppties with a type. this allows you to define the data typeof the pptiesand
//  ensure that it is always constitent

class Person1 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const user2 = new Person1("john", 20);
console.log(user2);

//                Access Modify
// in TS, you can use access modififier to control the visibility of class member (ppties and methodes).
// Access modifiers determine the ways in which class members can be accessed from within and outside the class
// type of AM : 1. Public 2. Private 3. Protected

class human {
  public first: string;
  private last: string;
  protected age: number;
  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  getName(): string {
    return `${this.first}  ${this.last} ${this.age}`;
  }
}
class Persion extends human {
  constructor(first: string, last: string, age: number) {
    super(first, last, age);
  }
}

const huxn = new Persion("Huxn", "Webdev", 20);
console.log(huxn);

// let P1 = new Persion ('john', 'doe')
// console.log(P1.getName());

// Getters & Setters
// G & S are used to access and modify class PPties. G & S allow you to define a PPty in a class that looks like
// a simPle variable from the outside but internally has addtional logi for getting and setting the value

class Myclass {
  private _myProperty: number = 0;
  get myProperty(): number {
    return this._myProperty;
  }
  set myProperty(value: number) {
    this._myProperty = value;
  }
}

const myInstance = new Myclass();
console.log(`Current Value: ${myInstance.myProperty}`);

myInstance.myProperty = 10;
console.log(`Current Value: ${myInstance.myProperty}`);

// Interface
// is a way to define a contract for the shape of an object. it specific the pptis and their types that an obj must have.
// Interfaces are poerful tool for enforceing a certain structure in your code

// interface for function
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

const ComputerExample: Computer = {
  name: "i7",
  ram: 16,
  hdd: 500,
};

console.log(ComputerExample.name);
console.log(ComputerExample.ram);
console.log(ComputerExample.hdd);

interface movie {
  readonly name: string;
  ratigs: number;
  genra?: string;
}

const movie1: movie = {
  name: "Star War",
  ratigs: 8.9,
  genra: "Action",
};

console.log(movie1.name);
console.log(movie1.ratigs);
console.log(movie1.genra);

interface MathOperator {
  (x: number, y: number): number;
}
const add: MathOperator = (a, b) => a + b;
const subtract: MathOperator = (a, b) => a - b;
console.log(add(4, 7));
console.log(subtract(40, 10));

interface Person {
  first: string;
  last: string;
  age: number;
  sayHello(): void;
}
function greett(person: Person) {
  console.log(`Hello, ${person.first} ${person.last} `);
  person.sayHello();
}

const john: Person = {
  first: "John",
  last: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi There");
  },
};

const Huxnn: Person = {
  first: "Huxn",
  last: "Webdev",
  age: 20,
  sayHello() {
    console.log("What's Good Men");
  },
};
greett(john);
greett(Huxnn);

interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}
const song1: Song = {
  songName: "Natural",
  singerName: "Imagin Drigon",
  printSongInfo: (songName, singerName) => {
    return `Song: ${songName}, singerName : ${singerName}`;
  },
};
console.log(song1.printSongInfo("Natural", "Imagin Drigon"));

interface MovieDetails {
  readonly name: string;
  rating: number;
  printMoviesInfo(name: string, price: number, rating: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie11: MovieGenra = {
  name: "Star Wars",
  genra: " Action",
  rating: 7.8,
  printMoviesInfo(
    name: string,
    price: number,
    rating: number
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings : ${rating}`;
  },
};

const res22 = movie11.printMoviesInfo("John Wick", 100, 9);
console.log(res22);

interface vehicle {
  start(): void;
  stop(): void;
}

class Car implements vehicle {
  start(): void {
    console.log("Car is starting..");
  }

  stop(): void {
    console.log("Car stopped");
  }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// Declreation Merging
// once an interface is declare, it cannot be directly modified, However, TS allows what is informaly referred
// to as "Declreation merging" or "Interface extention" which is often misconstruced as "re-opening"
// D M in TS refers to the ability to extend or augment an existing declreation, including interface.
// This can be useful when you want to add new ppties or methodes to an existing interface without modifying the orginal decleration

// Original interface
interface Car {
  brand: string;
  start(): void;
}

// Decleration merging(interface extension)
interface Car {
  model: string;
  stop(): void;
}

const myCar1: Car = {
  brand: "BMW",
  model: "M3",
  start() {
    console.log("Start");
  },

  stop() {
    console.log("Stop");
  },
};

myCar1.start();
myCar1.stop();

// Generics
// in TS, generics allow you  to create reuseable components that can work with a variety of types. Generics make it possible
// for you to define functions, classes, and interface that can work with different data tyes without having to duplicate code

function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printBoolen(
  item: boolean,
  defaultBoolen: boolean
): [boolean, boolean] {
  return [item, defaultBoolen];
}

const numm = printNumber(1, 4);
const strr = printString("Hello", "World");
const boo = printBoolen(true, false);
console.log(numm);
console.log(strr);
console.log(boo);

// --------------------- Now Genric fnx ---------------

function uniquDataFnx<Type>(item: Type, defaultValue: Type) {
  return [item, defaultValue];
}

const ress = uniquDataFnx<number>(10, 30);
console.log(ress);

// 2
function uniquDataFnx1<T>(item: T, defaultValue: T) {
  return [item, defaultValue];
}
interface Dog1 {
  name: string;
  breed: string;
}
const dog = uniquDataFnx1<Dog1>(
  { name: "dog1", breed: "some" },
  { name: "buddy", breed: "nice" }
);
console.log(dog);

// 3

function GetrandomkeyVAlue<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randkey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randkey, value: obj[randkey] };
}

const strobj = { a: "apple", b: "bannan", c: "cherry", d: "mango" };
const randstrpair = GetrandomkeyVAlue<string>(strobj);
console.log(randstrpair);

const numobj = { one: 1, two: 2, three: 3 };
const randnumpair = GetrandomkeyVAlue<number>(numobj);
console.log(randnumpair);

// 4
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNum = filterArray<number>(numarray, (num) => num % 2 === 0);
console.log(evenNum);

const stringArray = ["banana", "orang", "date", "apple"];
const shortStr = filterArray<string>(stringArray, (word) => word.length < 5);
console.log(shortStr);

// 5
interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
  { name: "bananan", color: "Yellow" },
  { name: "apple", color: "Red" },
  { name: "cherry", color: "Red" },
];
const fruArray = filterArray<Fruit>(
  fruitArray,
  (fruit) => fruit.color === "Red"
);
console.log(fruArray);

// xpl Genric
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}
const reversedPair = reversePair("hello", 40);
console.log(reversedPair);

// 6
class Box<T> {
  private content: T;
  constructor(initailContent: T) {
    this.content = initailContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

const strBox = new Box<string>("Hello, Typscript");
console.log(strBox.getContent());

strBox.setContent("New Content added");
console.log(strBox.getContent());

const numBox = new Box<number>(40);
console.log(numBox.getContent());
numBox.setContent(100);
console.log(numBox.getContent());

//  Type Narrowing
// is the Processing of refine a variables type within a condition block of code. this allows you to write more precise and type-safe code

type MyType = string | number;
function examplefunx(value: MyType): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

examplefunx("hello");
examplefunx(20);

// 2

class Dog {
  bark(): void {
    console.log("Woff Woff");
  }
}

class Cat {
  Moew(): void {
    console.log("Meow");
  }
}

function AnimalSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.Moew();
  }
}

const myDog = new Dog()
const myCat = new Cat()
AnimalSound(myDog)
AnimalSound(myCat)


// 3
type Emloyee = {
  id : number,
  name : string
}
type Manager = {
  role : string,
  dept : string
} 

type ManagerWithEmployeeInfo = Emloyee & Manager;
const manager : ManagerWithEmployeeInfo = {
  id : 12,
  name: 'Alex',
  role : 'HOD',
  dept: 'engineering'
}

console.log(manager.id);
console.log(manager.name);


// console.log(document);
console.log('udate');

















