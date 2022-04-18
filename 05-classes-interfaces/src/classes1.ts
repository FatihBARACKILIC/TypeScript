class Department {
  //   private id: string
  //   private name: string
  private employees: string[] = []

  constructor(private readonly id: string, private name: string) {
    this.id = id
    this.name = name
  }

  describe(this: Department) {
    console.log(`Department(${this.id}):  ${this.name}`)
  }

  addEmployee(employee: string) {
    //   this.id = "d2A" //!Error
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department("d1A", "Accounting")

// console.log(accounting.name)

accounting.addEmployee("Fatih")
accounting.addEmployee("BARAÇKILIÇ")

// accounting.employees[2] = "Bingöl1" //! Error

accounting.describe()
// accounting.name = "New Name"
accounting.printEmployeeInformation()

// const accountingCopy = {
//   name: "Dummy",
//   describe: accounting.describe,
// }
// accountingCopy.describe()
