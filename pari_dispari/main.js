 /* 

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

//Funzione random numero 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
    
// dichiaro variabili per la scelta del pari e dipari utente, del numero dell'utente da 1 a 5, e numero rnd Pc da 1 a 5 
let userChoise = prompt('Scegli pari o dispari?');
let userNumber = Number(prompt('scegli un numero da 1 a 5'))
let pcNumber = getRndInteger(1,5)


// funzioni check se somma pari ==> valore booleano
function pariDispariChecker(numb1, numb2) {

    let sum = numb1 + numb2;
    if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

//confronto la somma con la scelta da parte dell'utente e mostro la scelta, i numeri dei "giocatori", e chi ha vinto!
//aggiunto anche step di controllo se utente sbaglia valori richiesti  

if (pariDispariChecker(userNumber, pcNumber) && userChoise === "pari") {                            
    console.log(`User ha scelto ${userChoise} : ${userNumber} and Pc: ${pcNumber}`);
    console.log('complimenti hai vinto!');

} else if (!(pariDispariChecker(userNumber, pcNumber)) && userChoise === "dispari") {
    console.log(`User ha scelto ${userChoise} : ${userNumber} and Pc: ${pcNumber}`);
    console.log('complimenti hai vinto!');

} else if(userChoise !== 'pari' || userChoise !== 'dispari'|| userNumber < 1 || userNumber > 5 || userNumber === NaN ){
    console.log('valori inseriti non corretti');
} else{

    console.log(`User ha scelto ${userChoise} :${userNumber} and Pc: ${pcNumber}`);
    console.log('ritenta sarai più fortunato');
}

