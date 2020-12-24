/* Crea un array vuoto e chiedi all’utente un numero da inserire
nell’array. Continua a chiedere i numeri all’utente e a inserirli
nell’array fino a quando la somma degli elementi è minore di 50. */

// Creo Array vuoto e variabili iniziali
var numbersArr = [];
var somma = 0;
var sentinel = true;

// Finchè la variabile sentinella non è "false" continua a far inserire numeri all'utente e inseriscili nell'array di riferimento. Attraverso un istruzione condizionale (if) interrompo il ciclo.
var i = 0;
while (sentinel) {  
    
    var number = parseInt(prompt('Inserisci un numero:'));  
    numbersArr.push(number)
    console.log(numbersArr);
    somma += numbersArr[i];
    console.log(somma);

    if (somma >= 50) {
        sentinel = false;
    }
    i++
}

alert('Hai raggiunto il numero massimo consentito!');


