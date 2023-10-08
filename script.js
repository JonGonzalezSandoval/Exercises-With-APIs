let nombre = "sylveon";
fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
.then(response => response.json())//Gestion resultado, lo recibe y lo paresea, tiene datos de la petición, si se ha enviado correcto etc etc
.then(response => {
    document.querySelector("h1").textContent = response.name;
    document.querySelector("#front").src = response.sprites.front_default;
    document.querySelector("#back").src = response.sprites.back_default;




})//Me permite usar los datos qeu he gestionado
.catch(); //Tiene en cuenta si ha dado algún error



