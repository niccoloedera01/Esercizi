class Persona:
    lingua = 'Italiano' #attributo di classe, cosa in comune tra noi della classe (parliamo tutti italiano)

    def __init__(self, nome):
        self.nome = nome

    def parla(self, parola):
        return f'bla bla bla! --> {parola}'

    def __str__(self):
        return 'Istanza persona'

persona = Persona('Lorenzo')
print(persona.parla('Sono il docente più bravo del corso!'))

class Persona:
    capacita = 'Tutti sappiamo usare un pc'
    studio = 'Tutti studiamo le stesse cose'
    utilizzo = 'Per scrivere codice usiamo Visual Studio Code'

    def __init__(self, cognome, eta):
        self.cognome = cognome
        self.eta = eta

    def salta(self, azione):
        return f' ciao, so saltare! --> {azione}'

    def __str__(self):
        return self.cognome, self.eta

persona = Persona('Lorenzo')
persona.salta('Salta!')
print(f'noi {persona.capacita} noi {persona.studio} e {persona.utilizzo}')



class Videogioco:
    nome = 'Fifa'
    anno_di_produzione = '2021'
    categoria = 'sport'

    def __init__(self, nome):
        self.nome = nome

    def giocare(self, azione):
        return f'io gioco a Fifa! --> {azione}'

    def __str__(self):
        return self.nome

fifa = Videogioco('Fifa')
fifa.giocare('Giochiamo')
print(f'il gioco si chiama {Videogioco.nome}, è stato prodotto nel {Videogioco.anno_di_produzione} e fa parte della categoria {Videogioco.categoria}.')


