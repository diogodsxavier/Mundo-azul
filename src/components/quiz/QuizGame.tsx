import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';


const allQuizData = {
  // --- NÍVEL FÁCIL (4-7 anos) ---
  easy: [
    {
      question: "Qual destes é o Peixe-Palhaço?",
      options: [
        "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg",
        "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg"
      ],
      correctAnswer: "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg"
    },
    {
      question: "Aponte para a Tartaruga Marinha!",
      options: [
        "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg",
        "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp"
      ],
      correctAnswer: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg"
    },
    {
      question: "Onde está o Golfinho?",
      options: [
        "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg",
        "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/350px-Humpback_Whale_underwater_shot.jpg"
      ],
      correctAnswer: "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg"
    },
    {
      question: "Qual imagem mostra um Tubarão?",
      options: [
        "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg",
        "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg",
        "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg"
      ],
      correctAnswer: "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg"
    },
    {
      question: "Encontre o Polvo!",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/350px-Humpback_Whale_underwater_shot.jpg",
        "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg",
        "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg"
      ],
      correctAnswer: "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg"
    },
    {
      question: "Qual destes é o Cavalo-Marinho?",
      options: [
        "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif",
        "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg",
        "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg"
      ],
      correctAnswer: "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg"
    },
    {
      question: "Aponte para o Caranguejo!",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg",
        "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg",
        "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp"
      ],
      correctAnswer: "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp"
    },
    {
      question: "Onde está a majestosa Baleia?",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/350px-Humpback_Whale_underwater_shot.jpg",
        "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg",
        "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg",
        "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif"
      ],
      correctAnswer: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/350px-Humpback_Whale_underwater_shot.jpg"
    },
    {
      question: "Qual destes é a Estrela-do-Mar?",
      options: [
        "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg",
        "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif",
        "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg",
        "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp"
      ],
      correctAnswer: "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif"
    },
    {
      question: "Encontre a Água-Viva!",
      options: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg",
        "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg",
        "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg"
      ],
      correctAnswer: "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg"
    }
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

// Componente auxiliar para opções de imagem
interface ImageOptionButtonProps {
  imageUrl: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

const ImageOptionButton: React.FC<ImageOptionButtonProps> = ({ imageUrl, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`border-2 rounded-lg overflow-hidden focus:outline-none transition-transform duration-200 hover:scale-105 ${className}`}
    style={{ padding: 0, background: 'none' }}
  >
    <img src={imageUrl} alt="Opção do quiz" className="w-full h-40 object-cover rounded-lg" />
  </button>
);

const QuizGame: React.FC = () => {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const navigate = useNavigate();
  const { unlockAchievement } = useUser() || {};

  const currentQuestions = difficulty ? allQuizData[difficulty] : [];

  // Função auxiliar para determinar a classe do botão de resposta
  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return 'secondary'; // Estilo padrão antes de qualquer resposta
    }

    const isCorrect = option === currentQuestions[currentQuestionIndex].correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) {
      return 'bg-green-500 text-white border-green-500'; // Resposta correta sempre fica verde
    }

    if (isSelected && !isCorrect) {
      return 'bg-red-500 text-white border-red-500'; // Resposta selecionada e errada fica vermelha
    }

    // Para opções não selecionadas após uma resposta ter sido dada
    return 'secondary opacity-50';
  };

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestions[currentQuestionIndex].correctAnswer;
    let newScore = score;
    if (isCorrect) {
      newScore++;
    }
    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    if (isLastQuestion) {
      if (unlockAchievement && difficulty === 'easy' && newScore === currentQuestions.length) {
        unlockAchievement('PERFECT_EASY_QUIZ');
      }
    }
    if (isCorrect) {
      setFeedbackMessage('Correto! 🎉');
    } else {
      setFeedbackMessage(`Quase!`);
    }
    setScore(newScore);
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
    if (unlockAchievement) {
      unlockAchievement('FIRST_QUIZ');
      if (difficulty === 'easy' && score === currentQuestions.length) {
        unlockAchievement('PERFECT_EASY_QUIZ');
      }
    }
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
            <Button
              variant="secondary"
              className="w-full text-green-600 hover:border-green-600"
              onClick={() => setDifficulty('easy')}
            >
              Fácil (4-7 anos)
            </Button>
            <Button
              variant="secondary"
              className="w-full text-blue-600 hover:border-blue-600"
              onClick={() => setDifficulty('medium')}
            >
              Médio (8-12 anos)
            </Button>
            <Button
              variant="secondary"
              className="w-full text-red-600 hover:border-red-600"
              onClick={() => setDifficulty('hard')}
            >
              Difícil (13-16 anos)
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[300px] gap-4">
        <Card className="w-full max-w-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Concluído!</h2>
          <p className="mb-6">Você acertou {score} de {currentQuestions.length} perguntas.</p>
          <Button variant="primary" onClick={restartGame}>Jogar Novamente</Button>
        </Card>
        <Button variant="secondary" onClick={() => navigate('/dashboard')}>Sair do Questionário</Button>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-center items-center min-h-[300px] gap-4">
      <Card className="w-full max-w-lg">
        <div className="mb-2 text-sm text-gray-500">Pergunta {currentQuestionIndex + 1} de {currentQuestions.length}</div>
        <h3 className="text-lg font-bold mb-4">{currentQuestion?.question}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4 items-stretch">
          {currentQuestion && currentQuestion.options && currentQuestion.options.length > 0 && (
            currentQuestion.options.map(option => {
              const isImageOption = option.startsWith('http');
              const variantClasses = getButtonClass(option);
              // Definir animação de feedback
              let motionProps = {};
              if (selectedAnswer && option === selectedAnswer) {
                if (option === currentQuestion.correctAnswer) {
                  motionProps = {
                    animate: { scale: [1, 1.05, 1], transition: { duration: 0.3 } }
                  };
                } else {
                  motionProps = {
                    animate: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.4 } }
                  };
                }
              }
              if (isImageOption) {
                return (
                  <motion.div key={option} {...motionProps} className="h-full">
                    <ImageOptionButton
                      imageUrl={option}
                      onClick={() => handleAnswerClick(option)}
                      disabled={!!selectedAnswer}
                      className={`w-full h-full ${variantClasses.startsWith('bg-') ? variantClasses : ''}`}
                    />
                  </motion.div>
                );
              }
              return (
                <motion.div key={option} {...motionProps} className="h-full">
                  <Button
                    onClick={() => handleAnswerClick(option)}
                    disabled={!!selectedAnswer}
                    className={`w-full h-full flex justify-center items-center ${variantClasses.startsWith('bg-') ? variantClasses : ''}`}
                    variant={variantClasses === 'secondary' || variantClasses.includes('opacity-50') ? 'secondary' : 'primary'}
                  >
                    {option}
                  </Button>
                </motion.div>
              );
            })
          )}
        </div>
        {feedbackMessage && (
          <div className="text-center text-lg font-semibold mt-2">
            {feedbackMessage}
          </div>
        )}
      </Card>
      <Button variant="secondary" onClick={() => navigate('/jogos')}>Sair do Questionário</Button>
    </div>
  );
};

export default QuizGame;
