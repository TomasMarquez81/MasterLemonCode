/*
3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
  // Implementation here.
}
Merge
Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

Por ejemplo, dados estos 2 objetos:

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
el resultado de mezclar a sobre b sería:

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
TIP: Puedes usar la función "clone" del apartado A.

function merge(source, target) {
  // Implementation here.
}
*/
console.log("************** DELIVERABLE 03 *********************")

  function clone(source) {
    const cloneObject = {...source};
    return cloneObject;    
  }
  function merge(source, target) {
    const mergeObject = {...target, ...source}
    return mergeObject
  }

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log(clone(a));

console.log(merge(a, b)); 