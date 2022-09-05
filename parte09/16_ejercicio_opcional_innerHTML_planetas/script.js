let sistemaSolar = {
        mercurio: {
            nombre: 'mercurio',
            colour: 'grey',
            color: 'gris',
            temperatura: 350,
            imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'
        },
        venus: {
            nombre: 'venus',
            colour: 'white',
            color: 'blanco',
            temperatura: 460,
            imagen :'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'
        },
        tierra: {
            nombre: 'tierra',
            colour: 'purple',
            color: 'morado',
            temperatura: 14,
            imagen :'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
        },
        marte: {
            nombre: 'marte',
            colour: 'red',
            color: 'rojo',
            temperatura: -46,
            imagen :'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
        },
        jupiter: {
            nombre: 'jupiter',
            colour: 'brown',
            color: 'marron',
            temperatura: -121,
            imagen :'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
        },
        saturno: {
            nombre: 'saturno',
            colour: 'yellow',
            color: 'amarillo',
            temperatura: -130,
            imagen :'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
        },
        urano: {
            nombre: 'urano',
            colour: 'blue',
            color: 'azul',
            temperatura: -205,
            imagen :'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
        },
        neptuno: {
            nombre: 'neptuno',
            colour: 'blue',
            color: 'azul',
            temperatura: -220,
            imagen :'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
        },
        pluton: {
            nombre: 'plutón',
            colour: 'white',
            color: 'blanco',
            temperatura: -229,
            imagen :'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/NH-Pluto-bw-NewHorizons-20150713a.jpg/280px-NH-Pluto-bw-NewHorizons-20150713a.jpg'
        }
    };

let planetas = [];
let open_door = false

do {
    var planeta1 = prompt("Introduce un primer planeta: ");
    if (planeta1 in sistemaSolar) {
            planetas[0] = planeta1;
            open_door = true;
        }
}while (open_door != true);
    
open_door = false

do {
    var planeta2 = prompt("Introduce un segundo planeta: ");
    if (!(planeta2 in planetas) & planeta2 in sistemaSolar) {
        if (planeta2 != planeta1){
            planetas[1] = planeta2;
            open_door = true;
        }
    };
}while (open_door != true);

open_door = false

do {
    var planeta3 = prompt("Introduce un tercer planeta: ");
    if (!(planeta3 in planetas) & planeta3 in sistemaSolar) {
        if (planeta3 != planeta2 & planeta3 != planeta1){
            planetas[2] = planeta3;
            open_door = true;
        }
    };
}while (open_door != true);


let body = document.querySelector("body");
body.innerHTML += `<div id ="main"></div>`;
let div = document.getElementById("main");
div.style.display = "flex";
div.style.flexDirection = "row";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.textAlign = "center";

for (let i = 0; i < planetas.length; i++){
    div.innerHTML += `
        <div id = "div${i}">
            <h1 id="nombre">${sistemaSolar[planetas[i]].nombre}</h1>
            <div>
                <img src= "${sistemaSolar[planetas[i]].imagen}"> </img>
            </div>
            <p id="color">${sistemaSolar[planetas[i]].color}</p>
            <p id="temperatura">${sistemaSolar[planetas[i]].temperatura}</p>
        </div>`
    let div_int = document.getElementById(`div${i}`)
    let img_int = document.querySelectorAll("img")
    img_int[i].style.height = "280px" ;
    div_int.style.backgroundColor = sistemaSolar[planetas[i]].colour;

}
