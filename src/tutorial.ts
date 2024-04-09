//==========================typescript type annotation=============================

//------- string type -------
let firstName: string = "Blaise"
//firstName = 5 ( error: type number is not assignable to type string )
firstName.toUpperCase()
console.log(firstName)

// ------- number type -------

let age : number = 28 
// age = "something"  (error: type string is not assignable to type number )

// ---- boolean type (true or false)

let isYoung: boolean =  true 

//isYoung = 5 (error: type number is not assignable to type boolean)

//---------- any type -------------

let anything; // typescript infer type 'any' for variable like 'anything'
anything = "text"
anything = 5
anything = false

let anything1 :any = 56
anything1 = "anything"
anything = 56

//-------type union -------------
let unionSomething : string | number = 67
unionSomething = "text"
//unionSomething = false  (error)

let requestStatus : 'pending' | "failed" | "success"
requestStatus = 'pending'
requestStatus = 'failed'
//requestStatus = 'available' (error)

// ---------------array type ---------

let arraySomething : number[] = [1, 2,3, 4, 5, ]

//arraySomething.push("text")   (error)

let arrayTextNumber: (number | string)[] = [1,2,3,"text1", "text2"]

//arrayTextNumber[1] = true (error)


// ---------- object type -----------

let car:{company:string, color:string, year:number} = {company:"toyota", color:"red", year:2000}

let brand1 = {name:'brand1', color:'red', size:24}
let brand2 = {name:'brand1', color:'red', size:24}
let brand3 = {name:'brand1', color:'red'}
let arrayBrand:{name:string, color:string, size:number}[] = [brand1, brand2]
let arrayBrand2:{name:string, color:string, size?:number}[] = [brand1, brand2, brand3]
// let arrayBrand:{name:string, color:string, size:number}[] = [brand1, brand2, brand3] (error : fix with optional chaining on the type size  (? : property type | undefined))

let laptop = {company:"hp", year: 2020, color:'black'}

laptop.company = 'dell'

//laptop.company = 5 (error)

// ----  typescript function ----------

function multipleOfFive(num:number):number{
    return num * 5
}

const number1 = multipleOfFive(15)
console.log(number1);

// ------ challenge on function -----

const scores:number[] = [23, 45, 56,78]
function isNumberInScore(num:number): boolean {
    return scores.includes(num)
}

console.log(isNumberInScore(45))
console.log(isNumberInScore(7))

// --function optional parameter --

function calculatePrice(price:number, discount?:number): number{
    return price - (discount || 0)
}

console.log(calculatePrice(200, 80))
console.log(calculatePrice(200))
//function calculatePrice(price:number, discount?:number): number{
 //   return price - discount
//} (error ; discount is possibly undefined)

// -- function default parameter 

function calculateScore(score:number, penalty:number = 0):number{
    return score - penalty
}

console.log(calculateScore(45, 10))
console.log(calculateScore(45))

//typescript rest parameter

function sum(message: string, ...numbers:number[]):string{
    const doubled = numbers.map((number :number):number=>{
        return number * 2
    })

    console.log(doubled)

    const total:number = numbers.reduce((prev :number, curr:number):number=> {
        return prev + curr
    }, 0)
    console .log(total)
    return `${message}${total}`

}

sum("the sum is : ", 1,2,3,4,5);

//type guard 

function processInput(input:string|number):void{
    if(typeof input === 'number'){
        console.log(input * 2)
    }else{
        console.log(input.toUpperCase())
    }
}

processInput("sarilus");
processInput(5);

//---- parameter of object type and destructuring

function createEmployee({id}:{id:number}):{id:number ; isActive:boolean}{
    return {id, isActive : id % 2 === 0}
}
const firstEmployee = createEmployee({id:1})
const secondEmployee = createEmployee({id:2})
const employee3Id = {id:3}
const employee4Id = {id:4}
console.log(firstEmployee, secondEmployee, createEmployee(employee3Id),createEmployee(employee4Id))

function createStudent(student:{id:number; name:string}){
    console.log(`welcome to the course ${student.name.toUpperCase()}!!!!`)
}

/* function createStudent({id, name}:{id:number; name:string}){
    console.log(`welcome to the course ${name.toUpperCase()}!!!!`)
}  the same as above*/

const newStudent = {id:34, name:'rica'}
createStudent(newStudent);

//challenge 
function processData(input:string | number, config:{reverse:boolean} = {reverse:false}):string | number{
    if(typeof input === 'number'){
        return input * input
    }else{
        return config.reverse ? input.split("").reverse().join("").toUpperCase() : input.toUpperCase();
    }
}

console.log(processData('life'))
console.log(processData('life',{reverse:true}))
console.log(processData(5))

//---------------typescript type aliases----------------

// -------example without type aliases : it's repetitive , required modification in different place, less scalable---------

const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// -------example with type aliases : it's not repetitive , required modification in one place, more scalable---------

type User = { id: number; name: string; isActive: boolean }

const joh: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const sus: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createNewUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

console.log(createNewUser(sus))
console.log(createNewUser(joh))

//--- type aliases challenge---

type Employee = {id:number, name:string, department:string}
type Manager = {id:number, name:string, employees:Employee[]}

type Staff = Employee | Manager

function printStaffDetails(staff:Staff):void{
    if('employees' in staff){
        console.log(`${staff.name} is the manager of ${staff.employees.length}`)
    }else{
        console.log(`${staff.name} is in the ${staff.department} department`)
    }
}

const Alice:Employee = {id:1, name:"Alice", department:'marketing'}
const James:Employee = {id:1, name:"James", department:'sales'}
const Jules:Manager = {id:1, name:"James", employees:[Alice, James]}

console.log(printStaffDetails(Alice))
console.log(printStaffDetails(James))
console.log(printStaffDetails(Jules))

// typescript intersection type 

type Book ={id:number, name:string, price:number};
type DiscountedBook = Book & {discount:number}
const book1:Book ={id:1, name:'saison sauvage', price:15}
const book2:Book ={id:1, name:'La belle amour humaine', price:25}

const discountedBook:DiscountedBook = {id:1, name:'Zoune', price:45, discount:10}

console.log(discountedBook)

//================typescript interface=================

interface Car {
   readonly id: number,
   model:string,
   company:string
   //method 
   printModel():void,
   printCompany(message:string):string
}

const car1: Car = {
    id:1,
    model:'toyota',
    company:'ford',
    printModel(){
        console.log(this.model)
    },
    printCompany(message:string):string{
        console.log(`${message} ${this.company}`)
        return `${message} ${this.company}`
    }
}

car1.printCompany('the company is');
car1.printModel()

// interface challenge 

interface Computer {
    readonly id:number,
    brand:string,
    ram:number,
    storage?:number,
    upgradeRam(newRam:number):number
}

const computer1:Computer = {id:1, brand:"random brand",ram:8, upgradeRam(addRam){
    console.log(this.ram + addRam)
    this.ram += addRam
    return this.ram + addRam
}}

console.log(computer1)

computer1.storage = 256

console.log(computer1)

console.log(computer1.upgradeRam(6))

console.log(computer1)

// -------interface: merging , extend , typeGuard-----
interface Person{
name:string,
getDetails():string,
}

interface DogOwner{
    dogName:string,
    getDogDetails():string,
}

// Merging (reopening) an interface in TypeScript is a process where you declare an interface with the same name more than once, and TypeScript will merge their members.

// Merging the interface
interface Person{
    age:number,
}

const person:Person = {name:'John', age:30, getDetails(){
    return  `Name: ${this.name}, Age: ${this.age}`;
}}

// Extending an interface in TypeScript is a way to create a new interface that inherits the properties and methods of an existing interface. You use the extends keyword to do this. When you extend an interface, the new interface will have all the members of the base interface, plus any new members that you add.

// Extending the interface

interface Vendor extends Person{
    vendorId: number;
}

const vendor: Vendor = {
name: 'jane',
age:34,
  vendorId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.vendorId}`;
  },
}

// Interface multiple inheritance
interface Manager1 extends Person, DogOwner{
    managePeople():void,
}

const manager: Manager1 = {
    name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
}

console.log(manager.getDetails())
console.log(manager.getDogDetails()) 
manager.managePeople()


// =============Generics - Fundamentals================
// we can create array with two syntaxes

// first one using bracket
let array1 : string[] = ["Jean", "Marise", 'Skendia']
let array2 : number[] = [1, 2, 3 ]
let array3 : boolean[] = [true, false, true]

// second one using interface and generic 

let array4:Array<string> = ['mars', 'april', 'may']
let array5:Array<number> = [5,6,7]
let array6:Array<boolean> = [true, false , false, true]

// generic function 

// why use generic : generic help writing concise code , less repetitive or dry code , work with any type 

// here is a repetitive code 

function createString(arg:string):string{
    return arg
}

function createNumber(arg:number):number{
    return arg
}

function createBoolean(arg:boolean):boolean{
    return arg
}

// here is a the concise one code with generic

function genericFunction<T>(arg:T):T{
    return arg
}

const numberValue = genericFunction<number>(8)
const stringValue = genericFunction<string>("life")
const booleanValue = genericFunction<boolean>(true)

// interface with generic

interface GenericInterface<T>{
    value:T;
    getValue:() => T;
}

const genericString:GenericInterface<string> = {
    value:"hello",
    getValue() {
        return this.value
    },
}

console.log(genericString);
console.log(genericString.getValue());

async function somFunc():Promise<string>{
    return "life"
}

// more example on generic function

function generateStringArray(length:number, value:string):string[]{
    let result : string[] = []
    result = Array(length).fill(value)
    return result 
}

function generateNumberArray(length:number, value:number):number[]{
    let result : number[] = []
    result = Array(length).fill(value)
    return result 
}

// convert the function above in generic that accept any type and generate array of any type 

function genericGenerateArray<T>(length:number, value:T):T[]{
    let result:T[] = []
    result = Array(length).fill(value)
    return result
}

let arrayString = genericGenerateArray<string>(10,"life")
let arrayNumber = genericGenerateArray<number>(10,500)

console.log(arrayString)
console.log(arrayNumber)

// generic function with specific type : constraint
function processValue<T extends string | number>(value:T):T{
    console.log(value)
    return value
}

const val1 = processValue<number>(56)
const val2 = processValue<string>("beauty")

