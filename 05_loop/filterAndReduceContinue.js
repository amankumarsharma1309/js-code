const myNumers =[1, 2, 3, 4 ,5 , 6, 7 ,8 ,9, 10]


//const a=myNumers.map( (num)=>num + 10)

// const a=myNumers.forEach( (num)=>{
//     console.log( num + 10)
// })


const a =myNumers
                .map( (num)=>num * 10)
                .map( (num)=>num + 1 )
                .filter( (num)=> num>=40)

//console.log(a)






//             "reduce starts here"



const  myNums=[1, 2, 3]


// const myTotal= myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval: ${currval} `)
//     return acc + currval

// }, 0)

//          "now using arrow functions"

// const myTotal=myNums.reduce( (acc, currval)=>{
//     return acc + currval

// , 0})


//          "array of object"


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 999
    },
    {
        itemName: "mobile dev Course",
        price: 5999
    },
    {
        itemName: "data science Course",
        price: 12999
    }
    
    
]
// what we have to do is :add all the prices of the shopping cart

const myTotal=shoppingCart.reduce( (acc, item)=>{
    return item.price + acc
    
}, 0)

console.log(myTotal)