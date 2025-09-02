// Immediately Invoked function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log("DB CONNECTED");
}());


// writing interms of arrow function

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Aman")