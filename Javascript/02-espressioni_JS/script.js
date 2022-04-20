/////////////////
//Espressioni

let colore = 'verde';
console.log(colore);//verde

console.log(((2 + 3) / 2) * 4); //10

let dataDiNascita = 2000
console.log("ho" + (2022 - dataDiNascita) + "anni");

const cattivo = 














//Unari
console.log(-3);

//operatore ternario
let a = 5;
// se a è maggiore di 0 dammi a altrimenti dammi 1
console.log(a > 0 ? a : 1);

// Operatori matematici
const now = 2022;
console.log(now + 10); //2032
console.log(now - dataDiNascita); //22
console.log(3 * 3); //9 moltiplicazione
console.log(10 / 2); //5 divisione
console.log(10 % 2); //0 resto divisione
console.log(3 % 2); //1 resto divisione

console.log(2 ** 3); // 2*2*2=8 2 elevato alla terza

//MATH

console.log(Math.abs(-9));//9

console.log(Math.round(1.6)); //arrotonda a 2

console.log(Math.round(1.4)); //arrotonda a 1

console.log(Math.trunc(5.8)); //tronca ed elimina il decimale

console.log(Math.sqrt(64)); //radice quadrata di 64=8

console.log(Math.max(-4, 6, 2)); //prende il numero più alto=6

//random
console.log(Math.random());

console.log(Math.trunc(Math.random() * 6)); //numero casuale da 0 a 6
console.log(Math.trunc(Math.random() * 6) + 1); //parte da 1 e prende random un numero da 1 a 6


//Operatori di comparazione
console.log('3' == 3); //true
console.log('3' === 3); //rigoroso false
console.log('3' === 2); //false

console.log(3 > 4); //false
console.log(3 >= 3); //true

console.log('ciao' == 'Ciao'); //false
console.log('ciao' !== 'Ciao'); //true

console.log(" 1 == true", 1 == true); //true
console.log(" 1 === true", 1 === true); //false
console.log(" 0 == false", 0 == false); //true

const maggiorenne = (now - dataDiNascita) >= 18; //
console.log('e maggiorenne?', maggiorenne);

/////////////////////
//operatori di assegnazione

let xy = 22;

xy = xy + 3; //25
console.log(xy);

xy += 10; //35
console.log(xy);

xy += 5; //xy = xy - 5
console.log(xy);

xy *= 3; //xy = xy * 3
console.log(xy);

let nome = "Cesare"

// nome = nome + 'Augusto';
nome += "Augusto";

console.log(nome);

//Incremento
xy = 0;
xy++; //incrementa la variabile di un valore
console.log(xy);
xy--; //decrementa la variabile di un valore
console.log(xy);
// xy = 0
console.log("++ dopo variabile");
console.log(xy++); //0 stampiamo il valore della variabile senza incremento
console.log(xy); //1

console.log("++ prima della variabile");
console.log(++xy);
console.log(xy); //2

let y = xy++; //y=2; xy = 3
console.log("y,xy", y, xy);
//xy = 3
let z = ++xy; //z = 4; xy = 4
console.log("z,xy", z, xy);

// && da risultato "true" solo se tutti gli operandi sono true (se ce un false darà false)
// || d

// ?? Nullish Coaleshing ritorna il primo valore non undefined
console.log(undefined ?? "ciao");
//stabiliamo und
let und;
console.log(und ?? 3); //torna 3
und = 5;
console.log(und ?? 3); //torna 5

// AND
const num1 = 10, num2 = 20, num3 = 1;
// se gli operandi non sono tutti booleani && ritorna il primo false altrimenti l'ultimo operando
console.log(false && num1); //false
console.log(num1 > 0 && num1); //10

console.log(0 && num1); //0
console.log(num1 > 0 && "ciao"); //'ciao'

// se gli operandi non sono tutti booleani || ritorna il primo true altrimenti l'ultimo operando
console.log(false || num1); //10
console.log(0 || num2); //20
console.log(num2 || num1); //20 perchè è il primo true
console.log(0 || null); //null

//Esercizio
/*
Calcolare e poi comparare l'indice di massa corporea BMI che si calcola:
//BMI = massa / altezza al quadrato
massa in kg e altezza in metri

- Salvare le 2 masse e le 2 altezze
- calcolare i 2 BMI
- STampare le 2 BMI e se quella di Pippo > di quella di Pluto

Dati:
Pippo pesa 112kg ed è alto 1.70 mt
Pluto pesa 65kg ed è alto 1.82 mt
*/

//ESERCIZIO 2
/*
Calcolare l'ipotenusa triangolo rettangolo dati i cateti
la somma dei quadrati costruiti sui cateti è uguale al quadrato costruito sull'ipotenusa
l'ipotenusa è il lato opposto all'angolo retto

ipotenusa = radice quadrata (c1**2 + c2**2)
- assegnare a 2 variabili i due cateti
- calcolare ipotenusa e salvarla in una variabile
- stampare ipotenusa

Dati: 
C1 = 24
C2 = 10
*/

const catetoUno = 24;
const catetoDue = 10;
const ipotenusa = Math.sqrt((catetoUno * catetoUno) + (catetoDue * catetoDue));
console.log('ipotenusa è', ipotenusa);










/*let pesoPippo = '112';
let altezzaPippo = '1.70';
//console.log(pesoPippo);
//console.log(altezzaPippo);
let bmiPippo = pesoPippo / (altezzaPippo * altezzaPippo);
console.log(bmiPippo);

let pesoPluto = '65';
let altezzaPluto = '1.82';
//console.log(pesoPluto);
//console.log(altezzaPluto);
let bmiPluto = pesoPluto / (altezzaPluto * altezzaPluto);
console.log(bmiPluto);

console.log('pippo > pluto', bmiPippo > bmiPluto); //si usano gli apici per scrivere sulla console e poi si comparano i due bmi;*/



















