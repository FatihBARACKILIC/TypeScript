function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof num1 !== "number" || typeof num2 !== "number")
  //   throw new Error("Incorrect input!");
  if (showResult) console.log(phrase + (n1 + n2))
  else return n1 + n2
}

let number1: number = 5
const number2 = 2.8
const printResult = true
let resultPhrase = "Result is: "

add(number1, number2, printResult, resultPhrase)
