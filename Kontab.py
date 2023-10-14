import random


class Kontab():
    def __init__(self) -> None:
        self.__empresas = []
        self.__usuarios = []

    def agregarEmpresa(self, empresa):
        self.__empresas.append(empresa)

    def crearCuenta(self, usuario='', password='', nombre=''):
        cuenta = {'usuario': usuario, 'contraseña': password, 'nombre': nombre, 'id':random.randint(1000000000, 9999999999)}
        self.__usuarios.append(cuenta)

    def __repr__(self) -> str:
        return(
            f'{self.__class__.__name__}'
            f'{self.__usuarios}'
        )

kontab = Kontab()
kontab.crearCuenta('edadul', '2506', 'Esteban Arnedo')
kontab.crearCuenta('pepe', '1234', 'Pepe Pacheco Perez')
kontab