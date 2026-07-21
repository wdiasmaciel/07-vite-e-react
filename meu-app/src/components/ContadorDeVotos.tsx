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
    <div className={styles.container}>
      <div className={styles.cartao}>
        <h1 className={styles.titulo}>
          Votação
        </h1>
        <p className={styles.mensagem}>
          Total de votos: {votos}
        </p>

        {/* Evento de clique nativo do React: */}
        <button
          onClick={adicionarVoto}
          className={styles.botao}
        >
          Votar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: `flex min-h-screen justify-center items-center 
              bg-gray-100`,
  cartao: `w-sm rounded-lg border border-gray-300 bg-white 
           p-4 shadow-md flex flex-col`,
  titulo: 'text-xl font-semibold text-gray-800',
  mensagem: 'mt-2 text-gray-600',
  botao: `mt-4 rounded-md bg-blue-600 px-4 py-2 text-white 
          transition hover:bg-blue-700 self-end`
};
