const  user ={
    username:"Aman",
    price: "999",

    welcomeMessage : function(){
        console.log(`${this.username},  welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username ="Aman"
//     console.log(this.username)
// }
// chai()
//cant use "this" keyyword in the function as above




//  another way of declaring a function as below
// const chai = function(){
//     let username = "aman"
//     console.log(this);

// }
const chai = ()=>{
    let username = "aman"
    console.log(this);

}

// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }



// implicite return below
//const addTwo = (num1, num2)=> num1 + num2

//              OR

// const addTwo = (num1, num2)=> (num1 + num2)


//      if i need to return a object instaed of returing num1 + num2 then...


const addTwo = (num1, num2)=> ({username:"aman"})


console.log(addTwo(2,5))






