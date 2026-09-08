// Spread Operator--spread operator is used to expand an array or object into individual elements. It allows us to create a new array or object by combining existing ones.
//Rest Operator--rest operator is used to collect multiple elements into a single array or object. It allows us to create a new array or object by collecting existing ones.

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



//DOM--Document Object Model--DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.    
//by using DOM, we can access and manipulate HTML elements, attributes, and content dynamically. It allows developers to create interactive web applications by responding to user actions and updating the UI in real-time.
//also, DOM provides a way to traverse and modify the document tree, enabling developers to add, remove, or modify elements and their properties. It is an essential part of web development and is widely used in conjunction with JavaScript to create dynamic and responsive web pages.  



//BOM--Browser Object Model--BOM is a programming interface for web browsers. It allows developers to interact with the browser and its components, such as the window, history, location, and navigator objects. The BOM provides methods and properties to manipulate the browser environment, enabling developers to create dynamic web applications that can respond to user actions and browser events.    
//by using BOM, we can access and manipulate browser-specific features, such as opening new windows, navigating to different URLs, managing cookies, and handling browser events. It allows developers to create interactive web applications that can respond to user actions and provide a seamless user experience.
//it is important to note that the BOM is not standardized and may vary across different browsers. Therefore, developers need to be cautious when using BOM features and ensure cross-browser compatibility in their applications.
//the difference between DOM and BOM is that DOM is focused on manipulating the document structure and content, while BOM is focused on interacting with the browser environment and its components......hello....