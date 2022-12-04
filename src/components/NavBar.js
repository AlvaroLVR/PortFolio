import React from 'react'
import logoProyect from '../img/proyects.svg'
import logoContact from '../img/contact.svg'
import logoStudies from '../img/studies.svg'
import logoSkill from '../img/skill.svg'
import logoAbout from '../img/about.svg'

import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='col-md-3 bg-dark text-white d-flex flex-column justify-content-center ps-3' >
            <div className='ps-3'>
                <h5 className='fw-semibold'>Front-end Developer Jr</h5>   
                <p className='fs-6 '>
                {`<>`} Hi! my name is Alvaro Valencia Rojas. i'm 23 and front-end Developer from Argentina.{`</>`} 
                </p>
            </div>
            <ul className='navbar-nav  pb-2'>
                <li className='nav-item'><Link to={'/'} className='btn text-white '><img className='pe-1' src={logoStudies} alt=''/>About me</Link></li>
                <li className='nav-item'><Link to={'/Proyects'} className='btn text-white '><img className='pe-1' src={logoProyect} alt=''/> Proyects</Link></li>
                <li className='nav-item'><Link to={'/Skill'} className='btn text-white '><img className='pe-1' src={logoSkill} alt=''/>Skill</Link></li>
                <li className='nav-item'><Link to={'/Contact'} className='btn text-white '><img className='pe-1' src={logoContact} alt=''/>Contact me</Link></li>
            </ul>
            <ul className='navbar-nav ps-3' id='list-social-media'>
                <li className='nav-item'><a target={'_blank'} href='https://github.com/AlvaroLVR' className='nav-link text-muted'>GitHub</a></li>
                <li className='nav-item'><a target={'_blank'} href='https://www.linkedin.com/in/alvarolvr/' className='nav-link text-muted'>LinkedIn</a></li>

            </ul>
        </div>
    )
}