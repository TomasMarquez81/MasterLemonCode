/*
5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
Ejemplo de uso
class SlotMachine {
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
*/
console.log("************** DELIVERABLE 05 *********************");
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