// const userEmail = "hitesh.ai"

// if (userEmail) {
//     console.log("Got user email"); 
// } else {
//     console.log("dont have user email");
// }

//falsy values

// false, 0, -0, BigInt 0n, "", undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//to check if the object is empty or not
// const emptyObject={}
// if(Object.keys(emptyObject).length==0){
//     console.log("Object is empty");
// }

//NUllish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1)

// terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")