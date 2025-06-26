import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import ProgressBar from '../shared/ProgressBar';
import { useUser } from '../../context/UserContext';

const dummyUser = {
  name: 'Marina Silva',
  level: 'Nível 5',
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

const AgentsDashboard: React.FC = () => {
  const userContext = useUser();
  const user = userContext?.user;
  const [userData] = useState(dummyUser);
  const [missions] = useState(dummyMissions);
  const [leaderboardData] = useState(dummyLeaderboard);
  const [collection] = useState(dummyCollection);
  const encyclopediaProgress = 65;

  return (
    <div className="p-4 sm:p-6 min-h-screen w-full bg-[#F8F9FA]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card de Perfil */}
        <div className="lg:col-span-4">
          <Card>
            <div className="flex items-center gap-4">
              <img
                src="/logo-mundo-azul.png"
                alt="Logo Mundo Azul"
                className="w-16 h-16 object-contain rounded-full bg-[#4A90E2]"
              />
              <div className="flex-1">
                <div className="font-bold text-2xl truncate break-all">{user?.name}</div>
                <div className="font-light text-sm text-gray-500">{userData.level}</div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-yellow-500 text-2xl">🐚</span>
                <span className="font-semibold text-lg">{userData.coins}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Card Missão Diária */}
        <div className="lg:col-span-2">
          {missions.filter(m => m.isDaily).map(mission => (
            <Card key={mission.id} className="mb-2">
              <h3 className="font-semibold text-xl mb-2">{mission.title}</h3>
              <p className="mb-4">{mission.description}</p>
              <Button variant="primary">Concluir Missão</Button>
            </Card>
          ))}
        </div>

        {/* Card Enciclopédia */}
        <div className="lg:col-span-2">
          <Card className="mb-4">
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
        <div>
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
        {missions.filter(m => !m.isDaily).map(mission => (
          <div key={mission.id}>
            <Card className="mb-2">
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
