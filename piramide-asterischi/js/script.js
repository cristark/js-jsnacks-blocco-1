/* Realizzare (utilizando i cicli for) una piramide di asterischi: 6 righe, prima riga: 1 asterisco, poi a scendere si somma di 2 la riga precedente, ultima riga: 11 asterischi */

var altPiramide = 6;
var star, blank;

// Uso ciclo for per visualizzare due numeri per ogni riga(= altezza piramide), il primo numero rappresenta gli spazi vuoti, il secondo il numero di asterischi. Ho dovuto spostare la piramide di un carattere verso dx per ogni riga per non avere errori sull'ultima riga (base della piramide) che altrimenti avrebbe 0 spazi vuoti.

for (i = 0; i < altPiramide; i++) {
    blank = altPiramide - i;
    star = i * 2 + 1;
    console.log(' '.repeat(blank), '*'.repeat(star));
}







/* //Ragionamento per visualizzare piramide e spazi vuoti
blank = altPiramide - i - 1;
star += blank - 1


12345*
1234***
123*****
12*******
1*********
*********** */