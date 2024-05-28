import { Button } from "@material-tailwind/react"

export const Tarjeta = ({id, nombre, stock, precioCompra, precioVenta, imagen, usuarioKontab}) => {
    return(
        <div className="flex flex-col h-[400px] w-[280px] m-5 rounded-lg bg-[#f9fcff] drop-shadow transition-all duration-200">
                <div className="w-full h-[60%] rounded-md">
                        <img src={imagen} alt="Producto" className="object-cover w-full h-full rounded-t-lg"/>
                    </div>

                <div className="flex w-full h-[40%]">
                
                    <section className="w-[60%]">
                        <div className="flex flex-col justify-center w-full p-5">
                            <h2 className="text-[1.5rem] leading-8 font-semibold text-black mb-2">{nombre}</h2>
                            <h2 className="text-[1rem]">Id: {id}</h2>
                        </div>
                        <div className="text-[1rem] text-black px-5">
                            <h2 className="text-[#369aff]">Venta: {precioVenta}</h2>
                            <h2 className="">Compra: {precioCompra}</h2>
                        </div>
                    </section>

                    <section className="flex flex-col justify-center text-center w-[40%] p-5 bg-gray-200 rounded-br-lg">
                        <div className="text-[50px] font-extrabold font-[nunito] mb-2">
                            <h2>{stock}</h2>
                            <h2 className="text-[10px] font-thin">Stock</h2>
                        </div>
                        <div className="flex w-full justify-around">
                            <Button className="flex justify-center items-center bg-[#0084FF] w-[30px] h-[30px]">
                                <img src="./src/assets/img/icons/iconEdit.png" alt="E" className="object-contain object-center w-[18px] h-[18px]"/>
                            </Button>
                            <Button onClick={()=>usuarioKontab.eliminar_producto(id)} className="flex justify-center items-center bg-[#ff004c] w-[30px] h-[30px]">
                                <img src="./src/assets/img/icons/iconDeleted.png" alt="✕" className="object-contain object-center w-[18px] h-[18px]"/>

                            </Button>
                            
                        </div>
                        
                    </section>
                    
                    
                </div>
        </div>
    )
}