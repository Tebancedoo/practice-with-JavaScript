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

/*function recuperarTitulo() {
    alert(document.getElementById("titulo1").innerText)
}*/

//TextContent
/*Es una propieda que nos permite representar el contenido de un nodo y sus decendiente*/

/*var text = Node.textContent;
Node.textContent = string;*/

//InnerHTML
/*Es una propiedad que nos deja renornar el HTML, permite leer un dato o asignarlo a contenido de un div, o bien del mismo control. Permitiendo asi asignarle valores a los controles */


/*<div id ="DivContenedor"><h1>Texto inicial</h1>

    
<script>
    var element = document.getElementById("DivContenedor");
    element.innerHTML = "Texto final";
</script>*/

//Funciones dom

/*
Window: el objeto window es un objeto del navegador que siempre está en la parte superior de la jerarquía. Es como una API que se utiliza para configurar y acceder a todas las propiedades y métodos del navegador. Es creado automáticamente por el navegador.
Document: cuando se carga un documento HTML en una ventana, se convierte en un objeto documento. El objeto document tiene varias propiedades que hacen referencia a otros objetos que permiten acceder y modificar el contenido de la página web. Si es necesario acceder a cualquier elemento en una página HTML, siempre comenzamos accediendo al objeto 'document'.
Form: está representado por etiquetas de formulario .
Link: está representado por etiquetas de enlace .
Anchor: está representado por etiquetas href.
Form Control Element: el formulario puede tener muchos elementos de control, como campos de texto, botones, botones de radio, casillas de verificación, etc.
Además, para acceder y modificar dichos parámetros se utilizan diferentes métodos o funciones. Los métodos disponibles son:

write (“string”): Escribe la cadena dada en el documento.
getElementById(): devuelve el elemento que tiene el valor de identificación dado.
getElementsByName(): devuelve todos los elementos que tienen el valor del nombre dado.
getElementsByTagName(): devuelve todos los elementos que tienen el nombre de etiqueta dado.
getElementsByClassName(): devuelve todos los elementos que tienen el nombre de clase dado.
querySelector(): devuelve el primer elemento del documento
createElement(): crea un elemento con el valor dado.
appendChild(): añade el nodo Text como hijo del nodo Element
createTextNode(): crea un nodo de tipo Text.
nodoPadre.appendChild(): añade un nodo como hijo de otro nodo. 
removeChild(): elimina el nodo especificado.
*/



