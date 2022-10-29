//# --> selector de id
//. --> selector de clases
const h1 = document.querySelector("h1");
const operacion1 = document.querySelector("#operacion-1");
const operacion2 = document.querySelector("#operacion-2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#result")
const form = document.querySelector("#form")


form.addEventListener("submit", sumarValues)


/*
btn.addEventListener("click", btnOnclick)
*/

function sumarValues (e) {
  //preventDefault 
  e.preventDefault()
  const resultado = parseInt(operacion1.value)  + parseInt(operacion2.value) 
  pResultado.innerHTML = "The result is: " + resultado
}
