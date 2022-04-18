/*
abstract class Department {
  //   private readonly id: string;
  //   public name: string;
  public static companyName: string = "Faith34";
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  static getEmployee(name: string): object {
    return { name };
  }

  // describe(this: Department) {
  //   //! this.id = "d2";
  //   console.log(`Department(${this.id}): ${this.name}`);
  // }

  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.name + " department worker " + this.employees.join(", "));
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addEmployee(name: string) {
    if (this.admins.includes(name)) this.employees.push("ADMIN " + name);
    else this.employees.push(name);
  }

  describe() {
    console.log("IT Department ID: " + this.id);
  }
}

class Accounting extends Department {
  private _lastReport: string;
  private static instance: Accounting;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this._lastReport = reports[reports.length - 1];
  }

  static getInstance() {
    if (Accounting.instance) return this.instance;
    this.instance = new Accounting("d2", []);
    return this.instance;
  }

  get lastReport() {
    if (this._lastReport) return this._lastReport;
    throw new Error("No Report Found!");
  }

  set lastReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  describe() {
    console.log("Accounting Department ID: " + this.id);
  }

  addReport(report: string) {
    this.reports.push(report);
    this._lastReport = report;
  }

  printReports() {
    console.log("Reports: ", this.reports.join(", "));
  }
}

console.log("Company Name: " + Department.companyName);

//? sonradan abstract class a çevrildi nesne oluşturulamaz
//! const department = new Department("d1", "example");

// department.addEmployee("Max");
// department.addEmployee("Manu");
// //! department.employees[2] = "Anna";

// console.log(department);
// department.describe();

// department.printEmployeesInformation();

// const departmentCopy = { name: "DUMMY", describe: department.describe };
// departmentCopy.describe();

const it = new ITDepartment("d1", ["Fatih", "Ali"]);

it.addEmployee("Fatih");
it.addEmployee("Halil");
it.addEmployee("Ali");
it.describe();
it.printEmployeesInformation();

console.log(it);

console.log("-------------------------------------");

// const accounting = new Accounting("d2", []);

const accounting = Accounting.getInstance();
//! const accounting2 = Accounting.getInstance(); //! tek bir instance oluşturulur

accounting.addEmployee("Eren");
accounting.describe();
accounting.printEmployeesInformation();

accounting.addReport("Something went wrong1!");
accounting.addReport("Something went wrong2!");

accounting.lastReport = "Year's last report";
accounting.printReports();

console.log("Last Report: " + accounting.lastReport);

console.log(accounting);
//! console.log(accounting2); //! tek bir instance oluşturulur

console.log("-------------------------------------");

console.log(Department.companyName);
console.log(Department.getEmployee("Fatih"));

//*/
