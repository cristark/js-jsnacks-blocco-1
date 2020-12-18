/* quarto snack
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore */

console.log('---------------------------------------------------');
console.log('BENVENUTO NELL\'AVANZATISSIMO MISURATORE DI NUMERI!');
console.log('---------------------------------------------------');

// Creo le due varibili da far inserire all'utente
var firstNum = parseFloat(prompt('Inserisci un numero'));
var secondNum = parseFloat(prompt('Inserisci un numero'));

console.log('Il primo numero inserito è: ' + firstNum);
console.log('Il secondo numero inserito è: ' + secondNum);

// Creo messaggio standard nel caso in cui i numeri fossero uguali
var message = 'I numeri sono uguali';
var standMex = 'Il numero più alto è: ';

// Condizione per calcolare numero più grande
if (firstNum > secondNum) {
    message = standMex + firstNum;
} else if (firstNum < secondNum) {
    message = standMex + secondNum;
}   

// Stampa su Console numero maggiore
console.log(message);