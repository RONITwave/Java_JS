//writing -- let arr = [3,7,2]
            // let a = arr[0]
            // let b = arr[1]
            // let c = arr[2]
// We can simplify write the above code using destructuring method in JavaScript Like this
console.log("1st use of destructuring method in JavaScript")
let arr = [3,7,2]
let [a,b,c] = arr
console.log(`The value of A is ${a} \n The value of B is ${b} \n The value of C is ${c}`)



//Using ...rest operator with destructuring method in JavaScript
console.log("\n\n2nd use of destructuring method in JavaScript")
let numbers = [1, 2, 3, 4, 5]
let [first, second, ...rest] = numbers //The rest operator allows us to collect the remaining elements of an array into a new array.  
console.log(`The first number is ${first}, second number is ${second}, and the rest of the numbers are ${rest}`)




//If we want to skip some values while destructuring an array, we can use commas to skip them. For example:
console.log("\n\n3rd use of destructuring method in JavaScript")
let arr2 = [10, 20, 30, 40, 50]
let [x, , , , y] = arr2
console.log(`The value of X is ${x} and the value of Y is ${y}`)






//If we wanna give default values to the variables while destructuring an array, we can do it like this:
console.log("\n\n4th use of destructuring method in JavaScript")
let arr3 = [100, 200]
let [p = 1, q = 2, r = 3] = arr3
console.log(`The value of P is ${p}, Q is ${q}, and R is ${r}`)




//The another use of destructuring method in JavaScript is to extract values from an object and assign them to variables. For example:
console.log("\n\n5th use of destructuring method in JavaScript")
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
let {name, age, city} = person
console.log(`The name is ${name}, age is ${age}, and city is ${city}`)

//The destructuring method can also be used in function parameters. For example:
function displayPerson({name, age, city}) {
    console.log(`The name is ${name}, age is ${age}, and city is ${city}`)
}
displayPerson(person);


//The destructuring method can also be used to swap values of two variables. For example:
console.log("\n\n6th use of destructuring method in JavaScript")
let m = 5
let l = 10
console.log(`Before swapping: M is ${m} and L is ${l}`);

[m, l] = [l, m];

console.log(`After swapping: M is ${m} and L is ${l}`);




//If we want to give values to the variables is use be like 
console.log("\n\n7th use of destructuring method in JavaScript")
let {v , h} = {v: 1, h: 2}
console.log(`The value of V is ${v} and the value of H is ${h}`)
