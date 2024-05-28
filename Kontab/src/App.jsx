import { appFirebase } from './firebase/credenciales';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore";

//import Form from './components/form';
import { LoginAndRegister } from "./pages/LoginAndRegister";
import { useEffect,useState } from 'react';
import { Home } from './pages/PrincipalPages/Home';
import { Usuario } from './core/Persona/Usuario';
import { Contacto } from './core/Persona/Contacto';
import { Cliente } from './core/Persona/Cliente';

const firestore = getFirestore(appFirebase);
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
  
  const [nombre, setNombre] = useState(null);
  useEffect(()=>{
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
      const usuarioKontab = new Usuario(
      '', 
      '', 
      [], 
      [], 
      [], 
      new Contacto(), 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '', 
      '')
      return(
        <Home correoUsuario={usuario.email} nombreUsuario={nombre} usuarioKontab={usuarioKontab}/>
      )
    }else{
      return <p>...</p>;
    }
  }else{
    return(
      <LoginAndRegister/>
    );
  }  

}
