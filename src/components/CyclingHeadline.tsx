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
      className="text-2xl font-extrabold text-white text-left leading-tight overflow-hidden h-[2.5em] relative"
      onClick={() => headlines.length > 1 && handleClick()}
      style={{ minHeight: '2.5em' }}
    >
      <span
        key={currentIndex}
        className="inline-block absolute left-0 w-full transition-transform duration-500 ease-in-out"
        style={{
          transform: 'translateY(0)',
          animation: 'slideUp 0.5s',
        }}
      >
        {headlines[currentIndex]}
      </span>
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};