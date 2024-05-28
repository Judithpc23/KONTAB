import random


class Kontab():
  def __init__(self) -> None:
    self.__usuarios = []

  def register(self, user):
    if self.__usuarios == []:
      self.__usuarios.append(user)
      return True

    for usuario in self.__usuarios:
      if usuario.getUser() == user.getUser():
        return False
    self.__usuarios.append(user)
    return True

  def __repr__(self) -> str:
    return(
      f'{self.__class__.__name__}('
      f'{self.__usuarios}'
      f')'
    )