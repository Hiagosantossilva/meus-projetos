const novaTarefaBtn = window.document.getElementById("btnTarefa");
var criadorElement = document.getElementById("criador");
var arrayDeTarefas = []

function criarTarefa() {

    let novaTarefa = document.createElement('div');
    novaTarefa.innerHTML = `
        <label for="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao">
        <label for="data">Data</label>
        <input type="datetime-local" name="data" id="data">
        </p>
        <p>
        <label for="pontos">Pontos</label>
        <input type="number" name="pontos" id="pontos"  min="1" max="10" value="1">
        </p>
        <p>
        <button id="btnPadrao" onclick="obterDadosDeFormulario()">Adicionar Tarefa</button>
        </p>
    `;

    criadorElement.appendChild(novaTarefa);
    document.getElementById('btnPadrao').style.display = 'none';
}


function obterDadosDeFormulario() {
    var descricao = document.getElementById('descricao').value;
    var dataInput  = document.getElementById('data').value;
    var pontos = document.getElementById('pontos').value;

    var dataFormatada = formatarDataAmigavel(dataInput);

    var tarefa = {
        descricao: descricao,
        data: dataFormatada,
        pontos: pontos,
        status: 'Em andamento'  
    };

    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

    tarefasSalvas.push(tarefa);

    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('pontos').value = '';

    console.log(tarefasSalvas);
    exibirRoadmap();
}
function formatarDataAmigavel(dataInput) {
    var data = new Date(dataInput);
    return data.toLocaleString(); // Formata a data para uma representação amigável
}

var status = document.gerElementById('selecao')
var statusSelecionado = document.getElementById('')


function exibirRoadmap() {
    Roadmap.innerHTML = '';
    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || '';

    var roadmapHTML = '';

    for (var i = 0; i < tarefasSalvas.length; i++) {
        var tarefaAtual = tarefasSalvas[i];
        roadmapHTML += `
            <div class="tarefaContainer">
                <ul> 
                    <li>
                        <div class="iconTarefa" id="posicaoTarefa">${i+1}</div> 
                    </li>

                    <li>
                        <p> Descrição: ${tarefaAtual.descricao}</p>
                        <p> Data de término: ${tarefaAtual.data}</p>
                        <p> Pontos: ${tarefaAtual.pontos}</p>
                        <p> Status:
                        <select id="status${i}" class="selectBox">
                            <option class="optionStatus" value="Em andamento" ${tarefaAtual.status === 'Em andamento' ? 'selected' : ''}>Em andamento</option>
                            <option class="optionStatus"value="Pendente" ${tarefaAtual.status === 'Pendente' ? 'selected' : ''}>Pendente</option>
                            <option class="optionStatus" value="Concluida" ${tarefaAtual.status === 'Concluida' ? 'selected' : ''}>Concluida</option>
                        </select>
                        </p>
                        <button class="btnTarefasOpcoes" id="bntExcluir${i}" onclick="deletarTarefa(${i})">Excluir</button>
                        <button class="btnTarefasOpcoes" id="bntSalvar${i}" style="display: none;" onclick="salvarTarefa(${i})">Salvar</button>


                    </li>
                  
                </ul>
            </div>
        `;
    }

    Roadmap.innerHTML += roadmapHTML;

    // Adiciona o evento de mudança para cada elemento select com a classe "status"
    var selectElements = document.querySelectorAll('select[id^="status"]');
    selectElements.forEach(function(selectElement, index) {
        selectElement.addEventListener('change', function() {
            var botaoSalvar = document.getElementById(`bntSalvar${index}`);
            botaoSalvar.style.display = 'inline-block';
        });
    });
}

function salvarTarefa(index) {
    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    var selectElement = document.getElementById(`status${index}`);
    var novoStatus = selectElement.value;

    tarefasSalvas[index].status = novoStatus;
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

    // Recarrega a página
    location.reload();
}


function deletarTarefa(i) {
    var tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefasSalvas.splice(i, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));

    exibirRoadmap();

}

