let bool = false;
let body = document.querySelector("body");
body.innerHTML += `<div id="main"></div>`;
let div = document.getElementById("main");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.width = "200px";
div.innerHTML = `<p id="p">La variable está en ${bool}</p>`;
div.innerHTML += `<button id="btn">Click me</button>`;
button = document.querySelector("#btn");
p = document.getElementById("p")
button.addEventListener("click", function(){ChangePar(p)});


function ChangePar(p){

    if (p.innerHTML == "La variable está en true"){
        p.innerHTML = "La variable está en false"
    }else{
        p.innerHTML = "La variable está en true"
    }
}

