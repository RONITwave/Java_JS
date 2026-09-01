// Spread Operator--spread operator is used to expand an array or object into individual elements. It allows us to create a new array or object by combining existing ones.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
const arr4 = {...arr1, ...arr2};
console.log("here we using [] and the output is :",arr3);
console.log("here we using {} and the output is :",arr4);

function sum(v1 , v2 , v3 ,v4,v5,v6){
    return v1+v2+v3+v4+v5+v6        
}
console.log(sum(...arr3))

let obj = {
    name: "jeevan",
    company: "jeevanJeeneDo",
    address: "jeeloo"
}
console.log({...obj ,name: "jaanwar"})