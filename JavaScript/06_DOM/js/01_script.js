let documento

elemento = document;//accedo al documento del html
elemento = documento.all;//accedo a todo del html
elemento = document.head;//accedo al head del html
elemento = document.body;//accedo al body del html
elemento = documento.forms;//accedo a los formularios del html
elemento = documento.forms[0];//accedo a los formularios con la posicion 0 del html
elemento = documento.forms[0].id;//accedo al id de los formularios del html
elemento = documento.forms[0].method;//accedo al method de los formularios del html
elemento = documento.forms[0].action;//accedo a acction de los formularios del html
elemento = documento.forms[0].classlist;//accedo a las jlistas de clases de los formularios del html

elemento = document.links;//accedo a los links del documento hatml
elemento = document.links[4];//accedo a los links del documento con la posicion 4(5) hatml
elemento = document.links[4].className;//accedo a los nombes de los links del documento con la posicion 4(5) hatml

elemento = document.images;//accedo a las imagenes del documento

console.log(elemento);
