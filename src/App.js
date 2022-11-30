import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import AboutMeContainer from './components/AboutMeContainer';
import Contact from './components/Contact';
import Skill from './components/Skill';

function App() {
  return (
    <div className='container-fluid d-flex ' style={{height: '100vh', padding: '0'}}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AboutMeContainer/>} />
          <Route path='/Proyects' element={<Proyects/>}/>
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Skill' element={<Skill/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;