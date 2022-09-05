let num = parseInt(prompt("Introduce un número: "));
let body = document.querySelector("body");
body.innerHTML += `<div id="main"></div>`;
let div = document.getElementById("main");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "200px";
div.innerHTML = `<h1 id="num">${num}</h1>`;
div.innerHTML += `<button id="btn">Click me</button>`;
button = document.querySelector("#btn");
num_html = document.getElementById("num")

button.addEventListener("click", function () {
    addOneInTotal(num,num_html);
  });


function addOneInTotal(num,num_html){
    num_html.innerHTML = parseInt(num_html.innerHTML) + num;
}

