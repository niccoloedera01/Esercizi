print(20)
print(2 + 2)
print('Niccolò')

#variabile stringa
x = 'Niccolò'
print(len(x))
x[0]
print(x[0]) #prende la prima lettera
print(x[-1]) #prende l'ultima lettera
print(x[:3]) #prende fino alla 3 lettera compresa
print(x[-3:]) #prende le ultime 3 lettere
print(x[2:5]) #prende la 3 lettera fino alla 5



y = 'Ciao\nsono\n\"Niccolò\"' #va a capo ogni volta che si mette n\
print(y)


nome = 'Niccolò'
eta = 20
print(f'{nome} ha {eta} anni')

##############
#METODI
nome = 'Niccolò è uno studente'
nome = nome.upper() #mette tutto in maiuscolo
print(nome)
nome = nome.title() #mette la lettera maiuscola all'inizio di ogni parola nella stringa
print(nome)
nome = nome.capitalize() #mette la maiuscola solo nella prima lettere della prima parola
print(nome)
nome = nome.find('z') #cerca la lettera nella stringa, se non c'è da come risultato -1
print(nome)
#nome = nome.replace('i','e').replace('c','z')
print(type(nome)) #mi dice di che tipo è la variabile
print(nome)

##############
#NUMERI
eta = 20
peso = 70.5

print(eta, type(eta)) #definisco la tipologia dell'oggetto
print(peso, type(peso))
somma = eta + peso #sommo eta + peso
print(somma, type(somma)) #stampo la somma di eta e peso definendomi la tipologia dell'oggetto

print(10 % 3) #mi da il resto dell'operazione   sarebbe 1
print(10**3) #mi fa 10 alla terza
eta = 20
eta += 5 #aggiunge 5 anni alla mia eta (variabile), uguale con -=
print(eta)

import math #serve ad importare per eseguire un operazione matematica
eta = math.sqrt(10) #esegue la radice quadrata di 10
print(eta)

x = input('Enter number: ')
print ('Il numero è: '), x, type(x)

dizionario = {
    'key':'value'
}
###########################
######condizioni IF ELIF ELSE
nome = 'Lorenzo'
if 'x' in nome:
    print('Prima espressione') #se x è presente nel nome Lorenzo stampa prima espressione se no va avanti.
elif 'f' in nome:
    print('Seconda espressione') #anche f non è presente nel nome e quindi va avanti
else:
    print('Nessuna era vera') #stampa questo perchè nessuna delle precedenti era vera ed è l'unica condizione vera

quantita = 90
if quantita >= 100:
    print('Prima espressione')
elif quantita >= 90:
    print('Seconda espressione')
else:
    print('Nessuna era vera')

lista_della_spesa = ['coca-cola','marmellata','pane','fragole','arance']
lista_in_grande = []
while len(lista_della_spesa) > 0: #len ci permette di contare quanti elementi ci sono all'interno delle liste
    item = lista_della_spesa.pop(0) #il comando pop elimina normalmente l'ultimo oggetto di una lista/insieme, se si    mette () e un numero della lista andrà a prendere quell'elemento e lo eliminerà

    if item == 'marmellata': #item è inteso come coca-cola perchè abbiamo messo il comando item = lista_della_spesa.pop(0)
        continue #se è vera continua il suo ciclo dall'inizio senza passare per item.upper lista.append e tutte le altre funzioni/comandi dopo continue

    if item == 'coca-cola':
        break #blocca tutto e finisce il ciclo anche se ci sono altri comandi dopo quest'ultimo (se c'è un else non lo prenderà)

    item = item.upper() #mi trasforma le parole degli elementi in grande (maiuscolo)
    lista_in_grande.append(item) #sposta gli oggetti che vengono eliminati/tolti dalla lista_della_spesa con il comando pop trasferendoli in lista_grande
    print(lista_in_grande)
