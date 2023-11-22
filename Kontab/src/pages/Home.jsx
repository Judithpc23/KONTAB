import { Route } from "react-router-dom"
import { NavbarDefault } from "../components/navBar"
import { SideBarDefault } from "../components/sideBar"

export const Home = () => {
    return (

    /*
        <div id="SideBar" className="flex flex-row justify-between h-screen w-full bg-[#F4F8FF]">

            <div className="hidden lg:flex flex-col lg:w-[20%] md:w-[15%] min-h-screen min-w-[150px] bg-[#7BA8FF] flex-start items-left direction-column text-white">
            {SideBarDefault()}
            </div>

            <div className="md:flex lg:items-end lg:w-full h-[58px] w-[100%] bg-[#ffff] border-b-[1px] border-[#A5C4FF]">
            {NavbarDefault()}
            </div>

            <div className=" flex flex-end h-[90%] w-[100%] bg-[#000]">
                <h1>
                    HELLOOO, I HAVE BEEN HERE
                </h1>
            </div>

        </div>

    */

        <div id="SideBar" className="flex flex-row justify-between h-screen w-full bg-[#F4F8FF]">

            <div className="hidden lg:flex flex-col lg:w-[20%] md:w-[15%] min-h-screen min-w-[200px] bg-[#7BA8FF] text-white">
                {SideBarDefault()}
            </div>

            <div className="md:flex flex-col lg:items-end lg:w-full h-[58px] w-[100%] bg-[#ffff] border-b-[1px] border-[#A5C4FF]">
                {NavbarDefault()}

                <div className="bg-[#000] w-[100%]  min-h-[90%] mt-2">
                    <h1>HELLOOO, I HAVE BEEN HERE</h1>
                </div>

            </div>

        </div>

    )
}