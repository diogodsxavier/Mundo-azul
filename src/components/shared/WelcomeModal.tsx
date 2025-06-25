import React, { useState } from 'react';
import Button from './Button';

interface WelcomeModalProps {
  onSubmit: (name: string, age: number) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (name.trim() && age.trim()) {
      onSubmit(name, parseInt(age));
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">Bem-vindo(a) ao Mundo Azul!</h2>
      <p className="mb-6 text-gray-700">Para começar, diga-nos seu nome e idade.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-1 font-semibold">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="flex flex-col text-left">
          <label htmlFor="age" className="mb-1 font-semibold">Idade</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Digite sua idade"
            min={1}
            required
          />
        </div>
        <Button variant="primary" onClick={handleSubmit}>
          Começar a Explorar!
        </Button>
      </form>
    </div>
  );
};

export default WelcomeModal;
