import React from 'react'
import logoReact from '../img/react.svg'
import logoJs from '../img/square-js.svg'
import logoBs from '../img/bootstrap.svg' 
import logoSass from '../img/sass.svg' 
import logoHtml from '../img/html5.svg' 
import logoCss from '../img/css3-alt.svg' 
import logoFirebase from '../img/firebase.svg'
import logoC from '../img/lenguajeC.svg'
import logoAssem from '../img/assembler.svg'
//import backgound from '../img/circle-scatter-haikei.svg'
//import backgound from '../img/blurry-gradient-haikei.svg'
import backgound from '../img/circle-scatter-haikei-2.svg'

export default function Skill() {
    //escribir sobre los proyectos que hice, las tecnologias que manejo, mis intereses y mis aspiraciones. 

    return (
        <div className='col-md-9 bg-dark container-fluid ' style={{ backgroundImage: `url(${backgound})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center'}} >
            <div className='rows'>
                <div className='row mt-4'>
                        <h4 className='text-white'>Frameworks and Technologies</h4>
                        <div className='d-flex flex-row justify-content-around my-4 align-middle'>
                            <img className='' src={logoReact} style={{ height: '50px' }} alt=''/>
                            <img className='' src={logoFirebase} style={{ height: '60px' }}  alt=''/>
                            <img className='' src={logoBs} style={{ height: '50px' }} alt=''/>
                            <img className='' src={logoSass} style={{ height: '50px' }} alt=''/>
                            <img className='' src={logoHtml} style={{ height: '50px' }} alt=''/>
                            <img className='' src={logoCss} style={{ height: '50px' }} alt=''/>
                            
                        </div>
                        <h4 className='text-white'>Lenguages</h4>
                        <div className='d-flex flex-row justify-content-around my-4 align-middle'>
                            <img className='' src={logoC} style={{ height: '70px' }} alt=''/>
                            <img className='' src={logoAssem} style={{ height: '67px' }} alt=''/>
                            <img className='' src={logoJs} style={{ height: '70px' }} alt=''/>
                        </div>
                </div>
                <div className='row mt-4'>
                    <h4 className='text-white'>Proyects</h4>
                    <div className='col-md-9 container'>
                        <p className='text-white fs-6 lh-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam itaque aspernatur maiores? Quam nam dolore minima tempora nisi quaerat atque corrupti doloremque sequi enim quod qui praesentium adipisci odit inventore consequatur, aperiam assumenda. Ducimus veniam hic impedit vel dolorem nobis. Sed dignissimos quod tempore rem consectetur fugiat rerum aut earum officia hic facere qui, dolorem placeat! Vitae omnis hic labore minima possimus reprehenderit nesciunt assumenda qui, dignissimos repudiandae, voluptates, velit molestias. </p>
                    </div>
                    <h4 className='text-white'>Knowledge</h4>
                    <div className='col-md-9 container'>
                        <p className='text-white fs-6 lh-lg'>
                        Eligendi ratione accusamus consequatur beatae iusto blanditiis facere eos suscipit dicta in dolorem fugit, nesciunt libero! Provident, repudiandae! Cupiditate laborum aliquam suscipit ex hic quos quia maxime corporis error.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}