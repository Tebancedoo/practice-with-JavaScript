//Seleccionar elementos por sus clases

const header = document.getElementsByClassName('header');//me muestra las clases que tienen dos nombres
console.log(header);

const hero = document.getElementsByClassName('hero');//busca el nombre de la clase
console.log(hero);

const contenedores = document.getElementsByClassName('contenedor');//busca el nombre de la clase
console.log(contenedores);

const noExiste =  document.getElementsByClassName('no-existe');//busca el nombre de la clase
console.log(noExiste);

const formulario = document.getElementById('formulario');//busca el id
console.log(formulario); 
