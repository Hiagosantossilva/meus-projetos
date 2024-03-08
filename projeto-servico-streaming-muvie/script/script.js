let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById ("radio"+count).checked = true;
}

const filmes = [
    {titulo: 'Marvel Avengers', ano: 2020, genero: 'Ação', imagem: "images/vingadores-banner-catalogo.png"},
    {titulo: 'Bee movie', ano: 2020, genero: 'Ação',  imagem: "images/bee-movie-banner-catalogo.png"},
    {titulo: 'A freira', ano: 2020, genero: 'Terror',  imagem: "images/a-freira-banner-catalogo.png"},
    {titulo: 'Howl moving castle', ano: 2020, genero: 'Anime',  imagem: "images/howl-moving-castle-banner-catalogo.png"},
    {titulo: 'A culpa é das estrelas', ano: 2020, genero: 'Romance',  imagem: "images/a-culpa-e-das-estrelas-banner-catalogo.png"},
    {titulo: 'Avatar', ano: 2020, genero: 'Aventura',  imagem: "images/avatar-catalogo.png"},
    {titulo: 'Capitã Marvel', ano: 2020, genero: 'Ação',  imagem: "images/capita-marvel-catalogo.png"},
    {titulo: 'Encanto', ano: 2020, genero: 'Aventura',  imagem: "images/encanto-catalogo.png"},
    {titulo: 'Fábrica de Chocolate', ano: 2020, genero: 'Aventura',  imagem: "images/fabrica-de-chocolate-catalogo.png"},
    {titulo: 'Noitão brinquedos do mal', ano: 2020, genero: 'Romance',  imagem: "images/fnaf-catalogo.png"},
];

const filmeLista = document.getElementById('lista-filmes');

filmes.forEach((filme) => {
    const filmeCard = document.createElement('div');
    filmeCard.classList.add('filme');
    filmeCard.innerHTML = `
        <img src="${filme.imagem}"  alt="Catalogo" class="imagem-banner-catalogo">
        <h2>${filme.titulo}</h2>
        <p>Ano: ${filme.ano}</p>
        <p>Gênero: ${filme.genero}</p>
    `;
    filmeLista.appendChild(filmeCard);
});