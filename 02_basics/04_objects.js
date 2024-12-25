// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = 1,
tinderUser.name = "Nicky"
tinderUser.isLoggedIn = true

console.log(tinderUser)

const regularUser = {
    email: "nik@gmail.com",
    fullname: 
    {
        userFullName:
        {
          Firstname: "Nikhil",
          Lastname: "Choukikar"
        }
    }
}

console.log(regularUser.fullname.userFullName.Firstname)  // You can use only fullname

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1,obj2}
// const obj4 = Object.assign({}, obj1,obj2,obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4)

const users = [
    {
        id: 1,
        email: "nik@gmail.com"
    },
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "i@gmail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))