fetch(`https://rickandmortyapi.com/api/character/`)
.then(response => response.json())
.then(response => {
    let generalDiv = document.querySelector("#characters");
    generalDiv.style.display = "flex";
    generalDiv.style.flexWrap = "wrap ";

    console.log(response);

    response.results.map(character =>{
      let characterDiv = document.createElement("div");
      characterDiv.style.className = "personaje";


      let charName = document.createElement("h2");
      let charImg = document.createElement("img");

      charName.textContent = character.name;
      charImg.src = character.image;
      charImg.alt = character.name;

      characterDiv.appendChild(charName);
      characterDiv.appendChild(charImg);


      generalDiv.appendChild(characterDiv);

      
    })




})
.catch();