import React from 'react';

const pessoas = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Crítico Gastronômico",
    content: "A experiência de receber um prato de estrela Michelin em casa com a temperatura perfeita é algo que só o GourmetOn consegue entregar.",
    avatar: "https://i.pravatar.cc/150?u=ricardo"
  },
  {
    id: 2,
    name: "Juan Mercedez",
    role: "Sommelier",
    content: "O cuidado com a embalagem e a curadoria dos restaurantes são impecáveis. Finalmente um serviço que entende o que é alta gastronomia.",
    avatar: "https://i.pravatar.cc/150?u=ana"
  },
  {
    id: 3,
    name: "Marcello Viana",
    role: "Empresário",
    content: "Rapidez e exclusividade. O app é intuitivo e os pratos chegam com uma apresentação que parece que o chef acabou de montar na sua mesa.",
    avatar: "https://i.pravatar.cc/150?u=marcello"
  }
];

const Criticas = () => {
  return (
    <section className="bg-zinc-950 py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experiências <span className="text-orange-500">Memoráveis</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-orange-600"></div>
          <p className="mt-6 text-gray-400">O que dizem os paladares mais exigentes da cidade.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pessoas.map((item) => (
            <div 
              key={item.id}
              className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:shadow-orange-900/20"
            >

              <p className="mb-8 text-lg font-light leading-relaxed text-gray-300 italic">
                "{item.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="h-12 w-12 rounded-full border-2 border-orange-600/50 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{item.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Criticas;