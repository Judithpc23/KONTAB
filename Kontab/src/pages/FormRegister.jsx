import { fileInput, logoSoftware, txtInput } from "../components/ComponentsForm";
import { ButtonMateDark } from "../components/buttons";

import { itemFormRegister } from "../components/ComponentsForm";
import { Link } from "react-router-dom";

export const FormRegister = () => {    
    return(
        <>
            <section className="relative h-full w-full flex flex-col items-center justify-start">
                <section className="w-full flex justify-between items-center m-[15px] md:mb-14">
                    <div title="Atrás">
                        <button type="button" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[2rem] lg:h-[2rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover"></button>
                    </div>

                    <div>
                        <p className="hidden lg:flex text-[13px] sm:text-[15px] md:text-[1.4rem] xl:text-[1.3rem] mx-5 font-[nunito-sans-light] hover:text-[#0094FF]"><a href="#formLogin" className="hidden lg:flex absolute">Iniciar sesión</a><Link to="/Login" className="">Iniciar sesión</Link></p>
                        <a className="lg:hidden flex text-[13px] sm:text-[15px] md:text-[1.4rem] xl:text-[1.3rem] mx-5 font-[nunito-sans-light] hover:text-[#0094FF]"><Link to="/Login">Iniciar sesión</Link></a>
                    </div>
                </section>

                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="bg-[url('/src/assets/img/logo/Logo.png')] bg-cover w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[3.3rem] xl:h-[3.2rem] rounded"></div>
                            {logoSoftware()}
                        </div>
                        <p className="flex text-[15px] md:text-[1.5rem] xl:text-[1.3rem] text-center mt-5 m-2 font-[nunito-sans]">Registro</p>
                    </div>               

                <form className="relative w-full contents">
                    
                        <div className="carousel w-full mt-2 mb-10">
                            <div className="carousel-item w-full flex-col">
                                <div id="item1" className="relative w-full">    
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información del usuario</p>
                                    {itemFormRegister(txtInput("ideR", "number", "Identificación", true), txtInput("txtNombreR", "text", "Nombre", true), txtInput("txtUsuarioR", "text", "Usuario", true), txtInput("txtContraseñaR", "password", "Contraseña", true))}
                                </div>
                                <div className="flex justify-between mx-4 md:mx-10 lg:pb-5 lg:mx-[3rem]">
                                    <a href="#item1" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Atrás</a> 
                                    <a href="#item2" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Siguiente</a>
                                </div>
                            </div>

                            <div className="carousel-item w-full flex-col">
                                <div id="item2" className="relative w-full">
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información de la empresa</p>
                                    {itemFormRegister(txtInput("nitR", "number", "Nit (opcional)", false), txtInput("txtNombreEmpresaR", "text", "Nombre", true), txtInput("txtTelefonoR", "number", "Teléfono", true), txtInput("txtCorreo", "email", "Correo", true))}
                                </div>
                                <div className="flex justify-between mx-4 md:mx-10 pb-5 lg:mx-[3rem]">
                                    <a href="#item1" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Atrás</a> 
                                    <a href="#item3" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Siguiente</a>
                                </div>
                            </div>

                            <div className="carousel-item w-full flex-col">
                                <div id="item3" className="relative w-full">
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información de la empresa</p>
                                    {itemFormRegister(txtInput("txtPaisR", "text", "País", true), txtInput("txtCiudadR", "text", "Ciudad", true), txtInput("txtDireccion", "text", "Dirección", true), fileInput())}
                                </div>
                                <div className="w-auto flex justify-between mx-4 md:mx-10 lg:mx-[3rem]">
                                    <a href="#item2" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Atrás</a> 
                                    <a href="#item3" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Siguiente</a>
                                </div>
                            </div>

                        </div>
                    
                    
                    
                    <div className="flex justify-center w-[85%]">
                        {ButtonMateDark("Crear cuenta", "btnCrearCuentaR", "submit")}
                    </div>
                </form>
            </section>
            
        </>
    )
}