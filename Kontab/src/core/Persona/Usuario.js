import Persona from "./Persona.js";
import { Contacto } from "./Contacto.js";
import { Cliente } from "./Cliente.js";
export class Usuario extends Persona {

    constructor(usuario, empresa, inventario, facturasVenta, facturasCompra, contactos, reporte, id, nombre, pais, ciudad, direccion, correo, telefono){
        super(id, nombre, pais, ciudad, direccion, correo, telefono)
        this.usuario = usuario;
        this.empresa = empresa;
        this.inventario = inventario;
        this.facturasVenta = facturasVenta;
        this. facturasCompra = facturasCompra;
        this.contactos = contactos;
        this.reporte = reporte;
    }

    add_cliente(cliente){
      if(this.contactos.clientes.length = 0){
        this.contactos.clientes.push(cliente);
        return true;  
      }
      for(let i in this.contactos.clientes){
        if (i.id === cliente.id){
          return(false)
        }
      }
      this.contactos.clientes.push(cliente);
      return true
    }
}

const usuario1 = new Usuario(
  '', 
  '', 
  [], 
  [], 
  [], 
  new Contacto(), 
  '', '', 
  '', 
  '', 
  '', 
  '', 
  '', 
  '');

const cliente1 = new Cliente([], '32941231', 'Mebis Mejía', 'Colombia', 'Barranquilla', 'Carrera 6c Sur #48-57', 'mebismejia15@gmail.com', '3003101139')
const cliente2 = new Cliente([], '33941231', 'Nataly Arango', 'Colombia', 'Barranquilla', 'Carrera 45B Sur #48-57', 'nataly15@gmail.com', '3023101139')
const cliente3 = new Cliente([], '33941231', 'Nataly Arango', 'Colombia', 'Barranquilla', 'Carrera 45B Sur #48-57', 'nataly15@gmail.com', '3023101139')
console.log(usuario1.add_cliente(cliente1));
console.log(usuario1.add_cliente(cliente2));
console.log(usuario1.add_cliente(cliente3));
console.log(usuario1.contactos.clientes)

console.log(usuario1.contactos.clientes.length)
export {usuario1}
