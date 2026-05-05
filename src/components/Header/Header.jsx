import React from 'react'
import logo from "../../assets/logo.png"
import logo2 from "../../assets/Gemini_Generated_Image_w7l3w0w7l3w0w7l3.png"
import logo3 from "../../assets/Design sem nome.png"

const Header = () => {
    return (
        <header className='w-full bg-white border-b border-gray-200 sticky top-0 z-50'>
            <div className="container mx-auto px-4 h-17 flex items-center justify-between">
                <div className="text-xl font-bold text-blue-600">
                    <img src={logo3} alt="Logo" className="h-17 " />
                </div>
                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <a href="#inicio" className="hover:text-blue-600 transition">Início</a>
                    <a href="#sobre" className="hover:text-blue-600 transition">Sobre</a>
                    <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
                </nav>
            <div>
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                    Começar
                </button>
            </div>
            </div>
        </header>
    )
}

export default Header