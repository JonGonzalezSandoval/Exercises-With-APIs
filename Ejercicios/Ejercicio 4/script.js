let planetList = document.getElementById("planetList");
let characterDiv = document.getElementById("charactersDiv");


fetch(`https://swapi.dev/api/planets/`)
    .then(response => response.json())
    .then(response => {
        // console.log(response.results);

        let listaplanetas = response.results;

        // console.log(listaplanetas);

        listaplanetas.forEach((element, index) => {
            let newOption = document.createElement("option");
            newOption.text = element.name;
            newOption.value = (index + 1); // Una opción sería poner el valor del campo url de cada elemento de la lista en el value ya que es un campo con la url que necesitamos para volver a llamar a la api con el valor del planeta que queremos

            planetList.appendChild(newOption);


        });
        

    })
.catch();


planetList.addEventListener("change", element => {

    let elementValue = element.target.value;


    while(characterDiv.firstChild){
        characterDiv.removeChild(characterDiv.firstChild);
    }
    
    // console.log(elementValue);

    fetch(`https://swapi.dev/api/planets/${elementValue}/`)
    .then(response => response.json())
    .then(response => {

        // console.log(response.residents);

        if(response.residents.length === 0){
            let planetEmpty = document.createElement("h2");
            planetEmpty.textContent = "El planeta no tiene ningun habitante";
            characterDiv.appendChild(planetEmpty);
        }else{

            let newList = document.createElement("ul");


            response.residents.map(element => {
                // console.log(element);
                let newListMember = document.createElement("li");

                fetch(element)
                    .then(response => response.json())
                    .then(response =>{
                        newListMember.textContent = response.name;
                    })
                    .catch();

                newList.appendChild(newListMember);

            })




                characterDiv.appendChild(newList);
        }
    })
    .catch();
})