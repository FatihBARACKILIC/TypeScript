enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Fatih",
  age: 21,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
}

console.log(person)
console.log(Role)

if (person.role === Role.READ_ONLY) console.log("is admin")
else console.log("isn't admin")
