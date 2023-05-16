import React from 'react'
import background from '../img/wave-haikei.svg'



export default function Contact() {


  
  return (
    <div className='col-md-9 bg-dark text-white container-fluid d-flex flex-column' style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

      <h4 className='text-white mt-3'>Contact me</h4>

      <div className='row d-flex justify-content-center' >
        <div className='col-md-8 d-flex flex-column justify-content-center' style={{ height: '80vh' }}>
          <h4 className='text-white text-center'>Are you interested in my work? Put in contact with me! </h4>
          
          <form   >
            <div className='border rounded-2 p-3'>
              <div class="row g-3">
                <div class="col">

                  <input type="text" id='name' class="form-control text-white bg-dark"  placeholder="name"  required />
                  <label className='text-white' for="name" >Name</label>

                </div>
                <div class="col">

                  <input type="email" id='email' class="form-control text-white bg-dark"  placeholder="name@example.com" required  />
                  <label className='text-white' for="email">Email</label>

                </div>
              </div>
              <div class="row g-3">
                <div class="col">

                  <input type="text" id='subject' class="form-control text-white bg-dark "  placeholder="Subject"  required />
                  <label className='text-white' for="subject">Subject</label>

                </div>
              </div>
              <div class="row g-3">
                <div class="col">

                  <textarea id='message' type='text' class="form-control text-white bg-dark" placeholder="Leave a comment here"  style={{ height: '100px' }}></textarea>
                  <label className='text-white' for="message">Comments</label>

                </div>
              </div>
              <div className='row g-3 mt-1'>
                <div className='col-md-2 '>
                  <button type="submit" class="btn btn-outline-light">Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
