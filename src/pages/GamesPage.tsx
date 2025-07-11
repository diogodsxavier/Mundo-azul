import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
import PageLayout from '../components/shared/PageLayout';

const GamesPage = () => {
  return (
    <PageLayout>
      <h1 className="text-center mb-8 text-3xl font-bold">Central de Jogos</h1>
      <div className="flex gap-8 justify-center flex-wrap">
        <Link to="/jogos/quiz" style={{ textDecoration: 'none' }}>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 min-w-[250px] max-w-xs">
            <h2 className="text-xl font-semibold mb-2">Quiz Oceânico</h2>
            <p>Teste seus conhecimentos sobre a vida marinha.</p>
          </Card>
        </Link>
        <Link to="/jogos/memoria" style={{ textDecoration: 'none' }}>
          <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 min-w-[250px] max-w-xs">
            <h2 className="text-xl font-semibold mb-2">Desafio da Memória</h2>
            <p>Encontre os pares de animais marinhos.</p>
          </Card>
        </Link>
      </div>
    </PageLayout>
  );
};

export default GamesPage;
