# Examen 1er trimestre LMSGI

1º de DAM en ESCAV Granada

Nombre: Lucas Alejandro Sudre Telechea

Fecha: 21/12/2023

La página está compuesta por tres zonas individuales que ocupan toda la pantalla cada una, la primera tiene un texto centrado horizontal y verticalmente de "hola mundo"; donde he usado HTML y CSS;
HTML
<section id="pagina1" class="flex-center">
        <h1>Hola Mundo</h1>
</section>    
CSS
.flex-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#pagina1{
    background: rgb(255, 0, 0);
}
 la segunda tiene un texto inicial, una imagen y un pie de página; donde tambien he usado HTML y CSS;
 HTML
 <section id="pagina2" class="flex-center">
        <h2>Sleepy Cat</h2>
        <br>
        <img src="https://img.freepik.com/foto-gratis/gatito-duerme-sus-patas-al-lado-su-cabeza_181624-54313.jpg?size=626&ext=jpg&ga=GA1.1.1016474677.1696809600&semt=ais
        " alt=" Go two mimir teacher, you have worked enought">
        <h3> Go two mimir teacher, you have worked enought</h3>
</section>
CSS
.flex-center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#pagina2{
    background: green;
}
  y la tercera tiene un texto y un botón, el cual una vez presionado modifica tanto el texto como el color,¡¡¡¡Pruebalo!!!;
  HTML
  <section id="pagina3" class="flex-center">
        <p id="texto">Pulsa el botón</p>
        <button onclick="pulsarBoton()">Click</button>
 </section>
    CSS
.flex-center{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

#pagina3{
    background: blue;
}
JS
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


Pruebalo [Aquí](https://codepen.io/LucST626/pen/eYXOqKR)
