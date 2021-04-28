// 1 SALUDO
 // Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, 
 // y una vez ingresado muestre un saludo con el nombre dentro de un h1. 
 // El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la 
 // que viene por defecto.

    // let nombre = prompt ('Ingresa un nombre');
    // const nombreEnH1 = document.querySelector('h1');

    // nombreEnH1.innerText = (nombre);

// 2 COLOR
 // Hacer un programa que al iniciarse pida mediante un prompt ingresar 
 // un color en sistema hexadecimal, y una vez ingresado ponga el color 
 // de fondo del body con dicho color.

    //  let color = prompt (`Ingrese un color en sistema hexadecimal`);
    // let cambioBody = document.querySelector('body');
    // cambioBody.style.backgroundColor = color ;

   //  OTRA FORMA 
   // const colorIngresado = prompt ('Ingrese un color');
   // const body = document.getElementsByTagName('body');


   // body[0].style.backgroundColor = `${colorIngresado}`

// 3 RGB
 //Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores 
 // correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de 
 // fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, 
 // verde y azul.

//  const color1 = prompt ('Ingresa un numero del 0 a 255');
//  const color2 = prompt ('Ingresa un segundo numero del 0 a 255');
//  const color3 = prompt ('Ingresa un tercer numero del 0 a 255');
//  document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3});

   // OTRA FORMA 
   // body[0].style.backgroundColor = `rgb(${color1},${color2},${color3})`

// 4 IMAGEN
 // Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de 
 // imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de 
 // la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento 
 // html. Por ejemplo:

 // Opción elegida	Ancho de imagen
 // chica	         200px
 // mediana	         500px
 // grande	         800px

   //  const tamanioImagen = prompt('Elegí un tamaño de imagen entre: chica, mediana o grande')
   //  const imagenDelHtml = document.getElementById('imagen-bella')
   
   //  if (tamanioImagen==='chica') {
   //      imagenDelHtml.style.width = '200px'
   //  }
   //  else if (tamanioImagen==='mediana') {
   //      imagenDelHtml.style.width = '500px'
   //  }
   //  else if (tamanioImagen==='grande') {
   //      imagenDelHtml.style.width = '800px'
   //  }
   //  else {
   //      false
   //  }

  //OTRA FORMA
   //  let tamañoImagen = prompt(
   //    "Ingresa el tamaño de imagen. Ejemplo: chica, mediana, grande"
   //  );
   
   //  let imagen = document.getElementById("imagen");
   
   //  const tamaño = (valor) => {
   //    if (valor === "mediana") {
   //      return "500px";
   //    } else if (valor === "grande") {
   //      return "800px";
   //    } else {
   //      return "200px";
   //    }
   //  };
   
   //  imagen.style.width = tamaño(tamañoImagen);

// 5 TEMPERATURA
// Hacer un programa que al iniciarse pregunte mediante un prompt 
// por un temperatura, y con ese dato modifique un h1 en el html, 
// de forma tal que diga, por ejemplo, Temperatura actual: 20°. 
// Cambiar el color del h1 dependiendo de la temperatura ingresada, 
// siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

   //  const ingreso = prompt('Ingrese temperatura');
   //  const temperatura = document.querySelector('h1');

   //  temperatura.innerHTML = (`La temperatura actual es: ${ingreso}°`);
   //  if(ingreso < 0){
   //      temperatura.style.color = '#0000FF';
   //  } else if(ingreso>=0 && ingreso<15) {
   //      temperatura.style.color = '#00FFFF';
   //  } else if(ingreso>=15 && ingreso<25) {
   //      temperatura.style.color = '#00FF00';
   //  } else if(ingreso>=25 && ingreso<30) {
   //      temperatura.style.color = '#FFFF00';
   //  } else if(ingreso>=30 && ingreso<35) {
   //      temperatura.style.color = '#FF3300';
   //  } else if(ingreso>35) {
   //  temperatura.style.color = '#FF0000';
   //  }


// 6 PROGRESO
// Crear una barra de progreso con dos divs anidados. 
// Hacer un programa que al iniciarse pregunte mediante un prompt 
// por un porcentaje de progreso y modifique el ancho de la barra 
// de progreso respectivamente (si se ingresa 75 la barra de progreso 
// tiene que ocupar el 75% de la barra contenedora)

   // const porcentajeProgreso = prompt (`Ingrese un porcentaje`);

   // let barraDeProgreso = document.getElementById('barra-progreso');

   // barraDeProgreso.style.width = `${porcentajeProgreso}%`;


// 7 REACCIONES
//    En un documento html hacer un post de una red social que contenga:
//  - un h3 con la usuaria
//  - un p con un lorem ipsum
//  - 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) 
//    más un número con la cantidad

//    Dar estilos para que
//  - la tipografía sea distinta a la default
//  - los spans estén en línea, separados con márgenes, tengan un color de fondo 
// gris suave y un border radius
//  - Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad 
// de cada una de las reacciones y actualice los valores de los spans correspondientes


   // let cantidadGusta = prompt("Ingrese una cantidad de me gusta");
   // let cantidadEncanta = prompt("Ingrese una cantidad de me encanta");
   // let cantidadAsombra = prompt("Ingrese una cantidad de me asombra");

   // let emojis = document.getElementsByClassName("emojis");

   // for (let i = 0; i < emojis.length; i++) {
   //   // emojis[0].innerHTML = (`<span class="emojis">${cantidadGusta} 😊 Me gusta</span>`);
   //   // emojis[1].innerHTML = (`<span class="emojis">${cantidadEncanta} 😊 Me encanta</span>`);
   //   // emojis[2].innerHTML = (`<span class="emojis">${cantidadAsombra} 😊 Me asombra</span>`);
   //   emojis[0].innerText = `${cantidadGusta} 😊 Me gusta`;
   //   emojis[1].innerText = `${cantidadEncanta} 😊 Me encanta`;
   //   emojis[2].innerText = `${cantidadAsombra} 😊 Me asombra`;

   //   emojis[i].style.backgroundColor = "lightgray";
   //   emojis[i].style.borderRadius = "1em";
   //   emojis[i].style.padding = "5px";
   //   emojis[i].style.marginRight = "10px";
   // }


// 8 CARD
   // Hacer un programa que al iniciarse pregunte mediante prompts por
   // un título
   // una url de una imagen
   // una url a un artículo

   // Utilizar esos datos para completar en el html una card que tenga
   // una imagen, con la url de la imagen ingresada
   // un título, con el texto del título ingresado
   // un link que diga Leer más, con la url al artículo ingresado

   // Dar algunos estilos mínimos a la card:
   // centrarla con respecto a la pantalla
   // agregarle un borde
   // agregarle un sombreado
   // cambiarle la tipografía
   // cambiarle los tamaños de fuente
   // cambiarle los colores por defecto

      // const titulo = prompt('Decime un titulo');
      // const imagen = prompt('Pega la URL de una imagen');
      // const articulo = prompt('Pega la URL de un articulo');

      // const tituloDeHTML = document.getElementById('titulo');
      // tituloDeHTML.innerText = `${titulo}`;

      // const card = document.getElementById('card');
      // card.innerHTML = (`<img src="${imagen}"/>`);

      // const anclaArticulo = document.getElementById('articulo');
      // anclaArticulo.innerHTML = (`<a href="${articulo}">Leer mas</a>`);

    //  <!-- Ejercicio 8 Alex - otra forma -->
    //     <div id="card">
    //       <h1 id="titulo"></h1>
    //       <img id="imagenCard" src="" />
    //       <a id="leerMas" href="/"></a>
    //     </div> 

    // let title = prompt("Ingresa un titulo");
    // let url = prompt("Ingresa el url de una imagen");
    // let articulo = prompt("Ingresa un articulo");

    // let card = document.getElementById("card");

    // card.innerHTML = `<div>
    // <h1>${title}</h1>
    // <img src="${url}"/>
    // <a href="${articulo}">Leer mas</a>
    // </div>`;


// 9 animales
// En un documento html agregar al menos tres imágenes de distintos animales, 
// una por cada animal. Hacer un programa que al iniciarse pregunte mediante 
// un prompt por un animal (indicando en el mensaje las opciones disponibles) 
// y muestre solamente la imagen del animal elegido.

   //const animal = prompt('Elegi un animal - Leon, Vaca, Camello')
   // Ejercicio 9

   // const perro = document.getElementById("perro")
   // const gato = document.getElementById("gato")
   // const rinoceronte = document.getElementById("rinoceronte")

   // const animal = prompt("Elige entre estos animales: perro, gato, rinoceronte")

   // if(animal === "perro"){
   //     perro.style.display = "block"
   // }else if(animal === "gato"){
   //     gato.style.display = "block"
   // }else if(animal === "rinoceronte"){
   //     rinoceronte.style.display = "block"
   // }else{
   //     alert("Ese animal no esta disponible")
   // }

// 10 PAISES
// En un documento html crear una lista desordenada con distintos paises de cada continente 
 // (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante 
 // un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

const continente = prompt ('Elija un continente');

const continentesLista = document.querySelectorAll('.continente');
// const rojoYNegrita = () => {
//    continente.style.color = 'red';
//    continente.style.fontWeight = 'bold';
      
// } Esta funcion es la que quiero usar en cada if/else if

for (let i = 0; i < continentesLista.length; i++) {
   if (continente === 'africa') {
      const africa = document.querySelector('.africa');
      africa.style.color = 'red';
      africa.style.fontWeight = 'bold';
      
   }else if (continente === 'oceania') {
      const oceania = document.querySelector('.oceania');
      oceania.style.color = 'red';
      oceania.style.fontWeight = 'bold';

   }else if (continente === 'south america') {
      const southAmerica = document.querySelectorAll('.sa');
      for (let i = 0; i < southAmerica.length; i++){
         southAmerica[i].style.color = 'red';
         southAmerica[i].style.fontWeight = 'bold';
      }
         
   }else if (continente === 'north america') {
      const northAmerica = document.querySelectorAll('.na');
      for (let i = 0; i < northAmerica.length; i++){
         northAmerica[i].style.color = 'red';
         northAmerica[i].style.fontWeight = 'bold';
      }
         
   }else if (continente === 'europa') {
      const europa = document.querySelectorAll('.eu');
      for (let i = 0; i < europa.length; i++){
         europa[i].style.color = 'red';
         europa[i].style.fontWeight = 'bold';
      }
      
         
   }else if (continente === 'asia') {
      const asia = document.querySelectorAll('.asia');
      for (let i = 0; i < asia.length; i++){
         asia[i].style.color = 'red';
         asia[i].style.fontWeight = 'bold';
      }

   } else {
      alert ('Ese continente no existe ')
   }
}
console.log(continentesLista);


//ULTIMO const palabra = prompt("ingrese su comida");
// //Guardo el texto donde aparece
// const text = document.querySelectorAll("#text li");

// for(let i = 0; i < text.length; i++){
//    const textHTML = text[i].innerHTML;
//    if (textHTML.includes(palabra)){
//       text[i].style.backgroundColor = "red";
//    }
// }

