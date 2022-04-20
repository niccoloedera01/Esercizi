/////////////////
//Istruzioni condizionali (IF)

let anni = 20;

if(anni >= 18) {
    console.log("Camillo può votare 🐱‍🐉");
}

//se c'è una sola istruzione
if (anni >= 18) console.log("Camillo può votare 🐱‍🐉");

anni = 15
if (anni >=18) {
    console.log("Camillo può votare 🐱‍🐉");
} else {
const anniMancanti = 18 - anni;
console.log(`Camillo è troppo giovane. Deve attendere ${anniMancanti} anni`);
}    

let meteo = 'piove';
if (meteo === 'sole') {
    let accessori = 'Crema solare';
} else {
    let accessori = 'Ombrello';
    console.log(`Oggi devo usare: ${accessori}`);
}

//SWITCH
const giorno = 'martedi';

switch (giorno) {
    case 'lunedi':
        console.log("9-13 Lezione di Javascript con sensei Paolo");
        break;
    case 'martedi':
        console.log("9-13 Lezione di Javascript con sensei Paolo");
        console.log("14-18 Lezione di php");
        break;
    case 'mercoledi':
    case 'giovedi':
        console.log("Lezione di meditazione");    
    break;
    default:
        console.log("Finalmente Weekend");
        break;
}

// ALTERNATIVA IF ELSE IF
if (giorno === 'lunedi') {
console.log('9-13 Lezione di Javascript con sensei Paolo');
} else if (giorno === "martedi") {

}
















//Ternario
// const temperatura = 10;

// temperatura >= 20 
// ? console.log('Si va al mare')
// : console.log('vado a fare un giro in bici');

// anni = 22;
// const vota = anni >= 18 ? 'si': 'no';
// console.log(vota);

// console.log(`Camillo può votare? ${anni >= 18 ? "si" : "no"}`);


//ESERCIZIO
//Prendere in imput un numero (con prompt)
//Domanda è 'Che temperatura c'è fuori?'
//se < 0 stampate 'si va a pattinare'
//se = 0 stampate 'si va a sciare'
//se > 0 stampate 'si va a correre'


/*temperatura = Number (prompt(`Che temperatura c'è fuori`));
if (temperatura === 0) { 
    console.log('Si va a sciare');
} else if (temperatura > 0) {
    console.log('Si va a correre');
} else {
    console.log('Si va a pattinare');
}
*/

// let n = 4;
// console.log(
//     n >= 0
//     ? n === 0
//         ? "si scia"
//         : "si corre"
//     : n < 0
//     ? "pattina"
//     : "si sta a casa"
// );

//ESERCIZIO 2
// Convertire in ternario
/*let c = 10;
let messaggio;
if (c>0) {
    messaggio = 'Vai tranquillo'
} else {
    messaggio = 'Attenzione Ghiaccio!'
}
*/

const c = 5;

c >= 0
? console.log('Vai Tranquillo!')
: console.log('Attenzione Ghiaccio!')


let messaggio = (c >= 0) ?'Vai Tranquillo' : 'Attenzione Ghiaccio'





























