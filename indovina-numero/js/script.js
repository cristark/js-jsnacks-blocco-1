/* Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso. */
//|BONUS
/* provate 3 livelli di complessità */

// Genero numero random da indovinare 
var starNumber = Math.floor(Math.random() * 99 + 1);
console.log(starNumber);

//Numero max di tentativi
var chances = 4;

//Prompt per inserimento numero utente
var sentinel = true;

while (chances > 0 && sentinel) {

    var userNumber = parseInt(prompt('Indovina il numero'));
    console.log(userNumber);

    if (userNumber == starNumber) {
        sentinel = false;
    } else {
        chances--;
        alert('Numero errato!' + '\n' + 'Hai ancora ' + chances + ' possiblità');
    }

    console.log('Hai ancora ' + chances + ' possiblità');
}

var finalMessage = 'COMPLIMENTI! HAI INDOVINATO IL NUMERO!';

if (chances == 0) {
    finalMessage = 'HAI PERSO!';
}

alert(finalMessage);
