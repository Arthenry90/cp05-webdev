import React, { useState } from 'react';

const Forms = () => {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Neste arquivo JSX, o JS salva o e-mail cadastrado pelo usuario no LocalStorage.
    const leadsExistentes = JSON.parse(localStorage.getItem('gourmeton_leads')) || [];
    const novosLeads = [...leadsExistentes, { email, data: new Date().toLocaleString() }];
    
    localStorage.setItem('gourmeton_leads', JSON.stringify(novosLeads));

    console.log("Lista de e-mails atualizada no LocalStorage:");
    console.table(JSON.parse(localStorage.getItem('gourmeton_leads')));

    setEnviado(true);
    setEmail('');


    setTimeout(() => setEnviado(false), 3000);};

  return (
    <section id="contato" className="py-20 px-6 bg-zinc-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Fique por dentro das <span className="text-orange-500">Novidades</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Cadastre seu e-mail para receber ofertas exclusivas e atualizações dos melhores chefs.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="px-6 py-3 rounded-full bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-orange-500 flex-grow max-w-md"
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all cursor-pointer"
          >
            Cadastrar
          </button>
        </form>

        {enviado && (
          <div className="mt-4 text-green-500 font-medium animate-bounce">
            E-mail cadastrado com sucesso!
          </div>
        )}
      </div>
    </section>
  );
};

export default Forms;