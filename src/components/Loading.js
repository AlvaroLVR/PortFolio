import React from 'react'
import loading from '../img/loading-assets.svg'

export default function Loading() {
  return (
    <div className='container-fluid d-flex justify-content-center' >
        <img src={loading} style={{height: '60px',marginTop: '45vh'}}/>
    </div> 
  )
}
