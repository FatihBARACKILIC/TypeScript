const person1: {
  name: string
  age: number
  hobbies: any[]
} = {
  name: "Fatih",
  age: 21,
  hobbies: ["Sports", "Cooking", 1],
}

const person2 = {
  name: "Fatih",
  age: 21,
  hobbies: ["Sports", "Cooking"],
}

console.log(person1)
console.log(person2)

let favoriteActivities: string[]
favoriteActivities = ["sports"]

for (const hobby of person1.hobbies) {
  console.log(hobby)
}
console.log("----------------------")

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase())
}
