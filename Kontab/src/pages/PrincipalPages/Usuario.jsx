
import { Link } from "react-router-dom";

export const Usuario = ({ nombreUsuario }) => {
    
    function basico(){
        let  ataque = document.getElementById("info")
        if (ataque !== null) {
            ataque.className = "block h-[400px] w-[90%] mt-7";
          } else {
            console.error('Object is null');
        }
    }

    return (
        
        <>
            
            <div className="flex flex-col justify-center items-center min-h-[100%] w-[100%] mx-3">

                <div className=" hero hero-content flex justify-center items-center lg:flex-row-reverse mt-[100px]">
                    <div>
                        <h2 className="text-6xl">Bienvenido,</h2>
                        <h2 className="text-8xl font-semibold">{nombreUsuario}</h2>
                        <p className="py-6 text-3xl font-medium mt-0">Kontab te ofrece una solución a las finanzas de tu pequeña empresa.</p>
                        <Link to="/inicio">
                        <button id="VerInfo" className="btn text-{#ffffff} bg-{#000}" onClick={basico()}> Empezar </button>
                        </Link>
                </div>
                <img className="h-1000 w-1020 lg:h-1000 lg:w-1000 mb-40 mx-3" src="data:image/png;base64,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"></img>
            
            </div>

            <div id="info" className="hidden h-[400px] w-[90%] mt-7">
                <div className="mockup-window h-[400px] border bg-base-300">
                    <p className="h-[400px] flex justify-center items-center bg-base-300 text-7xl"> User Info!</p>
                </div>
            </div>

        </div >
        </>
    );
}