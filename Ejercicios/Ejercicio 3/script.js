let sendButton = document.querySelector("#enviar");

sendButton.addEventListener("click", function () {

    let date = "";
    let ano = document.querySelector("#ano");
    let mes = document.querySelector("#mes");
    let dia = document.querySelector("#dia");

    date += ano.value + "-";
    if(parseInt(mes.value) > 10)
        date += mes.value + "-";
    else
        date += "0" + mes.value + "-";

    if(parseInt(dia.value) > 10)
        date += dia.value;
    else
        date += "0" + dia.value; 


    ano.parentNode.removeChild(ano);
    mes.parentNode.removeChild(mes);
    dia.parentNode.removeChild(dia);

    sendButton.parentNode.removeChild(sendButton);



    apiCall(date);

});


let apiCall = date => {

    fetch(`https://api.nasa.gov/planetary/apod?api_key=Yh4YDLX2g10KBsxVrlkt10ujgOoVwdhCFmx3AF2o&date=${date}`)
    .then(response => response.json())
    .then(response =>{
        console.log(response);

        let nasaDiv = document.createElement("div");
        nasaDiv.style.width = "100%";

        let img = document.createElement("img");
        let description = document.createElement("p");
        let title = document.createElement("h1");

        title.textContent = response.title;
        img.src = response.hdurl;
        description.textContent = response.explanation;

        nasaDiv.appendChild(title);
        nasaDiv.appendChild(img);
        nasaDiv.appendChild(description);


        document.querySelector("body").appendChild(nasaDiv);

        

        

    })
    .catch();


}

