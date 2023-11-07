
const producto1 = 'Monitor 20 pulgadas';

console.log(producto1);

//.replace para reemplazar
console.log(producto1.replace('Pulgadas', '"' ));
console.log(producto1.replace('Monitor', 'Monitor Curvo'));

//slice para cortar
console.log(producto1.slice(0, 10));
console.log(producto1.slice(8));
console.log(producto1.slice(2, 1));

//Alternativa a Slice

console.log(producto1.substring(0, 10));
console.log(producto1.substring(2,1));

// Circula con la inicial de una persona
const usuario = "Esteban";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));