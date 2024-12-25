// Singleton

//Object.create

// Object Literals

// const mySym = Symbol("key1")

// const JsUser = {                             // Symbol is declared [] within that, if Symbol is declared as it is then it is string datatype, if declared within [] then it is symbol datatype.
//     name: "Nikhil",
//     "full name" : "Nikhil Choukikar",
//     [mySym] : "key1",
//     age: 18, 
//     location : "Nagpur",
//     email: "nikhil@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday","Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "Nikhil@chatgpt.com"
// // Object.freeze(JsUser)



// JsUser.email = "Nikhil@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)


// JsUser.greeting = function(){
//     console.log("Hello JsUser")
// }

// // console.log(JsUser.greeting)

// JsUser.greeting2 = function(){
//     console.log(`Hello JsUser, ${this.name}`)
// }

// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())