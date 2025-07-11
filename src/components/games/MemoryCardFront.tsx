import React from 'react';

interface MemoryCardFrontProps {
  imageUrl: string;
}

const MemoryCardFront: React.FC<MemoryCardFrontProps> = ({ imageUrl }) => (
  <img
    src={imageUrl}
    alt="Animal marinho"
    className="w-full h-full object-cover rounded-lg"
  />
);

export default MemoryCardFront;
