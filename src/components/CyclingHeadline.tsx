import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface CyclingHeadlineProps {
  headlines: string[];
  interval?: number;
}

export const CyclingHeadline = ({ headlines, interval = 3000 }: CyclingHeadlineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === headlines.length - 1 ? 0 : prevIndex + 1
        );
        triggerConfetti();
        setIsAnimating(false);
      }, 150);
    }, interval);

    return () => clearInterval(timer);
  }, [headlines.length, interval]);

  const handleClick = () => {
    triggerConfetti();
  };

  return (
    <div 
      className="text-2xl font-bold text-white cursor-pointer select-none"
      onClick={handleClick}
    >
      <span
        className={`inline-block transition-all duration-300 ${
          isAnimating ? 'transform scale-95 opacity-50' : 'transform scale-100 opacity-100'
        }`}
      >
        {headlines[currentIndex]}
      </span>
    </div>
  );
};