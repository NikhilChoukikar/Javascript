// for of

//["","",""]
//[{},{},{}]

// const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);                 // for of returns value
// }

// const greetings = "hello world!"

// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

// const map = new Map()

// map.set('IN',"INDIA")
// map.set('USA',"United States of America")              // for of can be used with Map, for of cannot be used with Objects
// map.set('FR',"France")
// map.set('IN',"INDIA")

// console.log(map);

// for(const[key,value] of map){
//     console.log(key, ':-', value)
// }

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

for(const [key,value] of myObject){
    console.log(key,':-',value);   
}