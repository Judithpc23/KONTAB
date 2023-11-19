import { Link } from "react-router-dom"
import { logoSoftware, txtInput } from "../components/ComponentsForm"
import { ButtonMateDark, CheckboxRippleEffect } from "../components/buttons"



export const FormLogin = () =>{
    return(
        <>
        
            <div className='flex flex-col w-full h-full p-7 lg:w-[40%] items-center z-10'>

                <section className="w-full flex justify-between items-center m-[15px]">
                    <div title="Atrás">
                        <button type="button" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[2rem] lg:h-[2rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover"></button>
                    </div>

                    <div>
                        <button className="hidden lg:flex text-[13px] sm:text-[15px] md:text-[15px] xl:text-[15px] font-[nunito-sans-light] hover:text-[#0094FF]"><a href="#formRegister">Registrarse</a></button>
                        <p className="lg:hidden flex text-[13px] sm:text-[15px] md:text-[15px] xl:text-[14px] font-[nunito-sans-light] hover:text-[#0094FF]"><Link to="/Register">Registrarse</Link></p>
                    </div>
                </section>

                <section className="relative h-full w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-full mb-5">
                        <div className="flex items-center justify-center space-x-4">
                            <div className="bg-[url('./src/assets/img/logo/Logo.png')] bg-cover w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[3.3rem] xl:h-[3.2rem] rounded"></div>
                            {logoSoftware()}
                        </div>
                        <p className="flex text-[15px] md:text-[1.5rem] xl:text-[1.3rem] text-center font-[nunito-sans] mt-5">Inicia sesión</p>
                    </div>                            

                    <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">

                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-[1rem] lg:mb-[1rem]">
                            {txtInput("txtUsuarioL", "text", "Usuario", true)}
                        </div>

                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-3">
                            {txtInput("txtContraseñaL", "password", "Contraseña", true)}
                        </div>

                    </section>

                    <section className="w-[90%] md:w-[80%] min-w-[200px] flex items-center justify-between">

                        {CheckboxRippleEffect()}
                        <div className="items-end text-right pr-3">
                            <p className="flex flex-col font-[nunito-sans-light] text-[11px] md:text-[12px] xl:text-[1.1rem] text-[#5F6A85] hover:text-[#0094FF] text-right"><a href="#">¿Olvidaste contraseña?</a></p>
                        </div>

                    </section>

                    <section className="w-[95%] md:w-[85%] flex items-center justify-center mt-12">
                        {ButtonMateDark ('Ingresar', 'iniciarSesion')}
                    </section>
                    
                </section>
            </div> {/*Inicio de sesión*/}
        </>
    )
}