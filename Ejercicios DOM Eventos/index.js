// 1 playlist
 // Crear un documento html con un título que diga Mis canciones 
 // favoritas y una lista desordenada. Pedir mediante prompts por 
 // cinco canciones (una a la vez), y agregar esas canciones como 
 // ítems de la lista desordenada

    // let cancion1 = prompt ('Digame una cancion');
    // let cancion2 = prompt ('Digame una segunda cancion');
    // let cancion3 = prompt ('Digame una tercera cancion');
    // let cancion4 = prompt ('Digame una cuarta cancion');
    // let cancion5 = prompt ('Digame una quinta cancion');

    // const listaDeCanciones = document.getElementById('listaDeCanciones');


    // listaDeCanciones.innerHTML = `<li>${cancion1}</li><li>${cancion2}</li><li>${cancion3}</li><li>${cancion4}</li><li>${cancion5}</li>`;


// 2 CONTADOR 

    // Crear un documento html que muestre un número 
    //(empezando en 0) y 6 botones con los siguientes valores: 
    //-1, +1, -5, +5, -10, +10. Cuando se clickea un botón, 
    //se tiene que sumar o restar la cantidad correspondiente, 
    // y actualizar el número mostrado.

// const buttons = document.getElementsByClassName('btn-counter');
// const inputRespuesta = document.getElementById('resultado');

// const calculo = (event) => {

//     const button = event.target
//     const qty = button.getAttribute('data-qty');
//     const op = button.getAttribute('data-op');

//     if(op === '+') {

//         inputRespuesta.value = parseInt(inputRespuesta.value) + parseInt(qty);

//     } else if (op === '-') {

//         inputRespuesta.value = parseInt(inputRespuesta.value) - parseInt(qty);

//     }
// }
// for(let i = 0; i < buttons.length; i++) {

//     buttons[i].addEventListener('click', calculo)

// } 
// document.getElementById('boton');
//    //   const saludar = () => {console.log("hola") }
// boton.addEventListener("click",() => {
// console.log("hola,funcion anonima");
// })

// contador
// Crear un documento html que muestre un número (empezando en 0) 
// y 6 botones con los siguientes valores: -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente, y actualizar el número mostrado.

// const contador = document.getElementById('contador');

// boton.addEventListener("click",()=>{
        
// })

// EJERCICIO 3
// adivinanza
// Crear un documento html con una adivinanza (o una pregunta) y 3 botones con posibles 
// respuestas. Si se clickea la respuesta correcta, se debe mostrar en el documento un 
// texto que lo indique (por ejemplo: ¡Correcto!) debajo de la adivinanza, y el botón 
// seleccionado debe ponerse con un color de fondo verde. Si se clickea una respuesta 
// incorrecta, se debe mostrar en el documento un texto que lo indique 
//(por ejemplo: ¡Le erraste!) y mostrar el botón con la respuesta correcta con un color 
// de fondo verde y los otros dos con un color de fondo rojo.

// const boton1 = document.getElementById('correcto');

// boton1.addEventListener('click', verde);

// function verde () {
//     boton1.style.backgroundColor = 'green';
//     const resp = document.getElementById('resultado');
//     resp.innerText = "correcto";
// }

// ALEX

// <section>
//       <h4>
//         En el cielo brinco y vuelo. Me encanta subir, flotar y lucir mi pelo.
//       </h4>
//         <p id="correcto"></p>
//         <p id="incorrecto"></p>
//       <div>
//         <button id="opcion-f" data-opcion="false">Ave</button>
//         <button id="opcion-f" data-opcion="false">Mariposa</button>
//         <button id="opcion-v" data-opcion="true">Cometa</button>
//       </div>
//     </section><section>
//       <h4>
//         En el cielo brinco y vuelo. Me encanta subir, flotar y lucir mi pelo.
//       </h4>
//         <p id="correcto"></p>
//         <p id="incorrecto"></p>
//       <div>
//         <button id="opcion-f" data-opcion="false">Ave</button>
//         <button id="opcion-f" data-opcion="false">Mariposa</button>
//         <button id="opcion-v" data-opcion="true">Cometa</button>
//       </div>
//     </section>

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       body {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//       }
//       div{
//           display: flex;
//           justify-content: center;
//           grid-gap:10px;
//           margin: 20px 0px;
//       }
//       p{
//           display: flex;
//           justify-content: center;
//           margin:0
//       }
//       button{
//           border: transparent;
//           padding:  5px 10px;
//           border-radius: 10px;
//       }
//     </style>
//   </head>
//   <body>
//     <section>
//       <h4>
//         En el cielo brinco y vuelo. Me encanta subir, flotar y lucir mi pelo.
//       </h4>
//         <p id="correcto"></p>
//         <p id="incorrecto"></p>
//       <div>
//         <button id="opcion-f" data-opcion="false">Ave</button>
//         <button id="o

//         <button id="o
//         const opcionesF = document.querySelectorAll("#opcion-f");
//         const opcionV = document.getElementById("opcion-v");
//         const correcto = document.getElementById("correcto");
//         const incorrecto = document.getElementById("incorrecto");
        
//         const evaluar = (e) => {
//           const opcion = e.target.getAttribute("data-opcion");
//           if (opcion === "true") {
//             opcionV.style.backgroundColor = "green";
//             opcionV.style.color = "white";
//             correcto.innerText = "¡Correcto!";
//             incorrecto.innerText = "";
//           } else {
//             for (let i = 0; i < opcionesF.length; i++) {
//               opcionesF[i].style.backgroundColor = "red";
//               opcionesF[i].style.color = "white";
//               opcionV.style.backgroundColor = "green";
//               opcionV.style.color = "white";
//             }
//             incorrecto.innerText = "¡Le erraste!";
//             correcto.innerText = "";
//           }
//         };
        
//         opcionV.addEventListener("click", evaluar);
        
//         for (let i = 0; i < opcionesF.length; i++) {
//           opcionesF[i].addEventListener("click", evaluar);
//         }


// 11 peliculas
    // Crear un documento html con 12 imágenes de posters de películas. Buscar imágenes 
    // de películas de 3 géneros (acción, aventura, ciencia ficción, comedia, etc), 
    // 4 películas por género. Agregar al documento un botón por cada género, y un botón 
    // que diga Todas. Cuando se clickea el botón de un género, se tienen que mostrar sólo 
    // las películas correspondientes a ese género. Cuando se clickea el botón Todas se 
    // tienen que mostrar todas las películas.

    //     const botones = document.getElementsByClassName ('btn')

    // const mostrarPelicula = (e) => {
    //     const genero = e.target.getAttribute("data-gen");
    //     const imagenes = document.getElementsByClassName('formatoImagen')
    //     for(let i=0; i<imagenes.length; i++){
    //             if (genero==='todas'){
    //             imagenes[i].style.display="block"
    //         }
    //         else if(imagenes[i].getAttribute ('data-img')!==genero){
    //                 imagenes[i].style.display="none"
    //             }
    //             else  {
    //                 imagenes[i].style.display="block"
    //             }
    //         }
            
    // }

    // for(let i=0; i<botones.length; i++) {
    //     botones[i].addEventListener('click', mostrarPelicula)
    // }

// 12 PIN
 // En un documento html crear botones con números del 0 al 9, un botón para reiniciar, 
  // un botón para borrar, y un elemento de texto.
 // Cuando se presionan los botones de números, se tienen que ir agregando los números 
  // en el elemento de texto. Por ejemplo, si se presiona el 1 y después el 3, se tiene que mostrar "13".
 // El máximo de dígitos que se pueden ingresar es 6, cuando ya hay 6 dígitos ingresados 
  // y se clickea un nuevo número, no debe pasar nada.
 // El botón de reiniciar debe borrar todos los dígitos del elemento de texto.
 // El botón de borrar debe borrar el último dígito del elemento de texto. 
  //Por ejemplo, si el pin ingresado es 2544 y se presiona la tecla borrar, debe quedar en 254.

const botones = document.getElementsByClassName('btn');
let texto = document.getElementById('text')

const agregarNumero = (e) => {
    const boton = e.target
    const dataBoton =boton.getAttribute('data-btn');
    let textoParcial = texto.innerHTML = dataBoton 

    //textoParcial = texto + textoParcial;
  
    
}


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', agregarNumero)
}







// <-----
// --------- OTRA COSA ---------
 // ----->

 
// // result = dataBoton.textContent

//     // if (texto.innerText.length < 6){
//     //     texto.innerText += result;
//     // }