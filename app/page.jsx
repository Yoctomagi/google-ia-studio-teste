'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error(err);
        setMessage('Erro ao carregar a mensagem');
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
          {message}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600">
          Servidor Node.js com Express rodando junto com Next.js
        </p>
      </div>
    </div>
  );
}
