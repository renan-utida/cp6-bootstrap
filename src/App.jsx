import Navbars from "./components/Navbars"
import CarouselsImagens from "./components/CarouselsImagens"
import Destaques from "./components/Destaques"
import Buttons from "./components/Buttons"
import Cards from "./components/Cards"
import Tables from "./components/Tables"
import Modal from "./components/Modal"
import Footer from "./components/Footer"


function App() {

  return (
    
    <div className="container-fluid m-0 p-0">
        <Navbars/>
        <CarouselsImagens/>
        <Destaques/>
        <Cards/>
        <Tables/>
        <Buttons/>
        <Modal/>
        <Footer/>
    </div>
  )
}

export default App
