import './App.css'
import MonAccueil from './FirstPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar'
import InputSearch from './components/InputSearch'
import MainTravel from './components/MainTravel'



function App() {

  return (
    <>
      <MonAccueil />
     <Navbar/>
     <InputSearch/>
     <MainTravel/>
    </>
  )
}

export default App
