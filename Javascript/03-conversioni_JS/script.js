/////////////////
//Conversioni
const farenheit = '32';
let gradi = '22';
let gradiCelsius = "22° celsius";

console.log(Number(farenheit), farenheit);
console.log(farenheit + 10); // '3210'
console.log(farenheit - 10); // 22

console.log(Number(farenheit) + 10); //42
console.log("uno" + 2);

console.log(farenheit * 10); //320

console.log('10' / 2); //5

console.log(3 + 3 * '5'); //18

console.log('3' * 3 + '5'); //3*3 = 9 + '5'

console.log(Number(gradiCelsius)); //NaN
console.log(typeof NaN); //Number
console.log(parseInt(gradiCelsius)); //ritorna solo il numero intero cioè 22
console.log(parseFloat("24.6 hdhdhdhdhdh")); //parsefloat include solo il numero decimale

//stringa in numero
const str = '2022';
console.log(Number(str)); //2022
console.log(+str); //equivale a Number

//Booleani
console.log(true + 1); //2
console.log(true + "1"); //true1
console.log(true*!false); //1

//concatenazione stringhe

console.log("Gigi ha solo" + 13 + " anni");
console.log("Gigi ha solo" + String(13) + " anni");

let num = 100;
console.log(num.toString()); //'100'
console.log(num + ""); //'100'

princessName = 'Leia';
console.log("Princess" + princessName + " is luke's sister");

//template literals
console.log(`princess ${princessName} is Luke's sister`);
console.log(`Leonardo Da Vinci è nato ${2022 - 1400} anni fa`);


console.log( '1' + '2' + 3);
console.log( 1 + 2 + '3');
console.log( 1 + 2 + '3' + '4');





