import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Gourmet<span className="text-orange-500">On</span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg font-light text-gray-200 md:text-xl">
          A alta gastronomia na palma da sua mão. Peça os pratos mais exclusivos 
          dos melhores chefs da cidade com entrega rápida e impecável.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button className="rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold transition-all hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-900/40 cursor-pointer">
            Baixar o App
          </button>
          
          <button className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all hover:bg-white hover:text-black cursor-pointer">
            Ver Restaurantes
          </button>
        </div>

        <div className="mt-12 flex items-center space-x-6 opacity-80">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-gray-400">Disponível em</span>
            <div className="mt-2 flex space-x-4">
               <span className="text-sm font-medium italic">App Store</span>
               <span className="text-sm font-medium italic">Google Play</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-32 w-full bg-linear-to-t from-zinc-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;