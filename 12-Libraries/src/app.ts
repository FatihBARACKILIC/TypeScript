// import _ from "lodash"
// console.log(_.shuffle([1, 2, 3]))

// declare var GLOBAL: any
// console.log(GLOBAL)

import "reflect-metadata"
import { plainToClass } from "class-transformer"
import { validate } from "class-validator"

import { Product } from "./product.model"

// const p1 = new Product("A Book", 12.99)
// console.log(p1.getInformation())

const product = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
]

const newProd = new Product("", -5.99)
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!")
    console.log(errors)
  }
  console.log(newProd.getInformation())
})

// const loadedProduct = product.map((prod) => {
//   return new Product(prod.title, prod.price)
// })

const loadedProduct = plainToClass(Product, product)

for (const prod of loadedProduct) {
  console.log(prod.getInformation())
}
