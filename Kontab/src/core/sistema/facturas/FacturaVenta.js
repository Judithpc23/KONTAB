import Factura from "./Factura.js";

export class FacturaVenta extends Factura{
    constructor(cliente, vendedor, formaPago, id, fechaInicio, fechaPago, productos, valorTotal, estado){
        super(id, fechaInicio, fechaPago, productos, valorTotal, estado)

        this.cliente = cliente;
        this.vendedor = vendedor;
        this.formaPago = formaPago;
    }
}