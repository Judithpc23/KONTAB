export const Factura=()=>{
    return(
        <section className="flex flex-col px-20 pt-20">
        <div className="flex justify-between pb-10">
            <section className="flex justify-center w-[200px] h-[200px]">
                    <div className="text-[5rem]">
                        <h1>
                            Logo
                        </h1>
                    </div>
            </section>


            <div className="flex justify-center">
                <section className="flex flex-col">
                    <div className="flex justify-center text-[1.5rem] text-black uppercase">
                        <h1>
                            Nombre Empresa
                        </h1>
                    </div>
                    <div className="flex justify-center text-[1.4rem] text-black">
                        <h1>
                            telefono/correo
                        </h1>
                    </div>
                    <div className="flex justify-center text-[1.4rem] text-black">
                        <h1>
                            Direccion empresa
                        </h1>
                    </div>
                    <div className="flex justify-center text-[1.4rem] text-black">
                        <h1>
                            Estado, ciudad, pais, C.P
                        </h1>
                    </div>
                </section>
            </div>

            <section className="flex flex-col w-[200px] text-black">
                <div className="flex justify-end text-[1.35rem] uppercase">
                    <h1>
                        Factura electronica
                    </h1>
                </div>
                <div className="flex justify-end text-[2rem] font-semibold">
                    <h1>
                        N. 001
                    </h1>
                </div>
            </section>
        </div>

            <section className="flex justify-between pb-10">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="text-[1.5rem] text-black uppercase">
                            <h1>
                                Cliente
                            </h1>
                        </div>
                        <div>
                            <h1>
                                **********
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="text-[1.5rem] text-black uppercase">
                            <h1>
                                CC
                            </h1>
                        </div>
                        <div>
                            <h1>
                                **********
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="text-[1.5rem] text-black uppercase">
                            <h1>
                                telefono
                            </h1>
                        </div>
                        <div>
                            <h1>
                                **********
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px]">
                        <div className="text-[1.5rem] text-black uppercase">
                            <h1>
                                direccion
                            </h1>
                        </div>
                        <div>
                            <h1>
                                **********
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col">
                    <div className="flex justify-between items-center w-[200px] text-[1.5rem] text-black uppercase">
                        <div className="">
                            <h1>
                                fecha
                            </h1>
                        </div>
                        <div>
                            <h1>
                                DD/MM/AAAA
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px] text-[1.5rem] text-black">
                        <div className="uppercase">
                            <h1>
                                plazo
                            </h1>
                        </div>
                        <div>
                            <h1>
                                DD dias
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-[200px] text-[1.5rem] text-black uppercase">
                        <div className="">
                            <h1>
                                vence
                            </h1>
                        </div>
                        <div>
                            <h1>
                                DD/MM/AAAA
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-[1.5rem]">
                    <div className="flex justify-between text-black uppercase border-y">
                        <div><h1>item</h1></div>
                        <div><h1>unidades</h1></div>
                        <div><h1>precio unitario</h1></div>
                        <div><h1>descuento</h1></div>
                        <div><h1>iva</h1></div>
                        <div><h1>total</h1></div>
                    </div>
                    <div className="border-y text-black font-semibold">
                        <div><h1>TOTAL</h1></div>
                    </div>
            </section>
        </section>
    )
}

export const GenerateFactura=()=>{
    
}

export const NoFactura=()=>{

    return(
        <div className="flex justify-center">
            <div className="">
                <h1>
                    NoFactura
                </h1>
            </div>
        </div>
    )   
}