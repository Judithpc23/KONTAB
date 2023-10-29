import { CheckboxRippleEffect, ButtonMateDark } from "./components/buttons"

import Carousel from "./components/Carousel";

export const App = () => {
  const slides = [
    "https://www.tusoporteonline.es/blog/wp-content/uploads/2014/04/lunas.jpg", 
    "https://th.bing.com/th/id/R.72b94986ae64a4b638b704a7d2951c74?rik=rvFhsVPxX3aR0g&riu=http%3a%2f%2fk45.kn3.net%2ftaringa%2f1%2fD%2fF%2f6%2f4%2f6%2fagente867%2fBA9.jpg&ehk=72tJxCotbyUNq8w%2bt7Ua6YI9%2f2BBMUnrvpEC4%2bWMQtQ%3d&risl=&pid=ImgRaw&r=0", 
    "https://th.bing.com/th/id/R.43cfdf04e7004f46e19543578fcc25ba?rik=yO7Du99JkyIMbw&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2010%2f11%2f22%2f213771%2fiStockartisticmedium.jpg&ehk=sO3DW79wene03jBhkVEK2USZZdm%2bqbV5YqvQFQh8tkw%3d&risl=&pid=ImgRaw&r=0"];
  return (
    <div className='  flex flex-col bg-[url(".\assets\img\fondos\HD-Minimalist-Photo.png")] bg-cover items-center justify-center min-w-[280px] min-h-screen py-5 lg:p-10'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] rounded-[3px] shadow-[0px_0px_70px_10px_rgba(0,0,0,0.1)] bg-cover bg-center w-[75%] min-w-[260px] flex sm:w-[70%] md:w-[60%] lg:w-9/12 h-[450px] md:h-[700px] lg:h-[580px] xl:h-[80vh] min-h-[450px] max-h-[1080px] max-w-[1700px]'>   
          <div className='flex flex-col w-full h-full p-5 lg:p-7 lg:w-[40%] items-center'>      
            <section className="w-full flex justify-between m-[0.5vh]">
              <div title="Atrás">
                 <button type="button" className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] lg:w-[1.5rem] lg:h-[1.5rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover bg-bottom"></button>
                 <a href="#" className=""></a>
              </div>

              <div>
                <p className="text-[12px] md:text-[15px] xl:text-[1.2rem] font-[nunito-sans-light] hover:text-[#0094FF]"><a href="#">Registrarse</a></p>
              </div>
            </section>

            <section className="relative h-full w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full mb-10">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-[#0cffca] w-[15px] h-[15px] md:w-[30px] md:h-[30px] xl:w-[3rem] xl:h-[3rem] rounded"></div>
                  <h2 className="text-[30px] md:text-[4rem] lg:text-[2.5rem] xl:text-[2.5rem] font-[nunito-semibold] text-[#7BA8FF]">Köntab</h2>
                </div>
                
                <p className="flex text-[13px] md:text-[2rem] xl:text-[1.3rem] text-center">Inicia sesión</p>
              </div>                            

              <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">

                <div className="relative flex flex-col items-center w-[90%] md:w-[70%] mt-[3rem] mb-[3rem] lg:mt-[2rem] lg:mb-[3rem]">
                  <div className="relative h-11 md:h-[4rem] w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 font-[nunito-sans] text-[13px] md:text-[20px] lg:text-[1.2rem] font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#5e6a80] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      type="text"
                      id = 'txtUsuario'
                    />
                    <label htmlFor='txtUsuario' className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] md:text-[1.2rem] lg:text-[1.3rem] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-[#7BA8FF] after:transition-transform after:duration-700 peer-placeholder-shown:text-[15px] md:peer-placeholder-shown:text-[1.5rem] peer-placeholder-shown:leading-[4] peer-placeholder-shown:text-gray-300 peer-focus:text-[1.2rem] peer-focus:leading-tight peer-focus:text-[#7BA8FF] peer-focus:after:scale-x-100 peer-focus:after:border-[#7BA8FF] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Usuario
                    </label>
                  </div>

                </div>

                <div className="relative flex flex-col items-center w-[90%] md:w-[70%] mb-3">
                  <div className="relative h-11 md:h-[4rem] w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 font-[nunito-sans] text-[13px] md:text-[20px] lg:text-[1.2rem] font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#5e6a80] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      type="password"
                      id="txtContraseña"
                    />
                    <label htmlFor='txtContraseña' className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] md:text-[1.2rem] lg:text-[1.3rem] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-[#7BA8FF] after:transition-transform after:duration-700 peer-placeholder-shown:text-[15px] md:peer-placeholder-shown:text-[1.5rem] peer-placeholder-shown:leading-[4] peer-placeholder-shown:text-gray-300 peer-focus:text-[1.2rem] peer-focus:leading-tight peer-focus:text-[#7BA8FF] peer-focus:after:scale-x-100 peer-focus:after:border-[#7BA8FF] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Contraseña
                    </label>
                  </div>
                </div>

              </section>

              <section className="w-[90%] md:w-[70%] min-w-[200px] flex items-center justify-between">
                  
                  {CheckboxRippleEffect()}
                <div className="items-end text-right pr-3">
                  <p className="flex flex-col font-[nunito-sans-light] text-[11px] md:text-[12px] xl:text-[1.1rem] text-[#5F6A85] hover:text-[#0094FF] text-right"><a href="#">¿Olvidaste contraseña?</a></p>
                </div>
                
              </section>

              <section className="w-[95%] md:w-[75%] flex items-center justify-center mt-12">
                {ButtonMateDark ('Iniciar sesión', 'crearcuenta')}
              </section>


            </section>
            
            
            
          </div> {/*Inicio de sesión*/}
          
          <div className='hidden lg:flex flex-col lg:w-[60%] rounded-r-[3px] text-white items-center justify-start'>
            
              
                <Carousel slides={slides} />
              
         
            

          </div> {/*Presentación BOOK*/}
          
        </div>
      </main>
      
  </div>
  
  
  )
}

