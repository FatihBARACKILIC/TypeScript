type Admin = {
  firstName: string
  privileges: string[]
}

// interface Admin {
//   firstName: string
//   privileges: string[]
// }

type Employee = {
  firstName: string
  startDate: Date
}

// interface Employee {
//   firstName: string
//   startDate: Date
// }

type ElevatedEmployee = Admin & Employee
// interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  firstName: "Fatih",
  privileges: ["create-server"],
  startDate: new Date(),
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: number, b: number): number
function add(a: string, b: number): string
function add(a: number, b: string): string
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") return `${a} ${b}`
  return a + b
}

const resultString = add("asd", "asd")
resultString.split(" ")
const resultNumber = add(1, 2)
const resultCombinableString = add("asd", 2)
const resultCombinableNumber = add(1, "asd")

const fetchedUserData = {
  id: "u1",
  firstName: "Ali",
  job: { title: "CEO", description: "My own company" },
}
// console.log(fetchedUserData?.job?.title ?? "Empty Data")

const userInput = ""
// const storedData = userInput || "DEFAULT"
// const storedData = userInput ?? "DEFAULT"
// console.log(storedData)

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.group(`First Name: ${emp.firstName}`)
  //   console.log(emp.firstName)
  if ("privileges" in emp) console.log(emp.privileges)
  if ("startDate" in emp) console.log(emp.startDate)
  console.groupEnd()
}
// printEmployeeInformation(e1)
// printEmployeeInformation({ firstName: "Ali", privileges: ["Web Designer"] })
// printEmployeeInformation({ firstName: "Veli", startDate: new Date() })

class Car {
  drive() {
    console.log("Driving...")
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...")
  }

  loadCargo(amount: number) {
    console.log(`Loading Cargo: ${amount}`)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) vehicle.loadCargo(1000)
}

// useVehicle(v1)
// useVehicle(v2)

interface Bird {
  type: "bird"
  flyingSpeed: number
}
interface Horse {
  type: "horse"
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed: number
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed
      break
    case "horse":
      speed = animal.runningSpeed
      break
  }
  console.log(`Moving Speed: ${speed}`)
}

// moveAnimal({ type: "bird", flyingSpeed: 512 })
// moveAnimal({ type: "horse", runningSpeed: 72 })

// const paragraph = document.querySelector("p")
// const paragraph1 = document.querySelector("#message-output")
// const paragraph2 = document.getElementById("message-output")

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement

// userInputElement.value = "Hi there!"

interface ErrorContainer {
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  userName: "Must start wit a capital character!",
}
