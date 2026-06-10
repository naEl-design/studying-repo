//  

// setTimeout( function (){
//   hEl.textContent = new Date() . toLocaleString()
// },10)


// setTimeout(function() {
//     hEl.textContent = "finished"
    
// }, 1000)

// let count = 0
// setInterval( function(){
//     count ++
//     console.log(count);
    
// },1000)
// setTimeout(function(){
//     console.log("Welcome to javascript");
    
// },5000)
//   let count = 0
//  let timer = setInterval(function(){
//     count++
//     console.log(count);
//     if(count === 10){
//         clearInterval(timer)
      
//     }
    
// },1000)

// let pEl = document.getElementById("par")
// let btnA = document.getElementById("start")
// let btnB  = document.getElementById("stop")
// let count  = 0
// let timer = null

// btnA.addEventListener("click", function(){
//     if( timer !== null){
//         return
//     }
//       timer = setInterval( function(){
//         count++
//     pEl.textContent = `${count}`
//     }, 1000)
// })
// btnB.addEventListener("click", function(){
//     clearInterval(timer)
// })

// let count = 1
// setInterval(() =>{
//     console.log(count);
//    count ++   
// })
// let count = 0;

// let timer = setInterval(() => {
//     count++;
//      console.log(count);

//     if (count === 5) {
//         clearInterval(timer);
//     }
   
// }, 1000);
//  let count = 0;
// let timer;

// btnA.addEventListener("click", () => {
//     timer = setInterval(() => {
//         count++;
//         console.log(count);
//     }, 1000);
// });
// let hEl = document.querySelector("h1")
//  let timer = 4
//  let times = setInterval(function() {
//      let minutes = Math.trunc(timer / 60)
//  let seconds = timer % 60
//  timer --
//   hEl.textContent = `${minutes}:0${seconds}`

//   if(timer === -1){
//     alert("submit the time has arrived")
//     clearInterval(times)
//   }
//  },1000)
// 
// let hrs = document.querySelector("h1")

// // setInterval( () =>{
// //     hrs.textContent = new Date() .toLocaleString()
// // },1000)


// let time = 400


//  const timer = setInterval(function() {
//     if( time === -1){
//         alert("the quiz has endend")
//         clearInterval(timer)
//         return
        
//     }
//     time --

// let minutes = Math.trunc(time / 60)
// let second = time % 60

// hrs.innerHTML = `${minutes}:${second}`

// }, 1000);   
// function greet(){
//     console.log("hello");
    
// }
// let myFunction = greet
// myFunction()

// const arr = [
//     {firstname: "nael",  age: 21},
//     {firstname: "shingiro",  age: 20},
//     {firstname: "naella",  age: 11}

// ]
//  const arra1 = arr.forEach(function (obj, i, arr){
//     // console.log(obj)
//     // console.log(i);
//     // console.log(arr);
    
    
// })
// console.log(arra1);

// const newArr = arr.map(function (obj, i, arr){
//     return 1
// })
// console.log(newArr);
// const arr2 = [1, 2, 3, 4, 5, 6]
// const nael  = arr2.map(function ( num) {
//     return num * num
// })
// console.log( nael )

// let time = 4
//  setInterval(function() {
//     time--
//     if(time === -1){
//         alert("THe Quiz has endend")
//         clearInterval(time)
//         return  
//     }
//     let minutes = Math.trunc(time / 60)
// let second = time % 60
// hrs.innerHTML = `${minutes}: ${second}`
//  }, 1000)


// let realButton = document.getElementById("btn")

// let count = localStorage.getItem("click")
// realButton.addEventListener("click", function(){
//     count ++
//     realButton.innerHTML = `You clicked ${count} time`
//     localStorage.setItem( "clicked",count)
// })


// let btnA = document.getElementById("start")
// let btnB = document.getElementById("stop")
// let pEr = document.getElementById("par")

// let count = 0
// let timer = null
// btnA.addEventListener("click", function() {
//   if(timer !== null){
//       return
//     }
//   timer = setInterval(function (){
    
//     count++
//     par.textContent = `${count}`
//     localStorage.setItem("count", count)
//   },1000)
// })
// btnB.addEventListener("click", function(){

//      clearInterval(timer)
//      timer = null
 
// })

//     let button = document.getElementById("Click");
//    let reset = document.getElementById("reset")


//     let count = localStorage.getItem("clicked");
   
//        if(count === null){
//             count = 0
//         }
//         button.innerText = `Clicked ${count} times`
//     button.addEventListener("click", function() {
       
//         count++;
//         button.innerText = `Clicked ${count} times`;
//         localStorage.setItem("clicked", count)
      
//     });

//     reset.addEventListener("click", function(){
//         count = ""
//         button.innerText = ` Click`
         
//     })


// const money = [1000, 3000, -2000, 100, -300, 400]

// money.forEach( function( value){
// console.log(money)
// })

// const deposit = money.filter(function(value){
//    if(value <0){
//     return value
//    }
// })
// console.log(deposit);

// const interstDeposits = deposit.map(function(value){
//     return value * 12
// })

// console.log(interstDeposits);

// const myGrades = [ 25, 50, 12, 76, 80, 100]
// console.log(myGrades);
// const lowerGrade = myGrades.filter(function(value){
//     if(value <= 50) return value
// })
// console.log(lowerGrade);
// const upperGrade = myGrades.filter(function(value){
//     if(value > 50) return value
// })
// console.log(upperGrade);

// const interested = lowerGrade.map( function(value){
//     return value + " " + "impove"
// }) 
// console.log(interested);
// const internal = upperGrade.map(function (value){
//     return value + " " + "conglatuation"
// }) 

// console.log(internal);

// const letters = ["a", "s", "d", "f"]
// console.log(letters.sort());

// const numbers = [10, 10, 8, 7]
// numbers.sort(function (a, b){
//     if(a > b) return 1
//     else return -1
    
// })

//ascending order
// numbers.sort( (a,b) => a - b)

//descending order
// numbers.sort( (a,b) => b - a)

// console.log(numbers);

// const arr = [1, 3, 2, 5]
// const arr1 = [...arr]

// console.log(arr1.sort ( (a,b) => a-b) );
// console.log(arr);
// console.log(arr.slice(0, -1));

// const arr3 = [1,2,3,4,5,6]
// arr3.splice(0,3, 30, 40)
//  console.log([1,2].indexOf(1));

// const firstNames = "Lizito" 

// console.log(firstNames.replace("L", "m"));
// console.log(firstNames.split());

// try{
//     vdvcvdv
// }
// catch(err){
//     console.log(err);
    
// }
// finally{
//     console.log("dkcksck")
// }
// console.log("jas");

// console.log(window);
// console.log(window.confirm("are you gay"));
//? Timers( setTimeout and setInterval)

// let pEl = document.getElementById("head")
// let par = document.querySelector("button")
// let timer = 34
// setInterval(function(){
//     let minutes = Math.trunc(timer / 60)
//     let seconds = timer % 60
//     timer --

//     pEl.innerHTML = `${minutes}: ${seconds}`

// },1000)

// setInterval(function(){
//     pEl.innerText = new Date().toLocaleString()
// },1000)
// let time = 1123

// setInterval(function(){
//     let minutes = Math.trunc(time / 60)
    
//     let seconds = time % 60
//     time --
//     pEl.textContent = `${minutes} : ${seconds}`
// },1000)

// setInterval(function(){
//     par.textContent = new Date().toLocaleString()
// })

let arr = ["Mango", "Banana", "Orange", "Apple"]
let number = [2, 5, 7, 1, 10]
//? Find Array Method

// let arr1 = number.find(function(number){
//     return number >3
// })
// console.log(arr1);

  //? Slice Array Method

// let result = number.slice(1,4)
// console.log(result);

//!Splice Array Method

// arr.splice(1,2, "cocombre", "kinazi", "kitoke")
// console.log(arr);

//!Map Array method

// let doubled = number.map( (number) => { return number%2})
// console.log(doubled);

//! Filter

// let even = number.filter( (number) => {
//     return number % 2 === 0
// })
// console.log(even);
 
//? ForEach Array Method

// arr.forEach(function(arr){
//     console.log(arr);
    
// })

//!callback hell
console.log(" callback is when the function is been called without calling it");


// setTimeout(function(){
//    console.log("i will run after 1 second");
//    setTimeout(function(){
//    console.log("i will run after 2 second");
//    setTimeout(function(){
//    console.log("i will run after 3 second");
//    setTimeout(function(){
//    console.log("i will run after 4 second");
//    setTimeout(function(){
//    console.log("i will run after 5 second");
//    setTimeout(function(){
//    console.log("i will run after 6 second");
   
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)
// },1000)

// setTimeout( () =>{
//   console.log("i will learn after 3 second");
  
// },3000)

//! promisfying(promise)

console.log(" then is used to resolve promises /// catch is used in reject promises and an occured error");


// Promise.resolve("i am fulfilling").then(function(rest){
//   console.log(rest);
  
// })
// Promise.reject(("i have error")).catch(function(rej){
//   console.log(rej);
  
// })
console.log("geolocation help to ask the use if he allowed to get the location");


// window.navigator.geolocation.getCurrentPosition(
//    function(pos){
//     console.log(pos);
    
//    },
//    function(err){
//     console.log(err);
    
//    }
// )

// function promisfyingGeoLocation(){
//   return new Promise(function(resolve,reject){
//     navigator.geolocation.getCurrentPosition(resolve,reject)
//   })
// }
// promisfyingGeoLocation()
// .then(function(pos){
//   console.log(pos);
  
// })
// .catch(function(err){
//   console.log(err);
  
// })

// console.log("fetch function help to fetch data from external services and this fetch return a promise that we will use and concium");
// console.log("return .json help have access to the data from the API");
// console.log("the promise that the fetch function returns it will never be rejected unless you removed the internet");
  // console.log("create and throw an error.");
  



// const URL = 'https://restcountries.com/v3.1/name/rwanda'
// fetch(URL)
//  .then((pos) => {
//   if(!pos.ok) throw new Error("something went wrong")
//    return pos.json()
//  })
// .then((okay) => {
//   console.log(okay);
  
// })
// .catch((err) =>{
//   console.log(`📛 ${err}`);
  
// })

// async function fetchData(){
//   const responsive = await fetch(URL)
//   console.log(responsive);
  
//   const data = await responsive.json()
//   console.log(data);
  
// }
// fetchData()
