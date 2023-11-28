import Factura from "./Factura.js";

export class FacturaCompra extends Factura{
    constructor(proveedor, formaPago, id, fechaInicio, fechaPago, productos, valorTotal, estado){
        super(id, fechaInicio, fechaPago, productos, valorTotal, estado)

        this.proveedor = proveedor;
        this.formaPago = formaPago;
    }
}