let arr = [12, 53, 23];
let a = arr.map((value, index, array) => { //Map method is used to create a new array by applying a function to each element of the 
    console.log(value, index, array)
});
return value + 2;
console.log(a)