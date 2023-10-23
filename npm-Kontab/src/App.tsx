import { CheckboxRippleEffect, ButtonMateDark } from "./components/buttons"

export const App = () => {

  return (
    <div className='  flex flex-col bg-gradient-to-b from-[#F5F5F5] to-[#D0DDFF] items-center justify-center min-w-[280px] min-h-screen py-5 lg:p-10'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] rounded-[3px] shadow-[0px_0px_50px_70px_rgba(0,0,0,0.1)] w-[85%] min-w-[260px] flex sm:w-9/12 h-[450px] md:h-[720px] lg:h-[500px] xl:h-[80vh] min-h-[450px] max-h-[720px] max-w-[1080px]'>   
          <div className='flex flex-col w-full h-full p-5 lg:p-7 lg:w-[45%] items-center'>      
            <section className="w-full flex justify-between m-[0.5vh]">
              <div title="Atrás">
                 <button type="button" className="w-[15px] h-[15px] md:w-[30px] md:h-[30px] lg:w-[1.5rem] lg:h-[1.5rem] bg-[url('./assets/img/icons/Back_2.png')] bg-cover bg-bottom"></button>
                 <a href="#" className=""></a>
              </div>

              <div>
                <p className="text-[12px] md:text-[15px] xl:text-[1rem] font-[nunito-sans-light] hover:text-[#0094FF]"><a href="#">Registrarse</a></p>
              </div>
            </section>

            <section className="relative h-full w-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center justify-center space-x-4">
                  <div className="bg-[#0cffca] w-[15px] h-[15px] md:w-[30px] md:h-[30px] xl:w-[3rem] xl:h-[3rem] rounded"></div>
                  <h2 className="text-[30px] md:text-[4rem] lg:text-[2.5rem] xl:text-[2.5rem] font-[nunito-semibold] text-[#7BA8FF]">Köntab</h2>
                </div>
                
                <p className="flex text-[13px] md:text-[20px] xl:text-[1.3rem] text-center">Inicia sesión</p>
              </div>                            

              <section className="flex flex-col items-center justify-center w-full px-[1.5vh]">
                <div className="relative flex flex-col items-center w-[90%] md:w-[70%] mt-[30px] mb-[20px] lg:mt-[2rem] lg:mb-[3rem]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 font-[nunito-sans] text-[13px] md:text-[20px] lg:text-[1.2rem] font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#5e6a80] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] md:text-[15px] lg:text-[1rem] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-[#7BA8FF] after:transition-transform after:duration-700 peer-placeholder-shown:text-[15px] md:peer-placeholder-shown:text-[1.2rem] peer-placeholder-shown:leading-[2.8] peer-placeholder-shown:text-gray-300 peer-focus:text-[1.2rem] peer-focus:leading-tight peer-focus:text-[#7BA8FF] peer-focus:after:scale-x-100 peer-focus:after:border-[#7BA8FF] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Usuario
                    </label>
                  </div>

                </div>

                <div className="relative flex flex-col items-center w-[90%] md:w-[70%]">
                  <div className="relative h-11 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-5 font-[nunito-sans] text-[13px] md:text-[20px] lg:text-[1.2rem] font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#5e6a80] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                    />
                    <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] md:text-[15px] lg:text-[1rem] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-[1px] after:border-[#7BA8FF] after:transition-transform after:duration-700 peer-placeholder-shown:text-[15px] md:peer-placeholder-shown:text-[1.2rem] peer-placeholder-shown:leading-[2.8] peer-placeholder-shown:text-gray-300 peer-focus:text-[1.2rem] peer-focus:leading-tight peer-focus:text-[#7BA8FF] peer-focus:after:scale-x-100 peer-focus:after:border-[#7BA8FF] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Contraseña
                    </label>
                  </div>
                </div>
              </section>

              <section className="w-[90%] md:w-[70%] min-w-[200px] flex items-center justify-between">
                  {CheckboxRippleEffect()}
                <div className="items-end text-right pr-3">
                  <p className="flex flex-col font-[nunito-sans-light] text-[11px] md:text-[12px] xl:text-[0.9rem] text-[#5F6A85] hover:text-[#0094FF] text-right"><a href="#">¿Olvidaste contraseña?</a></p>
                </div>

                
                
              </section>

              <section className="w-[90%] md:w-[70%] flex items-center justify-center mt-12">
                {ButtonMateDark ('Iniciar sesión', 'crearcuenta')}
              </section>


            </section>
            
            
            
          </div> {/*Inicio de sesión*/}
          
          <div className='hidden lg:flex flex-col lg:w-[55%] bg-blue-700 bg-cover bg-center rounded-r-[3px] text-white items-center justify-center'>
            
            <div className="w-full h-full flex flex-col items-center justify-end space-y-3 p-10 my-[5rem] xl:my-[10vh]">
              
              <p className="text-[1.5rem] font-[nunito-sans]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
             
            </div>
            

          </div> {/*Presentación BOOK*/}
          
        </div>
      </main>
      
  </div>
  
  
  )
}

