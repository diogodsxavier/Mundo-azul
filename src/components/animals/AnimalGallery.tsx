import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import Modal from '../shared/Modal';
import { motion } from 'framer-motion';

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  imageUrl: string;
  habitat: string;
  funFact: string;
  conservationStatus: string;
}

const animalsData = [
  { "id": 1, "name": "Baleia Jubarte", "scientificName": "Megaptera novaeangliae", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/350px-Humpback_Whale_underwater_shot.jpg", "habitat": "Oceanos Globais", "funFact": "Suas canções complexas podem durar até 20 minutos!", "conservationStatus": "Pouco Preocupante" },
  { "id": 2, "name": "Peixe-Palhaço", "scientificName": "Amphiprioninae", "imageUrl": "https://www.drta-archiv.de/wp-content/uploads/2021/07/1280px-Falsche_Clownfisch_Amphiprion_ocellaris1.jpg", "habitat": "Recifes de Coral", "funFact": "Vive em simbiose com anêmonas venenosas para se proteger.", "conservationStatus": "Pouco Preocupante" },
  { "id": 3, "name": "Tartaruga Marinha", "scientificName": "Chelonia mydas", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Total_internal_reflection_of_Chelonia_mydas.jpg/440px-Total_internal_reflection_of_Chelonia_mydas.jpg", "habitat": "Mares tropicais e subtropicais", "funFact": "Navegam milhares de quilômetros para voltar à praia onde nasceram para desovar.", "conservationStatus": "Ameaçada" },
  { "id": 4, "name": "Golfinho", "scientificName": "Delphinus delphis", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/DuskyDolphin.jpg", "habitat": "Oceanos ao redor do mundo", "funFact": "São mamíferos extremamente inteligentes que se comunicam com assobios e cliques.", "conservationStatus": "Pouco Preocupante" },
  { "id": 5, "name": "Tubarão Branco", "scientificName": "Carcharodon carcharias", "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Great_white_shark_south_africa.jpg", "habitat": "Águas costeiras e oceânicas", "funFact": "É um dos maiores peixes predadores, mas não costuma caçar humanos.", "conservationStatus": "Vulnerável" },
  { "id": 6, "name": "Polvo Comum", "scientificName": "Octopus vulgaris", "imageUrl": "https://i.pinimg.com/originals/07/44/2e/07442e6730fff401a27999f8c77a729f.jpg", "habitat": "Fundo do mar, recifes de coral", "funFact": "Tem três corações e sangue azul, e é mestre em camuflagem.", "conservationStatus": "Pouco Preocupante" },
  { "id": 7, "name": "Cavalo-Marinho", "scientificName": "Hippocampus", "imageUrl": "https://live.staticflickr.com/2854/10187203744_64987ecfd8_b.jpg", "habitat": "Ervas marinhas e corais", "funFact": "Na sua espécie, é o macho quem carrega os ovos e dá à luz aos filhotes.", "conservationStatus": "Vulnerável" },
  { "id": 8, "name": "Caranguejo", "scientificName": "Brachyura", "imageUrl": "https://faunanews.com.br/wp-content/uploads/2024/01/caranguejo-amarelo-Marcio-Camargo-Araujo-Joao.webp", "habitat": "Todos os oceanos, em diversas profundidades", "funFact": "Andam de lado porque suas pernas são articuladas de uma forma que torna esse movimento mais eficiente.", "conservationStatus": "Variado" },
  { "id": 9, "name": "Estrela-do-Mar", "scientificName": "Asteroidea", "imageUrl": "http://media.tumblr.com/tumblr_l8vs7l833R1qcj0q0.gif", "habitat": "Fundo do mar, de praias a grandes profundidades", "funFact": "Conseguem regenerar um braço inteiro se ele for perdido.", "conservationStatus": "Variado" },
  { "id": 10, "name": "Água-Viva", "scientificName": "Medusozoa", "imageUrl": "https://www.pbs.org/wnet/nature/files/2018/11/jeffrey-hamilton-747470-unsplash-1280x720.jpg", "habitat": "Da superfície às profundezas do oceano", "funFact": "Não têm cérebro, coração ou ossos, e são compostas por cerca de 95% de água.", "conservationStatus": "Pouco Preocupante" }
];

// Variantes para animação em cascata
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const AnimalGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const handleCardClick = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-900">Explore as Criaturas do Oceano</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {animalsData.map(animal => (
          <motion.div
            key={animal.id}
            variants={itemVariants}
            onClick={() => handleCardClick(animal)}
          >
            <AnimalCard animal={animal} />
          </motion.div>
        ))}
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedAnimal && (
          <div className="flex flex-col items-center">
            <img
              src={selectedAnimal.imageUrl}
              alt={selectedAnimal.name}
              className="w-full max-w-md h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-900 mb-2">{selectedAnimal.name}</h2>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Nome científico:</span> <span className="italic">{selectedAnimal.scientificName}</span></p>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Habitat:</span> {selectedAnimal.habitat}</p>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Status de conservação:</span> {selectedAnimal.conservationStatus}</p>
            <p className="text-blue-800 mt-2 text-center font-semibold">Curiosidade: <span className="font-normal text-gray-700">{selectedAnimal.funFact}</span></p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AnimalGallery;
 