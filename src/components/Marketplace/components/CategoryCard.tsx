import React from 'react';
import { Card, CardContent } from '../../Card';

export interface CategoryCardProps {
  name: string;
  count: number;
  image: string;
  onClick?: (categoryName: string) => void;
  className?: string;
}

/**
 * Reusable category card component for displaying product categories
 * Used in dashboard and category browsing sections
 */
export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  count,
  image,
  onClick,
  className = '',
}) => {
  const handleClick = () => {
    onClick?.(name);
  };

  return (
    <Card 
      className={`hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600">{count} products</p>
      </CardContent>
    </Card>
  );
};