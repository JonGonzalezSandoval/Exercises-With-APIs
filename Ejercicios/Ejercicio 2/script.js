fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(response => {
        let person = response.results[0];
        let divPersona = document.querySelector("#randomPerson");


        let img = document.createElement("img");
        let name = document.createElement("p");
        let email = document.createElement("p");
        let direc = document.createElement("p");


        // console.log(person.name.title);
        name.textContent = person.name.title + " " + person.name.first + " " + person.name.last;
        img.src = person.picture.medium;
        email.textContent = person.email;
        direc.textContent = person.location.street.number + " " + person.location.street.name + " " + person.location.city + " " + person.location.state



        divPersona.appendChild(img);
        divPersona.appendChild(name);
        divPersona.appendChild(email);
        divPersona.appendChild(direc);

        




    })
    .catch();