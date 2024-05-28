import { fileInput, logoSoftware, txtInput } from "../components/ComponentsForm";
import { ButtonMateDark } from "../components/buttons";
import { Link } from "react-router-dom";

import { appFirebase } from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const auth = getAuth(appFirebase);

export const FormRegister = () => {
    const firestore = getFirestore(appFirebase);

    const functAutentication = async(e) => {
        e.preventDefault();
        const user = e.target.txtUserR.value;
        const password = e.target.txtPasswordR.value;
        const identificacion = e.target.txtIdeR.value;
        const nombre = e.target.txtNombreR.value;
        const nit = e.target.txtNitR.value;
        const nombreEmpresa = e.target.txtNombreEmpresaR.value;
        const telefono = e.target.txtTelefonoR.value;
        const correo = e.target.txtCorreoR.value;
        const pais = e.target.txtPaisR.value;
        const ciudad = e.target.txtCiudadR.value;
        const direccion = e.target.txtDireccionR.value;
        

        try {
            const infoUsuario = await createUserWithEmailAndPassword(auth, user, password, identificacion, nombre, nit, nombreEmpresa, telefono, correo, pais, ciudad, direccion);
            console.log(infoUsuario.user.uid);
            const docRef = await doc(firestore, `usuarios/${infoUsuario.user.uid}`);
            
            setDoc(docRef, {Identificación: identificacion, Nombre:nombre, Nit:nit, Empresa:nombreEmpresa, Teléfono:telefono, Correo: correo, País:pais, Ciudad:ciudad, Dirección:direccion})
            toast.success('¡Bienvenido! :)',{
                position:'top-center',
                autoClose:2000,
                hideProgressBar:true  ,
                pauseOnHover: false,
                closeOnClick:false,
                draggable:true,
                progress:undefined,
                theme:"colored"
              })
        } catch (error) {
            toast.error('Error al crear usuario. \nCorreo existente o contraseña invalida.',{
                position:'top-center',
                autoClose:4000,
                hideProgressBar:true  ,
                pauseOnHover: false,
                closeOnClick:false,
                draggable:true,
                progress:undefined,
              })
        }
    }

    return(
        <>
            <section className="relative h-full w-full flex flex-col items-center justify-start">
                <section className="w-full flex justify-between items-center m-[15px] md:mb-14">
                    <div title="Atrás">
                        <button type="button" className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[2rem] lg:h-[2rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover"></button>
                    </div>

                    <div>
                        <p className="flex text-[13px] sm:text-[15px] md:text-[1.4rem] xl:text-[1.3rem] mx-5 font-[nunito-sans-light] hover:text-[#0094FF]"><a href="#formLogin" className="hidden lg:flex absolute">Iniciar sesión</a><Link to="/Login" className="flex">Iniciar sesión</Link></p>
                    </div>
                </section>

                <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="bg-[url('/src/assets/img/logo/Logo.png')] bg-cover w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[3.3rem] xl:h-[3.2rem] rounded"></div>
                            {logoSoftware()}
                        </div>
                        <p className="flex text-[15px] md:text-[1.5rem] xl:text-[1.3rem] text-center mt-5 m-2 font-[nunito-sans]">Registro</p>
                    </div>               

                <form onSubmit={functAutentication} className="relative w-full contents">
                    
                        <div className="carousel w-full mt-2 mb-10">
                            <div className="carousel-item w-full flex-col">
                                <div id="item1" className="relative w-full">    
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información del usuario</p>
                                    <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtIdeR", "number", "Identificación", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtNombreR", "text", "Nombre", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtUserR", "text", "Usuario", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%]">
                                            {txtInput("txtPasswordR", "password", "Contraseña", true)}
                                        </div>

                                    </section>
                                </div>
                                <div className="flex justify-between mx-4 md:mx-10 lg:pb-5 lg:mx-[3rem]">
                                    <a href="#item1" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Atrás</a> 
                                    <a href="#item2" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Siguiente</a>
                                </div>
                            </div>

                            <div className="carousel-item w-full flex-col">
                                <div id="item2" className="relative w-full">
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información de la empresa</p>
                                    <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtNitR", "number", "Nit (opcional)", false)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtNombreEmpresaR", "text", "Nombre", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtTelefonoR", "number", "Teléfono", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%]">
                                            {txtInput("txtCorreoR", "email", "Correo", true)}
                                        </div>

                                    </section>
                                </div>
                                <div className="flex justify-between mx-4 md:mx-10 pb-5 lg:mx-[3rem]">
                                    <a href="#item1" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Atrás</a> 
                                    <a href="#item3" className="text-[#7BA8FF] btn btn-neutral bg-transparent shadow-none border-0 font-[nunito-sans-light] normal-case text-[11px] hover:bg-transparent hover:text-slate-400">Siguiente</a>
                                </div>
                            </div>

                            <div className="carousel-item w-full flex-col">
                                <div id="item3" className="relative w-full">
                                    <p className="flex text-[15px] xl:text-[1.2rem] px-[2rem] md:px-14 text-center font-[nunito-sans]">Información de la empresa</p>
                                    <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtPaisR", "text", "País", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtCiudadR", "text", "Ciudad", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%] mb-2">
                                            {txtInput("txtDireccionR", "text", "Dirección", true)}
                                        </div>

                                        <div className="relative flex flex-col items-center w-[90%] md:w-[80%]">
                                            {fileInput()}
                                        </div>

                                    </section>
                                    
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