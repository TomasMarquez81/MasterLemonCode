/*
. Array operations
Head
Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = () => {}; // Implementation here.
Tail
Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = () => {}; // Implementation here.
Init
Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = () => {}; // Implementation here.
Last
Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = () => {}; // Implementation here.
*/
console.log("************** DELIVERABLE 01 *********************");

 //## Apartado A
  const head = ([first]: any) => first; // Implementation here.

  const myArray1 = ["yo", "tu", 3, 4]

  console.log(head(myArray1))
  
//## Apartado B
const tail = (myarray) => myarray.slice(1); // Implementation here.

console.log(tail(myArray1))

//## Apartado C
const init = (myarray) => myarray.slice(0, -1); // Implementation here.

console.log(init(myArray1))
//## Apartado D
const last = (myarray) => myarray[myarray.length -1]; // Implementation here.

console.log(last(myArray1))
