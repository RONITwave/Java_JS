// let num = [98,45,946,87,298]
// let b = num.toString() 
// console.log( typeof num)
// console.log (num.join("-NEXT-"),  "\nType of b is --", typeof b) // it will join the array with the given string and it will convert the array into string
// let r = num.shift()
// console.log(r, num) // it will remove the first element of the array and return it
// let s = num.unshift(100402)
// console.log (s, num) // it will add the given element at the start of the array and return the new length of the array
// let m = num.sort()
// console.log(m ,num) // it will sort the array in ascending order and return the sorted array - it only consider first number for order


/*  TOPIC--splice and slice
   it use to replace the data to the give data   */

   let num = [9,8,7,6,5,4,3,2,1]
//    num.splice (3,4,10,20,30) // it will remove the 4 elements from index 3 and add the given elements at that index 
//       console.log(num)
//       let deletedValue = num.splice(3,4)
//       console.log ("THE DELETED VALUES ARE FORM INDEX (3 - 4) are--" ,deletedValue) //it will remove the 4 elements from index 3 and return the deleted values
//       console.log(typeof deletedValue)

//slice out a piece from an array, It create a new ARRAY
 let  newNum = num.slice(3,7) // it will slice the array from index 3 to 7 and return the new array
 console.log(newNum) // it will not change the original array