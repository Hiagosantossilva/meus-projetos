async function buscarMusica(artista, musica) {
    return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`)
}

const form = document.querySelector("#musica_form");
form.addEventListener('submit', evento => {
    evento.preventDefault();
    envieForm();
});

async function envieForm() {
    const res = document.querySelector("#resultado");
    const artista = document.getElementById('iartista').value;
    const musica = document.getElementById('imusica').value;

    res.innerHTML = '<p>Carregando...</p>';

    try {
        const musicaRetorno = await buscarMusica(artista, musica);
        console.log("Resposta da API:", musicaRetorno);  // Adicione esta linha para verificar a resposta da API
    
        if (musicaRetorno.ok) {
            const data = await musicaRetorno.json();
            console.log("Dados da resposta:", data);  // Adicione esta linha para verificar os dados da resposta
            res.innerHTML = data.lyrics || "Letra não encontrada.";
        } else {
            console.log("Erro na resposta da API:", musicaRetorno.status);  // Adicione esta linha para verificar o status de erro
            res.innerHTML = "Música não encontrada. Verifique o artista e o nome da música.";
        }
    } catch (err) {
        console.error(err);
        res.innerHTML = "Erro ao buscar a letra da música.";
    }
}