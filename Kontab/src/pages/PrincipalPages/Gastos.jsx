import { Button } from "@material-tailwind/react";
import React from "react";

export const Gastos = () => {   
    return (
        <div className="flex flex-col bg-[#F4F8FF] w-full px-14">

        <div className="w-full h-full">
            <div className="text-[25px] text-black font-[nunito] font-semibold uppercase my-8">
                <h1>Facturas de Compra</h1>
            </div>

            <div className="flex justify-start mt-20 mb-10 space-x-5">
                <Button className="flex justify-between capitalize bg-[#353C43] min-w-[170px] rounded shadow-md px-5">
                    <div className="text-[100%] text-white font-[nunito]">
                        <h1>Imprimir</h1>
                    </div>
                    <div className="bg-[url('src/assets/img/icons/Impresora.png')] w-[20px] h-[20px] bg-cover">
                    </div>
                </Button>

                <Button className="flex justify-between capitalize bg-[#D2004B] min-w-[170px] rounded shadow-md px-5">
                    <div className="text-[100%] text-white font-[nunito]">
                        <h1>Descargar PDF</h1>
                    </div>
                    <div className="bg-[url('src/assets/img/icons/PDF.png')] w-[20px] h-[20px] bg-cover">
                    </div>
                </Button>

                <Button className="flex justify-between capitalize bg-[#009A22] min-w-[170px] rounded shadow-md px-5">
                    <div className="text-[100%] text-white font-[nunito]">
                        <h1>Descargar Excel</h1>
                    </div>
                    <div className="w-[20px] h-[20px] bg-cover">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                        <g fill="#ffffff"><path d="M23.57617,4.06641c-0.26195,-0.00729 -0.52891,0.016 -0.79687,0.07227l-14.20703,2.99219c-2.07242,0.43748 -3.57227,2.28285 -3.57227,4.40234v24.93359c0,2.11899 1.49839,3.96605 3.57227,4.40234l14.20703,2.99023c2.144,0.45191 4.2207,-1.23336 4.2207,-3.42383v-32.87109c0,-1.91666 -1.59015,-3.44705 -3.42383,-3.49805zM30,8v1.5v1.5v27v1.5v1.5h8.5c2.4675,0 4.5,-2.0325 4.5,-4.5v-24c0,-2.4675 -2.0325,-4.5 -4.5,-4.5zM34.5,15h3c0.828,0 1.5,0.671 1.5,1.5c0,0.829 -0.672,1.5 -1.5,1.5h-3c-0.828,0 -1.5,-0.671 -1.5,-1.5c0,-0.829 0.672,-1.5 1.5,-1.5zM12.53711,16.99805c0.48291,0.0127 0.95117,0.25391 1.23242,0.69141l2.23047,3.52148l2.23047,-3.52148c0.45,-0.7 1.38008,-0.89898 2.08008,-0.45898c0.69,0.45 0.89898,1.38008 0.45898,2.08008l-2.99023,4.68945l2.99023,4.68945c0.44,0.7 0.23102,1.63008 -0.45898,2.08008c-0.25,0.15 -0.53055,0.23047 -0.81055,0.23047c-0.49,0 -0.97953,-0.24945 -1.26953,-0.68945l-2.23047,-3.52148l-2.23047,3.52148c-0.29,0.44 -0.77953,0.68945 -1.26953,0.68945c-0.28,0 -0.56055,-0.08047 -0.81055,-0.23047c-0.69,-0.45 -0.89898,-1.38008 -0.45898,-2.08008l2.99023,-4.68945l-2.99023,-4.68945c-0.44,-0.7 -0.23102,-1.63008 0.45898,-2.08008c0.2625,-0.165 0.55791,-0.24004 0.84766,-0.23242zM34.5,23h3c0.828,0 1.5,0.671 1.5,1.5c0,0.829 -0.672,1.5 -1.5,1.5h-3c-0.828,0 -1.5,-0.671 -1.5,-1.5c0,-0.829 0.672,-1.5 1.5,-1.5zM34.5,31h3c0.828,0 1.5,0.671 1.5,1.5c0,0.829 -0.672,1.5 -1.5,1.5h-3c-0.828,0 -1.5,-0.671 -1.5,-1.5c0,-0.829 0.672,-1.5 1.5,-1.5z"></path></g>
                        </svg>
                    </div>
                </Button>
            </div>



            <div className="flex justify-start overflow-x-scroll scrollbar-none">

                <div className="flex justify-start w-full min-h-[140px]">
                    <div className="bg-[#FFFFFF] min-w-[250px] h-full rounded mr-[1%] shadow-md">
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.1</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[250px] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[250px] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] min-w-[20%] h-full rounded mr-[1%] shadow-md"> 
                        <div className="text-[100%] text-black font-[nunito] font-semibold">
                            <h1>Factura N.2</h1>
                        </div>
                    </div>                   
                </div> 
            </div>

            <div className="bg-[#FFFFFF] mt-10 min-h-[350px] rounded-lg shadow-md">

            </div>

        </div>

    </div>
    )
}