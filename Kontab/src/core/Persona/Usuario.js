import Persona from "./Persona.js";
import { Contacto } from "./Contacto.js";
import { Cliente } from "./Cliente.js";
import { Proveedor } from "./Proveedor.js";
import { Vendedor } from "./Vendedor.js";

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
      if(this.contactos.clientes.length === 0){
        this.contactos.clientes.push(cliente);
        return true;  
      }
      for(let i=0; i<this.contactos.clientes.length; i++){
        if (this.contactos.clientes[i].id === cliente.id){
          return(false)
        }
      }
      this.contactos.clientes.push(cliente);
      return true
    }

    add_proveedor(proveedor){
      if(this.contactos.proveedores.length === 0){
        this.contactos.proveedores.push(proveedor);
        return true;  
      }
      for(let i=0; i<this.contactos.proveedores.length; i++){
        if (this.contactos.proveedores[i].id === proveedor.id){
          return(false)
        }
      }
      this.contactos.proveedores.push(proveedor);
      return true
    }

    add_vendedor(vendedor){
      if(this.contactos.vendedores.length === 0){
        this.contactos.vendedores.push(vendedor);
        return true;  
      }
      for(let i=0; i<this.contactos.vendedores.length; i++){
        if (this.contactos.vendedores[i].id === vendedor.id){
          return(false)
        }
      }
      this.contactos.vendedores.push(vendedor);
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
const cliente3 = new Cliente([], '1048580037', 'Carlos Arango', 'Colombia', 'Barranquilla', 'Carrera 6C sur #48B-57', 'carlosarango1107@outlook.com', '3007207238')
const cliente4 = new Cliente([], '1040737933', 'Carlos Gonzalez', 'Colombia', 'Medellín', 'Carrera 5 sur #41B-57', 'carlosgonzalez@outlook.com', '3087257238')
const cliente5 = new Cliente([], '10458785145', 'Laura Lanchero', 'Colombia', 'Barranquilla', 'Carrera 77 #55-107', 'llanchero@uninorte.com', '3122253993')

const vendedor1 = new Vendedor([], '32941231', 'Mebis Mejía', 'Colombia', 'Barranquilla', 'Carrera 6c Sur #48-57', 'mebismejia15@gmail.com', '3003101139')
const vendedor2 = new Vendedor([], '33941231', 'Nataly Arango', 'Colombia', 'Barranquilla', 'Carrera 45B Sur #48-57', 'nataly15@gmail.com', '3023101139')
const vendedor3 = new Vendedor([], '1048580037', 'Carlos Arango', 'Colombia', 'Barranquilla', 'Carrera 6C sur #48B-57', 'carlosarango1107@outlook.com', '3007207238')
const vendedor4 = new Vendedor([], '1040737933', 'Carlos Gonzalez', 'Colombia', 'Medellín', 'Carrera 5 sur #41B-57', 'carlosgonzalez@outlook.com', '3087257238')
const vendedor5 = new Vendedor([], '10458785145', 'Laura Lanchero', 'Colombia', 'Barranquilla', 'Carrera 77 #55-107', 'llanchero@uninorte.com', '3122253993')

const proveedor1 = new Proveedor([], '32941231', 'Mebis Mejía', 'Colombia', 'Barranquilla', 'Carrera 6c Sur #48-57', 'mebismejia15@gmail.com', '3003101139')
const proveedor2 = new Proveedor([], '33941231', 'Nataly Arango', 'Colombia', 'Barranquilla', 'Carrera 45B Sur #48-57', 'nataly15@gmail.com', '3023101139')
const proveedor3 = new Proveedor([], '33941231', 'Nataly Arango', 'Colombia', 'Barranquilla', 'Carrera 45B Sur #48-57', 'nataly15@gmail.com', '3023101139')
console.log(usuario1.add_cliente(cliente5));
console.log(usuario1.add_cliente(cliente1));
console.log(usuario1.add_cliente(cliente2));
console.log(usuario1.add_cliente(cliente3));
console.log(usuario1.add_cliente(cliente4));

console.log(usuario1.add_vendedor(vendedor5));
console.log(usuario1.add_vendedor(vendedor1));
console.log(usuario1.add_vendedor(vendedor2));
console.log(usuario1.add_vendedor(vendedor3));
console.log(usuario1.add_vendedor(vendedor4));




console.log(usuario1.add_proveedor(proveedor1));
console.log(usuario1.add_proveedor(proveedor2));
console.log(usuario1.add_proveedor(proveedor3));

console.log(usuario1.contactos.clientes)
console.log(usuario1.contactos.proveedores)

console.log('Tamaño clientes: ', usuario1.contactos.clientes.length)
console.log('Tamaño proveedores: ', usuario1.contactos.clientes.length)
export {usuario1}