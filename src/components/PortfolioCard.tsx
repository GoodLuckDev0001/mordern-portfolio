import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface PortfolioCardProps {
  children: ReactNode;
  className?: string;
  gradient?: 'blue' | 'purple' | 'orange' | 'green';
  onClick?: () => void;
  hover?: boolean;
  style?: CSSProperties;
}

export const PortfolioCard = ({ 
  children, 
  className, 
  gradient,
  onClick,
  hover = true,
  style
}: PortfolioCardProps) => {
  const gradientClass = gradient ? `bg-gradient-${gradient}` : 'bg-gradient-card';
  
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 shadow-card transition-all duration-300",
        gradientClass,
        hover && "hover:shadow-glow hover:scale-105 cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};