import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import MonAccueil from './FirstPage'
import Navbar from './components/Navbar'
// import InputSearch from './components/InputSearch'
// import MainTravel from './components/MainTravel'



function App() {

  return (
    <>
     <Navbar/>
      <MonAccueil />
     {/* <InputSearch/> */}
     {/* <MainTravel/> */}
    </>
  )
}

export default App
