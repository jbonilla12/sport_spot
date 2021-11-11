import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './style/App_style.css'
import { auth } from './firebase';
//import Liga from './components/Liga';
import Inicio from './components/Inicio';
/*import Equipo from './components/Equipo';
import Parche from './components/Parche';
import Talla from './components/Talla';
import Manga from './components/Manga';
import Version from './components/Version';
import Estado_Venta from './components/Estado_Venta';
import Genero_Deportivo from './components/Genero_Deportivo';
import Temporada from './components/Temporada';
import Genero from './components/Genero';
import Producto from './components/Producto';*/
import NavbarComp from './components/NavbarComp';
import Login from './components/Login';


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  },[])

 return firebaseUser !== false ?(
  <Router>
    <NavbarComp firebaseUser ={ firebaseUser }/>
      <div className="container mt-5">
        <div className="tab-content" id="nav-tabContent">
        <Switch>  
          <Route path="/" exact>
            <Login/>
          </Route>
          <Route path="/admin/inicio">
            <Inicio/>
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
 ):(
   <p>Cargando.....</p>
 )
}

export default App;
