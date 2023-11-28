import React from "react";

export const Ingresos = () => {
    return (
        <div className="flex flex-col bg-[#F4F8FF] w-full h-full overflow-hidden overflow-y-auto">
            <div className="w-full h-full">
                <div className="text-[25px] text-black font-[nunito] font-semibold uppercase m-8">
                    <h1>facturas</h1>
                </div>



                <div className="flex justify-start mx-[5%] mt-[5%] mb-[3%] min-h-[4%]">
                    <div className="bg-[#353C43] min-w-[170px] mx-[1%] rounded shadow-md">
                        <div className="text-[100%] text-white font-[nunito] ml-[5%]">
                            <h1>Imprimir</h1>
                        </div>
                    </div>

                    <div className="bg-[#D2004B] min-w-[170px] mx-[1%] rounded shadow-md">
                        <div className="text-[100%] text-white font-[nunito] ml-[5%]">
                            <h1>Descargar PDF</h1>
                        </div>
                    </div>

                    <div className="bg-[#009A22] min-w-[170px] mx-[1%] rounded shadow-md">
                        <div className="text-[100%] text-white font-[nunito] ml-[5%]">
                            <h1>Descargar Excel</h1>
                        </div>
                    </div>
                </div>



                <div className="flex justify-start mx-[5%] min-h-[15%] overflow-hidden overflow-x-auto scrollbar-none">

                    <div className="flex justify-start w-full min-h-[100%]">
                        <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md">
                            <div className="text-[100%] text-black font-[nunito] font-semibold">
                                <h1>Factura N.1</h1>
                            </div>
                        </div>
                        <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md"> 
                            <div className="text-[100%] text-black font-[nunito] font-semibold">
                                <h1>Factura N.2</h1>
                            </div>
                        </div>                        
                    </div> 
                </div>


                <div className="bg-[#FFFFFF] mx-[5%] mt-[5%] min-h-[50%] rounded-lg shadow-md">

                </div>
            </div>
        </div>
    );
}