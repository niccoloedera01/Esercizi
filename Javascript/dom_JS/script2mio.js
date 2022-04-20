console.log(document);

//accedere al tag html
console.log(document.documentElement);
//per ritornare il body 
console.log(document.body);
//accedere ai figli
console.log(document.documentElement.children);
console.log(document.documentElement.children[1]);
//accede a tutti i nodi compresi testo, commenti ecc...
console.log(document.documentElement.childNodes);
//first e last child
console.log(document.documentElement.firstElementChild);
console.log(document.documentElement.lastElementChild);
//vediamo chi è il padre di body
console.log(document.body.parentElement);
//ritorna se stesso ovvero body
console.log(document.body.parentElement.lastElementChild);

//accedere ai fratelli, accediamo a quello affianco (body in questo caso)
//previousElementSibling nextElementSibling
console.log(document.body.previousElementSibling);
//console.log(document.body.previousElementSibling);
console.log(document.body.previousElementSibling.lastElementChild);
//assegnare un elemento ad una variabile
const myBody = document.body;
console.log(myBody.firstElementChild);

const myH1 = myBody.firstElementChild;
console.log(myH1);
console.log('-------');
//myBody.children ritorna un htmlcollection simile ad un array
for (let figli of myBody.children) {
  console.log(figli);
}

for (let i = 0; i < myBody.children.length; i++) {
  console.log(i, myBody.children[i]);
}

// const myBody = {
//   nome: 'pinco'
//   children: ['<h1></h1>','<div></div>']
// }
//partiamo dal body stampando in console
console.log(document.body.firstElementChild.nextElementSibling);

//////////////////
//RICERCA ELEMENTI
//querySelector ritorna il primo elemento corrisponde al selettore (h1>h3/h2/h4)
console.log(document.querySelector('h1'));
console.log(document.querySelector('h3')); //tag
console.log(document.querySelector("#boxes")); //ID
console.log(document.querySelector(".box")); //.classe

console.log(document.querySelectorAll(".box"));
console.log(document.querySelectorAll(".box")[2].querySelector("h3")); // seleziono tutti i".box", vado al terzo .box e da dentro quest'ultimo vado a prendere "h3",

//accedere al contenuto di un nodo
console.log(document.querySelector('h2').textContent);
console.log(document.querySelector('h1').textContent);

document.querySelector('h2').textContent = 'Sottotitolo modificato' //inserisce solo il testo e ciò che scrivo, i tag non funzionano

// document.querySelector('.box').textContent = '<p> sono dentro il primo box </p>';

document.querySelector('#vuoto').innerHTML='<strong> Fine Documento </strong>'; //con inner.html riesco a modificare dal lato server, se uso i tag funzionano
console.log(document.querySelector('#vuoto').textContent); //ritorna solo il testo
console.log(document.querySelector('#vuoto').innerHTML); //ritorna tutto l'html contenuto nell'elemento

//STYLE
const boxes = document.querySelectorAll('.box');

for (let elem of boxes) {
  elem.querySelector('h3').style.backgroundColor = 'yellow';
  elem.querySelector('h3').style.padding = '15px';
  elem.querySelector('h3').style.color = 'red';


//eliminare style
elem.querySelector('h3').style.color = null;
}

//class
//aggiungo una classe
document.querySelector('.btn').classList.add('btn-round');
//rimuovo una classe
document.querySelector('.btn').classList.remove('btn-round');
//aggiungo più classi contemporaneamente
document.querySelector('.btn').classList.add('btn-red' , 'btn-round');

//toggle inserisce la classe se non c'è, la toglie se c'è
document.querySelector('.btn').classList.toggle('btn-round');
document.querySelector('.btn').classList.toggle('btn-round');
document.querySelector('.btn').classList.toggle('btn-round');

//comando per accedere solo agli id
console.log(document.getElementById('vuoto').textcontent);
//comando che seleziona più elementi con la stesso classe
console.log(document.getElementsByClassName('btn'));


//ATTRIBUTI
document.querySelector('h1').title = 'Attributo Titolo';
document.querySelector('h1').setAttribute('importanza' , 'alta');

document.querySelector('h1').setAttribute('id' , 'titolo');
console.log(document.querySelector('#titolo').textContent);

//verificare esistenza attributo
console.log(document.querySelector('h1').removeAttribute('importanza'));

//rimuovere attributi




//////////////////
//document.querySelectorAll('h3')[2].innerHTML = 'Forza Inter';
document.querySelector('.box__container').lastElementChild.querySelector('h3').innerHTML = 'Forza Inter';
document.querySelectorAll('h3')[2].style.color = 'Blue';

//EVENTI
//Event listener
const field = document.querySelector('#fieldOne');

field.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    field.parentNode.querySelector('h3').textContent = field.value;
  }
});


// InsertadjacentHTML
//beforebegin, afterbrgin, beforeend, afterend

/* document
.querySelector('.box__container')
.insertAdjacentElement(
  'beforebegin',
  '<a href"https://stackoverflow.com"> Se mi serve aiuto!</a>'); */

//CLONARE
//cloneNode(true) contiene un clone completo di figli e attributi

const box = document.querySelector('.box');
const boxNew = box.cloneNode(true); //prende il riferimento e lo clona inserendolo in una variabile
boxNew.firstElementChild.textContent='Il mio tesssoro';
document.querySelector('box__container').appendChild(boxNew);



































