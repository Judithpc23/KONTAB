from typing import Any, List, Optional, Union
from Persona import Persona


class Usuario(Persona):
  def __init__(self, user, password, **kwargs: Any) -> None:
    self.__user = user
    self.__password = password
    super().__init__(**kwargs)
  
  def __repr__(self) -> str:
    return(
      f'{self.__class__.__name__}('
      f'{self.__user}, '
      f'{self.__password}'
      f')'
    )
  
  def getId(self):
    return super().getId()

  def getUser(self):
    return self.__user