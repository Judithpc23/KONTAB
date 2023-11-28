import { Button } from "@material-tailwind/react"
import { ModalAddProducto } from "./ModalAddProducto"

export const NotProducts = ({usuarioKontab}) =>{
    return(
        <div className="flex flex-col justify-center items-center w-full h-auto space-y-10 m-auto p-24">
                <section className="flex flex-col justify-center items-center">
                    <img src="\src\assets\img\icons\caja.png" alt="Sin contactos" title="Sin productos" className="opacity-70"/>
                    <h2 className="font-[nunito] font-thin text-[#a0a0a0] text-[12px]">NO SE ENCONTRARON PRODUCTOS</h2>
                </section>
                <section>
                <Button onClick={()=>document.getElementById('modalAddProducto').showModal()} className="btn flex justify-center items-center w-[200px] h-[50px] text-[#FFF] font-medium bg-[#353C43] border-none hover:bg-[#da9826]">AGREGAR PRODUCTO</Button>
                <ModalAddProducto usuarioKontab={usuarioKontab}/>
                </section>
        </div>
    )
}