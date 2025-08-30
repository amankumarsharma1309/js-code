const marvel_heros =["thor", "ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

 const all_new_heros = [...marvel_heros, ...dc_heros]

 //console.log(all_new_heros)
 const arr = [1,2,3,[4,5,6], 7, [6, 7, [4, 5]]]
 const arr1 = arr.flat(Infinity)
//
// console.log(arr1)

 console.log(Array.isArray("aman"))
console.log(Array.from("aman"))
 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))