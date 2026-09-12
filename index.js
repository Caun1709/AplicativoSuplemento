document.getElementById("calcular") .addEventListener("click", function() {
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let medidas = document.getElementById("medidas corporais").value;

let imc = peso / (altura/100)**2;
})