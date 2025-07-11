import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlippableCardProps {
  isFlipped: boolean;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  onClick?: () => void;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ isFlipped, frontContent, backContent, onClick }) => {
  return (
    <div
      className="relative w-full h-full cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={onClick}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }} className="w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped && (
            <motion.div
              key="back"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -90 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}
              className="w-full h-full"
            >
              {backContent}
            </motion.div>
          )}
          {isFlipped && (
            <motion.div
              key="front"
              initial={{ rotateY: -90 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: 90 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden', zIndex: 2 }}
              className="w-full h-full"
            >
              {frontContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FlippableCard;
