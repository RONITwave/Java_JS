//This Keyword in JavaScript

let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.getFullName()); // Output: "John Doe"

//another complex example of this keyword in JavaScript
let person2 = {
    firstName: "Jane",
    lastName: "Smith",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
let getFullNameFunction = person2.getFullName;

console.log(person2.getFullName()); // Output: "Jane Smith" 
console.log(getFullNameFunction()); // Output: "Jane Smith" 
 
let person3 = {
    firstName: "Alice",
    lastName: "Johnson",
    salary: 50000,
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
};