const h1 = document.querySelector("h1");
const form = document.querySelector('#formulario')
const calculo1 = document.querySelector('#calculo1')
const calculo2 = document.querySelector('#calculo2')
const btn_calcular = document.querySelector('#btn_calcular')
const resultado = document.querySelector('#resultado')

//Escuchar los eventos
// btn_calcular.addEventListener('click',btnOnclick);
// form.addEventListener('submit', sumarImputValues)

function sumarImputValues(event){
    event.preventDefault()
    const suma = (+calculo1.value) + (+calculo2.value)
    console.log(event);
    resultado.innerText = "El resultado de la suma es: "+ suma
    
}

// const p = document.querySelector("p");
// const pejemplo = document.querySelector(".pejemplo");
// const idejemplo = document.querySelector("#idejemplo");
// const input = document.querySelector("input");

//Manipulación del DOM
// h1.innerText = "Pedro Quiñones Paternina";
// console.log(h1.getAttribute("pantalla"));
// h1.setAttribute("pantalla", "nuevoatributo");
// h1.classList.add("test");

// //Creación de un elemento
// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://conceptodefinicion.de/wp-content/uploads/2020/09/universo.jpg"
// );


// p.append(img)
