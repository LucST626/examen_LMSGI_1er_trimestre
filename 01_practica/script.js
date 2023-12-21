function pulsarBoton(){
    let texto = 0;
    if(texto == 0){
        document.querySelector("#texto").innerHTML = "Has pulsado el boton";
        texto++
    } 
    if(texto == 2){
        document.querySelector("#texto").innerHTML = "Has vuelto a pulsar el boton!";
        texto++
    }
}