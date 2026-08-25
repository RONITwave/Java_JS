// 1. MAP-- method is used to create a new array by applying a function to each element of the original array. It does not modify the original array, but instead returns a new array with the results of the function applied to each element.

console.log("\nmap");
let arr = [12, 53, 23];
let a = arr.map((value, index, array) => { //Map method is used to create a new array by applying a function to each element of the 
    console.log(value, index, array)
return value + 2;
});
console.log(a)

// 2. FILTER-- method is used to create a new array with all elements that pass the test implemented by the provided function. It does not modify the original array, but instead returns a new array with the elements that pass the test.

console.log("\nfilter");
let arr2 = [12, 53, 23, 45, 67, 89];
let b = arr2.filter((value, index) => {
    console.log(value, index);
    return value > 30;
});
console.log(b); 

// 3. REDUCE-- method is used to apply a function to an accumulator and each element in the array (from left to right) to reduce it to a single value. It does not modify the original array, but instead returns a single value that is the result of the reduction.

console.log("\nreduce");
let arr3 = [12, 53, 23, 45, 67, 89];
let c = arr3.reduce((accumulator, value, index, array) => {
    console.log(accumulator, value, index, array);
    return accumulator + value;
}, 0); // initial value is 0
console.log(c);  //reduce method ko hum initial value bhi de sakte hai, agar humne initial value nahi di to reduce method array ke first element ko initial value ke roop me use karega,aur uske baad array ke second element se reduce method kaam karega. Agar humne initial value di to reduce method initial value ko accumulator ke roop me use karega,aur uske baad array ke first element se reduce method kaam karega.
                //acumulator ka mtlb hai ki reduce method ke andar jo bhi value return hoti hai wo accumulator me store hoti hai aur uske baad array ke next element se reduce method kaam karta hai.
                //accumulator work as sum-- it is use to add the value of the array and return the sum of the array.
                //FOREACH-- method is used to execute a provided function once for each array element. It does not modify the original array, but instead executes the provided function for each element in the array. 
                //and value of the array is passed as an argument to the provided function. It does not return anything, it just executes the provided function for each element in the array.
                //value main 12 isliye nhi aaya kyuki reduce method ke andar initial value 0 di gayi hai, aur reduce method initial value ko accumulator ke roop me use karta hai,aur uske baad array ke first element se reduce method kaam karta hai. Isliye reduce method ke andar initial value 0 di gayi hai, aur uske baad array ke first element 12 se reduce method kaam karta hai,aur uske baad array ke second element 53 se reduce method kaam karta hai,aur uske baad array ke third element 23 se reduce method kaam karta hai,aur uske baad array ke fourth element 45 se reduce method kaam karta hai,aur uske baad array ke fifth element 67 se reduce method kaam karta hai,aur uske baad array ke sixth element 89 se reduce method kaam karta hai. Isliye reduce method ke andar
 
                
// 4. Set-- is a built-in object that allows you to store unique values of any type, whether primitive values or object references. It is similar to an array, but it does not allow duplicate values. You can add, delete, and check for the presence of values in a Set. Sets are useful when you want to ensure that a collection of values contains only unique elements.


console.log("\nSet");
let arr4 = [12, 53, 23, 89, 12, 53, 23];
let mySet = new Set(arr4); // it will create a new set with unique values from the array arr4. It will remove the duplicate values from the array arr4 and return a new set with unique values.
console.log(mySet);
mySet.add(18);
console.log(mySet); // it will add the value 18 to the set mySet. It will not add the value 18 to the set mySet if the value 18 is already present in the set mySet. It will return the new set with unique values.
console.log("is there 53 present?--",mySet);
console.log(mySet.has(53)); // it will check if the value 53 is present in the set mySet. It will return true if the value 53 is present in the set mySet, otherwise it will return false.
mySet.delete(53); 
console.log(mySet); 
console.log(mySet.has(53));
console.log(mySet.size);


// 5. FOR OF LOOP-- is a built-in loop that allows you to iterate over the elements of an iterable object, such as an array, string, or set. It is similar to a for loop, but it is more concise and easier to read. The for of loop iterates over the values of the iterable object, rather than the indices.

console.log("\nFOR OF LOOP");
let arr5 = [12, 53, 23, 89];
for (let value of arr5) {
    console.log(value);
}   // ForOfLoop ka use hum custom iterable object ke values ko iterate karne ke liye bhi krte hein. 


// 6. FOR IN LOOP-- is a built-in loop that allows you to iterate over the properties of an object. It is similar to a for loop, but it is more concise and easier to read. The for in loop iterates over the keys of the object, rather than the values.

console.log("\nFOR IN LOOP");
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}   // ForInLoop ka use hum custom object ke properties ko iterate karne ke liye bhi krte hein. 


// 7. FOR EACH LOOP-- is a built-in loop that allows you to iterate over the elements of an array. It is similar to a for loop, but it is more concise and easier to read. The for each loop iterates over the values of the array, rather than the indices.

console.log("\nFOR EACH LOOP");
let arr6 = [12, 53, 23, 89];    
arr6.forEach(function(value) {
    console.log(value);
}); 