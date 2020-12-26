// | GIOCO CARTA FORBICE SASSO
console.log('--------------');
console.log('MORRA CINESE');
console.log('--------------');

// Assegno array base gioco
var rspArr = ['carta', 'forbice', 'sasso'];

// Creazione prompt per decisione segno UTENTE
var rspUserChoice = prompt('Scegli tra carta, forbice o sasso');
console.log(rspUserChoice);

// Assegnazione random segno CPU
var rspCpuNumChoice = Math.floor(Math.random() * 3);
console.log(rspCpuNumChoice);
var rspCpuChoice = rspArr[rspCpuNumChoice];
console.log(rspCpuChoice);

//Variabile esito partita
var rspResult;

if (rspUserChoice == 'carta' && rspCpuChoice == 'forbice') {
    rspResult = rspArr[1];
}   else if (rspUserChoice == 'carta' && rspCpuChoice == 'sasso') {
    rspResult = rspArr[0];
}   else if (rspUserChoice == 'forbice' && rspCpuChoice == 'sasso') {
    rspResult = rspArr[2];
}   else if (rspUserChoice == 'forbice' && rspCpuChoice == 'carta') {
    rspResult = rspArr[1];
}   else if (rspUserChoice == 'sasso' && rspCpuChoice == 'carta') {
    rspResult = rspArr[0];
}   else if (rspUserChoice == 'sasso' && rspCpuChoice == 'forbice') {
    rspResult = rspArr[2];
}   else  {
    rspResult = 'Parità!';
}

console.log(rspResult);

// Variabile per capire chi è il vincitore della partita
var rspMessagge;

if (rspResult == rspUserChoice) {
    rspMessagge = 'HAI VINTO!';
}   else if (rspResult == rspCpuChoice) {
    rspMessagge = 'HAI PERSO!';
}   else {
    rspMessagge = 'Parità';
}

console.log(rspMessagge);


