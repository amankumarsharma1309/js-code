// //for of loops discussed below
// const arr= [1,2,3,4,5]

// // for (const num of arr) {
// //     console.log(num)
    
// // }

// const greetings ="Hello World!"

// for (const num of greetings) {
//     // console.log(num)
// }

// // ############################################################
// //maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "UNITED STATES OF AMERICA")
// map.set('Fr', "FRANCE")
// map.set('IN', "India")

// // console.log(map)

// for (const [key, value] of map) {
//    // console.log(key, ':-', value)
// }



// //for of loop doesnt work for objects i.e. we cant itterate the object using for of loop


// //what to do +++++++++++++++++++==for in loop


// const myObject = {
//     js:"javacript",
//     cpp:"c++",
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const arrr =[1, 2, 3, 4, 5]
// for (const key in arrr) {
//     console.log(arrr[key])
// }

// #########################for-each loop#################

const arr =["js", "ruby", "java", "cpp"]

// arr.forEach( function (val){
//     console.log(val)
// })

//using arrow function

// arr.forEach( (val)=>{
//     console.log(val)
// })


arr.forEach( (item, index, arr)=>{
    //console.log(item, index, arr)
})


const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
    
]
myCoding.forEach( (item)=>{
    console.log(item.languageName)
})
