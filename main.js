
var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

let titulo = document.querySelector("#title");
titulo.style.color = "Blue";

cont=1;
let listaUrl = document.querySelector("#listaUrl");
for (let pron of pronoun) {
    for (let ad of adj) {
        for (let nou of noun) {
            
            let crearLi = document.createElement("li");
            let crearH3 = document.createElement("h4");
            let combinacion = document.createTextNode(`Opcion ${cont} - ${pron}${ad}${nou}.com`);
            crearH3.appendChild(combinacion);
            crearLi.appendChild(crearH3);
            listaUrl.appendChild(crearLi);

            cont++;
        }
    }
}

/*
Cuando hago un append mete cualquier cosa que contenga dentro de la variable, pero si lo hago creando un nodo de tipo texto, esto "filtra" para que solo ingrese texto, no etiquetas html;
 */