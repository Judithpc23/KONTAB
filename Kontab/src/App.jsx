import { appFirebase } from './firebase/credenciales';

//import Form from './components/form';
import { Routes, Route } from "react-router-dom";
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { MiniFormRegister } from "./pages/MiniFormRegister";
import { useState } from 'react';
import { Home } from './pages/PrincipalPages/Home';
import {MenuCompleto } from './components/MenuCompleto';

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

        {usuario ? <Route element={<Home/>}/> : <Route path="/main" element={<LoginAndRegister/>}/>}
        <Route path="/" element={<LoginAndRegister/>}/>
        <Route path="/Home" element={<MenuCompleto/>}/>
        <Route path="/Register" element={<MiniFormRegister/>}/>
        <Route path="/Login" element={<LoginAndRegister/>}/>

      </Routes>

    </>
    
  )
}
