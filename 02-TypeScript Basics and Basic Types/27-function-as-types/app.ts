function add(num1: number, num2: number): number {
  return num1 + num2
}

function printResult(result: number): void {
  console.log(result)
}

printResult(add(21, 22))

let combineValues: (a: number, b: number) => number = add
// combineValues = add
// combineValues = printResult; //! Error

printResult(combineValues(21, 22))
