/* Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso. */
//|BONUS
/* provate 3 livelli di complessità */

// Genero numero random da indovinare 
var starNumber = Math.floor(Math.random() * 99 + 1);
console.log(starNumber);

// Variabile da inserire manualmente per determinare la difficoltà della partita
var difficulty = prompt('Digita il livello di difficoltà: easy - medium - hard');
var game;

//Numero max di tentativi
var chances = 4;


//Prompt per inserimento numero utente
var sentinel = true;

while (chances > 0 && sentinel) {

    var userNumber = parseInt(prompt('Indovina il numero, compreso tra 1 e 100'));
    console.log(userNumber);

    difficultySwitcher();

    console.log('Hai ancora ' + chances + ' possiblità');
}

var finalMessage = 'COMPLIMENTI! HAI INDOVINATO IL NUMERO!';

if (chances == 0) {
    finalMessage = 'HAI PERSO!';
}

alert(finalMessage);


// - FUNZIONI
// Funzione per ridurre il numero di tentativi e mostrarli all'utente
function chancesDecreaser() {
    chances--;
    alert('Numero errato!' + '\n' + 'Hai ancora ' + chances + ' possiblità');
}

// Funzione per i livelli di difficoltà
function difficultySwitcher() {

    switch (difficulty) {
        case 'easy':
            game = levelEasy(starNumber, userNumber);
            break;
        case 'medium':
            game = levelMedium(starNumber, userNumber);
            break;
        case 'hard':
            game = levelHard(starNumber, userNumber);
            break;
    }

    return game;
}

// Funzioni per differenti livelli di difficoltà
function levelEasy(n1, n2) {

    var r = Math.abs(n1 - n2);

    if (n1 > n2 && r >= 35) {
        chancesDecreaser();
        alert('ACQUA!' + '\n' + 'Il numero da indovinare è più alto');
    } else if (n1 < n2 && r >= 35) {
        chancesDecreaser();
        alert('ACQUA!' + '\n' + 'Il numero da indovinare è più basso');
    } else if (n1 > n2 && r >= 20) {
        chancesDecreaser();
        alert('FUOCHINO!' + '\n' + 'Il numero da indovinare è più alto');
    } else if (n1 < n2 && r >= 20) {
        chancesDecreaser();
        alert('FUOCHINO!' + '\n' + 'Il numero da indovinare è più basso');
    } else if (n1 > n2 && r > 0 && r < 20) {
        chancesDecreaser();
        alert('FUOCO!' + '\n' + 'Il numero da indovinare è più alto');
    } else if (n1 < n2 && r > 0 && r < 20) {
        chancesDecreaser();
        alert('FUOCO!' + '\n' + 'Il numero da indovinare è più basso');
    } else {
        sentinel = false;
    }

}

function levelMedium(n1, n2) {

    if (n1 == n2) {
        sentinel = false;
    } else if (n1 > n2) {
        chancesDecreaser();
        alert('Il numero da indovinare è più alto');
    } else {
        chancesDecreaser();
        alert('Il numero da indovinare è più basso');
    } 

}

function levelHard(n1, n2) {

    if (n1 == n2) {
        sentinel = false;
    } else {
        chancesDecreaser();
    }

}