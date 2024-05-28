import { FormRegister} from "./FormRegister";

export const MiniFormRegister = () => {
  return (  
    <div className='  flex flex-col bg-[url(".\assets\img\fondos\HD-Minimalist-Photo.png")] bg-cover items-center justify-center min-w-[280px] min-h-screen py-10 lg:p-5'>
      <main className="flex flex-col items-center justify-center w-full text-center">
        <div className='bg-[#FAFAFF] rounded-[3px] shadow-[0px_0px_70px_10px_rgba(0,0,0,0.1)] bg-cover bg-center w-[300px] min-w-[260px] flex p-5 md:w-[400px] h-[450px] md:h-[550px] lg:h-[600px] lg:w-[450px] min-h-[450px] max-h-[1080px] max-w-[1700px]'>
          {FormRegister()}
        </div>

        
      </main>
    </div>
  )
}

