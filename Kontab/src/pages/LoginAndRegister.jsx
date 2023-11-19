import Carousel from "../components/Carousel";
import { FormRegister } from "./FormRegister";
import { FormLogin } from "./FormLogin";

import img1 from "../assets/img/fondos/fondoKontab.png";
import img2 from "../assets/img/fondos/artistic-mountain.jpg";
import img3 from "../assets/img/fondos/Rmoon.jfif";
import { useState } from "react";

import { appFirebase } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)

const slides = [img1, img2, img3];
export const LoginAndRegister = () => {
  
  return (
    <div className='  flex flex-col items-center justify-center bg-gradient-to-b from-[#F5F5F5] to-[#D0DDFF] bg-cover  min-w-[280px] min-h-screen p-5'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] relative rounded-[3px] shadow-[0px_0px_70px_10px_rgba(0,0,0,0.1)] bg-cover bg-center w-[60%] min-w-[300px] flex md:w-[400px] lg:w-[1000px] xl:w-[1024px] h-[450px] md:h-[550px] lg:h-[600px] min-h-[450px] max-h-[1080px] max-w-[1700px]'>
          
          <div className="w-[100%] h-[100%] flex justify-between">
            {FormLogin()}
            <div className="hidden lg:flex flex-col w-full h-full p-7 lg:w-[40%] rounded-md items-center z-10">
              {FormRegister()}
            </div>
          </div>

          <div className="carousel absolute flex w-full h-full">
            <div id="formLogin" className="carousel-item w-[50%] h-full bg-transparent"></div>

            <div className='hidden lg:flex flex-col z-20 absolute bottom-0 right-0 lg:w-[60%] h-[100%] rounded-r-[3px] text-white items-center justify-start'>
              <Carousel>
                {slides.map((s) => (
                  <img src={s} />
                  
                ))}
              </Carousel>
            </div> {/*Presentación BOOK*/}  
            
            <div id="formRegister" className="carousel-item w-[90%] h-full bg-transparent"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

