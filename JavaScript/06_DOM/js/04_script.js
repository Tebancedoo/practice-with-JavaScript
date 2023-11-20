const card = document.querySelector('.card');
console.log(card);


//selecciona todos los formulario
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

//muestra una lista vacia porque no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);

//Diferencia entre innerText, textContent, innerHTML con sus significados

//InnerText
/*Es una propiedad que nos permite cambiar o modificar el contenido de un elemento de texto o consultar su valor. */

function recuperarTitulo() {
    alert(document.getElementById("titulo1").innerText)
}

//TextContent
/*Es una propieda que nos permite representar el contenido de un nodo y sus decendiente*/

var text = Node.textContent;
Node.textContent = string;

//Funciones dom

