var lista1 = [
    {imagem:'<img src="images/no_pole.jpeg" width="220px" height="220px">', nome:'<a href="">No Pole</a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>Don Toliver</span>'},
    {imagem:'<img src="images/around_me.jpeg" width="220px" height="220px">', nome:'<a href="">Around Me</a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>Metro Boomin, Don Toliver</span>'},
    {imagem:'<img src="images/die_trying.jpg" width="220px" height="220px">', nome:'<a href="">DIE TRYING</a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>PARTYNEXTDOOR, Drake</span>'},
    {imagem:'<img src="images/flights_brooked.jpeg" width="220px" height="220px">', nome:"<a href=''>Flight's Brooked</a>", cantor: '<span class="section-cima-card-cantor">Drake</span>'},
    {imagem:'<img src="images/no_idea.jpeg" width="220px" height="220px">', nome:'<a href="">No Idea</a>', cantor: '<span class="section-cima-card-cantor">Don Toliver</span>'},
    {imagem:'<img src="images/not_you_too.jpg" width="220px" height="220px">', nome:'<a href="">Not You Too (feat. Chris Brown) </a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>Drake, Chris Brown</span>'},
    {imagem:'<img src="images/she_will.jpeg" width="220px" height="220px">', nome:'<a href="">She Will</a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>Lil Wayne, Drake</span>'},
    {imagem:'<img src="images/tiramisu.jpg" width="220px" height="220px">', nome:'<a href="">Tiramisu</a>', cantor: '<span class="section-cima-card-cantor"> <span class="explicito">E</span>Don Toliver</span>'}
];

for ( i = 0; i<lista1.length; i++){
    var card1 = 
        `<div class="section-cima">
            <div class="section-cima-card">
                <div class="section-cima-card-image">
                    ${lista1[i].imagem}
                </div>
                <div class="section-cima-play">
                    <span><i class="fa-solid fa-play"></i></span>
                </div>
                <div class="section-cima-card-link">
                    ${lista1[i].nome}
                </div>
                ${lista1[i].cantor}
            </div>
        </div>` 

    document.getElementById("card-loop1").innerHTML += card1;
};

 lista2 = [
    {imagem:'<img src="images/daniel_caesar.jpeg" width="220px" height="220px">', nome:'<a href="">Daniel Caesar</a>', cantor: '<span class="section-cima-card-cantor"> Artista</span>'},
    {imagem:'<img src="images/don_toliver.jpeg" width="220px" height="220px">', nome:'<a href="">Don Toliver</a>', cantor: '<span class="section-cima-card-cantor"> Artista</span>'},
    {imagem:'<img src="images/drake.jpeg" width="220px" height="220px">', nome:'<a href="">Drake</a>', cantor: '<span class="section-cima-card-cantor"> Artista</span>'},
    {imagem:'<img src="images/frank_ocean.jpeg" width="220px" height="220px">', nome:"<a href=''>Frank Ocean</a>", cantor: '<span class="section-cima-card-cantor">Artista</span>'},
    {imagem:'<img src="images/kanye_west.jpeg" width="220px" height="220px">', nome:'<a href="">Kanye West</a>', cantor: '<span class="section-cima-card-cantor">Artista</span>'},
    {imagem:'<img src="images/kendrick_lamar.jpeg" width="220px" height="220px">', nome:'<a href="">Kendrick Lamar</a>', cantor: '<span class="section-cima-card-cantor"> Artista</span>'},
    {imagem:'<img src="images/ferrugem.jpeg" width="220px" height="220px">', nome:'<a href="">Ferrugem</a>', cantor: '<span class="section-cima-card-cantor"> Artista</span>'},
    {imagem:'<img src="images/teto.jpeg" width="220px" height="220px">', nome:'<a href="">Teto</a>', cantor: '<span class="section-cima-card-cantor">Artista</span>'}
];

for ( i = 0; i<lista1.length; i++){
    var card2 = 
        `<div class="section-cima">
            <div class="section-cima-card">
                <div class="section-baixo-card-image">
                    ${lista2[i].imagem}
                </div>
                <div class="section-cima-play">
                    <span><i class="fa-solid fa-play"></i></span>
                </div>
                <div class="section-cima-card-link">
                    ${lista2[i].nome}
                </div>
                ${lista2[i].cantor}
            </div>
        </div>`

    document.getElementById("card-loop2").innerHTML += card2;
};


/*scroll dos card*/

let scrollCards1 = document.getElementById("card-loop1");

scrollCards1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollCards1.scrollLeft += evt.deltaY;
});


let scrollCards2 = document.getElementById("card-loop2");

scrollCards2.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollCards2.scrollLeft += evt.deltaY;
}); 