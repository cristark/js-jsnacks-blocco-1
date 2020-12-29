/* Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso. */
//|BONUS
/* provate 3 livelli di complessità */

var game;
//Numero max di tentativi
var chances = 4;
// Genero numero random da indovinare 
var starNumber = Math.floor(Math.random() * 99 + 1);
/* console.log(starNumber); */

// Assegno livelli di difficoltà ad un array
var difficultyArr = ['facile', 'medio', 'difficile'];

// Prompt di inserimento difficoltà con controllo corretta digitazione livello
do {

    var difficulty = prompt('Digita il livello di difficoltà: facile - medio - difficile');
    difficulty = difficulty.toLowerCase();

    if (difficultyArr.includes(difficulty) == false) {
        alert('Nome del livello ERRATO. Prova di nuovo!');
    } else {
        alert('Hai selezionato il livello: ' + difficulty.toUpperCase());
    }

} while (difficultyArr.includes(difficulty) == false);

//Variabile sentinella per while
var sentinel = true;

// | Prompt inserimento numero Utente con loop while che si interrompe in caso di digitazione numero corretto o in caso i tentativi a disposzione terminassero
while (chances > 0 && sentinel) {

    var userNumber = parseInt(prompt('Indovina il numero, compreso tra 1 e 100'));
    userNumber = Math.abs(userNumber);
    console.log(userNumber);

    if (isNaN(userNumber)) {
        alert('NON HAI DIGITATO ALCUN NUMERO, RIPROVA');
    } else {
        difficultySwitcher();
    }
}

// Messaggio finale in base all'esito della partita
var finalMessage = 'COMPLIMENTI! HAI INDOVINATO IL NUMERO!';

if (chances == 0) {
    finalMessage = 'HAI PERSO!' + '\n' + 'Il numero da indovinare era: ' + starNumber;
    
}

alert(finalMessage);


// - FUNZIONI
// Funzione per ridurre il numero di tentativi e mostrarli all'utente
function chancesDecreaser() {
    chances--;
    alert('Numero errato!' + '\n' + 'Hai ancora ' + chances + ' possiblità');
    console.log('Numero errato!' + '\n' + 'Hai ancora ' + chances + ' possiblità');
}

// | Funzione per i livelli di difficoltà
function difficultySwitcher() {

    switch (difficulty) {
        case 'facile':
            game = levelEasy(starNumber, userNumber);
            break;
        case 'medio':
            game = levelMedium(starNumber, userNumber);
            break;
        case 'difficile':
            game = levelHard(starNumber, userNumber);
            break;
    }

    return game;
}

// Funzioni per differenti livelli di difficoltà
// Livello facile - Suggerimenti di prossimità al numero su 3 livelli + Numero scelto più alto/basso del numero da indovinare
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

// Livello medio - Suggerimenti numero scelto più alto/basso del numero da indovinare
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

// Livello difficile - Nessun suggerimento
function levelHard(n1, n2) {

    if (n1 == n2) {
        sentinel = false;
    } else {
        chancesDecreaser();
    }

}