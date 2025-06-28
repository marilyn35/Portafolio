import NavBar from "./Componentes/NavBar"
import Banner from "./Componentes/Banner"
import Skills from  "./Componentes/Skills"
import Proyectos from "./Componentes/Proyectos"
import Contacto from "./Componentes/Contacto"
import Footer from "./Componentes/Footer"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Proyectos></Proyectos>
    <Contacto></Contacto>
    <Footer></Footer>
    </>
  )
}

export default App
