import { Button } from "@material-tailwind/react"
import { Producto } from "../../../core/sistema/facturas/Producto"
import { fileInput } from "../../../components/ComponentsForm"
import { Tarjeta } from "../../../components/componentInventario/Tarjeta";

export const ModalAddProducto = ({usuarioKontab}) => {

    const add_producto = () => {
        usuarioKontab.add_producto(
            new Producto(
                document.getElementById('txtIdeProducto').value, 
                document.getElementById('txtNombreProducto').value, 
                document.getElementById('txtCantidadProducto').value, 
                document.getElementById('txtPrecioCompra').value, 
                document.getElementById('txtPrecioVenta').value, 
                document.getElementById('imageProducto').value
            )
        )
        return true;
    }
    console.log(usuarioKontab.inventario)
    return (
        <dialog id="modalAddProducto" className="modal flex flex-col m-auto justify-start items-center w-[250px] lg:w-[35%] h-[400px] lg:h-[500px] pt-5 md:w-[350px] md:h-[450px] min-w-[250px] min-h-[300px] bg-[rgb(255,255,255)] rounded-lg overflow-y-auto">
            <div className="w-full space-y-7">
                <div className="flex items-center justify-between mx-auto w-[95%] h-[50px] rounded-t-lg border-b-[1px] border-[#353C43] border-opacity-20 p-5">
                    <h2 className="font-[nunito] text-[20px] text-black">Agregar Producto</h2>
                    <form method="dialog"><button className="flex justify-center h-[30px] w-[30px] items-center rounded-full hover:bg-gray-200 text-[1rem] text-black font-thin font-[nunito-sans]">✕</button></form>
                </div>

                <div className="flex flex-col w-full p-8">
                    <form action="" className="lg:space-y-10">
                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Id Producto</label>
                                <input id="txtIdeProducto" type="number" required className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Producto</label>
                                <input id="txtNombreProducto" type="text" required className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Stock</label>
                                <input id="txtCantidadProducto" type="number" className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Precio compra</label>
                                <input id="txtPrecioCompra" type="number" className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex w-full">
                            <div className="flex flex-col w-full mb-5 lg:mb-0">
                                <label htmlFor="">Precio venta</label>
                                <input id="txtPrecioVenta" type="text" className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            
                        </section>
                        <section className="flex w-full">
                            <div className="flex flex-col w-full mb-5 lg:mb-0">
                                <label htmlFor="">URL de la imagen</label>
                                <input id="imageProducto" type="text" className="w-full h-[30px] border-[1px] text-black bg-white rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            
                        </section>
                        <div className="flex justify-end w-full space-x-4 my-10">
                            
                            <Button onClick={() => add_producto()} className="flex justify-center items-center bg-[#da9826] h-[35px] w-[100px] px-5 lg:text-[1rem] rounded-md text-white font-semibold capitalize">Aceptar</Button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    )
}