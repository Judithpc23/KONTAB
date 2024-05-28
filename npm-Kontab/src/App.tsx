import { appFirebase } from './firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

//import Form from './components/form';
import { Routes, Route } from "react-router-dom";
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { MiniFormRegister } from "./pages/MiniFormRegister";
import { useState } from 'react';
import { Home } from 'react-feather';

const auth = getAuth(appFirebase)

export const App = () => {

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }
  })

  return (
    <>  

      <Routes>
        
        {usuario ? <Route element={<Home/>}/> : <Route path="/" element={<LoginAndRegister/>}/>}
        
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Register" element={<MiniFormRegister/>}/>
        <Route path="/Login" element={<LoginAndRegister/>}/>
      </Routes>

    </>
    
  )
}