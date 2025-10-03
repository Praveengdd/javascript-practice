// let student = {
//     name: "Praveen Kumar G D",
//     age: 21,
//     profession: "Graduate",
//     introduction: function() {
//         console.log(`name: ${this.name}\nage: ${this.age}\nprofession: ${this.profession}`);
//     }
// }

// student.introduction();

//FACTORY FUNCTIONS

// function Student(name, age, profession) {
//   return {
//     name,
//     age,
//     profession,
//     introduction: function () {
//       console.log(
//         `name: ${this.name}\nage: ${this.age}\nprofession: ${this.profession}`
//       );
//     },
//   };
// }

// let student1 = Student("Praveen", 21, "Student");
// let student2 = Student("Manjunath", 20, "Engineer");

// student1.introduction();
// student2.introduction();

// console.log(student1);

//CONSTRUCTOR FUNCTIONS

// function Student(name, age, profession) {
//     this.name = name;
//     this.age = age;
//     this.profession = profession;
//     return this;
// }

// let s1 = new Student("Praveen", 21, "Graduate");
// let s2 = new Student("Manjunath", 25, "Engineer");

// console.log(s1);
// console.log(s2);

// console.log(this);

//CLASS SYNTAX(ES6)

// class Student{
//     constructor(name, age, profession) {
//         console.log(this);
//         this.name = name;
//         this.age = age;
//         this.profession = profession;
//     }

//     introduction() {
//         console.log(`${this.name}\nage: ${this.age}\nprofession: ${this.profession}`);
//     }
// }

// let student1 = new Student("Praveen", 21, "Graduate");
// let student2 = new Student("Manjunath", 22, "Engineer");

// console.log(student1);
// console.log(student2);
// student1.introduction();
// student2.introduction();

// PROTOTYPES

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// this.introduction = function() {
//     console.log(`My name is: ${this.name}\nI'm ${age} years old`);
// }
// }

// Student.prototype.introduction = function() {
//         console.log(`My name is: ${this.name}\nI'm ${this.age} years old`);
//     }

// let student1 = new Student("Praveen", 22);
// let student2 = new Student("Manasa", 29);

// console.log(student1);
// console.log(student2);

// student1.introduction();
// student2.introduction();

// function BankAccount(holdersName, balance = 0) {
//   this.holdersName = holdersName;
//   this.balance = balance;
//   this.deposit = function (deposit) {
//     this.balance += deposit;
//     this.showBalance();
//   };

//   this.withdraw = function (withdraw) {
//     if (withdraw > this.balance) {
//       console.log("Excess amount entered");
//     } else {
//       this.balance -= withdraw;
//       this.showBalance();
//     }
//   };

//   this.showBalance = function () {
//     console.log(`Your Balance: ${this.balance}`);
//   };
// }
// BankAccount.prototype.bankName = "Central Bank of Noida";

// BankAccount.prototype.deposit = function (deposit) {
//     this.balance += deposit;
//     this.showBalance();
//   };

// BankAccount.prototype.withdraw = function (withdraw) {
//     if (withdraw > this.balance) {
//       console.log("Excess amount entered");
//     } else {
//       this.balance -= withdraw;
//       this.showBalance();
//     }
//   };

// BankAccount.prototype.showBalance = function () {
//     console.log(`Your Balance: ${this.balance}`);
//   };

// let bkAc1 = new BankAccount("Praveen", 150);
// console.log(bkAc1);

// function Student(name, age) {
//     return {name, age};
// }

// console.log(Student("Praveen", 22));

// class Student{
//     constructor (name, age, profession) {
//         this.name = name;
//         this.age = age;
//         this.profession = profession;
//     }

//     introduction() {
//         console.log(`My name is: ${this.name}\nI'm ${age} years old`);
//     }
// }

// let s1 = new Student("Bharath", 25, "Maritime Officer");
// console.log(s1);

//--------------- OOP --------------------

// class Car {
//   constructor(name, color, mileage) {
//     this.name = name;
//     this.color = color;
//     this.mileage = mileage;
//   }

//   start() {
//     console.log(`${this.name} is getting started`);
//   }

//   stop() {
//     console.log(`${this.name} has stopped`);
//   }
// }

// const toyota = new Car("Toyota", "Silver", 22);
// const volkswagen = new Car("Volkswagen", "Red", 17);
// const honda = new Car("Honda", "green", 21);

// toyota.start();
// toyota.stop();

// volkswagen.start();
// volkswagen.stop();

// honda.start();
// honda.stop();

// class Car {
//   #fuel = 100;

//   #burnFuel() {
//     this.#fuel -= 1;
//   }
//   start() {
//     this.#burnFuel();
//     console.log("Car is starting...");
//   }
// }

// let c1 = new Car();
// c1.start();
// console.log(c1);

// class BankAccount {
//   #balance = 0;
//   constructor(holdersName, balance = 0) {
//     this.holdersName = holdersName;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log("Insufficient Balance");
//     } else {
//       this.#balance -= amount;
//     }
//   }

//   set setBalance(amount) {
//     if(isNaN(amount)) {
//         console.error("Invalid Balance");
//         return;
//     }
//     this.#balance = amount;
//   }

//   get getBalance() {
//     return this.#balance;
//   }
// }

// let praveenAccount = new BankAccount("Praveen", 500);
// console.log(praveenAccount);
// praveenAccount.deposit(1100);
// console.log(praveenAccount);
// praveenAccount.setBalance = 10000;
// console.log(praveenAccount.getBalance);


class Car{
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    start() {
        console.log(`${this.brand} is starting....`)
    }

    stop() {
        console.log(`${this.brand} is stopping....`)
    }
}


class ElectricCar extends Car{
    constructor(brand, color, battery) {
        super(brand, color);
        this.battery = battery;
    }

    start() {
        console.log(`${this.brand} is starting silently....`)
    }
    
    charging() {
        console.log(`${this.brand} is getting charged....`)
    }
}


let toyota = new Car("Toyota", "Silver");

toyota.start();
toyota.stop();


let tesla = new ElectricCar("Tesla", "Blue", "81kwh");

tesla.start();
tesla.stop();
tesla.charging();



