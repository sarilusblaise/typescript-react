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