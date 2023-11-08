/*const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);
console.log(boolean1 === boolean3);

const boolean4 = new Boolean(true);
console.log(typeof boolean4) */

const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2);
console.log(boolean1 === true);
console.log(boolean2 === "true");

const autenticado = true;

if(autenticado){
    console.log('Si puedes ver netflix');
}else{
    console.log('No puedes ver nextflix');
}//operador ternario

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');
/*Objeto: Un objeto en Java Script es una entidad independiente con propiedades y tipos
(un objeto del mundo real)*/ 

var myCar= new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;


/*Funciones: Las funciones son un conjunto de bloques que realizan determinada acción */
function square(number){
    return number * number;
}

/*Array: Los array o arreglos son similares a una lista cuyo protoripo proporciona métodos para efectuar operaciones
de recorrido y de mutación*/

let frutas = ["Manzana","Melon","Kiwi","Mamoncillo"];
//console.log(frutas.length);

/*If: El if es un metodo de decisión el cual evalua si una condicion es verdadera, de ser asi ejecuta un fragmeto de codigo,
de ser falsa, ejecuta otro*/

var b = "false";

if (b == "true"){
    console.log("Es verdadero");
}else
    console.log ("Es falso");

//switch //for //while //do while






