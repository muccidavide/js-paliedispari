
// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


// Chiedo parola utente 
let userWordInsert = String(prompt('Inserisci una parola'))

function palindromeWordChecker(userWord) {
    const userWordArray = [] 
    // calcolo Array caratteri parola
    for (let i = 0; i < userWord.length; i++) {
        const caracter = userWord[i];
        userWordArray.push(caracter)      
    }

    const userWordArrayReverse = []
    // calcolo Array caratteri parola reverse
    for (let i = parseInt(userWord.length -1) ; i >= 0; i--) {
        const caracter = userWord[i];
        userWordArrayReverse.push(caracter)      
    }
    // confronto i due array trasformandoli in stringhe e ottengo valore booleano
    if (String(userWordArray)== String(userWordArrayReverse)) {
        return true
    } else{
        return false
    }
}
    // eseguo verifica e do il risultato in console

    if (palindromeWordChecker(userWordInsert)) {
        console.log(`la parola ${userWordInsert} è palindroma`);
    } else {
        console.log(`la parola ${userWordInsert} non è palindroma`);
    }

    /* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Non reinventate la ruota, per generare un numero random tra un minimo e un massimo usate quella che trovate su W3School.
 */
    