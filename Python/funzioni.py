def somma(a, b): #definisco la funzione
    print('La somma è =', a + b)
somma(5, 7) #richiamo la funzione con i numeri e me la stampa(a=5 e b=7 => somma=12)

def somma(a, b=50): #definisco la funzione (si può definire il 2 numero direttamente nella funzione scrivendo nella somma solo il 1 numero)
    print('La somma è =', a + b)
somma(5) #richiamo la funzione con i numeri e me la stampa(a=5 e b=50 => somma=55)

def somma(a, b): #prima stampa i numeri di a e b che sono stati dichiarati dopo (8 e 5)
    print(a)
    print(b)
    print('La somma è =', a + b) #stampa la somma

somma(a=8, b=5)

def somma(*args):
    print(args)
    for item in args:
        print(item)

somma(1, 2, 3, 4, 5)

