import Persona from "./Persona.js";

export class Cliente extends Persona {
    constructor(facturasVenta, id, nombre, pais, ciudad, direccion, correo, telefono){
      super(id, nombre, pais, ciudad, direccion, correo, telefono);
      this.facturasVenta = facturasVenta;
    }
    
}