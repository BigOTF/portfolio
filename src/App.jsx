import React from 'react'
import 'aos/dist/aos.css';

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience';
import About from './components/About';

function App() {

  return (
   <div className='pb-[600px]'>
    <Header />
    <Hero />
    <Skills />
    <Experience />
    <About />
   </div>
  )
}

export default App
