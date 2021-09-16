//Basic Types
let a: number = 5;

let company: string = 'Codjo software Inc'

let isPublished: boolean = true 

let x: any = 'Hello'

let age: number;

age = 32;


//array
let pins: number[] = [3,4,5,6,7]
let arr: any[] = [1,2,3, 'heel']

//Tuple
let person:  [number, string, boolean] = [1, 'Kojo', false]
//Tuple array
let employee: [number, string] []

employee = [
    [1, 'Mike'],
    [2, 'Murdock']
]

//Union
let id: string | number  //could be string or number
id = 'Patterson'

//Enum  
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1.Left)

enum Direction2 {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right =  'right'
}
console.log(Direction2.Left)

//objects
const Profile: {name: string, age: number} = {
    name: 'Isaac',
    age: 31
}

// or
type Profiles = { name: string, age: number}

const profile: Profiles = {
    name: 'Isaac',
    age: 31
}

//Type Assertion
let cid: any = 1;
let customerId = <number>cid //sets customerId type to number
//or
let customersId = cid as number //sets customerId type to number


//function       parameters must have type and return value must have type
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1,2))

//Void function
function sayHello(message: string | number  ): void { //the return type is void
    console.log(message)
}

// console.log(sayHello('Hello World'))

//Interface
interface UserInterface  { 
    id?: number, //? means optional
    name: string,
   readonly age: number // readonly means cannot be changed
}

const User1: UserInterface = {
    name: 'Isaac',
    age: 31
}

//Interface with function
interface MathFunc  {
    //arguments and return value must have type
    (x: number, y: number): number
}

//arrow function with the interface
const add: MathFunc = (x: number, y: number) => x + y;
const sub: MathFunc = (x: number, y: number) => x - y;
