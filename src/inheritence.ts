class Developer {
  public isDeveloper: boolean;

  constructor(
    public name: string,
    public salary: number,
  ) {
    this.isDeveloper = true;
  }

  getInfo() {
    console.log('name', this.name);
    console.log('salary', this.salary);
  }

}

//   class SeniorDeveloper extends Developer {
//     constructor(
//       public name: string,
//       public sanlary: number,
//     ) {
//       super(name, salary); //parent
//     }
//
//   teachJuniorDevs(): void {
//     console.log(`${this.name} teaches junior devs.`);
//   }
//
// }
//
//
// const developer = new SeniorDeveloper('Alena', 5000);
// console.log(developer.isDeveloper);



class User {

    constructor(public name: string, public age: number) {}

}

const liubov = new User('Liubov', 21);

liubov;

// Class with static property
class User {

    static secret = 12345;  // static property

    constructor(public name: string, public age: number) {}

}

// Example of call static property
User.secret

// Call static property in class method
class User {

    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

const liubov = new User('Liubov', 20);

liubov.getPass();

// Compiled code
"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return this.name + User.secret;
    }
}
User.secret = 12345;

// Class example
class User {

    private nickName: string = 'webDev';
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${User.secret}`;
    }

}

// Inheritance example
class Liubov extends User {

    name: string = 'Liubov';

}


const max = new User('Max', 20);
const liubov = new Liubov(21);

// Realization of constructor in the inherited class
class Liubov extends User {

    name: string = 'Liubov';

    constructor(age: number) {
        super(name, age);
    }

}


const max = new User('Max', 20);
const liubov = new Liubov(21);

// Personal method in inherited class
class Liubov extends User {

    name: string = 'Liubov';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}${User.secret}`;
    }

}

const liubov = new Liubov(21);

liubov.getPass();

// Abstract class example
abstract class User {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;   // Abstract method

}

const max = new User('Max', 20);  // Cannot create an instance of an abstract class

// Create class using Abstraction
class Liubov extends User {

    name: string = 'Liubov';

    constructor(age: number) {
        super(name, age);
    }

}

// Realization of 'getPass' method
class Liubov extends User {

    name: string = 'Liubov';

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.age}${this.name}`;
    }

}

// Call prototype method
liubov.greet();
// Call personal method
liubov.getPass();
