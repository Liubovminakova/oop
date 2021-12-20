const SECRET: string = '123321';
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;

// ES5 Module
(function () {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

}());

// Define namespace
namespace Utils {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Call namespace method
namespace Utils {

    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;

};

// Try to call method outside namespace
const myPass = Utils.getPass('Liubov', 21);

// Export data from Namespace
namespace Utils {

    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;

};

// Calling exported from namespace methods
const myPass = Utils.getPass('Liubov', 21);
const isSecret = Utils.isEmpty(Utils.SECRET);

// Constant with the same name outside namespace
const PI = 3;


namespace Utils {

    export const SECRET: string = '123321';

    export const getPass = (name: string, age: number): string => `${name}${age}`;

};


const myPass = Utils.getPass('Liubov', 21);

// Import/Export (ES6 Modules)

// File "Utils.ts"
export const SECRET: string = '123321';

export const getPass = (name: string, age: number): string => `${name}${age}`;

// File "Customers.ts"
import { getPass, SECRET } from "./Utils";

const myPass = getPass(SECRET, 21);
