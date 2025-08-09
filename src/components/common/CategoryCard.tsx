import React from 'react';
import { Card, CardContent } from '../ui/card';

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  productCount: number;
  image: string;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  productCount,
  image,
  onClick,
}) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <div className="flex items-center space-x-2 mb-1">
            {icon}
            <span className="font-semibold">{name}</span>
          </div>
          <p className="text-xs opacity-90">{productCount} products</p>
        </div>
      </div>
    </Card>
  );
};