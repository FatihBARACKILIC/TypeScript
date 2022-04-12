console.log("ad")

const button = document.querySelector("button")!
const click = (e: any) => {
  console.log(e)
  return "ad"
}

const ad = button.addEventListener("click", click)

console.log("ad: " + ad)

let age: number
age = 21

const userName = "Fatih"
//> Remove Comments

console.log(userName)
// event function
