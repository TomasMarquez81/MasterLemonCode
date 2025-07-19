/*
2. Concat
Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {}; // Implementation here.
Opcional
Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
*/
console.log("************** DELIVERABLE 02 *********************");

//## Apartado A
const concat = (a, b) => [...a, ...b]; // Implementation here.

const arrayA = [1,2,3]
const arrayB = [4,5,6]
const arrayC = concat(arrayA,arrayB)
console.log(arrayC)

//## Apartado B
//Uso el metodo flat que me crea un array quitando los niveles
const concatMulti = (...arg) => [...arg.flat()];
const arrayD = concatMulti(arrayA, arrayB, arrayC)
console.log(arrayD)