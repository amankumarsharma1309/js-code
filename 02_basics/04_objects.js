//const tinderUser = new Object()-->singleton object 
const tinderUser={} //-->non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)
const regularUser = {
    email : "some@gmail.com", 
    fullname : {
        userfullname: {
            firstname :"aman",
            lastname :"sharma"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3= {obj1, obj2}

//const obj3=Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)


const user =[
    {
        id:1,
        email:"aman@gmail.com"
    },
    {
        id:1,
        email:"kumar@gmail.com"
    }
]

//console.log(user[0].email)
//console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "Aman"
}

const {courseInstructor:instructor} = course
console.log(instructor)

//JSON BELOW
// {
//     "name": "aman",
//     "coursename": "js in hindi",
//     "price" :"free"
// }

// also Api in a form of array 
[
    {},
    {},
    {}
]