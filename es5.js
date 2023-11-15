// var num = 23;
// num = toString(num);
// console.log(typeof(num));

// var num = 2.5598;
// console.log(num.toFixed(1));
//console.log(num.toPrecision(5));

// var text = "Bangladesh";
// document.write(text.charAt(3));

// var text1 = "Bangladesh";
// text2 = "is a beautiful country";
// document.write(text1.concat(text2));

// var text1 = "Bangladesh";
// var text = text1.slice(0,3);
// document.write(text);

// var firstName = prompt("Your First Name: ");
// var lastName = prompt("Your Last Name:")
// var fullName = firstName + lastName;
// console.log("My Name is "  + fullName.toUpperCase() +  " and Number of character " + fullName.length);

// Mathmattics Operation
// var num1 = prompt("Enter 1st Number :");
// var num2 = prompt("Enter 2nd Number :");
// num1 = parseInt(num1,10);
// num2 = parseInt(num2,10);
// var results = num1 + num2;
// document.write(num1 + " + " +num2 + " = " + results + "<br/>");
// var results = num1 - num2;
// document.write(num1 + " - " +num2 + " = " + results + "<br/>");
// var results = num1 * num2;
// document.write(num1 + " * " +num2 + " = " + results + "<br/>");
// var results = num1 / num2;
// document.write(num1 + " / " +num2 + " = " + results + "<br/>");
// var results = num1 % num2;
// document.write(num1 + " % " +num2 + " = " + results + "<br/>");

// var base =parseFloat(prompt("Enter Base"));
// var height = parseFloat(prompt("Enter Height"));
// var triangle = (base * height) / 2;
// document.write("Area = " + triangle);

// var farn = parseFloat(prompt("Enter Fahrenheight"));
// var cels = (farn-32) * (5/9);
// document.write("Celcius = " + cels+"C");

// var hrs = parseFloat(prompt("Enter Hour"));
// var min = hrs * 60;
// document.write(hrs +" Hours = " + min + " Minutes");

// var min = parseFloat(prompt("Enter Minute"));
// var sec = min * 60;
// document.write(min +" Minute = " + sec + " Seconds");

//Grade System
// var num = prompt("Enter Your Marks");
// if (num>100 || num<0)
// document.write("Your Grade is " + "(" + num + ")" + " = Invalid ");
// else if (num>=80 && num<=100)
// document.write("Your Grade is " + "(" + num + ")" + " = A+ ");
// else if (num>=70 && num<=79)
// document.write("Your Grade is " + "(" + num + ")" + " = A ");
// else if (num>=60 && num<=69)
// document.write("Your Grade is " + "(" + num + ")" + " = A- ");
// else if (num>=50 && num<=59)
// document.write("Your Grade is " + "(" + num + ")" + " = B+ ");
// else if (num>=40 && num<=49)
// document.write("Your Grade is " + "(" + num + ")" + " = B- ");
// else if (num>=33 && num<=39)
// document.write("Your Grade is " + "(" + num + ")" + " = D ");
// else
// document.write("Your Grade is " + "(" + num + ")" + " = Fail ");

//Large Number
// var num1 = prompt("Enter Number 1 :");
// var num2 = prompt("Enter Number 2 :");
// var num3 = prompt("Enter Number 3 :");

// if (num1>num2 && num1>num3)
// document.write("Large Number = " + num1);

// else if (num2>num1 && num2>num3)
// document.write("Large Number = " + num2);

// else
// document.write("Large Number = " + num3);

//Vowel Consonent
// var letter = prompt ("Enter a Letter : ");

// letter = letter.toLowerCase();

// if (letter =="a" || letter =="e" || letter=="i" || letter=="o" || letter=="u")
// document.write("Vowel");

// else
// document.write("Consonent");

//0 to Zero
// var digit = prompt("Enter your digit : ")
// digit = digit.toLowerCase();
// switch(digit){
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//     case "4":
//         document.write("Four");
//         break;
//     case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     default:
//         document.write("Not a digit")
// }

//Vowel Consonant
// var letter = prompt ("Enter a Letter : ");

// letter = letter.toLowerCase();
// switch(letter){
//    case "a":
//    case "e":
//    case "i":
//    case "o":
//    case "u":
//    document.write("Vowel");
//    break;
//    default:
//    document.write("Consonant");
// }

//for loop 1 to 100 setial
// for (var x = 1; x <= 100; x = x + 1)
// {
//     document.write(" " + x );
// }

//while loop 1 to 100 serial
// var x = 1;
// while (x<=100)
// {
//     document.write(" " + x);
//     x++
// }

//for loop 100 to 1 serial
// for (var x = 100; x>= 1; x = x - 1)
// {
//     document.write(" " + x );
// }

//while loop 100 to 1 serial
// var x = 100;
// while (x>=1)
// {
//     document.write(" " + x);
//     x = x - 1
// }

//for loop m to n sum
// var m = parseInt(prompt("Enter 1st Number : "));
// var n = parseInt(prompt("Enter Last Number : "));
// var sum = 0;
// for (var x = m; x <=n; x = x + 1)
// {
// sum = sum + x
// }
// document.write("sum = " + sum);

//while loop m to n sum
// var m = parseInt(prompt("Enter First Number : "));
// var n = parseInt(prompt("Enter Last Number : "));
// var sum = 0
// var x = m;
// while(x<=n)
// {
//     sum = sum + x
//     x = x + 1
// }
// document.write("sum = " + sum);

//do while loop
// var x = 1;
// do{
//     document.write(" " + x);
//     x = x + 1
// } while(x <=10)

// for (x=1; x<=100; x++){
//     document.write(" " + x);
//     if(x==10){
//         break;
//     }
// }

// for (x=1; x<=100; x++){
//     if(x % 2!=0){
//         continue;
//     }
//     document.write(" " + x);
// }

// for (x=1; x<=100; x++){
//     if(x % 2==0){
//         continue;
//     }
//     document.write(" " + x);
// }

// var number = prompt("Enter your number : ")
// var results = number>0 ? ("positive") : number<0 ?("negative"): "zero";
// document.write(results);

// function square(num1, num2){
//     var results = num1 * num2
//     document.write("sum = " + results + "<br/>");
// }
// square(
//     prompt("Enter number 1"),
//     prompt("Enter number 2")
// );

// function addition(num1, num2){
//     var results = num1 + num2
//     document.write("sum = " + results + "<br/>");
// }
// addition(
//     parseInt(prompt("Enter number 1")),
//     parseInt(prompt("Enter number 2"))
// );

// function subtraction(num1, num2){
//     var results = num1 - num2
//     document.write("sum = " + results + "<br/>");
// }
// subtraction(
//     parseInt(prompt("Enter number 1")),
//     parseInt(prompt("Enter number 2"))
// );

//Function Expression
// var display2 = function displayMessage(msg){
//     document.write(msg);
// };
// display2("hi");

//Array push & pop by alphabet sort
//var names = ["Ruhul", "Amin", "Sathy", "Armina"];
//var shortedNames = names.sort();
//var shortedNames = names.reverse();
//names.push("Akter"); //opposite of unshift
//names.pop();         //opposite of shift
//console.log(names.length);
//console.log(shortedNames);

//Array by numbers sort
// var numbers = [4,3,7,5,6,9,8];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);

//Array concat
// var country1 = ["BD", "IND"];
// var country2 = ["Nepal", "Bhutan"];
// var country = country1.concat(country2);

// console.log(country)

//Array sum input by user
// var num = new Array();

// for(var i = 0; i<5; i++){
//     num[i] = parseInt(prompt("Enter a Number : "));
// }

// var sum = 0;

// for (var i = 0; i<5; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }

// console.log("sum = " + sum);

//Array adding splice
// var names = ["Ruhul", "Amin", "Sathy", "Armina"];

// names.splice(2,0, "Karim", "Rahim");
// console.log(names);

//Array cutting splice
// var names = ["Ruhul", "Amin", "Sathy", "Armina"];

// names.splice(2,1);
// console.log(names);

//1D Array
// console.clear();
// function highestScore(scores){
//     let max = scores[0];
//     for(let x=1; x<scores.length; x++){
//         if(max < scores[x]){
//             max = scores[x];
//         }
//     }
//     return max;
// }

// let scores = [28,34,3,5,90,40,34];
// let maxScore = highestScore(scores);
// console.log(maxScore);

//2D Array
// console.clear();
// function highestRunScorer(playerInfo){
//     let highestScorer = playerInfo[0][0];
//     let highestScore = playerInfo[0][1];
//     for(let x=1; x<playerInfo.length; x++){
//         if(highestScore < playerInfo[x][1]){
//             highestScore = playerInfo[x][1];
//             highestScorer = playerInfo[x][0];
//         }
//     }
//     return highestScorer;

// }

// let playerInfo = [
//     ["Ashraful", 95],
//     ["Shakib", 666],
//     ["Rahim",99],
//     ["Tamim",67]
// ];
// let name = highestRunScorer(playerInfo);
// console.log(name);

// Object Constructor
// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }
// const student1 = new Student("Ruhul Amin",26,3.67,["Bangali","Hindi"]);
// const student2 = new Student("Armina Sathy",20,3.65,["Bangali","Hindi"]);
// const student3 = new Student("Karim",25,3.6,["Bangali","Hindi"]);

// student1.display();
// student2.display();
// student3.display();

//GuessNumber
// var numOfWon = 0;
// var numOfLost = 0;

// for(var i=1; i<=5; i++){
//     const guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

//     const randomNumber = Math.floor(Math.random()*5)+1;

//     if(guessNumber==randomNumber){
//     console.log("You have won");
//     numOfWon++;
//     }
//     else{
//     console.log("You have lost. Random number was " + randomNumber);
//     numOfLost++;
//     }
// }

// document.write("Number of won = " + numOfWon + "<br>");
// document.write("Number of lost = " + numOfLost + "<br>");

// var mypara = document.querySelector("#myImage")
// function myPicture1 (){
//     mypara.src = "images/r1.jpg";
// }

// function myPicture2 (){
//     mypara.src = "images/r2.jpg";
// }

//image slider
//image slider html code
{
  /* <button onclick="prev()">Prev</button>
    <img src="images/r1.jpg" alt="" height="300" width="300">
    <button onclick="next()">Next</button> */
}

// var photos = ["images/r1.jpg","images/r2.jpg","images/r3.jpg","images/r4.jpg"];
// var imageTag = document.querySelector("img");

// var count = 0;
// function next(){
//     count++;
//     if(count >= photos.length){
//         count = 0;
//         imageTag.src = photos[count];
//     }else{
//         imageTag.src = photos[count];
//     }
//     imageTag.src = photos[count];
// }

// function prev(){
//     count--;
//     if(count < 0 ){
//         count = photos.length - 1;
//         imageTag.src = photos[count];
//     }else{
//         imageTag.src = photos[count];
//     }
//     imageTag.src = photos[count];
// }

//Dynamicaly css add and remove
// html code
{
  /* <p id="para">This is a paragraph</p>
    <button onclick="addStyle()">add style</button>
    <button onclick="removeStyle()">remove style</button> */
}

//css code
// .para-style{
//     color: red;
//     font-size: 3rem;
//     font-weight: bold;
//     font-style: italic;
//     background-color: yellow;
// }

// var myVar = document.querySelector("#para");
// function addStyle(){
//    myVar.classList.add("para-style");
// }

// function removeStyle(){
//    myVar.classList.remove("para-style");
// }

//event listener
// var myVar = document.querySelector("h1")

// myVar.addEventListener("mouseover",function(){

//     myVar.classList.add("my-style");
// });

// myVar.addEventListener("mouseout",function(){

//     myVar.classList.remove("my-style");
// });

//event listener multiple elements
//html code
// <h1>You have not click any button</h1>
// <button class="myButton">button 1</button>
// <button class="myButton">button 2</button>
// <button class="myButton">button 3</button>

// for(var i = 0; i<3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is clicked ";
//     });
// };

//play adio with animation
//html code
{
  /* <button class="myButton a">a</button>
    <button class="myButton b">b</button>
    <button class="myButton c">c</button> */
}

//css code
// .myButton{
//     background-color: green;
//     font-size: 2rem;
//     font-style: italic;
//     margin-left: 20px;
//     height: 50px;
//     width: 80px;
//     text-align: center;
// }

// .anim{
//     box-shadow: 0 15px 18px 0 tomato;
//     opacity: 0.5;
// }

// for(var i = 0; i < 3; i++) {
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//         playAnimation(text);
//     });
// }

// function audioPlay (text){
//     switch(text){
//         case "a":
//             var audio = new Audio ("audio/a.mp3");
//             audio.play();
//             break;

//         case "b":
//             var audio = new Audio ("audio/b.mp3");
//             audio.play();
//             break;
//         case "c":
//             var audio = new Audio ("audio/c.mp3");
//             audio.play();
//             break;
//     }

// }

// function playAnimation(text){
//     var buttonSelect = document.querySelector("." + text);
//     buttonSelect.classList.add("anim");

//     setTimeout(function(){
//         buttonSelect.classList.remove("anim");

//     },1000);

// }

//key press listener
{
  /* <textarea cols="30" rows="10"></textarea>
<p>demo</p> */
}

// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function(event){
//   count++;
//   var text = event.key;

//   document.querySelector("p").innerHTML = "Your character is = " + count;
// });

//change dom event (input)
//html code
//  <label for="name">Name:
//         <input type="text" class="name-input" id="name-input" name="name">
//     </label>

// console.clear();
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandler)

// function changeHandler (e){
//     //console.log(e);
//     //console.log(e.type);
//     //console.log(e.target);
//     //console.log(e.target.id);
//     //console.log(e.target.className);
//     console.log(e.target.value);

// }

//change dom event (checkbox)
// html code
{
  /* <div>
      <h3>Programing Language</h3>
        <label for="program">C
        <input type="checkbox" name="program" value="c">
        </label>
        <label for="java">Java
        <input type="checkbox" name="program" value="java">
        </label>
   </div>
<br> */
}

// const programs = document.querySelectorAll("input[name=program]");
// Array.from(programs).map((program) =>{
//     program.addEventListener("change", programHandler)
// })

// function programHandler (e){
//     if(e.target.checked){
//         console.log(e.target.value);
//     }
// }

//change dom event (select)
// html code
{
  /* <label for="department">Department: </label>
   <select name="department" id="department">
     <option value="eee">EEE</option>
     <option value="cse">CSE</option>
     <option value="me">ME</option>
   </select> */
}

// const department = document.querySelector("#department");
// department.addEventListener("change", handleDepartment);

// function handleDepartment (e){
//     console.log(e.target.value);
// }

//submit dom event (form)
//html code
{
  /* <form action="">
        <label for="name">Name:
            <input type="text" id="name" name="name" autofocus>
        </label><br><br>

        <label for="email">Email:
            <input type="email" id="email" name="email" required>
        </label><br><br>

        <label for="password">Password:
            <input type="password" id="password" name="password" required minlength="4" maxlength="8">
        </label><br><br>
        <input type="submit" value="signup">
    </form> */
}

// const form = document.querySelector("form");
// const name = form.querySelector("#name");
// const email = form.querySelector("#email");
// const password = form.querySelector("#password");

// form.addEventListener("submit", formHandler);

// function formHandler(e){
//     e.preventDefault();

//     const userInfo = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//     };

//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// }

//video dom event
// html code
{
  /* <video width="400" controls>
    <source src="video/v.mp4" type="video/mp4">
</video> */
}

// const video = document.querySelector("video");
// video.addEventListener("canplay", function(){
//     console.log("canplay")
// });

// video.addEventListener("play", function(){
//     console.log("play")
// });

// video.addEventListener("playing", function(){
//     console.log("playing")
// });

// video.addEventListener("pause", function(){
//     console.log("pause")
// });

// video.addEventListener("ended", function(){
//     console.log("Thanks for watching")
// });

// video.addEventListener("volumechange", function(){
//     console.log("volumechange")
// });

//load unload event
// window.addEventListener("load", function(){
//     console.log("load");
// });

// window.addEventListener("unload", function(){
//     console.log("unload");
// });

//scroll width height event
// window.addEventListener("scroll", function(){
//     console.log("scroll")
// });

// window.addEventListener("resize", function(){
//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log(`width: ${width}, height: ${height}`);
// });

//toggle event
// html code
{
  /* <details>
    <summary>Ruhul Amin</summary>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente aperiam voluptas, esse laudantium atque dolorem explicabo reiciendis cumque aspernatur.</p>
</details> */
}

// const details = document.querySelector("details");

// details.addEventListener("toggle", function(e){
//     console.log(e.target.open);
// })

//mouse event
// const div = document.querySelector("div");

// div.addEventListener("click", function(e){
//     console.log(e.target.innerText);
// });

// div.addEventListener("dblclick", function(){
//     console.log("double click");
// });

// div.addEventListener("mouseup", function(){
//     console.log("mouseup");
// });

// div.addEventListener("mousedown", function(){
//     console.log("mousedown");
// });

// div.addEventListener("mouseenter", function(){
//     console.log("mouseenter");
// });

// div.addEventListener("mouseleave", function(){
//     console.log("mouseleave");
// });

// div.addEventListener("mousemove", function(e){
//     //console.log("mousemove");
//     //console.log("ClientX = " + e.clientX + " ClientY = " + e.clientY);

// });

// div.addEventListener("mouseover", function(){
//     console.log("mouseover");
// });

//keyboard event
// const textarea = document.querySelector("textarea");

// textarea.addEventListener("keydown", function(e){
//     if(e.repeat){
//         alert("do not repeat");
//     }
//  })

// textarea.addEventListener("keypress", function(){
//     console.log("keypress");
// })

// textarea.addEventListener("keyup", function(e){
//     if(e.shiftKey){
//         console.log("shiftkey+"+e.key);

//     }
// });

//focus event
// const input = document.querySelector("input");

// input.addEventListener("blur", function(e){
//     input.style.backgroundColor = "yellow";
//     input.style.padding = "0";
//     input.value = e.target.value.toUpperCase();
//     console.log(input.value);
// });

// input.addEventListener("focus", function(){
//     input.style.backgroundColor = "orange";
//     input.style.padding = "1rem";
// });

// input.addEventListener("focusin", function(){
//     console.log("focusin");
// });

// input.addEventListener("focusout", function(){
//     console.log("focusout");
// });

//clipboard event
// const input = document.querySelector("input");
// const p = document.querySelector("p");

// input.addEventListener("copy", function(){
//     p.innerText = "you have copied"
// });

// input.addEventListener("cut", function(){
//     p.innerText = "you have cut"
// });

// input.addEventListener("paste", function(){
//     p.innerText = "you have paste"
// });

//drug event
// html code
{
  /* <div id="div1"></div>
    <p id="drag1" draggable="true">hi i am Ruhul Amin</p> */
}

// const div = document.querySelector("div");
// const p = document.querySelector("p");

// p.addEventListener("dragstart", function(e){
//     e.dataTransfer.setData("Text", e.target.id);
// });

// div.addEventListener("dragover", function(e){
//     e.preventDefault();
// });

// div.addEventListener("drop", function(e){
//     let id = e.dataTransfer.getData("Text");
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// });

//BOM Location Object
// html code
// <h1>BOM</h1>
// <div class="location-div">
//     <p></p>
//     <p></p>
//     <p></p>
//     <p></p>
//     <p></p>
// </div>

// <button id="visit-button">visit my website</button>

// console.clear();
// const locationDiv =  document.querySelector(".location-div");

// const p1 = locationDiv.children[0];
// p1.textContent = location.href;

// const p2 = locationDiv.children[1];
// p2.textContent = location.protocol;

// const p3 = locationDiv.children[2];
// p3.textContent = location.hostname;

// const p4 = locationDiv.children[3];
// p4.textContent = location.port;

// const p5 = locationDiv.children[4];
// p5.textContent = location.pathname;

// const visitButton = document.getElementById("visit-button");
// visitButton.addEventListener("click", function(){
//     location.assign("https://www.google.com");
// });

//BOM confirm object
// function deleteSomething(){
//     const value = confirm("Are you sure to delete your message?");

//     if (value){
//       console.log("deleted");
//     }else{
//       console.log("Not deleted");
//     }
// }
// deleteSomething();

//BOM Prompt Object
// function welcomeMessage(){
//     const h1 = document.createElement("h1");
//     let text;

//     const name = prompt("Enter your name: ");
//     if(name == null || name == ""){
//         text = "no name found"
//     }else{
//         text = "welcome " + name;
//     }

//     const textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }

// welcomeMessage();

// const saveButton = document.querySelector(".save-button");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);
// function saveUser(){
//     message.textContent = "user registration successful";
//     setTimeout(()=>{
//         message.textContent = ""
//     }, 2000)
// }

// const saveButton = document.querySelector(".save-button");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", displayCount);

// function displayCount (){
//     let count = 1;
//     message.textContent = count;

//     setInterval(()=>{
//         count++;
//         message.textContent = count;
//     }, 2000)
// }

// current time to display
//html code
{
  /* <button class="save-button">Save</button>
<p class="message"></p> */
}

// const saveButton = document.querySelector(".save-button");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", startClock);

// function startClock(){
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     minutes = formateTime(minutes);
//     seconds = formateTime(seconds);

//     let time = hours + ":" + minutes + ":" + seconds;
//     message.textContent = time;

//     setInterval(startClock, 1000);
// }

// function formateTime(value){
//     if(value<10){
//         value = "0" + value;
//     }
//     return value;
// }

// try{
//     alert("hi everyone");
//     alert(x);
// }catch(err){
//     console.log(err);
// }finally{
//     alert("bye everyone");
// }

//using throw same is console.log
//html code
{
  /* <p>enter a number between 5 to 10</p>
<input type="text" id="numTextfield">
<button id="checkButton">check</button> */
}

// document.querySelector("#checkButton").addEventListener("click", function(){

//     const num = document.querySelector("#numTextfield").value;

//     try{
//         if(num < 5){
//             throw "input is too low"
//         }else if(num > 10){
//             throw "input is too high"
//         }else{
//             throw "ok"
//         }

//     }catch(err){
//         console.log(err);
//     }
// })

//<canvas id="myCanvas" width="400px" height="300px"></canvas>
// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");

// ctx.lineWidth=3;
// ctx.strokeStyle = "black"
// ctx.strokeRect(10,10,380,280);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,376,276);

// const centerX = c.width /2;
// const centerY = c.height /2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

//ES5 End
