import random
lista_numeri = random.sample(range(0, 50), 5)
print(lista_numeri)
somma = 0
for numero in lista_numeri:
    somma += numero #si fa la somma dei numeri
print('Somma =', somma)
import math
import random
lista_numeri = random.sample(range(0, 10), 5)
print(lista_numeri)
moltiplicazione = 0
for numero in lista_numeri:
    moltiplicazione *= numero
print('Moltiplicazione =', moltiplicazione)