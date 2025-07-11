import React, { useState, useEffect } from 'react';
import FlippableCard from '../shared/FlippableCard';
import { animalsData } from '../animals/AnimalGallery';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';

interface CardType {
  id: number;
  name: string;
  imageUrl: string;
  uniqueId: string;
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MemoryGame: React.FC = () => {
  const navigate = useNavigate();
  const userContext = useUser();
  const unlockAchievement = userContext?.unlockAchievement;
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(true);

  useEffect(() => {
    if (isPreviewing) {
      const timer = setTimeout(() => {
        setIsPreviewing(false);
      }, 3000); // 3 segundos de pré-visualização
      return () => clearTimeout(timer);
    }
  }, [isPreviewing]);

  // Prepara o baralho ao montar
  useEffect(() => {
    prepareDeck();
    // eslint-disable-next-line
  }, []);

  function prepareDeck() {
    const selected = animalsData.slice(0, 8);
    const duplicated = selected.flatMap((animal: any) => [
      { ...animal, uniqueId: `${animal.id}_1` },
      { ...animal, uniqueId: `${animal.id}_2` },
    ]) as CardType[];
    const shuffled = shuffle(duplicated);
    setCards(shuffled);
    setFlippedIndices([]);
    setMatchedIds([]);
    setMoves(0);
    setIsGameWon(false);
    setIsProcessing(false);
  }

  function handleCardClick(index: number) {
    if (isProcessing) return;
    if (flippedIndices.includes(index) || matchedIds.includes(cards[index].id)) return;
    if (flippedIndices.length === 2) return;
    setFlippedIndices((prev) => [...prev, index]);
  }

  // Checa se houve match
  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsProcessing(true);
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = flippedIndices;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];
      if (firstCard.id === secondCard.id) {
        setTimeout(() => {
          setMatchedIds((prev) => [...prev, firstCard.id]);
          setFlippedIndices([]);
          setIsProcessing(false);
        }, 700);
      } else {
        setTimeout(() => {
          setFlippedIndices([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
    // eslint-disable-next-line
  }, [flippedIndices]);

  // Checa vitória
  useEffect(() => {
    if (matchedIds.length === 8) {
      setIsGameWon(true);
      unlockAchievement && unlockAchievement('MEMORY_MASTER');
    }
  }, [matchedIds, unlockAchievement]);

  function restartGame() {
    prepareDeck();
  }

  return (
    <div>
      <div className="w-full max-w-2xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900">Jogo da Memória</h2>
          <span className="text-lg">Jogadas: <b>{moves}</b></span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <FlippableCard
              key={card.uniqueId}
              isFlipped={isPreviewing || flippedIndices.includes(index) || matchedIds.includes(card.id)}
              onClick={() => !isPreviewing && handleCardClick(index)}
              frontContent={
                <div className="bg-white flex flex-col items-center justify-center rounded-lg h-32 border-2 border-blue-300 w-full h-full">
                  <img
                    src={card.imageUrl}
                    alt={card.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="text-xs text-blue-900 font-semibold mt-1">{card.name}</span>
                </div>
              }
              backContent={
                <div className="w-full h-full flex items-center justify-center bg-blue-200 rounded-lg h-32 border-2 border-blue-300">
                  <img src="/logo-mundo-azul.png" alt="Logo Mundo Azul" className="w-12 h-12 opacity-80" />
                </div>
              }
            />
          ))}
        </div>
        {/* Modal de vitória */}
        {isGameWon && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <img src="/logo-mundo-azul.png" alt="Parabéns" className="w-20 h-20 mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Parabéns!</h2>
              <p className="mb-4 text-center">Você encontrou todos os pares em <b>{moves}</b> jogadas!</p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                onClick={restartGame}
              >
                Jogar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="secondary" onClick={() => navigate('/jogos')}>
          Sair do Jogo
        </Button>
      </div>
    </div>
  );
};

export default MemoryGame;
