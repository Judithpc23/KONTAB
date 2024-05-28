export default class Factura{
    constructor(id, fechaInicio, fechaPago, productos, valorTotal, estado){
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaPago = fechaPago;
        this.productos = productos;
        this.valorTotal = valorTotal;
        this.estado = estado;
    }
}