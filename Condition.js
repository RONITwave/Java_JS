const prompt = require("prompt-sync")();

let a = prompt("What's your UMAR.?: ");

/*                           COMMENT

1-- "prompt" is used to take input from user and it convert anything into string

2-- "readline" is used to take input from user and it convert anything into string


                           alt+shift+down after select
*/
if (a<20) {
}

a = Number.parseInt(a)               // "parseInt" is used to convert string into number
console.log (typeof a)
console.log("YOU are ", a<20 ? "soo small " : "always a kid")

 //If the condition is true then it will print ""soo small"" otherwise it will print ""always a kid"""



 
 for (i=0; i<a; i++){
    console.log(i)
 }