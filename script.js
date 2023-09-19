document.addEventListener("DOMContentLoaded", function () {
    const calcularBotao = document.getElementById("calcular");

    calcularBotao.addEventListener("click", function () {
        const numero1 = parseFloat(document.getElementById("numero1").value);
        const numero2 = parseFloat(document.getElementById("numero2").value);
        const numero3 = parseFloat(document.getElementById("numero3").value);

        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            alert("Por favor, insira números válidos.");
        } else {
            const media = (numero1 + numero2 + numero3) / 3;
            alert(`A média dos números é: ${media.toFixed(2)}`);
        }
    });
});