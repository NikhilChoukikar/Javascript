// const user = {
//     username : "Nikhil",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

//  const chai = function(chai){
//     let username = "Nikhil"
//     console.log(this.username)
//  }


const chai = () =>{
    let username = "Nikhil"
    console.log(this.username)
}

chai()

// const addTwo = (num1+num2) =>{
//     return num1 +num2
// }
     
// const addTwo = (num1,num2) => num1 +num2
 
//  const addTwo = (num1,num2) => (num1 +num2)

//  const addTwo= (num1,num2) => ({username:"Hitesh"})

// console.log(addTwo(3,4));

const myArray = [2,5,3,7,8]

myArray.forEach(() => {})