import Persona from "./Persona.js";

export class Proveedor extends Persona {
    constructor (facturaCompra, id, nombre, pais, ciudad, direccion, correo, telefono){
        super(id, nombre, pais, ciudad, direccion, correo, telefono);
        this.facturasCompra = facturaCompra;
    }
}