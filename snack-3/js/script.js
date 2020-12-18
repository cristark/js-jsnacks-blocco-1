/* terzo snack
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// Creo lista invitati
var guestList = ['Andrea', 'Antonio', 'Cesare', 'Filippo', 'Antonio', 'Cristiano', 'Alessia', 'Barbara', 'Cristina'];

// Chiedo all'utente di inserire il suo nome
var guestName = prompt('Inserisci il tuo nome');

// Giustifico il valore inserito per evitare errori di lettura all'interno della lista
guestName = guestName.charAt(0).toUpperCase() + guestName.substring(1).toLocaleLowerCase();
console.log(guestName);

// Creo messaggio standard per esito controllo lista
var message = 'Mi dispiace ma non sei in lista';

// Istruzioni per controllare se il nome inserito è all'interno della lista
for (var i = 0; i < guestList.length; i++) {
    if (guestName == guestList[i]) {
        message = 'Puoi entrare!';
    }
}

// Stampa su Console esito controllo
console.log(message);

