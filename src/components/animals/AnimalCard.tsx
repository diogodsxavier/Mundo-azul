import React from 'react';
import { MapPin } from 'lucide-react';

interface Animal {
  id: number;
  name: string;
  imageUrl: string;
  habitat: string;
}

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="text-lg font-bold text-gray-800">{animal.name}</div>
        <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
          <MapPin size={16} className="text-gray-500" />
          {animal.habitat}
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
