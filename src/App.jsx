import React from 'react'
import 'aos/dist/aos.css';

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  return (
   <div className=''>
    <Header />
    <Hero />
    <Skills />
    <Experience />
    <About />
    <Projects />
   </div>
  )
}

export default App
