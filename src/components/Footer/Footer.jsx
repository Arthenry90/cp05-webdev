import React from 'react';

const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8 px-4 text-gray-400">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          
          {/* Coluna da marca */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Gourmet<span className="text-orange-500">On</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Elevando a experiência gastronômica delivery ao nível da alta culinária. 
              Os melhores chefs, onde você estiver.
            </p>
            <div className="flex space-x-4">

            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">Navegação</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="transition-colors hover:text-white">Ver Restaurantes</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Destaques do Dia</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Seja um Parceiro</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">Jurídico</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="transition-colors hover:text-white">Termos de Uso</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>contato@gourmeton.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>0800 700 4000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center md:text-left">
          <p className="text-xs">
            © {anoAtual} GourmetOn Intermediação de Negócios LTDA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;