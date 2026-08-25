let marks = {
    harry: 85,
    marry: 7,
    jerry: 71
}
for (let i=0; i<Object.keys(marks).length; i++){
    console.log(  "The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]] );
    console.log("\nESCAPE SEQUENCE CHARACTERS");
}

// Escape sequence Characters

console.log("Hello \\World\\");     // Hello \World\ ----it is used to print the backslash 
console.log("Hello \nWorld");      // Hello and World in next line ---it is used to print the new line
console.log("Hello \tWorld");     // Hello 	World ----it is used to print the tab
console.log("Hello \"World\"");    // Hello "World" ----it is used to print the double quotes
console.log("Hello \'World\'");    // Hello 'World' ----it is used to print the single quotes
console.log("Hello \bWorld");    // HelloWorld ----it is used to print the backspace
console.log("Hello \rWorld");    // World ----it is used to print the carriage return
console.log("Hello \fWorld");    // Hello World ----it is used to print the form feed
console.log("Hello \vWorld");    // Hello World ----it is used to print the vertical tab
console.log("Hello \0World");    // Hello World ----it is used to print the null character