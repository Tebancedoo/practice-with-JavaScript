const numero1 = "20";
const numero2 = "20.2";
const numero3 = "uno";
const numero4 = 20.2;


console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));

console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));



const numero01 = 20;
const numero02 = "20";
const numero03 = 30;

//revisar si dos numero son iguales
console.log(numero01 == numero03);
console.log(numero01 == numero02);

//el === compara valores y tipo de datos (mas estricta)
console.log(numero01 === numero03);
console.log(numero01 ===  parseInt(numero02));

//saca el tipo de dato
console.log(typeof numero01);
console.log(typeof numero02);


//diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

console.log(numero1 != numero2);

console.log(numero1 !== parseInt(numero2));




