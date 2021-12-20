"use strict";
class Developer {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.isDeveloper = true;
    }
    getInfo() {
        console.log('name', this.name);
        console.log('salary', this.salary);
    }
}
class SeniorDeveloper extends Developer {
    constructor(name, salary) {
        super(name, salary); //parent
        this.name = name;
        this.salary = salary;
    }
    teachJuniorDevs() {
        console.log(`${this.name} teaches junior devs.`);
    }
}
const developer = new SeniorDeveloper('Alena', 5000);
console.log(developer.isDeveloper);
//# sourceMappingURL=inheritence.js.map