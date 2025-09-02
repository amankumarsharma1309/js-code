
//the curly braces is called the scope

//const { use } = require("react")

var c= 300
if(true){
    let a= 10
    const b= 20
    var c= 30
}

// console.log(a)
// console.log(b)
// console.log(c)





// function one(){
//     const username ="Aman"

//     function two(){
//         const website ="youtube"
//         console.log(username)
//     }

//    //   console.log(website)

//     two()
// }

// one()
// +++++++++++++++interesting+++++++++++++++++++++++
console.log(addOne (5))
function addOne(num){
    return num + 1;
}


//another way of declaring a func just belowch
addTwo(5)//-->this throws an error
const addTwo = function(num){
    return num + 2;
}

// addTwo(5) but this doesnt
