const progresso = document.querySelector(".barraDeProgresso div");
const contador = document.getElementById('contadorProgresso')

var porcentagemPontosFormatado = porcentagemPontos.toFixed(0);
progresso.setAttribute("style", `width:${porcentagemPontosFormatado}%`);
contador.innerHTML = `Progresso: ${porcentagemPontosFormatado}%`;
