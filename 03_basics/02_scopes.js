// var c = 300
let a = 300
                                 // Don't use var because its value is globally changing, if the value is changed in one file, then its value is changed in other file. 
                                 // Blockscope - Value within the block Example within if statement
                                 // Globalscope - Everything else, except block
if(true){
    let a = 10
    const b = 20

    // console.log("INNER :",a)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
console.log(b);
console.log(c) 

