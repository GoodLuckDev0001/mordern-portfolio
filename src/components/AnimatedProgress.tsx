import { useState, useEffect } from "react";

interface AnimatedProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export const AnimatedProgress = ({ 
  value, 
  size = 120, 
  strokeWidth = 8,
  color = "hsl(var(--success-light))"
}: AnimatedProgressProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="transform -rotate-90 transition-all duration-1000 ease-out"
        width={size}
        height={size}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="opacity-20"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-bold text-white">
          {Math.round(animatedValue)}%
        </div>
      </div>
    </div>
  );
};