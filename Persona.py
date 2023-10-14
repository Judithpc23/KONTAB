from abc import ABC, abstractmethod


class Persona(ABC):
  def __init__(self, tipoId= '', id= '', nombre= '', tipoPersona= '', municipio= '', departamento= '', direccion= '', correo= '', tel= '') -> None:
    self._tipoId = tipoId
    self._id = id
    self._nombre = nombre
    self._tipoPersona = tipoPersona
    self._municipio = municipio
    self._departamento = departamento
    self._direccion = direccion
    self._correo = correo
    self._tel = tel
  
  @abstractmethod
  def getId(self):
    return self._id