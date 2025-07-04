import { useState } from "react";
import confetti from "canvas-confetti";

interface CyclingHeadlineProps {
  headlines: string[];
}

export const CyclingHeadline = ({ headlines }: CyclingHeadlineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const triggerConfetti = () => {
    const colors = ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981'];
    
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      gravity: 0.8,
      scalar: 1.2,
      drift: 0
    });
  };

  const handleClick = () => {
    // Cycle to next headline
    setCurrentIndex((prevIndex) => 
      prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
    );
    
    // Trigger confetti effect
    triggerConfetti();
  };

  return (
    <div 
      className="text-lg font-bold text-white cursor-pointer select-none hover:scale-105 transition-transform duration-200"
      onClick={handleClick}
    >
      <span className="inline-block">
        {headlines[currentIndex]}
      </span>
    </div>
  );
};