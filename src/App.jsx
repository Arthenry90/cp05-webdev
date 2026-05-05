import { useState } from 'react'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
