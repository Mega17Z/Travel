import React from 'react'
import InputSearch from './InputSearch'
const MainTravel = () => {
  return (
    <div className='container-fluid' style={{backgroundColor: '#f1f1f1', height: 580}}>
        <InputSearch/>
    <div className='image '>
       <div className='para mt-5'>
       <h1 className='text-center'>Explorez Le Monde Avec TravelCompagny</h1>
       <p className='text-center'>
        Partez à l'aventure, découvrez de nouveaux horizons et créez des souvenirs <br /> inoubliables. 
        Votre prochain voyage commence ici.
       </p>
       </div>
        </div>

    </div>
  )
}

export default MainTravel