// Dates

// let myDate = new Date()

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,4)
// let myCreatedDate = new Date(2023,0,5,5,3)
let myCreatedDate = new Date("11-04-2024")
// console.log(myCreatedDate)

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor((Date.now())/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

//`${newDate.getDay()} and the time '

newDate.toLocaleString('default',{
    weekday: "long", 
})