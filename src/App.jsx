import { useState } from 'react'
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AppHighlights from './components/AppHighlights/AppHighlights';
import Criticas from './components/Criticas/Criticas';
import Footer from './components/Footer/Footer';
import Apresentacao from './components/Apresentacao/Apresentacao';
import Forms from './components/Forms/Forms'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <Apresentacao />
      <AppHighlights />
      <Criticas />
      <Forms />
      <Footer />
    </div>
  )
}

export default App
