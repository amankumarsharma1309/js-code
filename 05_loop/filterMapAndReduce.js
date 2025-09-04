//const coding =["js", "ruby", "java", "cpp"]


// const values= coding.forEach( (item)=>{
//     //console.log(item)
//     return item
// })

// console.log(values)

//as seen above that this "for-each loop" cant return values 


//  agar scope "{}" use kar rha hai toh "return" likhna padega 


const myNums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter( (nums)=>{
//     return nums>4
// })




const newNums=[]

myNums.forEach( (num)=>{
    if(num>4){
        newNums.push(num)
    }
})
 
//console.log(newNums)