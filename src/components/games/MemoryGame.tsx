import React, { useState, useEffect } from 'react';
import FlippableCard from '../shared/FlippableCard';
import { animalsData } from '../animals/AnimalGallery';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import MemoryCardFront from './MemoryCardFront';

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
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-xl">
        <h1 className="text-2xl font-bold text-blue-900">Jogo da Memória</h1>
        <p className="font-bold text-lg">Jogadas: <b>{moves}</b></p>
      </div>
      {/* Tabuleiro */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-xl">
        {cards.map((card, index) => (
          <div key={card.uniqueId} className="aspect-square">
            <FlippableCard
              isFlipped={isPreviewing || flippedIndices.includes(index) || matchedIds.includes(card.id)}
              onClick={() => !isPreviewing && handleCardClick(index)}
              frontContent={<MemoryCardFront imageUrl={card.imageUrl} />}
              backContent={
                <div className="w-full h-full flex items-center justify-center bg-blue-200 rounded-lg border-2 border-blue-300">
                  <img src="/logo-mundo-azul.png" alt="Logo Mundo Azul" className="w-12 h-12 opacity-80" />
                </div>
              }
            />
          </div>
        ))}
      </div>
      {/* Botões de ação */}
      <div className="flex gap-4">
        <Button variant="primary" onClick={restartGame}>
          Reiniciar Jogo
        </Button>
        <Button variant="secondary" onClick={() => navigate('/jogos')}>
          Sair do Jogo
        </Button>
      </div>
      {/* Modal de vitória */}
      {isGameWon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <img src="/logo-mundo-azul.png" alt="Parabéns" className="w-20 h-20 mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Parabéns!</h2>
            <p className="mb-4 text-center">Você encontrou todos os pares em <b>{moves}</b> jogadas!</p>
            <Button variant="primary" onClick={restartGame}>
              Jogar Novamente
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
