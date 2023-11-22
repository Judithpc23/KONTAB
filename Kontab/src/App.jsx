import { Routes, Route } from "react-router-dom";
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { MiniFormRegister } from "./pages/MiniFormRegister";
import { Home } from './pages/Home';

import { useState } from 'react';

//import Form from './components/form';
import { appFirebase } from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(appFirebase)
const firestore = getFirestore(appFirebase);

export const App = () => {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }else{
      setUsuario(null)
    }

  });


  return (
    <>  

      <Routes>
        {usuario ? <Route path="/"element={<Home correoUsuario = {usuario.email} informacion = {usuario.info}/>}/> : <Route path="/" element={<LoginAndRegister/>}/>}
        <Route path="/Register" element={<MiniFormRegister/>}/>
        <Route path="/Login" element={<LoginAndRegister/>}/>
      </Routes>

    </>
    
  )
}
