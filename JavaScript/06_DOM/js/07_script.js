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

