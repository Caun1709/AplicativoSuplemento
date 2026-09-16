document.getElementById("calcular") .addEventListener("click", function() {
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let medidas = document.getElementById("medidas corporais").value;

let imc = peso / (altura/100)**2;
})



function calcularGordura(peso, altura, idade, genero) {
    const imc = peso / (altura * altura);

    let percentual;

    if (genero === "masculino") {
        percentual = (1.20 * imc) + (0.23 * idade) - 16.2;
    } else {
        percentual = (1.20 * imc) + (0.23 * idade) - 5.4;
    }
    

    return percentual.toFixed(2);
}

const resultado = calcularGordura(70, 1.75, 20, "masculino");

console.log("Percentual estimado de gordura: " + resultado + "%");