//crear enlace
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo_enlace';
console.log(enlace);


//seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);


//crear una tarjeta (card)

//crear datos de la card
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo1.textContent = 'Concierto de Rock';
parrafo1.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo1.textContent = '$800 por persona';
parrafo1.classList.add('precio');


//crear div
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//crer la imagen
const Imagen = document.createElement('img');
Imagen.src = 'img/hacer2.jpg';


//crear el card
const card = document.createElement('div');
card.classList.add('card');


//asignar imagen
card.appendChild(Imagen);


//asignar info
card.appendChild(info);


//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

//console.log(card);

