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

// Prompt inserimento nome utente
var username = prompt('Inserisci il tuo nome di gioco:');
document.getElementById('user_name').innerHTML = username;

var rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function() {

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
        document.getElementById('final_result').innerHTML = rspMessagge;
        userScore += 1;
        document.getElementById('score_user').innerHTML = userScore;
    }   else if (rspResult == rspCpuChoice) {
        rspMessagge = 'HAI PERSO!';
        document.getElementById('final_result').innerHTML = rspMessagge;
        cpuScore += 1;
        document.getElementById('score_cpu').innerHTML = cpuScore;
    }   else {
        rspMessagge = 'Parità';
        document.getElementById('final_result').innerHTML = rspMessagge;
    }

});

//Condizione finale per decretare vincitore finale in base al punteggio
if (userScore == 4) {
    rspMessagge = 'COMPLIMENTI! HAI VINTO LA PARTITA!';
}   else {
    rspMessagge = 'Mi dispiace, hai perso la partita. Tenta di nuovo!';
}   

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

    return res
}


