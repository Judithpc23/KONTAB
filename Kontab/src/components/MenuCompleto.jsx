import React from "react";
import { SideBarDefault } from "./sideBar";
import { NavbarDefault } from "./navBar";
import { Route,Routes } from "react-router-dom";

import {Inicio} from '../pages/PrincipalPages/Inicio';
import {Ayuda} from '../pages/PrincipalPages/Ayuda';
import {Contactos} from '../pages/PrincipalPages/Contactos';
import {Gastos} from '../pages/PrincipalPages/Gastos';
import {Ingresos} from '../pages/PrincipalPages/Ingresos';
import {Inventario} from '../pages/PrincipalPages/Inventario';
import {Usuario} from '../pages/PrincipalPages/Usuario';


export const MenuCompleto = ({correoUsuario}) => {

    return(

        <div id="SideBar" className="flex flex-row justify-between h-screen w-full bg-[#F4F8FF]">

            <div className="hidden lg:flex flex-col lg:w-[20%] md:w-[15%] min-h-screen min-w-[200px] bg-[#7BA8FF] text-white">
                <SideBarDefault correoUsuario={correoUsuario} />
            </div>
        
            <div className="md:flex flex-col lg:items-end lg:w-full h-[58px] w-[100%] bg-[#ffff] border-b-[1px] border-[#A5C4FF]">
                <NavbarDefault correoUsuario={correoUsuario}/>
        
                <div className=" flex justify-center items-center w-[100%]  min-h-[92vh] ml-5  bg-blue-500">
                    
                    <Routes>
                    
                        <Route path="/inicio" element={<Inicio/>}/>
                        <Route path="/ayuda" element={<Ayuda/>}/>
                        <Route path="/contactos" element={<Contactos/>}/>
                        <Route path="/gastos" element={<Gastos/>}/>
                        <Route path="/ingresos" element={<Ingresos/>}/>
                        <Route path="/inventario" element={<Inventario/>}/>
                        <Route path="/usuario" element={<Usuario/>}/>

                    </Routes>
                    
                </div>

            </div>
    
        </div>
    )
}