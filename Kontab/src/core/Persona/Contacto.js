export class Contacto{
    constructor(){
        this.clientes = [];
        this.vendedores = [];
        this.proveedores = [];
    }

    set_clientes(clientes){
        this.clientes = clientes;
    }
    set_vendedores(vendedores){
        this.vendedores = vendedores;
    }
    set_proveedores(proveedores){
        this.proveedores = proveedores;
    }
}