function calcularTotalPontos() {
    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    var totalPontos = 0;

    for (var i = 0; i < tarefasSalvas.length; i++) {
        totalPontos += parseInt(tarefasSalvas[i].pontos);
    }

    return totalPontos;
}

function calcularTotalPontosConquistados() {
    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    var totalPontosConquistados = 0;

    for (var i = 0; i < tarefasSalvas.length; i++) {
        if (tarefasSalvas[i].status === 'Concluida') {
            totalPontosConquistados += parseInt(tarefasSalvas[i].pontos);
        }
    }
    return totalPontosConquistados;
}
var totalDePontos = calcularTotalPontos();
var totalDePontosConquistados = calcularTotalPontosConquistados();
var porcentagemPontos = (totalDePontosConquistados / totalDePontos) * 100;

console.log(`Total de pontos: ${totalDePontos}`);
console.log(`Total de pontos conquistados: ${totalDePontosConquistados}`);
console.log(`Total de pontos conquistados: ${porcentagemPontos}`);
