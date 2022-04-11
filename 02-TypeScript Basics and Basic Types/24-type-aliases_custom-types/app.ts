type Combinable = number | string
type ConversionDescriptor = "as-number" | "as-text"

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversation: ConversionDescriptor
) {
  let result
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversation === "as-number"
  )
    result = +input1 + +input2
  else result = input1.toString() + " " + input2.toString()
  return result
}

const combineAges = combine(21, 22, "as-number")
console.log(combineAges)

const combineStringAges = combine("21", "22", "as-number")
console.log(combineStringAges)

const combineNames = combine("Fatih", "BARAÇKILIÇ", "as-text")
console.log(combineNames)

console.log("-----------------------------------------------------------")

type User = { name: string; age: number }
const u1: User = { name: "Fatih", age: 21 }

// function greet(user: { name: string; age: number }) {
//   console.log(`Hi, I am ${user.name}`);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

function greet(user: User) {
  console.log("Hi, I am " + user.name)
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age
}
