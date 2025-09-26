console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");
console.log("------------------101 Biggest Word----------------");

function biggestWord(phrase:string) {
    let arrayPhrase = phrase.split(" ");
    let word:string = "";
    arrayPhrase.forEach((element: string) => {
        if (element.length > word.length){
            word = element;
        }
    } )
    return word;
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
console.log("------------------102 Calificacions----------------");

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

function printAverage(classResults) {
   const noteAverage: number = averageGradeCalculation(classResults)
    switch (true) {        
        case (noteAverage == 10):
            return "Matrícula de Honor";
        case (noteAverage >= 9):
            return "Sobresaliente";
        case (noteAverage >= 7):
            return "Notable";
        case (noteAverage >= 6):
            return "Bien";
        case (noteAverage >= 5):
            return "Suficiente";
        case (noteAverage >= 4):
            return "Insuficiente";
            case (noteAverage >= 0):
                return "Muy deficiente";
        default:
            return "Nota no válida";
    }
  }
  function averageGradeCalculation(classResults) {
    let sum: number = 0;
    const dataNoteArray = Object.values(eso2o);
    
    dataNoteArray.forEach((element) => {
        sum += element
    })
    
    return sum / dataNoteArray.length;
  }
  console.log(printAverage(eso2o))

  console.log("------------------103 check-arguments----------------");

  function f(input) {
    let result = input === undefined ?  "Unknown" : input === null ?  "" : input;
    return result;
  }

  /*
  function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}
  */
  console.log(f("hola"))

  console.log("------------------104 clone-merge----------------");
  
  function clone(source) {
    const cloneObject = {...source};
    return cloneObject;    
  }
  function merge(source, target) {
    const mergeObject = {...target, ...source}
    return mergeObject
  }

  // Por ejemplo, dados estos 2 objetos:
let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

console.log(clone(a));

// El resultado de mezclar a sobre b sería:
console.log(merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log("------------------105 deep-equal----------------");

const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

//JSON.stringify tiene sus limiyaciones como el orden de las propiedades
function isEqual(a, b) {
 return JSON.stringify(a) === JSON.stringify(b)
}

console.log(isEqual(user, clonedUser)); // true

const userNew = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  let clonedUserNew = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  
  function isDeepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  
  console.log(isDeepEqual(userNew, clonedUserNew)); // true

  console.log("------------------106 dices----------------");

  function crearSimuladorDeDados() {
    let dado1 = null;
    let dado2 = null;

    return {
        tirar: function () {
            dado1 = Math.floor(Math.random() * 6) + 1;
            dado2 = Math.floor(Math.random() * 6) + 1;
        },
        reset: function () {
            dado1 = null;
            dado2 = null;
            console.log("🔄 Dados reseteados.");
        },
        resultado: function () {
            if (dado1 === null || dado2 === null) {
                console.log("❗ Debes tirar los dados primero.");
                return;
            }

            console.log(`🎲 Resultado: Dado 1 = ${dado1}, Dado 2 = ${dado2}`);

            if (dado1 === 6 && dado2 === 6) {
                console.log("🎉 ¡Doble 6! ¡Ganaste un premio!");
            }
        }
    };
}

const dados = crearSimuladorDeDados()
dados.tirar()
dados.tirar()
dados.resultado()

console.log("------------------108 includes----------------");

function includes(array, value) {
    return array.includes(value)
  }
  
  // Ejemplo:
  console.log(includes([1, 2, 3], 3)); // true
  console.log(includes([1, 2, 3], 0)); // false

  console.log("------------------109 Primes----------------");
  function showPrimes(from, to) {
    for (let i = from; i <= to; i++) {
        let esPrimo = true;

        if (i < 2) {
            continue; // Los números menores a 2 no son primos
        }

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            console.log(`✅ El número ${i} es primo.`);
        } else {
            console.log(`❌ El número ${i} no es primo.`);
        }
    }
}

    showPrimes(5, 19)

    console.log("------------------110 Read Book----------------");

    function isBookRead(books, titleToSearch) {
        const found = books.find((element) => element.title === titleToSearch);
        if (found) {
            return found.isRead            
        }
        return "❌ No esta en la lista de libros"
    }

      // Ejemplo:
    const books = [
        { title: "Harry Potter y la piedra filosofal", isRead: true },
        { title: "Canción de hielo y fuego", isRead: false },
        { title: "Devastación", isRead: true },
    ];

      console.log(isBookRead(books, "Devastación")); // true
      console.log(isBookRead(books, "Canción de hielo y fuego")); // false
      console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

    console.log("------------------111 Reverse Text----------------");

function reverseText(text) {
    return text.split(" ").reverse().join(" ")
}

let text = "libro casa tejado"
console.log(reverseText(text))

console.log("------------------112 Subsets----------------");

function subsets(word) {
    const size = word.length;
    let myArrayWord = [];
    for (let i = 0; i < size - 1; i++) {
        let currentWord = i > 0 ? myArrayWord[i - 1] : word;
        let arr = currentWord.split("");
        arr.shift();
        myArrayWord[i] = arr.join("");
    }
    return myArrayWord;
}
  
  // Ejemplo
  console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

  console.log("------------------113 This----------------");

  let surname = "Pérez";
  let person = {
    name: "Juan",
    surname: "González",
    wife: {
      name: "Ana",
      surname: "Jiménez",
      getSurname: function() {
        return this.surname;
      },
    },
  };
  
  console.log(person.wife.getSurname());
  // getSurname se ejecuta como un método del objeto wife, por lo tanto this dentro de getSurname apunta a person.wife. Y person.wife.surname = "Jiménez".
  let surnameFunction = person.wife.getSurname;
  //console.log(surnameFunction());
  // Estás extrayendo la función sin su contexto. Entonces this pierde la referencia a wife y queda apuntando al objeto window , como window.surname no existe nos devuelve undefine 
  console.log(surnameFunction.call(person));
  // en este caso se obliga a que la llamada de la funcion se haga por el objeto person y sale González

  console.log("------------------114 Values----------------");

  function values(obj) {
    return Object.values(obj)
  }
  
  // Ejemplo:
  console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

  function Person2(name) {
    this.name = name;
  }
  
  Person2.prototype.walk = function() {
    console.log("I'm walking");
  };
  
  var john = new Person2("John");
  console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

  console.log("------------------115 Zip----------------");

  function zipObject(keys, values) {
    return Object.fromEntries(keys.map((key, index) => [key, values[index] = values[index] != undefined ? values[index] : "" ]));
  }
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}
  console.log(zipObject(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}

  console.log("------------------116 ZZCrypt----------------");

  // Descifra el siguiente secreto:
let secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
const plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
    let myarr = cipher.split("")
    let value =""
    const clave = Object.fromEntries(myarr.map((key, index) => [key, plain[index]]))

    const message = secret    
  .split("")              // convertimos a array
  .map(key => value = clave[key] != undefined ? clave[key] : " ")    // sacamos los valores del objeto
  .join("");              // los unimos en string

    return console.log(message)
}

decrypt(secret)

console.log("------------------201 Args----------------");

function f2(a: any, { b }: { b?: any } = {}, c: any = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
    console.log("----- fin -----");
  }
  
    //## Apartado A
    // en este caso se le pasa dos argumentos por eso en el primer console sale 2, luego  sale el la el parametro a y de compara el parametro a con el argumento 0 que son iguales, luego el parametro b y despues compara el b con al argumento 1 que son igual y por ultimo como no le pasa argumento 2 pero tiene un valor por defecto sale ese valor pero la compraracion da false.
  
  f2("JS rocks!", { b: "b" });
    
  //## Apartado B
  //se le pasa un solo argumento por eso lo primero que nos da es uno, que como es el parametro a  y en la compraracion es lo mismo que se le pasa en el argumento, en el b como no se le pasa es undefine y por eso da true la comparacion, en el c como tiene un valor por defecto de 100 al comprarlo con undefine es false.
     
  f2({ b: "b" });
  
  //## Apartado C
  // En este da error por pasarle null en el parametro b
  
  //f2("JS sucks!", null, 13);

  console.log("------------------202 Array Operations----------------");

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

console.log("------------------203 Concat----------------");
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

console.log("------------------204 Console ----------------");
//## Apartado A
var a1 = 1;
let b1 = 2;

{
    //entra en el catch ya que b1 no esta declarado dentro del ambito
  try {
    //console.log(a1, b1);
  } catch (error) {console.log("error console")}
  let b1 = 3;
  //en este console log sale 1 3 ya que b1 esta declarado dentro del ambito
  console.log(a1, b1);
}

  //en este console log sale 1 2 ya que b1 esta declarado fuera del ambito
console.log(a1, b1);

() => {
  console.log(a1);
  var a1 = 5;
  let b1 = 6;
  console.log(a1, b1);
};

  //en este console log sale 1 2 ya que b1 esta declarado fuera del ambito y el a1 como se usa var se declara al inicio de programa y se vuelve asignar dentor de la funcion pero la funcion no se ejecuta nunca
console.log(a1, b1);

console.log("------------------205 Fibonacci ----------------");

const fib = n => {
  let a = 0, b = 1;
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b]; // multiple assignment con destructuring
  }

  return result;
};

console.log(fib(10))

console.log("------------------206 Players Order ----------------");

const getPlayersOrder = (players, turns) => {
    let current = [...players];

  for (let i = 0; i < turns; i++) {
    const [first, ...rest] = current;
    current = [...rest, first];
  }

  return current;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

console.log("------------------207 Reminder ----------------");

class Reminder {
    text: string;
  constructor(text) {
    this.text = text;
  }

  // se cambia el metodo a funcion flecha ya que si no esta undefine 
  remindMe(delay) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const miRecordatorio = new Reminder("Revisar el correo");
miRecordatorio.remindMe(5)

console.log("------------------208 Slot Machine ----------------");

class SlotMachine {
    coin: number
    // Constructor que inicializa las monedas
    constructor(coin) {
        this.coin = coin;
    }

    // Método para insertar monedas
    insertCoin(coin) {
        this.coin += coin;
        console.log(`Has metido ${coin} ptas y ahora tienes ${this.coin} ptas`);
    }

    // Método principal para jugar una tirada
    play() {
        // Lista de símbolos con su probabilidad (weight) y recompensa (reward)
        const symbols = [
    { emoji: '🍀', weight: 0.05, reward: 300 },   // Muy raro, bajamos aún más
    { emoji: '🔔', weight: 0.08, reward: 200 },
    { emoji: '🍉', weight: 0.1, reward: 150 },
    { emoji: '🍋', weight: 0.17, reward: 100 },
    { emoji: '🍊', weight: 0.25, reward: 50 },     // Subimos chisco (más común)
    { emoji: '🍌', weight: 0.35, reward: 25 },     // Subimos chisco (más común)
];

        // Función interna para seleccionar un símbolo de forma ponderada
        const getRandomSymbol = () => {
            // Suma total de probabilidades
            const totalWeight = symbols.reduce((acc, s) => acc + s.weight, 0);
            // Número aleatorio entre 0 y totalWeight
            let rand = Math.random() * totalWeight;

            // Recorremos símbolos y restamos su peso hasta que rand caiga en uno
            for (const symbol of symbols) {
                if (rand < symbol.weight) return symbol;
                rand -= symbol.weight;
            }
        };

        // Validación: si no hay suficiente dinero, salimos
        if (this.coin < 25) {
            return console.log("❌ Te hace falta más dinero 💶");
        }

        // Restamos el coste de una tirada
        this.coin -= 25;

        // Generamos 3 símbolos (tirada)
        const reel = [getRandomSymbol(), getRandomSymbol(), getRandomSymbol()];

        // Mostramos los símbolos con formato
        const display = reel.map(s => s.emoji).join(" | ");
        console.log(`🎰 ${display}`);

        // Verificamos si los tres símbolos son iguales
        const allEqual = reel.every(s => s.emoji === reel[0].emoji);

        // Resultado de la tirada
        if (allEqual) {
            const prize = reel[0].reward;
            this.coin += prize;
            console.log(`🎉 ¡Has ganado ${prize} ptas! Tienes ${this.coin} ptas`);
        } else {
            console.log(`😢 No has ganado. Te quedan ${this.coin} ptas`);
        }
    }
}

// 👇 Ejemplo de uso de la máquina
const machine1 = new SlotMachine(25); // Creamos una máquina con 25 ptas

machine1.play();  //Jugamos
machine1.insertCoin(500); // Metemos 500 ptas
machine1.play();         // Seguimos jugando
machine1.play();
machine1.play();
machine1.play();
machine1.play();

console.log("------------------209 Swap ----------------");

let a2 = "A";
let b2 = "B";

// Implementation here, one line, one shot!

console.log(a2 === "B" && b2 === "A" ? "You did it!" : "Keep trying!");

[a2, b2] = [b2, a2]

console.log(a2 === "B" && b2 === "A" ? "You did it!" : "Keep trying!");
