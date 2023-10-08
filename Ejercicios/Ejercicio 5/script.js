let pokemonTypes = document.getElementById("pokemonTypes");
let randomPokemon = document.getElementById("randomPokemon");


fetch(`https://pokeapi.co/api/v2/type`)
    .then(response => response.json())
    .then(response => {
        // console.log(response.results);

        let typeList = response.results;

        // console.log(typeList);

        typeList.forEach((element, index) => {
            let newOption = document.createElement("option");
            newOption.text = element.name;
            newOption.value = (index + 1); // Una opción sería poner el valor del campo url de cada elemento de la lista en el value ya que es un campo con la url que necesitamos para volver a llamar a la api con el valor del planeta que queremos

            pokemonTypes.appendChild(newOption);


        });
        

    })
.catch();


pokemonTypes.addEventListener("change", element => {

    let elementValue = element.target.value;

    console.log(elementValue);


    while(randomPokemon.firstChild){
        randomPokemon.removeChild(randomPokemon.firstChild);
    }
    
    // console.log(elementValue);

    fetch(`https://pokeapi.co/api/v2/type/${elementValue}/`)
    .then(response => response.json())
    .then(response => {

        // console.log(response.residents);
            let newList = document.createElement("ul");

            let cantidadPokemon = response.pokemon.length;

            console.log(response.pokemon[Math.floor(Math.random()*cantidadPokemon)].pokemon.name);


            for (let index = 0; index < 3; index++) {
                 let pokemonName = response.pokemon[Math.floor(Math.random()*cantidadPokemon)].pokemon.name;
                 let newListMember = document.createElement("li");
                 newListMember.textContent = pokemonName;

                newList.appendChild(newListMember);
            }

                randomPokemon.appendChild(newList);
        }
    )
    .catch();
})