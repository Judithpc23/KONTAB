export default class Persona {
    id;
    nombre;
    pais;
    ciudad;
    direccion;
    correo;
    telefono;

    constructor(id, nombre, pais, ciudad, direccion, correo, telefono){
      this.id = id;
      this.nombre = nombre;
      this.pais = pais;
      this.ciudad = ciudad;
      this.direccion = direccion;
      this.correo = correo;
      this.telefono = telefono;
    }
}