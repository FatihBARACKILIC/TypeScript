function add(num1: number, num2: number): number {
  return num1 + num2
}

function printResult(result: number): void {
  console.log(`Result: ${result}`)
}

function result(): undefined {
  // undefined function illa boş return dönmeli
  return
}

printResult(add(21, 22))
