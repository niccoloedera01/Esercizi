// console.log("sono lo script esterno");
/*let myName1 = "Niccolo"; //let è la variabile
let myName2 = "Niccolo"; 
let myName3 = "Niccolo"; 
let myName4 = "Niccolo";
*/




//dichiarazione
/*let myName;

//assegnazione
myName = "Luke";


console.log(myName);
console.log(myName);
console.log(myName);

myName = "Homer";
console.log(myName);
myName = "Luke";
// genera errore perchè è case sensitive
// console.log(myName);

//si può ma è sconsigliata
let $one = 1;
let $let = 5;
let PI = 3.14; //pi greco

let sette_vite; //si può se si sceglie lo snake_case
let $7vite; //si può ma anche no
let setteVite; //CONSIGLIATO

let np = 92632684135456356;
let numerodellaPatente = 2682356528623459;
console.log(numerodellaPatente);

let base = 10;
let altezza = 5;

let areaRettangolo = base * altezza
console.log("Area del rettangolo", areaRettangolo)

let variabileNonDefinita;
console.log(variabileNonDefinita);
*/

///////////COSTANTI///////////

const myPet = "Rolando";
//const myPet = "Taddeo"; //errore assegnazione
const annodiNascita = 2002;

console.log("annodiNascita");

const indirizzoCasa = "Via Boschetto, " + 37;
console.log(indirizzoCasa);

//////////////////////////////////
//VAR

/*var test = 3;
{
    var test = 5;
}
console.log(test);

let testLet = 33;
{
    let testLet = 55;
    console.log(testLet); 
}
console.log(testLet);*/


//////////////DATA TYPE

let numeroStudenti = 10;
console.log(typeof numeroStudenti);
//riassegno stringa
numeroStudenti = "dieci"
console.log(typeof numeroStudenti);


//stringhe
console.log("l'ulivo");
//escape
//console.log('l\'ulivo');

let loremIpsum = 'Lorem Ipsum sit';
//lenght conta il numero di caratteri all'interno della stringa, compresi gli apici 
console.log(loremIpsum.length);
//IL PRIMO INDICE è 0
console.log(loremIpsum[0]);
console.log(loremIpsum[loremIpsum.length-1]);
// 3° CARATTERE
console.log(loremIpsum[2]);
//IMMUNTABILITA' SINGOLI CARATTERI STRINGA
loremIpsum[0] = 'Z'
console.log(loremIpsum);

//BOOLEAN
//CON IL PUNTO ESCLAMATIVO SI DICE IL CONTRARIO DI QUELLO SCRITTO NEL LET
let oggiEsoleggiato = false;
console.log(oggiEsoleggiato);
console.log(!oggiEsoleggiato);

console.log('0', Boolean(0));
console.log('1', Boolean(1));
console.log('1', Boolean(-1));
console.log('ciao', Boolean('ciao'));
console.log('""', Boolean(''));
console.log('null', Boolean('null'));
console.log(Boolean(oggiEsoleggiato));

///NULL E UNDEFINED
let nullEUndefined
console.log(nullEUndefined)
nullEUndefined = null
console.log(nullEUndefined)

///ARRAY

const numeriPrimi = [2, 3, 4, 7, 11, 13, 17];
console.log(numeriPrimi);
console.log(numeriPrimi[0]);
//array.lrnght ritorna la lunghezza dell'array
//ovvero il numero di elementi contenuti
console.log(numeriPrimi.length);
const lunghezza = numeriPrimi.length;
//salvato la lunghezza in lunghezza
console.log(numeriPrimi[lunghezza - 1]);
console.log(numeriPrimi[6]);

const frutta = ['mele', 'pere', 'pesche', 'mandarini'];
const fruttaDaTavola = frutta;
console.log('fruttaDaTavola', fruttaDaTavola);
// console.log(frutta[2]);
// console.log(frutta);
frutta[2] = 'banane'; //modifico elemento 2
console.log('frutta', frutta);
console.log('frutta da Tavola', fruttaDaTavola);


// numeriPrimi[0] = 4;
// console.log(numeriPrimi);

//ERRORE
//numeriPrimi = [1,2,3]

// const numeriBis = numeriPrimi;
// console.log(numeriBis);

// numeriPrimi[0] = 2;
// console.log('numeriPrimi', numeriPrimi);
// console.log('numeriBis', numeriBis);

frutta.push('mango'); //aggiunge elemento in fondo all'array
console.log(frutta);
//pop elimina ultimo elemento
console.log(frutta.pop());
console.log(frutta);

frutta.push('anguria', 'kiwi');
console.log(frutta);
frutta.pop(); //toglie il kiwi

//aggiungere/togliere all'inizio
frutta.unshift('noci');
console.log(frutta);

//toglie noci
frutta.shift();
console.log(frutta);

frutta[5] = 'papaya';
console.log(frutta);

//uguale a push
frutta[frutta.length] = 'arachidi';
console.log(frutta);





//////////////////////
//OGGETTI
const personaggioStarWars = {
nome: 'Luke',
cognome: 'SkyWalker',
age: 19,
cattivi: false,
amici: ['Leia', 'Han Solo'],
};

console.log(personaggioStarWars);
//bracket notation
console.log(personaggioStarWars['nome']);
//dot notation
console.log(personaggioStarWars.cognome);


//
console.log(personaggioStarWars['amici'][0]);
console.log(personaggioStarWars.amici[personaggioStarWars['amici'].length -1]); //per andare a prendere l'ultimo della lista degli amici

//
const voglioVedere = prompt(
    'Che informazione vuoi vedere? scegli nome, cognome, age'
);

// console.log('voglioVedere:', personaggioStarWars[voglioVedere]);

//aggiungo proprietà ColoreCapelli
personaggioStarWars.coloreCapelli = 'biondo';
console.log(personaggioStarWars);

//aggiungo coloreOcchi
personaggioStarWars.coloreOcchi = 'neri';
console.log(personaggioStarWars);

//eliminare una proprietà
delete personaggioStarWars.coloreOcchi;
console.log(personaggioStarWars);




















































































































