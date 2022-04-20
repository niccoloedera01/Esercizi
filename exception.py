x = 5

if x == 5:
    raise Exception('Siamo arrivati al limite dello stock!')

import math as pippo #posso usare tutte le funzioni di math importandole e richiamandola con pippo, pippo nuovo nome di math


from enum import auto


try:
    x =+ 5
    print('tutto bene')
except ImportError as e: #quando sbagli di scrivere ti esegue questa eccezione che printerà in console 'Errori da tutte le parti'
    print('Errori da tutte le parti', e)
except Exception as e:
    print('ffff')

class Auto:
    def __init__(self, nome, colore = 'nero', carburante = 'benzina'): #nome deve essere scritto sempre dopo self.nome(possiamo scegliere noi il nome = self.pippo)
        self.nome = nome #l'assegnazione (nome vicino a self nome) DEVE essere UGUALE al nome vicino a def __init__
        self.colore = colore
        self.carburante = carburante
    def __str__(self):
        return f'{self.nome}, {self.colore}, {self.carburante}'
    

automobile1 = Auto('Ferrari', 'rosso', 'benzina',)
automobile2 = Auto('Panda', 'bianco', 'benzina',)
print(automobile1) #printa tutte le caratteristiche dell'istanza che abbiamo dichiarato
print(automobile2)
print(automobile1 == automobile2)

