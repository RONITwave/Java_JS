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
console.log("Hello \tWorld");    // Hello 	World ----it is used to print the tab

