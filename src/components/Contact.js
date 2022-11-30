import React from 'react'
import background from '../img/wave-haikei.svg'

export default function Contact() {
  return (
    <div className='col-md-9 bg-dark text-white container-fluid d-flex flex-column'  style={{height: '100vh',backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
      
      <h4 className='text-white mt-3'>Contact me</h4>

      <div className='row d-flex justify-content-center' >
        <div className='col-md-8 d-flex flex-column justify-content-center' style={{height: '80vh'}}>
          <h4 className='text-white text-center'>Are you interested in my work? Put in contact with me! </h4>
          <div className='border rounded-2 p-3'>
            <div class="row g-3">
              <div class="col">
                <form class="form-floating mb-3">
                  <input type="name" class="form-control text-white bg-dark" id="floatingInputValue" placeholder="name@example.com" />
                  <label className='text-white' for="floatingInputValue">Name</label>
                </form>
              </div>
              <div class="col">
                <form class="form-floating mb-3">
                  <input type="email" class="form-control text-white bg-dark" id="floatingInputValue" placeholder="name@example.com" />
                  <label className='text-white' for="floatingInputValue">Email</label>
                </form>
              </div>
            </div>
            <div class="row g-3">
              <div class="col">
                <form class="form-floating mb-3 col-3">
                  <input type="email" class="form-control text-white bg-dark text-uppercase" id="floatingInputValue" placeholder="name@example.com" />
                  <label className='text-white' for="floatingInputValue">Subject</label>
                </form>
              </div>
            </div>
            <div class="row g-3">
              <div class="col">
                <form class="form-floating">
                  <textarea class="form-control text-white bg-dark" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px'}}></textarea>
                  <label className='text-white' for="floatingTextarea">Comments</label>
                </form>
              </div>
            </div>
            <div className='row g-3 mt-1'>
              <div className='col-md-2 '>
                <button type="button" class="btn btn-outline-light">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}
