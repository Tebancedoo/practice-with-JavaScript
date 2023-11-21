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

    console.log('presionando el curso');

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
articulosCarrito = [...articulosCarrito, infoCurso];


console.log(articulosCarrito);

function carritoHTML() {
    articulosCarrito.forEach(curso=>{
        const row = document.createElement('tr');
        row.innerHTML = '<td> ${curso.titulo} </td>;'

        contenedorCarrito.appendChild(row);
    })
}

*/ 
