// type AddFn = (a: number, b: number) => number

interface AddFn {
  (a: number, b: number): number
}

let add: AddFn = (n1, n2) => n1 + n2

console.log(add(2, 63))

//> ------------------------------------------------------------------

interface FirstNamed {
  readonly firstName: string
  outputName?: string //? ? = Optional
}

interface SecondName {
  readonly secondName?: string
}

interface Greetable extends FirstNamed, SecondName {
  greet(phrase: string): void
}

class Person implements Greetable {
  constructor(
    public firstName: string,
    public age: number,
    public secondName?: string
  ) {
    this.firstName = firstName
    if (secondName) this.secondName = secondName
    this.age = age
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.firstName} ${this.secondName || ""}`.trim())
  }
}

let userOne: Greetable = new Person("Fatih", 22, "BARAÇKILIÇ")
userOne.greet("Hi, I am")
console.log(userOne)

let userTwo: Greetable = new Person("Fatih1", 22)
userTwo.greet("Hi, I am")
console.log(userTwo)
