class Gestore:
    def __init__(self, conto_partenza, conto_arrivo, quantity):
        self.conto_partenza = conto_partenza
        self.conto_arrivo = conto_arrivo
        self.quantity = quantity
    
    def bonifico(self): 
        if self.conto_partenza.saldo < self.quantity:
            return "non abbastanza soldi"
        else:
            self.conto_partenza.saldo -= self.quantity
            self.conto_partenza.storico += f"Hai inviato {self.quantity}€ al conto {self.conto_arrivo}\n"
            self.conto_arrivo.saldo += self.quantity
            self.conto_arrivo.storico += f"Hai ricevuto {self.quantity}€ dal conto {self.conto_partenza}\n"
        return "Operazione eseguita!"
    

class ContoCorrente:
    def __init__(self, iban, nome, cognome, residenza, numero_telefono, email, filiale, saldo = 0):
        self.iban = iban
        self.nome = nome
        self.cognome = cognome
        self.residenza = residenza
        self.numero_telefono = numero_telefono
        self.email = email
        self.filiale = filiale
        self.saldo = saldo

    def __str__(self) :
        return f"{self.iban} di {self.nome} {self.cognome}\n"

    def saldo_attuale(self):
        return f"Il tuo saldo è di {self.saldo}€,\n"

    storico = ""

Pippo = ContoCorrente("123", "Pippo", "qualcosa", "Gorizia, via rossini 9", "456", "pippo@gmail.com", "unicredit")
Pluto = ContoCorrente("456", "Pluto", "qualcosa", "Gorizia, via rossini 9", "123", "pluto@gmail.com", "unicredit", 3000)

# Pippo.saldo = 10*245
print(Gestore(Pluto, Pippo, 45).bonifico())
print(Pippo, Pippo.saldo_attuale(), Pippo.storico)
print(Pluto, Pluto.saldo_attuale(), Pluto.storico)
# print(Gestore(Pippo, Pluto, 45).bonifico())