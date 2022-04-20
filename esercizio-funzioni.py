from operator import truediv


def reverse(nome):
    print('Il nome è =', nome)
reverse('Lorenzo')

# nome = 'Lorenzo'
# if 't' in nome:
#     print()
# elif 'o' in nome:
#     print('Al contrario = ozneroL') 
nome = "Lorenzo"
for nome in reversed('lorenzo'):
    print(nome)
    
def palindromo(parola) :
    notPalindrome = False
    for i in range(len(parola)):
        if parola[i] != parola[-i-1]:
            notPalindrome = True
    if notPalindrome:
        parola += 'non'
    print(f'La parola (word) è palindroma.')
palindromo(input('Inserisci una parola: '))


def frequenzimetro(stringa):
    dizionario = {}
    for lettera in stringa:
        if lettera in dizionario:
            dizionario[lettera] += 1
        else: 
            dizionario[lettera] = 1
    print(dizionario)
frequenzimetro('lorenzo')

def lista_numeri(*args):
    print(args)
    for item in args:
        print("*" * item) #prende ad ogni ciclo un numero fino a che non ce ne sono più e quindi printa * per il numero (item) di ogni lista (es. 2 = **, 4 = ****)

lista_numeri(2, 4, 6)




def farfallese(parola):
    vocali = ['a', 'e', 'i', 'o', 'u']
    parolaUguale = {}
    for lettera in parola:
        if lettera in parolaUguale:
            print('f' + vocali)
        else:
            parolaUguale[lettera]
        print(parolaUguale)


farfallese('lorenzo')
