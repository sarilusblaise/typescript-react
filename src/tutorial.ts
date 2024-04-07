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
