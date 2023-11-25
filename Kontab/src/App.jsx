import { appFirebase } from './firebase/credenciales';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from 'firebase/firestore';

//import Form from './components/form';
import { Routes, Route } from "react-router-dom";
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { MiniFormRegister } from "./pages/MiniFormRegister";
import { useState } from 'react';
import { Home } from './pages/PrincipalPages/Home';
import {MenuCompleto } from './components/MenuCompleto';

const auth = getAuth(appFirebase)

export  function App () {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)

    }else{
      setUsuario(null)
    }
  })
  
  if(usuario){

  }
  
  if(usuario){
    return(
      <Home correoUsuario={usuario.email}/>
    )
  }else{
    return(
      <LoginAndRegister/>
    )
  }
}
