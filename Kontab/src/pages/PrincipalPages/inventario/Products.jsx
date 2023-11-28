import { Button } from "@material-tailwind/react"
import { Tarjeta } from "../../../components/componentInventario/Tarjeta"
import { ModalAddProducto } from "./ModalAddProducto"

export const Products = ({usuarioKontab}) =>{
   
    return(
        <div className="flex flex-col w-full justify-center h-[65vh]">
            
            <div className="flex justify-between items-center mb-5">
            <h2>PRODUCTOS</h2>
            <Button onClick={()=>document.getElementById('modalAddProducto').showModal()}  className="h-[40px] bg-[#ff8308] hover:bg-[#da9826] drop-shadow-lg w-[180px] flex justify-center items-center rounded-lg hover:scale-105 transition-all duration-200">AGREGAR PRODUCTO</Button>
            <ModalAddProducto usuarioKontab={usuarioKontab}/>
            </div>
            
            <div className="flex flex-wrap w-full h-full overflow-y-auto">
                {
                    usuarioKontab.inventario.map((value,index) =>
                        <div key={index}>
                            <Tarjeta id={value.idProducto} nombre={value.nombreProducto} stock={value.cantProducto} precioCompra={value.precioCompra} precioVenta={value.precioVenta} imagen={value.imageProducto} usuarioKontab={usuarioKontab} />
                        </div>
                    )
                }

                
            </div>
            
            
        </div>
    )
}