/*
console.log("Interface Beginning");

//> Exp: 1
// interface PersonService {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: PersonService;

// user1 = {
//   name: "Fatih1",
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there. I am");

//---------------------------------------------------------------------

interface Named {
  readonly name: string;
  outputName?: string;
}

interface GreetAble extends Named {
  // interface GreetAble {

  greet(phrase: string): void;
}

class Person implements GreetAble {
  // class Person implements GreetAble, Named {

  name: string;
  age = 21;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: GreetAble;
user2 = new Person("Fatih2");

user2.greet("Hi there. I am");

//---------------------------------------------------------------------

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
//*/
