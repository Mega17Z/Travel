import React from 'react'
import InputSearch from './InputSearch'
import './navbar.css'

const MainTravel = () => {
  return (
    <div style={{width: '100%', height: 580}}>
        <InputSearch/>
    <div className='image mt-4'>
       <div className='d-flex justify-content-center align-items-center flex-column text-travel text-center'>
        <h3 className='mb-3'>Explorez Le Monde Avec TravelCompagny</h3>
        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod praesentium molestias error? Consequuntur corrupti illo assumenda laboriosam? Rerum aliquam reiciendis atque aliquid voluptates architecto dolore quibusdam? Perferendis voluptatum neque necessitatibus.</p>
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