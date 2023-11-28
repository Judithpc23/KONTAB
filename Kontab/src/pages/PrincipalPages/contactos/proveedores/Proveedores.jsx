import { Button } from "@material-tailwind/react";
import { ModalAddProveedor } from "./ModalAddProveedor";

export const Proveedores = ({usuarioKontab}) => {
    return(
        <div className="">
            <div className="flex justify-between items-center h-[100px] bg-white p-5 rounded-t-lg">
                <h2 className="text-[20px] text-[#353C43] font-[nunito] font-semibold">Clientes</h2>
                <Button onClick={()=>document.getElementById('modalAddProveedor').showModal()} className="btn flex justify-center items-center text-[#FFF] font-medium bg-[#da6526] border-none hover:bg-[#da5326]">AGREGAR CLIENTE</Button>
                <ModalAddProveedor usuarioKontab={usuarioKontab}/>
            </div>
            <div className="h-[45vh] overflow-y-auto min-h-[400px]">
                <table className="table-auto w-full bg-white rounded-b-lg">
                    <thead className="top-0 sticky">
                        <tr className="bg-gray-100 text-star mb-10">
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin p-5">IDENTIFICACIÓN</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">NOMBRE</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">CORREO</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">TELÉFONO</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">DIRECCIÓN</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">CIUDAD</th>
                            <th className="text-left text-[12px] font-[nunito-sans] font-thin">NO. FACTURAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            usuarioKontab.contactos.proveedores.map((value,index) => {
                                return(

                                    <tr key={index}>
                                    <td className="p-5 text-black font-semibold">{value.id}</td>
                                    <td className="text-black">{value.nombre}</td>
                                    <td className="text-black">{value.correo}</td>
                                    <td className="text-black">{value.telefono}</td>
                                    <td className="text-black">{value.direccion}</td>
                                    <td className="text-black">{value.ciudad}</td>
                                    <td className="text-black">{value.facturasCompra.length}</td>
                                </tr>
                                )
                                
                            })
                        }
                        
                       
                        
                    </tbody>
                    
                    
                </table>
            </div>
            
        </div>
    )
}