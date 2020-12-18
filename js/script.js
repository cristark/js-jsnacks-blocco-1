/* Primo snack
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while */

var number, somma;

somma = 0;
number = [];

// Variabile con FOR
for (i = 0; i <= 5; i++) {
    number.push(parseFloat(prompt('Inserisci un numero:')));
    somma += number[i]; 
}

console.log(number);
console.log(somma);

//VARIABILE CON WHILE
var numWhile, sumWhile;

var i = 0;
sumWhile = 0;

while (i <= 5) {
    numWhile = parseFloat(prompt('Inserisci un numero:'));
    i++;
    sumWhile += numWhile;
}

console.log(sumWhile);