function sayMyName(){
    console.log("A")
    console.log("m")
    console.log("a")
    console.log("n")

}

//sayMyName()

// function AddTwoNumbers(num1, num2){
//     console.log(num1 + num2)

// }
function AddTwoNumbers(num1, num2){
    let result = num1 + num2
    return result

}
const result = AddTwoNumbers(3,4)

//console.log("Result:", result)
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`

}
// console.log(loginUserMessage("Aman"))
//console.log(loginUserMessage())

function CalculateCartPrice(val1, val2, ...num1){
    return num1
}
// function CalculateCartPrice(...num1){
//     return num1
// }

//console.log(CalculateCartPrice(4, 300 , 44, 300))

const user = {
    username: "Aman",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is${anyObject.price}`)
}

//handleObject(user)




const myNewArray =[200, 400, 4, 5]

function giveSecondValue(Array){
    return Array[1];
}

console.log(giveSecondValue(myNewArray))

