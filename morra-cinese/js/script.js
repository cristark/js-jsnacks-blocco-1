// | GIOCO CARTA FORBICE SASSO - MORRA CINESE
console.log('--------------');
console.log('MORRA CINESE');
console.log('--------------');

// Assegno array base gioco
var rspArr = ['carta', 'forbice', 'sasso'];
// Assegno variabili punteggi base per i giocatori
var userScore = 0;
var cpuScore = 0;

// Variabili sentinella per chiudere cicli while
var sentinel = true;

while (sentinel) {
    // Creazione prompt per decisione segno UTENTE
    var userText = prompt('Scegli tra carta, forbice o sasso');
    var rspUserChoice = userText.toLowerCase();
    console.log('UTENTE sceglie: ' + rspUserChoice);

    // Assegnazione random segno CPU
    var rspCpuNumChoice = Math.floor(Math.random() * 3);
    var rspCpuChoice = rspArr[rspCpuNumChoice];
    console.log('CPU sceglie: ' + rspCpuChoice);

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

    console.log('VINCE: ' + rspResult);

    // Variabile per capire chi è il vincitore della partita
    var rspMessagge;

    if (rspResult == rspUserChoice) {
        rspMessagge = 'HAI VINTO!';
        userScore += 1;
    }   else if (rspResult == rspCpuChoice) {
        rspMessagge = 'HAI PERSO!';
        cpuScore += 1;
    }   else {
        rspMessagge = 'Parità';
    }

    console.log(rspMessagge);
    console.log('Utente: ' + userScore);
    console.log('CPU: ' + cpuScore);
    alert(rspMessagge);
    alert('Utente: ' + userScore + '\n' + 'CPU: ' + cpuScore);

    if (userScore == 4 || cpuScore == 4) {
        sentinel = false;
    }
}

if (userScore == 4) {
    rspMessagge = 'COMPLIMENTI! HAI VINTO LA PARTITA!';
}   else {
    rspMessagge = 'Mi dispiace, hai perso la partita. Tenta di nuovo!';
}   

alert(rspMessagge);


