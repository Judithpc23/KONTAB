import { Button } from "@material-tailwind/react"
import { useState } from "react";
import { Clientes } from "./clientes/Clientes";
import { NoContact } from "./NoContact";
import { Proveedores } from "./proveedores/Proveedores";
import { Vendedores } from "./vendedores/Vendedores";

export const Contactos = ({usuarioKontab}) => {
    const [proveedor, setProveedor] = useState(true);
    const [vendedor, setVendedor] = useState(false);
    const [cliente, setCliente] = useState(false);
    

    let renderClientes;
    let renderProveedores;
    let renderVendedores;
    if(usuarioKontab.contactos.clientes.length > 0){
        renderClientes = <Clientes usuarioKontab={usuarioKontab}/>
    }else{
        renderClientes = <NoContact estadoProveedor={proveedor} estadoVendedor={vendedor} estadoCliente={cliente} usuarioKontab={usuarioKontab}/>
    }
    if(usuarioKontab.contactos.proveedores.length > 0){
        renderProveedores = <Proveedores usuarioKontab={usuarioKontab}/>
    }else{
        renderProveedores = <NoContact estadoProveedor={proveedor} estadoVendedor={vendedor} estadoCliente={cliente} usuarioKontab={usuarioKontab}/>
    }
    if(usuarioKontab.contactos.vendedores.length > 0){
        renderVendedores = <Vendedores usuarioKontab={usuarioKontab}/>
    }else{
        renderVendedores = <NoContact estadoProveedor={proveedor} estadoVendedor={vendedor} estadoCliente={cliente} usuarioKontab={usuarioKontab}/>
    }
    console.log('proveedor:', proveedor)
    console.log('vendedor:', vendedor)
    console.log('cliente:', cliente)
    return (
        <div className="flex flex-col w-full p-10">
            <div>
                <h2 className="text-[20px] font-[nunito-sans] font-semibold text-black">CONTACTOS</h2>
            </div>

            <div className="flex flex-grow justify-center bg-white divide-x-2 my-5">
                <Button onClick={()=>proveedor?setProveedor(false):setProveedor(true)&setVendedor(false)&setCliente(false)} className={`${proveedor?'border-b-[2px] border-b-[#7BA8FF]':''} h-[100px] w-[33.3%] flex flex-col justify-center items-center rounded-none`}>
                <div className="bg-[url('./src/assets/img/icons/iconProveedor.png')] w-[50px] h-[50px] bg-cover"/>
                <h2 className="text-[15px] text-[#353C43]">
                    PROVEEDORES
                </h2>

                </Button>
                <Button onClick={()=>vendedor?setVendedor(false):setVendedor(true)&setProveedor(false)&setCliente(false)} className={`${vendedor?'border-b-[2px] border-b-[#7BA8FF]':''} h-[100px] w-[33.3%] flex flex-col justify-center items-center rounded-none`}>
                <div className="bg-[url('./src/assets/img/icons/iconVendedor.png')] w-[50px] h-[50px] bg-cover"/>
                <h2 className="text-[15px] text-[#353C43]">
                    VENDEDORES
                </h2>

                </Button>
                <Button onClick={()=>cliente?setCliente(false):setCliente(true)&setProveedor(false)&setVendedor(false)} className={`${cliente?'border-b-[2px] border-b-[#7BA8FF]':''} h-[100px] w-[33.3%] flex flex-col justify-center items-center rounded-none`}>
                    <div className="bg-[url('./src/assets/img/icons/iconCliente.png')] w-[50px] h-[50px] bg-cover"/>
                    <h2 className="text-[15px] text-[#353C43]">
                        CLIENTES
                    </h2>
                </Button>

            </div>
            <div className="flex items-center w-[400px] h-[30px] my-5 pl-4 border-[#353C43] border-b-[1.5px]">
                <form className="flex space-x-4 items-center w-full h-full">    
                    <Button className="shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 30 30" className="opacity-20">
                        <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                    </svg>
                    </Button>
                    <input type="text" placeholder="Buscar ..." className="focus:outline-none focus:border-0 flex items-center bg-transparent w-full h-full rounded-r-full text-[15px] placeholder:text-[#353C43] text-[#353c43] appearance-none"></input>
                </form>
            </div>
            
            <div>
                {proveedor?renderProveedores:vendedor?renderVendedores:renderClientes}
            </div>
        </div>
    );
}