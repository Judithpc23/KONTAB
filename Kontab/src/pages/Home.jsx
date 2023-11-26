import { getAuth, signOut } from "firebase/auth"
import { ButtonMateDark } from "../components/buttons"
import { appFirebase } from "../firebase/credenciales"

import { usuario1 } from "../core/Persona/Usuario"


const auth = getAuth(appFirebase)

export const Home = ({correoUsuario,nombreUsuario}) => {
    usuario1.nombre=nombreUsuario
    console.log(usuario1.nombre)
    return(
        <div className="hidden lg:flex flex-col min-h-screen w-full bg-[#F4F8FF] justify-center items-center text-blue-700 text-[50px]">
            <h2>Bienvenido {nombreUsuario}</h2>
            <h2>{correoUsuario}</h2>
            <div className="">
                <button onClick={()=>signOut(auth)} className="h-[80px] w-[700px] bg-gray-50 text-black">Cerrar Sesión</button>
            </div>
        </div>
        
    )
}