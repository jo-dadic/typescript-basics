// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number; 

age = 12.1;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[]; //number[], boolean[]

hobbies = ['Sports', 'Cooking']; 

// type alias:
type Person = {
    name: string,
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
}

// wrong type: !!!
// person = {
//     isEmployee: true
// }

// storing an array of objects:
let people: Person[];

// Type inference - ts automatically assignes the type to the variable 

let course = 'React - The Complete Guide';

// course = 12244;  - error, because string was first!!

// Union type - allowing more types on the same variable:

let course2: string | number = 'React - The Complete Guide';

course2 = 12345;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics - helps work with functions that are type safe, yet flexible
    // those can be any tpye, but once the type is assigned, ts recognize which type exactly should be

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split(''); - error, ts recoginzes that array is type number and can't do split() on it

export {};