import React, { useState } from 'react';
import AnimalCard from './AnimalCard';
import Modal from '../shared/Modal';
import { motion } from 'framer-motion';

interface Animal {
  id: number;
  name: string;
  imageUrl: string;
  habitat: string;
}

const animalsData: Animal[] = [
  {
    id: 1,
    name: 'Baleia Jubarte',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    habitat: 'Oceanos Globais',
  },
  {
    id: 2,
    name: 'Peixe-Palhaço',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    habitat: 'Recifes de Coral',
  },
  {
    id: 3,
    name: 'Tartaruga-Verde',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    habitat: 'Mares Tropicais',
  },
  {
    id: 4,
    name: 'Polvo',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80',
    habitat: 'Oceanos Temperados',
  },
  {
    id: 5,
    name: 'Cavalo-Marinho',
    imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    habitat: 'Águas Costeiras',
  },
  {
    id: 6,
    name: 'Estrela-do-Mar',
    imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
    habitat: 'Recifes Rochosos',
  },
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
            <p className="text-gray-700 mb-1"><span className="font-semibold">Habitat:</span> {selectedAnimal.habitat}</p>
            <p className="text-gray-600 mt-2 text-center">Curiosidades e informações detalhadas sobre o animal podem ser exibidas aqui.</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AnimalGallery;
 