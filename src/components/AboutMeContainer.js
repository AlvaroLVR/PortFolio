import React from 'react'
import logoOtto from '../img/otto-krause-logo.svg'
import logoUtn from '../img/logoutn.png'
import logoCoderhouse from '../img/coderhouse.svg'
import logoCodoACodo from '../img/codo-a-codo.webp'
import logoUser from '../img/user-solid.svg'
//import backgound from '../img/blurry-gradient-haikei.svg'
import css from '../scss/style.css'
import logoEmail from '../img/envelope-regular.svg'
import logoEarth from '../img/earth-americas-solid.svg'

export default function AboutMeContainer() {
    return (
        <div className='col-md-9 bg-dark text-white container-fluid' style={{ overflowY: 'scroll' }}>
            <div className='rows'>
                <div className='row d-flex align-items-center pt-4 border-bottom border-1'>
                    <div className='col-md-10 my-3'>
                        <h2>Alvaro Leandro Valencia Rojas</h2>
                        <div className='fs-5 d-flex justify-content-start'>
                            <a href='#' className='nav-link text-muted'> <img className='pe-2' src={logoEmail} alt='' style={{ height: '20px' }} /> alvaroleandro74@gmail.com</a>
                            <p className='nav-link text-muted ms-4' ><img className='pe-2' src={logoEarth} alt='' style={{ height: '20px' }} />Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className='col-md-2 my-3 d-flex align-items-center justify-content-center' style={{ width: 'auto', borderRadius: '50%', backgroundColor: 'grey' }}>
                        <img src={logoUser} className='justify-content-end m-4' alt='' style={{ height: '80px' }} />
                    </div>
                </div>
                <div className='row mt-4' >
                    <h4 className='text-white'>Formation</h4>
                    <div className='d-flex flex-row justify-content-around my-4 align-items-top'>
                        <div className='d-flex flex-column p-3 border rounded-2 border-white item-hover' >
                            <a target={'_blank'} href='https://www.ottokrause.edu.ar/'><img src={logoOtto} alt='' style={{ height: '60px' }} /></a>
                            <p className='text-muted fw-semibold pt-4'>Tecnico Electronico</p>
                            <p className='text-muted fw-semibold'>Programacion de Microcontroladores</p>
                        </div>

                        <div className='d-flex flex-column p-3 border rounded-2 border-success  item-hover' >
                            <a target={'_blank'} href='https://utn.edu.ar/es/'><img src={logoUtn} alt='' style={{ height: '60px' }} /></a>
                            <p className='text-muted fw-semibold pt-4'>Estudiante Ing. en Sistemas</p>
                            <p className=' fw-semibold text-success'>Actualmente</p>
                        </div>
                        <div className='d-flex flex-column p-3 border rounded-2 border-white item-hover' >
                            <a target={'_blank'} href='https://www.coderhouse.com/'><img src={logoCoderhouse} alt='' style={{ height: '50px' }} /></a>
                            <p className='text-muted fw-semibold pt-4'>Desarrollo Web</p>
                            <p className='text-muted fw-semibold'>Javascript</p>
                            <p className='text-muted fw-semibold'>React Js</p>
                        </div>
                        <div className='d-flex flex-column p-3 border rounded-2 border-white item-hover' >
                            <a target={'_blank'} href='https://www.buenosaires.gob.ar/educacion/codocodo/el-programa'><img src={logoCodoACodo} alt='' style={{ height: '60px' }} /></a>
                            <p className='text-muted fw-semibold pt-4'>Desarrollo Web - Front-end</p>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <h4 className='text-white'>About Me</h4>
                    <div className='col-md-9 container'>
                        <p className='text-white fs-6 lh-lg'>
                            <p className='text-white fw-semibold'>First Step</p>
                            I completed my secondary studies at the otto krause technical school and graduated as an electronics technician. There I took my first steps with programming. I worked programming microcontrollers in C language, assembler and manufacturing, designing and creating electronic boards for the purposes of my projects. <br /> My life in high school forged me to be a decisive person, with critical thinking and always looking for the best solution to problems that arise. <br /> Some of the disciplines that I covered during secondary school were electricity, electronics of course, chemistry, mechanics, computing and construction. These broadened my vision and thinking about life, generating a great impact on my decision making.
                            <br /><br />
                            <p className='text-white fw-semibold'>Growing up.  Introduce to Real World</p>
                            At the last time in mi high school, I took a Front-End Web Development course, which went unnoticed by me, but would later become a hobby. Programming and law are two disciplines that captivate and seduce me, which is why at the age of 23 I decided to study Information Systems Engineering at the UTN.
                            <br /><br />
                            <p className='text-white fw-semibold'>Current Time</p>
                            Student of National technical university, fisrt year of career.
                        </p>
                    </div>
                </div>
                <div className='row mt-4' >
                    <h4 className='text-white'>Jobs</h4>
                    <ul className='list-group list-group-flush ps-3'>
                        <li className='list-group-item bg-dark fs-5 text-white'>Freelancer</li>
                        <li className='list-group-item bg-dark fs-5 text-white'>Law Firm employee </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
