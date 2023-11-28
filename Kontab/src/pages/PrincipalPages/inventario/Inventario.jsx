import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Tarjeta } from "../../../components/componentInventario/Tarjeta";
import { Products } from "./Products";
import { NotProducts } from "./NotProducts";

export const Inventario = ({usuarioKontab}) => {

    let renderProductos;
    if(usuarioKontab.inventario.length > 0){
        renderProductos = <Products usuarioKontab={usuarioKontab}/>
    }else{
        renderProductos = <NotProducts usuarioKontab={usuarioKontab}/>
    }

    return (
        <div className="flex flex-col w-full p-10">

            <section className="mb-10">
                <div>
                    <h2 className="text-[20px] text-black font-[nunito] font-semibold">INVENTARIO</h2>
                </div>
            </section>
            
            <section>
                <div className="flex items-center w-[full] h-[45px] my-5 pl-4 bg-white drop-shadow-sm rounded-md">
                    <form className="flex space-x-4 items-center w-full h-full">    
                        <Button className="shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 30 30" className="opacity-20">
                            <path d="M 13 3 C 7.4886661 3 3 7.4886661 3 13 C 3 18.511334 7.4886661 23 13 23 C 15.396652 23 17.59741 22.148942 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148942 17.59741 23 15.396652 23 13 C 23 7.4886661 18.511334 3 13 3 z M 13 5 C 17.430666 5 21 8.5693339 21 13 C 21 17.430666 17.430666 21 13 21 C 8.5693339 21 5 17.430666 5 13 C 5 8.5693339 8.5693339 5 13 5 z"></path>
                        </svg>
                        </Button>
                        <input type="text" placeholder="Buscar ..." className="focus:outline-none focus:border-0 flex items-center bg-transparent w-full h-full rounded-r-full text-[15px] placeholder:text-[#353C43] text-[#353c43] appearance-none"></input>
                    </form>
                </div>
            </section>

            

            <section className="flex flex-wrap w-full mt-8">
                {renderProductos}
            </section>

        </div>

    );
}