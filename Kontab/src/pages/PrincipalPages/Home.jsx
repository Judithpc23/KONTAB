import { useState, useEffect } from "react"
import { LoadingPage } from "../../components/Loading"
import { MenuCompleto } from "../../components/MenuCompleto"
import { Link } from "react-router-dom";

export function Home ({correoUsuario,nombreUsuario,usuarioKontab}) {

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
        setLoading(false);

    }, 2000)
  },[])

  if(loading){
    return(<LoadingPage />)
  }
  else{
    return(
            <MenuCompleto correoUsuario={correoUsuario} nombreUsuario={nombreUsuario} usuarioKontab={usuarioKontab}/>
        )
    }
}