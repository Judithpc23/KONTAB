import React from "react";
import { SideBarDefault } from "./sideBar";
import { NavbarDefault } from "./navBar";
import { Route,Routes } from "react-router-dom";
import { motion } from "framer-motion";

import {Inicio} from '../pages/PrincipalPages/Inicio';
import {Ayuda} from '../pages/PrincipalPages/Ayuda';
import {Contactos} from '../pages/PrincipalPages/contactos/Contactos';
import {Gastos} from '../pages/PrincipalPages/Gastos';
import {Ingresos} from '../pages/PrincipalPages/Ingresos';
import {Inventario} from '../pages/PrincipalPages/inventario/Inventario';
import {Usuario} from '../pages/PrincipalPages/Usuario';
import {Analisis} from '../pages/PrincipalPages/Analisis';


export const MenuCompleto = ({correoUsuario,nombreUsuario, usuarioKontab}) => {

    return(
        <div className='  flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-[#D0DDFF] min-w-[280px] min-h-screen'>
        <motion.div className="w-full min-h-screen"
        initial={{ opacity: 0.1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>

        <div id="SideBar" className="flex flex-row justify-between h-screen w-full bg-[#F4F8FF]">
            <div className="hidden lg:flex flex-col lg:w-[20%] md:w-[15%] min-h-screen min-w-[200px] bg-[#7BA8FF] text-white">
                <SideBarDefault correoUsuario={correoUsuario} nombreUsuario={nombreUsuario}/>
            </div>
        
            <div className="md:flex flex-col lg:items-end lg:w-full h-[50px] w-[100%] bg-[#ffff] border-b-[1px] border-[#A5C4FF]">

                <NavbarDefault correoUsuario={correoUsuario} nombreUsuario={nombreUsuario}/>
        
                <div className=" flex w-[100%]  max-h-[92vh] ml-5">
                    
                    <Routes>
                    
                        <Route path="/inicio" element={<Inicio/>}/>
                        <Route path="/ayuda" element={<Ayuda/>}/>
                        <Route path="/contactos" element={<Contactos usuarioKontab={usuarioKontab}/>}/>
                        <Route path="/gastos" element={<Gastos/>}/>
                        <Route path="/ingresos" element={<Ingresos/>}/>
                        <Route path="/inventario" element={<Inventario usuarioKontab={usuarioKontab}/>}/>
                        <Route path="/usuario" element={<Usuario nombreUsuario={nombreUsuario}/>}/>
                        <Route path="/analisis" element={<Analisis/>}/>

                    </Routes>
                    
                </div>

            </div>
    
        </div>
        </motion.div>
        </div>
    )
}