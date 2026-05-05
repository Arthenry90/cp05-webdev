import { useState } from 'react'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AppHighlights from './components/AppHighlights/AppHighlights';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <AppHighlights />
    </div>
  )
}

export default App
