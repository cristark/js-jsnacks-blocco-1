/* quinto snack
L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga. */

// Creo le due varibili da far inserire all'utente
var firstWord = prompt('Inserisci la prima parola');
var secondWord = prompt('Inserisci la seconda parola');

console.log('La prima parola inserita è: ' + firstWord);
console.log('La seconda parola inserita è: ' + secondWord);

// Misuro la lunghezza delle due parole inserite
var lungh1 = firstWord.length;
var lungh2 = secondWord.length;

console.log('La prima parola ha: ' + lungh1 + ' caratteri');
console.log('La seconda parola ha: ' + lungh2 + ' caratteri');

// Creo condizione per stabilire quale parola stampare prima dell'altra
if (lungh1 > lungh2) {
    console.log(firstWord);
    console.log(secondWord);
} else if (lungh1 < lungh2) {
    console.log(secondWord);
    console.log(firstWord);
} else {
    console.log('Le parole inserite hanno lo stesso numero di caratteri');
    console.log(firstWord);
    console.log(secondWord);
}

