// const names: Array<string> = [] // string[]
// // names[0].split('')

// const promise: Promise<number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(10)
//   }, 2000)
// })

// promise.then((data) => {
//   //   data.split(" ")
// })

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB)
}

const mergedObj = merge({ name: "Fatih", hobbies: ["movie"] }, { age: 22 })
// const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Fatih", hobbies: ["movie"] },
//   { age: 22 }
// )
// const mergedObj = merge({ name: "Fatih", hobbies: ["movie"] }, 22) //! Error

// console.log(mergedObj)

interface Lengthy {
  length: number
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value."
  if (element.length === 1) descriptionText = `Got 1 element`
  else if (element.length > 1)
    descriptionText = `Got ${element.length} elements`

  return [element, descriptionText]
}

// console.log(countAndPrint("Hi there!"))
// console.log(countAndPrint(["a1", "a2"]))
// console.log(countAndPrint(true)) //! Error
// console.log(countAndPrint(20)) //! Error

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key]
}
// console.log(extractAndConvert({ name: "Fatih" }, "name"))
// console.log(extractAndConvert({deneme: "Ali"}, "name")) //! Error

class DataStorage<T extends string | number | boolean> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
// textStorage.addItem(10) //! Error
textStorage.addItem("10")
textStorage.addItem("20")
textStorage.addItem("30")
// console.log(textStorage.getItems())
textStorage.removeItem("10")
// console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
// numberStorage.addItem("10") //! Error
numberStorage.addItem(10)
numberStorage.addItem(20)
numberStorage.addItem(30)

// const objStorage = new DataStorage<object>() //! Error
// const maxObj = { name: "Max" } //! Error
// objStorage.addItem(maxObj) //! Error
// objStorage.addItem({ name: "Manu" }) //! Error
// objStorage.removeItem(maxObj) //! Error
// console.log(objStorage.getItems()) //! Error

interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

const names: Readonly<string[]> = ["Max", "Anna"]
// names.push("Manu") //! Error
// names.pop() //! Error
