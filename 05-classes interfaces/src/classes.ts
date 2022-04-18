abstract class Department {
  //   private id: string
  //   private name: string
  protected employees: string[] = []
  static fiscalYear = 2022

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = name
    // console.log(this.fiscalYear) //! Error
    // console.log(Department.fiscalYear) //> 2022
  }

  static createEmployee(name: string): {} {
    return {
      name,
    }
  }

  abstract describe(this: Department): void

  addEmployee(employeeName: string) {
    //   this.id = "d2A" //!Error
    this.employees.push(employeeName)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

// const accounting = new Department("d1A", "Accounting")
// // console.log(accounting.name)
// accounting.addEmployee("Fatih")
// accounting.addEmployee("BARAÇKILIÇ")
// // accounting.employees[2] = "Bingöl1" //! Error
// accounting.describe()
// // accounting.name = "New Name"
// accounting.printEmployeeInformation()

// const accountingCopy = {
//   name: "Dummy",
//   describe: accounting.describe,
// }
// accountingCopy.describe()

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT")
    this.admins = admins
  }

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`)
  }
}

const it = new ITDepartment("d1IT", ["Fatih"])
it.addEmployee("Fatih")
it.addEmployee("BARAÇKILIÇ")
it.describe()
it.printEmployeeInformation()
console.log(it)

console.log(
  "-------------------------------------------------------------------------------"
)

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport
    throw new Error("No report found!")
  }

  set mostRecentReport(lastReport: string) {
    if (!lastReport) throw new Error("Please pass in a valid value!")
    this.addReports(lastReport)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance
    this.instance = new AccountingDepartment("d1A", [])
    return this.instance
  }

  describe(): void {
    console.log(`Accounting Department - ID: ${this.id}`)
  }

  addEmployee(employeeName: string): void {
    if (employeeName === "Max") return
    this.employees.push(employeeName)
  }

  addReports(report: string) {
    this.reports.push(report)
    this.lastReport = report
  }

  printReports() {
    console.log(this.reports)
  }
}

// const accounting = new AccountingDepartment("d1A", []) //! Error

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()

accounting.describe()
accounting.addEmployee("Max")
accounting2.addEmployee("Manu")
accounting.addEmployee("Fatih")
accounting.printEmployeeInformation()
// console.log(accounting.mostRecentReport)
accounting.mostRecentReport = "New Report"
accounting.addReports("Something went wrong!!!")
accounting.printReports()
console.log(`Last Report: ${accounting.mostRecentReport}`)

console.log(accounting, accounting2)

console.log(
  "-------------------------------------------------------------------------------"
)

const employee1 = Department.createEmployee("Fatih")
console.log(employee1)
console.log(Department.fiscalYear)
