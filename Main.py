from Kontab import Kontab
from Usuario import Usuario

class main():
    kontab = Kontab()

    user = Usuario(user= input('nombre de usuario: '), password= input('contrasena: '))
    user

    kontab.register(user)

    print(kontab)