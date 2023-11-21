//funcionalidad de un boton 
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

/*btnFlotante.addEventListener('click', () => {
    console.log('Diste click al boton');
});*/

//mostrar o oculatar el footer
btnFlotante.addEventListener('click', mostarOcultarFooter);

function mostarOcultarFooter (){

    if(footer.classList.contains('activo')){

        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';

    }else{

        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X - Cerrar';

    }
    
} 

/*
//Variables
const carrito = document.querySelector('#carrito');
const Contenedorcarrito = documnet.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){

    //cuando agregar un curso "presionas el agregar"
    listaCursos.addEventListener('click', agregarCurso);

}

function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.constains('agregar-carrito')){
        //console.log('Agregando al carrito');
        //console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}

//lee contenido del HTML, al que le dimos click
function leerDatosCurso(curso){
    console.log(curso);
}

//crear un objeto con el cotenido del curso actual
const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

//revisa si un elemento ya existe en el carrito
const existe = articulosCarrito.som(curso => curso.id === infoCurso.id);
if(existe){
    const cursos = articuloCarrito.map(curso => {
        if(curso.id === infoCurso.id){
            curso.cantidad ++ ;
            return curso;
        }else{
            return curso;
        }
    });
    articulosCarrito = [...cursos]
}else{

    //agrega elementos al arreglo de carrito, agregamos elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);

}


carritoHTML();

//limpiar html
limpiarHTML();


//muestra el carrito de compras en el html
function carritoHTML() {
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = '
        <td> <img src="${curso.imagen}" width="100"></td>
         <td> ${curso.titulo} </td>;
         <td> ${curso.precio}</td>
         <td> ${curso.cantidad}</td>

         <td>
            <a href="#" class="borrar-curso" data-id="${id}" > </a>
         </td>

        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

//elimina los cursos del tbody
function limpiarHTML(){
    contenedorCarrito.innerHTML = '';
}

    while(contenedorCarrito.firstChild){
        contenedorCarrito.remoChild(contenedorCarrito.firstChild)

    }

*/ 
