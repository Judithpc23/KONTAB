import { Button } from "@material-tailwind/react"
import { ModalAddClient } from "./clientes/ModalAddClient";
import { ModalAddProveedor } from "./proveedores/ModalAddProveedor";
import { ModalAddVendedor } from "./vendedores/ModalAddVendedor";


export const NoContact = ({estadoProveedor, estadoVendedor, estadoCliente, usuarioKontab}) => {

    if(estadoProveedor){
        return(
            
            <div className="flex flex-col justify-center items-center w-full h-auto space-y-10 m-auto p-24">
                <section className="flex flex-col justify-center items-center">
                    <img src="\src\assets\img\icons\notContact.png" alt="Sin contactos" title="Sin contactos" />
                    <h2 className="font-[nunito] font-thin text-[#a0a0a0] text-[12px]">NO HAY PROVEEDORES</h2>
                </section>
                <section>
                <Button onClick={()=>document.getElementById('modalAddProveedor').showModal()} className="btn flex justify-center items-center w-[200px] h-[50px] text-[#FFF] font-medium bg-[#353C43] border-none hover:bg-[#da6526]">AGREGAR PROVEEDOR</Button>
                <ModalAddProveedor usuarioKontab={usuarioKontab}/>
                </section>
            </div>

        )
    }
    if(estadoVendedor){
        return(
            
            <div className="flex flex-col justify-center items-center w-full h-auto space-y-10 m-auto p-24">
                <section className="flex flex-col justify-center items-center">
                    <img src="\src\assets\img\icons\notContact.png" alt="Sin contactos" title="Sin contactos" />
                    <h2 className="font-[nunito] font-thin text-[#a0a0a0] text-[12px]">NO HAY VENDEDORES</h2>
                </section>
                <section>
                <Button onClick={()=>document.getElementById('modalAddVendedor').showModal()} className="btn flex justify-center items-center w-[200px] h-[50px] text-[#FFF] font-medium bg-[#353C43] border-none hover:bg-[#da264a]">AGREGAR VENDEDOR</Button>
                <ModalAddVendedor usuarioKontab={usuarioKontab}/>
                </section>
            </div>

        )
    }
    if(estadoCliente){
        return(
            <div className="flex flex-col justify-center items-center w-full h-auto space-y-10 m-auto p-24">
                <section className="flex flex-col justify-center items-center">
                    <img src="\src\assets\img\icons\notContact.png" alt="Sin contactos" title="Sin contactos" />
                    <h2 className="font-[nunito] font-thin text-[#a0a0a0] text-[12px]">NO HAY CLIENTES</h2>
                </section>
                <section>
                <Button onClick={()=>document.getElementById('modalAddClient').showModal()} className="btn flex justify-center items-center w-[200px] h-[50px] text-[#FFF] font-medium bg-[#353C43] border-none hover:bg-[#3f4fff]">AGREGAR CLIENTE</Button>
                <ModalAddClient usuarioKontab={usuarioKontab}/>
                </section>
            </div>
        )
    }
    
}