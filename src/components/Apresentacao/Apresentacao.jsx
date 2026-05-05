function Apresentacao() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white border-l-4 border-pink-500 pl-4">
            Apresentação
          </h2>
        </div>

        {/* Texto */}
        <p className="text-gray-400 mb-12 text-lg">
          O GourmetOn é um aplicativo de delivery que facilita sua experiência na hora de pedir comida.
          Com ele, você encontra diversas opções de restaurantes, recebe seu pedido rapidamente
          e realiza pagamentos de forma simples e segura.
        </p>

        {/* Benefícios */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Entrega rápida
            </h3>
            <p className="text-gray-400">
              Receba seus pedidos em poucos minutos, com agilidade e eficiência.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Variedade de restaurantes
            </h3>
            <p className="text-gray-400">
              Explore diversas opções de restaurantes e escolha sua comida favorita.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition">
            <h3 className="text-xl font-semibold mb-2 text-white">
              Pagamento fácil
            </h3>
            <p className="text-gray-400">
              Pague de forma rápida e segura com diferentes métodos de pagamento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Apresentacao;