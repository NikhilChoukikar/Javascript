//  const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//     console.log(val)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

//  function printMe(item){
//      console.log(item)
//  }

// coding.forEach(printMe)

//  coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
//  })

 const myCoding = [
    {
        languageName: "javascript",
        launguageFileName:"js"
    },
    {
        languageName: "java",
        launguageFileName:"js"
    },
    {
        languageName: "python",
        launguageFileName:"js"
    }
 ]

  myCoding.forEach( (item => {
     console.log(item.languageName)
  }))


