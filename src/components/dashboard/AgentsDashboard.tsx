import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import ProgressBar from '../shared/ProgressBar';
import { useUser } from '../../context/UserContext';
import { Swords, Star, BookOpen, ShieldCheck, Layers, Globe2, BrainCircuit } from 'lucide-react';

const dummyUser = {
  name: 'Marina Silva',
  level: 'Nível 1',
  coins: 120,
};

const dummyMissions = [
  {
    id: 1,
    title: 'Missão Diária',
    description: 'Recolha 5 resíduos plásticos na praia.',
    isDaily: true,
  },
  {
    id: 2,
    title: 'Missão Extra',
    description: 'Identifique 3 espécies de peixes.',
    isDaily: false,
  },
  {
    id: 3,
    title: 'Missão Extra',
    description: 'Compartilhe uma curiosidade marinha.',
    isDaily: false,
  },
];

const dummyLeaderboard = [
  { name: 'Lucas', points: 320 },
  { name: 'Marina', points: 290 },
  { name: 'Sofia', points: 250 },
];

const dummyCollection = [
  { id: 1, name: 'Tartaruga', icon: '🐢' },
  { id: 2, name: 'Estrela-do-mar', icon: '⭐' },
  { id: 3, name: 'Peixe-palhaço', icon: '🐠' },
  { id: 4, name: 'Cavalo-marinho', icon: '🦄' },
];

const achievementsList = {
  FIRST_QUIZ: { name: 'Explorador Iniciante', icon: <Swords size={28} />, description: 'Complete seu primeiro quiz.' },
  PERFECT_EASY_QUIZ: { name: 'Mestre do Quiz Fácil', icon: <Star size={28} />, description: 'Acerte todas as perguntas do quiz fácil.' },
  TEN_ANIMALS: { name: 'Descobridor de Espécies', icon: <BookOpen size={28} />, description: 'Veja 10 animais diferentes na galeria.' },
  CONSERVATION_GUARDIAN: { name: 'Guardião da Conservação', icon: <ShieldCheck size={28} />, description: 'Desbloqueie a conquista de conservação.' },
  ALL_DIFFICULTIES: { name: 'Desafiante dos Mares', icon: <Layers size={28} />, description: 'Complete quizzes em todas as dificuldades.' },
  SEVEN_SEAS_VETERAN: { name: 'Veterano dos Sete Mares', icon: <Globe2 size={28} />, description: 'Desbloqueie todas as conquistas.' },
  MEMORY_MASTER: { name: 'Memória de Golfinho', icon: <BrainCircuit size={28} />, description: 'Encontre todos os pares no jogo da memória.' },
};

const AgentsDashboard: React.FC = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const fullName = user?.name || 'Explorador';
  const firstName = fullName.split(' ')[0];
  const [userData] = useState(dummyUser);
  const [missions] = useState(dummyMissions);
  const [leaderboardData] = useState(dummyLeaderboard);
  const [collection] = useState(dummyCollection);
  const encyclopediaProgress = 65;

  return (
    <div className="p-4 sm:p-6 min-h-screen w-full bg-[#F8F9FA]">
      <div className="grid grid-cols-12 gap-6 items-stretch">
        {/* Card de Perfil */}
        <div className="col-span-12 h-full">
          <Card>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <img
                  src="/logo-mundo-azul.png"
                  alt="Logo Mundo Azul"
                  className="w-16 h-16 object-contain rounded-full bg-[#4A90E2]"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800 break-all">
                    <span className="md:hidden">{firstName}</span>
                    <span className="hidden md:inline">{fullName}</span>
                  </h2>
                  <div className="font-light text-sm text-gray-500">{userData.level}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-2xl">🐚</span>
                <span className="font-semibold text-lg">{userData.coins}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Card de Conquistas */}
        <div className="col-span-12 lg:col-span-4 h-full">
          <Card>
            <h3 className="font-semibold text-xl mb-4">Minhas Medalhas</h3>
            {user?.achievements?.length === 0 ? (
              <div className="mt-2 text-center">
                <p className="text-sm text-gray-500">Nenhuma medalha conquistada ainda.</p>
                <p className="text-sm text-gray-400 mt-1">Jogue os quizzes e explore a galeria de animais para começar a sua coleção!</p>
              </div>
            ) : null}
            {user && user.achievements && user.achievements.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-2">
                {user.achievements.map((achievementId) => {
                  const data = achievementsList[achievementId];
                  return (
                    <div key={achievementId} className="flex flex-col items-center w-20">
                      <div title={data.description} className="mb-1">
                        {data.icon}
                      </div>
                      <span className="text-xs text-center font-medium">{data.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        </div>

        {/* Card Missão Diária */}
        <div className="col-span-12 lg:col-span-8 h-full">
          {missions.filter(m => m.isDaily).map(mission => (
            <Card key={mission.id} className="mb-2 h-full">
              <h3 className="font-semibold text-xl mb-2">{mission.title}</h3>
              <p className="mb-4">{mission.description}</p>
              <Button variant="primary">Concluir Missão</Button>
            </Card>
          ))}
        </div>

        {/* Card Enciclopédia */}
        <div className="col-span-12 lg:col-span-8 h-full">
          <Card className="mb-4 h-full">
            <h3 className="font-semibold text-xl mb-4">Enciclopédia Marinha</h3>
            <ProgressBar percentage={encyclopediaProgress} className="mb-4" />
            <div className="grid grid-cols-4 gap-2">
              {collection.map(item => (
                <div key={item.id} className="flex flex-col items-center">
                  <span className="text-3xl mb-1">{item.icon}</span>
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Card Ranking */}
        <div className="col-span-12 lg:col-span-4 h-full">
          <Card>
            <h3 className="font-semibold text-xl mb-4">Ranking da Expedição</h3>
            <ol className="list-decimal list-inside space-y-1">
              {leaderboardData.map((player) => (
                <li key={player.name} className="flex justify-between">
                  <span>{player.name}</span>
                  <span className="font-semibold">{player.points} pts</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        {/* Cards Missão Extra */}
        {missions.filter(m => !m.isDaily).map((mission) => (
          <div key={mission.id} className="col-span-12 lg:col-span-6 h-full">
            <Card className="mb-2 h-full">
              <h3 className="font-semibold text-lg mb-1">{mission.title}</h3>
              <p className="mb-2">{mission.description}</p>
              <Button variant="secondary">Ver Detalhes</Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsDashboard;
