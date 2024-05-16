//DOM//

const soma = document.getElementById("somar")
const subtrai = document.getElementById("subtrair")
const reset = document.getElementById("resetar")

//Ouvidores//
soma.addEventListener("click", somarContador);
subtrai.addEventListener("click", subtrairContador);
reset.addEventListener("click", resetarContador);

//Funções de contagem//

var contador = 0;
var resposta = document.getElementById("resposta")

function somarContador(){
    contador = contador + 1;
    resposta.innerHTML = contador;
}

function subtrairContador(){
    if(contador < 1) {
        return console.log('erro')
    } {
        contador = contador -1;
        resposta.innerHTML = contador;
    }
   
}

//Função de reset//

function resetarContador (){
    contador = 0;
    resposta.innerHTML = contador;

}

//Outros//

function exibirContador () {
    resposta.innerHTML = contador;

}

exibirContador () 