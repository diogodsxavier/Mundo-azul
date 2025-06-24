import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const allQuizData = {
  // --- NÍVEL FÁCIL (4-7 anos) ---
  easy: [
    { question: "Qual destes é o Peixe-Palhaço?", options: ['https://source.unsplash.com/featured/?clownfish', 'https://source.unsplash.com/featured/?shark', 'https://source.unsplash.com/featured/?octopus', 'https://source.unsplash.com/featured/?turtle'], correctAnswer: 'https://source.unsplash.com/featured/?clownfish' },
    { question: "Onde está a Tartaruga Marinha?", options: ['https://source.unsplash.com/featured/?dolphin', 'https://source.unsplash.com/featured/?seaturtle', 'https://source.unsplash.com/featured/?crab', 'https://source.unsplash.com/featured/?whale'], correctAnswer: 'https://source.unsplash.com/featured/?seaturtle' },
    { question: "Aponte para o Golfinho!", options: ['https://source.unsplash.com/featured/?jellyfish', 'https://source.unsplash.com/featured/?starfish', 'https://source.unsplash.com/featured/?dolphin', 'https://source.unsplash.com/featured/?seahorse'], correctAnswer: 'https://source.unsplash.com/featured/?dolphin' },
    { question: "Qual imagem mostra um Tubarão?", options: ['https://source.unsplash.com/featured/?shark', 'https://source.unsplash.com/featured/?coralreef', 'https://source.unsplash.com/featured/?stingray', 'https://source.unsplash.com/featured/?lobster'], correctAnswer: 'https://source.unsplash.com/featured/?shark' },
    { question: "Encontre o Polvo.", options: ['https://source.unsplash.com/featured/?squid', 'https://source.unsplash.com/featured/?octopus', 'https://source.unsplash.com/featured/?shrimp', 'https://source.unsplash.com/featured/?seal'], correctAnswer: 'https://source.unsplash.com/featured/?octopus' },
    { question: "Este é um Cavalo-Marinho. Qual deles?", options: ['https://source.unsplash.com/featured/?walrus', 'https://source.unsplash.com/featured/?penguin', 'https://source.unsplash.com/featured/?seahorse', 'https://source.unsplash.com/featured/?otter'], correctAnswer: 'https://source.unsplash.com/featured/?seahorse' },
    { question: "Mostre o Caranguejo!", options: ['https://source.unsplash.com/featured/?crab', 'https://source.unsplash.com/featured/?fish', 'https://source.unsplash.com/featured/?anemone', 'https://source.unsplash.com/featured/?clam'], correctAnswer: 'https://source.unsplash.com/featured/?crab' },
    { question: "Qual destes é a majestosa Baleia?", options: ['https://source.unsplash.com/featured/?whale', 'https://source.unsplash.com/featured/?seagull', 'https://source.unsplash.com/featured/?pelican', 'https://source.unsplash.com/featured/?seaurchin'], correctAnswer: 'https://source.unsplash.com/featured/?whale' },
    { question: "Onde está a Estrela-do-Mar?", options: ['https://source.unsplash.com/featured/?eel', 'https://source.unsplash.com/featured/?starfish', 'https://source.unsplash.com/featured/?seaweed', 'https://source.unsplash.com/featured/?pufferfish'], correctAnswer: 'https://source.unsplash.com/featured/?starfish' },
    { question: "Aponte para a Água-Viva.", options: ['https://source.unsplash.com/featured/?coral', 'https://source.unsplash.com/featured/?seashell', 'https://source.unsplash.com/featured/?jellyfish', 'https://source.unsplash.com/featured/?dolphin'], correctAnswer: 'https://source.unsplash.com/featured/?jellyfish' }
  ],
  // --- NÍVEL MÉDIO (8-12 anos) ---
  medium: [
    { question: "Qual destes animais é um mamífero e não um peixe?", options: ['Tubarão-Martelo', 'Atum', 'Baleia Jubarte', 'Barracuda'], correctAnswer: 'Baleia Jubarte' },
    { question: "O que os peixes-palhaço usam para se proteger de predadores?", options: ['Conchas', 'Anêmonas venenosas', 'Buracos na areia', 'Velocidade'], correctAnswer: 'Anêmonas venenosas' },
    { question: "Quantos corações tem um polvo?", options: ['Um', 'Dois', 'Três', 'Oito'], correctAnswer: 'Três' },
    { question: "As tartarugas marinhas respiram por pulmões ou brânquias?", options: ['Brânquias', 'Pulmões', 'Ambos', 'Nenhum dos dois'], correctAnswer: 'Pulmões' },
    { question: "Qual é o maior animal do planeta Terra?", options: ['Elefante Africano', 'Tubarão-Baleia', 'Lula-Gigante', 'Baleia-Azul'], correctAnswer: 'Baleia-Azul' },
    { question: "O que é 'camuflagem' no mundo animal?", options: ['Um tipo de dança', 'Um jeito de cantar', 'Se esconder imitando o ambiente', 'Construir uma casa'], correctAnswer: 'Se esconder imitando o ambiente' },
    { question: "Cavalos-marinhos são famosos porque...", options: ['Correm muito rápido', 'O macho carrega os ovos', 'Vivem fora dágua', 'São parentes dos cavalos'], correctAnswer: 'O macho carrega os ovos' },
    { question: "Corais são animais, plantas ou rochas?", options: ['Plantas', 'Rochas', 'Animais', 'Uma mistura de todos'], correctAnswer: 'Animais' },
    { question: "Qual a principal comida das tartarugas-verdes adultas?", options: ['Peixes pequenos', 'Águas-vivas', 'Algas e plantas marinhas', 'Caranguejos'], correctAnswer: 'Algas e plantas marinhas' },
    { question: "Tubarões precisam nadar constantemente para...", options: ['Dormir', 'Respirar', 'Se aquecer', 'Encontrar amigos'], correctAnswer: 'Respirar' }
  ],
  // --- NÍVEL DIFÍCIL (13-16 anos) ---
  hard: [
    { question: "O que é 'branqueamento de corais'?", options: ['Uma técnica de pintura', 'Quando os corais perdem suas algas simbióticas devido ao estresse', 'A limpeza dos recifes', 'O envelhecimento natural dos corais'], correctAnswer: 'Quando os corais perdem suas algas simbióticas devido ao estresse' },
    { question: "Qual o papel do plâncton na cadeia alimentar marinha?", options: ['É um predador de topo', 'Serve de alimento apenas para baleias', 'É a base da maioria das cadeias alimentares marinhas', 'Ajuda na camuflagem de outros animais'], correctAnswer: 'É a base da maioria das cadeias alimentares marinhas' },
    { question: "O que é a 'Zona Abissal'?", options: ['A área mais rasa do oceano', 'Uma região sem vida marinha', 'Uma zona profunda do oceano que não recebe luz solar', 'A área de recifes de coral'], correctAnswer: 'Uma zona profunda do oceano que não recebe luz solar' },
    { question: "O fenômeno da 'biofluorescência' em animais marinhos é a capacidade de...", options: ['Brilhar no escuro por conta própria', 'Absorver luz azul e reemiti-la como outra cor', 'Mudar de cor para se camuflar', 'Gerar eletricidade'], correctAnswer: 'Absorver luz azul e reemiti-la como outra cor' },
    { question: "Qual destes gases é o principal causador da acidificação dos oceanos?", options: ['Oxigênio (O2)', 'Nitrogênio (N2)', 'Dióxido de Carbono (CO2)', 'Metano (CH4)'], correctAnswer: 'Dióxido de Carbono (CO2)' },
    { question: "Qual a diferença entre um boto e um golfinho?", options: ['Não há diferença', 'Botos vivem apenas em rios, golfinhos no mar', 'Botos são mamíferos, golfinhos são peixes', 'Golfinhos são maiores e têm focinho mais alongado'], correctAnswer: 'Golfinhos são maiores e têm focinho mais alongado' },
    { question: "O que são 'fontes hidrotermais' encontradas no fundo do mar?", options: ['Vazamentos de petróleo', 'Vulcões subaquáticos que liberam água quente e minerais', 'Piscinas naturais de água doce', 'Entradas de cavernas submarinas'], correctAnswer: 'Vulcões subaquáticos que liberam água quente e minerais' },
    { question: "A Grande Barreira de Coral está localizada na costa de qual país?", options: ['Brasil', 'África do Sul', 'Austrália', 'Japão'], correctAnswer: 'Austrália' },
    { question: "O que é um 'organismo extremófilo'?", options: ['Um animal extremamente grande', 'Um organismo que vive em condições ambientais extremas', 'Uma espécie que come de tudo', 'Um animal muito raro'], correctAnswer: 'Um organismo que vive em condições ambientais extremas' },
    { question: "Qual o propósito da 'Linha Lateral' nos peixes?", options: ['Ajuda na flutuação', 'É um órgão sensorial para detectar movimento e vibração na água', 'Serve para atrair parceiros', 'Produz veneno'], correctAnswer: 'É um órgão sensorial para detectar movimento e vibração na água' }
  ]
};

const QuizGame: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const currentQuestions = difficulty ? allQuizData[difficulty] : [];

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setFeedbackMessage('Correto! 🎉');
    } else {
      setFeedbackMessage(`Quase! A resposta certa era "${currentQuestions[currentQuestionIndex].correctAnswer}".`);
    }
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setFeedbackMessage('');
    if (currentQuestionIndex + 1 < currentQuestions.length) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setFeedbackMessage('');
    setDifficulty(null);
  };

  // Tela de seleção de dificuldade
  if (difficulty === null) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Card className="w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-6">Escolha seu Nível de Desafio</h2>
          <div className="flex flex-col gap-4">
            <Button variant="secondary" className="bg-green-200 text-green-800 hover:bg-green-300" onClick={() => setDifficulty('easy')}>
              Fácil (4-7 anos)
            </Button>
            <Button variant="secondary" className="bg-yellow-200 text-yellow-800 hover:bg-yellow-300" onClick={() => setDifficulty('medium')}>
              Médio (8-12 anos)
            </Button>
            <Button variant="secondary" className="bg-red-200 text-red-800 hover:bg-red-300" onClick={() => setDifficulty('hard')}>
              Difícil (13-16 anos)
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <Card className="w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Concluído!</h2>
          <p className="mb-6">Você acertou {score} de {currentQuestions.length} perguntas.</p>
          <Button variant="primary" onClick={restartGame}>Jogar Novamente</Button>
        </Card>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center min-h-[300px]">
      <Card className="w-full max-w-lg">
        <div className="mb-2 text-sm text-gray-500">Pergunta {currentQuestionIndex + 1} de {currentQuestions.length}</div>
        <h3 className="text-lg font-bold mb-4">{currentQuestion.question}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {currentQuestion.options.map(option => {
            let btnClass = '';
            if (selectedAnswer) {
              if (option === selectedAnswer) {
                btnClass = option === currentQuestion.correctAnswer ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
              }
            }
            const isImage = option.startsWith('http');
            if (isImage) {
              return (
                <button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  disabled={!!selectedAnswer}
                  className={`border-2 rounded-lg overflow-hidden focus:outline-none transition-transform duration-200 hover:scale-105 ${btnClass}`}
                  style={{ padding: 0, background: 'none' }}
                >
                  <img src={option} alt="Opção do quiz" className="w-full h-28 object-cover" />
                </button>
              );
            }
            return (
              <Button
                key={option}
                variant="secondary"
                className={btnClass}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </Button>
            );
          })}
        </div>
        {feedbackMessage && (
          <div className="text-center text-lg font-semibold mt-2">
            {feedbackMessage}
          </div>
        )}
      </Card>
    </div>
  );
};

export default QuizGame;
