
const botaoCalcular = document.getElementById("calcular");

botaoCalcular.addEventListener("click", function () {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const resultado = document.getElementById("resultado");

    resultado.textContent = "O botão está funcionando!";

    if (peso <= 0 || altura <= 0) {
        resultado.textContent = "Digite valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
});
    