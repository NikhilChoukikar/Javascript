// const myObject = {
//     js:"javascript",
//     cpp:"C++",
//     rb:"ruby",                                    // For in is used for Object
//     swift: "swift by apple"
// }

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const programming = ["js","rb","py","java","cpp"]

// for(const key in programming){
//     console.log(programming[key])
// }

// for(const key of programming){
//     console.log(key)
// }

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for(const key in Map){
    console.log(key)
 }