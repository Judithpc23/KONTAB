

export const Ayuda = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center w-[98%] ml-3">

                <div className="flex flex-col m-6 text-black text-3xl font-semibold font-['Nunito Sans']" >
                    <h2>Ayuda</h2>
                </div>

                <div className="collapse bg-slate-400 text-white">
                    <input type="checkbox" />

                    <div className="collapse-title text-xl font-medium">
                        Solicitar soporte tecnico
                    </div>

                    <div className="collapse-content">
                        <p className="text-3xl m-3 mb-7 text-black">Enviar email con el inconveniente presentado</p>

                        <div className="flex flex-row items-center ">
                            
                            <div className="stack w-[400px] mr-4">

                                <div className=" flex justify-center items-start card shadow-md bg-white text-primary-content">
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl text-black ">Correo de Contacto</h2>
                                        <h2 className="card-title text-black">cejtechinnovaciondesarrollo@gmail.com</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="stack w-[400px]">
                                <div className="flex justify-center items-start card shadow-md bg-white text-primary-content">
                                    <div className="card-body">
                                        <h2 className="card-title text-3xl text-black">Horario de Atencion</h2>
                                        <h2 className="card-title text-black">Lunes a sabado: 8:00 a.m - 6:00 p.m.</h2>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}