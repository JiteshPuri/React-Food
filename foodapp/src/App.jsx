import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Categories from './components/Categories'


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Categories/>
    </>
  )
}

export default App
