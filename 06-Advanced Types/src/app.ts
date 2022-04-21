//> 01-Intersection
//? type Admin = { name: string; privileges: string[] };
interface Admin {
  name: string
  privileges: string[]
}

//? type Employee = { name: string; startDate: Date };
interface Employee {
  name: string
  startDate: Date
}

//? type ElevatedEmployee = Admin & Employee;
interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "Fatih",
  privileges: ["Create-sever"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

// console.clear()
//> 02-Type Guards

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString()
  return a + b
}

type UnknownEmployee = Admin | Employee

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name)
  if ("privileges" in emp) console.log("Privileges: " + emp.privileges)
  if ("startDate" in emp) console.log("Start Date: " + emp.startDate)
}

printEmployeeInformation(e1)
printEmployeeInformation({ name: "Fatih", startDate: new Date() })

class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck...")
  }
  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) vehicle.loadCargo(1000)
}
useVehicle(v2)
useVehicle(v1)

// console.clear()
//> Discriminated Union
interface Bird {
  type: "bird"
  flyingSpeed: number
}

interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal): void {
  let speed: number
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break

    default:
      speed = 0
      break
  }
  console.log(animal.type + " moving at speed: " + speed)
}

moveAnimal({ type: "bird", flyingSpeed: 70 })
moveAnimal({ type: "horse", runningSpeed: 50 })

// console.clear()
//> Type Casting

//? const userInput = document.getElementById("user-input")! as HTMLInputElement;
//? const userInput = <HTMLInputElement>document.getElementById("user-input")!;
//? userInput.value = "Hi there!";

const userInput = document.getElementById("user-input")
if (userInput) (userInput as HTMLInputElement).value = "Hi there!"

// console.clear()
//> Index Properties

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  userName: "Must start with a capital character",
}

// console.clear()
//> Function Overloads

type Combine = number | string

function sum(a: number, b: number): number
function sum(a: string, b: string): string
function sum(a: string, b: number): string
function sum(a: number, b: string): string
function sum(a: Combine, b: Combine) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString() + "---"

  return a + b + 1
}

const result1 = sum(1, "asd")
console.log(result1.split(" "))
console.log(result1)

const result2 = sum(1, 1)
//! console.log(result2.split(" "));
console.log(result2)

// console.clear()
//>Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Fatih",
  job: {
    title: "Ceo",
    description: "My Own Company",
  },
}

console.log(fetchedUserData?.job?.title)

// console.clear()
//>Nullish Coalescing

const userInput1 = null
const userInput2 = undefined
const userInput3 = ""

const outcome11 = userInput1 || "DEFAULT"
const outcome12 = userInput2 || "DEFAULT"
const outcome13 = userInput3 || "DEFAULT"

console.log("Result|" + outcome11)
console.log("Result|" + outcome12)
console.log("Result|" + outcome13)

const outcome21 = userInput1 ?? "DEFAULT"
const outcome22 = userInput2 ?? "DEFAULT"
const outcome23 = userInput3 ?? "DEFAULT"

console.log("Result|" + outcome21)
console.log("Result|" + outcome22)
console.log("Result|" + outcome23 + "-this variable empty")
