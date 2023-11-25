import { appFirebase } from './firebase/credenciales';
import { getAuth, signOut } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"

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

  const getCurrentUser = () => {
    const usuarios = firebase.auth().currentUser;
  
    if (user) {
      // Obtener el documento del usuario desde Firestore
      return firebase.firestore().collection('usuarios').doc(usuarios.uid).get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data();
          } else {
            console.error('No se encontró el documento del usuario en Firestore');
            return null;
          }
        })
        .catch((error) => {
          console.error('Error al obtener el nombre de usuario:', error);
          return null;
        });
    } else {
      console.error('Usuario no autenticado');
      return null;
    }
  };

  console.log(getCurrentUser())

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
