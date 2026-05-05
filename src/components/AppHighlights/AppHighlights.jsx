import React, { useState, useEffect } from 'react';

const AppHighlights = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Erro ao buscar destaque:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-zinc-400">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="bg-zinc-50 py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Destaque do <span className="text-orange-600">Dia</span>
          </h2>
          <p className="mt-4 text-zinc-600">Descubra sabores selecionados pelos nossos especialistas.</p>
        </div>

        {meal && (
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl lg:flex lg:items-stretch">
            <div className="lg:w-1/2">
              <img 
                src={meal.strMealThumb} 
                alt={meal.strMeal} 
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <div className="mb-4 flex items-center space-x-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
                  {meal.strCategory}
                </span>
                <span className="text-sm text-zinc-400">•</span>
                <span className="text-sm font-medium text-zinc-500">{meal.strArea}</span>
              </div>

              <h3 className="mb-4 text-3xl font-bold text-zinc-900">{meal.strMeal}</h3>
              
              <p className="mb-8 line-clamp-4 text-zinc-600 leading-relaxed">
                {meal.strInstructions}
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={fetchRandomMeal}
                  className="flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  Sortear Outro
                </button>
                
                <a 
                  href={meal.strYoutube} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
                >
                  Ver Receita em Vídeo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppHighlights;