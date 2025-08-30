//objects literals 
const mySym = Symbol("key1")
const jsusers = {
    name: "aman", 
    "fullname" : "aman sharma",
    age:18, 
    [mySym] : "myKey1",
    location: "jaipur", 
    email: "hitesh@google.com", 
    isLoggedIn: false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(jsusers.email)
// console.log(jsusers["email"])
// console.log(jsusers["fullname"])
// console.log(jsusers[mySym])


jsusers.email = "kumar@gmail.com"
//Object.freeze(jsusers)

jsusers.email = "kumnnnnnar.com"
// console.log(jsusers.email)


jsusers.greeting = function(){
    console.log("Hello JS users")

}
jsusers.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`)

}

console.log(jsusers.greeting())
console.log(jsusers.greetingTwo())