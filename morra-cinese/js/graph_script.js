// | GIOCO CARTA FORBICE SASSO - MORRA CINESE
// Assegno array base gioco
var rspArr = ['carta', 'forbice', 'sasso'];

// Assegno variabili punteggi base per i giocatori
var userScore = 0;
var cpuScore = 0;

//Variabile esito partita
var rspResult;

// Variabile per capire chi è il vincitore della partita
var rspMessagge;

// | SASSO 
document.getElementById("rock").addEventListener("click", function() {

    // Scelta Utente
    var rspUserChoice = 'sasso';
    document.getElementById('user_choice').innerHTML = rspUserChoice;

    // Assegnazione random segno CPU
    var rspCpuNumChoice = Math.floor(Math.random() * 3);
    var rspCpuChoice = rspArr[rspCpuNumChoice];
    document.getElementById('cpu_choice').innerHTML = rspCpuChoice;
    
    // Funzione per stabilire il segno che vince 
    rspResult = judger(rspUserChoice, rspCpuChoice, rspResult);
    
    // Confronto risultato partita con scelta utente
    if (rspResult == rspUserChoice) {
        rspMessagge = 'HAI VINTO!';
        userScore++;
        document.getElementById('score_user').innerHTML = userScore;
    }   else if (rspResult == rspCpuChoice) {
        rspMessagge = 'HAI PERSO!';
        cpuScore++;
        document.getElementById('score_cpu').innerHTML = cpuScore;
    }   else {
        rspMessagge = 'Parità';
    }

    // Visualizzo esito partita su HTML
    document.getElementById('final_result').innerHTML = rspMessagge;

    //Funzione per decretare vincitore finale in base al punteggio
    var finalMex = getFinalResult(userScore, cpuScore, finalMex, 4);
    document.getElementById('final_message').innerHTML = finalMex;

});

// | CARTA
document.getElementById("paper").addEventListener("click", function() {

    // Scelta Utente
    var rspUserChoice = 'carta';
    document.getElementById('user_choice').innerHTML = rspUserChoice;

    // Assegnazione random segno CPU
    var rspCpuNumChoice = Math.floor(Math.random() * 3);
    var rspCpuChoice = rspArr[rspCpuNumChoice];
    document.getElementById('cpu_choice').innerHTML = rspCpuChoice;
    
    // Funzione per stabilire il segno che vince 
    rspResult = judger(rspUserChoice, rspCpuChoice, rspResult);
    
    // Confronto risultato partita con scelta utente
    if (rspResult == rspUserChoice) {
        rspMessagge = 'HAI VINTO!';
        userScore += 1;
        document.getElementById('score_user').innerHTML = userScore;
    }   else if (rspResult == rspCpuChoice) {
        rspMessagge = 'HAI PERSO!';
        cpuScore += 1;
        document.getElementById('score_cpu').innerHTML = cpuScore;
    }   else {
        rspMessagge = 'Parità';
    }

    // Visualizzo esito partita su HTML
    document.getElementById('final_result').innerHTML = rspMessagge;

    //Funzione per decretare vincitore finale in base al punteggio
    var finalMex = getFinalResult(userScore, cpuScore, finalMex, 4);
    document.getElementById('final_message').innerHTML = finalMex;

});

// | FORBICE
document.getElementById("scissors").addEventListener("click", function() {

    // Scelta Utente
    var rspUserChoice = 'forbice';
    document.getElementById('user_choice').innerHTML = rspUserChoice;

    // Assegnazione random segno CPU
    var rspCpuNumChoice = Math.floor(Math.random() * 3);
    var rspCpuChoice = rspArr[rspCpuNumChoice];
    document.getElementById('cpu_choice').innerHTML = rspCpuChoice;
    
    // Funzione per stabilire il segno che vince 
    rspResult = judger(rspUserChoice, rspCpuChoice, rspResult);
    
    // Confronto risultato partita con scelta utente
    if (rspResult == rspUserChoice) {
        rspMessagge = 'HAI VINTO!';
        userScore += 1;
        document.getElementById('score_user').innerHTML = userScore;
    }   else if (rspResult == rspCpuChoice) {
        rspMessagge = 'HAI PERSO!';
        cpuScore += 1;
        document.getElementById('score_cpu').innerHTML = cpuScore;
    }   else {
        rspMessagge = 'Parità';
    }

    // Visualizzo esito partita su HTML
    document.getElementById('final_result').innerHTML = rspMessagge;

    //Funzione per decretare vincitore finale in base al punteggio
    var finalMex = getFinalResult(userScore, cpuScore, finalMex, 4);
    document.getElementById('final_message').innerHTML = finalMex;

});

// ! RESET BUTTON
document.getElementById("game_reset").addEventListener("click", function() {

    userScore = 0;
    cpuScore = 0;
    document.getElementById('user_choice').innerHTML = '-';
    document.getElementById('cpu_choice').innerHTML = '-';
    document.getElementById('score_user').innerHTML = '0';
    document.getElementById('score_cpu').innerHTML = '0';
    document.getElementById('final_result').innerHTML = '-';
    document.getElementById('final_message').innerHTML = '';

});





// - FUNZIONI -

// Funzione per stabilire il segno che vince
function judger(v1, v2, res) {

    if (v1 == 'carta' && v2 == 'forbice') {
        res = rspArr[1];
    }   else if (v1 == 'carta' && v2 == 'sasso') {
        res = rspArr[0];
    }   else if (v1 == 'forbice' && v2 == 'sasso') {
        res = rspArr[2];
    }   else if (v1 == 'forbice' && v2 == 'carta') {
        res = rspArr[1];
    }   else if (v1 == 'sasso' && v2 == 'carta') {
        res = rspArr[0];
    }   else if (v1 == 'sasso' && v2 == 'forbice') {
        res = rspArr[2];
    }   else  {
        res = 'Parità!';
    }

    return res;
}

// Funzione per stabilire vincitore finale
function getFinalResult(score1, score2, message, limit) {

    if (score1 == limit) {
        message = 'COMPLIMENTI! HAI VINTO LA PARTITA!';
    }   else if (score2 == limit) {
        message = 'Mi dispiace, hai perso la partita. Tenta di nuovo!';
    }   else {
        message = '';
    }

    return message;
}


