import { Button } from "@material-tailwind/react"
import { Vendedor } from "../../../../core/Persona/Vendedor"

export const ModalAddVendedor = ({usuarioKontab}) => {
    console.log(usuarioKontab.contactos.vendedores)
    const add_vendedor = () => {
        usuarioKontab.add_vendedor(
            new Vendedor(
                [],
                document.getElementById('txtIdeVendedor').value, 
                document.getElementById('txtNombreVendedor').value, 
                document.getElementById('txtPaisVendedor').value, 
                document.getElementById('txtCiudadVendedor').value, 
                document.getElementById('txtDireccionVendedor').value, 
                document.getElementById('txtEmailVendedor').value, 
                document.getElementById('txtTelVendedor').value
            )
        )
        return true;

    }
    return (
        <dialog id="modalAddVendedor" className="modal flex flex-col m-auto justify-start items-center w-[250px] lg:w-[35%] h-[400px] lg:h-[500px] pt-5 md:w-[350px] md:h-[450px] min-w-[250px] min-h-[300px] bg-[rgb(255,255,255)] rounded-lg overflow-y-auto">
            <div className="w-full space-y-7">
                <div className="flex items-center justify-between mx-auto w-[95%] h-[50px] rounded-t-lg border-b-[1px] border-[#353C43] border-opacity-20 p-5">
                    <h2 className="font-[nunito] text-[20px] text-black">Agregar Vendedor</h2>
                    <form method="dialog"><button className="flex justify-center h-[30px] w-[30px] items-center rounded-full hover:bg-gray-200 text-[1rem] text-black font-thin font-[nunito-sans]">✕</button></form>
                </div>

                <div className="flex flex-col w-full p-8">
                    <form action="" className="lg:space-y-10">
                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Identificación</label>
                                <input id="txtIdeVendedor" type="number" required className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Nombre</label>
                                <input id="txtNombreVendedor" type="text" required className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Correo</label>
                                <input id="txtEmailVendedor" type="email" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Teléfono</label>
                                <input id="txtTelVendedor" type="number" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Dirección</label>
                                <input id="txtDireccionVendedor" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Ciudad</label>
                                <input id="txtCiudadVendedor" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>
                        <section className="flex w-full">
                            <div className="flex flex-col w-full mb-5 lg:mb-0">
                                <label htmlFor="">País</label>
                                <input id="txtPaisVendedor" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>
                        <div className="flex justify-end w-full space-x-4 my-10">
                            
                            <Button onClick={() => add_vendedor()}
                                    
className="flex justify-center items-center bg-[#da264a] h-[35px] w-[100px] px-5 lg:text-[1rem] rounded-md text-white font-semibold capitalize">Aceptar</Button>
                            
                        </div>
                        
                        
                    </form>

                </div>

            </div>
        </dialog>
    )
}