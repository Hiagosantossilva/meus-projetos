async function buscarMusica(artista, musica) {
    return fetch(`https://api.lyrics.ovh/v1/${artista}/${musica}`)
}

const form = document.querySelector("#musica_form");
form.addEventListener('submit', evento => {
    evento.preventDefault();
    envioForm();
})

async function envioForm(){
    const res = document.querySelector("#resultado");
    const artista = document.getElementById('iartista').value;
    const musica = document.getElementById('imusica').value;

    res.innerHTML = '<p>Carregando...</p>';

    try{
        const musicaRetorno = await buscarMusica(artista, musica);
        console.log("Resposta da API:", musicaRetorno);  // Adicione esta linha para verificar a resposta da API

        if(musicaRetorno.ok){
            const dados = await musicaRetorno.json();
            res.innerHTML = dados.lyrics|| "Letra não encontrada.";
        } else{
            res.innerHTML = "Música não encontrada, por favor, digite novamente"
        }
    } 
    catch{
        console.error(err)
        res.innerHTML = "Erro ao buscar a letra da música.";

    }
}