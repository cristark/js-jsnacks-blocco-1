/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */

var numbersArr = [];

for (var i = 0; i < 10; i++) {
    var number = randomizer(1, 20);
    numbersArr.push(number);
}

console.log(numbersArr);

var somma = 0;

for (var i = 1; i < numbersArr.length; i+= 2) {
    somma += numbersArr[i];
}

console.log(somma);

// - FUNZIONI
// Genera numeri random (min e max inclusi)
function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}