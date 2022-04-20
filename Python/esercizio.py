## es 1
numero = input('Inserisci un numero ')
numero = int(numero)
risultato = numero % 2
print(risultato)
if risultato:
    print('il numero è dispari')
else:
    print('il numero è pari')

# es 2
numeroa = input('Inserire 1 numero da 1 a 100 => ')
numerob = input('Inserire 1 numero da 1 a 100 => ')
numeroc = input('Inserire 1 numero da 1 a 100 => ')
if numeroa > numerob and numeroa > numeroc:
    print(numeroa, 'è il numero più grande')
elif numerob > numeroa and numerob > numeroc:
    print(numerob, 'è il numero più grande')
else:
    print(numeroc, 'è il numero più grande')

# es 3
lettera = input("Inserisci una lettera dell'alfabeto ")
vocali = ['a', 'e', 'i', 'o', 'u']
if lettera in vocali:
    print('la lettera che hai scelto è una vocale')
else:
    print('la lettera che hai scelto non è una vocale')
