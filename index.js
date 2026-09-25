document.getElementById("calcular") .addEventListener("click", function() {
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let medidas = document.getElementById("medidas").value;
let genero = document.getElementById("genero").value;
let idade = document.getElementById("idade").value;
altura = altura / 100; // convertendo altura de cm para metros

let imc = peso / (altura/100)**2;
let resultado = document.getElementById("resultado");
console.log("IMC: " + imc.toFixed(2));  
});


function calcularGordura(peso, altura, idade, genero) {
    let imc = peso / (altura * altura);

    let percentual;

    if (genero === "masculino") {
        percentual = (1.20 * imc) + (0.23 * idade) - 16.2;
    } else {
        percentual = (1.20 * imc) + (0.23 * idade) - 5.4;
    }
    

    return percentual.toFixed(2);

    let resultado = calcularGordura(70, 1.75, 20, "masculino");
    document.getElementById("resultado").textContent =
        "Percentual estimado de gordura: " + resultado + "%";

console.log("Percentual estimado de gordura: " + resultado + "%");
}
