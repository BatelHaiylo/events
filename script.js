// function alertFunc() {
//     alert("yo did it")
// }

// function printConsoleFunc() {
//     console.log("Batel fucking Haiylo")
// }

// function changeColor() {
//     var firstSpan = document.getElementById("spancolor")
//     firstSpan.style.color = "pink"
// }

// function changeH1Size() {
//     var secondH1 = document.getElementById("changedh1")
//     secondH1.style.fontSize = "10px"
// }

// function changeText(){
//     var firstH2 = document.getElementById("changedh2")
//     firstH2.innerText = "diffrent ONE"
// }

// function getUserName() {
//     var userName = prompt("please enter your name")
//     var h6 = document.getElementById("h6")

//     h6.innerText = userName
// }

// ניסיון 1
// window.body.onload = function(){

//     var date = new Date()
//     var h5 = document.createElement("h5")
//     document.body.append(h5)

//     if(date.getHours() < 12){
//         document.body.style.background = "yellow"
//         document.h5.innerText = "good day"
//     }
//     else{
//         document.body.style.background = "blue"
//         document.h5.innerText = "good evening"
//     }
// };

// ניסיון 2
// function getTimeAdjustedDisplay(){

//     var date = new Date()
//     document.createElement("h5")
//     body.append(h5)

//     if(date.getHours() < 12){
//         window.body.backgroundcolor = "yellow"
//         document.h5.innerText = "good day"
//     }
//     else{
//         window.body.backgroundcolor = "blue"
//         document.h5.innerText = "good evening"
//     }
// };

// ניסיון 3
// function getTimeAdjustedDisplay(){

//     var date = new Date()

//     if(date.getHours() < 12){
//         document.body.style.background = "yellow"
//         document.getElementById("changingText").innerText = "good day"
//     }
//     else{
//         document.body.style.background= "green"
//         document.getElementById("changingText").innerText = "good evening"
//     }
// };



// window.onload= function(){

//     var date = new Date()

//     if(date.getHours() < 12){
//         document.body.style.background = "yellow"
//         document.getElementById("changingText").innerText = "good day"
// }
//     else{
//         document.body.style.background= "blue"
//         document.getElementById("changingText").innerText = "good evening"
// }
// };


// window.onload= function(){
//     var userInput =+ prompt("please enter your age")
//     var message = document.createElement("p")
//     document.body.append(message)


//     if(userInput>18){
//         message.innerText ="welcome"
//         message.style.color = "red"
//     }
//     else{
//         message.innerText ="welcome"
//         message.style.color = "blue"
//     }
//     message.onmouseover = function(){
//         message.style.color = "green"
//     }
// };

// function lotto (){
//     var rndNum = Math.floor(Math.random()*57)
//     var userInputArr = []

//     var myB = document.createElement("button")
//     document.body.append(myB)
//     myB.innerText = "send"


//     for(i = 0; i<5; i++){
//         var userNum =+ prompt("gusse a number between 0-56")
//         if(userNum<57 && userNum >0){
//             userInputArr.push(userNum)
//         }
//         document.write("<h1>"+userInputArr+"</h1>")
//         myB.onclick = function(){
//             console.log(rndNum)
//         }       
//     }
// };
// lotto ()

// function loto1(){
//     var rndNum = Math.floor(Math.random()*57)

//     var aButton = document.createElement("button")
//     document.body.append(aButton)
//     aButton.innerText = "send"

//     var rangeNum = document.createElement("ol")
//     document.body.append(rangeNum)
//     rangeNum.style.textDecoration = "none"


//     for(var i = 0; i<5; i++){
//         var userNum =+ prompt("gusse a number between 0-56")
//             rangeNum.innerHTML +="<li>"+userNum+"</li>"

//             aButton.onclick = function(){
//                 document.body.innerHTML = "<p>"+rndNum+"<p>"
//             }
//     }
// }
// loto1()
  

var userNumbersArray = []

function mainFunc (){
    
    var lottoInpput = document.getElementById("user_input");
    var numbersFromUser = document.getElementById("nums_user");

    if(userNumbersArray.length <5){
        numbersFromUser.innerText += "number : "+lottoInpput.value + "\n";
        userNumbersArray.push(lottoInpput.value)
    }
    else{
        lottoInpput.disabled = true;
    }
}

function getAndPrintRandomNum (){

    var rndNum = Math.floor(Math.random() * 57);
    var rndH3 = document.getElementById("rnd_h3");
    rndH3.innerText += rndNum;

    for(var i = 0; i<userNumbersArray.length; i++){
        if(rndNum == userNumbersArray[i]){
            document.getElementById("result_text").innerText = "you win"
                return;
        }    
    }
    document.getElementById("result_text").innerText = "you lose"
}



