import Navbars from "./components/Navbars"
import CarouselsImagens from "./components/CarouselsImagens"
import Buttons from "./components/Buttons"
import Cards from "./components/Cards"
import Tables from "./components/Tables"
import Modal from "./components/Modal"
import Footer from "./components/Footer"


function App() {

  return (
    
    <div className="container-fluid">
        <Navbars/>
        <CarouselsImagens/>
        <Buttons/>
        <Cards/>
        <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-3 text-warning bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
            <div className="col-md-6 col-lg-4 col-xl-3 bg-primary border border-white border-2 p-2">Coluna 1</div>
        </div>
        <Buttons/>
        <Tables/>
        <Buttons/>
        <Modal/>
        <Footer/>
    </div>
  )
}

export default App
