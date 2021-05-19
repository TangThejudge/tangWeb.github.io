/* 
let myHaading = document.querySelector("h1");
myHaading.textContent = "Hello world!";

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

document.querySelector("html").onclick=function() {
    alert(multiply(4, 7));
    alert(multiply(20, 20));
    alert(multiply(0.5, 3));
}
*/

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mysrc = myImage.getAttribute("src");
    if(mysrc=="image/firefox-icon.png")
    {
        myImage.setAttribute("src","image/firefox2.png");
    }else 
    {
        myImage.setAttribute("src","image/firefox-icon.png");
    } 
}

let myButten = document.querySelector("button");
let myHaading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字！");
    if(!myName || myName === null ){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myHaading.textContent="Mozilla 酷毙了，"+myName;
    }
}

myButten.onclick = function(){
    setUserName();
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHaading.textContent = "Mozilla 酷毙了，"+storedName;
}
