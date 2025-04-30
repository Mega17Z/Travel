import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MonAccueil from './FirstPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LesVols from './ListesVol'
import Reservation from './Reservation'
// import InputSearch from './components/InputSearch'
// import MainTravel from './components/MainTravel'

// import MainTravel from './components/MainTravel'


import Details from './AfficheDetaiils'
// import Vols from "./Components/travelCard/vols";

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<MonAccueil />} />
      <Route path='/ListesVol' element={<LesVols />} />
      <Route path='/Reservation' element={<Reservation />} />
      <Route path='/AfficheDetaiils/id:' element={<Details />} />
     {/* <InputSearch/> */}
     {/* <MainTravel/> */}
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;
