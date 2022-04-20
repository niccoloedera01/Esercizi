//FOR

console.log('Completato giro 1')
console.log('Completato giro 2')
console.log('Completato giro 3')
console.log('Completato giro 4')

for (let lap = 1 ; lap <= 10 ; lap++) {
if (lap === 10) {
    console.log(`Completato ultimo giro`);
} else {
    console.log(`Completato giro ${lap}`);
}
}

// tabellina del 3

for (let i = 1 ; i <= 10; i++) {
    console.log(i * 3);
}

let ii;
for (ii = 1; ii <= 10 ; ii++) {
    console.log(ii * 5);
}
console.log(ii);

//LOOP ARRAY
const ingredienti = ['acqua','sale','pepe','l uovo','250gr guanciale','parmigiano','cipolla'];
ingredienti.pop(); //eliminiamo l'ultimo elemento con il comando .pop perche non centra con la ricetta della carbonara.
console.log(ingredienti);
// i va fino a 5 che sarebbe la quantità degli elementi che abbiamo e poi quando arriva a 6 si ferma perchè è maggiore rispetto alla condizione
for (let i = 0; i < ingredienti.length; i++) {
    console.log(ingredienti[i]);
}

const caratteriIngredienti = new Array(); //equivale a 
//serve per contare i caratteri degli ingredienti contenuti nell'array
for (let i = 0; i < ingredienti.length; i++) {
    caratteriIngredienti.push(`${ingredienti[i]} = ${ingredienti[i].length}`);
}
console.log(caratteriIngredienti);

//Ingredienti al contrario
//for (let i = ingredienti.length - 1; i >= 0; i==) {
//    console.log(i, ingredienti[i]);
//}

//WHILE fino a che x è minore di 10 continua il ciclo perche incrementa grazie ad x++ (che aumenta sempre di un valore ogni volta)
let x = 1;
while (x <= 10) {
    console.log(x * 3);
    x++;
}

//DO WHILE

let indice = 0;
do {
    console.log(ingredienti[indice]);
    indice++;
} while (indice < ingredienti.length)

// Break

let cnt = 0;
while(cnt < 3) {
    let esce = Math.trunc(Math.random() * 3);
    console.log(esce, cnt);
    if (cnt === esce) break;
    cnt++;
}
console.log('Uscita al cnt:'+cnt);

// Salto

for (let i = 0; i < ingredienti.length; i++) {
    if(ingredienti[i] === 'pepe') continue; //continue va alla interazione successiva saltando le istruzioni 
    console.log(i, ingredienti[i]);
}

// Numeri pari
let num = 0;
do {
    if(++num % 2) continue;
    console.log('Numero pari: ' + num);
    num++;
} while (num <= 10);

for (let i = 2; i <= 10; i += 2) console.log('Numero pari:' + i);

//////////////
const corsisti = ['Giulia','Paola','Niccolò','Laura','Diego','Valentino', 'Federico', 'Martina'];
const nuoviCorsisti = [];

while (corsisti.length > 0) {
    let num = Math.trunc(Math.random()*corsisti.length);
    nuoviCorsisti.push(corsisti[num]);
    // Elimino un corsista da corsisti
    corsisti.splice(num,1); //elimino il corsista che ho spostato
}
console.log(nuoviCorsisti, corsisti);

///////////////////
/*
dato un numero casuale intero da 1 a 10
indovinarlo tramite domande da console (prompt)
per un numero n massimo di tentativi.
ad ogni inserimento verificare e ritornare da console
se il nostro numero è più alto o più basso o altrimenti se è uguale

se corretto stampate anche il numero di tentativi utilizzati
ad ogni tentativo scrivere quanti e restano.

range 1 > 10
maxTentativi = 4
cnt
gameOver = false*/










































































