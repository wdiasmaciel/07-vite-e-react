import { useState } from 'react';

export default function ContadorDeVotos() {
  /* O TypeScript infere automaticamente que 
     'votos' é do tipo 'number':
  */
  const [votos, setVotos] = useState(0);

  function adicionarVoto() {
    setVotos(votos + 1);
  }

  return (
    <div className="mx-auto my-5 max-w-sm rounded-lg border border-gray-300 bg-white p-4 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">Votação</h1>
      <p className="mt-2 text-gray-600">Total de votos da chapa: {votos}</p>

      {/* Evento de clique nativo do React: */}
      <button
        onClick={adicionarVoto}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Votar
      </button>
    </div>
  );
}
