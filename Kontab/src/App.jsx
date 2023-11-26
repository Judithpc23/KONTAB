import { Routes, Route } from "react-router-dom";
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { MiniFormRegister } from "./pages/MiniFormRegister";
import { Home } from './pages/Home';

import { useEffect, useState } from 'react';

//import Form from './components/form';
import { appFirebase } from './firebase/credenciales';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Persona from "./core/Persona/Persona";

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
    
  const [nombre, setNombre] = useState(null);
  const funcion = useEffect(()=>{
    const getInfo = async() => {
      try{
        const docRef = doc(firestore, "usuarios", usuario.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const nombreUsuario = docSnap.data().Nombre.toString();
          setNombre(nombreUsuario);
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
        }
      }catch (error) {
        console.log('Error')
      }
    };
    if (usuario) {
      getInfo();
    }
  }, [usuario]);

  if(usuario){
    if(nombre != null){
      return(
        <Home correoUsuario={usuario.email} nombreUsuario={nombre}/>
      )
    }else{
      return <p>...</p>;
    }
  }else{
    return(
      <LoginAndRegister/>
    );
  }
    
};
