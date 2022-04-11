type Return = boolean | object

function addAndHandle(
  num1: number,
  num2: number,
  callBack: (result: number) => Return
): void {
  const result = num1 + num2
  const cbResult = callBack(result)

  if (typeof cbResult === "object") console.error("Error: \n", cbResult)
}

addAndHandle(21, 22, (result) => {
  try {
    console.log("Result is: " + result)
    return true
    // nonExistentFunction() //! Error
  } catch (error) {
    return error
  }
})
