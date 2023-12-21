let texto = 1;


function pulsarBoton() {

    console.log(texto);

    if (texto === 1) {
        document.querySelector("#texto").innerHTML = "Has pulsado el botón";
        texto++;
    } else if (texto === 2) {
        document.querySelector("#texto").innerHTML = "Has vuelto a pulsar el botón!!";
        texto++;
    } else if (texto === 3) {
        document.querySelector("#pagina3").style.background = "black";
        document.querySelector("#texto").style.color = "white"
        texto++;
    } else if (texto === 4) {
        document.querySelector("#texto").innerHTML = "Pulsa botón"; 
        texto--;   
        texto--;   
        texto--;   
        document.querySelector("#pagina3").style.background = "blue";
        document.querySelector("#texto").style.color = "black"

    }
}