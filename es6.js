//es6 sum
// let x = 25;
// let y = 30;
// console.log(`the sum is ${x+y} . the end`);



// es6 string
// let name = "Ruhul Amin";
// let message = `i am ${name} and learning javascript`;
// console.log(message);



// math function
// const add = (x,y) => {
//     let sum = x+y;
//     console.log(sum);
// }
// add(50, 40);



// default parameters
// "use strict"
// function message(text = "hello this is default parameter"){
//     console.log(`${text}`);
// }
// message("I love js es6");



// rest parameters
// "use strict"
// function printNumbers(x,y, ...z){
//     console.log(`x= ${x}, y= ${y}, z= ${z}`);
// }
// printNumbers(40,33,67,67,345);



// spread operator
// function addNumbers(x,y,z){
//     return x + y + z;
// }

// let numbers = [1,2,3]
// console.log(addNumbers(...numbers))

// let numbers1 = [5,6, ...numbers, 7, ]
// console.log(numbers1)

// let p1 = {
//     name : "Ruhul Amin",
//     age : 26
// }

// let p2 = {
//     nationality : "Bangladesh",
//     occupation : "Student"
// }

// let p3 = {...p1, ...p2}
// console.log(p3);



// object literals
// function studentInfo (name, age){
//     return{
//         name,
//         age
//     }
// }
// console.log(studentInfo("Ruhul Amin", 26));



// object function
// let message = {
//     body(){
//         return `Hi i am object function`
//     }
// }
// console.log(message.body())


// for of loop
// const names = ["s1", "s2", "s3"]

// for (let name of names){
//     console.log(name)
// }



// for in loop
// const students = {
//     ID : 288,
//     name : "Ruhul Amin",
//     age : 27
// }

// for(let x in students){
//     console.log(`${x} : ${students[x]}`)
// }



//         for each function/loop
// let numbers = [10,20,30,40];
// numbers.forEach(function(x){
//     console.log(x)
// })


// let numbers = [10,20,40,50];
// let squareNumbers = []
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers);


// let numbers = [10, 20, 30, 40];
// numbers.forEach(function(x,index,arr){
//     arr[index] = x+5;
// })
// console.log(numbers)




// map function
// let numbers = [10,20,40,50];
// let squareNumbers = numbers.map(function(x){
//     return x*x;
// })
// console.log(squareNumbers);



// filter function
// var numbers = [20,89,3,8,45,34,22,5]
// var newNumbers = numbers.filter(function(x){
//     return x>20;
// })
// console.log(newNumbers);



// traditional function
// function display1 (){
//     console.log(`hi i am display1`)
// }
// display1();



// Arrow function
// const display2 = () => {
//     console.log(`hi i am display2`)
// }
// display2()



// traditional and arrow function how to return?
// function message1 (){
//     return `hi i am message 1`
// }

// const message2 = () => `hi i am message 2`

// console.log(message1());
// console.log(message2());



// traditional and arrow function how to pass parameter
// function add1(num1, num2){
//     return num1+num2;
// }

// const add2 = (num1,num2) => num1+num2;

// console.log(add1(10,20));
// console.log(add2(10,25));




// map function
// let numbers = [10,20,40,50];
// let squareNumbers = numbers.map(function(x){
//     return x*x;
// })
// console.log(squareNumbers);



// filter function
// var numbers = [20,89,3,8,45,34,22,5]
// var newNumbers = numbers.filter(function(x){
//     return x>20;
// })
// console.log(newNumbers);



// traditional function & arrow function
// var students = [
//     {
//         name: "Ruhul Amin",
//         ID: 76,
//         CGPA: 3.67
//     },
//     {
//         name: "Armina",
//         ID: 77,
//         CGPA: 2.68
//     },
//     {
//         name: "Sathy",
//         ID: 78,
//         CGPA: 3.69
//     },
//     {
//         name: "Zote",
//         ID: 79,
//         CGPA: 1.70
//     }
// ]

// function studentNames1(){
//     return students.filter(function(x){
//         return x.CGPA > 3
//     }).map(function(y){
//         return y.name;
//     });;
// }
// console.log(studentNames1());

// const studentNames2 = () => students.filter((x) => x.CGPA >3 ).map((y) => y.name);
// console.log(studentNames2());



// array destructuring
// let numbers = [10,20,30,40,50]
// let [num1, num2, num3, ...z] = numbers
// console.log(z);


// swap variables
// let a=10, b=20;
// [a,b] = [b,a]
// console.log(a)



// object destructuring
// const studentInfo = {
//     id: 49,
//     name: "Ruhul Amin",
//     cgpa: 3.67,
//     languages: {
//         native: "bangla",
//         beginer: "english"
//     }
// }

// const {id, name, cgpa, languages} = studentInfo
// console.log(name);
// console.log(id);
// console.log(cgpa);
// console.log(languages.native);



// destructuring function parameters
// const studentInfo = ({id, name}) => {
//     console.log(`${id}, ${name}`);
// }

// const student = {
//     id: 2923,
//     name: "Ruhul Amin"
// }
// studentInfo(student);



// find() and findIndex methode
// var students = [
//     {
//         name: "Sathy",
//         ID: 78,
//         CGPA: 2.6
//     },
//     {
//         name: "Ruhul Amin",
//         ID: 76,
//         CGPA: 2.67
//     },
//     {
//         name: "Armina",
//         ID: 77,
//         CGPA: 2.68
//     },
//     {
//         name: "Zote",
//         ID: 79,
//         CGPA: 6.70
//     }
// ]

// console.log(students.find(x => x.CGPA>3));
// console.log(students.findIndex(x => x.CGPA>3));


// string methods
// const message = "Today is Friday";
// console.log(message.startsWith("Today"));
// console.log(message.endsWith("Friday"));
// console.log(message.includes("Friday"));



// es6 modules
// import {text, setText} from "./myModule.js";

// console.log(text);
// setText("good bye from es6");
// console.log(text);



// //synchronous vs asynchronous
// const taskOne = () => {
//     console.log("Task1");
// }
// const taskTwo = () => {
//     setTimeout(() => {
//         console.log("Task2 dataloading");
//     }, 2000)
// }
// const taskThree = () => {
//     console.log("Task3");
// }
// const taskFour = () => {
//     console.log("Task4");
// }
// const taskFive = () => {
//     console.log("Task5");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();


// //higherOrderFunction
// function square (x){
//     console.log(`square of ${x} = ${x*x}`)
// }
// square(5);
// // const y = square
// // y(5)

// function higherOrderFunction (num, callback){
//     callback(num);
// }
// higherOrderFunction(6, square)



// //higherOrderFunction use
// const taskOne = (callback) => {
//     console.log("Task1");
//     callback();
// }
// const taskTwo = (callback) => {
//     setTimeout(() => {
//         console.log("Task2 dataloading");
//         callback();
//     }, 3000)
// }
// const taskThree = (callback) => {
//     console.log("Task3");
//     callback();
// }
// const taskFour = () => {
//     console.log("Task4");
// }

// taskOne(() => {
//     taskTwo(() => {
//         taskThree(() => {
//             taskFour();
//         });
//     });
// });



// //how to create promise
// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("completed promise 1");
//     }else{
//         reject(new Error("not completed 1"));
//     }
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve("completed promise 2")
// })


// //how to promise use
// promise1
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err.message);
// })

// promise2
// .then((res) => {
//     console.log(res);
// })

// //single promise
// Promise.all([promise1, promise2])
// .then(([res1, res2]) => console.log(res1,res2));
// console.log("end");



// // promise race
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//         resolve("completed promise 1");
//    },2000)
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("completed promise 2")
//     },1000)
// })

// Promise.race([promise1, promise2])
// .then((res) => console.log(res));

// console.log("end");



//promise chaining
// console.log("welcome");

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve(`task 1 is completed`)
//     })
// }
// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`task 2 is completed`)
//         },2000)
//     })
// }
// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         reject(`task 3 is not completed`)
//     })
// }
// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve(`task 4 is completed`)
//     })
// }

// // taskOne()
// // .then((res) => console.log(res))
// // .then(taskTwo)
// // .then((res) => console.log(res))
// // .then(taskThree)
// // .then((res) => console.log(res))
// // .then(taskFour)
// // .then((res) => console.log(res))
// // .then((err) => console.log(err))

// //Or ES7
// async function callAllTasks(){
//     try{
//     const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
//     }catch(e){
//         console.log(e)
//     }
// }

// callAllTasks();

// console.log("bye");




















