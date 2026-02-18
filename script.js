script.js

let campoTexto = document.getElementById("texto");
let campoCor = document.getElementById("cor");
let resultado = document.getElementById("resultado");


let botaoExibir = document.getElementById("btnExibir");
let botaoLimpar = document.getElementById("btnLimpar");


botaoExibir.addEventListener("click", function () {
    resultado.innerText = campoTexto.value;
    resultado.style.color = campoCor.value;
});


botaoLimpar.addEventListener("click", function () {
    resultado.innerText = "";
});