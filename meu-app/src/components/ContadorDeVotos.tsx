import { useState } from 'react';

function ContadorVotos() {
  // O TypeScript infere automaticamente que 'votos' é um 'number'
  const [votos, setVotos] = useState(0);

  function adicionarVoto() {
    setVotos(votos + 1);
  }

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd' }}>
      <h3>Votação do Grêmio Estudantil</h3>
      <p>Total de votos da chapa: {votos}</p>
      {/* Evento de clique nativo do React */}
      <button onClick={adicionarVoto}>Votar</button>
    </div>
  );
}

export default ContadorVotos;