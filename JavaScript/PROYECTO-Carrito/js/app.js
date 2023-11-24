//Variables
const carrito = document.querySelector('#carrito');
const ContenedorCarrito = documnet.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){

    //cuando agregar un curso "presionas el agregar"
    listaCursos.addEventListener('click', agregarCurso);


    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',() => {

        articulosCarrito = [];
        limpiarHTML();
    });
     
}

//Funciones
function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        //console.log('Agregando al carrito');
        //console.log(e.target.parentElement.parentElement);
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}
/*voy aquiiiiii */

//Eliminar un curso del carrito
function elimarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }


//lee contenido del HTML, al que le dimos click
function leerDatosCurso(curso){
    //console.log(curso);


}

//revisa si un elemento ya existe en el carrito
const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
if(existe){
    //actualiza la cantidad
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

}

//crear un objeto con el cotenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


//limpiar html
limpiarHTML();


//muestra el carrito de compras en el html
function carritoHTML() {
    articulosCarrito.forEach(curso => {

        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');

        row.innerHTML = '
        <td> <img src="${curso.imagen}" width="100"> </td>
         <td> ${curso.titulo} </td>
         <td> ${curso.precio}</td>
         <td> ${curso.cantidad}</td>

         <td>
            <a href="#" class="borrar-curso" data-id="${id}" > </a>
         </td>;

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




//x en el boton rojo y agragar funcionalidad carrito al proyecto
