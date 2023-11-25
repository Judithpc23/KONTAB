import React from "react";
import {Link} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth"
import { appFirebase } from "../firebase/credenciales"

const auth = getAuth(appFirebase);

export function SideBarDefault({correoUsuario}) {
    
    return (
        <div>
            <Link to="/Inicio">
            <div className=" text-[250%] p-2 flex justify-center">
                <h1>Köntab</h1>
            </div>
            </Link>

            <div className="p-5 flex justify-start items-center align-center border-b-[1px] border-t-[1px] border-[#A5C4FF] w-full">

                <img className="2xl:h-14 2xl:w-14 xl:h-14 xl:w-14 md:h-8 md:w-8 m-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADD0lEQVR4nO2Zy29NURTGj8YzJop6VNtIJIiRSnRQMTDRaBk1JSIxqYmBaASXhARpa6IG0gH+AAPvxGOkHjMiDBCpkQSRUgktqbefLP1OstO0p/v0uvfswf2SO1u/vfd3z36svXYUlVRSSRMSsBHoAb6QvT5rLE1pTbQTro6l+RKm78B+oDLKWEAlkNOYTI0+0G0F56LAxLAZ0y2fYJuPpoVRYAIWaGyDPsH/FAUqfMeXrxGgAmgDbgJvgG/a+XqBbqBmom0XxQgwCdjnsV33Aw3AlFCNnBX6C7gCNAMrgJn6rQIuOoZeAy1BGQG2C/tk/3ZCnBnqAB4p/g+wOSQjvcJ2pGAOiukDpmVuBFgu5B1QlnJNPRM75lcsppF4Wp3zZRy2S+yBEIzsEdLlyzjsLrGnQjCSE9Luyzjs7pCMtAo57cs47HGxh0Iw0iDkui/jsFfFbgnByNx41/JlxJUBH8RWhWBksmWjwhan4GrFvPVlCm1kq5CnwKKURt6LXRmCkba0O4/DXhDbEoKRdUKepEnRgXnAK7G1IRgpAx4IG7DUw4OZoYTRdM+3r4IaETMLeCl0qUd8nWIt2ZwdjBETcEbokci/3HRyvNgsjKwR+tGKBAlx853zoz44IybgmvDn0Rhy1lNPNAFRJCPVwocSYmxDMC0J2UiF8K8JMfEhWBGykSrh/QkxViIiTRaQhZFWjzXyQjHbgjMCTAcOO0XmnQmx++J1pEvZ1MyNADW6HFnRLdYJj0yg2znZ+3SuVBfdCLAauKRiXKyHwHqfwTg52mOH/6k26wpuxNIP4IbT+Q/gPLDW18AobdZbBcaZlqiPZQUxYqm25jW6SHUmneBppRO/w7mkDY2W3udlBNjkTKPLdr39XwZG6X+OUyP+bX2PN76xGhp0Dyyg3DnEOn3S9HzFcBUyTiyt73LnDmMa8GnEXk9Ne0dsl3fTlETzFcO7250RY7E3Te+ntyZnF8k5SV5zMQy40tOE6b6K3jYm04bIR/YETLg66mXCMdNon9BZM1lqUGPx+xIllVRSNFJ/AUbQBzgKJtAcAAAAAElFTkSuQmCC" />

                <Link to="/Usuario">
                    <div>
                        <p className="lg:text-[150%] md:text-[100%]">USUARIO</p>
                        <p className="lg:text-[100%] md:text-[60%]">{correoUsuario}</p>
                    </div>
                </Link>

            </div>

            <div className="flex items-start -top- marginRight-[10%] marginLeft-[10%] justify-center">
                <ul className="menu w-[95%] flex justify-center align-center lg:text-[130%] md:text-[120%] flex space-y-5">
                    <Link to="/Inicio"> 
                        <li>
                            <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 2xl:mr-4 xl:mr-4 md:mr-2" fill="white" viewBox="0 0 45 45"><path d="M39.5,43h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-9c0,-1.105 -0.895,-2 -2,-2h-4c-1.105,0 -2,0.895 -2,2v9c0,1.381 -1.119,2.5 -2.5,2.5h-9c-1.381,0 -2.5,-1.119 -2.5,-2.5v-19.087c0,-2.299 1.054,-4.471 2.859,-5.893l14.212,-11.199c0.545,-0.428 1.313,-0.428 1.857,0l14.214,11.199c1.805,1.422 2.858,3.593 2.858,5.891v19.089c0,1.381 -1.119,2.5 -2.5,2.5z"/></svg>
                                Inicio
                            </a>
                        </li>
                    </Link>

                    <Link to="/Ingresos">
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,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" />
                            Ingresos
                        </a>
                    </li>
                    </Link>

                    <Link to="/Gastos">
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4nO2YS09TQRTHGw26ZQ34IrgAoh+kahQDH4GELYq4IS6t4GPJWuUDsAIMbLQNYetWlrbgRkOARLA+fuYk06QZztx25t6blmZ+y9PpOfO/58zrFAqRSCQSiUR6CGCb7PkEXLDilMmPigTIi3uWkC85xiJJyKlMBujzzPAj8/9Nyz5r7FsBVdMHPAB+hQh54RvQBO0HjoF/wKjDPhbo+5WvEMnGQEgwE3DV+Fm27Mua3cPvkCsrmhAZOB0Y6Baw0+RLMtDf9PuYyYjYbwfGmAHqSUIOgZfAtcAAk8BP5cPMWuO2jP0EmAqMNQy8AY40IddDnBrHd4HfjjLdtcbKBtLgD3AnRdyRM0JSOJO6/eEQ0UqIcJByPWYm5B3JuEqrmZWOCgGuAH8TRLgWu42U5dVOCnnaIhuu7VfjSeZCgMvm8PkGVIFnwEXFyXrCxFwHoosPiv9LwCKwD+zJIS02HyFLSqA5JZCIdOG6orioKv5l4jYlHyHyBWw+K4G0c8N1adxtIeRE8S9ZsNnrFSE1HyFSlzaPO1BaJWXcc9/FvmQW+1dgwbHY1zJc7BuOxV4ymamJCK/F3i7AfIbb75nNpM05ZHYgyn3pfB+IAvA2gyvK+0IgZChkEPjeNZdG4EYKZ0XtsdOGECmpYoq4NzUh8kh5HSoIeOj5sJKxkykfVseakAb1FE/dcatP1pGnbs81Hxos9kI7qJGV+13UoJsIbdCdu5ZpJQe/H5UmtjS286Lsm+VIJBKJRCKFLuY/JJMjSyy9EdEAAAAASUVORK5CYII=" />
                            Gastos
                        </a>
                    </li>
                    </Link>

                    <Link to="/Inventario">
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,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" />
                            Inventario
                        </a>
                    </li>
                    </Link>

                    <Link to="/Contactos">
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEs0lEQVR4nO3dbcheYxwA8Mu7YfNu5TWv7RORwmxe4oPNy7KQD2IWPoi8h6I0xJRlLMoXClP7xNpCLNKiMPsklDGjjOxFTJjtpytnLWPZ89z3ua+Xc//q+bBn93Of6zr/+5xzn3P+//8JoRDYHZNxO17AUnyLtdjU/Kxtfre0ec1tmITdUo+/CtgZU/Ay1hu9dZiPC+J7pp5XcbArbsAK/fcFrovLSD3PIuBcfK59n+Ls1PPNVtzP4wlsNjjxuDNnuLX8Oxj7Y4l03opjSPNRzAz2xYfSW975oGBPvC8fS7FH6Co8Kz9Phy7CdPmaFroEe2GlfK3CPqErcL/83Rs6tHX8IH/fY0yoHWYqx4xQu8QngCP1RqgZDsSfyrGx6pPF+HVSeS4MtcJjyvNoqBUWK8/CUCt8pjyfhFphg/L8HGqEXZRpc5X34TFOucaG2hQekHGh0pSeeA+7NJuwU6gRflKedaFWzX2G0qwMtcK7yvN2qBWeUZ55oVa4WXluDLXCOcpzVqg8D6ukyycbqs/TwuvKsTjUDncox62hdjh+wBnuoxXHeGzogkLOR94JXYFr5e/q0BXYO/PrWuvjGEOX4GH5mhW6Bvs11bE5bh0HhC7Cg/LzQOiq5i5iLPTPxaoqb9eORMwMlI9pqddHFrAgdSQwP/V6yAYOTlxR9RUOSr0esoKT8EuCYPyKU1LPP0u4YsDXueKyLks976z5uzHMINKF4jJmpp5vEXBlUyzTllg0dE3qeRYF81oMSL2JC23B7BYDMjv1/IpjGJC8GAYkL4YByQseb/EYMif1/IqDhS0GpP70nn7CWPzYYkDiJZrxqedZDDyifc+lnmcpnYJmGZy5sWN26nlnB6fjKawxeKubZZ9RbenajsBRuHtATZNHcgs3bjUnhy5oatUvz6wT6fYsw1VVNvKPKf0xE7DQ1hrfxUyU2F84VJKheF8hLf3+z5rmC0d5Nevx4NjsmnLuPDpa8fzolrj7DQV9Y3pP/T7Outytaaj/ku55MabFhpzgfHyju1bF557kEIgxsQVeoT1M2shgmZusSBSHNfvRoX+K51iHDDoYJ+LrbQYytNWXmDCoYFySKMOwxPOWyW0H4zz8lnqmBYlpqme2FYxTY0PI1DMs9ESyv7svHF3J5Y+U2fXj+3mFNj6baag3i/oVkBk9DmRoq+n9CEiJl8xztbzXYExIPYMKHddLQKamHn2FpnTteR+5G32l7zAgrRgGJDPDgGRmGJDMDANSU0By6kNSi6m9BGR4Yth/J4w6IE1QPmhhUF21rOeEbkzCH6lnUoHfMbGnYGxzxbekR6bmZmPfu5zioqYf4dDIrOvpQL4DqT+LRjigLluIQ1sJxn9kKg4P9tsX183FrQdiOwf8BS137ilFzN58MwYieWkcjsBd8Y6Y7lmOO3F4yFF8okDzaKPXCnt4y47a0MztJhwTShJLjuN3b9yDV5sUyxIeVbHF5mbMrzQFqhOrqzlsujTEop7r8SSWNKXJqa1uxjK3GdtpnW6q3GxNRzafwkub3V5s2P98s4uIK+uj5vLDiuaTu7b52WLLv+P/xdfE18a/iX8b3yO+10PNe8dlxNr0ePzLpnnAXwh2Dx+erHiMAAAAAElFTkSuQmCC" />
                            Contactos
                        </a>
                    </li>
                    </Link>

                    <Link to="/Ayuda">
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center mb-[60px]">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,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" />
                            Ayuda
                        </a>
                    </li>
                    </Link>

                    <hr className=" m-[0px] p-[0px] marginRight-[10%] marginLeft-[10%]"></hr>

                    <li>
                        <button onClick={()=>signOut(auth)} className="hover:bg-white hover:bg-opacity-20 hover:text-white h-[50px] flex align-center mt-[0px] pt-[0px">
                            <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-4" src="data:image/png;base64,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"/>
                            Salir
                        </button>
                    </li>

                </ul>
            </div>

        </div>

    );
}