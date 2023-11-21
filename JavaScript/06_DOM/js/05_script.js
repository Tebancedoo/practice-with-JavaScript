
/*const encabezado = document.querySelector('.contenido-hero h1').textContent = 'nuevo head';
console.log (encabezado);//agregar modificaciones
console.log(encabezado.InnerText);//visibility: hidden, no lo encuentra
console.log(encabezado.textContent);//visibility: hidden, si lo encuentra
console.log(encabezado.innerHTML);*/

//agregar modificaciones
/*const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;
console.log(encabezado);*/

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';


//cambiar elementos del estilo del h1
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform= 'uppercase';
encabezado.style.fontSize= '36px';


//crear enlace
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo Enlace';
enlace.href = '/nuevo_enlace';
console.log(enlace);


//

