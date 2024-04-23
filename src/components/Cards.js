import React from 'react'
import css from '../scss/style.css'
import { useState } from 'react'
import flecha from '../img/arrow-rigth.svg'

export default function Cards(props) {
  const [bandera,setBandera] = useState(false)

  const difuminacion = (e) =>{
    setBandera(true)  
  }

  const nodifuminacion = (e) =>{
    setBandera(false)
  }
  
  return (
    <div className='rounded-2 d-flex justify-content-center'>

      <div id='divCard' className='text-white'> 
        
        <div className='bg-white rounded-1 d-flex justify-content-center' style={{ width: '32vw', height: '42vh', backgroundImage: `url(${props.prop.img})`, /* backgroundRepeat: 'no-repeat' ,*/ backgroundPosition: 'center'}} 
        onMouseEnter={difuminacion} 
        onMouseLeave={nodifuminacion}> 
          {bandera? 
            <div className='text-justify align-items-end d-flex rounded-1' style={{ backdropFilter: 'blur(20px)', height: 'inherit',width: 'inherit'}}>     
              <p className=' ms-2 pb-2 fw-medium text-dark' style={{fontSize: 'large',width: 'inherit'}}> {props.prop.description}</p>
            </div>
          :
            <></>
          }
          
        </div>

        <div className='mt-1'>
          <a id='link_row' href={props.prop.url} target='_blank' rel="noopener noreferrer" className='fs-6 text-uppercase text-reset text-decoration-none ' style={{zIndex: '9999'}}>{props.prop.title}  <img src={flecha}/></a>
           
          <p  className='text-muted'>{props.prop.subtitle} </p>
        </div>
      </div>

    </div>
  )
}