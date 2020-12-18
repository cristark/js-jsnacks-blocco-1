/* Secondo snack
Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array  */

var number;
var containerArr = [];

for (i = 0; i < 6; i++) {
    number = parseInt(prompt('Inserisci un numero'));

    if (number % 2 != 0) {
        containerArr.push(number);
    } else {

    }
}

console.log(containerArr);