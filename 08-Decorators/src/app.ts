function Logger(logString: string) {
  console.log("LOGGER FACTORY")

  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY")

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super()

        console.log("Rendering template...")
        const hookElement = document.getElementById(hookId)
        if (hookElement) {
          hookElement.innerHTML = template
          hookElement.querySelector("h1")!.textContent = this.name
        }
      }
    }
  }
}

// @Logger("LOGGING - PERSON")
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Fatih"

  constructor() {
    console.log("Creating person object...")
  }
}

const person = new Person()
// console.log(person)

console.log("------------------------------")
//------------------------------

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator!------------------------------")
  console.log(target, propertyName)
}

function Log2(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator!------------------------------")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator!------------------------------")
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator!------------------------------")
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  public title: string
  private _price: number

  constructor(title: string, price: number) {
    this.title = title
    this._price = price
  }

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val
    else throw new Error("Invalid price - should be positive!")
  }

  get price() {
    return this._price
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

const p1 = new Product("Book1", 19)
const p2 = new Product("Book2", 29)

console.log("------------------------------")
//------------------------------

function AutoBind(
  target: any,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    },
  }
  return adjDescriptor
}

class Printer {
  public message = "This Works!"

  @AutoBind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer()

const button = document.querySelector("button")
// button?.addEventListener("click", p.showMessage.bind(p))
button?.addEventListener("click", p.showMessage)

console.log("------------------------------")
//------------------------------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]

  if (!objValidatorConfig) return true

  let isValid = true
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop]
          break
        case "positive":
          isValid = isValid && obj[prop] > 0
          break
      }
    }
  }
  return isValid
}
class Course {
  @Required
  title: string
  @PositiveNumber
  price: number

  constructor(title: string, price: number) {
    this.title = title
    this.price = price
  }
}

const courseForm = document.querySelector("form")!
courseForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const titleEl = document.getElementById("title") as HTMLInputElement
  const priceEl = document.getElementById("price") as HTMLInputElement

  const title = titleEl.value
  const price = +priceEl.value

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!")
    return
  }
  console.log(createdCourse)
})
