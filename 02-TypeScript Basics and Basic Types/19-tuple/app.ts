const person1: {
  name: string
  age: number
  hobbies: any[]
  role: [number, string]
} = {
  name: "Fatih",
  age: 21,
  hobbies: ["Sports", "Cooking", 1],
  role: [2, "author"],
}

const person2 = {
  name: "Fatih",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
}

// person1.role.push("admin") //? Exception. Will be work
// person1.role = ["asd"] //! Error
// person1.role = [3, "asd", 1, "author"] //!Error
// person1.role = [1, "asd"] //! Error

console.log(person1)
console.log(person2)
