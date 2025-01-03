const clock = document.getElementById('clock')

// const = document.querySelector('#clock')

setInterval(function (){
  let date = new Date();
  // Console.log(date.toLocalTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);
