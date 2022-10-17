let letras;
let errores; //cuantas veces me equivoqué
let aciertos; //cuantas letras acerté
const mostrarLetras = document.getElementById('mostrarLetras');
const pMensaje = document.getElementById('pMensaje');
const divBoton = document.getElementById('botones');
const inicio = document.getElementById('inicio');
const imagen = document.getElementById('imagen');
// dentro del script.js
// todas nuestros textos de ejemplo
const arrayPalabras = [
    'pelota',
    'lago',
    'avion',
    'gorila',
    'pato',
    'gato',
    'arbol',
];
let abecedario = 'abcdefghijklmnopqrstuvwxyz'.split('');
inicio.addEventListener('click', () => {
    const textoIndice = Math.floor(Math.random() * arrayPalabras.length);
    letras = arrayPalabras[textoIndice].split('');
    //letras = palabra.split(''); // la palabra elegida separados en caracteres
    pMensaje.textContent = "" //limpiar mensaje anterior
    mostrarLetras.innerHTML = ""; // limpiar palabra anteior
    aciertos = 0;
    errores = 0;
    encenderBotones();

    imagen.src = 'img/img0.png';
    

    letras.forEach((item) => { // crear span de las letras de la palabra elegida
        const span = document.createElement('span')
        span.classList = 'letras';
        span.id = `${item}`
        span.textContent = ` `;
        mostrarLetras.appendChild(span)
      });  
    getElement1 = document.querySelectorAll('.letras');
    
    console.log(getElement1);   
    
}); 
abecedario.forEach((item) => { // crea los botones del abecedario
    const boton = document.createElement('button')
    boton.classList = 'botones';
    boton.textContent = `${item}`;
    divBoton.appendChild(boton)
});

const botones = document.querySelectorAll(".botones");
const funcionclick = function (evento) {
	event.target.disabled = true; // desactiva el boton presionado
	// Podemos cambiar cualquier cosa, p.ej. el estilo
	this.style.borderColor = "red"; 
    
    let acerto = false; //comprobacion de puntaje
    if(letras.includes(this.innerText)){ //reemplaza los guiones de la palabra elegida por la letra acertada
        // llama a la clase con el inidice del array y cambia el contenido por el this
        getElement1[letras.indexOf(this.innerText)].textContent = `${this.innerText}`; //this es la letra elegida al presionar boton 
        acerto = true; 
        aciertos++;

    }
    if(acerto  == false){  // Para aumentar errores y cambio de imagen
        errores++;
        console.log(errores);
        const source = `img/img${errores}.png`;
        imagen.src = source;
    }
    if(errores == 5){ // Si errores alcanza 5, se pierde
        pMensaje.textContent = 'Perdiste';
        
        apagarBotones();
        
    }else if(aciertos == letras.length){ //Si acierto alcanza la length se gana
        pMensaje.textContent = 'Ganaste';
        this.style.borderColor = 'none';
        apagarBotones();
    }
}



botones.forEach(boton => {
	//Agregar listener a los botones
    
	boton.addEventListener("click", funcionclick);
});



function encenderBotones( ){ // funcion
    for( let i = 0; i < botones.length ; i++ ){
        botones[i].disabled = false;
        botones[i].style.borderColor = "black"; 
    }

    inicio.disabled = true;
}
        
function apagarBotones( ){  // funcion
    for( let i = 0; i < botones.length ; i++ ){
        botones[i].disabled = true;
        botones[i].style.borderColor = "gray"; 
    }

    inicio.disabled = false;
}


apagarBotones( );


/* 
for(i= 0; i>= letras.length; i++){
    letras[i] = document.getElementById(`${letras}`);
};

for(i= 0; i>= letras.length-1; i++){
                getElement1[i].textContent = `${getElement1[i]}`;
            };

for (i = 0; i < 9; i++) {
        console.log(getElement1[i]);
    }

    if(letras.includes(cajaTexto.value)){
        
        };
        //document.getElementById(`${cajaTexto.value}`).textContent = `${cajaTexto.value}`;
        
    }else
        console.log("No Se encuentra ");
    cajaTexto.value = '';
*/







/* 
--Inicio--
obtener elemento texto
obtener elementotipeado
obtener mostrarMensaje de ganar o perder
inicia listaPalabras
inicia indice
- crar array con palabras para el juego
- boton: que al hacer clic boton, inicia el juego
    vida iniciar en 5 oportunidades

    recibir una palabra aleatoria del array
        crea una letraIndice alteatoriamente
        la palabra debe separarse en caracteres

    debe agregarse espacioElemento.appendChild con text.length
        los espacios tendran una clase con un id + i(text.length)
    debe crearse un espacioArray
        espacioArray debe agregarse por espacios vacios con text.length
            for usando texto.length
                agregar innertext con espacios
            el espacioArray debe separarse por split

        los espacios recibiran una clase
            cada clase tendra un identificador

- al escribir una letra va recibir el evento de la caja de texto
    va verificar si la letra es correcta recorriendo
        si la letra es correcta va mostrar en pantalla
            mostrarLetra va reemplazar la posicion de espacioArray
                espacioArray va cambiar con innertext

        si la letra es incorrecta va marcarError
            marcarError
                va restar una oportunidad
                agregara una imagen

--Inicio--
obtener elemento texto
obtener elementotipeado
obtener mostrarMensaje de ganar o perder
inicia listaPalabras
inicia indice


    

--Seleccionar Palabra Secreta--

    Al pulsar elementoId inicio addEventListener clic
        Crear listaPalabras
        crear Oportunidades
        crea una letraIndice alteatoriamente
        la palabra debe separarse por caracteres


--Pasar palabra Secreta--
--Introducimos una letra--

--Letra secreta--
    usar textotipeado con addEventListener input
    --Hemos ganado--

    --Hemos Perdido--

    */
