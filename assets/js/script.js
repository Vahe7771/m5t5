/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
var area = l1 * l2;
    return area;
}
console.log(area(10, 20));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
    console.log(crazySum(10, 10));
}
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(a) {
    if (a > 19) {
        return (a - 19) * 3;
    } else {
        return a - 19;
    }
    
}
console.log(crazyDiff(10));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(10));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(a) {
    if (a === "codifiche") {
        return a;
    } else {
        return "codifiche" + a;
    }
}
console.log(epify("Codifiche"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(a) {
    if (a % 3 === 0 || a % 7 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(10));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(a) {
    return a.split("").reverse().join("");
}
console.log(reverseString("codifiche"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
upperFirst = (a) => a.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(a) {
    a = a.substring(1, a.length - 1);
    return a.substring(1, a.length - 1);

}
console.log(cutString("a"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}
console.log(giveMeRandom(10));
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 5) {
            console.log(a[i]);
            sum += a[i];
        }
    }
    return sum;
}

console.log(checkArray(giveMeRandom(10)));
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
    { price: 10, name: "penna", id: 1, quantity: 2 },
    { price: 20, name: "cartucce", id: 2, quantity: 3 },
    { price: 30, name: "cavo", id: 3, quantity: 4 },
]

function shoppingCartTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
}
console.log(shoppingCartTotal());
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array1 = [
    { price: 10, name: "penna", id: 1, quantity: 2 },
    { price: 20, name: "cartucce", id: 2, quantity: 3 },
    { price: 30, name: "cavo", id: 3, quantity: 4 },

]

function addToShoppingCart(a) {
    shoppingCart.push(a);
    return shoppingCart.length;
}
console.log(addToShoppingCart({ price: 10, name: "penna", id: 1, quantity: 2 }));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
shoppingCart2 = [
    { price: 10, name: "penna", id: 1, quantity: 2 },
    { price: 20, name: "cartucce", id: 2, quantity: 3 },
    { price: 30, name: "cavo", id: 3, quantity: 4 },
]

function maxShoppingCart(a) {
    let max = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i].price > max) {
            max = a[i].price;
        }
    }
    return max;
    }

console.log(maxShoppingCart(shoppingCart2));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
shoppingCart3 = [
    { price: 10, name: "penna", id: 1, quantity: 2 },
    { price: 20, name: "cartucce", id: 2, quantity: 3 },
    { price: 30, name: "cavo", id: 3, quantity: 4 },

]

function latestShoppingCart(a) {
    for (let i = 0; i < a.length; i++) {
        if (i == a.length - 1) {
            return a[i];
        }else{
            continue;
        }
    }
    return a[a.length - 1];
}
console.log(latestShoppingCart(shoppingCart3));
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(x) {
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 10);
        if (random > x) {
            return;
        }
        console.log(random);
    }
    }

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function average(a) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === "number") {
            sum += a[i];
            count++;
        }
    }
    return sum / count;
}
console.log(average([1, 2, 3, 4, 5]));
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function longest(a) {
    let longest = " ";
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > longest.length) {
            longest = a[i];
        }
    }
    return longest;
}
console.log(longest([]));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function antiSpam(a) {
    if (typeof a !== "string") {
        return false;
    }else
    return !a.includes("SPAM") && !a.includes("SCAM");
}
console.log(antiSpam("SPAM SPAM SPAM"));
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function daysPassed(a) {
    let today = new Date();
    let date = new Date(a);
    return Math.floor((today - date) / (1000 * 60 * 60 * 24));
}
console.log(daysPassed("2020-01-01"));
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
        let row = [];
        for (let j = 0; j < y; j++) {
            row.push(i.toString() + j.toString());
        }
        matrix.push(row);
    }
    return matrix;
}
console.log(matrixGenerator(3, 2));