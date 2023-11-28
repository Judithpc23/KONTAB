import { Button } from "@material-tailwind/react"
import { Cliente } from "../../../../core/Persona/Cliente"
import { usuario1 } from "../../../../core/Persona/Usuario"
import { Clientes } from "./Clientes"

export const ModalAddClient = ({usuarioKontab}) => {
    
    console.log(usuarioKontab.contactos.clientes)
    const add_cliente = () => {
        usuarioKontab.add_cliente(
            new Cliente(
                [],
                document.getElementById('txtIdeCliente').value, 
                document.getElementById('txtNombreCliente').value, 
                document.getElementById('txtPaisCliente').value, 
                document.getElementById('txtCiudadCliente').value, 
                document.getElementById('txtDireccionCliente').value, 
                document.getElementById('txtEmailCliente').value, 
                document.getElementById('txtTelCliente').value
            )
        )
        return true;

    }
    return (
        <dialog id="modalAddClient" className="modal flex flex-col m-auto justify-start items-center w-[250px] lg:w-[35%] h-[400px] lg:h-[500px] pt-5 md:w-[350px] md:h-[450px] min-w-[250px] min-h-[300px] bg-[rgb(255,255,255)] rounded-lg overflow-y-auto">
            <div className="w-full space-y-7">
                <div className="flex justify-between items-center mx-auto w-[95%] h-[50px] rounded-t-lg border-b-[1px] border-[#353C43] border-opacity-20 p-5">
                    <h2 className="font-[nunito] text-[20px] text-black">Agregar cliente</h2>
                    <form method="dialog"><button className="flex justify-center h-[30px] w-[30px] items-center rounded-full hover:bg-gray-200 text-[1rem] text-black font-thin">✕</button></form>
                </div>

                <div className="flex flex-col w-full p-8">
                    <form action="" className="lg:space-y-10">
                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Identificación</label>
                                <input id="txtIdeCliente" type="number" required className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Nombre</label>
                                <input id="txtNombreCliente" type="text" required className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Correo</label>
                                <input id="txtEmailCliente" type="email" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Teléfono</label>
                                <input id="txtTelCliente" type="number" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>

                        <section className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Dirección</label>
                                <input id="txtDireccionCliente" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                            <div className="flex flex-col w-full lg:w-[45%] mb-5 lg:mb-0">
                                <label htmlFor="">Ciudad</label>
                                <input id="txtCiudadCliente" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>
                        <section className="flex w-full">
                            <div className="flex flex-col w-full mb-5 lg:mb-0">
                                <label htmlFor="">País</label>
                                <input id="txtPaisCliente" type="text" className="w-full h-[30px] border-[1px] text-black rounded-md focus:outline-none focus:border-[#353C43] focus:border-2 p-5"/>
                            </div>
                        </section>
                        <div className="flex justify-end w-full space-x-4 my-10">
                            
                            <Button onClick={() => add_cliente()}
                                    
className="flex justify-center items-center bg-[#3F4FFF] h-[35px] w-[100px] px-5 lg:text-[1rem] rounded-md text-white font-semibold capitalize">Aceptar</Button>
                            
                        </div>
                        
                        
                    </form>

                </div>

            </div>
        </dialog>
    )
}