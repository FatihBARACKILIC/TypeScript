function combine(
  input1: number | string,
  input2: number | string,
  resultConversation: "as-number" | "as-text"
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

const combineAges = combine(30, 26, "as-number")
console.log(combineAges)

const combineStringAges = combine("30", "26", "as-number")
console.log(combineStringAges)

const combineNames = combine("Fatih", "BARAÇKILIÇ", "as-text")
console.log(combineNames)
