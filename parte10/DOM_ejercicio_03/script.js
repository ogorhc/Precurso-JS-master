let body = document.querySelector("body")
body.innerHTML += `<div id="main"></div>`
let div = document.getElementById("main")
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";

div.innerHTML = `<button id="btn"></button>`
let button = document.getElementById("btn")

button.innerHTML = '<img src="./anverso.jpg" />'
let img = document.querySelector("img")
img.style.width = "500px";
button.addEventListener("click",function(){flipCard(button)})

function flipCard(button){
    if (button.innerHTML == '<img src="./anverso.jpg" style="width: 500px;">'){
        button.innerHTML = '<img src="./reverso.png" style="width: 500px;"/>'

    }else if (button.innerHTML == '<img src="./reverso.png" style="width: 500px;">'){
        button.innerHTML = '<img src="./anverso.jpg" style="width: 500px;"/>'

    }
    
}