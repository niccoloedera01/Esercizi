'use strict'; //usa le istruzioni dopo il 2015, consigliato
//////////
//FUNZIONI

function saluta() {
    console.log('Buongiorno');

}

saluta();
saluta();
saluta(); 

let nome = 'Homer'; //globale
function salutaMondo() {
    let nome = 'Marge';
    let messaggio = 'Hello ' + nome;
    console.log(messaggio);
}

console.log(nome);
// console.log(messaggio); //errore
salutaMondo();

//Parametri
function salutoVulcaniano(nome) {
    console.log(`Lunga vita e prosperità ${nome}`)
}

salutoVulcaniano('Gigi');
salutoVulcaniano('Lucia');

function somma(a,b) {
    console.log(`La somma di ${a}+${b} è: ${Number(a) + Number(b)}`);
}

somma(3, 5);
somma(35, '54');

//Valore di default
function giriDiGiostra(tipo = '🎈', lap=3) {
    for (let i = 1; i <= lap; i++) {
        console.log(tipo + 'giro numero: ' + 1);
    }
}

giriDiGiostra();
giriDiGiostra(10)

//Return
function moltiplica(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Dammi dei Numeri!';

    }
}









///////////////////
//FUNZIONE DICHIARATA
funcDichiarata();

function funcDichiarata() {
    console.log('Sono una funzione dichiarata');
}


const funcExpression = function() {
    console.log('Sono una funzione generata con function expression');
};

funcExpression();

const calcolaEta = function(anno) {
    return 2022-anno; //ritorna 2022 meno anno, si usa per far tornare un numero come risultato (si usa con i numeri)
}

const myAge = calcolaEta(1999);
console.log(myAge);

// DUNZIONI FRECCIA
const sottrai = (a,b) => {
    if(isNaN(a) || isNaN(b)) {
        return 'dammi un numero';
    } else {
        return a - b;
    }    
    };

console.log(sottrai(5,3));
//funzione freccia
const alQuadrato = numero => numero * numero;
//funzione dichiarata
function alQuadratoBis(numero) {
    return numero * numero;
}
//function expression
const alQuadratoTris = function(a,b) {
    return numero * numero;
}

console.log(alQuadrato(2));
// console.log(alQuadratoBis(2));


//funzioni che chiamano funzioni

function operazione(a, b, operatore) {
    if (operatore = "*") {
        return moltiplica(a, b)
    }
    if (operatore === "-") {
        return sottrai(a, b);
    }
    return;
}
console.log(operazione(4, 2, "*"));
console.log(operazione(4, 2, "-"));

//callback function
const operazioneCB = function (a, b, cb) {
    return cb(a, b);
}
console.log(operazioneCB(100, 40, sottrai));
console.log(operazioneCB(10, 5, moltiplica));
console.log(moltiplica);
//dopo 5 secondi mi da il risultato
// setTimeout(()=> {
//     console.log('Sono trascorsi 5 secondi')
// }, 5000);
// console.log('Io sono sotto il timeout da 5 secondi')
// //continua ad eseguire il suo codice
// const stampaMessaggio = function() {
//     console.log('Sono passati 3 secondi');
// }
// console.log('Io sono sotto il timeout da 3 secondi')
// setTimeout(stampaMessaggio, 3000);
// //Per definire un tot di tempo che deve passare (dopo 7 secondi mi da il risultato)
// setTimeout(()=> {
//     console.log('Timer di 7 secondi')
// }, 7000);
// //stessa cosa con comando function
// const stampaTimer = function() {
//     console.log('sono passati 8 secondi');
// }
// setTimeout(stampaTimer, 8000);

////////////////////////////
//ForEach
const serie = [
    "La Casa di Carta",
    "Strappare lungo i bordi",
    "The last dance",
    "Stranger Things",
    "Squid Game"
];

serie.forEach((titoli) => {
    console.log(titoli);
});

const arrNumeri = [2, 5, 8, 3, 1, 1];
let sm = 0;
arrNumeri.forEach(function (n) {
    sm += n;
});
console.log(sm);

const vistoNonVisto = (titoli,key,arr) =>{
    if (key === arr.length -1) {
        console.log("NON visto:"+ titoli);
    } else {
        console.log("Visto:"+ titoli);
    }
}

serie.forEach(vistoNonVisto);

//Funzioni ricorsive
function fattoriale(x) {
    if (x <= 1) return 1;
    return x * fattoriale(x - 1);
    }
console.log(fattoriale(3));
console.log(fattoriale(5));

function potenza(a,b) {
    if (b <= 1) return a;
    return a * potenza(a, b - 1);
}

console.log(potenza(2, 3));

/////////////////////
//ESERCIZIO
//funzione che calcola la media tra 4 numeri
// 1. funzione che prende 4 argomenti
// 2. funzione che prende un array con n numeri come argomenti
function media (num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}

console.log(media(5, 6, 3, 2));

//2
function mediaSomma(numerini) {
    //ci facciamo la somma e infine la divisione dei numerini
    let somma = 0
    for (let i = 0; i < numerini.length; i++) {
        somma += numerini[i];
    }
    return somma / numerini.length;
}


// console.log(mediaSomma([5,6,3,2])); //invoco

// function mediaSomma(numerini) {
// let somma = 0
// //for of
// for (num of numerini) {
//     somma += num;
//     }
//     return somma / numerini.length;
//}

//metodi oggetto
const atleta = {
    nome: 'Nadal',
    sport: 'Tennis',
    altezza: 1.85,
    peso: 85,
BMI: function() {
    this.bmiCalcolato = this.peso / this.altezza ** 2;
    return this.peso / this.altezza ** 2;
    }
};

console.log(atleta);
console.log(atleta.nome);
console.log(atleta.BMI());
console.log(atleta.bmiCalcolato);










