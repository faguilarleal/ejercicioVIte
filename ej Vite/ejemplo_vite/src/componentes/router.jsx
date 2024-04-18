import Login from "../views/login.jsx";
import Home from "../views/home.jsx";


function Router({ruta, setRuta}) {
  
  switch (ruta) {
    case "home":
      return <Home></Home>
    
    default:
      return <Login ruta={ruta} setRuta={setRuta}></Login>
  }
  
}

export default Router